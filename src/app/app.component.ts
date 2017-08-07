import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>这里是标题的内容：{{title}}</h1>
    <h2>这里是英雄的id：{{hero.id}} details!</h2>
    <h2>这里是英雄的名称：{{hero.name}} details!</h2>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hero: Hero = {
    id: 1,
    name: 'spiderman'
  }
}

export class Hero {
  id: number;
  name: string;
}
