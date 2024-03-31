import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowserver=false;
  servercreatio="no server was created";
  servername='test server';
  constructor() {
    setTimeout(() => {
      this.allowserver = true;
    }, 1000);
  }
  oncreateserver()
  {
    this.servercreatio="server created"
  }
  onupdateservername(event:Event)
  {
  this.servername=(<HTMLInputElement>event.target).value;
  }

}
