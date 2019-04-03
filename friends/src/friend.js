import React from 'react';

const friend = props => {
  const bold = {
    fontWeight: 'bold',
    
  }

  const deleteFriend = (e) => {
    e.preventDefault();
    props.deleteFriend(props.id);
  }

  return(
    <div className='friend'>
      <h2>{props.friend.name}</h2>
      <p><span style={bold}>Age:</span> {props.friend.age}</p>
      <p><span style={bold}>Email:</span> {props.friend.email}</p>
      <button onClick={deleteFriend}>
        Delete
      </button>
    </div>
  );
}

export default friend;