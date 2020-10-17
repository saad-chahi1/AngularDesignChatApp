import { Component } from '@angular/core';
import { MsgComponent } from './msg/msg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Realtime Chat Application';

  user : string;
  room : string;
  message : string;
  etat : boolean;
  static id: number = 0;

  empList: Array<MsgComponent> = [];

  join(){
     AppComponent.id = +AppComponent.id + +1;
     let newTask = new MsgComponent();
     newTask.id = AppComponent.id;
     newTask.user = this.user;
     newTask.room = this.room;
     newTask.etat = true;
     newTask.message = "join to the room" ;

     this.empList.push(newTask);
  }

  refresh(): void {
    window.location.reload();
}

  sendMessage(){

     let newTask = new MsgComponent();
     newTask.user = this.user;
     newTask.room = this.room;
     newTask.etat = true;
     newTask.message = this.message ;

     this.empList.push(newTask);
  }
}
