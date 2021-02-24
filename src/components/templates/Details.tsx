import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

// INTERFACES
import { GameProps, RawResponse } from 'src/@types';

// SERVICES
import GameServices from 'src/services/GameServices';

// COMPONENTS
import Title from '../atoms/Title';

const dispatcher = (type: string, payload: boolean | RawResponse) => ({
  type, payload,
});

interface DetailsProps {
  id: string;
}

const Details: React.FC<DetailsProps> = ({ id }: DetailsProps): React.ReactElement => {
  const [game, setGame] = useState<GameProps>();
  const dispatch = useDispatch();

  useEffect(() => {
    toast.configure();
    (async function getGames() {
      try {
        dispatch(dispatcher('LOADING', true));
        const instance = new GameServices();
        const result = await instance.getGame(id);
        setGame(result.data);
      } catch (error) {
        toast.error('Jogo não encontrado');
        setTimeout(() => {
          window.location.href = '/home';
        }, 5000);
      } finally {
        dispatch(dispatcher('LOADING', false));
      }
    }());
  }, [dispatch, id]);
  return (
    <div className="apresentacao" style={{ backgroundImage: `url(${game?.background_image as string})`, backgroundSize: 'cover' }}>
      <div className="backdrop">
        <Link className="back" to="/">Voltar</Link>

        <Title type="h1" text={game?.name as string} />

        <Title type="h3" text="Sobre" />
        <p>{game?.description_raw}</p>

        <Title type="h3" text="Gêneros" />
        <p>
          {
            game?.genres.map((genre) => <span>{genre.name}</span>)
          }
        </p>

        <Title type="h3" text="Plataformas" />
        <p>
          {
            game?.platforms.map((platform) => <span>{platform.platform.name}</span>)
          }
        </p>

        <Title type="h3" text="Desenvolvedores" />
        <p>
          {
            game?.developers.map((developer) => <span>{developer.name}</span>)
          }
        </p>

        <Title type="h3" text="Média avaliativa" />
        <p>{game?.rating || '-'}</p>

        <Title type="h3" text="Classificação indicativa" />
        <p>{game?.esrb_rating?.name || '-'}</p>

        <Title type="h3" text="Avaliações" />
        <div className="bar">
          {
            game?.ratings.map((rating) => <div className={rating.title} style={{ width: `${rating.percent}%` }}>{rating.title}</div>)
          }
        </div>

        <Title type="h3" text="Metacrítica" />
        <p className="metacritica">{game?.metacritic || '-'}</p>
      </div>
    </div>
  );
};

export default Details;
