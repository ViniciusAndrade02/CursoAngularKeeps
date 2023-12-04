import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACabecalhoComponent } from './a-cabecalho.component';

describe('ACabecalhoComponent', () => {
  let component: ACabecalhoComponent;
  let fixture: ComponentFixture<ACabecalhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ACabecalhoComponent]
    });
    fixture = TestBed.createComponent(ACabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
