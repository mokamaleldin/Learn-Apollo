"use client";
import { gql, useQuery } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: { error.message }</p>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        { data.users.map((user) => (
          <li key={ user.id }>
            { user.name } - { user.email }
          </li>
        )) }
      </ul>
    </div>
  );
}
