import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPostResult(){
    const getResult = this.http.get('https://jsonplaceholder.typicode.com/users');
    console.log("Check Resukt here", getResult);
    return getResult;
  }
}
