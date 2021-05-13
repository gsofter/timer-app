import { gql } from '@apollo/client';

export const CREATE_TIME_ENTRY = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;
