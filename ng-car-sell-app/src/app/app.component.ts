import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  monPara: number = 0;
  texte='Bonjour char ami';

  onClickButton():void{
    console.log('Hello Word');
    this.texte='Bonjour';
  }
}
