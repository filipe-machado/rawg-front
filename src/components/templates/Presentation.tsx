import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

// INTERFACES
import { CardProps, RawResponse } from 'src/@types';

// SERVICES
import GameServices from 'src/services/GameServices';

// COMPONENTS
import Title from '../atoms/Title';
import Cards from '../organisms/Cards';

const dispatcher = (type: string, payload: boolean | RawResponse) => ({
  type, payload,
});

const Presentation: React.FC = () => {
  const [cards, setCards] = useState<CardProps[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    toast.configure();
    (async function getGames() {
      try {
        dispatch(dispatcher('LOADING', true));
        const games = new GameServices();
        const result = await games.getAllGames({ dates: '2020-01-01,2020-12-31', page_size: '12', ordering: '-added' });
        const { results } = result.data;
        setCards(results);
        dispatch(dispatcher('HIDRATE', result.data));
      } catch (error) {
        toast.error('Jogo não encontrado');
        setTimeout(() => {
          window.location.href = '/';
        }, 5000);
      } finally {
        dispatch(dispatcher('LOADING', false));
      }
    }());
  }, [dispatch]);
  return (
    <div className="apresentacao">
      <Title type="h1" text="Populares em 2020" />
      <Cards cards={cards} />
    </div>
  );
};

export default Presentation;
