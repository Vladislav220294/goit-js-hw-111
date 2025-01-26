import{a as L,i as c,S as m}from"./assets/vendor-Dpd1z_xS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const g=r=>`<li class="gallery-item">
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
`,b="https://pixabay.com/api/",h=(r,e)=>L.get(`${b}?&key=25284590-6d373146c28d5b297cc6c7db9&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=15`),y=document.querySelector(".feedback-form"),n=document.querySelector(".gallery"),d=document.querySelector(".load-more-btn"),o=document.querySelector(".loader");o.style.display="none";let l=1,u="";const v=async r=>{try{if(n.innerHTML="",r.preventDefault(),u=r.currentTarget.elements.text.value.trim(),u===""){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML="",y.reset(),o.style.display="none";return}o.style.display="flex",l=1,d.classList.add("is-hidden");const{data:e}=await h(u,l);if(console.log(e),e.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML="",y.reset(),o.style.display="none";return}l*15<e.totalHits&&(d.classList.remove("is-hidden"),d.addEventListener("click",f));const i=e.hits.map(a=>g(a)).join("");n.innerHTML=i,y.reset(),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),o.style.display="none"}catch{c.error({title:"Error",message:"Error"})}};y.addEventListener("submit",v);function E(){const r=document.querySelector(".gallery"),{height:e}=r.getBoundingClientRect();window.scrollBy({top:e*3,behavior:"smooth"})}const f=async r=>{try{o.style.display="flex",l++;const{data:e}=await h(u,l),i=e.hits.map(a=>g(a)).join("");n.insertAdjacentHTML("beforeend",i),E(),o.style.display="none",new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),(l*15>=e.totalHits||e.hits.length<15)&&(d.classList.add("is-hidden"),d.removeEventListener("click",f),c.info({title:"End of results",message:"We're sorry, but you've reached the end of search results."}))}catch{c.error({title:"Error",message:"Error"})}};
//# sourceMappingURL=index.js.map
