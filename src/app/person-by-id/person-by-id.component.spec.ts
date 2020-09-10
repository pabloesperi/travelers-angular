import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonByIdComponent } from './person-by-id.component';

describe('PersonByIdComponent', () => {
  let component: PersonByIdComponent;
  let fixture: ComponentFixture<PersonByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
