import{f}from"./assets/vendor-2b44ac2e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d=document.querySelector("[data-start]");d.disabled=!0;const m=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),h=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");let a;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){o[0]<new Date?alert("Please choose a date in the future"):(d.disabled=!1,a=o[0],d.addEventListener("click",S))}};f("#datetime-picker",g);function S(){d.disabled=!0;let o;o=setInterval(()=>{let r=a-new Date;if(r<=0)clearInterval(o);else{const n=b(r);let i=n.seconds,e=n.minutes,t=n.hours,s=n.days;p.textContent=c(String(i)),h.textContent=c(String(e)),y.textContent=c(String(t)),m.textContent=c(String(s))}},1e3)}function b(o){const t=Math.floor(o/864e5),s=Math.floor(o%864e5/36e5),u=Math.floor(o%864e5%36e5/6e4),l=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:s,minutes:u,seconds:l}}function c(o){return o.padStart(2,"0")}
//# sourceMappingURL=commonHelpers2.js.map