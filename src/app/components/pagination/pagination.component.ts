import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgClass } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { feedPagesCountSelector } from '../feeds/store/selectors';

@Component({
  selector: 'rw-pagination',
  standalone: true,
  imports: [RouterLink, NgClass, AsyncPipe],
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit {
  private readonly store = inject(Store);

  @Input({
    alias: 'articlesCurrentPage',
    required: true,
  })
  public articlesCurrentPage!: number;

  @Input({
    alias: 'baseUrl',
    required: true,
  })
  public baseUrl = '';

  public pagesCount$!: Observable<number[]>;

  ngOnInit(): void {
    this.pagesCount$ = this.store.pipe(select(feedPagesCountSelector));
  }
}
