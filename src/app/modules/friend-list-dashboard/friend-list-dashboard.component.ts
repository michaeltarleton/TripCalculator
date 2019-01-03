import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { Friend } from '@app/core/services/friend.interface'
import { FriendService } from '@app/core/services/friend.service'
import { delay, retryWhen, take } from 'rxjs/operators'

@Component({
  selector: 'app-friend-list-dashboard',
  templateUrl: './friend-list-dashboard.component.html',
  styleUrls: ['./friend-list-dashboard.component.css'],
})
export class FriendListDashboardComponent implements OnInit {
  friends: Observable<ReadonlyArray<Friend>> | undefined

  constructor(private friendService: FriendService) {}

  ngOnInit(): void {
    this.friends = this.friendService.getAll().pipe(
      retryWhen(e =>
        e.pipe(
          delay(3000),
          take(20)
        )
      )
    )
  }
}
