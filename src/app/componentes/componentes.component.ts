import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.scss']
})
export class ComponentesComponent {
  public alto: number= 300;
  public ancho: number= 300;


  public capturarAnchoYAlto(event: Event): void{
    const escrito = (event.target as HTMLInputElement).value;
    this.ancho = Number.parseInt(escrito);
    this.alto = Number.parseInt(escrito);
  }

}
