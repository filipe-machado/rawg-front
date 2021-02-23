interface UserLoginRequestProps {
  loginEmail: string;
  loginSenha: string;
  segmento: number | string;
  ambienteId: number | string;
  ip: string;
  info?: Record<string, unknown> | null;
}

interface UserFirstAccessRequestProps {
  segmento: number | string;
  ambienteId: number | string;
  nome: string;
  cpfCnpj?: string;
  email: string;
  senha: string;
  redeSocial?: string;
  idRedeSocial?: string;
  modoProposta?: string;
  info?: Record<string, unknown> | null;
}

interface UserForgotPasswordRequestProps {
  loginEmail: string;
  info?: Record<string, unknown> | null;
}

interface DadosProps {
  logged?: boolean;
  dadosCadastrais: Record<string, unknown>;
  exibeOptin: boolean;
  ip: string;
  loginCodigo: string;
  loginEmail: string;
  loginNome: string;
  segmentos: SegmentosProps[];
  token: string;
}

interface UserResponseProps {
  success: boolean;
  msg: string;
  dados: DadosProps;
}

interface SegmentosProps {
  id: string | number;
  text: string;
  value: string | number;
}

interface IUserInterface {
  data: UserResponseProps;
}

export type {
  IUserInterface,
  SegmentosProps,
  DadosProps,
  UserLoginRequestProps,
  UserFirstAccessRequestProps,
  UserForgotPasswordRequestProps,
  UserResponseProps,
};
