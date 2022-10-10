import React from 'react';

function Card({ item, isStart, selcteHandler, id }) {
  const itemClass = item.state ? 'active ' + item.state : ' ';
  const cardRotate = isStart ? 'card-rotate' : '';
  const enojyRotate = isStart ? 'emojy-rotate' : '';
  return (
    <div
      className={`card + ${itemClass} ${cardRotate}`}
      onClick={() => selcteHandler(id)}
    >
      <div className={`card-img ${enojyRotate}`}>{item.img}</div>
    </div>
  );
}

export default Card;
