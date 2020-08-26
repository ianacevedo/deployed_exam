import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditPlayerComponent } from './edit-player.component';
import { CreatePlayerComponent } from './create-player.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditPlayerComponent, CreatePlayerComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class PlayersModule { }
