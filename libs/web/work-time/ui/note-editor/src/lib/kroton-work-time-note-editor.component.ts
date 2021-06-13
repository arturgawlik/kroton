import { Component } from '@angular/core';

@Component({
  selector: 'kroton-work-time-note-editor',
  styles: [`
    .bg-pattern {
      background-image: url('/assets/patterns2.svg');
    }
  `],
  template: `
    <div class="flex flex-col mt-6 p-2 items-center sm:items-start">
      <p class="text-2xl text-justify sm:text-left">Work module build in progress...</p>
    </div>
<!--    <div class="flex flex-col mt-10 bg-pink-300 p-4 bg-pattern">-->
<!--      <textarea-->
<!--        class="bg-transparent border-b border-solid border-gray-400 font-xs mt-5 bg-gray-100 "-->
<!--        placeholder="session notes">-->
<!--      </textarea>-->
<!--      <kroton-button krotonClasses="bg-green-500 text-white text-xl mt-3">Start New Work Session</kroton-button>-->
<!--    </div>-->
        <!--    <div class="flex h-full items-center">-->
<!--      <form class="mt-5 flex flex-col items-center bg-red-300 p-4 rounded bg-pattern">-->
<!--        <p class="text-2xl self-stretch border-b border-black text-gray-600">-->
<!--          Note your activity-->
<!--        </p>-->
<!--        <div class="flex flex-col">-->
<!--          <input-->
<!--            class="bg-transparent border-b border-solid border-gray-400 font-xs bg-gray-100 mt-5"-->
<!--            placeholder="topic" type='text'>-->
<!--          <textarea-->
<!--            class="bg-transparent border-b border-solid border-gray-400 font-xs mt-5 bg-gray-100 h-72"-->
<!--            placeholder="description"-->
<!--          >-->
<!--      </textarea>-->
<!--          <div class="mt-5">-->
<!--            <input-->
<!--              class="bg-transparent border-b border-solid border-gray-400 font-xs bg-gray-100"-->
<!--              placeholder="start time" type='text'>-->
<!--            <input-->
<!--              class="bg-transparent border-b border-solid border-gray-400 font-xs bg-gray-100 ml-3"-->
<!--              placeholder="end time" type='text'>-->
<!--          </div>-->
<!--          <div class="mt-6 flex">-->
<!--            <kroton-button class="self-stretch w-full text-sm" krotonClasses="border-none bg-green-500 w-16 text-white rounded-full h-16">Start</kroton-button>-->
<!--            <kroton-button class="ml-2 text-sm" krotonClasses="rounded-full h-16 w-16 bg-red-600">Stop</kroton-button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </form>-->
<!--    </div>-->
<!--    <div class="flex mt-5 bg-gray-300 p-2">-->
<!--      <div class="flex flex-col">-->
<!--        <kroton-button krotonClasses="bg-green-500 text-white text-xl">Start Work Session</kroton-button>-->
<!--        <kroton-button krotonClasses="bg-red-500 text-white text-xl mt-1">Stop</kroton-button>-->
<!--      </div>-->
<!--    </div>-->

  `
})
export class KrotonWorkTimeNoteEditorComponent {
}
