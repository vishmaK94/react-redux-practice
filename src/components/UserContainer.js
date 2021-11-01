import React, { useEffect } from "react";
import { fetchUsers } from "../redux";
import { connect } from "react-redux";

const UserContainer = ({ users, fetchUsers }) => {
  useEffect(() => fetchUsers(), []);
  return (
    <div>
      <h2>Users</h2>
      <div>
        {users.loading ? (
          <h4>{users.loading}Loading...</h4>
        ) : users.error ? (
          <h4>{users.error}</h4>
        ) : (
          users &&
          users.data.length &&
          users.data.map((user) => (
            <p key={user.id}>
              {user.name} {users.loading.toString()}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
