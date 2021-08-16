import React from "react";

import banner from '../../assets/img/banner.jpg';

const Banner = () => {
  return (
    <div className="banner" style={{backgroundImage: `url(${banner})`}}>
      <div className="container">
        <h2>The best games are here</h2>
      </div>
    </div>
  );
};

export default Banner;
