import { Component, OnInit,Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { PostService } from '../List-book/services/PostService';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class AppareilComponent implements OnInit {
  
  @Input() lvr_isbn: string;
  @Input() lvr_titre: string;
  @Input() lvr_date_de_publication: Date;
  @Input() lvr_nombre_exemplaire: number;
  @Input() aut_id: number;
  @Input() thm_id: number;

  constructor(private postService : PostService) { }

  ngOnInit() {
   
    }
    getStatus(){
      if(this.lvr_nombre_exemplaire==0){
        return 'indisponible';
      }
      return 'Disponible';
  }

  getColor(){
    if(this.lvr_nombre_exemplaire==0){
      return 'red';
    }
    else
      return 'green';
  }
  /*
  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  offSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }*/
}

