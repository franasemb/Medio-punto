import { Component, OnInit } from '@angular/core';
import { init, refresh } from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    init();
    refresh();
  }
}
