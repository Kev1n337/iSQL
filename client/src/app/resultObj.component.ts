import {AfterViewInit, ChangeDetectorRef, Component, Input} from '@angular/core';

@Component({
  selector: 'app-result-obj',
  templateUrl: './resultObj.component.html',
  styleUrls: ['./resultObj.component.css']
})
export class ResultObjComponent {
  @Input() resultMap: Map<string, string> = new Map();
}
