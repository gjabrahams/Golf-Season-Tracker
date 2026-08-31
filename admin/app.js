const STORAGE_KEY = 'golfSeasonTrackerV5';

const initialData = {"players":["Hein","Gersh","Louis","Anrich","Danie","John","Barry","Dewald D","Kevin","Faf","Marius","Paul","Hilmi","Matthew","Ronnie","Hanre","Gerhard","Matt"],"courses":["Kuilsrivier","Metropolitan","Milnerton","Devonvale","King David GC","Langebaan","Strand","Stellenbosch","Rondebosch","Bellville"],"oppositions":["Covid","Rough Riders","Super 6","Titans","Legal Mulligans","JAGG","Black Knights"],"matches":[{"season":2026,"course":"Kuilsrivier","date":"2026-01-25","opposition":"Covid","player":"Hein","points":32,"type":"BB","result":"W","cart":"Y"},{"season":2026,"course":"Metropolitan","date":"2026-09-20","opposition":"Legal Mulligans","player":"Hein","points":24,"type":"BB","result":"W","cart":"Y"},{"season":2026,"course":"Milnerton","date":"2026-03-22","opposition":"Super 6","player":"Hein","points":27,"type":"BB","result":"L","cart":"N"},{"season":2026,"course":"Devonvale","date":"2026-04-12","opposition":"Titans","player":"Hein","points":26,"type":"BB","result":"L","cart":"Y"},{"season":2026,"course":"King David GC","date":"2026-05-31","opposition":"Legal Mulligans","player":"Hein","points":26,"type":"BB","result":"L","cart":"Y"},{"season":2026,"course":"Kuilsrivier","date":"2026-01-25","opposition":"Covid","player":"Gersh","points":28,"type":"BB","result":"W","cart":"Y"},{"season":2026,"course":"Metropolitan","date":"2026-09-20","opposition":"Legal Mulligans","player":"Gersh","points":31,"type":"S","result":"L","cart":"Y"},{"season":2026,"course":"Milnerton","date":"2026-03-22","opposition":"Super 6","player":"Gersh","points":28,"type":"S","result":"L","cart":"Y"},{"season":2026,"course":"Devonvale","date":"2026-04-12","opposition":"Titans","player":"Gersh","points":27,"type":"BB","result":"D","cart":"Y"},{"season":2026,"course":"King David GC","date":"2026-05-31","opposition":"Legal Mulligans","player":"Gersh","points":19,"type":"BB","result":"L","cart":"Y"},{"season":2026,"course":"Langebaan","date":"2026-07-26","opposition":"Rough Riders","player":"Gersh","points":29,"type":"BB","result":"D","cart":"N"},{"season":2026,"course":"Strand","date":"2026-08-30","opposition":"Covid","player":"Gersh","points":31,"type":"S","result":"L","cart":"Y"},{"season":2026,"course":"Kuilsrivier","date":"2026-01-25","opposition":"Covid","player":"Louis","points":24,"type":"S","result":"L","cart":"N"},{"season":2026,"course":"Metropolitan","date":"2026-09-20","opposition":"Legal Mulligans","player":"Louis","points":31,"type":"S","result":"L","cart":"Y"},{"season":2026,"course":"Milnerton","date":"2026-03-22","opposition":"Super 6","player":"Louis","points":36,"type":"S","result":"W","cart":"Y"},{"season":2026,"course":"Devonvale","date":"2026-04-12","opposition":"Titans","player":"Louis","points":31,"type":"S","result":"L","cart":"N"},{"season":2026,"course":"King David GC","date":"2026-05-31","opposition":"Legal Mulligans","player":"Louis","points":34,"type":"S","result":"W","cart":"N"},{"season":2026,"course":"Langebaan","date":"2026-07-26","opposition":"Rough Riders","player":"Louis","points":30,"type":"S","result":"L","cart":"N"},{"season":2026,"course":"Strand","date":"2026-08-30","opposition":"Covid","player":"Louis","points":31,"type":"S","result":"L","cart":"Y"},{"season":2026,"course":"Kuilsrivier","date":"2026-01-25","opposition":"Covid","player":"Anrich","points":27,"type":"S","result":"L","cart":"N"},{"season":2026,"course":"Metropolitan","date":"2026-09-20","opposition":"Legal Mulligans","player":"Anrich","points":38,"type":"BB","result":"W","cart":"N"},{"season":2026,"course":"Milnerton","date":"2026-03-22","opposition":"Super 6","player":"Anrich","points":27,"type":"BB","result":"L","cart":"N"},{"season":2026,"course":"Devonvale","date":"2026-04-12","opposition":"Titans","player":"Anrich","points":29,"type":"S","result":"L","cart":"N"},{"season":2026,"course":"King David GC","date":"2026-05-31","opposition":"Legal Mulligans","player":"Anrich","points":30,"type":"BB","result":"L","cart":"N"},{"season":2026,"course":"Langebaan","date":"2026-07-26","opposition":"Rough Riders","player":"Anrich","points":41,"type":"BB","result":"W","cart":"N"},{"season":2026,"course":"Strand","date":"2026-08-30","opposition":"Covid","player":"Anrich","points":35,"type":"BB","result":"W","cart":"N"},{"season":2026,"course":"Kuilsrivier","date":"2026-01-25","opposition":"Covid","player":"Danie","points":18,"type":"BB","result":"L","cart":"N"},{"season":2026,"course":"Metropolitan","date":"2026-09-20","opposition":"Legal Mulligans","player":"Danie","points":33,"type":"BB","result":"W","cart":"N"},{"season":2026,"course":"King David GC","date":"2026-05-31","opposition":"Legal Mulligans","player":"Danie","points":31,"type":"BB","result":"L","cart":"N"},{"season":2026,"course":"Langebaan","date":"2026-07-26","opposition":"Rough Riders","player":"Danie","points":30,"type":"BB","result":"W","cart":"N"},{"season":2026,"course":"Strand","date":"2026-08-30","opposition":"Covid","player":"Danie","points":23,"type":"BB","result":"L","cart":"N"},{"season":2026,"course":"Kuilsrivier","date":"2026-01-25","opposition":"Covid","player":"John","points":26,"type":"BB","result":"L","cart":"N"},{"season":2026,"course":"Metropolitan","date":"2026-09-20","opposition":"Legal Mulligans","player":"John","points":28,"type":"BB","result":"W","cart":"Y"},{"season":2026,"course":"Milnerton","date":"2026-03-22","opposition":"Super 6","player":"John","points":20,"type":"BB","result":"L","cart":"Y"},{"season":2026,"course":"Devonvale","date":"2026-04-12","opposition":"Titans","player":"John","points":24,"type":"BB","result":"D","cart":"Y"},{"season":2026,"course":"King David GC","date":"2026-05-31","opposition":"Legal Mulligans","player":"John","points":35,"type":"S","result":"W","cart":"N"},{"season":2026,"course":"Strand","date":"2026-08-30","opposition":"Covid","player":"John","points":28,"type":"BB","result":"L","cart":"N"},{"season":2026,"course":"Milnerton","date":"2026-03-22","opposition":"Super 6","player":"Barry","points":24,"type":"BB","result":"L","cart":"Y"},{"season":2026,"course":"Langebaan","date":"2026-07-26","opposition":"Rough Riders","player":"Dewald D","points":38,"type":"BB","result":"D","cart":"N"},{"season":2026,"course":"Langebaan","date":"2026-07-26","opposition":"Rough Riders","player":"Kevin","points":34,"type":"S","result":"W","cart":"N"},{"season":2026,"course":"Strand","date":"2026-08-30","opposition":"Covid","player":"Faf","points":27,"type":"BB","result":"WL","cart":"N"},{"season":2026,"course":"Devonvale","date":"2026-04-12","opposition":"Titans","player":"Marius","points":21,"type":"BB","result":"L","cart":"Y"},{"season":2025,"course":"Metropolitan","date":"2025-01-26","opposition":"Covid","player":"Hein","points":35,"type":"S","result":"L","cart":"Y"},{"season":2025,"course":"Kuilsrivier","date":"2025-02-23","opposition":"JAGG","player":"Hein","points":24,"type":"S","result":"L","cart":"Y"},{"season":2025,"course":"Devonvale","date":"2025-04-13","opposition":"Super 6","player":"Hein","points":27,"type":"BB","result":"L","cart":"Y"},{"season":2025,"course":"Strand","date":"2025-06-01","opposition":"Black Knights","player":"Hein","points":26,"type":"BB","result":"L","cart":"Y"},{"season":2025,"course":"Metropolitan","date":"2025-06-29","opposition":"Covid","player":"Hein","points":33,"type":"BB","result":"W","cart":"N"},{"season":2025,"course":"Milnerton","date":"2025-07-27","opposition":"JAGG","player":"Hein","points":28,"type":"BB","result":"W","cart":"Y"},{"season":2025,"course":"Bellville","date":"2025-09-28","opposition":"Black Knights","player":"Hein","points":35,"type":"BB","result":"W","cart":"Y"},{"season":2025,"course":"Stellenbosch","date":"2025-10-12","opposition":"Super 6","player":"Hein","points":35,"type":"BB","result":"W","cart":"N"},{"season":2025,"course":"Rondebosch","date":"2025-11-30","opposition":"Titans","player":"Hein","points":27,"type":"BB","result":"L","cart":"Y"},{"season":2025,"course":"Metropolitan","date":"2025-01-26","opposition":"Covid","player":"Louis","points":34,"type":"BB","result":"L","cart":"N"},{"season":2025,"course":"Kuilsrivier","date":"2025-02-23","opposition":"JAGG","player":"Louis","points":31,"type":"S","result":"L","cart":"Y"},{"season":2025,"course":"Devonvale","date":"2025-04-13","opposition":"Super 6","player":"Louis","points":27,"type":"S","result":"W","cart":"N"},{"season":2025,"course":"Langebaan","date":"2025-05-25","opposition":"Titans","player":"Louis","points":34,"type":"BB","result":"W","cart":"Y"},{"season":2025,"course":"Strand","date":"2025-06-01","opposition":"Black Knights","player":"Louis","points":36,"type":"BB","result":"W","cart":"Y"},{"season":2025,"course":"Milnerton","date":"2025-07-27","opposition":"JAGG","player":"Louis","points":33,"type":"S","result":"W","cart":"N"},{"season":2025,"course":"Bellville","date":"2025-09-28","opposition":"Black Knights","player":"Louis","points":38,"type":"BB","result":"W","cart":"Y"},{"season":2025,"course":"Stellenbosch","date":"2025-10-12","opposition":"Super 6","player":"Louis","points":41,"type":"BB","result":"W","cart":"N"},{"season":2025,"course":"Rondebosch","date":"2025-11-30","opposition":"Titans","player":"Louis","points":36,"type":"S","result":"W","cart":"N"},{"season":2025,"course":"Metropolitan","date":"2025-01-26","opposition":"Covid","player":"Gersh","points":36,"type":"BB","result":"W","cart":"Y"},{"season":2025,"course":"Kuilsrivier","date":"2025-02-23","opposition":"JAGG","player":"Gersh","points":32,"type":"BB","result":"W","cart":"Y"},{"season":2025,"course":"Langebaan","date":"2025-05-25","opposition":"Titans","player":"Gersh","points":36,"type":"BB","result":"W","cart":"Y"},{"season":2025,"course":"Strand","date":"2025-06-01","opposition":"Black Knights","player":"Gersh","points":34,"type":"BB","result":"W","cart":"Y"},{"season":2025,"course":"Metropolitan","date":"2025-06-29","opposition":"Covid","player":"Gersh","points":28,"type":"BB","result":"L","cart":"N"},{"season":2025,"course":"Milnerton","date":"2025-07-27","opposition":"JAGG","player":"Gersh","points":32,"type":"BB","result":"W","cart":"Y"},{"season":2025,"course":"Bellville","date":"2025-09-28","opposition":"Black Knights","player":"Gersh","points":26,"type":"S","result":"W","cart":"Y"},{"season":2025,"course":"Stellenbosch","date":"2025-10-12","opposition":"Super 6","player":"Gersh","points":36,"type":"S","result":"W","cart":"N"},{"season":2025,"course":"Rondebosch","date":"2025-11-30","opposition":"Titans","player":"Gersh","points":25,"type":"BB","result":"L","cart":"Y"},{"season":2025,"course":"Metropolitan","date":"2025-01-26","opposition":"Covid","player":"Danie","points":30,"type":"BB","result":"W","cart":"Y"},{"season":2025,"course":"Kuilsrivier","date":"2025-02-23","opposition":"JAGG","player":"Danie","points":31,"type":"BB","result":"W","cart":"Y"},{"season":2025,"course":"Devonvale","date":"2025-04-13","opposition":"Super 6","player":"Danie","points":28,"type":"BB","result":"W","cart":"N"},{"season":2025,"course":"Langebaan","date":"2025-05-25","opposition":"Titans","player":"Danie","points":34,"type":"BB","result":"W","cart":"N"},{"season":2025,"course":"Strand","date":"2025-06-01","opposition":"Black Knights","player":"Danie","points":20,"type":"S","result":"L","cart":"N"},{"season":2025,"course":"Metropolitan","date":"2025-06-29","opposition":"Covid","player":"Danie","points":32,"type":"BB","result":"W","cart":"N"},{"season":2025,"course":"Milnerton","date":"2025-07-27","opposition":"JAGG","player":"Danie","points":32,"type":"BB","result":"W","cart":"N"},{"season":2025,"course":"Bellville","date":"2025-09-28","opposition":"Black Knights","player":"Danie","points":26,"type":"S","result":"L","cart":"Y"},{"season":2025,"course":"Stellenbosch","date":"2025-10-12","opposition":"Super 6","player":"Danie","points":29,"type":"BB","result":"W","cart":"N"},{"season":2025,"course":"Rondebosch","date":"2025-11-30","opposition":"Titans","player":"Danie","points":33,"type":"BB","result":"W","cart":"N"},{"season":2025,"course":"Metropolitan","date":"2025-01-26","opposition":"Covid","player":"Anrich","points":33,"type":"BB","result":"L","cart":"N"},{"season":2025,"course":"Kuilsrivier","date":"2025-02-23","opposition":"JAGG","player":"Anrich","points":33,"type":"BB","result":"W","cart":"Y"},{"season":2025,"course":"Devonvale","date":"2025-04-13","opposition":"Super 6","player":"Anrich","points":35,"type":"BB","result":"W","cart":"N"},{"season":2025,"course":"Langebaan","date":"2025-05-25","opposition":"Titans","player":"Anrich","points":34,"type":"BB","result":"W","cart":"N"},{"season":2025,"course":"Strand","date":"2025-06-01","opposition":"Black Knights","player":"Anrich","points":28,"type":"BB","result":"L","cart":"N"},{"season":2025,"course":"Metropolitan","date":"2025-06-29","opposition":"Covid","player":"Anrich","points":30,"type":"S","result":"L","cart":"N"},{"season":2025,"course":"Milnerton","date":"2025-07-27","opposition":"JAGG","player":"Anrich","points":26,"type":"S","result":"L","cart":"N"},{"season":2025,"course":"Bellville","date":"2025-09-28","opposition":"Black Knights","player":"Anrich","points":23,"type":"BB","result":"L","cart":"Y"},{"season":2025,"course":"Stellenbosch","date":"2025-10-12","opposition":"Super 6","player":"Anrich","points":37,"type":"S","result":"W","cart":"N"},{"season":2025,"course":"Rondebosch","date":"2025-11-30","opposition":"Titans","player":"Anrich","points":34,"type":"BB","result":"W","cart":"N"},{"season":2025,"course":"Metropolitan","date":"2025-06-29","opposition":"Covid","player":"Paul","points":29,"type":"S","result":"W","cart":"N"},{"season":2025,"course":"Milnerton","date":"2025-07-27","opposition":"JAGG","player":"Paul","points":34,"type":"BB","result":"W","cart":"N"},{"season":2025,"course":"Bellville","date":"2025-09-28","opposition":"Black Knights","player":"Paul","points":27,"type":"BB","result":"L","cart":"Y"},{"season":2025,"course":"Metropolitan","date":"2025-01-26","opposition":"Covid","player":"Hilmi","points":36,"type":"S","result":"W","cart":"N"},{"season":2025,"course":"Kuilsrivier","date":"2025-02-23","opposition":"JAGG","player":"Marius","points":17,"type":"BB","result":"W","cart":"Y"},{"season":2025,"course":"Strand","date":"2025-06-01","opposition":"Black Knights","player":"Marius","points":6,"type":"S","result":"L","cart":"N"},{"season":2025,"course":"Metropolitan","date":"2025-06-29","opposition":"Covid","player":"Marius","points":24,"type":"BB","result":"L","cart":"N"},{"season":2025,"course":"Devonvale","date":"2025-04-13","opposition":"Super 6","player":"Matthew","points":21,"type":"BB","result":"L","cart":"Y"},{"season":2025,"course":"Devonvale","date":"2025-04-13","opposition":"Super 6","player":"Ronnie","points":33,"type":"S","result":"W","cart":"N"},{"season":2025,"course":"Langebaan","date":"2025-05-25","opposition":"Titans","player":"Kevin","points":32,"type":"S","result":"L","cart":"N"},{"season":2025,"course":"Langebaan","date":"2025-05-25","opposition":"Titans","player":"Hanre","points":23,"type":"S","result":"L","cart":"N"},{"season":2025,"course":"Stellenbosch","date":"2025-10-12","opposition":"Super 6","player":"Gerhard","points":21,"type":"BB","result":"W","cart":"N"},{"season":2025,"course":"Rondebosch","date":"2025-11-30","opposition":"Titans","player":"Gerhard","points":22,"type":"S","result":"L","cart":"N"}],"betterball":[{"season":2026,"course":"Kuilsrivier","date":"2026-01-25","opposition":"Covid","t1p1":"Hein","t1p2":"Gersh","t1combined":38,"t1result":"W","t2p1":"Danie","t2p2":"John","t2combined":31,"t2result":"L"},{"season":2026,"course":"Metropolitan","date":"2026-09-20","opposition":"Legal Mulligans","t1p1":"Hein","t1p2":"John","t1combined":38,"t1result":"W","t2p1":"Danie","t2p2":"Anrich","t2combined":42,"t2result":"W"},{"season":2026,"course":"Milnerton","date":"2026-03-22","opposition":"Super 6","t1p1":"John","t1p2":"Barry","t1combined":31,"t1result":"L","t2p1":"Hein","t2p2":"Anrich","t2combined":36,"t2result":"L"},{"season":2026,"course":"Devonvale","date":"2026-04-12","opposition":"Titans","t1p1":"Gersh","t1p2":"John","t1combined":34,"t1result":"D","t2p1":"Hein","t2p2":"Marius","t2combined":32,"t2result":"L"},{"season":2026,"course":"King David GC","date":"2026-05-31","opposition":"Legal Mulligans","t1p1":"Hein","t1p2":"Gersh","t1combined":34,"t1result":"L","t2p1":"Danie","t2p2":"Anrich","t2combined":41,"t2result":"L"},{"season":2026,"course":"Langebaan","date":"2026-07-26","opposition":"Rough Riders","t1p1":"Danie","t1p2":"Anrich","t1combined":46,"t1result":"W","t2p1":"Gersh","t2p2":"Dewald D","t2combined":46,"t2result":"D"},{"season":2026,"course":"Strand","date":"2026-08-30","opposition":"Covid","t1p1":"Danie","t1p2":"John","t1combined":33,"t1result":"L","t2p1":"Anrich","t2p2":"Faf","t2combined":43,"t2result":"W"},{"season":2025,"course":"Metropolitan","date":"2025-01-26","opposition":"Covid","t1p1":"Danie","t1p2":"Gersh","t1combined":0,"t1result":"W","t2p1":"","t2p2":"","t2combined":0,"t2result":""},{"season":2025,"course":"Metropolitan","date":"2025-01-26","opposition":"Covid","t1p1":"Anrich","t1p2":"Louis","t1combined":0,"t1result":"L","t2p1":"","t2p2":"","t2combined":0,"t2result":""},{"season":2025,"course":"Kuilsrivier","date":"2025-02-23","opposition":"JAGG","t1p1":"Danie","t1p2":"Marius","t1combined":0,"t1result":"W","t2p1":"","t2p2":"","t2combined":0,"t2result":""},{"season":2025,"course":"Kuilsrivier","date":"2025-02-23","opposition":"JAGG","t1p1":"Gersh","t1p2":"Anrich","t1combined":0,"t1result":"W","t2p1":"","t2p2":"","t2combined":0,"t2result":""},{"season":2025,"course":"Devonvale","date":"2025-04-13","opposition":"Super 6","t1p1":"Hein","t1p2":"Matt","t1combined":0,"t1result":"L","t2p1":"","t2p2":"","t2combined":0,"t2result":""},{"season":2025,"course":"Devonvale","date":"2025-04-13","opposition":"Super 6","t1p1":"Danie","t1p2":"Anrich","t1combined":0,"t1result":"W","t2p1":"","t2p2":"","t2combined":0,"t2result":""},{"season":2025,"course":"Langebaan","date":"2025-05-25","opposition":"Titans","t1p1":"Gersh","t1p2":"Louis","t1combined":0,"t1result":"W","t2p1":"","t2p2":"","t2combined":0,"t2result":""},{"season":2025,"course":"Langebaan","date":"2025-05-25","opposition":"Titans","t1p1":"Anrich","t1p2":"Danie","t1combined":0,"t1result":"W","t2p1":"","t2p2":"","t2combined":0,"t2result":""},{"season":2025,"course":"Strand","date":"2025-06-01","opposition":"Black Knights","t1p1":"Gersh","t1p2":"Louis","t1combined":0,"t1result":"W","t2p1":"","t2p2":"","t2combined":0,"t2result":""},{"season":2025,"course":"Strand","date":"2025-06-01","opposition":"Black Knights","t1p1":"Anrich","t1p2":"Hein","t1combined":0,"t1result":"W","t2p1":"","t2p2":"","t2combined":0,"t2result":""},{"season":2025,"course":"Metropolitan","date":"2025-06-29","opposition":"Covid","t1p1":"Hein","t1p2":"Danie","t1combined":0,"t1result":"W","t2p1":"","t2p2":"","t2combined":0,"t2result":""},{"season":2025,"course":"Metropolitan","date":"2025-06-29","opposition":"Covid","t1p1":"Gersh","t1p2":"Marius","t1combined":0,"t1result":"L","t2p1":"","t2p2":"","t2combined":0,"t2result":""},{"season":2025,"course":"Milnerton","date":"2025-07-27","opposition":"JAGG","t1p1":"Gersh","t1p2":"Hein","t1combined":0,"t1result":"W","t2p1":"","t2p2":"","t2combined":0,"t2result":""},{"season":2025,"course":"Milnerton","date":"2025-07-27","opposition":"JAGG","t1p1":"Danie","t1p2":"Paul","t1combined":0,"t1result":"W","t2p1":"","t2p2":"","t2combined":0,"t2result":""},{"season":2025,"course":"Stellenbosch","date":"2025-10-12","opposition":"Super 6","t1p1":"Hein","t1p2":"Louis","t1combined":0,"t1result":"W","t2p1":"","t2p2":"","t2combined":0,"t2result":""},{"season":2025,"course":"Stellenbosch","date":"2025-10-12","opposition":"Super 6","t1p1":"Anrich","t1p2":"Paul","t1combined":0,"t1result":"L","t2p1":"","t2p2":"","t2combined":0,"t2result":""},{"season":2025,"course":"Rondebosch","date":"2025-11-30","opposition":"Titans","t1p1":"Anrich","t1p2":"Danie","t1combined":0,"t1result":"W","t2p1":"","t2p2":"","t2combined":0,"t2result":""},{"season":2025,"course":"Rondebosch","date":"2025-11-30","opposition":"Titans","t1p1":"Gersh","t1p2":"Hein","t1combined":0,"t1result":"L","t2p1":"","t2p2":"","t2combined":0,"t2result":""},{"season":2025,"course":"Rondebosch","date":"2025-11-30","opposition":"Titans","t1p1":"Louis","t1p2":"Gerhard","t1combined":0,"t1result":"W","t2p1":"","t2p2":"","t2combined":0,"t2result":""},{"season":2025,"course":"Rondebosch","date":"2025-11-30","opposition":"Titans","t1p1":"Hein","t1p2":"Danie","t1combined":0,"t1result":"W","t2p1":"","t2p2":"","t2combined":0,"t2result":""}]};

let state = loadState();

function loadState(){
  try{
    const saved=localStorage.getItem(STORAGE_KEY);
    if(saved){
      const obj=JSON.parse(saved);
      if(obj && Array.isArray(obj.matches) && Array.isArray(obj.betterball) &&
         Array.isArray(obj.players) && (obj.matches.length || obj.betterball.length)){
        return obj;
      }
    }
  }catch(e){}
  return structuredClone(initialData);
}
function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function esc(v){return String(v ?? '').replace(/[&<>"']/g,s=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));}
function pct(n){return `${Math.round((n||0)*100)}%`;}
function num(n,d=0){return Number.isFinite(n)?Number(n).toFixed(d):'0';}
function avg(arr){return arr.length?arr.reduce((a,b)=>a+b,0)/arr.length:0;}
function setOptions(id, values, keep=true){
  const el=document.getElementById(id);
  if(!el) return;
  const old=el.value;
  el.innerHTML=values.map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join('');
  if(keep && values.includes(old)) el.value=old;
}
function playersForSeason(season, source='matches'){
  if(season==='ALL') return [...state.players];
  const set=new Set();
  if(source==='betterball'){
    state.betterball.filter(x=>String(x.season)===String(season)).forEach(x=>{
      [x.t1p1,x.t1p2,x.t2p1,x.t2p2].forEach(p=>{if(p)set.add(p)});
    });
  }else{
    state.matches.filter(x=>String(x.season)===String(season)).forEach(x=>{if(x.player)set.add(x.player)});
  }
  return state.players.filter(p=>set.has(p));
}
function setFilteredOptions(id, values, preferred){
  const el=document.getElementById(id); if(!el) return;
  const old=preferred || el.value;
  el.innerHTML=values.map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join('');
  if(old && values.includes(old)) el.value=old;
  else if(values.length) el.value=values[0];
}
function refreshDashboardPlayers(){
  const season=document.getElementById('dashboardSeason')?.value || 'ALL';
  setFilteredOptions('dashboardPlayer',playersForSeason(season,'matches'));
}
function refreshComparePlayers(){
  const season=document.getElementById('compareSeason')?.value || 'ALL';
  const values=playersForSeason(season,'matches');
  ['cmp1','cmp2','cmp3','cmp4','cmp5','cmp6'].forEach((id,i)=>{
    const el=document.getElementById(id);
    const old=el?.value;
    const preferred=(old && values.includes(old)) ? old : values[i % Math.max(values.length,1)];
    setFilteredOptions(id,values,preferred);
  });
}
function refreshBetterballSummaryPlayers(){
  const season=document.getElementById('betterballSeason')?.value || 'ALL';
  const values=playersForSeason(season,'betterball');
  ['sumA1','sumA2','sumB1','sumB2'].forEach((id,i)=>{
    const el=document.getElementById(id);
    const old=el?.value;
    const preferred=(old && values.includes(old)) ? old : values[i % Math.max(values.length,1)];
    setFilteredOptions(id,values,preferred);
  });
}

function refreshDropdowns(){
  const pids=['mPlayer','bT1P1','bT1P2','bT2P1','bT2P2'];
  pids.forEach(id=>setOptions(id,state.players));
  ['mCourse','bCourse'].forEach(id=>setOptions(id,state.courses));
  ['mOpposition','bOpposition'].forEach(id=>setOptions(id,state.oppositions));

  const defaults={
    dashboardPlayer:'Gersh',mPlayer:'Gersh',
    bT1P1:'Hein',bT1P2:'Gersh',bT2P1:'Danie',bT2P2:'John',
    sumA1:'Hein',sumA2:'Gersh',sumB1:'Danie',sumB2:'John',
    cmp1:'Gersh',cmp2:state.players[1],cmp3:state.players[2],cmp4:state.players[3],cmp5:state.players[4],cmp6:state.players[5]
  };
  Object.entries(defaults).forEach(([id,val])=>{
    const el=document.getElementById(id);
    if(el && val && [...el.options].some(o=>o.value===val) && !el.dataset.init){
      el.value=val; el.dataset.init='1';
    }
  });
}

function seasonValues(){
  const vals=[...new Set([
    ...state.matches.map(x=>String(x.season||'')),
    ...state.betterball.map(x=>String(x.season||''))
  ].filter(Boolean))].sort((a,b)=>Number(b)-Number(a));
  return ['ALL',...vals];
}
function refreshSeasonDropdowns(){
  const vals=seasonValues();
  ['dashboardSeason','betterballSeason','compareSeason'].forEach(id=>{
    const el=document.getElementById(id); if(!el) return;
    const old=el.value || 'ALL';
    el.innerHTML=vals.map(v=>`<option value="${v}">${v==='ALL'?'All Seasons':v}</option>`).join('');
    if(vals.includes(old)) el.value=old;
  });
  refreshDashboardPlayers();
  refreshComparePlayers();
  refreshBetterballSummaryPlayers();
}

function playerStats(player, season='ALL'){
  const m=state.matches.filter(x=>x.player===player && (season==='ALL' || String(x.season)===String(season)));
  const pts=m.map(x=>Number(x.points)||0);
  const count=(res,type=null)=>m.filter(x=>x.result===res && (!type || x.type===type)).length;
  const typeCount=t=>m.filter(x=>x.type===t).length;
  const singles=typeCount('S'), bb=typeCount('BB');
  return {
    matches:m.length,
    total:pts.reduce((a,b)=>a+b,0),
    average:avg(pts),
    best:pts.length?Math.max(...pts):0,
    low:pts.length?Math.min(...pts):0,
    range:pts.length?Math.max(...pts)-Math.min(...pts):0,
    wins:count('W'), draws:count('D'), losses:count('L'),
    winPct:m.length?count('W')/m.length:0,
    drawPct:m.length?count('D')/m.length:0,
    lossPct:m.length?count('L')/m.length:0,
    singles,singlesWins:count('W','S'),singlesLosses:count('L','S'),
    singlesWinPct:singles?count('W','S')/singles:0,
    bb,bbWins:count('W','BB'),bbDraws:count('D','BB'),bbLosses:count('L','BB'),
    bbWinPct:bb?count('W','BB')/bb:0
  };
}

function seasonOptions(){
 const vals=[...new Set([
   ...STATE.matches.map(x=>String(x.season||'')),
   ...STATE.betterball.map(x=>String(x.season||''))
 ].filter(Boolean))].sort((a,b)=>Number(b)-Number(a));
 return ['ALL',...vals];
}
function fillSeasonFilters(){
 const vals=seasonOptions();
 ['seasonFilter','compareSeason','bbSeasonFilter'].forEach(id=>{
   const e=document.getElementById(id); if(!e) return;
   const old=e.value||'ALL';
   e.innerHTML=vals.map(v=>`<option value="${v}">${v==='ALL'?'All Seasons':v}</option>`).join('');
   if(vals.includes(old)) e.value=old;
 });
}
function setComparisonDefaults(){
  const ids=['cmp1','cmp2','cmp3','cmp4','cmp5','cmp6'];
  ids.forEach((id,i)=>{
    const el=document.getElementById(id); if(!el) return;
    if(!el.value && state.players[i]) el.value=state.players[i];
  });
}

function renderDashboard(){
  const p=document.getElementById('dashboardPlayer').value || state.players[0] || '';
  const season=document.getElementById('dashboardSeason')?.value || 'ALL';
  const s=playerStats(p,season);
  const cards=[
    ['Total Points',s.total],['Average Points',num(s.average,1)],['Win %',pct(s.winPct)],
    ['Draw %',pct(s.drawPct)],['Loss %',pct(s.lossPct)],['Singles',s.singles],
    ['Betterball',s.bb],['Best Points',s.best],['Points Range',s.range]
  ];
  document.getElementById('dashboardCards').innerHTML=cards.map(([l,v])=>`<div class="metric-card"><div class="label">${l}</div><div class="value">${v}</div></div>`).join('');
  document.getElementById('dashboardHistory').innerHTML=state.matches
    .filter(x=>x.player===p && (season==='ALL' || String(x.season)===String(season)))
    .map(x=>`<tr><td>${esc(x.course)}</td><td>${esc(x.date)}</td><td>${esc(x.opposition)}</td><td>${x.points??''}</td><td>${x.type}</td><td class="result-${x.result}">${x.result}</td><td>${x.cart}</td></tr>`)
    .join('') || `<tr><td colspan="7">No matches yet.</td></tr>`;
  drawBarChart('dashboardChart',['Wins','Draws','Losses'],[s.wins,s.draws,s.losses]);
}

function renderMatches(){
  const body=document.getElementById('matchesBody');
  body.innerHTML=state.matches.map((x,i)=>`
    <tr>
      <td>${x.season}</td><td>${esc(x.course)}</td><td>${esc(x.date)}</td><td>${esc(x.opposition)}</td>
      <td>${esc(x.player)}</td><td>${x.points}</td><td>${x.type}</td>
      <td class="result-${x.result}">${x.result}</td><td>${x.cart}</td>
      <td><button class="small-btn" onclick="deleteMatch(${i})">Delete</button></td>
    </tr>`).join('');
}
window.deleteMatch=function(i){
  if(confirm('Delete this match?')){state.matches.splice(i,1);saveState();renderAll();}
};

function teamKey(a,b){return [a,b].sort((x,y)=>x.localeCompare(y)).join('|');}
function renderBetterball(){
  const season=document.getElementById('betterballSeason')?.value || 'ALL';
  document.getElementById('betterballBody').innerHTML=state.betterball.filter(x=>season==='ALL' || String(x.season)===String(season)).map((x,i)=>`
    <tr>
      <td>${esc(x.course)}</td><td>${esc(x.date)}</td><td>${esc(x.opposition)}</td>
      <td>${esc(x.t1p1)} + ${esc(x.t1p2)}</td><td>${x.t1combined??''}</td><td class="result-${x.t1result}">${x.t1result}</td>
      <td>${esc(x.t2p1)} + ${esc(x.t2p2)}</td><td>${x.t2combined??''}</td><td class="result-${x.t2result}">${x.t2result}</td>
      <td><button class="small-btn" onclick="deleteBetterball(${i})">Delete</button></td>
    </tr>`).join('');
  renderTeamSummary();
}
window.deleteBetterball=function(i){
  if(confirm('Delete this betterball match?')){state.betterball.splice(i,1);saveState();renderAll();}
};

function calcTeamStats(p1,p2,season='ALL'){
  const key=teamKey(p1,p2);
  const rows=[];
  state.betterball.forEach(x=>{
    if(season!=='ALL' && String(x.season)!==String(season)) return;
    if(teamKey(x.t1p1,x.t1p2)===key) rows.push({points:Number(x.t1combined)||0,result:x.t1result});
    if(teamKey(x.t2p1,x.t2p2)===key) rows.push({points:Number(x.t2combined)||0,result:x.t2result});
  });
  const wins=rows.filter(r=>r.result==='W').length;
  const draws=rows.filter(r=>r.result==='D').length;
  const losses=rows.filter(r=>r.result==='L').length;
  const pts=rows.map(r=>r.points).filter(n=>Number.isFinite(n));
  return {matches:rows.length,wins,draws,losses,winPct:rows.length?wins/rows.length:0,drawPct:rows.length?draws/rows.length:0,lossPct:rows.length?losses/rows.length:0,avg:avg(pts),best:pts.length?Math.max(...pts):0};
}
function combinationStats(season='ALL'){
  const map=new Map();
  const add=(p1,p2,score,result)=>{
    if(!p1||!p2)return;
    const key=teamKey(p1,p2);
    if(!map.has(key))map.set(key,{p1:[p1,p2].sort()[0],p2:[p1,p2].sort()[1],played:0,w:0,d:0,l:0,total:0,best:0});
    const s=map.get(key); s.played++; s.total+=Number(score)||0; s.best=Math.max(s.best,Number(score)||0);
    if(result==='W')s.w++; else if(result==='D')s.d++; else if(result==='L')s.l++;
  };
  state.betterball.forEach(x=>{
    if(season!=='ALL' && String(x.season)!==String(season))return;
    add(x.t1p1,x.t1p2,x.t1combined,x.t1result);
    add(x.t2p1,x.t2p2,x.t2combined,x.t2result);
  });
  return [...map.values()].map(s=>({...s,winPct:s.played?s.w/s.played:0,avg:s.played?s.total/s.played:0}))
    .sort((a,b)=>b.winPct-a.winPct || b.avg-a.avg || b.best-a.best || b.played-a.played);
}
function renderBestCombinations(){
  const body=document.getElementById('bestCombinationsBody'); if(!body)return;
  const season=document.getElementById('betterballSeason')?.value || 'ALL';
  const data=combinationStats(season);
  body.innerHTML=data.map((s,i)=>`<tr><td>${i+1}</td><td><b>${esc(s.p1)} + ${esc(s.p2)}</b></td><td>${s.played}</td><td>${s.w}</td><td>${s.d}</td><td>${s.l}</td><td>${pct(s.winPct)}</td><td>${s.avg.toFixed(1)}</td><td>${s.best}</td></tr>`).join('');
}

function renderTeamSummary(){
  const a1=document.getElementById('sumA1').value,a2=document.getElementById('sumA2').value;
  const b1=document.getElementById('sumB1').value,b2=document.getElementById('sumB2').value;
  const season=document.getElementById('betterballSeason')?.value || 'ALL';
  const A=calcTeamStats(a1,a2,season), B=calcTeamStats(b1,b2,season);
  const blocks=[
    [`${a1} + ${a2}`,A],[`${b1} + ${b2}`,B]
  ];
  document.getElementById('teamSummary').innerHTML=blocks.map(([name,s])=>`
    <div class="card"><h3>${esc(name)}</h3>
      <p>Matches: <b>${s.matches}</b></p>
      <p>W / D / L: <b>${s.wins} / ${s.draws} / ${s.losses}</b></p>
      <p>Win %: <b>${pct(s.winPct)}</b></p>
      <p>Average Combined: <b>${num(s.avg,1)}</b></p>
      <p>Best Combined: <b>${s.best}</b></p>
    </div>`).join('');
}

function renderComparison(){
  const ids=['cmp1','cmp2','cmp3','cmp4','cmp5','cmp6'];
  const ps=ids.map(id=>document.getElementById(id).value);
  const season=document.getElementById('compareSeason')?.value || 'ALL';
  const stats=ps.map(p=>playerStats(p,season));
  const rows=[
    ['Matches','matches',v=>v],['Total Points','total',v=>v],['Average Points','average',v=>v.toFixed(1)],
    ['Best Points','best',v=>v],['Lowest Points','low',v=>v],['Points Range','range',v=>v],
    ['Wins','wins',v=>v],['Draws','draws',v=>v],['Losses','losses',v=>v],
    ['Win %','winPct',pct],['Draw %','drawPct',pct],['Loss %','lossPct',pct],
    ['Singles Played','singles',v=>v],['Singles Wins','singlesWins',v=>v],['Singles Losses','singlesLosses',v=>v],
    ['Singles Win %','singlesWinPct',pct],['Betterball Played','bb',v=>v],['Betterball Wins','bbWins',v=>v],
    ['Betterball Draws','bbDraws',v=>v],['Betterball Losses','bbLosses',v=>v],['Betterball Win %','bbWinPct',pct]
  ];
  document.getElementById('compareBody').innerHTML=rows.map(([label,key,fmt])=>
    `<tr><td><b>${label}</b></td>${stats.map(s=>`<td>${fmt(s[key])}</td>`).join('')}</tr>`
  ).join('');
}

function drawBarChart(id,labels,values){
  const c=document.getElementById(id); if(!c) return;
  const ctx=c.getContext('2d'), w=c.width, h=c.height;
  ctx.clearRect(0,0,w,h);
  const pad=40,max=Math.max(1,...values),barW=(w-pad*2)/values.length*0.55;
  ctx.font='13px Arial'; ctx.textAlign='center'; ctx.fillStyle='#222';
  values.forEach((v,i)=>{
    const x=pad+(i+.5)*(w-pad*2)/values.length;
    const bh=(h-pad*2)*(v/max);
    ctx.fillStyle='#4f8f38';ctx.fillRect(x-barW/2,h-pad-bh,barW,bh);
    ctx.fillStyle='#222';ctx.fillText(String(v),x,h-pad-bh-7);ctx.fillText(labels[i],x,h-14);
  });
}
function drawGroupedBars(id,players,datasets){
  const c=document.getElementById(id); if(!c) return;
  const ctx=c.getContext('2d'),w=c.width,h=c.height;
  ctx.clearRect(0,0,w,h);
  const labels=['Avg Pts','Win %','BB Win %'], colors=['#4f8f38','#f4b183','#9fc5e8'];
  const pad=45,max=Math.max(100,...datasets.flat()),groupW=(w-pad*2)/players.length,barW=groupW/5;
  players.forEach((p,i)=>{
    datasets[i].forEach((v,j)=>{
      const x=pad+i*groupW+groupW/2+(j-1)*barW*1.2;
      const bh=(h-pad*2)*(v/max);
      ctx.fillStyle=colors[j];ctx.fillRect(x-barW/2,h-pad-bh,barW,bh);
    });
    ctx.fillStyle='#222';ctx.textAlign='center';ctx.font='13px Arial';ctx.fillText(p,pad+i*groupW+groupW/2,h-14);
  });
  labels.forEach((l,j)=>{ctx.fillStyle=colors[j];ctx.fillRect(10,12+j*20,10,10);ctx.fillStyle='#222';ctx.textAlign='left';ctx.fillText(l,26,21+j*20);});
}

function renderLists(){
  const defs=[
    ['players','playersList','newPlayer'],
    ['courses','coursesList','newCourse'],
    ['oppositions','oppositionsList','newOpposition']
  ];
  defs.forEach(([key,id])=>{
    document.getElementById(id).innerHTML=state[key].map((v,i)=>`<span class="chip">${esc(v)} <button onclick="removeListItem('${key}',${i})">×</button></span>`).join('');
  });
}
window.removeListItem=function(key,i){
  if(confirm(`Remove "${state[key][i]}" from the list? Existing match records will not be deleted.`)){
    state[key].splice(i,1); saveState(); renderAll();
  }
};

function renderAll(){
  refreshDropdowns();
  refreshSeasonDropdowns();
  setComparisonDefaults();
  renderDashboard();
  renderMatches();
  renderBetterball();
  renderBestCombinations();
  renderComparison();
  renderLists();
}

document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active-panel'));
  btn.classList.add('active');
  document.getElementById(btn.dataset.tab).classList.add('active-panel');
}));

document.getElementById('addMatchBtn').addEventListener('click',()=>{
  const points=Number(document.getElementById('mPoints').value);
  if(!document.getElementById('mPlayer').value || !Number.isFinite(points)){alert('Select a player and enter points.');return;}
  state.matches.push({
    season:Number(document.getElementById('mSeason').value)||2026,
    course:document.getElementById('mCourse').value,
    date:document.getElementById('mDate').value,
    opposition:document.getElementById('mOpposition').value,
    player:document.getElementById('mPlayer').value,
    points,
    type:document.getElementById('mType').value,
    result:document.getElementById('mResult').value,
    cart:document.getElementById('mCart').value
  });
  document.getElementById('mPoints').value='';
  saveState();renderAll();
});

document.getElementById('addBetterballBtn').addEventListener('click',()=>{
  const p1=document.getElementById('bT1P1').value,p2=document.getElementById('bT1P2').value,p3=document.getElementById('bT2P1').value,p4=document.getElementById('bT2P2').value;
  if(!p1||!p2||!p3||!p4){alert('Select all four players.');return;}
  if(p1===p2 || p3===p4){alert('A player cannot be paired with themselves.');return;}
  state.betterball.push({
    season:Number(document.getElementById('bSeason').value)||2026,
    course:document.getElementById('bCourse').value,
    date:document.getElementById('bDate').value,
    opposition:document.getElementById('bOpposition').value,
    t1p1:p1,t1p2:p2,t1combined:Number(document.getElementById('bT1Combined').value)||0,t1result:document.getElementById('bT1Result').value,
    t2p1:p3,t2p2:p4,t2combined:Number(document.getElementById('bT2Combined').value)||0,t2result:document.getElementById('bT2Result').value
  });
  saveState();renderAll();
});

document.querySelectorAll('[data-list-add]').forEach(btn=>btn.addEventListener('click',()=>{
  const key=btn.dataset.listAdd;
  const inputId={players:'newPlayer',courses:'newCourse',oppositions:'newOpposition'}[key];
  const input=document.getElementById(inputId), value=input.value.trim();
  if(!value) return;
  if(!state[key].some(x=>x.toLowerCase()===value.toLowerCase())) state[key].push(value);
  input.value=''; saveState(); renderAll();
}));

['dashboardPlayer','sumA1','sumA2','sumB1','sumB2','cmp1','cmp2','cmp3','cmp4','cmp5','cmp6'].forEach(id=>{
  document.getElementById(id).addEventListener('change',()=>{
    if(id==='dashboardPlayer') renderDashboard();
    if(id.startsWith('sum')) renderTeamSummary();
    if(id.startsWith('cmp')) renderComparison();
  });
});
['dashboardSeason','betterballSeason','compareSeason'].forEach(id=>{
  const el=document.getElementById(id);
  if(!el) return;
  el.addEventListener('change',()=>{
    if(id==='dashboardSeason'){ refreshDashboardPlayers(); renderDashboard(); }
    if(id==='betterballSeason'){ refreshBetterballSummaryPlayers(); renderBetterball(); renderBestCombinations(); renderTeamSummary(); }
    if(id==='compareSeason'){ refreshComparePlayers(); renderComparison(); }
  });
});


function parseCsv(text){
  const rows=[]; let row=[],cell='',quoted=false;
  for(let i=0;i<text.length;i++){
    const ch=text[i];
    if(quoted){
      if(ch==='"' && text[i+1]==='"'){cell+='"';i++;}
      else if(ch==='"') quoted=false;
      else cell+=ch;
    }else{
      if(ch==='"') quoted=true;
      else if(ch===','){row.push(cell);cell='';}
      else if(ch==='\n'){row.push(cell);rows.push(row);row=[];cell='';}
      else if(ch!=='\r') cell+=ch;
    }
  }
  if(cell.length || row.length){row.push(cell);rows.push(row);}
  return rows;
}
function importCsv(text,mode='append'){
  const rows=parseCsv(text);
  if(rows.length<2) throw new Error('CSV has no data rows.');
  const norm=s=>String(s||'').trim().toLowerCase().replace(/[^a-z0-9]/g,'');
  const headers=rows[0].map(norm), idx={};
  headers.forEach((h,i)=>idx[h]=i);
  const get=(r,...names)=>{
    for(const name of names){const k=norm(name);if(k in idx)return String(r[idx[k]]??'').trim();}
    return '';
  };
  const importedMatches=[], importedBB=[];
  for(const r of rows.slice(1)){
    if(!r.some(v=>String(v).trim())) continue;
    let record=get(r,'RecordType','Record Type').toUpperCase();
    if(!record){
      record=(get(r,'Team1Player1','Team 1 Player 1','T1P1')||get(r,'Team2Player1','Team 2 Player 1','T2P1'))?'BETTERBALL':'MATCH';
    }
    if(record==='BETTERBALL' || record==='BB'){
      importedBB.push({
        season:Number(get(r,'Season','Year'))||2026,
        course:get(r,'Course','Golf Course'),
        date:get(r,'Date','Match Date'),
        opposition:get(r,'Opposition','Opponent'),
        t1p1:get(r,'Team1Player1','Team 1 Player 1','T1P1'),
        t1p2:get(r,'Team1Player2','Team 1 Player 2','T1P2'),
        t1combined:Number(get(r,'Team1Combined','Team 1 Combined','Team1 Score'))||0,
        t1result:get(r,'Team1Result','Team 1 Result','T1Result').toUpperCase(),
        t2p1:get(r,'Team2Player1','Team 2 Player 1','T2P1'),
        t2p2:get(r,'Team2Player2','Team 2 Player 2','T2P2'),
        t2combined:Number(get(r,'Team2Combined','Team 2 Combined','Team2 Score'))||0,
        t2result:get(r,'Team2Result','Team 2 Result','T2Result').toUpperCase()
      });
    }else{
      importedMatches.push({
        season:Number(get(r,'Season','Year'))||2026,
        course:get(r,'Course','Golf Course'),
        date:get(r,'Date','Match Date'),
        opposition:get(r,'Opposition','Opponent'),
        player:get(r,'Player','Player Name','Name'),
        points:Number(get(r,'Points','Pts','Stableford Points','Score'))||0,
        type:(get(r,'Type','S/BB','Format')||'S').toUpperCase(),
        result:get(r,'Result','W/L/D','Outcome').toUpperCase(),
        cart:get(r,'Cart','Cart Y/N').toUpperCase()
      });
    }
  }
  if(!importedMatches.length && !importedBB.length) throw new Error('No usable rows found.');
  if(mode==='replace'){state.matches=[];state.betterball=[];}
  state.matches.push(...importedMatches); state.betterball.push(...importedBB);

  const addUnique=(arr,v)=>{
    v=String(v||'').trim();
    if(v && !arr.some(x=>String(x).toLowerCase()===v.toLowerCase())) arr.push(v);
  };
  importedMatches.forEach(x=>{addUnique(state.players,x.player);addUnique(state.courses,x.course);addUnique(state.oppositions,x.opposition);});
  importedBB.forEach(x=>{[x.t1p1,x.t1p2,x.t2p1,x.t2p2].forEach(v=>addUnique(state.players,v));addUnique(state.courses,x.course);addUnique(state.oppositions,x.opposition);});
  saveState(); renderAll();
  return {matches:importedMatches.length,betterball:importedBB.length};
}


document.getElementById('exportJsonBtn').addEventListener('click',()=>{
  downloadText(`golf-tracker-backup-${new Date().toISOString().slice(0,10)}.json`,JSON.stringify(state,null,2),'application/json');
});
document.getElementById('importJsonInput').addEventListener('change',async e=>{
  const file=e.target.files[0]; if(!file) return;
  try{
    const obj=JSON.parse(await file.text());
    if(!obj.players || !obj.matches || !obj.betterball) throw new Error('Invalid file');
    state=obj; saveState(); renderAll(); alert('Backup imported.');
  }catch(err){alert('Could not import this backup file.');}
  e.target.value='';
});

document.getElementById('importCsvInput').addEventListener('change',async e=>{
  const file=e.target.files[0]; if(!file) return;
  try{
    const mode=document.getElementById('csvImportMode').value;
    const result=importCsv(await file.text(),mode);
    alert(`CSV imported: ${result.matches} individual rows and ${result.betterball} Betterball rows.`);
  }catch(err){
    alert('Could not import CSV: '+err.message);
  }
  e.target.value='';
});


document.getElementById('resetBtn').addEventListener('click',()=>{
  if(confirm('Reset all data to the original sample data?')){
    state=structuredClone(initialData);saveState();renderAll();
  }
});
document.getElementById('exportMatchesCsvBtn').addEventListener('click',()=>{
  const rows=[['Season','Course','Date','Opposition','Player','Points','Type','Result','Cart'],...state.matches.map(x=>[x.season,x.course,x.date,x.opposition,x.player,x.points,x.type,x.result,x.cart])];
  const csv=rows.map(r=>r.map(v=>`"${String(v??'').replace(/"/g,'""')}"`).join(',')).join('\n');
  downloadText('golf-matches.csv',csv,'text/csv');
});
function downloadText(name,text,type){
  const blob=new Blob([text],{type}),a=document.createElement('a');
  a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}

renderAll();


const VIEWER_TEMPLATE = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>Golf Season Tracker - View Only</title><style>*{box-sizing:border-box}body{margin:0;font-family:Arial,Helvetica,sans-serif;background:#f6f7f8;color:#222}header{background:#4f8f38;color:#fff;padding:18px 24px;display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap}h1{margin:0 0 4px}.badge{background:#fff;color:#2f6f25;border-radius:999px;padding:7px 12px;font-weight:700}nav{display:flex;gap:5px;background:#fff;border-bottom:1px solid #ddd;padding:8px 14px;overflow:auto}nav button{border:0;border-radius:6px;padding:9px 12px;background:#eef0f2;font-weight:700;cursor:pointer;white-space:nowrap}nav button.active{background:#4f8f38;color:#fff}main{max-width:1400px;margin:auto;padding:18px}.panel{display:none}.panel.active{display:block}.note{background:#edf7e9;border:1px solid #c8dfbd;border-radius:9px;padding:11px 14px;margin-bottom:14px}.section-head{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:14px}.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:12px;margin-bottom:18px}.card{background:#fff;border:1px solid #ddd;border-radius:10px;padding:16px}.metric .label{font-size:13px;color:#666}.metric .value{font-size:28px;font-weight:800;margin-top:5px}.grid2{display:grid;grid-template-columns:1.4fr 1fr;gap:16px}.table-wrap{overflow:auto;background:#fff;border:1px solid #ddd;border-radius:10px}table{width:100%;border-collapse:collapse;min-width:760px}th,td{padding:10px 9px;border-bottom:1px solid #eee;text-align:left}th{background:#4f8f38;color:#fff}select{padding:9px;border:1px solid #bbb;border-radius:6px;background:#fff}.result-W{background:#d9ead3}.result-D{background:#fff2cc}.result-L{background:#f4cccc}.compare-selects{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:14px}.top{margin-top:18px}canvas{max-width:100%}footer{text-align:center;color:#666;padding:24px}@media(max-width:900px){.grid2{grid-template-columns:1fr}}@media(max-width:650px){.compare-selects{grid-template-columns:1fr}}</style></head><body><header><div><h1>Golf Season Tracker</h1><div>Season results and statistics</div></div><span class=\"badge\">VIEW ONLY</span></header><nav><button class=\"active\" data-tab=\"dashboard\">Dashboard</button><button data-tab=\"betterball\">Betterball</button><button data-tab=\"comparison\">3 Player Compare</button></nav><main><div class=\"note\">This is a read-only copy. Results and lists cannot be changed from this page.</div><section id=\"dashboard\" class=\"panel active\"><div class=\"section-head\"><h2>Player Dashboard</h2><select id=\"player\"></select></div><div id=\"cards\" class=\"cards\"></div><div class=\"grid2\"><div class=\"card\"><h3>Match History</h3><div class=\"table-wrap\"><table><thead><tr><th>Course</th><th>Date</th><th>Opposition</th><th>Points</th><th>Type</th><th>Result</th></tr></thead><tbody id=\"history\"></tbody></table></div></div><div class=\"card\"><h3>Performance</h3><canvas id=\"chart\" width=\"520\" height=\"260\"></canvas></div></div></section><section id=\"betterball\" class=\"panel\"><h2>Betterball Results</h2><div class=\"table-wrap\"><table><thead><tr><th>Course</th><th>Date</th><th>Opposition</th><th>Team 1</th><th>Combined</th><th>Result</th><th>Team 2</th><th>Combined</th><th>Result</th></tr></thead><tbody id=\"bbrows\"></tbody></table></div></section><section id=\"comparison\" class=\"panel\"><h2>3 Player Comparison</h2><div class=\"compare-selects\"><select id=\"p1\"></select><select id=\"p2\"></select><select id=\"p3\"></select></div><div class=\"table-wrap\"><table><thead><tr><th>Metric</th><th id=\"n1\"></th><th id=\"n2\"></th><th id=\"n3\"></th></tr></thead><tbody id=\"compare\"></tbody></table></div></section></main><footer>Read-only Golf Season Tracker</footer><script>const STATE=__STATE_JSON__;\nfunction esc(v){return String(v??'').replace(/[&<>]/g,s=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[s]));}\nfunction pct(v){return Math.round((v||0)*100)+'%'}function avg(a){return a.length?a.reduce((x,y)=>x+y,0)/a.length:0}\nfunction stats(p,season='ALL'){const m=STATE.matches.filter(x=>x.player===p && (season==='ALL'||String(x.season)===String(season))),pts=m.map(x=>Number(x.points)||0),c=(r,t)=>m.filter(x=>x.result===r&&(!t||x.type===t)).length,tc=t=>m.filter(x=>x.type===t).length,s=tc('S'),bb=tc('BB');return{matches:m.length,total:pts.reduce((a,b)=>a+b,0),average:avg(pts),best:pts.length?Math.max(...pts):0,low:pts.length?Math.min(...pts):0,range:pts.length?Math.max(...pts)-Math.min(...pts):0,wins:c('W'),draws:c('D'),losses:c('L'),winPct:m.length?c('W')/m.length:0,drawPct:m.length?c('D')/m.length:0,lossPct:m.length?c('L')/m.length:0,singles:s,singlesWinPct:s?c('W','S')/s:0,bb,bbWinPct:bb?c('W','BB')/bb:0}}\nfunction options(id){document.getElementById(id).innerHTML=STATE.players.map(v=>'<option>'+esc(v)+'</option>').join('')}\nfunction draw(id,labels,values){const c=document.getElementById(id),x=c.getContext('2d'),w=c.width,h=c.height;x.clearRect(0,0,w,h);const p=40,m=Math.max(1,...values),bw=(w-p*2)/values.length*.55;x.font='13px Arial';x.textAlign='center';values.forEach((v,i)=>{const cx=p+(i+.5)*(w-p*2)/values.length,bh=(h-p*2)*(v/m);x.fillStyle='#4f8f38';x.fillRect(cx-bw/2,h-p-bh,bw,bh);x.fillStyle='#222';x.fillText(v,cx,h-p-bh-7);x.fillText(labels[i],cx,h-14)})}\nfunction dash(){const p=document.getElementById('player').value,s=stats(p),a=[['Total Points',s.total],['Average Points',s.average.toFixed(1)],['Win %',pct(s.winPct)],['Draw %',pct(s.drawPct)],['Loss %',pct(s.lossPct)],['Singles',s.singles],['Betterball',s.bb],['Best',s.best],['Range',s.range]];document.getElementById('cards').innerHTML=a.map(v=>'<div class=\"card metric\"><div class=\"label\">'+v[0]+'</div><div class=\"value\">'+v[1]+'</div></div>').join('');document.getElementById('history').innerHTML=STATE.matches.filter(x=>x.player===p).map(x=>'<tr><td>'+esc(x.course)+'</td><td>'+esc(x.date)+'</td><td>'+esc(x.opposition)+'</td><td>'+x.points+'</td><td>'+x.type+'</td><td class=\"result-'+x.result+'\">'+x.result+'</td></tr>').join('');draw('chart',['Wins','Draws','Losses'],[s.wins,s.draws,s.losses])}\nfunction bb(){document.getElementById('bbrows').innerHTML=STATE.betterball.map(x=>'<tr><td>'+esc(x.course)+'</td><td>'+esc(x.date)+'</td><td>'+esc(x.opposition)+'</td><td>'+esc(x.t1p1)+' + '+esc(x.t1p2)+'</td><td>'+(x.t1combined??'')+'</td><td class=\"result-'+x.t1result+'\">'+x.t1result+'</td><td>'+esc(x.t2p1)+' + '+esc(x.t2p2)+'</td><td>'+(x.t2combined??'')+'</td><td class=\"result-'+x.t2result+'\">'+x.t2result+'</td></tr>').join('')}\nfunction compare(){const ps=['p1','p2','p3'].map(id=>document.getElementById(id).value),season=document.getElementById('compareSeason')?.value||'ALL',ss=ps.map(p=>stats(p,season));['n1','n2','n3'].forEach((id,i)=>document.getElementById(id).textContent=ps[i]);const rows=[['Matches','matches',v=>v],['Total Points','total',v=>v],['Average Points','average',v=>v.toFixed(1)],['Best Points','best',v=>v],['Lowest Points','low',v=>v],['Points Range','range',v=>v],['Wins','wins',v=>v],['Draws','draws',v=>v],['Losses','losses',v=>v],['Win %','winPct',pct],['Singles Win %','singlesWinPct',pct],['Betterball Win %','bbWinPct',pct]];document.getElementById('compare').innerHTML=rows.map(r=>'<tr><td><b>'+r[0]+'</b></td>'+ss.map(s=>'<td>'+r[2](s[r[1]])+'</td>').join('')+'</tr>').join('')}\n['player','p1','p2','p3'].forEach(options);if(STATE.players.length>1)p2.value=STATE.players[1];if(STATE.players.length>2)p3.value=STATE.players[2];player.onchange=dash;p1.onchange=compare;p2.onchange=compare;p3.onchange=compare;document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{document.querySelectorAll('nav button').forEach(x=>x.classList.remove('active'));document.querySelectorAll('.panel').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.getElementById(b.dataset.tab).classList.add('active')});dash();bb();compare();</script></body></html>";
document.getElementById('createViewerBtn').addEventListener('click',()=>{
  const html = VIEWER_TEMPLATE.replace('__STATE_JSON__', JSON.stringify(state).replace(/<\/script/gi,'<\\/script'));
  downloadText('Golf_Season_Viewer.html', html, 'text/html');
});
