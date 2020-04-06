import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  // Decorador, se le debe agregar la referencia al html el cual va tener un #
  @ViewChild('txtProgress', null) txtProgress: ElementRef;

  @Input() progreso: number;
  @Input() leyenda = 'leyenda';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() {
    this.progreso = 50;
  }

  ngOnInit() {
  }

  onChanges(newValue: number) {

    // const elemHTML: any = document.getElementsByName('progreso')[0];
    if ( this.progreso >= 100) {
      this.progreso = 100;
    } else if (this.progreso <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    // elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();

  }

  cambiarValor(valor: number) {
    if ( this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
  }
}
