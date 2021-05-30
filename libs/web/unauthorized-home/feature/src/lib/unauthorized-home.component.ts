import { Component } from '@angular/core';

@Component({
  selector: 'kroton-unauthorized-home',
  template: `
    <div class="flex w-full flex-col justify-center items-center sm:mt-36 mt-12 p-2 ">
      <p class="text-3xl bg-white">
        Welcome in Kroton!
      </p>
      <p class="text-gray-400 mt-8 text-xl text-justify bg-white" style="max-width: 700px;">
        Kroton is an app that will help you better manage and organize your work. Kroton have couples of modules that will help make you more productive and efficient. For instance you can go to Time Manager module, and better manage your work time.
      </p>
      <p class="mt-6 text-gray-400 text-xl text-center bg-white">
        Go and
        <kroton-button krotonClasses='text-black text-sm w-full sm:w-auto'>Login</kroton-button>
        or
        <kroton-button krotonClasses='text-black text-sm bg-pink-200 w-full sm:w-auto'>Register new account</kroton-button>
        and start using the app!
      </p>
      <div role="log" aria-live="assertive" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; white-space: nowrap; padding: 0px; width: 1px; position: absolute;"></div>
    </div>
  `
})
export class UnauthorizedHomeComponent {
}
