//imrc
import React, { Component } from 'react';
//cc
class UserViewLeft extends Component {
    state = {
         src: "",
         handle: ""
      }
      //print on the UI--render
    render() { 
        return ( 
            <React.Fragment>
                     <img src={src} alt="profile-img" />
                     <p>{handle}</p>
            </React.Fragment>
         );
    }
}
 
export default UserViewLeft
