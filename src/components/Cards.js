import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = () => {
  const cardsInfo = [
    { id: 1, img: '👹', state: '' },
    { id: 1, img: '👹', state: '' },
    { id: 2, img: '👿', state: '' },
    { id: 2, img: '👿', state: '' },
    { id: 3, img: '🧠', state: '' },
    { id: 3, img: '🧠', state: '' },
    { id: 4, img: '🚗', state: '' },
    { id: 4, img: '🚗', state: '' },
    { id: 5, img: '🚲', state: '' },
    { id: 5, img: '🚲', state: '' },
    { id: 6, img: '🚂', state: '' },
    { id: 6, img: '🚂', state: '' },
    { id: 7, img: '🧸', state: '' },
    { id: 7, img: '🧸', state: '' },
    { id: 8, img: '🤨', state: '' },
    { id: 8, img: '🤨', state: '' },
    { id: 9, img: '🤟', state: '' },
    { id: 9, img: '🤟', state: '' },
    { id: 10, img: '♥️', state: '' },
    { id: 10, img: '♥️', state: '' },
    { id: 11, img: '🦟', state: '' },
    { id: 11, img: '🦟', state: '' },
    { id: 12, img: '🦨', state: '' },
    { id: 12, img: '🦨', state: '' },
    { id: 13, img: '🤖', state: '' },
    { id: 13, img: '🤖', state: '' },
    { id: 14, img: '👾', state: '' },
    { id: 14, img: '👾', state: '' },
    { id: 15, img: '👽', state: '' },
    { id: 15, img: '👽', state: '' },
  ];

  const [cards, setCards] = useState(cardsInfo.sort(() => Math.random() - 0.5));
  const [isStart, setIsStart] = useState(false);
  //it uses for make sure user can not choose more than two in the same time
  const [isTwo, setIsTwo] = useState(false);

  const [prev, setPrev] = useState(-1);

  const check = (current) => {
    if (cards[current].id === cards[prev].id && cards[current] === cards[prev])
      return setIsTwo(false);
    if (cards[current].id === cards[prev].id) {
      cards[current].state = 'correct';
      cards[prev].state = 'correct';
      setCards([...cards]);
      setIsTwo(false);
      setPrev(-1);
    } else {
      cards[current].state = 'wrong';
      cards[prev].state = 'wrong';
      setCards([...cards]);
      setTimeout(() => {
        cards[current].state = '';
        cards[prev].state = '';
        setCards([...cards]);
        setPrev(-1);
        setIsTwo(false);
      }, 1000);
    }
  };

  const selcteHandler = (id) => {
    if (!isStart) return;
    if (isTwo) return;
    if (cards[id].state === 'correct') return;
    if (prev === -1) {
      cards[id].state = 'active';
      setCards([...cards]);
      setPrev(id);
    } else {
      setIsTwo(true);
      check(id);
    }
  };
  const startHandler = () => {
    if (!isStart) return setIsStart(!isStart);
    setIsStart(!isStart);
    setCards(cardsInfo.sort(() => Math.random() - 0.5));
  };
  // const stopHandler = () => {
  //   setIsStart(!isStart);
  //   setCards(cardsInfo.sort(() => Math.random() - 0.5));
  // };

  return (
    <div className="container">
      {cards.map((item, i) => (
        <Card
          key={i}
          item={item}
          id={i}
          isStart={isStart}
          selcteHandler={selcteHandler}
        />
      ))}
      {
        <button onClick={startHandler}>
          {isStart && 'Stop Game'}
          {!isStart && 'Start Game'}
        </button>
      }
      {/* {isStart && <button onClick={() => stopHandler()}>Stop Game</button>} */}
    </div>
  );
};

export default Cards;
