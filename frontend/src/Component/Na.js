import React from "react";
import { useUserNa } from "../network/userQuery";
import { useAuthToken } from "../config/auth";
export const Na = (props) => {
  let listUsers = [];
  const [authToken] = useAuthToken();
  const { data } = useUserNa() || {};
  if (authToken && data) {
    listUsers = data["getNaRole"];
  }

  return (
    <div>
      {listUsers.length > 0 ? (
        listUsers.map((user) => (
          <>
            <tr>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
            </tr>
          </>
        ))
      ) : (
        <h6>You are not allow to see it!</h6>
      )}
    </div>
  );
};
