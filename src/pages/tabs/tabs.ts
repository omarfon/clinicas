import { Component } from '@angular/core';

import { Miscitas } from '../miscitas/miscitas';
import { Reservas } from '../reservas/reservas';
import { Misdatos } from '../misdatos/misdatos';
import { Misexamenes } from '../misexamenes/misexamenes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Miscitas;
  tab2Root = Reservas;
  tab3Root = Misdatos;
  tab4Root = Misexamenes;

  constructor() {

  }
}
