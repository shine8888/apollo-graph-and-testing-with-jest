import React from "react";
import { useUserQuery, useUser, useUserNa } from "../network/userQuery";
import { useAuthToken } from "../config/auth";
export const Admin = (props) => {
  let listUsers = [];
  const [authToken] = useAuthToken();
  const { data } = useUserQuery() || {};
  if (authToken && data) {
    listUsers = data["getAllUser"];
  }

  return (
    <div>
      
      {listUsers.length > 0 ? (
        listUsers.map((user) => (
          <>
            <tr>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
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
