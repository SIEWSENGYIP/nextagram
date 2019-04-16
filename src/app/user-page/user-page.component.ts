import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  @Input() imgs = null
  @Input() userName = null

  constructor(private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    
  }
}
