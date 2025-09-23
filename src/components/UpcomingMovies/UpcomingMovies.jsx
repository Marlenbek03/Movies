import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import MuvieCard from "./MuvieCard"
import { getUpcomingMovies } from "../../api/upcomingApi"
import { getPopularTVShows } from "../../api/tvApi"
import { getAnime } from "../../api/animeApi"
import AOS from "aos"
import "aos/dist/aos.css"

const filters = ["Movies", "TV Shows", "Anime"]

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([])
  const [activeFilter, setActiveFilter] = useState("Movies")

  // Инициализация AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  // Данные по фильтру
  useEffect(() => {
    const fetchData = async () => {
      let data
      if (activeFilter === "Movies") {
        data = await getUpcomingMovies()
      } else if (activeFilter === "TV Shows") {
        data = await getPopularTVShows()
      } else if (activeFilter === "Anime") {
        data = await getAnime()
      }
      setMovies(data.results || [])
      AOS.refresh() // refresh animations after DOM update
    }
    fetchData()
  }, [activeFilter])

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  }

  return (
    <div className="w-[1400px] m-auto">
      {/* Header & Filters */}
      <div
        className="mb-[48px] mt-[83px] flex flex-col md:flex-row justify-between items-start md:items-center"
        data-aos="fade-up"
      >
        <div>
          <h3 className="text-[#B0DC00] text-[17px] mb-[20px] pl-2.5">
            ONLINE STREAMING
          </h3>
          <h2 className="text-[44px] text-white">
            {activeFilter === "Movies"
              ? "Upcoming Movies"
              : activeFilter === "TV Shows"
              ? "Popular TV Shows"
              : "Japanese Anime"}
          </h2>
        </div>

        {/* Кнопкалар */}
        <div className="flex flex-wrap gap-[15px] mt-[20px] md:mt-0">
          {filters.map((btn) => {
            const isActive = activeFilter === btn
            return (
              <button
                key={btn}
                onClick={() => setActiveFilter(btn)}
                className={`
                  px-4 py-2 rounded-[24px] transition-all duration-300 transform
                  ${
                    isActive
                      ? "bg-[#B0DC00] text-[#242424] scale-105 shadow-lg"
                      : "bg-[#2E2E2EF5] text-white hover:bg-[#B0DC00] hover:text-[#242424] hover:scale-105 hover:shadow-md"
                  }
                `}
                data-aos="zoom-in"
              >
                {btn}
              </button>
            )
          })}
        </div>
      </div>

      {/* Slider */}
      {movies.length > 0 ? (
        <Slider {...sliderSettings}>
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="px-2"
            >
              <MuvieCard
                title={movie.title || movie.name}
                poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                releaseDate={movie.release_date || movie.first_air_date}
                rating={movie.vote_average}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-white text-center">No data found for {activeFilter}</p>
      )}
    </div>
  )
}

export default UpcomingMovies
