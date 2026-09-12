import { Component, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

/**
 * Progetto dimostrativo: il form non invia nulla a un vero backend.
 * Per un cliente reale, Formspree (gratuito) gestisce anche gli allegati:
 * basta una richiesta HTTP POST all'endpoint fornito, al posto della
 * simulazione qui sotto.
 */
@Component({
  selector: 'app-prenota',
  imports: [ReactiveFormsModule],
  templateUrl: './prenota.html',
})
export class Prenota {
  private fb = inject(FormBuilder);
  private title = inject(Title);
  private meta = inject(Meta);

  status = signal<{ text: string; state: 'ok' | 'err' } | null>(null);
  fileName = signal<string | null>(null);

  form = this.fb.nonNullable.group({
    nome: ['', Validators.required],
    contatto: ['', Validators.required],
    artista: ['indifferente'],
    stile: ['blackwork'],
    zona: [''],
    dimensione: [''],
    messaggio: [''],
  });

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.fileName.set(input.files?.[0]?.name ?? null);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.status.set({ text: 'Controlla i campi obbligatori.', state: 'err' });
      return;
    }
    this.status.set({ text: 'Richiesta registrata! (demo — nessun dato è stato realmente trasmesso)', state: 'ok' });
    this.form.reset({ artista: 'indifferente', stile: 'blackwork' });
    this.fileName.set(null);
  }

  constructor() {
    this.title.setTitle('Prenota — TREDICI Tattoo');
    this.meta.updateTag({
      name: 'description',
      content: 'Richiedi una consulenza o prenota una seduta allo studio TREDICI, Cosenza.',
    });
  }
}
