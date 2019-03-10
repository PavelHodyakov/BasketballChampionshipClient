import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRefereeComponent } from './select-referee.component';

describe('SelectRefereeComponent', () => {
  let component: SelectRefereeComponent;
  let fixture: ComponentFixture<SelectRefereeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRefereeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRefereeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
