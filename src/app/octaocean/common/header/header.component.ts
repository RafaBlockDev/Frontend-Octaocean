import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isDropdownOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  handleDrowpdownClick(evt: any) {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
