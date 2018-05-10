import { Component, ViewChild, OnInit, Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { } from '@types/googlemaps';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{

    @ViewChild('gmap') gmapElement: any;
    map: google.maps.Map;

    drink: any;
    drinks = [];
    bar1: any;
    bar : any;
    theseBars: [];


    constructor(private _httpService: HttpService){}

    ngOnInit() {

      this.theseBars = [];

        // this.drink = {city: "", price: "", ingred:""};

        latitude: 32.775931;
        longitude :-96.802463;
        var mapProp = {
            center: new google.maps.LatLng(32.775931,-96.802463),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

        this.getDrinkToFind();
        this.getBarInfo();
}


getBarInfo(){
    let observable = this._httpService.getAllBars();
    observable.subscribe((data:any) => {

      // console.log("I want to get back all the bars", data)
      // console.log("this should get back st. germain", data.data[0].yes[0].ingred[0])
      let theseBars = [];
      let allBars = data.data
      console.log(allBars, "this should be a general of all bars");
     // console.log(allBars[0].location[0].city "this should be dallas");
      for(let i=0; i <= allBars.length; i++){
        let cityClicked = this.drink.city;
        // console.log(cityClicked, "should be the city that i just clicked");
        // if(allBars[i].location[0].city == cityClicked){
        //   console.log(allBars[i], "this should be al lthese bars agina ha");
        //   // this.theseBars.push(allBars[i]);
        // }

        //console.log(cityClicked, "this is the clicked city");
        if(cityClicked == allBars[i]?.location[0]?.city){
        //  console.log("yes its a match!");
          this.theseBars.push(allBars[i]);
          // console.log(this.theseBars, "hello should be array of shit");
        }else {
          //console.log(cityClicked, "is not the same as ",allBars[i].location[0].city);
        }
        console.log(this.theseBars, "hello should be array of shit");
      // let markTheseBars = this.theseBars;
      }
      // this.bar1 = data.data[0].name;
      // console.log(bar1, "this should be the first bar")
      });
}


getDrinkToFind(){
  // console.log("do we even get here!?");
  let drink = this._httpService.showDrink();
  // console.log(drink, "this should be our drink lol");
   this.drink = {city: drink.city, price: drink.price, ingred: drink.ingred}
//     console.log( "this is supposed to be our new drink", this.drink);
  };


onCreateMarkers(){


      }

//add click event in html
// marker.addListener('click', this.simpleMarkerHandler);
//
// simpleMarkerHandler() {
//   alert('Simple Component\'s function...');
// }
//
// markBar(){
//   var marker = new google.maps.Marker({
//   map: map,
//   position: barInfo.location,
//   title: barInfo.name
// });
//
// // show store info when marker is clicked
// marker.addListener('click', function(){
//   showBarInfo(barInfo);
// });
//
// }

// showStoreInfo(barInfo){
// 	var info_div = document.getElementById('info_div');
// 	info_div.innerHTML = 'Bar name: '
// 		+ barInfo.name
// 		+ '<br>Drinks: ' + barInfo.drinks;
// }
//
//
// bars.forEach(function(bar){
// 	markBar(bar);
// });
//
// }
  };
