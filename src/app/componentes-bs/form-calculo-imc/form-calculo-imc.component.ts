import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calculo-imc',
  templateUrl: './form-calculo-imc.component.html',
  styleUrl: './form-calculo-imc.component.css'
})
export class FormCalculoImcComponent {

  formImc = {
    nombre: null,
    peso: null,
    talla: null,
    valorimc: 0
  }
  mostrarResultado = false;
  listPacientes: Paciente = [];

  calcularImc(){
    let tallam = Number(this.formImc.talla)/100;
    this.formImc.valorimc = Number(this.formImc.peso) / (tallam * tallam);
    let status = ""
    if(this.formImc.valorimc <= 18.5){
      status = "Por debajo del peso."
    }else if(this.formImc.valorimc <= 25){
      status = "Peso normal."
    }else if(this.formImc.valorimc <= 30){
      status = "Sobrepeso."
    }else if(this.formImc.valorimc <= 35 ){
      status = "Obesidad leve."
    }else if(this.formImc.valorimc <= 39){
      status = "Obesidad media."
    }else {
      status = "Obesidad mórbida."
    }
    this.listPacientes.push({nombre: String(this.formImc.nombre), valorimc: this.formImc.valorimc, status: status})
  }


}
type Paciente = Array<{nombre: string, valorimc: number, status: string}>;
