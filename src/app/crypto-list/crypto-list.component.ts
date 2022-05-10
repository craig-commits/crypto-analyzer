import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit, AfterViewInit  {
  response:any=[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['image','id', 'symbol', 'current_price'];
  currency:string = 'INR'
  constructor(private cryptoService: CryptoService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.cryptoService.getCoinList(this.currency).subscribe(
      data => {
        this.response = data    
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

}
