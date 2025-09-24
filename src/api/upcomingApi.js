
const API_KEY = "2fa8f297328a4293f06805fe0c1b915d"
const BASE_URL = "https://api.themoviedb.org/3"


export const getUpcomingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ru-RU&page=1`
  )
  return response.json()
}


export const getPopularTVShows = async () => {
  const response = await fetch(
    `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=ru-RU&page=1`
  )
  return response.json()
}

  
export const getAnime = async () => {
  const response = await fetch(
    `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ru-RU&page=1&with_genres=16&with_keywords=210024`
  )
  return response.json()
}
