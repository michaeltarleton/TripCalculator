import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-purchased-item',
  templateUrl: './purchased-item.component.html',
  styleUrls: ['./purchased-item.component.css'],
})
export class PurchasedItemComponent implements OnInit {
  @Input()
  purchasedItems: ReadonlyArray<any> = []

  displayedColumns: ReadonlyArray<string> = ['name', 'price']

  constructor() {}

  ngOnInit() {}

  getTotalCost(): number {
    return this.purchasedItems.map(t => t.price).reduce((acc, value) => acc + value, 0)
  }
}
