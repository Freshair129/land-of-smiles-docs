// Land of Smiles / DS v1.1 design token quality gates. Node 20+, no npm dependencies.
// Run: node 05-art-and-ux/tokens/validate-tokens.mjs
import {readFileSync} from "node:fs";
import {join, dirname} from "node:path";
import {fileURLToPath} from "node:url";
import {renderCss} from "./build-tokens.mjs";

const dir=dirname(fileURLToPath(import.meta.url));
const tokens=JSON.parse(readFileSync(join(dir,"land-of-smiles.tokens.json"),"utf8"));
const css=readFileSync(join(dir,"land-of-smiles.css"),"utf8");
const componentCss=readFileSync(join(dir,"..","components.css"),"utf8");
const preview=readFileSync(join(dir,"..","design-system-preview.html"),"utf8");
const errors=[],testResults=[];
const test=(ok,what)=>{testResults.push({ok,what});if(!ok)errors.push(what);};
const entries={};
function collect(node,path=[]){
 if(node&&typeof node==="object"&&Object.hasOwn(node,"$value")){entries[path.join(".")]=node;return;}
 for(const [k,v] of Object.entries(node||{}))if(!k.startsWith("$"))collect(v,[...path,k]);
}
collect(tokens);
function resolve(path,seen=[]){
 if(seen.includes(path))throw Error("Circular token alias: "+[...seen,path].join(" > "));
 const t=entries[path];if(!t)throw Error("Unresolved token: "+path);
 const v=t.$value;
 return typeof v==="string"&&/^\{[^{}]+\}$/.test(v)?resolve(v.slice(1,-1),[...seen,path]):v;
}
const luminance=hex=>{
 const rgb=[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255);
 const linear=rgb.map(x=>x<=0.04045?x/12.92:((x+.055)/1.055)**2.4);
 return linear[0]*.2126+linear[1]*.7152+linear[2]*.0722;
};
const contrast=(a,b)=>{
 const [l1,l2]=[luminance(a),luminance(b)].sort((x,y)=>y-x);
 return (l1+.05)/(l2+.05);
};
const getHex=path=>{
 const v=resolve(path);
 if(!v||v.colorSpace!=="srgb"||!/^#[0-9A-F]{6}$/.test(v.hex))throw Error("Invalid color "+path);
 const components=[1,3,5].map(i=>Math.round(parseInt(v.hex.slice(i,i+2),16)/255*1000000)/1000000);
 if(JSON.stringify(components)!==JSON.stringify(v.components))throw Error("Mismatched sRGB components "+path);
 return v.hex;
};
test(css===renderCss(tokens),"Compiled CSS exactly matches tokens.json");
test(Object.keys(entries).length>=145,"Token registry contains full DS v1.1 set");
for(const p of Object.keys(entries)){
 try {const v=resolve(p);if(p.startsWith("color."))getHex(p);}catch(e){test(false,e.message);}
}
const checked=[];
function checkRatio(theme,fg,bg,minimum,namespace="color.theme"){
 const a=getHex(namespace+"."+theme+"."+fg),b=getHex("color.theme."+theme+"."+bg);
 const ratio=contrast(a,b);
 checked.push({theme,fg,bg,ratio:Number(ratio.toFixed(2)),target:minimum});
 test(ratio>=minimum,"WCAG "+theme+" "+fg+" vs "+bg+" >= "+minimum+" (actual "+ratio.toFixed(2)+")");
}
for(const m of ["dark","light"]){
 for(const [a,b,min] of [["textPrimary","canvas",4.5],["textSecondary","surface",4.5],["textMuted","surface",4.5],["border","surface",3],["accent","surface",4.5],["operational","surface",4.5],["focus","canvas",3],["brand","surface",4.5]]){
  checkRatio(m,a,b,min);
 }
 const txt=getHex("color.theme."+m+".accentText"),accent=getHex("color.theme."+m+".accent");
 const brandTxt=getHex("color.theme."+m+".brandText"),brand=getHex("color.theme."+m+".brand");
 test(contrast(txt,accent)>=4.5,m+" CTA text / accent contrast");
 test(contrast(brandTxt,brand)>=4.5,m+" brand text / background contrast");
 for(const [part,codes]of [["surveillance",["C00","C10","C20","C30","C40"]],["infectedType",["VT01","VT02","VT03","VT04","VT05"]]]){
  for(const code of codes)checkRatio(m,code,"surface",4.5,"color."+part);
 }
}
test(getHex("color.surveillance.dark.C30")!==(getHex("color.theme.dark.danger")),"Dark C30 confirmed is NOT a danger red");
test(getHex("color.surveillance.light.C30")!==getHex("color.theme.light.danger"),"Light C30 confirmed is NOT a danger red");
test(resolve("graphics.grunge.medicalOpacity")===0,"Medical panels have zero decorative blood-splatter opacity");
test(resolve("graphics.grunge.heroOpacity")>resolve("graphics.grunge.panelAccentOpacity"),"Horror grunge concentrated in marketing");
for(const v of ["VT01","VT02","VT03","VT04","VT05"]){
 test(css.includes('data-infected-type="'+v+'"'),"Theme supports "+v);
 test(preview.includes('data-infected-type="'+v+'"'),"Preview renders "+v);
}
for(const c of ["C00","C10","C20","C30","C40"])
 test(preview.includes('data-case="'+c+'"'),"Clinical preview includes "+c);
test(preview.includes('id="themeToggle"'),"Preview includes working theme control");
const allCssVars=new Set([css,componentCss,preview].flatMap(source=>[...source.matchAll(/--los-[\w-]+(?=\s*:)/g)].map(m=>m[0])));
for(const [section,source]of [["components",componentCss],["preview",preview]]){
 for(const m of source.matchAll(/var\((--los-[\w-]+)/g))
  if(!allCssVars.has(m[1]))test(false,section+" unbound CSS variable "+m[1]);
}
const result={status:errors.length?"FAIL":"PASS",tokenCount:Object.keys(entries).length,checks:testResults.length,errors,contrast:checked};
process.stdout.write(JSON.stringify(result,null,2)+"\n");
if(errors.length)process.exitCode=1;
