import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FlashIcon } from '../../components/flash-icon/flash-icon';

interface Artista {
  nome: string;
  ruolo: string;
  bio: string;
  meta: string;
  icona: string;
}

@Component({
  selector: 'app-artisti',
  imports: [FlashIcon],
  templateUrl: './artisti.html',
})
export class Artisti {
  private title = inject(Title);
  private meta = inject(Meta);

  readonly artisti: Artista[] = [
    {
      nome: 'Valentina "Vale" Russo',
      ruolo: 'Fineline & Blackwork',
      bio: "Arriva dall'illustrazione botanica, non dal disegno \"da flash\" — si vede nella linea sottile e nella composizione, mai simmetrica per forza. Lavora quasi solo su progetti custom: porta un'idea, anche vaga, e la trasforma in bozzetto insieme a te prima della seduta.",
      meta: 'In studio dal 2019 · sedute anche di più incontri per i pezzi grandi',
      icona: 'rosa',
    },
    {
      nome: 'Marco "Orso" Ferraro',
      ruolo: 'Tradizionale & Blackwork pieno',
      bio: "Vent'anni d'ago, formazione classica: linee spesse, colori pieni, disegni pensati per restare leggibili anche fra trent'anni. Il suo foglio flash è il più fitto dello studio — se cerchi un pezzo pronto in giornata, parti da lì.",
      meta: 'In studio dal 2019 · disponibile anche senza appuntamento il sabato, salvo imprevisti',
      icona: 'ancora',
    },
  ];

  constructor() {
    this.title.setTitle('Artisti — TREDICI Tattoo');
    this.meta.updateTag({
      name: 'description',
      content: 'I due tatuatori residenti dello studio TREDICI, Cosenza.',
    });
  }
}
