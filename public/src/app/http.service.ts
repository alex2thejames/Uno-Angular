import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getUsers(){
    return this._http.get('/api/users')
  }
  getOneUser(user_id) {
    return this._http.get(`/api/users/${user_id}`)
  }

  createUser(user_from_component) {
    return this._http.post('/api/users', user_from_component)
  }

  editUser(user_from_component) {
    return this._http.put(`/api/users/${user_from_component._id}`, user_from_component)
  }

  deleteUser(user_id) {
    return this._http.delete(`/api/users/${user_id}`)
  }
}
