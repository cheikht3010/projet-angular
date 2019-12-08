import { Component, OnInit,Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName : string;
  @Input() appareilStatus : string;
  @Input() indexOfAppareil : number;
  @Input() id : number;
  

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
   
    }
    getStatus(){
      return this.appareilStatus;
  }

  getColor(){
    if(this.appareilStatus==='Disponible'){
      return 'green';
    }
    else if(this.appareilStatus==='indisponible'){
      return 'red';
    }
  }
  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  offSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}

