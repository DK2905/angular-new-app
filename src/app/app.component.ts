import { Component } from '@angular/core';
import { UserService } from '../app/services/user.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-new-app';
  config = [{header:'Id'}, {header:'Name'},{header:'Email'},{header:'Mobile'},{header:'Address'}];
  arr = [];
  newData: any;
  constructor(public userService: UserService) {

  }
  ngOnInit() {
  this.newData = this.userService.userData;
    setInterval(() => {
      this.arr.push({id: this.newData.id++, name: this.newData.name, email: this.newData.email, mobile: this.newData.mobile, address: this.newData.address});
    }, 2000);
  }
}
