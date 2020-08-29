import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(private http:HttpClient) { }

  private urlEndPoint:string='http://localhost:8080/api/getAllPersons';

  getAllPersons(): Observable <Person[]> {
    return this.http.get<Person[]>(this.urlEndPoint)
  }
}
