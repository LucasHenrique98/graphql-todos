import { gql } from '@apollo/client';

export default gql`
  {
    todos {
      id
      description
      done
    }
  }
`;
