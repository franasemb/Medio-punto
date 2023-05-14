import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { init, refresh } from 'aos';

@Component({
  selector: 'app-go-to-top',
  templateUrl: './go-to-top.component.html',
  styleUrls: ['./go-to-top.component.css'],
})
export class GoToTopComponent implements OnInit {
  public isScrollToTopVisible: boolean = false;

  isWeb = false;

  constructor(@Inject(PLATFORM_ID) plataform: Object) {
    this.isWeb = isPlatformBrowser(PLATFORM_ID);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY;
    this.isScrollToTopVisible = scrollTop > 100;
  }

  ngOnInit() {
    if (this.isWeb) {
      init();
      refresh();
    }
  }
}
