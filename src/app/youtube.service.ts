import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YouTubeService {

  apiKey : string = 'AIzaSyA9aBRVPNTZOfmre40nnFWjfKGYT5VlVpY';

  constructor(public http: HttpClient) { }

    getVideosForChanel(channelId, videoLimit): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channelId + '&order=date&part=snippet &type=video,id&maxResults=' + videoLimit
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
}