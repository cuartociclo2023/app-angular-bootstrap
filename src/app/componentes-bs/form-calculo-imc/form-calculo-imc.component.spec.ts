import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCalculoImcComponent } from './form-calculo-imc.component';

describe('FormCalculoImcComponent', () => {
  let component: FormCalculoImcComponent;
  let fixture: ComponentFixture<FormCalculoImcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCalculoImcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCalculoImcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
