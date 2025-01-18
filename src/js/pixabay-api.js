const baseUrl = 'https://pixabay.com/api/';

export const fetchImages = searchedQuery => {
  return fetch(`${baseUrl}?&key=25284590-6d373146c28d5b297cc6c7db9&q=${searchedQuery}&image_type=photo&orientation=horizontal&safesearch=true`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    },
  );
}