import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {
  API_URL = 'https://localhost:3000/players';
  playerForm: FormGroup;
  submitted = false;
  dataId = '';
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private http: HttpClient) { }

  createForm() {
    this.playerForm = this.formBuilder.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      gender: ['', Validators.required],
      avgPts: ['', Validators.required],
      team: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.createForm();
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

        this.http.post<any>(`${this.API_URL}`, playerDetails).subscribe(data => {
            this.dataId = data.id;
            this.router.navigateByUrl('list');
        });
    }

    onReset() {
        this.submitted = false;
        this.playerForm.reset();
    }

}
