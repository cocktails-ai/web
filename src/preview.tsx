import ReactMarkdown from 'react-markdown'

type Props = {
  value: string
}

export default function Preview({ value }: Props) {
  return <ReactMarkdown>{value}</ReactMarkdown>
}
