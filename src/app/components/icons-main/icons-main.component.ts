import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons-main',
  templateUrl: './icons-main.component.html',
  styleUrls: ['./icons-main.component.scss'],
})
export class IconsMainComponent implements OnInit {
  @Input() icons?: string;

  constructor() {}

  ngOnInit(): void {}
}
