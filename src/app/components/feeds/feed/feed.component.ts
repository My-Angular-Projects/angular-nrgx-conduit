import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FeedAction } from '../store/actions';
import { Observable } from 'rxjs';
import { IFeed } from '../../../interfaces';
import {
  feedDataSelector,
  feedErrorsSelector,
  feedIsLoadingSelector,
} from '../store/selectors';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { LoadingComponent } from '../../loading/loading.component';
import { ErrorMessagesComponent } from '../../error-messages/error-messages.component';

@Component({
  selector: 'rw-feed',
  standalone: true,
  imports: [RouterLink, AsyncPipe, LoadingComponent, ErrorMessagesComponent],
  templateUrl: './feed.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent implements OnInit {
  private readonly store = inject(Store);

  public isLoading$!: Observable<boolean>;
  public feeds$!: Observable<IFeed | null>;
  public errors$!: Observable<string | null>;

  @Input({
    alias: 'apiUrl',
    required: true,
  })
  public apiUrlProps: string = '';

  ngOnInit(): void {
    this.initializeValues();
    this.getFeeds(this.apiUrlProps);
  }

  private initializeValues(): void {
    this.feeds$ = this.store.pipe(select(feedDataSelector));
    this.errors$ = this.store.pipe(select(feedErrorsSelector));
    this.isLoading$ = this.store.pipe(select(feedIsLoadingSelector));
  }

  private getFeeds(request: string): void {
    this.store.dispatch(FeedAction.get({ request }));
  }
}
