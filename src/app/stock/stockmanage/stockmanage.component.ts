import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stockmanage',
  templateUrl: './stockmanage.component.html',
  styleUrls: ['./stockmanage.component.css']
})
export class StockmanageComponent implements OnInit {

  private stocks: Array<Stock>;

  constructor() {}

  ngOnInit() {
    this.stocks = [
      new Stock(1, '第一只股票', 1.91, 3.5, '这是第一只股票', ['IT','互联网']),
      new Stock(2, '第二只股票', 1.92, 3, '这是第二只股票', ['IT','金融']),
      new Stock(3, '第三只股票', 1.93, 2.5, '这是第三只股票', ['教育','金融']),
      new Stock(4, '第四只股票', 1.94, 1.5, '这是第四只股票', ['教育','IT']),
      new Stock(5, '第五只股票', 1.95, 0.5, '这是第五只股票', ['教育','互联网']),
      new Stock(6, '第六只股票', 1.96, 3.5, '这是第六只股票', ['金融','互联网']),
      new Stock(7, '第七只股票', 1.97, 4.5, '这是第七只股票', ['IT','互联网']),
      new Stock(8, '第八只股票', 1.98, 5, '这是第八只股票', ['医疗','互联网'])
    ]
  }

}

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public rategories: Array<string>
  ) {

  }
}

