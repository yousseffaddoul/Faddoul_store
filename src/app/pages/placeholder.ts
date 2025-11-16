import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center">

          <!-- ICON -->
          <div class="inline-block mb-6">
            <div class="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 
                        bg-primary-100 rounded-full 
                        flex items-center justify-center mx-auto">
              <svg class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-primary-600"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414
                      a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
          </div>

          <!-- TITLE -->
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Page in Development
          </h1>

          <!-- DESCRIPTION -->
          <p class="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            This page is a placeholder. Continue prompting to customize it with your content.
          </p>

          <!-- TIP BOX -->
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 sm:p-8 mb-10 
                      mx-auto max-w-md shadow-sm">
            <p class="text-blue-900 font-semibold text-lg sm:text-xl">💡 Tip:</p>
            <p class="text-blue-800 mt-2 text-sm sm:text-base">
              Tell us what you'd like to add to this page and we'll build it for you!
            </p>
          </div>

          <!-- BUTTON -->
          <a routerLink="/"
             class="inline-block bg-primary-600 hover:bg-primary-700 text-white 
                    font-semibold py-3 px-10 rounded-xl text-lg transition">
            Back to Home
          </a>

        </div>

      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class PlaceholderComponent {}
