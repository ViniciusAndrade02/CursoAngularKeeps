import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxComponent } from './ng-rx.component';

describe('NgRxComponent', () => {
  let component: NgRxComponent;
  let fixture: ComponentFixture<NgRxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgRxComponent]
    });
    fixture = TestBed.createComponent(NgRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
