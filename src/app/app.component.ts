import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { QuestionPage } from '../pages/question/question';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = QuestionPage;

  pages: Array<{title: string, component: any}>;

  constructor() {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Quiz', component: QuestionPage },
      { title: 'Categories', component: QuestionPage },
      { title: 'Profile', component: QuestionPage },
      { title: 'About', component: AboutPage }
    ];

  }

  initializeApp() {
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
