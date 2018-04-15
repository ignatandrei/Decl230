import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfgeneratorComponent } from './pdfgenerator.component';

describe('PdfgeneratorComponent', () => {
  let component: PdfgeneratorComponent;
  let fixture: ComponentFixture<PdfgeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfgeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
