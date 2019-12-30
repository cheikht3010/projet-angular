import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service'
import { ActivatedRoute } from '@angular/router';
import { PostListItem } from '../List-book/services/dataModel/PostListItem';
import { Authors } from '../List-book/services/dataModel/Authors';
import { PostService } from '../List-book/services/PostService';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  status: string='Status';
  
  @Input() lvr_isbn: string;
  public postList: Promise<PostListItem[]>;
  public authors : Promise<Authors[]>;
  constructor(private appreilService: AppareilService,
              private route: ActivatedRoute,
              private postService : PostService) { }

  ngOnInit() {
    const id=this.route.snapshot.params['lvr_isbn'];
    this.status = id;
    this.postList= this.postService.getAllPostItems();
    this.authors=this.postService.getAllAuthors();
  }

}
