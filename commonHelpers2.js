import{f as m,i as h}from"./assets/vendor-77e16229.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a=document.querySelector("[data-start]");a.disabled=!0;const y=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");let l;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,clickOpens:!0,onClose(o){o[0]<new Date?h.show({title:"Hey",message:"Please choose a date in the future",position:"topRight",titleColor:"white",titleSize:"24px",messageColor:"white",messageSize:"24px",backgroundColor:"#542929",color:"white"}):(a.disabled=!1,l=o[0],a.addEventListener("click",w))}},d=m("#datetime-picker",b);console.log(d);function w(){a.disabled=!0,d.config.clickOpens=!1;let o;o=setInterval(()=>{let r=l-new Date;if(r<=0)clearInterval(o);else{const n=O(r);let i=n.seconds,e=n.minutes,t=n.hours,s=n.days;S.textContent=c(String(i)),g.textContent=c(String(e)),p.textContent=c(String(t)),y.textContent=c(String(s))}},1e3)}function O(o){const t=Math.floor(o/864e5),s=Math.floor(o%864e5/36e5),u=Math.floor(o%864e5%36e5/6e4),f=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:s,minutes:u,seconds:f}}function c(o){return o.padStart(2,"0")}
//# sourceMappingURL=commonHelpers2.js.map
