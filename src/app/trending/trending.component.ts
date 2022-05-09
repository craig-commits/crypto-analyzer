import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  currency:string = 'INR'
  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.cryptoService.getTrendingCoin(this.currency).subscribe(
      data => console.log("trending",data)
    )
  }

}
