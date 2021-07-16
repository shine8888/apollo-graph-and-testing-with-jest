import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useAuthToken } from "../config/auth";

export const loginMutationGQL = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const useLoginMutation = () => {





  
  // const [_, setAuthToken, removeAuthtoken] = useAuthToken();
  // const [mutation, mutationResults] = useMutation(loginMutationGQL, {
  //   onCompleted: (data) => {
  //     setAuthToken(data.login.token);
  //   },
  // });

  // full login function
  // const login = (email, password) => {
  //   removeAuthtoken();
  //   return mutation({
  //     variables: {
  //       email,
  //       password,
  //     },
  //   }).then((data) => console.log(data));
  // };
  // return [login, mutationResults];
};
