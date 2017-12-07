import { Component, OnInit } from '@angular/core';
import { Jersey } from '../../models/jersey';
import { JerseyService } from '../../services/jersey.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { AppConst } from '../../constants/app-const';

@Component({
  selector: 'app-jersey-list',
  templateUrl: './jersey-list.component.html',
  styleUrls: ['./jersey-list.component.css']
})
export class JerseyListComponent implements OnInit {

  public filterQuery = "";
  public rowsOnPage = 5;

  private selectedJersey: Jersey;
  private jerseyList: Jersey[];
  private serverPath = AppConst.serverPath;

  constructor(private jerseyService:JerseyService, private router:Router, private http:Http, private route:ActivatedRoute) { }

  onSelect(jersey: Jersey) {
    this.selectedJersey = jersey;
    this.router.navigate(['/jerseyDetail', this.selectedJersey.id]);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(params['jerseyList']){
        console.log("filtered jersey list");
        this.jerseyList = JSON.parse(params['jerseyList']);
      } else {
        this.jerseyService.getJerseyList().subscribe(
          res => {
            console.log(res.json());
            this.jerseyList = res.json();
          }, error => {
            console.log(error);
          }
        );
      }
    });
  }

}
