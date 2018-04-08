import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { TeamHomePage } from '../team-home/team-home';
import { EliteApi } from '../../providers/elite-api/elite-api';
import { Spinner } from 'ionic-angular/components/spinner/spinner';


@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  public teams = []

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private eliteApi: EliteApi,
    public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting teams....',
      spinner: 'dots'
    })
    loader.present().then(()=>{
      let selectedTourney = this.navParams.data
      this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data =>{
        this.teams = data.teams
        loader.dismiss()
      })
    })
    console.log('ionViewDidLoad TeamsPage');
  }
  itemTapped($event,team){
    this.navCtrl.push(TeamHomePage,team)
  }
}
