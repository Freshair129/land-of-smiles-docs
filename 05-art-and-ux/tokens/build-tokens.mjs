// Generated CSS exporter for the Land of Smiles DTCG-style token source.
// Usage: node 05-art-and-ux/tokens/build-tokens.mjs [--check]
import {readFileSync,writeFileSync} from 'node:fs';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
const dir=dirname(fileURLToPath(import.meta.url));
function renderCss(data){
 const lines=[
"/* Generated from land-of-smiles.tokens.json by build-tokens.mjs. DO NOT hand-edit.",
"   Horror blood splatter is DECORATIVE; Cxx is EVIDENCE, not danger.",
"   C30 Confirmed must never inherit brand danger red. */"];
 const kebab=s=>s.replace(/[A-Z]/g,x=>"-"+x.toLowerCase());
 const get=path=>path.split(".").reduce((o,k)=>o&&o[k],data);
 const resolve=(path,seen=[])=>{
  if(seen.includes(path))throw Error("Circular alias: "+path);
  const tok=get(path);if(!tok||!("$value"in tok))throw Error("Missing token "+path);
  const v=tok.$value;if(typeof v==="string"&&/^\{[^{}]+\}$/.test(v))return resolve(v.slice(1,-1),[...seen,path]);
  return v;
 };
 const raw=v=>v&&typeof v==="object"&&v.colorSpace==="srgb"?v.hex:
             v&&typeof v==="object"&&typeof v.unit==="string"?v.value+v.unit:
             typeof v==="number"?String(v):Array.isArray(v)?v.map(x=>/^(system-ui|sans-serif|serif|monospace)$/.test(x)?x:'"'+x+'"').join(", "):String(v);
 const add=(name,tokenPath)=>lines.push("  --los-"+name+": "+raw(resolve(tokenPath))+";");
 for(const mode of ["dark","light"]){
  lines.push(mode==="dark"?":root, [data-los-theme=\"dark\"] {":"[data-los-theme=\"light\"] {");
  lines.push("  color-scheme: "+mode+";");
  for(const key of Object.keys(data.color.theme[mode]))add("color-"+kebab(key),"color.theme."+mode+"."+key);
  for(const key of Object.keys(data.color.surveillance[mode]))add("case-"+key.toLowerCase(),"color.surveillance."+mode+"."+key);
  for(const key of Object.keys(data.color.infectedType[mode]))add("type-"+key.toLowerCase(),"color.infectedType."+mode+"."+key);
  if(mode==="dark"){
   for(const key of Object.keys(data.color.primitive).filter(x=>x!=="$type"))add("palette-"+kebab(key),"color.primitive."+key);
   for(const key of Object.keys(data.spacing).filter(x=>x!=="$type")){
    const suffix={none:"0",xxs:"1",xs:"2",sm:"3",md:"4",lg:"6",xl:"8",xxl:"12",xxxl:"16"}[key];
    if(!suffix)throw Error("Spacing map "+key);add("space-"+suffix,"spacing."+key);
   }
   for(const key of Object.keys(data.radius).filter(x=>x!=="$type"))add("radius-"+kebab(key),"radius."+key);
   for(const key of Object.keys(data.borderWidth).filter(x=>x!=="$type"))add("border-"+kebab(key),"borderWidth."+key);
   for(const key of Object.keys(data.typography.family).filter(x=>x!=="$type"))add("font-"+key,"typography.family."+key);
   for(const key of Object.keys(data.typography.size).filter(x=>x!=="$type"))add("font-size-"+kebab(key),"typography.size."+key);
   for(const key of Object.keys(data.typography.weight).filter(x=>x!=="$type"))add("font-weight-"+kebab(key),"typography.weight."+key);
   for(const key of Object.keys(data.typography.lineHeight).filter(x=>x!=="$type"))add("line-height-"+kebab(key),"typography.lineHeight."+key);
   for(const key of Object.keys(data.motion.duration).filter(x=>x!=="$type"))add("duration-"+(key==="alertPulse"?"alert":kebab(key)),"motion.duration."+key);
   for(const key of Object.keys(data.opacity).filter(x=>x!=="$type"))add("opacity-"+kebab(key),"opacity."+key);
   for(const key of Object.keys(data.layout.size).filter(x=>x!=="$type"))add(({touchTarget:"touch-target",sidebar:"sidebar-width",contentMax:"content-max",dossierWidth:"dossier-width",cardMin:"card-min-width"})[key]||"layout-"+kebab(key),"layout.size."+key);
   for(const key of Object.keys(data.graphics.grunge).filter(x=>x!=="$type"))add("grunge-"+kebab(key),"graphics.grunge."+key);
   lines.push("  --los-type-accent: var(--los-type-vt01);");
  }
  lines.push("}","");
 }
 for(const type of ["VT00","VT01","VT02","VT03","VT04","VT05"]){
  lines.push("[data-infected-type=\""+type+"\"] { --los-type-accent: var(--los-"+(type==="VT00"?"color-text-muted":"type-"+type.toLowerCase())+"); }");
 }
 lines.push("","");
 lines.push("@media (prefers-reduced-motion: reduce) {");
 lines.push("  :root { --los-duration-fast: 0ms; --los-duration-normal: 0ms; --los-duration-slow: 0ms; --los-duration-alert: 0ms; }");
 lines.push("}");
 return lines.join("\n")+"\n";
}
export {renderCss};
if(process.argv[1] && fileURLToPath(import.meta.url)===process.argv[1]){
 const tokens=JSON.parse(readFileSync(join(dir,'land-of-smiles.tokens.json'),'utf8'));
 const result=renderCss(tokens);
 const out=join(dir,'land-of-smiles.css');
 if(process.argv.includes('--check')){
  if(readFileSync(out,'utf8')!==result){process.stderr.write('Token CSS out of sync\n');process.exit(1)}
  process.stdout.write('Token CSS matches source\n');
 }else{writeFileSync(out,result);process.stdout.write('Updated '+out+'\n')}
}
