// Bonus Mission -- Counting Satellites --------------------------------------

import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  debris:number;

  constructor() {}
 
  ngOnInit() {
  }
  countSat = (item: string) => {
    let count: number = 0;
    for(let i=0; i<this.satellites.length; i++){
      if(this.satellites[i]["type"] === item){
        count = count + 1;
      }
    } return count
  }
}
// -------------------------------------------------------------------------