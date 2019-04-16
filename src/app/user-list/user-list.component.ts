import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Users } from '../users'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private users : Users[] = []

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((response: Users[]) => {
      this.users = response
    })
  }

  getUserList() : Users[] {
    return this.users
  }

}
