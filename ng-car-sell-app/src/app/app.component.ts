import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  monPara: number = 0;
  texte='Bonjour char ami';
  affiche=false;

  onClickButton():void{
    // console.log('Hello Word');
    // this.texte='Bonjour';
    this.affiche = this.affiche?false:true;
  }
}
