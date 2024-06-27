import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'rw-feed',
  standalone: true,
  imports: [],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent {
  private readonly store = inject(Store);

  @Input({
    alias: 'apiUrl',
    required: true,
  })
  public api: string = '';
}
