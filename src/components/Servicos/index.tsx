import { Servico } from './Servico'
import { Container } from './styles'

export function Servicos() {
  return (
    <Container>
      <div className="h-1 w-10 rounded-full bg-barber-shop-orange"></div>
      <h4 className="mt-2 text-center text-base font-bold text-white xl:text-xl">
        Nossos Serviços
      </h4>
      <h3 className="mb-8 text-center text-xl font-bold text-barber-shop-orange xl:text-3xl">
        Conheça as especialidades da casa
      </h3>
      <div className="container mt-8 flex w-full flex-wrap justify-evenly gap-4">
        <Servico
          src="/imgs/services/tesoura.svg"
          titulo={'Cabelo'}
          descricao={
            'Corte de cabelo com ou sem barba, com ou sem tratamento especial.'
          }
        />
        <Servico
          src="/imgs/services/navalha.svg"
          titulo={'Bigode'}
          descricao={
            'Corte de cabelo com ou sem barba, com ou sem tratamento especial.'
          }
        />
        <Servico
          src="/imgs/services/cabide.svg"
          titulo={'Lavagem'}
          descricao={
            'Corte de cabelo com ou sem barba, com ou sem tratamento especial.'
          }
        />
        <Servico
          src="/imgs/services/cadeira.svg"
          titulo={'Pintura'}
          descricao={
            'Corte de cabelo com ou sem barba, com ou sem tratamento especial.'
          }
        />
      </div>
    </Container>
  )
}
