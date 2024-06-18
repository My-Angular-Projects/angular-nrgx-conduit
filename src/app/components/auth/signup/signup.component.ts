import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthActions } from '@store/actions';
import { UserRegisterModel } from '@models';
import { IUserRegister } from '@interfaces';

@Component({
  selector: 'rw-signup',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly store = inject(Store);

  public form!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  public onSubmit(): void {
    if (this.form.valid) {
      const { username, password, email } = this.form.value;
      const userRegister: IUserRegister = new UserRegisterModel(
        username,
        password,
        email,
      );
      this.store.dispatch(AuthActions.register(userRegister));
      this.form.reset();
    }
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
