import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FlashIcon } from '../../components/flash-icon/flash-icon';

@Component({
  selector: 'app-contatti',
  imports: [FlashIcon, RouterLink],
  templateUrl: './contatti.html',
})
export class Contatti {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
    this.title.setTitle('Contatti — TREDICI Tattoo');
    this.meta.updateTag({
      name: 'description',
      content: 'Dove siamo, orari e contatti dello studio TREDICI, Cosenza.',
    });
  }
}
