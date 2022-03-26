import React from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'


export function CortesClassicos() {
  const { windowWidth } = useWindowSize()

  return (
    <div className="w-full p-4">
      <span className="block text-xs text-white 2xl:text-lg">Lista de Cortes</span>
      <strong className="text-lg text-barber-shop-orange 2xl:text-3xl">
        Cortes Clássicos
      </strong>
      <hr className="my-2 w-full border-barber-shop-orange" />
      <table className="w-full table-auto text-sm 2xl:text-lg">
        <tbody>
          <tr>
            <td className=" text-white">Corte Simples</td>
            <td className="text-right font-semibold text-barber-shop-orange">
              R$ 40,00
            </td>
          </tr>
          <tr>
            <td className=" text-white">Corte Simples</td>
            <td className="text-right font-semibold text-barber-shop-orange">
              R$ 40,00
            </td>
          </tr>
          <tr>
            <td className=" text-white">Corte Simples</td>
            <td className="text-right font-semibold text-barber-shop-orange">
              R$ 40,00
            </td>
          </tr>
          <tr>
            <td className=" text-white">Corte Simples</td>
            <td className="text-right  font-semibold text-barber-shop-orange">
              R$ 40,00
            </td>
          </tr>
          <tr>
            <td className=" text-white">Corte Simples</td>
            <td className="text-right font-semibold text-barber-shop-orange">
              R$ 40,00
            </td>
          </tr>
          <tr>
            <td className=" text-white">Corte Simples</td>
            <td className="text-right font-semibold text-barber-shop-orange">
              R$ 40,00
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
