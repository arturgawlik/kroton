import { Component } from '@angular/core';

@Component({
  selector: 'kroton-footbar',
  template: `
    <footer>
      <p class="text-center text-gray-400 text-sm mb-1">
         Kroton created by
        <a class="cursor-pointer underline" href='https://arturgawlik.github.io/' target='_blank'>arturgawlik.github.io</a>
      </p>
    </footer>
  `
})
export class FootbarComponent {
}
