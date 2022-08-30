import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public nombre: string = 'Camilo';
  public contador: number = 0;
  public scroll: number = 0;
  public alto: number = 300;
  public ancho: number = 300;
  public tamanoMensaje: number= 30;
  public mostrar: boolean = false;
  public color: string = "";
  public imagen: string = 'https://static9.depositphotos.com/1010305/1139/i/450/depositphotos_11390423-stock-photo-kitten-on-a-white-background.jpg';
   n1: number = 0;
   n2: number = 0;
   result: number = 0;
  public capturarAlto(event: Event): void {
    const valor = Number.parseInt((event.target as HTMLInputElement).value)
    this.alto = valor;
  }
  public capturarAncho(event: Event): void {
    const escrito = (event.target as HTMLInputElement).value;
    this.ancho = Number.parseInt(escrito);
  }
  public capturarColor(event: Event): void {
    const color = (event.target as HTMLInputElement).value;
    this.color = color;
  }
  public capturarAnchoYAlto(event: Event): void{
    const escrito = (event.target as HTMLInputElement).value;
    this.ancho = Number.parseInt(escrito);
    this.alto = Number.parseInt(escrito);
  }
   sumar(){
    this.result= this.n1 + this.n2;
  }
  restar(){
    this.result= this.n1 - this.n2;
  }
  multiplicar(){
    this.result= this.n1 * this.n2;
  }
  dividir(){
    this.result= this.n1 / this.n2;
  }


}
