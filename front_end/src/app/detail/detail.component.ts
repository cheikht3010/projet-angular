import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service'
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../List-book/services/PostService';
import { PostListItem } from '../List-book/services/dataModel/PostListItem';
import { promise } from 'protractor';
import { Authors } from '../List-book/services/dataModel/Authors';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  
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
