import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss'],
})
export class RodapeComponent implements OnInit {
  @Input() rodapeText?: string;

  constructor() {}

  ngOnInit(): void {}
}
