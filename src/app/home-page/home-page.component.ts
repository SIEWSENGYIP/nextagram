import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../users';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  imgs = null
  userName = null

  constructor(private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.userName = this.route.snapshot.params.userName

    setTimeout(() => {
      this.userService
        .getSpecificUser(this.route.snapshot.params.userId)
        .subscribe(response => {
          this.imgs = response
        })
    }, 3000)
  }
}
