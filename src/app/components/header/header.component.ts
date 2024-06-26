import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from '../auth/store/selectors';

@Component({
  selector: 'rw-header',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly store = inject(Store);

  public readonly isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
  public readonly currentUser$ = this.store.pipe(select(currentUserSelector));
  public readonly isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
}
