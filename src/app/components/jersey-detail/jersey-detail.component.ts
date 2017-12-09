import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppConst } from '../../constants/app-const';
import { JerseyService } from '../../services/jersey.service';
import { CartService } from '../../services/cart.service';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { Jersey } from '../../models/jersey';

@Component({
  selector: 'app-jersey-detail',
  templateUrl: './jersey-detail.component.html',
  styleUrls: ['./jersey-detail.component.css']
})
export class JerseyDetailComponent implements OnInit {

  private jerseyId:number;
  private jersey: Jersey = new Jersey();
  private serverPath:string = AppConst.serverPath;
  private numberList: number[] = [1,2,3,4,5,6,7,8,9];
  private qty: number;

  private addJerseySuccess: boolean = false;
  private notEnoughStock:boolean = false;

  constructor(private jerseyService:JerseyService, private cartService:CartService, private router: Router, private route: ActivatedRoute, private http:Http) { }

  onAddToCart(){
    this.cartService.addItem(this.jerseyId, this.qty).subscribe(
      res => {
        console.log(res.text());
        this.addJerseySuccess = true;
      }, error => {
        console.log(error.text());
        this.notEnoughStock = true;
      }
    );
  }



  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.jerseyId = Number.parseInt(params['id']);
    });

    this.jerseyService.getJersey(this.jerseyId).subscribe(
      res => {
        this.jersey = res.json();
      }, error => {
        console.log(error);
      }
    );

    this.qty = 1;
  }

}
