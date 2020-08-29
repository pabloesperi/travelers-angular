import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../services/person-service.service';
import { Person } from '../models/Person';

@Component({
  selector: 'app-list-all-persons',
  templateUrl: './list-all-persons.component.html',
  styleUrls: ['./list-all-persons.component.css']
})
export class ListAllPersonsComponent implements OnInit {

  persons:Person[];

  constructor(private PersonService:PersonServiceService) { }

  ngOnInit(): void {

    this.PersonService.getAllPersons().subscribe(
      persons => this.persons = persons
    )

  }

}
