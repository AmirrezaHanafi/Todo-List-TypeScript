import { useParams } from 'react-router-dom'

type GroupBoardProps = {}

export default function GroupBoard({}: GroupBoardProps) {
  const { section } = useParams()
  return <div>{section}</div>
}
