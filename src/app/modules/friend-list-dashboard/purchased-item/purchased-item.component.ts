import { Component, Input, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material'

@Component({
  selector: 'app-purchased-item',
  templateUrl: './purchased-item.component.html',
  styleUrls: ['./purchased-item.component.css'],
})
export class PurchasedItemComponent implements OnInit {
  @Input()
  purchasedItems: ReadonlyArray<any> = []

  displayedColumns: ReadonlyArray<string> = ['name', 'price', 'actions']
  dataSource: MatTableDataSource<ReadonlyArray<any>> | undefined

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource([...this.purchasedItems])
  }

  getTotalCost(): number {
    return this.purchasedItems.map(t => t.price).reduce((acc, value) => acc + value, 0)
  }
}
