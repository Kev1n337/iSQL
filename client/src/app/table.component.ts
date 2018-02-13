import {AfterViewInit, Component, Input} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  @Input() tableKeys: string[] = [];
  @Input() rows: any[] = [];

  dataSource = new MatTableDataSource(this.rows);

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    Observable.of(this.rows).subscribe((data) => {
      this.dataSource.data = data;
      this.cdRef.detectChanges();
    });

  }
}

