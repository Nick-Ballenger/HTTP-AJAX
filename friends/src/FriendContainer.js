import React from 'react';
import Friend from './friend';

const FriendContainer = props => {
  console.log(props)
  return(
    <div className='friends-container'>
    {props.friends.map(friend => <Friend key={Date.now()}
                                                  friend={friend}
                                                  id={friend.id}
                                                  deleteHandler={props.deleteFriend}/>)}
    </div>
  );
}

export default FriendContainer;