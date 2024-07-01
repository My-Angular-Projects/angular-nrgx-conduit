import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { isLoggedInSelector } from '../auth/store/selectors';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'rw-feed-toggler',
  standalone: true,
  imports: [AsyncPipe, RouterLink, RouterLinkActive],
  templateUrl: './feed-toggler.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedTogglerComponent {
  private readonly store = inject(Store);

  @Input({
    alias: 'tagName',
    required: false,
  })
  public tagName: string | undefined;

  public readonly isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
}
