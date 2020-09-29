import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { StorageService } from './services/storage.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private auth: AngularFireAuth,
    private storage: StorageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout(){
    this.router.navigate(['landing']);
    this.auth.currentUser
      .then((res) => {
        this.storage.removeItem(res.uid)
          .then(() => {
          this.auth.signOut()
            .catch((err) => {
              console.dir(err)
            })
          })
      })
      .catch((err) => {
        console.dir(err)
      })
  }

  public appPages = [
    {
    title: 'MainTabs',
    url: '/main-tabs',
    icon: 'list'
    }
  ]
}
