import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Feed page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class Feed {

  splash = true;
  tabBarElement: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabBarElement = document.querySelector('.tabbar');

  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout( () => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
    console.log('ionViewDidLoad Feed');
  }

}
