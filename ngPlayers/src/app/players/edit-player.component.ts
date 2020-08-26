import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  API_URL = 'http://localhost:3000/players/';
  playerForm: FormGroup;
  submitted = false;
  player: any;
  playerId = '';
  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private http: HttpClient) { }

  editForm() {

    this.playerForm = this.formBuilder.group({
      name: [this.player.name, Validators.required],
      city: [this.player.city, Validators.required],
      gender: [this.player.gender, Validators.required],
      avgPts: [this.player.avgPts, Validators.required],
      team: [this.player.team, Validators.required],
    });

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.playerId = params.id;
    })
    this.getPlayer();
  }

  getPlayer() {
    this.http.get(`${this.API_URL}` + this.playerId).subscribe(data => {
            this.player = data;
            console.log(this.player.name);
            this.editForm();
    });
  }

  get f() { return this.playerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.playerForm.invalid) {
            return;
        }

        const playerDetails = { name: this.playerForm.value.name,
                                city: this.playerForm.value.city,
                                gender: this.playerForm.value.gender,
                                avgPts: this.playerForm.value.avgPts,
                                team: this.playerForm.value.team
                                };
        this.http.put<any>(`${this.API_URL}` + this.playerId, playerDetails).subscribe(data => {
            this.router.navigateByUrl('list');
        })
    }

    onReset() {
        this.submitted = false;
        this.playerForm.reset();
    }

}
