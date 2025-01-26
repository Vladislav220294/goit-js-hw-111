import{a as L,i as c,S as g}from"./assets/vendor-Dpd1z_xS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const h=r=>`<li class="gallery-item">
  <a class="gallery-link" href="${r.largeImageURL}">
    <img
      class="gallery-image"
      src="${r.previewURL}"
      alt="${r.tags}"
    />
    <div class="gallery-image-description">
              <p>Likes: ${r.likes}</p>
              <p>Views: ${r.views}</p>
              <p>Comments: ${r.comments}</p>
              <p>Downloads: ${r.downloads}</p>
          </div>
  </a>
</li>
`,v="https://pixabay.com/api/",f=(r,e)=>L.get(`${v}?&key=25284590-6d373146c28d5b297cc6c7db9&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=15`),y=document.querySelector(".feedback-form"),n=document.querySelector(".gallery"),i=document.querySelector(".load-more-btn"),o=document.querySelector(".loader");o.style.display="none";let d=1,u="";const b=async r=>{try{if(n.innerHTML="",r.preventDefault(),u=r.currentTarget.elements.text.value.trim(),u===""){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML="",y.reset(),o.style.display="none";return}o.style.display="flex",d=1,i.classList.add("is-hidden");const{data:e}=await f(u,d);if(console.log(e),e.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML="",y.reset(),o.style.display="none";return}e.hits.length===15&&(i.classList.remove("is-hidden"),i.addEventListener("click",p));const l=e.hits.map(a=>h(a)).join("");n.innerHTML=l,y.reset(),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),o.style.display="none",i.addEventListener("click",p)}catch(e){e.message==="404"&&c.error({title:"Error",message:"Error"})}};y.addEventListener("submit",b);function E(){const r=document.querySelector(".gallery"),{height:e}=r.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}const p=async r=>{try{o.style.display="flex",d++;const{data:e}=await f(u,d),l=e.hits.map(a=>h(a)).join("");n.insertAdjacentHTML("beforeend",l),o.style.display="none",new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),E(),(d*15>=e.totalHits||e.hits.length<15)&&(i.classList.add("is-hidden"),i.removeEventListener("click",p),c.info({title:"End of results",message:"We're sorry, but you've reached the end of search results."}))}catch(e){e.message==="404"&&c.error({title:"Error",message:"Error"})}};
//# sourceMappingURL=index.js.map
