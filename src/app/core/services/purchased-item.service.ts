import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '@env'
import { Observable } from 'rxjs'

import { PurchasedItem } from './purchased-item.interface'

@Injectable({
  providedIn: 'root',
})
export class PurchasedItemService {
  private readonly _baseUrl = `${environment.api}/friends/`

  constructor(private http: HttpClient) {}

  getAll(friendId: string): Observable<ReadonlyArray<PurchasedItem>> {
    return this.http.get<ReadonlyArray<PurchasedItem>>(`${this._baseUrl}/${friendId}/purchasedItems`)
  }

  get(friendId: string, purchasedItemId: string): Observable<PurchasedItem> {
    return this.http.get<PurchasedItem>(`${this._baseUrl}/${friendId}/purchasedItems/${purchasedItemId}`)
  }

  add(friendId: string, purchasedItem: PurchasedItem): Observable<string> {
    return this.http.post<string>(`${this._baseUrl}/${friendId}/purchasedItems`, purchasedItem)
  }

  update(friendId: string, purchasedItemId: string, purchasedItem: PurchasedItem): Observable<PurchasedItem> {
    return this.http.put<PurchasedItem>(`${this._baseUrl}/${friendId}/purchasedItems/${purchasedItemId}`, purchasedItem)
  }

  remove(friendId: string, purchasedItemId: string): Observable<string> {
    return this.http.delete<string>(`${this._baseUrl}/${friendId}/purchasedItems/${purchasedItemId}`)
  }
}
