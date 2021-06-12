import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '@kroton//web/shared/data-access/store';

@Component({
  selector: 'kroton-unauthorized-home',
  template: `
    <div class="flex w-full flex-col justify-center items-center sm:mt-36 mt-12 p-2 ">
      <p class="text-3xl">
        Welcome in Kroton!
      </p>
      <p class="text-gray-600 mt-8 text-xl text-justify" style="max-width: 700px;">
        Kroton is an app that will help you better manage and organize your work. Kroton have couples of modules that will help make you more productive and efficient. For instance you can go to Time Manager module, and better manage your work time.
      </p>
      <p class="mt-6 text-black text-xl text-center">
        Go and
        <kroton-button (click)='loginClick()' krotonClasses='text-black text-sm w-full sm:w-auto bg-white'>Login</kroton-button>
        or
        <kroton-button (click)='loginClick()' krotonClasses='text-black text-sm bg-pink-200 w-full sm:w-auto'>Register new account</kroton-button>
        and start using the app!
      </p>
    </div>
  `
})
export class UnauthorizedHomeComponent {

  constructor(private store: Store) {
  }

  loginClick(): void {
    this.store.dispatch(login())
  }

}
