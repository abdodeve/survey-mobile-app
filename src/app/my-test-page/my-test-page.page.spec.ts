import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestPagePage } from './my-test-page.page';

describe('MyTestPagePage', () => {
  let component: MyTestPagePage;
  let fixture: ComponentFixture<MyTestPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTestPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTestPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
