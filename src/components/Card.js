import React from 'react';

function Card({ item, isStart, selectHandler, id }) {
  const itemClass = isStart && item.state ? 'active ' + item.state : ' ';
  const cardRotate = isStart ? 'card-rotate' : '';
  const emojyRotate = isStart ? 'emojy-rotate' : '';

  return (
    <div
      className={`card + ${itemClass} ${cardRotate}`}
      onClick={() => selectHandler(id)}
    >
      <div className={`card-img ${emojyRotate}`}>{item.img}</div>
    </div>
  );
}

export default Card;
