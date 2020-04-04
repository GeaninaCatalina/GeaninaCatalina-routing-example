import React from 'react';

function User(props) {
  return (
    <div>
      <h2>{props.match.params.username}</h2>
    </div>
  );
}

export default User;
