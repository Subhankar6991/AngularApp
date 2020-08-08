import { Directive, OnInit, Input, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHilight]'
})
export class HilightDirective implements OnInit{

  @Input('appHilight') appHilight: string;

  @HostBinding('style.background-color') backgroundColor: string;

  constructor(private elementRef: ElementRef,private renderer: Renderer2) {

   }

  ngOnInit(): void {

  }

  @HostListener('mouseenter') onMouseEnter(event: MouseEvent) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'gray');
    this.backgroundColor = "gray";
  }
  @HostListener('mouseleave') onMouseLeave(event: MouseEvent) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
    this.backgroundColor = "orange"
  }

  @HostListener('click') onClick(event: MouseEvent) {
    this.backgroundColor = "darkblue";
  }
}
