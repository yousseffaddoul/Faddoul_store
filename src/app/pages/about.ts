import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- HEADER -->
        <div class="text-center mb-10 sm:mb-14">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Faddoul Store
          </h1>
          <p class="text-lg sm:text-xl text-gray-600">
            Learn more about our mission and values
          </p>
        </div>

        <!-- CARD -->
        <div class="bg-white rounded-2xl shadow-md p-6 sm:p-10 md:p-12 mb-12">
          <div class="prose max-w-none">

            <p class="text-base sm:text-lg text-gray-600 mb-6">
              This is a placeholder for the About page. Continue prompting to customize this section 
              with your company's story, mission, values, and team information.
            </p>

            <p class="text-base sm:text-lg text-gray-600 mb-6">
              You can add:
            </p>

            <ul class="list-disc list-inside space-y-2 text-gray-600 mb-8 text-base sm:text-lg">
              <li>Company history and founding story</li>
              <li>Mission and vision statements</li>
              <li>Core values and commitments</li>
              <li>Team members and leadership</li>
              <li>Achievements and milestones</li>
              <li>Sustainability practices</li>
            </ul>

          </div>
        </div>

        <!-- CTA BUTTON -->
        <div class="text-center">
          <p class="text-gray-600 text-lg mb-5">
            Want to customize this page?
          </p>
          <button
            class="bg-primary-600 hover:bg-primary-700 text-white font-semibold 
                   py-3 px-10 rounded-xl text-base sm:text-lg transition">
            Continue Prompting
          </button>
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
export class AboutComponent {}
