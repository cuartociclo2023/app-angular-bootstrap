import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListaAlumnosComponent } from './form-lista-alumnos.component';

describe('FormListaAlumnosComponent', () => {
  let component: FormListaAlumnosComponent;
  let fixture: ComponentFixture<FormListaAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormListaAlumnosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormListaAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
