import { Component, input } from '@angular/core';
import { FlashIcon } from '../flash-icon/flash-icon';
import { FlashItem } from '../../data/flash-items';

@Component({
  selector: 'app-flash-card',
  imports: [FlashIcon],
  templateUrl: './flash-card.html',
  host: {
    'class': 'flash-card',
    '[class.flash-card--taken]': 'item().taken',
    '[attr.hidden]': 'hidden() ? true : null',
  },
})
export class FlashCardComponent {
  item = input.required<FlashItem>();
  /** Usato dal filtro della galleria per nascondere le card fuori foglio. */
  hidden = input(false);
}
