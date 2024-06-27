import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IBackendErrors } from '../../interfaces';

@Component({
  selector: 'rw-backend-error-messages',
  standalone: true,
  imports: [],
  templateUrl: './backend-error-messages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackendErrorMessagesComponent {
  @Input({
    alias: 'errors',
    required: false,
    transform: (value: IBackendErrors) =>
      Object.keys(value).map((key: string) => {
        const values: string = value[key].join(', ');

        return `${key}: ${values}`;
      }),
  })
  public readonly errorsProps!: string[];
}
