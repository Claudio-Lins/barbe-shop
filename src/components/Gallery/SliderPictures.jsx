import Image from 'next/image';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Picture } from '../assets/Picture';

export function SliderPictures() {
  
  return (
    <div>
      <Slide>
        <div className="flex flex-col w-full">
          <Image 
            src='/imgs/gallery/img_01.jpeg'
            alt='image_01'
            width={300}
            height={300}
          />
        </div>
      </Slide>
      </div>
  )
}
