import { Accordion, Panel } from 'baseui/accordion'
import { HeadingSmall } from 'baseui/typography'

type Ingredient = {
  Name: string
  Size: string
}

type Item = {
  Name: string
  Ingredients: Ingredient[]
  Steps: string[]
}

type Props = {
  value: Item[]
}

function Recipe({ value }: { value: Item }) {
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {value.Ingredients.map(i => (
          <li key={i.Name}>
            {i.Name}: {i.Size}
          </li>
        ))}
      </ul>

      <h3>Steps</h3>
      <ol>
        {value.Steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </div>
  )
}

export default function Preview({ value }: Props) {
  return (
    <Accordion>
      {value.map(item => (
        <Panel title={item.Name} key={item.Name}>
          <Recipe value={item} />
        </Panel>
      ))}
    </Accordion>
  )
}
