import React from "react";
import { useState } from "react";

const Card = ({ image, id, price, name, info, deleteHandler }) => {
  const [readmore, setReadmore] = useState(false);

  const description = readmore ? info : `${info.substring(0, 200)}...`;

  const handleClick = () => {
    setReadmore(!readmore);
  };

  return (
    <div className="card">
      <img src={image} className="image" alt=""></img>

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹ {price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {description}
          <span className="read-more" onClick={handleClick}>
            {readmore ? `Show Less` : `Read More`}
          </span>
          <button className="btn-red" onClick={() => deleteHandler(id)}>
            Not Intrested
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
