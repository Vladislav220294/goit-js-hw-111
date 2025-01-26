import axios from 'axios'
const baseUrl = 'https://pixabay.com/api/';

export const fetchImages = (searchedQuery, currentPage) => {
//   const axiosOptions = {
//     params: {
//       q: searchedQuery,
//       page: 1,
//       per_page: 15,
//       image_type: photo,   
//       orientation: horizontal,
//       safesearch : true,
      
// }
//   };
  return axios.get(`${baseUrl}?&key=25284590-6d373146c28d5b297cc6c7db9&q=${searchedQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${currentPage}&per_page=15`);
  
}
