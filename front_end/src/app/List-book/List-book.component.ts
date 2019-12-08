import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-List-book',
  templateUrl: './List-book.component.html',
  styleUrls: ['./List-book.component.scss']
})
export class ListBookComponent implements OnInit {

  isAuth=false;

  lastUpdate = new Promise(
    (resolve, reject)=>{
      const date =new Date();
      setTimeout(
        ()=>{
          resolve(date);
        }, 2000
      )
    }
  )

 appareils: any[];

  
  constructor( private appareilService: AppareilService){
    setTimeout(
      ()=> {
        this.isAuth=true;
      },4000
    )
  }

  ngOnInit(){
    this.appareils=this.appareilService.appareils;
  }

  onAllumer(){
    this.appareilService.switchOnAll();
  }
  onEteint(){
    this.appareilService.switchOffAll();
  }

}
