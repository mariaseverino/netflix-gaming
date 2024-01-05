import { Component, Input } from '@angular/core';
import { Game } from 'src/app/data/games';
import { SelectGameService } from 'src/app/services/select-game.service';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css'],
})
export class CarrosselComponent {
  @Input() games: Game[];
  translateX: number = 0;

  idx = 0;
  constructor(private selectGame: SelectGameService) {}

  onSelectGame(game: Game) {
    const selectedGame = game;
    this.selectGame.changeGame(selectedGame);
    console.log(selectedGame.name);

    this.selectGame.updateGameData(selectedGame);
  }

  carrossel() {
    this.idx++;

    if (this.idx > this.games.length - 1) {
      this.idx = 0;
    }
  }

  goToRight() {
    let teste = this.games.length * 370;

    this.translateX = this.translateX - Math.round(window.innerWidth / 2);
    // this.translateX = this.translateX + 370;
    if (window.innerWidth - teste > this.translateX) {
      this.translateX = window.innerWidth - teste - 40;
    }
  }

  goToLeft() {
    let teste = this.games.length * 350;

    this.translateX = Math.round(window.innerWidth / 2) + this.translateX;
    // this.translateX = this.translateX + 370;
    if (this.translateX >= 0) {
      this.translateX = 0;
    }
  }
}
