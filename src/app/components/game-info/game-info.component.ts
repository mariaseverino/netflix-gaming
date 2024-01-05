import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/data/games';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css'],
})
export class GameInfoComponent implements OnInit {
  constructor() {}

  @Input() game!: Game;

  ngOnInit() {}
}
