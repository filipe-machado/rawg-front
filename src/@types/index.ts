interface RawResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: CardProps[];
  user_platforms?: boolean;
}

interface GameProps {
  name: string;
  background_image: string;
  developers: Developer[];
  platforms: Platform[];
  rating: number;
  ratings: Rating[];
  esrb_rating: EsbrRating;
  genres: GenreProps[];
  metacritic: number;
  description_raw: string;
}

interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}
interface EsbrRating {
  id: number;
  name: string;
}
interface Developer {
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
}
interface ImageProps {
  src: RequestInfo;
  classes?: string;
  alt?: string;
}

interface CardProps {
  id: string;
  name: string;
  background_image: string;
  genres: GenreProps[];
  platforms: Platform[];
}

interface CardsProps {
  cards: CardProps[] | undefined;
}

interface GenreProps {
  id: number;
  name: string;
  slug: string;
  image_background?: string | null;
}

interface Platform {
  platform: PlatformProps;
}

interface PlatformProps {
  id: number;
  name: string;
  slug: string;
}

interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  value: string | number;
  handleInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

interface LabelProps {
  label: string;
  input: InputProps;
}

interface TitleProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
  props?: Record<string, unknown>;
}

interface LoadingProps {
  loading: boolean;
}

interface NavbarProps {
  logo: string;
}

interface LayoutProps {
  children: React.ReactNode;
  logo?: string;
}

export type {
  ImageProps,
  CardProps,
  CardsProps,
  InputProps,
  LabelProps,
  TitleProps,
  LoadingProps,
  NavbarProps,
  LayoutProps,
  RawResponse,
  GameProps,
};
