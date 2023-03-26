import { Component, OnInit } from '@angular/core';
import { init, refresh } from 'aos';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css'],
})
export class JumbotronComponent implements OnInit {
  ngOnInit() {
    init();
    refresh();
  }
}
