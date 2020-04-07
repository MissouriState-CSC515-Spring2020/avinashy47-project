import { Component, OnInit } from '@angular/core';
import { YouTubeService } from '../youtube.service';
import { NgxSpinnerService } from '../ngx-spinner.service';

@Component({
  selector: 'app-summer',
  templateUrl: './summer.component.html',
  styleUrls: ['./summer.component.css']
})

// UCeaeJX8Q3R5pDmMBkX8yJAg
export class SummerComponent implements OnInit {

  youtubeVideosArray: any[]

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
  this.youTubeService.getVideosForChanel('UCeaeJX8Q3R5pDmMBkX8yJAg', 10)
  .subscribe(youTubeVideoList => {
    for (let element of youTubeVideoList["items"]) {
      this.youtubeVideosArray.push(element);
      }
  });
  }

}
