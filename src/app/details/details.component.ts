import { Component, OnInit } from '@angular/core';
// import { YouTubeService } from 'src/app/youtube.service';
import { observable, combineLatest as combineLatest } from 'rxjs';
import { YouTubeService } from '../youtube.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [YouTubeService]
})
export class DetailsComponent implements OnInit {
  public title;
  public description;

  constructor(private youTubeService: YouTubeService) { 
    console.log('this', this);
    this.title = sessionStorage.getItem('youtube_title');
    this.description = sessionStorage.getItem('youtube_description');
  }

  ngOnInit(): void {
  }
  
}
