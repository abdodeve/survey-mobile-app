import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyOnePage } from './survey-one.page';

describe('SurveyOnePage', () => {
  let component: SurveyOnePage;
  let fixture: ComponentFixture<SurveyOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
