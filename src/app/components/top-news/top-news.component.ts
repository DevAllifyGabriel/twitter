import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss'],
})
export class TopNewsComponent implements OnInit {
  @Input() title?: string;
  @Input() topNews?: string;
  @Input() subtitle?: string;

  constructor() {}

  ngOnInit(): void {}
}
