// import React from 'react'

const HeroSection = () => {
  return (
    <div className="hero container">
      <div className="hero-content">
        <h1> YOUR FEET DESERVE BEST </h1>{" "}
        <p>
          {" "}
          YOUR FEET DESERVE THE BEST AND WE’ RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’ RE HERE TO HELP YOU WITH OUR
          SHOES.{" "}
        </p>{" "}
        <div className="hero-btn">
          <button className="shop-now"> Shop Now </button>{" "}
          <button className="category"> Category </button>{" "}
        </div>{" "}
        <div className="shopping">
          <p> Also Available On </p>{" "}
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="amazon-logo" />
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoes-image" />
      </div>{" "}
    </div>
  );
};

export default HeroSection;
