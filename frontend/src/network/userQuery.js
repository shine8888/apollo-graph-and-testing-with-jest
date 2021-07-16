import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const userQueryGQL = gql`
  query user {
    getAllUser {
      firstName
      lastName
      email
      password
      role
    }
  }
`;

const userGQL1 = gql`
  query user {
    getUser {
      firstName
      email
      role
    }
  }
`;

const userGQL2 = gql`
  query user {
    getNaRole {
      firstName
    }
  }
`;


export const useUserQuery = () => useQuery(userQueryGQL);
export const useUser = () => useQuery(userGQL1);
export const useUserNa = () => useQuery(userGQL2);

