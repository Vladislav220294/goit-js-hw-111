import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createImageTemplate } from "./js/render-functions";
import { fetchImages } from "./js/pixabay-api";

const searchFormEl = document.querySelector('.feedback-form');
const galleryEl = document.querySelector('.gallery');
const loadMoreBtnEl = document.querySelector('.load-more-btn')
const loader = document.querySelector('.loader');
loader.style.display = 'none';
let page = 1;
let searchedQuery = '';

const onSearchFormSubmit = async event => {
  try {galleryEl.innerHTML = '';
    event.preventDefault();
     searchedQuery = event.currentTarget.elements.text.value.trim();
    if (searchedQuery === '') {
        iziToast.error({
        title: 'Error',
        message: "Sorry, there are no images matching your search query. Please try again!",
        });
        galleryEl.innerHTML = '';
        searchFormEl.reset();
        loader.style.display = 'none';
        return;
    }
    loader.style.display = 'flex';
    page = 1;
    loadMoreBtnEl.classList.add('is-hidden');
    const { data } = await fetchImages(searchedQuery, page);
    console.log(data)
    if (data.hits.length === 0) {
            iziToast.error({
        title: 'Error',
        message: "Sorry, there are no images matching your search query. Please try again!",
      });
            galleryEl.innerHTML = '';
            searchFormEl.reset();
            loader.style.display = 'none';
            return;
    }
    if (data.hits.length === 15) { 
      loadMoreBtnEl.classList.remove('is-hidden');
      loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick)
    };
        const galleryTemplate = data.hits.map(el => createImageTemplate(el)).join('');
        
        galleryEl.innerHTML = galleryTemplate; 
    
        searchFormEl.reset();
        new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 }).refresh();
    loader.style.display = 'none';
    // loadMoreBtnEl.classList.remove('is-hidden');
    loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick)
  }
  catch (error) { if (error.message === '404') {
          iziToast.error({
        title: 'Error',
        message: "Error",
      });
      } };
    
    
}
searchFormEl.addEventListener('submit', onSearchFormSubmit);

function scroll() {
  const gallery = document.querySelector('.gallery');
        const { height: cardHeight } = gallery.getBoundingClientRect();
  
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }

const  onLoadMoreBtnClick = async event => {
  try { 
    loader.style.display = 'flex';
    page++;
    const { data } = await fetchImages(searchedQuery, page);
    const galleryTemplate = data.hits.map(el => createImageTemplate(el)).join('');
    galleryEl.insertAdjacentHTML('beforeend', galleryTemplate);
    loader.style.display = 'none';
    new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 }).refresh();
    scroll();
    if (page * 15 >= data.totalHits || data.hits.length < 15) {
    loadMoreBtnEl.classList.add('is-hidden');
      loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnClick);
      iziToast.info({
          title: 'End of results',
          message: "We're sorry, but you've reached the end of search results.",
        });
  }
  }
  
  catch (error) {
if (error.message === '404') {
          iziToast.error({
        title: 'Error',
        message: "Error",
      });
      }
  }
}