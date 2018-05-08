import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {


  constructor(private _httpService: HttpService) { }

  ngOnInit() {

  }

}
