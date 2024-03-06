import React from 'react'
import signup from "../assets/signup.png";

export default function Signup() {
  return (
    <div>
      <div className="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">Coming Soon</p>
          <h1 className="title">A unique NFT experience.</h1>
          <p className="description">
            Register today, and upon our launch, receive a complimentary NFT.
          </p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
