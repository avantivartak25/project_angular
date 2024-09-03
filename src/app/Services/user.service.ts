import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[]=[
    new User(101, "Rohan Sharma", "rs", "pass1234"),
    new User(102, "Aradhya Raut", "ar", "pass1234"),
    new User(103, "Aniket Patwardhan", "ap", "pass1234"),
    new User(104, "Kartiki Joshi", "kj", "pass1234"),
    new User(105, "Vinaya Mhatre", "vm", "pass1234"),
  ]
  constructor() { }
}
