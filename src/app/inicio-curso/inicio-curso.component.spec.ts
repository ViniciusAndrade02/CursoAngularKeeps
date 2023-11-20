import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCursoComponent } from './inicio-curso.component';

describe('InicioCursoComponent', () => {
  let component: InicioCursoComponent;
  let fixture: ComponentFixture<InicioCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioCursoComponent]
    });
    fixture = TestBed.createComponent(InicioCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
