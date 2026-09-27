export function trackEvent(name,data={}){
  if(typeof window==="undefined") return;
  try{
    const key="outfits_here_analytics";
    const events=JSON.parse(localStorage.getItem(key)||"[]");
    events.push({name,data,time:new Date().toISOString()});
    localStorage.setItem(key,JSON.stringify(events.slice(-1000)));
  }catch(e){}
}