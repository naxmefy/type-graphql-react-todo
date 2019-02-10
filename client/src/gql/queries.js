import gql from "graphql-tag";

export const TODOS_QUERY = gql`
  {
      todos {
      description,
      finishedAt,
      dueAt
    }
  }
`;
