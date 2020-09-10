import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpersonRegistrationComponent } from './newperson-registration.component';

describe('NewpersonRegistrationComponent', () => {
  let component: NewpersonRegistrationComponent;
  let fixture: ComponentFixture<NewpersonRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpersonRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpersonRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
