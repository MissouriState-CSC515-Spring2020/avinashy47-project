import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

// export class DetailsComponent implements OnInit {
//   public title;
//   public description;
//   videoDetails: any[];

//   constructor(private youTubeService: YouTubeService) {
//     console.log('youtube - details', youTubeService);
//     console.log('youtube - this', this.youTubeService);
//   }

//   ngOnInit(): void {
//     this.videoDetails = [];
//     combineLatest(this.youTubeService.videoDetails$).subscribe(([selectedVideoDetails]) => {
//       console.log('combinelatest');
//         this.videoDetails.push({
//           title: selectedVideoDetails.title,
//           description: selectedVideoDetails.description
//         })
//     })
//   }
  
// }
export class DetailsComponent implements OnInit {
  public title: string;
  public description: string;

  constructor() {
  }

  ngOnInit(): void {
    this.title = sessionStorage.getItem('youtube_title');
    this.description = sessionStorage.getItem('youtube_description');
  }
  
}


// export class DetailsComponent implements OnInit {

//   private unsubscribe$ = new Subject();
//   videos: any[];
//   constructor(private youTubeService: YouTubeService) { }

//   ngOnInit() {
//     this.videos = [];
//     console.log('Fetching videos... ');
//     this.youTubeService
//       .getVideosForChanel('UCeaeJX8Q3R5pDmMBkX8yJAg', 1)
//       .subscribe(lista => {
//         for (const element of lista['items']) {
//           console.log('details', element.snippet.description);
//           console.log('title', element.snippet.title);
//           this.videos.push({
//             details: element.snippet.description,
//             title: element.snippet.title
//           });
//         }
//       });
//   }

// }