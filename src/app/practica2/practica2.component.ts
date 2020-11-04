import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica2',
  templateUrl: './practica2.component.html',
  styleUrls: ['./practica2.component.css']
})
export class Practica2Component implements OnInit {
  tablas: string[] = ['2 x 1', '2 x 2', '2 x 3', '2 x 4', '2 x 5' ];
  resultados: number[] = [2, 4, 6, 8, 10];
  mostrar = false;
  constructor() { }

  ngOnInit(): void {
  }

}
