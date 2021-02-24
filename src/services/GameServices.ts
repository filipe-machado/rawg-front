import { AxiosPromise } from 'axios';
import { RawResponse, GameProps } from '../@types';
import HttpClient from '../api/HttpClient';

export default class GameServices extends HttpClient {
  private static classInstance?: GameServices;

  public static getInstance(): GameServices {
    if (!this.classInstance) {
      this.classInstance = new GameServices();
    }

    return this.classInstance;
  }

  public getAllGames = (params: Record<string, unknown>): AxiosPromise<RawResponse> => this.instance.get('/games', { params });

  public getGame = (id: string): AxiosPromise<GameProps> => this.instance.get(`/games/${id}`);
}
