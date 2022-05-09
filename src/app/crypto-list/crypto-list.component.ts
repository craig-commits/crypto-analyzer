import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit {

  currency:string = 'INR'
  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.cryptoService.getCoinList(this.currency).subscribe(
      data => console.log(data)
    )
  }

}
