import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FlashIcon } from '../../components/flash-icon/flash-icon';

interface Stile { nome: string; testo: string; icona: string; }
interface Riga { tipo: string; minimo: string; oraria: string; note: string; }

@Component({
  selector: 'app-stili-prezzi',
  imports: [RouterLink, FlashIcon],
  templateUrl: './stili-prezzi.html',
})
export class StiliPrezzi {
  private title = inject(Title);
  private meta = inject(Meta);

  readonly stili: Stile[] = [
    { nome: 'Blackwork', icona: 'occhio', testo: 'Nero pieno o linee spesse, contrasto netto. Regge bene il tempo ed è il più visibile anche da lontano.' },
    { nome: 'Fineline', icona: 'rosa', testo: 'Linea sottile, dettaglio delicato. Più indicato su zone piatte del corpo, richiede più cura nella guarigione.' },
    { nome: 'Tradizionale (old school)', icona: 'pugnale', testo: 'Contorni spessi, colori pieni e saturi, soggetti classici — rondini, pugnali, rose. Lo stile più antico, e non a caso quello che invecchia meglio.' },
    { nome: 'Geometrico', icona: 'fulmine', testo: "Forme pulite, simmetrie, pattern. Lavoriamo spesso a mano libera con l'ausilio di un righello per le linee più lunghe." },
  ];

  readonly listino: Riga[] = [
    { tipo: 'Flash (foglio)', minimo: '60–140€', oraria: '—', note: 'Prezzo fisso, vedi foglio flash' },
    { tipo: 'Piccolo custom', minimo: 'da 100€', oraria: '—', note: 'Fino a ~8cm, sessione singola' },
    { tipo: 'Medio / grande custom', minimo: '—', oraria: '90€/h', note: 'Preventivo dopo consulenza e bozzetto' },
    { tipo: 'Copertura (cover-up)', minimo: '—', oraria: '100€/h', note: 'Valutazione dal vivo obbligatoria' },
  ];

  constructor() {
    this.title.setTitle('Stili & Prezzi — TREDICI Tattoo');
    this.meta.updateTag({
      name: 'description',
      content: 'Stili praticati e listino prezzi indicativo dello studio TREDICI, Cosenza.',
    });
  }
}
