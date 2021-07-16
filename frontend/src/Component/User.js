import React from "react";
import { useUser } from "../network/userQuery";
import { useAuthToken } from "../config/auth";
export const User = (props) => {
  let listUsers = [];
  const [authToken] = useAuthToken();
  const { data } = useUser() || {};
  if (authToken && data) {
    listUsers = data["getUser"];
  }

  return (
    <div>
      {listUsers.length > 0 ? (
        listUsers.map((user) => (
          <>
            <tr>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          </>
        ))
      ) : (
        <h6>You are not allow to see it!</h6>
      )}
    </div>
  );
};
