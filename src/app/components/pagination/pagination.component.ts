import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { generateRange } from '../helpers';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'rw-pagination',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss', // ?
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit {
  @Input({
    alias: 'articlesCount',
    required: true,
  })
  public articlesCount!: number | null;

  @Input({
    alias: 'articlesLimit',
    required: true,
  })
  public articlesLimit!: number | null;

  @Input({
    alias: 'articlesCurrentPage',
    required: true,
  })
  public articlesCurrentPage!: number | null;

  @Input({
    alias: 'baseUrl',
    required: true,
  })
  public baseUrl = '';

  public pagesCount!: number[];

  ngOnInit(): void {
    this.pagesCount = generateRange(
      1,
      Math.ceil(this.articlesCount! / this.articlesLimit!),
    );
  }
}
