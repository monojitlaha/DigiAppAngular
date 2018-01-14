import { Component } from '@angular/core';
import {Order} from './order';
import {InsuranceserviceService} from './insuranceservice.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _insuranceService:InsuranceserviceService){}

  Name:string;
  Email:string;
  Contact:number;
  Address:string;
  State:string;
  City:string;
  Zipcode:number;
  Type:string;
  Subtype:string;
  Model:string;
  Amount:number;
  Tenure:number;
  list:Array<Order>;
  orders:Array<Order>;

  getQuote(): void {
    var orderdetail = new Order();
    orderdetail.Name = this.Name;
    orderdetail.Email = this.Email;
    orderdetail.Contact = this.Contact;
    orderdetail.Address = this.Address;
    orderdetail.State = this.State;
    orderdetail.City = this.City;
    orderdetail.Zipcode = this.Zipcode;
    orderdetail.Type = this.Type;
    orderdetail.Subtype = this.Subtype;
    orderdetail.Model = this.Model;
    orderdetail.Amount = this.Amount;
    orderdetail.Tenure = this.Tenure;

    let url:string='http://localhost:63647/api/Order/CreateOrder';
    this._insuranceService.createFood(url,orderdetail);
  }

  populateItems()  
    {  
      let url:string='http://localhost:63647/api/Order';
      this._insuranceService.getOrders(url).subscribe(res =>{  
        this.orders = res;  
      })  
    } 
}
