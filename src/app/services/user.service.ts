import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData= {id: 0, name: 'Admin', email: 'admin@gmail.com', mobile: '9867367826', address: 'Pune, Maharashtra-411098'}
  constructor() { }
}
