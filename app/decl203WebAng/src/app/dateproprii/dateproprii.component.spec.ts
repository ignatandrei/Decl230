import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepropriiComponent } from './dateproprii.component';

describe('DatepropriiComponent', () => {
  let component: DatepropriiComponent;
  let fixture: ComponentFixture<DatepropriiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepropriiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepropriiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
