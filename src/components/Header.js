import React from "react";
import './Header.css'

export default ({black}) => {
  return(
    <header className={black ? 'blackhead' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logonfx.png/1280px-Logonfx.png" alt="Netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="user" />
        </a>
      </div>
    </header>
  )
}