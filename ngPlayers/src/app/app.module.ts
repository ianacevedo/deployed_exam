import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListPlayersComponent } from './players/list-players.component';
import { CreatePlayerComponent } from './players/create-player.component';
import { EditPlayerComponent } from './players/edit-player.component';
import { RouterModule, Routes } from '@angular/router';
import { PlayerService } from './players/player.service';
import { PlayersModule } from './players/players.module';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'list', component: ListPlayersComponent },
  { path: 'create', component: CreatePlayerComponent },
  { path: 'view/:id', component: EditPlayerComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListPlayersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    PlayersModule,
    ReactiveFormsModule,
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
