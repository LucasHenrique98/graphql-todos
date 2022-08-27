import { gql } from '@apollo/client';

export default gql`
  mutation completeTodo($id: ID!) {
    completeTodo(id: $id) {
      id
    }
  }
`;
