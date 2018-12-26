import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '@env'
import { Observable } from 'rxjs'

import { Friend } from './friend.interface'

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  private readonly _baseUrl = environment.api

  constructor(private http: HttpClient) {}

  getAll(): Observable<ReadonlyArray<Friend>> {
    return this.http.get<ReadonlyArray<Friend>>(`${this._baseUrl}/friends`)
  }

  get(id: string): Observable<Friend> {
    return this.http.get<Friend>(`${this._baseUrl}/friends/${id}`)
  }

  add(friend: Friend): Observable<string> {
    return this.http.post<string>(`${this._baseUrl}/friends`, friend)
  }

  update(id: string, friend: Friend): Observable<Friend> {
    return this.http.put<Friend>(`${this._baseUrl}/friends/${id}`, friend)
  }

  remove(id: string): Observable<string> {
    return this.http.delete<string>(`${this._baseUrl}/friends/${id}`)
  }
}
