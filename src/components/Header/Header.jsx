import { IoIosSearch } from "react-icons/io"
import { BiWorld } from "react-icons/bi"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const menu = ["HOME", "MOVIE", "TV SHOW", "WEB SERIES", "PRIMIUM"]

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true })
  }, [])

  return (
    <div className='header flex justify-between items-center mt-3.5 fixed right-0 left-0'>
      {/* Logo */}
      <div className='logo flex items-center pl-[40px]' data-aos="fade-down">
        <img src="/logo.svg" alt="" />
        <h2 className="text-white ml-2">Filmagnet</h2>
      </div>

      {/* Menu */}
      <div className='menu flex' data-aos="fade-down" data-aos-delay="100">
        {menu.map((m, i) => (
          <a
            href="#"
            key={m}
            className={`text-white hover:text-[#B0DC00] px-[40px] border-solid ${(i + 1) !== menu.length ? "border-r " : ""}`}
          >
            {m}
          </a>
        ))}
      </div>

      {/* Buttons */}
      <div className='btns flex items-center' data-aos="fade-down" data-aos-delay="200">
        <button className="mr-[10px] border-r px-[10px] hover:text-[white]">
          <IoIosSearch />
        </button>
        <div className="flex items-center mr-[20px]">
          <span className="text-[#B0DC00] mr-[10px]">
            <BiWorld />
          </span>
          <select className="bg-transparent text-white">
            <option>EN</option>
            <option>RU</option>
          </select>
        </div>
        <button className="flex text-[white] bg-[#242424] gap-[7px] items-center py-[2px] px-[12px] rounded-[24px] border border-[#B0DC00] mr-[20px] hover:bg-[#B0DC00] transform hover:text-[#242424]">
          SIGN IN
        </button>
      </div>
    </div>
  )
}

export default Header
