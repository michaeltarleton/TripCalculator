import { Component, Input, OnInit } from '@angular/core'

import { PurchasedItem } from '@app/core/services/purchased-item.interface'
import { PurchasedItemService } from '@app/core/services/purchased-item.service'

@Component({
  selector: 'app-purchased-item',
  templateUrl: './purchased-item.component.html',
  styleUrls: ['./purchased-item.component.css'],
})
export class PurchasedItemComponent implements OnInit {
  @Input()
  purchasedItems: ReadonlyArray<PurchasedItem> = []
  @Input()
  friendId: string | undefined

  displayedColumns: ReadonlyArray<string> = ['name', 'price', 'actions']

  constructor(private purchasedItemService: PurchasedItemService) {}

  ngOnInit(): void {}

  getTotalCost(): number {
    return this.purchasedItems.map(t => t.price).reduce((acc, value) => acc + value, 0)
  }

  remove(id: string): void {
    // tslint:disable-next-line:no-if-statement
    if (!this.friendId) {
      return
    }
    this.purchasedItemService
      .remove(this.friendId, id)
      .subscribe(() => (this.purchasedItems = this.purchasedItems.filter(f => f.id !== id)))
  }

  update(purchasedItem: PurchasedItem): void {
    // tslint:disable-next-line:no-if-statement
    if (!this.friendId) {
      return
    }
    this.purchasedItemService
      .update(this.friendId, purchasedItem.id, purchasedItem)
      .subscribe(() => (this.purchasedItems = this.purchasedItems.filter(f => f.id !== purchasedItem.id)))
  }
}
