import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { TableService } from "../../services/table.service";

// TODO: Replace this with your own data model type
export interface DataTableItem {
  teamHost: string;
  teamGuest: string;
  referee: string;
  data: string;
  hostPoint: number;
  guestPoint: number;
}

// TODO: replace this with real data from your application
// let EXAMPLE_DATA: DataTableItem[] = [
//   {id: 1, name: 'Hydrogen'},
//   {id: 2, name: 'Helium'},
//   {id: 3, name: 'Lithium'},
//   {id: 4, name: 'Beryllium'},
//   {id: 5, name: 'Boron'},
//   {id: 6, name: 'Carbon'},
//   {id: 7, name: 'Nitrogen'},
//   {id: 8, name: 'Oxygen'},
//   {id: 9, name: 'Fluorine'},
//   {id: 10, name: 'Neon'},
//   {id: 11, name: 'Sodium'},
//   {id: 12, name: 'Magnesium'},
//   {id: 13, name: 'Aluminum'},
//   {id: 14, name: 'Silicon'},
//   {id: 15, name: 'Phosphorus'},
//   {id: 16, name: 'Sulfur'},
//   {id: 17, name: 'Chlorine'},
//   {id: 18, name: 'Argon'},
//   {id: 19, name: 'Potassium'},
//   {id: 20, name: 'Calcium'},
// ];


/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  //private _data: DataTableItem[] = EXAMPLE_DATA;

  // public set data(value: DataTableItem[]) {
  //   this._data = value;
  // }
  getData(){
    this.tableService.getData().subscribe(
      (res:any) => this.handleData(res));
  }

  handleData(res:any){
    console.log('res data:', res);
    if (res){
      console.log('res data:', res);
      res.forEach(element => {
        let dataTableItem: DataTableItem = {teamHost:'', teamGuest:'', data:'', referee:'', guestPoint:0, hostPoint:0};
        console.log('element: ', element);
        dataTableItem.teamHost = element.teamHost;
        dataTableItem.teamGuest = element.teamGuest;
        dataTableItem.referee = element.referee;
        dataTableItem.data = element.date;
        dataTableItem.hostPoint = element.teamHostScore;
        dataTableItem.guestPoint = element.teamGuestScore;
        this.data.push(dataTableItem)
      })

    }
  }

  data: DataTableItem[]=[];
  constructor(private paginator: MatPaginator, private sort: MatSort, private tableService: TableService) {
    super();
    this.getData();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'teamhost': return compare(a.teamHost, b.teamHost, isAsc);
        case 'teamguest': return compare(a.teamGuest, b.teamGuest, isAsc);
        case 'referee': return compare(a.referee, b.referee, isAsc);
        case 'hostpoint': return compare(a.hostPoint, b.guestPoint, isAsc);
        case 'guestpoint': return compare(a.hostPoint, b.guestPoint, isAsc);
        //case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
