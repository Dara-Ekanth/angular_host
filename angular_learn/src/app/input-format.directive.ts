import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') InputFormattype!: string; // if we have only one input by aliasing 
   // the same name as selector we have a advantage, in HTML we can use same name 
   // for property binidng also.
  constructor(private el: ElementRef) { }
  // @HostListener('focus') onFocus(){
  //   console.log("In On Focus...");
  // }
  @HostListener('blur') onBlur(){
    console.log("In On Blur...");
    let value: string = this.el.nativeElement.value;
    if (this.InputFormattype == "lower")
    this.el.nativeElement.value = value.toLocaleLowerCase();
    else
    this.el.nativeElement.value = value.toUpperCase();
  }
  



}
