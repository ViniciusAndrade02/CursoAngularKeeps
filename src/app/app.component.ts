import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    ) {

      //this.todos$ = store.select('app')
    }

  ngOnInit(): void {
    
  }


  //Projeto Seção 5
  serverElement = [
    {
      type: 'server',
      name: 'teste',
      content: 'Just a test!',
    },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElement.push({
      type: 'serve',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElement.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
}


