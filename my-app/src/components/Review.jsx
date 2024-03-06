import React from "react";
import { useState, useEffect } from "react";

export default function App() {
  const [sliderConf, setSliderConf] = useState({
    sliderPointer: 0,
    data: []
  });
  useEffect(() => {
    setSliderConf({
      ...sliderConf,
      data: [
        {
          description:
            "Non-Fungible Tokens (NFTs) redefine digital ownership, spanning art, gaming, and real estate.",
          author: "John Doe"
        },
        {
          description:
            "Despite challenges, they mark a shift towards decentralized assets and ongoing innovation.",
          author: "Ernest Hummilton"
        },
        {
          description:
            "I have not failed. I've just found 10,000 ways that won't work.",
          author: "Thomas Alfa"
        }
      ]
    });
  }, []);
  const nextSlide = () => {
    let { data, sliderPointer } = sliderConf;
    let currentSliderPointer = sliderPointer + 1;
    if (data.length - 1 === sliderPointer) {
      currentSliderPointer = 0;
    }
    setSliderConf({
      ...sliderConf,
      sliderPointer: currentSliderPointer
    });
  };
  const prevSlide = () => {
    let { data, sliderPointer } = sliderConf;
    let currentSliderPointer = sliderPointer - 1;
    if (sliderPointer === 0) {
      currentSliderPointer = data.length - 1;
    }
    setSliderConf({
      ...sliderConf,
      sliderPointer: currentSliderPointer
    });
  };
  const { sliderPointer, data } = sliderConf;
  const currentSlide = data[sliderPointer];
  return (
    <div className="App">
      {currentSlide ? (
        <div className="slideshow-container">
          <div className="mySlides">
            <q>{currentSlide["description"]}</q>
            <p className="author">- {currentSlide["author"]}</p>
          </div>
          <button className="prev" onClick={prevSlide}>
            ❮
          </button>
          <button className="next" onClick={nextSlide}>
            ❯
          </button>
        </div>
      ) : null}

      <div className="dot-container">
        <span className="dot" onclick="currentSlide(1)"></span>
        <span className="dot" onclick="currentSlide(2)"></span>
        <span className="dot" onclick="currentSlide(3)"></span>
      </div>
    </div>
  );
}
