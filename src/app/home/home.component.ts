import { Component, OnInit } from '@angular/core';
import { YouTubeService } from '../youtube.service';
import { NgxSpinnerService } from '../ngx-spinner.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // youtube
  youtubeVideosArray: any[]
  videoTitle: string;
  videoSubscription: string;

  constructor(private youTubeService: YouTubeService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  // youtube trial
  this.spinner.show()
  setTimeout(() => {
    this.spinner.hide()
  }, 3000);
  // initiate videos array
  this.youtubeVideosArray = [];
  // call youtube service
  this.youTubeService.getVideosForChanel('UC4UWbQ23IbWwU-XG7XIWxvQ', 10)
  .subscribe(youTubeVideoList => {
    for (let element of youTubeVideoList["items"]) {
      this.youtubeVideosArray.push(element);
      }
  });
  }
  public captureVideoDetails(video: any) {
    const videoDetails = {
      title : video.snippet.title,
      description: video.snippet.description
    };
    this.videoTitle = video.snippet.title;
    this.videoSubscription = video.snippet.description
    this.youTubeService.updateDetailsObject(videoDetails);
  }

}
