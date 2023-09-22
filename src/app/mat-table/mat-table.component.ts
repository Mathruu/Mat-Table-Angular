import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';


export interface PeriodicElement {
  name: string;
  position: number;
  height: number;
  type: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Bulbasaur', height: 0.7, type: 'Grass/Poison'},
  {position: 2, name: 'Ivysaur', height: 1.0, type: 'Grass/Poison'},
  {position: 3, name: 'Venusaur', height: 2.0, type: 'Grass/Poison'},
  {position: 4, name: 'Charmander', height: 0.6, type: 'Fire'},
  {position: 5, name: 'Charmeleon', height: 1.1, type: 'Fire'},
  {position: 6, name: 'Charizard', height: 1.7, type: 'Fire/Flying'},
  {position: 7, name: 'Squirtle', height: 0.5, type: 'Water'},
  {position: 8, name: 'Wartortle', height: 1.0, type: 'Water'},
  {position: 9, name: 'Blastoise', height: 1.6, type: 'Water'},
  {position: 10, name: 'Caterpie', height: 0.3, type: 'Bug'},
  {position: 11, name: 'Metapod', height: 0.7, type: 'Bug'},
  {position: 12, name: 'Butterfree', height: 1.1, type: 'Bug/Flying'},
  {position: 13, name: 'Weedle', height: 0.3, type: 'Bug/Poison'},
  {position: 14, name: 'Kakuna', height: 0.6, type: 'Bug/Poison'},
  {position: 15, name: 'Beedrill', height: 1.0, type: 'Bug/Poison'},
  {position: 16, name: 'Pidgey', height: 0.3, type: 'Normal/Flying'},
  {position: 17, name: 'Pidgeotto', height: 1.1, type: 'Normal/Flying'},
  {position: 18, name: 'Pidgeot', height: 1.5, type: 'Normal/Flying'},
  {position: 19, name: 'Rattata', height: 0.3, type: 'Normal'},
  {position: 20, name: 'Raticate', height: 0.7, type: 'Normal'},
  {position: 21, name: 'Spearow', height: 0.3, type: 'Normal/Flying'},
];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-mat-table',
  styleUrls: ['./mat-table.component.css'],
  templateUrl: './mat-table.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
})
export class MatTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'height', 'type'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}