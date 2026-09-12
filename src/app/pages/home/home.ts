import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FlashIcon } from '../../components/flash-icon/flash-icon';
import { FlashCardComponent } from '../../components/flash-card/flash-card';
import { FLASH_ITEMS } from '../../data/flash-items';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FlashIcon, FlashCardComponent],
  templateUrl: './home.html',
})
export class Home {
  private title = inject(Title);
  private meta = inject(Meta);

  /** I 4 pezzi più recenti, in ordine di catalogo. */
  readonly teaser = FLASH_ITEMS.slice(0, 4);

  constructor() {
    this.title.setTitle('TREDICI — Studio di Tatuaggi, Cosenza');
    this.meta.updateTag({
      name: 'description',
      content: 'Studio di tatuaggi indipendente nel centro storico di Cosenza. Blackwork, fineline e tradizionale, su appuntamento.',
    });
  }
}
