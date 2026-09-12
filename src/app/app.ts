import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

/** Dati reali dello studio, usati per lo schema.org LocalBusiness qui sotto. */
const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'TattooParlor',
  name: 'TREDICI',
  description: 'Studio di tatuaggi indipendente nel centro storico di Cosenza. Blackwork, fineline e tradizionale, su appuntamento.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via del Seggio 13',
    addressLocality: 'Cosenza',
    addressRegion: 'CS',
    addressCountry: 'IT',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '11:00', closes: '19:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '10:00', closes: '18:00' },
  ],
  priceRange: '€€',
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
})
export class App {
  private meta = inject(Meta);
  private document = inject(DOCUMENT);

  constructor() {
    // Meta di base valide per tutto il sito — ogni pagina le sovrascrive
    // dove serve (vedi Title/Meta nei singoli componenti di pagina).
    this.meta.updateTag({ name: 'theme-color', content: '#f1ead9' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:locale', content: 'it_IT' });
    this.meta.updateTag({ property: 'og:site_name', content: 'TREDICI Tattoo' });

    // Dato strutturato LocalBusiness: aiuta Google a mostrare orari e
    // indirizzo direttamente nei risultati di ricerca. Un solo script
    // per tutto il sito, coerente con la natura "un'unica sede" del dato.
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(LOCAL_BUSINESS_JSON_LD);
    this.document.head.appendChild(script);
  }
}
