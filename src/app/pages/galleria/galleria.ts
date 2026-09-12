import { Component, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FlashCardComponent } from '../../components/flash-card/flash-card';
import { FLASH_ITEMS, FlashItem } from '../../data/flash-items';

type Sheet = 'tutti' | FlashItem['sheet'];

@Component({
  selector: 'app-galleria',
  imports: [FlashCardComponent],
  templateUrl: './galleria.html',
})
export class Galleria {
  private title = inject(Title);
  private meta = inject(Meta);

  readonly items = FLASH_ITEMS;
  readonly sheets: { id: Sheet; label: string }[] = [
    { id: 'tutti', label: 'Tutti' },
    { id: 'blackwork', label: 'Blackwork' },
    { id: 'fineline', label: 'Fineline' },
    { id: 'tradizionale', label: 'Tradizionale' },
  ];

  selected = signal<Sheet>('tutti');

  isHidden(item: FlashItem): boolean {
    const sheet = this.selected();
    return sheet !== 'tutti' && item.sheet !== sheet;
  }

  constructor() {
    this.title.setTitle('Foglio Flash — TREDICI Tattoo');
    this.meta.updateTag({
      name: 'description',
      content: 'Galleria flash dello studio TREDICI: blackwork, fineline e tradizionale. Pezzi disponibili a prezzo fisso.',
    });
  }
}
