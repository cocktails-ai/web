import { useState } from 'react'
import DrinksList from './drinks-list'

export default function Drinks() {
  const [value, setValue] = useState(['rum', 'vodka'])

  const handleDelete = (drink: string) => {
    setValue(p => p.filter(d => d !== drink))
  }

  return (
    <div>
      <DrinksList value={value} onDelete={handleDelete} />
    </div>
  )
}
