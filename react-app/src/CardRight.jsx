import React from 'react';

const CardRight = (props) => {
  const { category, title } = props.article;
  return (
    <div className="card-right">
      <h2>{category}</h2>
      <p>{title}</p>
    </div>
  );
};

export default CardRight;
