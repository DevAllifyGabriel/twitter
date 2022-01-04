import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-twitter-main',
  templateUrl: './twitter-main.component.html',
  styleUrls: ['./twitter-main.component.scss'],
})
export class TwitterMainComponent implements OnInit {
  urlTwitter: any;

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.apiTwitter.subscribe((res) => {
      this.urlTwitter = res;
      console.log(res);
    });
  }
}
