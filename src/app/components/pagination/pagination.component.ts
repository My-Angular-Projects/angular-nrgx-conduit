import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'rw-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input({
    alias: 'articlesCount',
    required: true,
  })
  public articlesCount = 0;

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
}
