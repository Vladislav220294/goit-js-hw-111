import{a as L,S as v,i as d}from"./assets/vendor-Dpd1z_xS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const g=t=>`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.previewURL}"
      alt="${t.tags}"
    />
    <div class="gallery-image-description">
              <p>Likes: ${t.likes}</p>
              <p>Views: ${t.views}</p>
              <p>Comments: ${t.comments}</p>
              <p>Downloads: ${t.downloads}</p>
          </div>
  </a>
</li>
`,b="https://pixabay.com/api/",h=(t,e)=>L.get(`${b}?&key=25284590-6d373146c28d5b297cc6c7db9&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=15`),u=document.querySelector(".feedback-form"),c=document.querySelector(".gallery"),o=document.querySelector(".load-more-btn"),i=document.querySelector(".loader");i.style.display="none";let n=1,y="";const f=new v(".gallery a"),E=async t=>{try{if(c.innerHTML="",t.preventDefault(),y=t.currentTarget.elements.text.value.trim(),y===""){o.classList.add("is-hidden"),o.removeEventListener("click",m),d.error({title:"Error",message:"Please, enter the name!"}),c.innerHTML="",u.reset(),i.style.display="none";return}i.style.display="flex",n=1,o.classList.add("is-hidden");const{data:e}=await h(y,n);if(console.log(e),e.hits.length===0){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",u.reset(),o.removeEventListener("click",m),i.style.display="none";return}n*15<e.totalHits&&(o.classList.remove("is-hidden"),o.addEventListener("click",m));const a=e.hits.map(l=>g(l)).join("");c.innerHTML=a,u.reset(),f.refresh(),i.style.display="none"}catch{d.error({title:"Error",message:"Error"})}};u.addEventListener("submit",E);function w(){const t=document.querySelector(".gallery"),{height:e}=t.getBoundingClientRect();window.scrollBy({top:e*3,behavior:"smooth"})}const m=async t=>{try{i.style.display="flex",n++;const{data:e}=await h(y,n),a=e.hits.map(l=>g(l)).join("");c.insertAdjacentHTML("beforeend",a),w(),i.style.display="none",f.refresh(),(n*15>=e.totalHits||e.hits.length<15)&&(o.classList.add("is-hidden"),o.removeEventListener("click",m),d.info({title:"End of results",message:"We're sorry, but you've reached the end of search results."}))}catch{d.error({title:"Error",message:"Error"})}};
//# sourceMappingURL=index.js.map
