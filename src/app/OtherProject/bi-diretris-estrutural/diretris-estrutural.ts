import { Directive,Input,TemplateRef,ViewContainerRef } from "@angular/core";

@Directive({
  selector:'[Constructor]'
})

export class DirectiveConstructor{
  @Input() set Constructor(condition:boolean){
    if(!condition){
      this.vcRef.clear()
    }else{
      this.vcRef.createEmbeddedView(this.templateRef)
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef){}
}