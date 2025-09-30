import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'panel',
  imports: [CommonModule],
  templateUrl: './panel.html',
  styleUrl: './panel.scss'
})
export class Panel  {
    @Input() importancia: "primary" | "info" | "warning" | "danger" = "warning";
}