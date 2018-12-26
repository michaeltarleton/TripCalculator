import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { Friend } from '@app/core/services/friend.interface'
import { FriendService } from '@app/core/services/friend.service'

@Component({
  selector: 'app-friend-list-dashboard',
  templateUrl: './friend-list-dashboard.component.html',
  styleUrls: ['./friend-list-dashboard.component.css'],
})
export class FriendListDashboardComponent implements OnInit {
  cards: Observable<ReadonlyArray<Friend>> | undefined

  // private values: ReadonlyArray<Friend> = [
  //   { name: 'Sam', purchasedItems: [{ name: 'Snickers', price: 10.9999 }] },
  //   { name: 'Sam', purchasedItems: [{ name: 'Snickers', price: 10.99 }] },
  //   { name: 'Sam', purchasedItems: [{ name: 'Snickers', price: 10.99 }] },
  //   { name: 'Sam', purchasedItems: [{ name: 'Snickers', price: 10.99 }] },
  //   { name: 'Sam', purchasedItems: [{ name: 'Snickers', price: 10.99 }] },
  // ]

  constructor(private friendService: FriendService) {}

  ngOnInit(): void {
    // this.cards = of(this.values)
    this.cards = this.friendService.getAll()
  }
}
