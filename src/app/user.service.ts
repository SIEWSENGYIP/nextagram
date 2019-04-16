import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

const usersUrl = 'https://insta.nextacademy.com/api/v1/users'
const userUrl = 'https://insta.nextacademy.com/api/v1/images?userId='

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(usersUrl)
  }

  getSpecificUser(userId) {
    return this.http.get(userUrl + `${userId}`)
  }
}
