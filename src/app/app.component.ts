import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>这里是标题的内容：{{title}}</h1>
    <h2>这里是英雄的名称：{{hero}} details!</h2>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hero = 'spiderman';
}
