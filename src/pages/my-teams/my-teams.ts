import { TornamentsPage } from './../tornaments/tornaments';
import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html'
})
export class MyTeamsPage {

  constructor(public navCtrl: NavController) {

  }
  goToTornaments(){
    this.navCtrl.push(TornamentsPage)
  }
}
