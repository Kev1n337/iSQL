import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';

@Injectable()
export class DataService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  execute(sql: string): Promise<any> {
    console.log(sql);
    return this.http
      .post('http://localhost:8080/execute', {'sql': sql}, {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

