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
  feedArticlesLimitSelector,
  feedDataSelector,
  feedErrorsSelector,
  feedIsLoadingSelector,
} from '../store/selectors';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { LoadingComponent } from '../../loading/loading.component';
import { ErrorMessagesComponent } from '../../error-messages/error-messages.component';
import { PaginationComponent } from '../../pagination/pagination.component';

@Component({
  selector: 'rw-feed',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    LoadingComponent,
    ErrorMessagesComponent,
    PaginationComponent,
  ],
  templateUrl: './feed.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  public isLoading$!: Observable<boolean>;
  public feeds$!: Observable<IFeed | null>;
  public errors$!: Observable<string | null>;
  public articlesLimit$!: Observable<number | null>;
  public articlesCurrentPage: number | null = null;
  public baseUrl!: string;

  @Input({
    alias: 'apiUrl',
    required: true,
  })
  public apiUrlProps: string = '';

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  private initializeValues(): void {
    this.feeds$ = this.store.pipe(select(feedDataSelector));
    this.errors$ = this.store.pipe(select(feedErrorsSelector));
    this.isLoading$ = this.store.pipe(select(feedIsLoadingSelector));
    this.articlesLimit$ = this.store.pipe(select(feedArticlesLimitSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  private initializeListeners(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.articlesCurrentPage = Number(params['page'] || '1');
      this.store.dispatch(FeedAction.get({ request: this.apiUrlProps }));
    });
  }
}
