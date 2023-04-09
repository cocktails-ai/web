type Props = {
  value: string
}

export default function Preview({ value }: Props) {
  return <pre>{value}</pre>
}
