import Image from 'next/image'
import { Slider } from './Slider'

export function Testimony() {
  return (
    <div>
      <div className="relative h-[170px] w-full">
        <Image
          className="brightness-50"
          src="/imgs/testimony/testimony_cover.jpg"
          alt="Hero"
          layout="fill"
          objectFit="cover"
        />
          <Slider />
      </div>
    </div>
  )
}
