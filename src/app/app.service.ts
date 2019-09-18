import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

interface user{
id: string;
name: string;
username: string;
email: string;
address: {}
phone: string;
website: string;
company: {};
}

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  getData(): Observable<user[]>{
    return this.http.get<user[]> ("https://jsonplaceholder.typicode.com/users");
  }

}