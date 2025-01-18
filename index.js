import{i as u,S as y}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m=o=>`<li class="gallery-item">
  <a class="gallery-link" href="${o.largeImageURL}">
    <img
      class="gallery-image"
      src="${o.previewURL}"
      alt="${o.tags}"
    />
  </a>
</li>
`,d="https://pixabay.com/api/",f=o=>fetch(`${d}?&key=25284590-6d373146c28d5b297cc6c7db9&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}),l=document.querySelector(".feedback-form"),i=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";const g=o=>{i.innerHTML="",o.preventDefault();const t=o.currentTarget.elements.text.value.trim();if(t===""){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),i.innerHTML="",l.reset(),a.style.display="none";return}a.style.display="flex",f(t).then(s=>{if(s.hits.length===0){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),i.innerHTML="",l.reset(),a.style.display="none";return}const n=s.hits.map(e=>m(e)).join("");i.innerHTML=n,l.reset(),new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),a.style.display="none"}).catch(s=>{s==="404"&&alert("error")})};l.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
