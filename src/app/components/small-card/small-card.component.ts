import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: [
    './small-card.component.css',
    './small-card.mobile.component.css',
    './small-card.tablet.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoSmallCard: string = '';

  @Input()
  titleSmallCard: string = '';

  @Input()
  Id:string = '0';

  constructor() { }

  ngOnInit(): void {
  }

}
