import { ListItem, ListItemLabel } from 'baseui/list'
import DrinksDeleteButton from './drink-delete-button'

type Props = {
  value: string[]
  onDelete: (drink: string) => void
}

export default function DrinksList(props: Props) {
  const { value, onDelete } = props
  return (
    <div>
      {value.map(drink => {
        return (
          <ListItem
            key={drink}
            endEnhancer={() => <DrinksDeleteButton drink={drink} onClick={onDelete} />}>
            <ListItemLabel>{drink}</ListItemLabel>
          </ListItem>
        )
      })}
    </div>
  )
}
