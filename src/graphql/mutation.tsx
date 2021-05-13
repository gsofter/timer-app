import { gql } from '@apollo/client';

export const CREATE_TIME_ENTRY = gql`
  mutation CreateTimeEntry($request: TimeEntryRequest) {
    createTimeEntry(request: $request)
  }
`;

export const REMOVE_TIME_ENTRY = gql`
  mutation RemoveTimeEntry($entryId: String) {
    removeTimeEntry(entryId: $entryId)
  }
`;
