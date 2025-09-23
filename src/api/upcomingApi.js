// export const getUpcomingMovies = async () => {
//     const response = await fetch(
//         "https://api.themoviedb.org/3/movie/upcoming?api_key=2fa8f297328a4293f06805fe0c1b915d&language=ru-RU&page=1"
//     );
//     const data = await response.json();
//     console.log(data);
//     return data;
// };


const API_KEY = "2fa8f297328a4293f06805fe0c1b915d"
const BASE_URL = "https://api.themoviedb.org/3"

// Upcoming Movies
export const getUpcomingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ru-RU&page=1`
  )
  return response.json()
}

// Popular TV Shows
export const getPopularTVShows = async () => {
  const response = await fetch(
    `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=ru-RU&page=1`
  )
  return response.json()
}

// Anime (Animation жанры + Anime keyword)
export const getAnime = async () => {
  const response = await fetch(
    `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ru-RU&page=1&with_genres=16&with_keywords=210024`
  )
  return response.json()
}
