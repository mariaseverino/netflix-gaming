import { Injectable } from '@angular/core';
import { Game, games } from '../data/games';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectGameService {
  private gameDSubject = new Subject<Game>();
  gameD = games[0];

  private selectedGameSource = new BehaviorSubject<Game | null>(null);
  selectedGame$ = this.selectedGameSource.asObservable();

  private sharedGameData = new BehaviorSubject<Game>(games[0]);
  currentGameData = this.sharedGameData.asObservable();

  updateGameData(data: Game) {
    this.sharedGameData.next(data);
  }

  changeGame(game: Game) {
    console.log('------------------------');
    console.log(this.gameD);
    console.log(game);
    console.log('------------------------');
    this.gameD = game;
    this.gameDSubject.next(game);
  }

  getSelectedGame(): Game {
    return this.gameD;
  }

  selectGame(game: Game): void {
    this.selectedGameSource.next(game);
  }
}
