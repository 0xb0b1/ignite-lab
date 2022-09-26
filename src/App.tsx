import { gql, useQuery } from '@apollo/client'
// import QUERY_LESSONS from './graphql/query.gql'

const GET_LESSONS = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  title: string
  id: string
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS)

  return (
    <ul className=" font-extrabold text-xl my-4 text-center">
      {data?.lessons.map((lesson) => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  )
}

export default App
