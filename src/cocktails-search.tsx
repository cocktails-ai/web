import { useMemo } from 'react'
import { Button } from 'baseui/button'
import useData from './hooks/use-data'
import { Notification } from 'baseui/notification'
import { styled } from 'baseui'
import Preview from './preview'
import SearchLoading from './search-loading'

type Props = {
  drinks: string[]
}

const Centered = styled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.sizing.scale200,
  fontStyle: 'italic',
  justifyContent: 'center',
}))

const URL = 'https://cocktails-ewguxkvnaa-uc.a.run.app/cocktails'

const searchButtonLabels = ['Mix me a drink', 'Find cocktails', 'Generate booze']

const getRandomLabel = () =>
  searchButtonLabels[Math.floor(Math.random() * searchButtonLabels.length)]

export default function CocktailsSearch(props: Props) {
  const body = useMemo(() => ({ drinks: props.drinks }), [props.drinks])

  const { data, loading, error, call } = useData<any>(URL, body, [])

  if (loading) {
    return (
      <Centered>
        <SearchLoading />
      </Centered>
    )
  }

  if (error) {
    return (
      <Centered>
        <Notification
          kind="negative"
          overrides={{
            Body: { style: { width: 'auto' } },
          }}>
          {error.toString()}
        </Notification>
      </Centered>
    )
  }

  if (data === null) {
    return (
      <Centered>
        <Button onClick={() => call()}>{getRandomLabel()}</Button>
      </Centered>
    )
  }

  let text
  if (typeof data === 'string') {
    text = JSON.parse(data).cocktails
  } else {
    text = data.cocktails
  }

  if (!text) {
    return <Centered>Didn't find anything</Centered>
  }

  return <Preview value={text} />
}
