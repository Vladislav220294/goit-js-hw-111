export const createImageTemplate = imageInfo => {
    return `<li class="gallery-item">
  <a class="gallery-link" href="${imageInfo.largeImageURL}">
    <img
      class="gallery-image"
      src="${imageInfo.webformatURL}"
      alt="${imageInfo.tags}"
    />
    <div class="gallery-image-description">
              <p>Likes: ${imageInfo.likes}</p>
              <p>Views: ${imageInfo.views}</p>
              <p>Comments: ${imageInfo.comments}</p>
              <p>Downloads: ${imageInfo.downloads}</p>
          </div>
  </a>
</li>
`
};