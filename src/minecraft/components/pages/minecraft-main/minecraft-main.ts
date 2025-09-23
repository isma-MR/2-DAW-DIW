import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Boton } from "../../ui/boton/boton";
import { Progreso } from '../../ui/progreso/progreso';
import { Panel } from '../../ui/panel/panel';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'minecraftMain-root',
  imports: [RouterOutlet, MatButtonModule, MatDividerModule, Boton, Progreso, Panel, CommonModule],
  templateUrl: './minecraft-main.html',
  styleUrl: './minecraft-main.scss'
})
export class MinecraftMain {
  protected readonly title = signal('Prueba-Lorenzo-App');
  porcentaje: number = 0;
  titleProgreso: string = "Progreso de carga";

  handleOnClick(): void {
    this.porcentaje += 10; 
  }
}
