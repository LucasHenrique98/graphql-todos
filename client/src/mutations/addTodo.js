import { gql } from '@apollo/client';

export default gql`
  mutation addTodo($description: String!) {
    addTodo(description: $description) {
      id
      description
      done
    }
  }
`;
