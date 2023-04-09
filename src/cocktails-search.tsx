import { useMemo } from 'react'
import { Button } from 'baseui/button'
import useData from './hooks/use-data'
import { Spinner } from 'baseui/spinner'
import { Notification } from 'baseui/notification'
import { styled } from 'baseui'

type Props = {
  drinks: string[]
}

const LoadingContainer = styled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.sizing.scale200,
  fontStyle: 'italic',
}))

const URL = 'https://cocktails-ewguxkvnaa-uc.a.run.app/cocktails'

export default function CocktailsSearch(props: Props) {
  const body = useMemo(() => ({ drinks: props.drinks }), [props.drinks])

  const { data, loading, error, call } = useData<any>(URL, body, [])

  if (loading) {
    return (
      <LoadingContainer>
        <Spinner $size="small" />
        <span>Pouring a drink...</span>
      </LoadingContainer>
    )
  }

  if (error) {
    return (
      <Notification
        kind="negative"
        overrides={{
          Body: { style: { width: 'auto' } },
        }}>
        {error.toString()}
      </Notification>
    )
  }

  if (data === null) {
    return (
      <div>
        <Button onClick={() => call()}>Search</Button>
      </div>
    )
  }

  let text
  if (typeof data === 'string') {
    text = JSON.parse(data).cocktails
  } else {
    text = data.cocktails
  }

  if (!text) {
    return <div>Didn't find anything</div>
  }

  return <div>{text}</div>
}
