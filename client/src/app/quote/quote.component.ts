import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor(private _httpService: HttpService, private _route: ActivatedRoute,
      private _router: Router) { }

  ngOnInit() {

}
}
