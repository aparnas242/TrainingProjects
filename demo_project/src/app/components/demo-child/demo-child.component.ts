import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-demo-child',
  standalone: true,
  imports: [DatePipe],
  template: `
    <button (click)="newCount(-1)">-</button>
    <span>{{ count }}</span>
    <button (click)="newCount(+1)">+</button>
    <br>
    @if (a >= b) {
    you are LEGAL!}
    <br><br>
    <p>Your birthday : {{ scheduledOn | date:'shortDate'}}.</p>
  `,
 // templateUrl: './demo-child.component.html',
  //styleUrl: './demo-child.component.css'
})
export class DemoChildComponent {
  a:number ;
  @Input() count: number;
  @Output() countChange = new EventEmitter<number>();
scheduledOn= '02-02-2002';
  newCount(amount: number): void {
    this.count += amount;
    this.countChange.emit(this.count);
    this.a=this.count;
  }
  b : number =18;
}
