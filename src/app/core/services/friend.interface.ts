import { PurchasedItem } from './purchased-item.interface'

export interface Friend {
  name: string
  purchasedItems: ReadonlyArray<PurchasedItem>
}
