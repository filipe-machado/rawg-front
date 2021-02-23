interface RawResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: CardProps[];
  user_platforms?: boolean;
}

interface HrefProps {
  to: string;
  text: string;
  event?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

interface ImageProps {
  src: RequestInfo;
  classes?: string;
  alt?: string;
}

interface CardProps {
  id: number;
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
  HrefProps,
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
};
