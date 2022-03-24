import Image from 'next/image'
import { MdLocationOn } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'

export function Address() {
  return (
    <div className="flex justify-center 2xl:justify-end 2xl:mr-20  w-full">
      <div className="flex items-center mr-2 2xl:mr-20 ">
        <div className="text-2xl 2xl:text-4xl"><MdLocationOn color="#FCA92C" /></div>
        <span className=" text-[9px] sm:text-xl text-gray-50">
          Av. Paulista, 527 - Pinheiros - SP
        </span>
      </div>
      <div className="flex items-center">
        <div className="text-xl 2xl:text-3xl"><IoLogoWhatsapp color="#FCA92C" /></div>
        <span className=" text-[9px] sm:text-xl text-gray-50">+ 351 910 344 904</span>
      </div>
    </div>
  )
}
