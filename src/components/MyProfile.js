import React from 'react';
import Iframe from 'react-iframe';

const MyProfile = () => {
  return (
    <div className="container">
      <Iframe title="myProfile" url="https://www.google.com"
        width="80%"
        height="80%"
        id="myId"
        className="myClassname"
        position="relative" />
    </div>
  )
}

export default MyProfile;