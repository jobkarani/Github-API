import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appStrikethro]'
})
export class StrikethroDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.textDecoration='line-through';
  }

}
