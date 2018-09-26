import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildfirstComponent } from './childfirst.component';

describe('ChildfirstComponent', () => {
  let component: ChildfirstComponent;
  let fixture: ComponentFixture<ChildfirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildfirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
