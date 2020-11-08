import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonToExcelComponent } from './json-to-excel.component';

describe('JsonToExcelComponent', () => {
  let component: JsonToExcelComponent;
  let fixture: ComponentFixture<JsonToExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonToExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonToExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
