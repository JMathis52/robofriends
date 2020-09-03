import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green br2 pa2 shadow-5 fl w-75 w-25-ns mw5 h5 ma3">
      <img src={`https://robohash.org/${id}?size=150x150`} alt="robot" />
      <h2 className="f4">{name}</h2>
      <p className="f7">{email}</p>
    </div>
  );
};

export default Card;
