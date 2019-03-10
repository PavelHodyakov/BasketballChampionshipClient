import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private static DEFAULT_PATH = 'http://localhost:8080/rest-app/rest/gate/';//'http://localhost:8080/base/champ/';

  constructor(private http: HttpClient) {
  }

  /**
   * Вызов веб-сервиса
   * @param methodName - имя метода
   * @param params - параметры
   */
  public doCall(methodName: string, params: any) {
    const fullPath = RestService.DEFAULT_PATH + methodName;
    console.log('calling ' + fullPath + ' with params: ', params);
    return this.http.post(fullPath, params);
  }

  /**
   * Вызов веб-сервиса
   * @param methodName - имя метода
   * @param params - параметры
   */
  public doGet(methodName: string) {
    const fullPath = RestService.DEFAULT_PATH + methodName;
    console.log('calling ' + fullPath);
    return this.http.get(fullPath);
  }

}
