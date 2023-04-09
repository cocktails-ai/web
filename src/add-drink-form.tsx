import { useState, FormEvent } from 'react'
import { styled } from 'baseui'
import { Input } from 'baseui/input'
import { Button } from 'baseui/button'
import ScanButton from './scan-button'

type Props = {
  onSubmit: (value: string) => void
}

const Form = styled('form', ({ $theme }) => ({
  display: 'flex',
  gap: $theme.sizing.scale100,
}))

export default function AddDrinkForm({ onSubmit }: Props) {
  const [inputValue, setInputValue] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (inputValue.trim() === '') return
    onSubmit(inputValue)
    setInputValue('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Type drink name here"
      />
      <Button type="submit" disabled={inputValue.length === 0}>
        Add
      </Button>
      <ScanButton />
    </Form>
  )
}
