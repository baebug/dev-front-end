import { Component, EventEmitter, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Output() clickEvent = new EventEmitter();


  constructor() { }


  executeButton(command){
    this.clickEvent.emit(command);
  }



  ngOnInit(): void {
  }

}
