import { useMemo } from 'react'
import { Button } from 'baseui/button'
import useData from './hooks/use-data'
type Props = {
  drinks: string[]
}

const URL = 'https://cocktails-ewguxkvnaa-uc.a.run.app/cocktails'

export default function CocktailsSearch(props: Props) {
  const body = useMemo(() => ({ drinks: props.drinks }), [props.drinks])

  const { data, loading, error, call } = useData<any>(URL, body, [])

  if (loading) {
    return <div>loading</div>
  }

  if (error) {
    return <div>{error.toString()}</div>
  }

  if (data === null) {
    return (
      <div>
        <Button onClick={() => call()}>Search</Button>
      </div>
    )
  }

  const text = data.choices?.[0]?.message?.content || data.cocktails

  if (!text) {
    return <div>Didn't find anything</div>
  }

  return <div>{text}</div>
}
