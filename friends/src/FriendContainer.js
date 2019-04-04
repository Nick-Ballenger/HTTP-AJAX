import React from 'react';
import Friend from './friend';

const FriendContainer = props => {
  console.log(props)
  return(
    <div className='friends-container'>
    {props.friends.map(friend => <Friend key={friend.id}
                                                  friend={friend}
                                                  id={friend.id}
                                                  deleteFriend={props.deleteFriend}/>)}
    </div>
  );
}

export default FriendContainer;