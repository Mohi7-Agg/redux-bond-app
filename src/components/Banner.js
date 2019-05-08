import React from 'react';

const Banner = ({ appName, token, totalLot, currentPrice }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <div class="row">
          <h1>Bond Issuance : {appName} </h1>
        </div>
        <div class="row">
          <h3> Lot Size : {totalLot}</h3>
          </div>
         <div class="row">
          <h3>Current Price : {currentPrice}</h3>
          </div>
      </div>
    </div>
  );
};

export default Banner;
