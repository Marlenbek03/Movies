// src/api/animeApi.js
export const getAnime = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/tv?api_key=2fa8f297328a4293f06805fe0c1b915d&language=ru-RU&page=1&with_genres=16&with_original_language=ja"
  )
  const data = await response.json()
  return data
}
