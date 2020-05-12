import { Component, OnInit } from '@angular/core';
import { YouTubeService } from '../youtube.service';
import { NgxSpinnerService } from '../ngx-spinner.service';

@Component({
  selector: 'app-spring',
  templateUrl: './spring.component.html',
  styleUrls: ['./spring.component.css']
})
export class SpringComponent implements OnInit {

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
  this.youTubeService.getVideosForChanel('UCBMNkNg2xD1BGBJ396ZaGew', 10)
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
