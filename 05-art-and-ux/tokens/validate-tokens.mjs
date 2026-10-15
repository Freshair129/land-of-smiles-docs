// Land of Smiles token validation. Node 20+; no dependencies.
// Run: node 05-art-and-ux/tokens/validate-tokens.mjs
import {readFileSync} from "node:fs";
import {fileURLToPath} from "node:url";
import {dirname,join} from "node:path";
const dir=dirname(fileURLToPath(import.meta.url));
const tree=JSON.parse(readFileSync(join(dir,"land-of-smiles.tokens.json"),"utf8"));
const css=readFileSync(join(dir,"land-of-smiles.css"),"utf8");
const assertions=[];
const assert=(condition,message)=>{if(!condition)throw Error(message);assertions.push(message);};
const collect=(node,path=[],all={})=>{
 if(node && typeof node==="object" && Object.hasOwn(node,"$value")){all[path.join(".")]=node;return all;}
 for(const [k,v]of Object.entries(node ?? {})){if(!k.startsWith("$"))collect(v,[...path,k],all)}
 return all;
};
const tokens=collect(tree);
const resolve=(path,seen=[])=>{
 assert(!seen.includes(path),"cycle "+path);
 const tok=tokens[path];
 assert(!!tok,"unknown alias "+path);
 const value=tok.$value;
 if(typeof value==="string" && /^\{[^{}]+\}$/.test(value))return resolve(value.slice(1,-1),[...seen,path]);
 return value;
};
const luminance=(hex)=>{
 const c=[1,3,5].map(i=>Number.parseInt(hex.slice(i,i+2),16)/255);
 const rgb=c.map(x=>x<=0.04045?x/12.92:((x+0.055)/1.055)**2.4);
 return .2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2];
};
const contrast=(hexA,hexB)=>{
 const a=luminance(hexA),b=luminance(hexB);
 return (Math.max(a,b)+.05)/(Math.min(a,b)+.05);
};
const getColor=path=>{
 const x=resolve(path);
 assert(x?.colorSpace==="srgb"&&/^#[0-9A-Fa-f]{6}$/.test(x?.hex??""),"bad sRGB "+path);
 const components=[1,3,5].map(i=>Math.round(parseInt(x.hex.slice(i,i+2),16)/255*1e6)/1e6);
 assert(JSON.stringify(components)===JSON.stringify(x.components),"bad components "+path);
 return x.hex;
};
for(const path of Object.keys(tokens)){
 const tok=tokens[path];
 if(typeof tok.$value==="string"&&/^\{[^{}]+\}$/.test(tok.$value))resolve(path);
 if(path.startsWith("color."))getColor(path);
}
const pairs=[
 ["dark","textPrimary","canvas",4.5],
 ["dark","textSecondary","surface",4.5],
 ["dark","border","surface",3],
 ["dark","focus","canvas",3],
 ["light","textPrimary","canvas",4.5],
 ["light","textSecondary","surface",4.5],
 ["light","border","surface",3],
 ["light","focus","canvas",3]
];
for(const [mode,fg,bg,min]of pairs){
 const a=getColor(`color.theme.${mode}.${fg}`),b=getColor(`color.theme.${mode}.${bg}`);
 assert(contrast(a,b)>=min,`low contrast ${mode}.${fg} on ${bg}: ${contrast(a,b).toFixed(2)} < ${min}`);
}
for(const mode of ["dark","light"]){
 for(const code of ["C00","C10","C20","C30","C40"]){
  const fg=getColor(`color.surveillance.${mode}.${code}`);
  const bg=getColor(`color.theme.${mode}.surface`);
  assert(contrast(fg,bg)>=4.5,`case label insufficient contrast ${mode} ${code}`);
 }
 for(const code of ["VT01","VT02","VT03","VT04","VT05"]){
  const fg=getColor(`color.infectedType.${mode}.${code}`);
  const bg=getColor(`color.theme.${mode}.surface`);
  assert(contrast(fg,bg)>=4.5,`type label insufficient contrast ${mode} ${code}`);
  assert(css.includes(`--los-type-${code.toLowerCase()}:`),`CSS missing ${code}`);
 }
}
assert(Object.keys(tokens).length>=100,"token count suspiciously low");
assert(css.includes("[data-los-theme=\"light\"]"),"light theme missing");
assert(css.includes("prefers-reduced-motion"),"motion override missing");
const contrastSummary=pairs.map(([m,f,b])=>({pair:`${m}/${f}/${b}`,ratio:+contrast(getColor(`color.theme.${m}.${f}`),getColor(`color.theme.${m}.${b}`)).toFixed(2)}));
process.stdout.write(JSON.stringify({status:"PASS",tokenCount:Object.keys(tokens).length,assertions:assertions.length,contrastSummary},null,2)+"\n");
