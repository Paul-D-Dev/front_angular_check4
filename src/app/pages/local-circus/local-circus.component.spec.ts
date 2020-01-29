import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalCircusComponent } from './local-circus.component';

describe('LocalCircusComponent', () => {
  let component: LocalCircusComponent;
  let fixture: ComponentFixture<LocalCircusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalCircusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalCircusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
