import React from 'react';
import CardRight from './CardRight';

export const Card = (props) => {
  return (
    <article className="card">
      <div className="card-left"></div>
      <CardRight article={props.article} />
    </article>
  );
};

export default Card;
