import { Component, OnInit } from '@angular/core';
import { Game, games } from 'src/app/data/games';
import { SelectGameService } from 'src/app/services/select-game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dataGame = games;
  gameD: Game = games[0];

  selectedGame: Game = games[0];

  constructor(private service: SelectGameService) {
    this.service.currentGameData.subscribe((data) => {
      this.gameD = data;
    });
  }

  ngOnInit() {
    this.selecGame();
  }

  changeGame(game: Game) {
    this.gameD = game;
  }

  selecGame() {
    console.log('=====================');
    console.log(this.gameD);
    console.log(this.service.getSelectedGame());
    console.log('=====================');

    // Certifique-se de que o serviço retorna os dados desejados
    this.gameD = this.service.getSelectedGame();
  }
}
