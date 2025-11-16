import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- TITLE -->
        <div class="text-center mb-12">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p class="text-lg sm:text-xl text-gray-600">
            Get in touch with our team
          </p>
        </div>

        <!-- CONTACT CARD -->
        <div class="bg-white rounded-2xl shadow-md p-6 sm:p-10 md:p-12 mb-12">

          <!-- CONTACT INFO GRID -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">

            <!-- EMAIL -->
            <div class="text-center px-4">
              <div class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-1">Email</h3>
              <p class="text-gray-600 text-sm sm:text-base">yousseffaddoul52@gmail.com</p>
            </div>

            <!-- PHONE -->
            <div class="text-center px-4">
              <div class="w-14 h-14 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-7 h-7 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.609l2.01 1.242a1 1 0 00.502.609
                     c1.337-.707 3.220-1.765 4.904-3.448 1.684-1.684 2.74-3.567 3.448-4.904a1 1 0 00.609-.502l1.242-2.01
                     a1 1 0 00.609-.502l4.493-1.498a1 1 0 00.684-.948V5a2 2 0 00-2-2h-.78a9.97 9.97 0 00-7.07 2.93"/>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-1">Phone</h3>
              <p class="text-gray-600 text-sm sm:text-base">+961 70171891</p>
            </div>

            <!-- ADDRESS -->
            <div class="text-center px-4">
              <div class="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-1">Address</h3>
              <p class="text-gray-600 text-sm sm:text-base">Bziza, North Lebanon</p>
            </div>

          </div>

          <!-- DIVIDER -->
          <hr class="mb-10">

          <!-- FORM CTA -->
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
            <p class="text-gray-600 text-base sm:text-lg mb-6">
              This is a placeholder for a contact form. Continue prompting to customize this section
              with a functional contact form, chat support, or other communication channels.
            </p>

            <button
              class="bg-primary-600 hover:bg-primary-700 text-white font-semibold 
                     py-3 px-10 rounded-xl text-base sm:text-lg transition">
              Continue Prompting
            </button>
          </div>

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
export class ContactComponent {}
