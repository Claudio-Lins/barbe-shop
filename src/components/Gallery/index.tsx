import { Container } from "./styles";
import { Line } from '../assets/Line'
import { Picture } from "../assets/Picture";
import {SliderSwiper} from '../assets/SliderSwiper'

// interface GalleryProps {
//   Picture: string;
//   alt: string;
// }

export function Gallery() {
  return (
    <Container>
        <Line />
        <div className="flex flex-col justify-center items-center space-y-2 mb-4">
        <strong>Confira nossa Galeria de fotos</strong>
        <h3 className="font-bold text-barber-shop-orange text-3xl">Cabelo / Barba</h3>
        </div>
        <SliderSwiper />
    </Container>
    
  )
}
