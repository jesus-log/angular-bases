import { Component } from "@angular/core"

@Component({
  selector:'app-counter',
  template:`
  <hr>
  <p>Counter: {{counter}}</p>
<button (click)="increaseBy(+1)">+1</button>
<button (click)="increaseBy(0)">Reset</button>
<button  (click)="increaseBy(-1)">-1</button>

  `
})
export class CounterComponent {
  public counter: number = 10;
  public resetValue: number =10;
  increaseBy(value:number):void {
    if(value == 0){
      this.counter = this.resetValue;
    }else{
      this.counter = this.counter + value
    }
  }
}
