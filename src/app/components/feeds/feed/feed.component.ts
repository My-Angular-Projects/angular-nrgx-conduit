import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FeedActionGroup } from '../store/actions';
import { Observable } from 'rxjs';
import { IFeed } from '../../../interfaces';
import {
  feedDataSelector,
  feedErrorsSelector,
  feedLoadingSelector,
} from '../store/selectors';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { LoadingComponent } from '../../loading/loading.component';
import { ErrorMessagesComponent } from '../../error-messages/error-messages.component';
import { PaginationComponent } from '../../pagination/pagination.component';
import { TagsListComponent } from '../../tags/tags-list/tags-list.component';

@Component({
  selector: 'rw-feed',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    LoadingComponent,
    ErrorMessagesComponent,
    PaginationComponent,
    TagsListComponent,
  ],
  templateUrl: './feed.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  public isLoading$!: Observable<boolean>;
  public feeds$!: Observable<IFeed>;
  public errors$!: Observable<string>;

  public articlesCurrentPage!: number;
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
    this.isLoading$ = this.store.pipe(select(feedLoadingSelector));

    this.baseUrl = this.router.url.split('?')[0];
  }

  private initializeListeners(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.articlesCurrentPage = Number(params['page'] || '1');
      this.store.dispatch(FeedActionGroup.get({ request: this.apiUrlProps }));
    });
  }
}
