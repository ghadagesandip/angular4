import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer : boolean = false;
  serverCreationStatus : string = 'No server was created';
  serverName = 'test server';
  serverCreated = false;
  servers = ['test server 1', 'test server 2']
  constructor() {
    this.serverCreationStatus = Math.random() > 0.5 ? 'Online' : 'Offline'
  }


  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName)
  }

  ngOnInit() {
  }

  updateServerName(event : any){

    this.serverName = event.target.value;
  }


  getColor(){
    if(this.serverCreationStatus==='online'){
      return 'green';
    }else{
      return 'red';
    }
  }


}
