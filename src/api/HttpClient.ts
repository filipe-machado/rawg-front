import axios, { AxiosInstance } from 'axios';

abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  private url = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL_API_PROD : process.env.REACT_APP_URL_API_DEV;

  public constructor(
    url: string,
    headers: Record<string, unknown> = {
      Accept: 'application/json',
      ContentType: 'application/json',
    },
  ) {
    this.url = url;
    this.instance = axios.create({
      baseURL: this.url,
      headers,
    });
  }
}

export default HttpClient;
