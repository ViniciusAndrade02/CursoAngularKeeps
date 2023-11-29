import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpBackEndComponent } from './http-back-end.component';

describe('HttpBackEndComponent', () => {
  let component: HttpBackEndComponent;
  let fixture: ComponentFixture<HttpBackEndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpBackEndComponent]
    });
    fixture = TestBed.createComponent(HttpBackEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
