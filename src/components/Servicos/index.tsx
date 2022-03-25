import { Servico } from "./Servico";
import { Container } from "./styles";
import Image from 'next/image'



export function Servicos() {
  return (
    <Container>
      <div className="bg-barber-shop-orange w-10 h-1 rounded-full"></div>
      <h4 className="text-white font-bold text-base text-center mt-2">Nossos Serviços</h4>
      <h3 className="text-barber-shop-orange text-center font-bold text-xl">Conheça as especialidades da casa</h3>
      <div className="flex flex-wrap justify-evenly mt-8 gap-4">
        <Servico
        src="/imgs/services/tesoura.svg"
        titulo={"Cabelo"}
        descricao={"Corte de cabelo com ou sem barba, com ou sem tratamento especial."}
        />
        <Servico
        src="/imgs/services/navalha.svg"
        titulo={"Bigode"}
        descricao={"Corte de cabelo com ou sem barba, com ou sem tratamento especial."}
        />
        <Servico
        src="/imgs/services/cabide.svg"
        titulo={"Lavagem"}
        descricao={"Corte de cabelo com ou sem barba, com ou sem tratamento especial."}
        />
        <Servico
        src="/imgs/services/cadeira.svg"
        titulo={"Pintura"}
        descricao={"Corte de cabelo com ou sem barba, com ou sem tratamento especial."}
        />
      </div>
    </Container>
    
  )
}
