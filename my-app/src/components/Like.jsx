import React from "react";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";


export default function Like() {
  return (
    <div className="Like">
      <div className="container">
        <div className="content">
        <div className="image">
          <img src={eth1} alt="eth1" />
          </div>
          <h2 className="title">A unique NFT experience</h2>
          <p className="description">
            Ensure you catch the launch of our latest NFT. Subscribe below to re
            ceive updates when we go live.
          </p>
          <p className="description">
            Ensure you don't miss the launch of our upcoming NFT. Subscribe belo
            w to receive updates for our live. Don't let this opportunity pass by.
          </p>
        </div>
        <div className="content">
        <div className="image">
          <img src={eth2} alt="eth1" />
          </div>
          <h2 className="title">A unique NFT experience</h2>
          <p className="description">
            Ensure you catch the launch of our latest NFT. Subscribe below to re
            ceive updates when we go live.
          </p>
          <p className="description">
            Ensure you don't miss the launch of our upcoming NFT. Subscribe belo
            w to receive updates for our live. Don't let this opportunity pass by.
          </p>
        </div>
      </div>
    </div>
  )
}
