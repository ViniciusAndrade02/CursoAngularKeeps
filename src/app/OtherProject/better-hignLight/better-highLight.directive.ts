import { Directive, ElementRef, OnInit,Renderer2,HostListener,HostBinding,Input } from "@angular/core";

@Directive({
  selector:'[appBetterHighLight]'
})

export class BetterHighLightDirective implements OnInit{

  @Input() DefautColor!:string 
  @Input() HightColor!:string 

  constructor(private elRef: ElementRef, private renderer: Renderer2){}

  @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent'

  ngOnInit(): void {
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','red')
    this.backgroundColor=this.HightColor
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent')
    this.backgroundColor=this.DefautColor
  }
}