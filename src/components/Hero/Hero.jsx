import { FaCalendarAlt } from "react-icons/fa"
import { FaPlay } from "react-icons/fa6"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <div
      className='hero flex justify-between items-center h-[755px]'
      style={{
        backgroundImage: "url(/banner.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <div className="w-[1400px] m-auto pt-[231px] pb-[155px]">
        <h5 className="text-[#B0DC00] mb-[8px] text-[28px]" data-aos="fade-right">
          {t("Filmagnet")}
        </h5>
        <h2 className="text-[63px] w-[600px] mb-[7px] text-white" data-aos="fade-left">
          {t("Unlimited")} <span className="text-[#B0DC00]"> {t("Entertainment")}</span>, {t("Movies")}, {t("TVs shows")}, {t("& More.")} 
        </h2>

        <div className="flex items-center mb-[47px] gap-[20px]" data-aos="fade-up">
          <button className="bg-[white] p-[2px] rounded-[4px] hover:bg-[#B0DC00]">{t("Movie")}</button>
          <span className="border border-[red] px-[5px] text-white">{t("HD")}</span>
          <span className="text-white">{t("Action, Drama")}</span>
          <p className="flex items-center">
            <span className="text-[#B0DC00]"><FaCalendarAlt /></span>
            <span className="text-white ml-1.5"> 2023</span>
          </p>
        </div>

        <button
          className="flex text-[white] bg-[#242424] gap-[7px] items-center py-[12px] px-[12px] rounded-[24px] border border-[#B0DC00] hover:bg-[#B0DC00] transform hover:text-[#242424]"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <FaPlay /> {t("PLAY NOW")}
        </button>
      </div>
    </div>
  )
}

export default Hero
