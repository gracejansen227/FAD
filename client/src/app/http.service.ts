import { Injectable, Component} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService implements OnInit {
  drink: any;
  drinks = [];

  constructor(private _http: HttpClient) {
    this.drink;

 }
 ngOnInit() {

 }


 showDrink(drink){
   //console.log(drink, "does this work ahh help?")
   return this.drink;
 }


 makeDrink(drink){
   console.log("how come this doesn work?", drink);
   this.drink = drink
   this.showDrink(this.drink);
   return this._http.post('/find', {drink: drink});
 }

 getAllBars(){
   return this._http.get('/bars');
   console.log(` Hello, ${data}`, data);
 }
}
