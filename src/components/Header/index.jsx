import { Address } from "./Address";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Container } from "./styles";

export function Header() {
  return (
    <Container className="">
      <Logo />
      <Address />
      <Menu />
    </Container>
  )
}
