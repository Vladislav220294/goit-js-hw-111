import{i as u,S as m}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y=r=>`<li class="gallery-item">
  <a class="gallery-link" href="${r.largeImageURL}">
    <img
      class="gallery-image"
      src="${r.webformatURL}"
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
`,d="https://pixabay.com/api/",p=r=>fetch(`${d}?&key=25284590-6d373146c28d5b297cc6c7db9&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}),n=document.querySelector(".feedback-form"),l=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";const f=r=>{l.innerHTML="",r.preventDefault();const s=r.currentTarget.elements.text.value.trim();if(s===""){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l.innerHTML="",n.reset(),a.style.display="none";return}a.style.display="flex",p(s).then(o=>{if(console.log(o),o.hits.length===0){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l.innerHTML="",n.reset(),a.style.display="none";return}const i=o.hits.map(e=>y(e)).join("");l.innerHTML=i,n.reset(),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),a.style.display="none"}).catch(o=>{o.message==="404"&&u.error({title:"Error",message:"Error"})})};n.addEventListener("submit",f);
//# sourceMappingURL=index.js.map
