import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CommonModule} from '@angular/common';
 
@Component({
  selector: 'boton',
  imports: [CommonModule],
  templateUrl: './boton.html',
  styleUrl: './boton.scss'
})
export class Boton  {
  @Input() importanciaBoton:'primaria' | 'secundaria' | 'terciaria'='primaria';
  @Input() funcionBoton:'principal' | 'alternativa' | 'peligrosa'='principal';
  importanciaBotonClass():string{
  switch (this.importanciaBoton) {
    case 'primaria':
      return "importancia--primaria";
    case 'secundaria':
      return 'importancia--secundaria';
    case 'terciaria':
      return "importancia--terciaria";
    default:
      throw Error('Importancia no válida' + this.funcionBoton);
    }
  }
  botonStyle() {
  switch (this.funcionBoton) {
    case 'principal':
      return {'--color-boton': 'var(--color-principal)'};
    case 'alternativa':
      return {'--color-boton': 'var(--color-alternativo)'};
    case 'peligrosa':
      return {'--color-boton': 'var(--color-peligro)'};
    default:
      return {};
  }
}

  @Input() backgroundColor:string='0B0A0A';
  @Input() color:string='F5F7FF';
  @Input() href:string="";
  @Output() onClick = new EventEmitter<void>();

  handleOnClick(): void {
    this.onClick.emit();
  }

}