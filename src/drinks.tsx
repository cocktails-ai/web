import { useState } from 'react'
import { styled } from 'baseui'
import { Card } from 'baseui/card'

import DrinksList from './drinks-list'
import AddDrinkForm from './add-drink-form'
import CocktailsSearch from './cocktails-search'

const Wrapper = styled('section', ({ $theme }) => ({
  maxWidth: '1000px',
  margin: '0 auto',
}))

export default function Drinks() {
  const [value, setValue] = useState(['gin', 'angostura bitters', 'dry vermouth'])

  const handleDelete = (drink: string) => {
    setValue(p => p.filter(d => d !== drink))
  }
  const handleSubmit = (drink: string) => {
    setValue(p => [...p, drink])
  }

  return (
    <Wrapper>
      <Card>
        <DrinksList value={value} onDelete={handleDelete} />
        <br />
        <AddDrinkForm onSubmit={handleSubmit} />
      </Card>
      <br />
      <CocktailsSearch drinks={value} />
    </Wrapper>
  )
}
