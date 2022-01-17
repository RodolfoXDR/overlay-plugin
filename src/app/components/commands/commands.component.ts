import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'overlay-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {

  public showCommands : boolean = true;

  public commandSearch : string;

  constructor() {
    this.commandSearch = '';
  }

  ngOnInit(): void {}

}
