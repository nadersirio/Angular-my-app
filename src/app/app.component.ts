import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  buttonLabel: string = 'Botões';
  isAliveCheckSample:boolean = true;

  disposeCheckSample():void{
    this.isAliveCheckSample = false;
  }
}
