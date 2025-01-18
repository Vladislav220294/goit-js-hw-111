export const createImageTemplate = imageInfo => {
    return `<li class="gallery-item">
  <a class="gallery-link" href="${imageInfo.largeImageURL}">
    <img
      class="gallery-image"
      src="${imageInfo.previewURL}"
      alt="${imageInfo.tags}"
    />
  </a>
</li>
`
};