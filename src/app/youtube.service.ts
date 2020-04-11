import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

export interface YouTubeVideoDetails {
  title: string;
  description?: string;
}

@Injectable()

export class YouTubeService {
  public videoDetails$: Observable<YouTubeVideoDetails | null>;
  public videoDetailsSubject$ = new BehaviorSubject<YouTubeVideoDetails | null>(null);
  public videoTitle;
  public videoDescription;

  apiKey : string = 'AIzaSyA9aBRVPNTZOfmre40nnFWjfKGYT5VlVpY';

  constructor(public http: HttpClient) {
    this.videoDetails$ = this.videoDetailsSubject$.asObservable().pipe(filter((details: YouTubeVideoDetails) => !!details));
    this.videoTitle = '';
    this.videoDescription = '';
  }

    getVideosForChanel(channelId, videoLimit): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channelId + '&order=date&part=snippet &type=video,id&maxResults=' + videoLimit
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
  public updateDetailsObject(details: YouTubeVideoDetails) {
    sessionStorage.setItem('youtube_title', details.title);
    sessionStorage.setItem('youtube_description', details.description);
  }
}