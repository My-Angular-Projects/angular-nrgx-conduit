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
import { select, Store } from '@ngrx/store';
import { AuthActions } from '@store/actions';
import { UserRegisterModel } from '@models';
import { IUserRegister } from '@interfaces';
import { isSubmittingSelector } from '@store/selectors';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'rw-signup',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, AsyncPipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly store = inject(Store);

  public form!: FormGroup;
  public isSubmitting$!: Observable<boolean>;

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
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

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }
}
