import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CommonModule} from '@angular/common';
 
@Component({
  selector: 'boton',
  imports: [CommonModule],
  templateUrl: './boton.html',
  styleUrl: './boton.scss'
})
export class Boton  {
  @Input() importanciaBoton:'primaria' | 'secundaria' | 'terciaria'='secundaria';
  @Input() funcionBoton:'principal' | 'alternativa' | 'peligrosa'='alternativa';

  @Input() backgroundColor:string='0B0A0A';
  @Input() color:string='F5F7FF';
  @Input() href:string="";
  @Output() onClick = new EventEmitter<void>();

  handleOnClick(): void {
    this.onClick.emit();
  }

}