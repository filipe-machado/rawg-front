import { AxiosPromise } from 'axios';
import { RawResponse } from '../@types';
import HttpClient from '../api/HttpClient';

export default class GameServices extends HttpClient {
  private static classInstance?: GameServices;

  public static getInstance(): GameServices {
    if (!this.classInstance) {
      this.classInstance = new GameServices();
    }

    return this.classInstance;
  }

  public getGames = (params = ''): AxiosPromise<RawResponse> => this.instance.get(`/games${params}`);

  public getDeveloperGame = (id: number): AxiosPromise<RawResponse> => this.instance.get(`/games${id}/development-team`);
}
