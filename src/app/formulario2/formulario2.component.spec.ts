import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario2Component } from './formulario2.component';

describe('Formulario2Component', () => {
  let component: Formulario2Component;
  let fixture: ComponentFixture<Formulario2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Formulario2Component]
    });
    fixture = TestBed.createComponent(Formulario2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
