import React, { useState } from 'react';
import Card from './Card';

const Cards = () => {
  const cardsInfo = [
    { id: 1, img: '๐น', state: '' },
    { id: 1, img: '๐น', state: '' },
    { id: 2, img: '๐ฟ', state: '' },
    { id: 2, img: '๐ฟ', state: '' },
    { id: 3, img: '๐ง ', state: '' },
    { id: 3, img: '๐ง ', state: '' },
    { id: 4, img: '๐', state: '' },
    { id: 4, img: '๐', state: '' },
    { id: 5, img: '๐ฒ', state: '' },
    { id: 5, img: '๐ฒ', state: '' },
    { id: 6, img: '๐', state: '' },
    { id: 6, img: '๐', state: '' },
    { id: 7, img: '๐งธ', state: '' },
    { id: 7, img: '๐งธ', state: '' },
    { id: 8, img: '๐คจ', state: '' },
    { id: 8, img: '๐คจ', state: '' },
    { id: 9, img: '๐ค', state: '' },
    { id: 9, img: '๐ค', state: '' },
    { id: 10, img: 'โฅ๏ธ', state: '' },
    { id: 10, img: 'โฅ๏ธ', state: '' },
    { id: 11, img: '๐ฆ', state: '' },
    { id: 11, img: '๐ฆ', state: '' },
    { id: 12, img: '๐ฆจ', state: '' },
    { id: 12, img: '๐ฆจ', state: '' },
    { id: 13, img: '๐ค', state: '' },
    { id: 13, img: '๐ค', state: '' },
    { id: 14, img: '๐พ', state: '' },
    { id: 14, img: '๐พ', state: '' },
    { id: 15, img: '๐ฝ', state: '' },
    { id: 15, img: '๐ฝ', state: '' },
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

  const selectHandler = (id) => {
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
    if (!isStart) return setIsStart((isStartPrev) => !isStartPrev);
    setIsStart((isStartPrev) => !isStartPrev);
    setPrev(-1);
    setCards(cardsInfo.sort(() => Math.random() - 0.5));
  };

  return (
    <div className="container">
      {cards.map((item, i) => (
        <Card
          key={i}
          item={item}
          id={i}
          isStart={isStart}
          selectHandler={selectHandler}
        />
      ))}
      {
        <button onClick={startHandler}>
          {isStart ? 'Stop Game' : 'Start Game'}
        </button>
      }
    </div>
  );
};

export default Cards;
