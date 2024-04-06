import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  id:number=10;
  name:string="oline";
  constructor()
  {
    this.name=Math.random()>0.5?'online':'offline';
  }


  getserverstatus()
  {
        return  this.name
  }
  getcolor()
  {
    return this.name==='online'?'green':'red'
  }








  


}
