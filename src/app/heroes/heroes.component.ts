import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroes',
  template: `
    <p myHighlight>Highlight me!</p>
  `,
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
