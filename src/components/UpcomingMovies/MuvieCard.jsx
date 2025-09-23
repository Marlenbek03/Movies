import React from 'react'
import { IoMdTime } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

const MuvieCard = ({ title, poster, releaseDate, rating }) => {
  return (
    <div className='relative w-[250px] bg-[#1c1c1c] rounded-[12px] overflow-hidden shadow-lg group hover:scale-105 transition-transform'>
      {/* Poster */}
      <div className='w-full mb-[15px] relative'>
        <img 
          src={poster} 
          alt={title} 
          className="rounded-[8px] w-full h-[350px] object-cover" 
        />

        {/* Gradient overlay (hover) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Content */}
      <div className='flex justify-between px-3 pb-3'>
        <div>
          <h4 className='text-[18px] mb-[10px] text-white line-clamp-1'>{title}</h4>
          <span className='border border-[#B0DC00] text-[#B0DC00] px-[5px] py-[2px] text-[12px] rounded'>
            HD
          </span>
        </div>
        <div>
          <h4 className='text-[#B0DC00] text-right mb-[10px]'>
            {releaseDate?.split("-")[0]}
          </h4>
          <p className='flex gap-[8px] text-[13px] text-gray-300'>
            <span className='flex items-center gap-[3px]'>
              <IoMdTime className='text-[#B0DC00]' /> 130m
            </span>
            <span className='flex items-center gap-[3px]'>
              <IoIosStarOutline className='text-[#B0DC00]' /> {rating?.toFixed(1)}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default MuvieCard
