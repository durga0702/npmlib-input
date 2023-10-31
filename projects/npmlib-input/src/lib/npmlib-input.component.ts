import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-npmlib-input',
  templateUrl: './npmlib-input.component.html',
  styles: [
  ]
})
export class NpmlibInputComponent {
@Input() inputValue?:any = '' || null;
@Output() typedValue= new EventEmitter();

onchange(data:any){
  this.typedValue.emit(data.target.value);
}
}
