import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";
import Card from "./Card";

export default function Release() {
  return (
    <div className="releases">
      <div className="release orange">
        <div className="content">
          <h2 className="title">Early Bird 14/10</h2>
          <p className="description">
            We've launched four exclusive limited edition NFTs available for bid
            ding now through <a href="#">OpenSea</a>
          </p>
          <p className="description">
           These NFTs are limited to just four, ensuring you don't miss this exclusive opportunity!
          </p>
          <p className="description">50% of proceeds go to charity.</p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>
      <div className="release green">
        <div className="card-container">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Early Bird 14/10</h2>
          <p className="description">
            We've launched four exclusive limited edition NFTs available for bid
            ding now through <a href="#">OpenSea</a>
          </p>
          <p className="description">
            These NFTs are limited to just four, ensuring you don't miss this exclusive opportunity!
          </p>
          <p className="description">50% of proceeds go to charity.</p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}
