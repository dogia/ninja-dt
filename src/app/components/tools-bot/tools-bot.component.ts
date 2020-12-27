import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools-bot',
  templateUrl: './tools-bot.component.html',
  styleUrls: ['./tools-bot.component.scss']
})
export class ToolsBotComponent implements OnInit {
  public active: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
