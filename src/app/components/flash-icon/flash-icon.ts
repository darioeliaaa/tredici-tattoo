import { Component, input } from '@angular/core';

/**
 * Wrapper per le icone flash disegnate a mano (assets/flash-icons.svg).
 * Uso: <app-flash-icon name="occhio" />
 */
@Component({
  selector: 'app-flash-icon',
  template: `<svg [class]="'flash-icon ' + variant()"><use [attr.href]="'assets/flash-icons.svg#flash-' + name()" /></svg>`,
})
export class FlashIcon {
  name = input.required<string>();
  /** Classe extra, es. "flash-icon--stencil" per il colore viola. */
  variant = input('');
}
