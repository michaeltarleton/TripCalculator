import { Component, Input } from '@angular/core'

import { Friend } from '@app/core/services/friend.interface'
import { PurchasedItem } from '@app/core/services/purchased-item.interface'
import { PurchasedItemService } from '@app/core/services/purchased-item.service'

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css'],
})
export class FriendComponent {
  @Input()
  // @ts-ignore
  friend: Friend

  constructor(private purchasedItemService: PurchasedItemService) {}

  addPurchasedItem(): void {
    // TODO: Fix bug where clicking this with an empty list adds new values back to the list from the old list
    const newPurchasedItem: PurchasedItem = {
      name: '(placeholder)',
      price: 0.0,
    }
    this.purchasedItemService.add(this.friend.id, newPurchasedItem).subscribe((id: string) => {
      newPurchasedItem.id = id
      this.friend.purchasedItems = [...this.friend.purchasedItems, newPurchasedItem]
    })
  }
}
