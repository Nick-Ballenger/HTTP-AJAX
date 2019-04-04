import React from 'react';

class PostFriend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friend: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  postFriend = e => {
    e.preventDefault();

    this.props.postFriendToServer(this.state.friend);

    this.setState({
      friend: {
        name: '',
        age: '',
        email: ''
      }
    });
  };

  updateFriendHandler = e => {
    e.preventDefault();

    const friendObj = this.props.friends.filter(friend => friend.name === this.state.friend.name);
    const id = friendObj[0].id;

    this.props.updateFriend(this.state.friend, id);

    this.setState({
      friend: {
        name: '',
        age: '',
        email: ''
      }
    });

  }

  handleChange = e => {
  this.setState({
    friend: {
      ...this.state.friend,
      [e.target.name]: e.target.value
    }
  });
};

  render() {
    return(
      <form className='friend-card'>
        <h1>Friend Form</h1>
        <div className="input-wrapper">
        <input type='text'
               name='name'
               placeholder='Name'
               onChange={this.handleChange}
               value={this.state.friend.name}
               />
        <input type='number'
               name='age'
               placeholder='Age'
               onChange={this.handleChange}
               value={this.state.friend.age}
               />
        <input type='email'
               required='required'
               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
               name='email'
               placeholder='Email'
               onChange={this.handleChange}
               value={this.state.friend.email}
               />
        </div>
       

         {this.props.postError ? (
             <p className='error'>{this.props.postError}</p>
           ) : null}

         {this.props.postSuccessMessage ? (
           <p className='success'>{this.props.postSuccessMessage}</p>
         ) : null}

         {this.props.updateError ? (
           <p className='error'>{this.props.postError}</p>
         ) : null}

         {this.props.updateSuccessMessage ? (
           <p className='success'>{this.props.updateSuccessMessage}</p>
         ) : null}

        <div className='btn-wrapper'>
          <button type='submit' onClick={this.postFriend}>
              Add Friend
           </button>
           <button type='submit' onClick={this.updateFriendHandler}>
             Update Friend
           </button>
        </div>
      </form>
    );
  }
}

export default PostFriend;