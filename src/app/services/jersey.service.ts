import { Injectable } from '@angular/core';
import { AppConst } from '../constants/app-const';
import { Http, Headers } from '@angular/http';

@Injectable()
export class JerseyService {
  private serverPath:string = AppConst.serverPath;

  constructor(private http:Http) { }

  getJerseyList() {
    let url = this.serverPath + "/jersey/jerseyList";

    let tokenHeader = new Headers ({
      'Content-type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    })

    return this.http.get(url, { headers: tokenHeader });
  }

  getJersey(id:number) {
    let url = this.serverPath + "/jersey/" + id;

    let tokenHeader = new Headers ({
      'Content-type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    })

    return this.http.get(url, { headers: tokenHeader });
  }

  searchJersey(keyword: string) {
    let url = this.serverPath + "/jersey/searchJersey";

    let tokenHeader = new Headers ({
      'Content-type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    })

    return this.http.post(url, keyword, { headers: tokenHeader });
  }

}
