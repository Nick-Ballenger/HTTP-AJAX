import React, { Component } from 'react';
import FriendContainer from './FriendContainer';
import PostFriend from './PostFriend';
import Navigation from './Navigation';
import { Route } from 'react-router-dom';

import axios from 'axios';

import './App.css';



class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      postSuccessMessage: "",
      postError: "",
      deleteSuccessMessage: "",
      deleteError: "",
      updateSuccessMessage: "",
      updateError: "",
    }
  }

  getFriends = () => {
    axios.get('http://localhost:5000/friends')
         .then(res => {
           this.setState({ friends: res.data })
         })
         .catch(err => console.log(err));
  }

  postFriendToServer = friend => {
    axios.post('http://localhost:5000/friends', friend)
         .then(res => {
           this.setState({
             postSuccessMessage: "Friend Added!",
             postError: "",
             deleteSuccessMessage: "",
             deleteError: "",
             updateSuccessMessage: "",
             updateError: "",
           });

           this.setState({ friends: res.data })
         })
         .catch(err => {
           console.log(err);
           this.setState({
             postSuccessMessage: "",
             postError: "Does not compute!",
             deleteSuccessMessage: "",
             deleteError: "",
             updateSuccessMessage: "",
             updateError: "",
           });
         });
    this.getFriends();
  }

  updateFriend = (friend, id) => {
    console.log('Friend: ', friend)
    axios.put(`http://localhost:5000/friends/${id}`, friend)
         .then(res => {
           console.log(res);
           this.setState({
             postSuccessMessage: "",
             postError: "",
             deleteSuccessMessage: "",
             deleteError: "",
             updateSuccessMessage: "Update Successful!",
             updateError: ""
           });

           this.setState({ friends: res.data })
         })
         .catch(err => {
           console.log(err);
           this.setState({
             postSuccessMessage: "",
             postError: "",
             deleteSuccessMessage: "",
             deleteError: "",
             updateSuccessMessage: "",
             updateError: "Update Failed!"
           });
         })

  }

  deleteFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data,
          deleteSuccess: true
        });
      })
         .catch(err => {
           console.log(err);
           this.setState({
             postSuccessMessage: "",
             postError: ""
           });
         });
    this.getFriends();
  }

  componentDidMount() {
    this.getFriends();
  }

  render() {
    return (
      <div className="App">
        <Route path='/' component={Navigation} />
        <Route exact path='/' render={(props) => <PostFriend {...props} 
                 postFriendToServer={this.postFriendToServer}
                 postSuccessMessage={this.state.postSuccessMessage}
                 postError={this.state.postError}
                 updateFriend={this.updateFriend}
                 updateSuccessMessage={this.state.updateSuccessMessage}
                 updateError={this.state.updateError}
                 friends={this.state.friends}
                                                              />} />

        <Route path='/friends' render={(props) => <FriendContainer {...props} friends={this.state.friends}
                                                                        deleteFriend={this.deleteFriend}/>} />


      </div>
    );
  }
}

export default App;

