import { Component } from '@angular/core';
import { AppService } from './app.service'


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'boot';
  public users: [];

  constructor(private _userService: AppService) { }

  ngOnInit(){
    this._userService.getData()
    .subscribe(data => this.users= data);
  }
}
