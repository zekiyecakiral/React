import React from "react";

const Guarantee = ({ img, title, description }) => (

    <div class="guarantee"> 
    <img src={img} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>

);

export default Guarantee;
