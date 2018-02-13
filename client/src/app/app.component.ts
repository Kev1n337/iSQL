import { Component } from '@angular/core';
import {DataService} from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shouldShowTable = false;
  shouldShowResult = false;
  tableKeys: string[] = [];
  rows: object[] = [];
  resultMap: Map<string, string> = new Map();
  examples: any[] = [
    {
      query: 'CREATE TABLE Persons (PersonID int, LastName varchar(255), FirstName varchar(255), Address varchar(255), City varchar(255));',
      display: 'CREATE'
    },
    {
      query: "INSERT INTO Persons (PersonID, LastName, FirstName, Address, City) VALUES (1, 'Mustermann', 'Max', 'Musterstr. 123', 'Giessen')",
      display: 'INSERT'
    },
    {
      query: 'Select * from Persons',
      display: 'SELECT'
    },
    {
      query: 'DROP TABLE Persons',
      display: 'DROP'
    }
  ];

  constructor(
    private dataService: DataService
  ) {}

  execute(sql: string): void {
    console.log(sql);
    this.dataService.execute(sql).then((result) => {
      if (result instanceof Array) {
        this.showTable(result);
      } else {
        this.showResult(result);
      }
    });
  }

  showTable(result: Array<Object>): void {
    this.shouldShowResult = false;
    this.tableKeys = [];
    this.rows = [];
    for (const key of Object.keys(result[0])) {
      this.tableKeys.push(key);
    }
    for (const entry of result) {
      this.rows.push(entry);
    }
    this.shouldShowTable = true;
  }

  showResult(result: Object): void {
    this.shouldShowTable = false;
    for (const key of Object.keys(result)) {
      this.resultMap.set(key, result[key]);
    }
    this.shouldShowResult = true;
  }
}
