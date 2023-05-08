import React from 'react'
import Form  from '../utils/form/Form'

function NewReceipt () {
    const inputReceipts = [
        {
            label: 'Ordenado Médio (Agregado) ',
            name: 'ordenadoMedio',
            placeholder: 'Insira o seu ordenado liquido',
            type: 'text'
        },
        {
            label: 'Susídios / Horas Extras (p/ mês)',
            name: 'subsidio',
            placeholder: 'Indique os valores dos subsidios',
            type: 'text'
        },
        {
            label: 'Caso possua algum valor extra, insira:',
            name: 'outros',
            placeholder: 'Valor liquido extra',
            type: 'text'
        },
    ]

  return (
    <div>
        <Form
            inputs={inputReceipts}
            category="receipts"
        />
    </div>
  )
}

export default NewReceipt