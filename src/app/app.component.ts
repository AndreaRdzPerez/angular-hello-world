import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'School Academia Ecole';

  cards = [
    {
      img: '../assets/lab.png',
      title: 'Chemistry',
      text: 'What if this said something smart. Not just smart, brilliant. Something scholarly, collegiate, academically rigorous and compelling, imagine the smartest words you have ever seen.'
    },
    {
      img: '../assets/pencil.png',
      title: 'Maths',
      text: 'What if this said something smart. Not just smart, brilliant. Something scholarly, collegiate, academically rigorous and compelling, imagine the smartest words you have ever seen.'
    },
    {
      img: '../assets/micro.png',
      title: 'Biology',
      text: 'What if this said something smart. Not just smart, brilliant. Something scholarly, collegiate, academically rigorous and compelling, imagine the smartest words you have ever seen.'
    }
  ];
}
