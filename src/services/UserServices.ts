import { AxiosPromise } from 'axios';
import {
  IUserInterface,
  UserLoginRequestProps,
  UserFirstAccessRequestProps,
  UserForgotPasswordRequestProps,
} from '../@types/UserTypes';
import HttpClient from '../api/HttpClient';

export default class UserServices extends HttpClient {
  private static classInstance?: UserServices;

  public static getInstance(): UserServices {
    if (!this.classInstance) {
      this.classInstance = new UserServices();
    }

    return this.classInstance;
  }

  public postUserLogin = (data: UserLoginRequestProps): AxiosPromise => (
    this.instance.post<IUserInterface>('/lgautenticalogin', data)
  );
}
