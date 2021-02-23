import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CardProps, RawResponse } from 'src/@types';
import GameServices from 'src/services/GameServices';
import Title from '../atoms/Title';
import Cards from '../organisms/Cards';

const dispatcher = (type: string, payload: boolean | RawResponse) => ({
  type, payload,
});

const Presentation: React.FC = () => {
  const [cards, setCards] = useState<CardProps[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    (async function getGames() {
      try {
        dispatch(dispatcher('LOADING', true));
        const games = new GameServices();
        const result = await games.getGames('?dates=2020-01-01,2020-12-31&page_size=12&ordering=-added');
        const { results } = result.data;
        setCards(results);
        dispatch(dispatcher('HIDRATE', result.data));
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(dispatcher('LOADING', false));
      }
    }());
  }, []);
  return (
    <div className="apresentacao">
      <Title type="h1" text="Populares em 2020" />
      <Cards cards={cards} />
    </div>
  );
};

export default Presentation;
