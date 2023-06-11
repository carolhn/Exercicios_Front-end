import React, { Component } from 'react'
import UserProfile from '../UserProfile';

export default class User extends Component {
  render() {
    const joao = {
        id: 102,
        name: "João",
        email: "joao@trybe",
        avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png'
      };
  
      const amelia = {
        id: 77,
        name: "Amélia",
        email: "amelia@trybe",
        avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png'
      };
    return (
      <div>
        <UserProfile user={joao} />
        <UserProfile user={amelia} />
      </div>
    )
  }
}
