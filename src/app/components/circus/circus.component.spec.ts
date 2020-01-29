import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircusComponent } from './circus.component';

describe('CircusComponent', () => {
  let component: CircusComponent;
  let fixture: ComponentFixture<CircusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
