import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createImageTemplate } from "./js/render-functions";
import { fetchImages } from "./js/pixabay-api";

const searchFormEl = document.querySelector('.feedback-form');
const galleryEl = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
loader.style.display = 'none';

const onSearchFormSubmit = event => {
    galleryEl.innerHTML = '';
    event.preventDefault();
    const searchedQuery = event.currentTarget.elements.text.value.trim();
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
    fetchImages(searchedQuery).then(data => {
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
        const galleryTemplate = data.hits.map(el => createImageTemplate(el)).join('');
        
        galleryEl.innerHTML = galleryTemplate; 
        
        searchFormEl.reset();
        new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 }).refresh();
        loader.style.display = 'none';
    }).catch(error => {
      if (error.message === '404') {
          iziToast.error({
        title: 'Error',
        message: "Error",
      });
      }
  })
}
searchFormEl.addEventListener('submit', onSearchFormSubmit);
