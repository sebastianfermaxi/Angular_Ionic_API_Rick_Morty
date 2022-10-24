import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  menuToggle(){
    console.log('click');
    this.menu.toggle();
    console.log(this.menu.isOpen());
  }
}
