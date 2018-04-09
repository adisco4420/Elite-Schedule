import { TornamentsPage } from './../tornaments/tornaments';
import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { EliteApi } from '../../providers/elite-api/elite-api';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { TeamHomePage } from '../team-home/team-home';

@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html'
})
export class MyTeamsPage {
  
  constructor(
    public navCtrl: NavController,
    private eliteApi: EliteApi,
    private loadingController: LoadingController
  ) {
  }
  favourites = [
    {
      team: {id: 6182, name: 'HC Elite 7th', coach:'Michelotti'},
      tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63',
      tournamentName: 'March Madness tournament'
    },
    {
      team: {id: 805, name: 'HC Elite ', coach:'Michelotti'},
      tournamentId: '98c6857e-b0d1-4295-b89e-2d95a45437f2',
      tournamentName: 'Holiday Hoops Challenge'
    }
    
  ]
  goToTornaments(){
    this.navCtrl.push(TornamentsPage)
  }
  favouriteTapped($event, favorite){
    let loader = this.loadingController.create({
      content: 'Getting data....',
      dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId)
      .subscribe(t => this.navCtrl.push(TeamHomePage, favorite.team))
    console.log('taped');
    
  }

}
