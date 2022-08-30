import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gato',
  templateUrl: './gato.component.html',
  styleUrls: ['./gato.component.scss']
})
export class GatoComponent {

  public alto: number = 300;
  public ancho: number = 300;

  public capturarAnchoYAlto(event: Event): void{
    const escrito = (event.target as HTMLInputElement).value;
    this.ancho = Number.parseInt(escrito);
    this.alto = Number.parseInt(escrito);
  }

}
