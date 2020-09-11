import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(private http:HttpClient) { }

  private httpHeaders= new HttpHeaders({'Content-type' : 'application/json'})

  private urlEndPoint:string='http://localhost:8080/';
  private urlEndPointgetAllPersons:string='api/getAllPersons';
  private urlEndPointgetPersonById:string='api/getPersonById/';
  private urlEndPointdeletePersonById:string='api/deletePersonById/';
  private urlEndPointSavePerson:string='api/savePerson';
  private urlEndPointgetPersonByName:string='api/getPersonByName/';

  getAllPersons(): Observable <Person[]> {
    return this.http.get<Person[]>(this.urlEndPoint + this.urlEndPointgetAllPersons)
  }

  getPersonById(id:number): Observable <Person> {
    /* console.log(id) */
    return this.http.get<Person>(this.urlEndPoint + this.urlEndPointgetPersonById + id)
  }

  deletePersonById(deleteNumber:number): Observable<{}> {
   /*  console.log(id) */
    return this.http.delete(this.urlEndPoint + this.urlEndPointdeletePersonById + deleteNumber)
  }

   savePerson(person:Person): Observable<{}> {
      console.log(person ) 
     return this.http.post(this.urlEndPoint + this.urlEndPointSavePerson, person, {headers:this.httpHeaders})
   } 

   getPersonByName(name:string): Observable <Person> {
    /* console.log(id) */
    return this.http.get<Person>(this.urlEndPoint + this.urlEndPointgetPersonByName + name)
  }

}
