import { Component, OnInit } from '@angular/core';
import { T20ServiceService } from '../t20-service.service';


@Component({
  selector: 'app-team-standings',
  templateUrl: './team-standings.component.html',
  styleUrls: ['./team-standings.component.css'],
})
export class TeamStandings implements OnInit {
  headers = ['Group A', 'Matches', 'Won', 'Lost', 'Tied', 'NR', 'Pts', 'NRR'];

  teamDataGRA: any = [];
  teamDataGRB: any = [];
  teamDataGR1: any = [];
  teamDataGR2: any = [];
  tablearray = [
    { name: "Qualifiers", data: [] },
    { name: "Qualifiers", data: [] },
    { name: "Super12", data: [] },
    { name: "Super12", data: [] }
  ];
  public errmsg: any
  constructor(private _t20ser: T20ServiceService) { }
  ngOnInit() {
    this.t20wc1();
  }
  title = 'WCT20';
  // here the groupa data is getting from json server//
  t20wc1() {
    this.tablearray.forEach((item, index) => {
      if (index == 0) {
        this._t20ser.teamgroupa()
          .subscribe(
            data => this.tablearray[0].data = data,
          );
      } else if (index == 1) {
        this._t20ser.teamgroupb()
          .subscribe(
            data1 => {
              this.tablearray[1].data = data1
              console.log(data1);
            }

          );
      } else if (index == 2) {
        this._t20ser.teamgroup1()
          .subscribe(
            data1 => {
              this.tablearray[2].data = data1
              console.log(data1);
            }

          )
      } else {
        this._t20ser.teamgroup2()
          .subscribe(
            data1 => {
              this.tablearray[3].data = data1
              console.log(data1);
            }

          )
      }

    })

  }

}
