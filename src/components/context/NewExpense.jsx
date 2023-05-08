import React from 'react'
import Form from '../utils/form/Form'

const NewExpense = () => {
  const inputExpenses = [
    {
        label: 'Renda / Casa:',
        name: 'renda',
        placeholder: 'Valor da sua renda/ prestação',
        type: 'text'
    },
    {
        label: 'Conta de Luz',
        name: 'luz',
        placeholder: 'Indique o valor medio da sua conta de luz',
        type: 'text'
    },
    {
        label: 'Conta de Água:',
        name: 'agua',
        placeholder: 'Indique o valor medio da sua conta de água',
        type: 'text'
    },
    {
        label: 'Telecomunicações:',
        name: 'telecomunicacoes',
        placeholder: 'Indique o valor medio da sua conta de água',
        type: 'text'
    },
    {
        label: 'Alimentação:',
        name: 'alimentacao',
        placeholder: 'Indique a media de despesas com compras ',
        type: 'text'
    },
    {
        label: 'Transporte / Combustível:',
        name: 'transporte',
        placeholder: 'Valor médio gasto com transporte ',
        type: 'text'
    },
]

return (
<div>
    <Form 
        inputs={inputExpenses}
    />
</div>
)
}

export default NewExpense