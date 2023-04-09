import DeleteIcon from 'baseui/icon/delete'

type Props = {
  drink: string
  onClick: (drink: string) => void
}

export default function DrinksDeleteButton(props: Props) {
  const handleDelete = () => {
    props.onClick(props.drink)
  }
  return <DeleteIcon onClick={handleDelete} />
}
