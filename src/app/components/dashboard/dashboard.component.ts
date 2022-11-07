import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  public appPages = [
    { title: 'Dashboard', url: '/', icon: 'apps' },
    { title: 'Material', url: '/material', icon: 'extension-puzzle' },
    { title: 'NGXS', url: '/ngxs', icon: 'trail-sign' },
    { title: 'Profile', url: '/profile', icon: 'options' }
  ];
  constructor() { }

  ngOnInit() { }

}
