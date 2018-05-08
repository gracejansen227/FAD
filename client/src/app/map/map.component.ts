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


    constructor(private _httpService: HttpService){}

    ngOnInit() {

        this.drink = {city: "", price: "", ingred:""};

        latitude: 32.775931;
        longitude :-96.802463;
        var mapProp = {
            center: new google.maps.LatLng(32.775931,-96.802463),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        this.getBarInfo();
        this.getDrinkToFind();
}


getBarInfo(){
    let observable = this._httpService.getAllBars();
    observable.subscribe((data:any) => {

      console.log("I want to get back all the bars", data)
      console.log("this should get back st. germain", data.data[0].yes[0].ingred[0])

      // this.bar1 = data.data[0].name;
      // console.log(bar1, "this should be the first bar")
      });
}


getDrinkToFind(){
  console.log("do we even get here!?");
  let drink = this._httpService.showDrink();
  console.log(drink, "this should be our drink lol")
//     this.drink = {city: data.data.city, price: data.data.price, ingred: data.data.ingred}
//     console.log( "this is supposed to be our new drink", this.drink);
  });
}

// onSubmitFindDrink(event){
//     event.preventDefault();
//     console.log(event);
//     let observable = this._httpService.makeDrink(this.drink);
//     observable.subscribe((data:any) => {
//       // const tasks = data.json();
//       console.log("This should be our new drink", data)
//       // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
//       // This may be different for you, depending on how you set up your Task API.
//
//       this.drink = {city: data.data.city, price: data.data.price, ingred: data.data.ingred}
//       console.log( "this is upposed to be our new drink", this.drink);
//         this._router.navigate([`/map`]);
//
//       }
//     };


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
}
