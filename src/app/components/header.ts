import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
<header class="bg-white shadow-sm sticky top-0 z-50">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">

      <!-- Logo -->
      <a routerLink="/" class="flex items-center gap-3">
        <img src="FullLogo.jpg" alt="Logo" class="w-14 h-14 rounded-xl" />
        <span class="text-2xl font-extrabold text-primary-700">Faddoul Store</span>
      </a>

      <!-- Desktop Menu -->
      <div class="text-primary-700 hidden md:flex items-center gap-10 ">
        <a routerLink="/" class="nav-link">Home</a>
        <a routerLink="/products" class="nav-link">Products</a>
        <a routerLink="/about" class="nav-link">About</a>
        <a routerLink="/contact" class="nav-link">Contact</a>
      </div>

      <!-- Mobile hamburger -->
      <button
        (click)="toggleMobileMenu()"
        class="md:hidden text-black focus:outline-none"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor"
             stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu Drawer -->
  <div
    class="md:hidden bg-white shadow-md border-t transition-all duration-300 overflow-hidden"
    [class.max-h-60]="mobileMenuOpen"
    [class.max-h-0]="!mobileMenuOpen"
  >
    <div class="flex flex-col p-4 space-y-4 text-primary-700">
      <a routerLink="/" class="mobile-link" (click)="closeMobileMenu()">Home</a>
      <a routerLink="/products" class="mobile-link" (click)="closeMobileMenu()">Products</a>
      <a routerLink="/about" class="mobile-link" (click)="closeMobileMenu()">About</a>
      <a routerLink="/contact" class="mobile-link" (click)="closeMobileMenu()">Contact</a>
    </div>
  </div>
</header>
  `,
  styles: [`
    .nav-link {
      font-size: 1.1rem;
      font-weight: 600;
      color: #333;
      transition: color 0.3s;
    }
    .nav-link:hover {
      color: #007bff;
    }
    .mobile-link {
      font-size: 1.25rem;
      font-weight: 600;
      color: #333;
      padding: 10px 0;
    }
  `]
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartCount = 0;
  private subscription!: Subscription;
  mobileMenuOpen = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.subscription = this.cartService.cart$.subscribe((cart: any[]) => {
      this.cartCount = cart.length;
    });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
