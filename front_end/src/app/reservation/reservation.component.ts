import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  name: string='Appareil';
  status: string='Status';
  Description: string='Description';

  constructor(private appreilService: AppareilService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id=this.route.snapshot.params['id'];
    this.name = this.appreilService.getAppareilById(+id).name;
    this.status= this.appreilService.getAppareilById(+id).status;
    this.Description=this.appreilService.getAppareilById(+id).Description;
  }


}
