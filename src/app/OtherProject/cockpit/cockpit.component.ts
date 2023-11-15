import { Component, ElementRef, EventEmitter, Output,ViewChild,ViewChildren,QueryList  } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{ serverData: { serverName: string, serverContent: string } }>();
  @Output() bluePrintCreated = new EventEmitter<{ serverData: { serverName: string, serverContent: string } }>();

  @ViewChild('referencia', { static: false }) referencia!: ElementRef;
  @ViewChildren('Getallh1') Getallh1!: QueryList<ElementRef>;

  test() {
    console.log(this.referencia.nativeElement);
    this.Getallh1.forEach((item) => {
      console.log(item.nativeElement.innerHTML)
    })
  }

  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverCreated.emit({
      serverData: {
        serverName: this.newServerName,
        serverContent: this.newServerContent
      }
    });
  }

  onAddBluePrint() {
    this.bluePrintCreated.emit({
      serverData: {
        serverName: this.newServerName,
        serverContent: this.newServerContent
      }
    });
  }



}
