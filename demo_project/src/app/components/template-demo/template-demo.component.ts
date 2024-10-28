import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule],
  
  //templateUrl: './template-demo.component.html',
  template:`<h3>Welcome to ASAP Company {{x}}</h3><br>
      <ul [class]="listClasses"> Hello</ul>
      <section [class]="sectionClasses">Good Morning</section><br>
      <button [class]="buttonClasses">Click Me </button>
      <section [style.margin.px]="sectionHeightInPixels">hi</section>
      <section style="border: 2px solid blue; font-weight: bold"> Have A Great Day </section>
      <br>
      <div><h2>Its the time to {{ word }}!</h2><input type="text" [(ngModel)]="word" /></div>
  `,
  styleUrl: './template-demo.component.css'
})
export class TemplateDemoComponent {
  x='Guys';
  listClasses = 'full-width outlined';
  sectionClasses = ['expandable', 'elevated'];
  buttonClasses = {
    highlighted: true,
    embiggened: false,
  };
  sectionHeightInPixels = 80;
  word = 'disco';
}
