import { gql } from '@apollo/client';
export const GET_TIME_ENTRIES = gql`
  query {
    getTimeEntries {
      id
      startTime
      endTime
      studentId
      taskName
    }
  }
`;
