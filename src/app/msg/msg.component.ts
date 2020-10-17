import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {

  id ?: number
  user : string;
  room : string;
  message : string;
  etat : boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
