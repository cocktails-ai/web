import { useState } from 'react'
import { Button } from 'baseui/button'

import DrinksList from './drinks-list'
import AddDrinkForm from './add-drink-form'
import CocktailsSearch from './cocktails-search'

export default function Drinks() {
  const [value, setValue] = useState(['rum', 'vodka'])

  const handleDelete = (drink: string) => {
    setValue(p => p.filter(d => d !== drink))
  }
  const handleSubmit = (drink: string) => {
    setValue(p => [...p, drink])
  }

  return (
    <div>
      <DrinksList value={value} onDelete={handleDelete} />
      <br />
      <AddDrinkForm onSubmit={handleSubmit} />
      <br />
      <CocktailsSearch drinks={value} />
    </div>
  )
}
