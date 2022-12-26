import { Component } from '@angular/core';
import { SmoothScrollService } from '@boatzako/ngx-smooth-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  constructor(private smooth: SmoothScrollService) {}

  goTop() {
    this.smooth.smoothScrollToTop({ duration: 1000, easing: 'linear' });
  }
}
