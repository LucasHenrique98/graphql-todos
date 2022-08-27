import React from 'react';
import { gql, useQuery } from '@apollo/client';

const TODOS_QUERY = gql`
  {
    todos {
      id
      description
      done
    }
  }
`;

export default function App() {
  const query = useQuery(TODOS_QUERY);

  console.log(query);

  return <div>oi</div>;
}
