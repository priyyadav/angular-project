import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  id:number=10;
  name:string="helo";
  getserverstatus()
  {
        return  this.name
  }


}
