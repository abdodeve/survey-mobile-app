import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyTwoPage } from './survey-two.page';

describe('SurveyTwoPage', () => {
  let component: SurveyTwoPage;
  let fixture: ComponentFixture<SurveyTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
