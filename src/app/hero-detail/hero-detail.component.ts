import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero/hero.component';

@Component({
  selector: 'app-hero-detail',
  template: `
    <div *ngIf="hero">
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  `,
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
