import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public ajustesService: SettingsService) { }

  ngOnInit() { }

  cambiarColor(tema: string, link: any) {
    // this.aplicarCheck(link);
    this.ajustesService.aplicarTema(tema);
  }

  // aplicarCheck(link: any) {
  //   const selectores: any = document.getElementsByClassName('selector');
  //   for (const ref of selectores) {
  //     ref.classList.remove('working');
  //   }
  //   link.classList.add('working');
  // }
}
