import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'progreso',
  imports: [CommonModule],
  templateUrl: './progreso.html',
  styleUrl: './progreso.scss'
})
export class Progreso  {
    @Input() value: number = 0;
    @Input() title: string = "";
   
}