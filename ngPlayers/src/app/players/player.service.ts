import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './player.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PlayerService {
    API_URL = 'http://localhost:3000/players';
    constructor(private httpClient: HttpClient) { }

    getPlayers(): Observable<Player[]> {
        return this.httpClient.get<Player[]>(`${this.API_URL}`)
        .pipe(
          catchError(this.handleError<Player[]>('players', []))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.log(`failed: ${error.message}`);
        return of(result as T);
      };
    }
}
