import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService, Product } from '../services/product.service';
import { NewsletterService } from '../services/newsletter.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, DecimalPipe, RouterLink],
  template: `
    <!-- HERO SECTION -->
    <section class="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 md:py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover Amazing Products Today
            </h1>
            <p class="text-lg md:text-xl text-primary-100">
              Shop the finest collection of premium products curated for you. Experience quality, style, and innovation.
            </p>
            <div class="flex gap-4 pt-4 flex-wrap">
              <button routerLink="/products" class="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">
                Shop Now
              </button>
              <button routerLink="/about" class="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition">
                Learn More
              </button>
            </div>
          </div>

          <div class="relative h-96 md:h-full">
            <div class="absolute inset-0 bg-gradient-to-br from-secondary-400/30 to-accent/30 rounded-2xl transform rotate-3"></div>
            <div class="relative bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl h-full flex items-center justify-center">
              <svg class="w-32 h-32 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CATEGORIES SECTION -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          <div *ngFor="let cat of categories" class="bg-white shadow rounded-lg flex items-center justify-center py-6 hover:shadow-lg transition cursor-pointer">
            <span routerLink="/products" class="font-semibold text-gray-700">{{ cat }}</span>
          </div>
        </div>
      </div>
    </section>

    



    <!-- TESTIMONIALS -->
    <section class="py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div *ngFor="let t of testimonials" class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <p class="text-gray-600 mb-4">"{{ t.message }}"</p>
            <div class="flex items-center gap-3">
              <img [src]="t.avatar" alt="avatar" class="w-12 h-12 rounded-full object-cover">
              <div>
                <p class="font-semibold text-gray-900">{{ t.name }}</p>
                <p class="text-sm text-gray-500">{{ t.position }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="py-16 bg-primary-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div *ngFor="let feature of features" class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div class="w-12 h-12 mx-auto mb-4 text-primary-600" [innerHTML]="feature.icon"></div>
            <h3 class="font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- BRANDS SLIDER -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Our Brands</h2>
        <div class="flex flex-wrap justify-center gap-6 items-center">
          <img *ngFor="let b of brands" [src]="b.logo" [alt]="b.name" class="h-16 object-contain"/>
        </div>
      </div>
    </section>

    <!-- COUNTDOWN SALE -->
    <section class="py-16 bg-accent/10 text-center">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Flash Sale Ends In:</h2>
        <p class="text-4xl font-bold text-red-600 mb-8">{{ countdown }}</p>
        <button routerLink="/products" class="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition">
          Shop Now
        </button>
      </div>
    </section>
  `,
  styles: [`:host { display: block; }`]
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  bestSellers: Product[] = [];
  newArrivals: Product[] = [];
  testimonials = [
    { name: 'Jane Doe', position: 'Designer', message: 'Amazing service and fast delivery!', avatar: 'https://i.pravatar.cc/50?img=1' },
    { name: 'John Smith', position: 'Developer', message: 'Products exceeded my expectations!', avatar: 'https://i.pravatar.cc/50?img=2' }
  ];
  features = [
    { title: 'Fast Delivery', desc: 'Get your products quickly', icon: '<svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18v18H3V3z"/></svg>' },
    { title: 'Secure Payment', desc: 'Safe and secure transactions', icon: '<svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/></svg>' },
    { title: '24/7 Support', desc: 'We are here to help anytime', icon: '<svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3"/></svg>' },
    { title: 'High Quality', desc: 'Top-notch products', icon: '<svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2l7 7-7 7-7-7 7-7z"/></svg>' }
  ];
  brands = [
    { name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
    { name: 'Adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' }
    
  ];
  countdown: string = '02:14:22';


  constructor(
    private productService: ProductService,
    private newsletter: NewsletterService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
     this.categories = ['Electronics', 'Wearables', 'Photography', 'Accessories', 'Cables'];
    this.bestSellers = this.products.slice(0, 4);
    this.newArrivals = this.products.slice(-4);
  }

   loadProducts() {
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
        this.bestSellers = this.products.slice(0, 4);
        this.newArrivals = this.products.slice(-4);
      },
      error: (err) => console.error('Error loading products:', err)
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product.id);
    console.log('Added to Cart:', product);
  }

  formatPrice(price: number): string {
    return '$' + price.toFixed(2);
  }
}
