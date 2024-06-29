import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'rw-tags-list',
  standalone: true,
  templateUrl: './tags-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsListComponent {
  @Input({ alias: 'tags', required: false })
  public tagsProps: string[] | undefined;
}
