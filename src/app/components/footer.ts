import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
<footer class="bg-gray-900 text-gray-300 mt-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

    <!-- GRID SECTIONS -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">

      <!-- Logo + Description -->
      <div>
        <h3 class="text-white text-lg font-bold mb-4 flex items-center gap-3">
          <img 
            src="FullLogo.jpg" 
            alt="Logo" 
            class="w-14 h-14 rounded-xl object-cover shadow-sm"
          />
          Faddoul Store
        </h3>
        <p class="text-sm text-gray-400">
          Premium e-commerce experience with curated products and exceptional service.
        </p>
      </div>

      <!-- Shop -->
      <div>
        <h4 class="text-white font-semibold mb-4">Shop</h4>
        <ul class="space-y-2">
          <li><a routerLink="/products" class="footer-link">Products</a></li>
          <li><a href="#" class="footer-link">Collections</a></li>
          <li><a href="#" class="footer-link">Sale</a></li>
        </ul>
      </div>

      <!-- Company -->
      <div>
        <h4 class="text-white font-semibold mb-4">Company</h4>
        <ul class="space-y-2">
          <li><a routerLink="/about" class="footer-link">About</a></li>
          <li><a href="#" class="footer-link">Blog</a></li>
          <li><a routerLink="/contact" class="footer-link">Contact</a></li>
        </ul>
      </div>

      <!-- Support -->
      <div>
        <h4 class="text-white font-semibold mb-4">Support</h4>
        <ul class="space-y-2">
          <li><a href="#" class="footer-link">Help Center</a></li>
          <li><a href="#" class="footer-link">Shipping Info</a></li>
          <li><a href="#" class="footer-link">FAQ</a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-700 pt-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">

        <p class="text-sm text-gray-400">&copy; 2025 Faddoul Store. All rights reserved.</p>

        <!-- Social Icons -->
        <div class="flex gap-6">
          <!-- Facebook -->
          <a href="https://www.facebook.com/youssef.faddoul.497374" class="footer-social">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20v-7.21H5.5V9.25h2.79V7.05c0-2.74 1.67-4.24 4.13-4.24 
              1.17 0 2.18.09 2.47.13v2.86h-1.7c-1.33 0-1.59.63-1.59 1.56v2.05h3.19l-4.16 
              3.54V20z"/>
            </svg>
          </a>

          <!-- Instagram -->
          <a href="https://www.instagram.com/Yousseffaddoul24/" class="footer-social">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path fill="white"
                d="M16.6915,12.4745 C16.6915,14.1457 15.3818,15.4745 13.7344,15.4745 
                C12.087,15.4745 10.7773,14.1457 10.7773,12.4745 
                C10.7773,10.8033 12.087,9.4745 13.7344,9.4745 
                C15.3818,9.4745 16.6915,10.8033 16.6915,12.4745Z"
              />
            </svg>
          </a>
        </div>

      </div>
    </div>

  </div>
</footer>
  `,
  styles: [`
    .footer-link {
      color: #cbd5e1;
      transition: color .3s;
    }
    .footer-link:hover {
      color: #60a5fa;
    }

    .footer-social {
      color: #cbd5e1;
      transition: color .3s;
    }
    .footer-social:hover {
      color: #60a5fa;
    }
  `]
})
export class FooterComponent {}
