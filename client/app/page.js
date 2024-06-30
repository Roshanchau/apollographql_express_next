'use client'
import { useQuery, gql } from '@apollo/client';

const GET_TASKS_QUERY = gql`
  query {
    tasks {
      _id
      description
      completed
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_TASKS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.tasks || data.tasks.length === 0) return <p>No tasks found!</p>;

  return (
    <>
      <h1>Task List</h1>
      <ul>
        {data.tasks.map((task) => (
          <li key={task._id}>
            {task.description} (Completed: {task.completed ? 'Yes' : 'No'})
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;