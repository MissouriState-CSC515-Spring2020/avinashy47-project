import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'checkpoint3';
  newVersion: boolean;
  
constructor(
  private readonly swUpdate: SwUpdate) { }
ngOnInit() {
  if (this.swUpdate) {
    this.swUpdate.available
    .subscribe(update => this.newVersion = true);
  }
}
// Make a button that only appears when newVersion and use this function as its action
reload() {
  this.swUpdate.activated
    .subscribe(update => window.location.reload(true));
  this.swUpdate.activateUpdate();
}




}
