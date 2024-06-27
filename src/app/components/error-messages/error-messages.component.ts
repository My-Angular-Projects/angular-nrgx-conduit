import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'rw-error-messages',
  standalone: true,
  templateUrl: './error-messages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessagesComponent {
  @Input({
    alias: 'errors',
    required: false,
  })
  public message = 'Something happened!';
}
