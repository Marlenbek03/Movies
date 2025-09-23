// src/api/tvApi.js
export const getPopularTVShows = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/tv/popular?api_key=2fa8f297328a4293f06805fe0c1b915d&language=ru-RU&page=1"
  )
  const data = await response.json()
  return data
}
