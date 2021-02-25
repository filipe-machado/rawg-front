import axios, { AxiosInstance } from 'axios';

abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(
    baseURL: string = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL_API_PROD as string : process.env.REACT_APP_URL_API_DEV as string,
    headers: Record<string, unknown> = {
      Accept: 'application/json',
      ContentType: 'application/json',
    },
  ) {
    this.instance = axios.create({
      baseURL,
      headers,
    });
  }
}

export default HttpClient;
