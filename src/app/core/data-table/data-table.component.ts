import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import {DataTableDataSource, DataTableItem} from './data-table-datasource';
import {TableService} from "../../services/table.service";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['teamHost', 'teamGuest', 'referee', 'data', 'guestPoint', 'hostPoint'];

  ngOnInit() {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    // this.tableService.getData()
    //   .subscribe((res: DataTableItem[]) => {
    //     console.log('call res', res);
    //     this.dataSource = new DataTableDataSource(this.paginator, this.sort, res);
    //
    //   });
    this.dataSource = new DataTableDataSource(this.paginator, this.sort, this.tableService);
    console.log(this.dataSource);
  }


  constructor(private tableService: TableService) {
  }


}
