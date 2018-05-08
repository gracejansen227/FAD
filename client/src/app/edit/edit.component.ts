import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from 'app/http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
      private _router: Router) { }

  ngOnInit(){

  }


}
