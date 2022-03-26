import { Container } from "./styles";
import { Texto } from "./Texto";
import { Picture } from "../assets/Picture";

export function Sobre() {
  return (
    <Container>
      <Texto />
      <Picture src="/imgs/sobre/img_sobre.jpg" />
    </Container>
  )
}
