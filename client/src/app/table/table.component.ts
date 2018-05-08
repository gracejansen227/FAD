import { Injectable, Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  drink: any;
  drinks = [];


  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
      private _router: Router){}

  ngOnInit(){

    this.drink = {city: "", price: "", ingred:""};


  }

  onSubmitFindDrink(event){
      event.preventDefault();
      console.log(event);
      let observable = this._httpService.makeDrink(this.drink);
      observable.subscribe((data:any) => {
        // const tasks = data.json();
        console.log("This should be our new drink", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
        // This may be different for you, depending on how you set up your Task API.

        this.drink = {city: data.data.city, price: data.data.price, ingred: data.data.ingred}
        console.log( "this is upposed to be our new drink", this.drink);
          this._router.navigate([`/map`]);

        }
      };


}
