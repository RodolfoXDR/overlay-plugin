import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'overlay-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  public showBuilder : boolean = true;

  public frozen : boolean = true;

  public val : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
