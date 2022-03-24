import Image from 'next/image'
import { MdLocationOn } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'

export function Address() {
  return (
    <div className="flex justify-center w-full space-x-2">
      <div className="flex items-center text-2xl">
        <MdLocationOn color="#FCA92C" />
        <span className="ml-2 text-xs text-gray-50">
          Av. Paulista, 527 - Pinheiros - SP
        </span>
      </div>
      <div className="flex items-center text-xl">
        <IoLogoWhatsapp color="#FCA92C" />
        <span className="ml-2 text-xs text-gray-50">+ 351 910 344 904</span>
      </div>
    </div>
  )
}
