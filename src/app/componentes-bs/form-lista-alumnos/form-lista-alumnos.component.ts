import { Component } from '@angular/core';

@Component({
  selector: 'app-form-lista-alumnos',
  templateUrl: './form-lista-alumnos.component.html',
  styleUrl: './form-lista-alumnos.component.css'
})
export class FormListaAlumnosComponent {
  mostrarAlumnos = 0;
  alumnos = [
    {nombre: 'Karla Miranda'},
    {nombre: 'Jesús Orbeso'},
    {nombre: 'María Gomez'},
    {nombre: 'Felix Romero'},
  ]
  cursos = [
    {nombre: "Desarrollo de Aplicaciones Móviles", precio: 8000},
    {nombre: "Administración de base de datos", precio: 5000},
    {nombre: "Desarrollo de Aplicaciones Web", precio: 6500},
    {nombre: "Desarrollo de Servicio Web", precio: 3000},
    {nombre: "Desarrollo de Aplicaciones Móviles iOS", precio: 10000}
  ]
  fechaActual = new Date()

  showStudents(){
    this.mostrarAlumnos = 1;
  }
  showCourses(){
    this.mostrarAlumnos = 0;
  }

}
