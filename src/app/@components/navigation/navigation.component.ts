import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'algae-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  toggle = true;

  constructor() { }

  ngOnInit(): void {
  }

}
