import { Component, HostListener, OnInit } from '@angular/core';
import { init, refresh } from 'aos';

@Component({
  selector: 'app-go-to-top',
  templateUrl: './go-to-top.component.html',
  styleUrls: ['./go-to-top.component.css'],
})
export class GoToTopComponent implements OnInit {
  public isScrollToTopVisible: boolean = false;

  constructor() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY;
    this.isScrollToTopVisible = scrollTop > 800;
  }
  ngOnInit() {
    init();
    refresh();
  }
}
