import { useState, useEffect } from 'react'
import { styled } from 'baseui'
import { Card } from 'baseui/card'

import DrinksList from './drinks-list'
import AddDrinkForm from './add-drink-form'
import CocktailsSearch from './cocktails-search'

const Wrapper = styled('section', ({ $theme }) => ({
  maxWidth: '1000px',
  margin: '0 auto',
}))

const DRINKS_STORAGE_KEY = 'drink-list'

const drinkFromStorage = () => {
  try {
    const json = localStorage.getItem(DRINKS_STORAGE_KEY)
    if (!json) {
      return []
    }
    const data = JSON.parse(json)
    if (!Array.isArray(data)) {
      return []
    }

    return data.filter(i => typeof i === 'string' && i.trim()).map(i => i.trim())
  } catch {
    return []
  }
}

const drinksToStorage = (drinks: string[]) => {
  localStorage.setItem(DRINKS_STORAGE_KEY, JSON.stringify(drinks))
}

export default function Drinks() {
  const [value, setValue] = useState(() => drinkFromStorage())

  useEffect(() => {
    drinksToStorage(value)
  }, [value])

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
        {value.length ? <br /> : null}
        <AddDrinkForm onSubmit={handleSubmit} />
      </Card>
      <br />
      <CocktailsSearch drinks={value} />
    </Wrapper>
  )
}
