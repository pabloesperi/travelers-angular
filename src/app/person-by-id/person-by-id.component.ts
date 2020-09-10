import { Component, OnInit } from '@angular/core';  
import { Person } from '../models/Person';
import { PersonServiceService } from '../services/person-service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-person-by-id',
  templateUrl: './person-by-id.component.html',
  styleUrls: ['./person-by-id.component.css']
})
export class PersonByIdComponent implements OnInit {

  persons:Person[];
  person:Person = new Person();

  constructor(private personService:PersonServiceService) { }

  ngOnInit(): void {

    this.personService.getAllPersons().subscribe(
      persons => this.persons = persons

    )
  }
  getPersonById(id){
/*     El valor id tiene que ser el mismo que en el html que estamos trayendo. 
 */    console.log(id.value)
    this.personService.getPersonById(id.value).subscribe(
      person => this.person = person
    )
  }

  deletePersonById(deleteNumber){
    /* El valor id tiene que ser el mismo que en el html que estamos trayendo. */
    console.log(deleteNumber.value)
    this.personService.deletePersonById(deleteNumber.value).subscribe()
  }

  savePerson(){
    console.log(this.person)
    this.personService.savePerson(this.person).subscribe()
  }

  getPersonByName(nombre){
    console.log(nombre.value)
    this.personService.getPersonByName(nombre.value).subscribe()
  }
}
