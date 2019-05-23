import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzePage } from './analyze.page';

describe('AnalyzePage', () => {
  let component: AnalyzePage;
  let fixture: ComponentFixture<AnalyzePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
