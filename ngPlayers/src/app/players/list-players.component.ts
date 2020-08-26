import { Component, OnInit } from '@angular/core';
import { Player } from './player.model';
import { PlayerService } from './player.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {
  API_URL = 'https://localhost:3000/players/';
  players: Player[];
  constructor(private playerService: PlayerService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  public getPlayers() {
    this.playerService.getPlayers().subscribe((data: Player[]) => {
      this.players = data;
    });
  }

  public delPlayer(id) {
    const answer = confirm('Delete?');
    if (answer) {
      this.http.delete(`${this.API_URL}`+id).subscribe(data => {
        this.getPlayers();
      });
    }
  }
}
