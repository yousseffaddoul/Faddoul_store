import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  category: string;
  image: string;
  affiliateLink?: string; // ⭐ ADDED
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="flex flex-col lg:flex-row">

      <!-- Main Products Section -->
      <div class="flex-1">

        <!-- Hero Section -->
        <section class="bg-gradient-to-r from-blue-100 to-white py-12">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl font-extrabold text-gray-900 mb-2">Our Products</h1>
            <p class="text-gray-600 text-lg">High-quality products curated just for you</p>
          </div>
        </section>

        <!-- Filter Section -->
        <section class="py-6 bg-white border-b">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col sm:flex-row gap-4 items-center">
              <label for="categoryFilter" class="text-sm font-medium text-gray-700">Filter by Category:</label>

              <select id="categoryFilter" 
                [(ngModel)]="selectedCategory" 
                (ngModelChange)="filterProducts()"
                class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">

                <option value="">All Categories</option>
                <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>

              </select>
            </div>
          </div>
        </section>

        <!-- Products Grid -->
        <section class="py-12 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              <div *ngFor="let product of filteredProducts"
                   class="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden group">

                <div class="relative">
                  <img [src]="product.image" [alt]="product.name"
                       class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />

                  <span *ngIf="product.originalPrice"
                        class="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Sale
                  </span>
                </div>

                <div class="p-4 space-y-2">

                  <p class="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                    {{ product.category }}
                  </p>

                  <h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                    {{ product.name }}
                  </h3>

                  <div class="flex items-center gap-2">
                    <div class="flex text-yellow-400">
                      <ng-container *ngFor="let i of stars">
                        <svg class="w-4 h-4" 
                             [ngClass]="{'fill-current': i <= product.rating, 'fill-gray-300': i > product.rating}"
                             viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      </ng-container>
                    </div>

                    <span class="text-sm text-gray-500">({{ product.reviews }})</span>
                  </div>

                  <div class="flex items-center gap-3">
                    <span class="text-2xl font-bold text-gray-900">
                      {{ formatPrice(product.price) }}
                    </span>

                    <span *ngIf="product.originalPrice"
                          class="text-lg text-gray-400 line-through">
                      {{ formatPrice(product.originalPrice) }}
                    </span>
                  </div>

                  <!-- Add to cart -->
                  <button (click)="addToCart(product)"
                          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                    Add to Cart
                  </button>

                  <!-- Affiliate Link Button -->
                  <a *ngIf="product.affiliateLink"
                     [href]="product.affiliateLink"
                     target="_blank"
                     class="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition">
                    Buy on Amazon
                  </a>

                </div>
              </div>
            </div>

            <!-- Success Message -->
            <div *ngIf="successMessage"
                 class="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition">
              {{ successMessage }}
            </div>

          </div>
        </section>

      </div>

      <!-- Basket Section -->
      <div class="w-full lg:w-96 lg:sticky lg:top-5 h-fit bg-white 
                  border-t lg:border-t-0 lg:border-l p-4 shadow-lg 
                  lg:ml-4 mt-6 lg:mt-0">

        <h3 class="text-xl font-bold mb-4">Your Orders</h3>

        <p>Total Items: <span class="font-semibold">{{ orders.length }}</span></p>
        <p>Total Price: <span class="font-semibold">{{ formatPrice(totalPrice()) }}</span></p>

        <div *ngIf="orders.length > 0" class="mt-4 space-y-4">

          <div *ngFor="let item of orders" class="flex items-center gap-3 border-b pb-2">

            <img [src]="item.image" class="w-12 h-12 object-cover rounded" alt="{{ item.name }}">

            <div class="flex-1">
              <p class="text-sm font-semibold">{{ item.name }}</p>
              <p class="text-sm text-gray-500">{{ formatPrice(item.price) }}</p>
            </div>

            <button (click)="removeFromCart(item)"
                    class="text-red-500 hover:text-red-700 font-bold">&times;</button>

          </div>

          <!-- Checkout email -->
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700">Enter your email:</label>

            <input type="email"
                   [(ngModel)]="customerEmail"
                   class="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-500"
                   placeholder="example@gmail.com" />
          </div>

          <button (click)="checkout()"
                  class="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition">
            Shop / Checkout
          </button>
        </div>

        <div *ngIf="orders.length === 0" class="text-gray-400 mt-4">
          Your orders is empty.
        </div>

      </div>

    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class ProductsComponent {

  stars = [1, 2, 3, 4, 5];
  customerEmail: string = '';

  allProducts: Product[] = [
    {
      id: 1,
      name: 'Premium TV',
      price: 49.99,
     
      rating: 5,
      reviews: 128,
      category: 'Electronics',
      image: 'https://m.media-amazon.com/images/I/71ALQEcyxeL._AC_SL1500_.jpg',
      affiliateLink: 'https://amzn.to/3M6986P'
    },
    {
      id: 2,
      name: 'Tree balls for Christmas',
      price: 11.99,
      rating: 5,
      reviews: 86,
      category: 'Wearables',
      image: 'https://m.media-amazon.com/images/I/81OOT7p2lyL._AC_SL1500_.jpg',
      affiliateLink: 'https://amzn.to/3XAHNMA'
    },
    {
      id: 3,
      name: 'Professional Camera',
      price: 149.99,
     
      rating: 4,
      reviews: 64,
      category: 'Photography',
      image: 'https://m.media-amazon.com/images/I/71VYn4UveNL._AC_SL1500_.jpg',
      affiliateLink: 'https://amzn.to/4oKYIIz'
    },
     {
      id: 4,
      name: 'PS5',
      price: 419.93,
      
      rating: 4,
      reviews: 64,
      category: 'Photography',
      image: 'https://m.media-amazon.com/images/I/51fM0CKG+HL._SL1500_.jpg',
      affiliateLink: 'https://amzn.to/3LKZgPV'
    }
    // Add affiliateLink to your other products if needed
  ];

  filteredProducts: Product[] = [...this.allProducts];
  selectedCategory = '';
  categories = [...new Set(this.allProducts.map(p => p.category))];
  orders: Product[] = [];
  successMessage = '';

  filterProducts() {
    this.filteredProducts = this.selectedCategory
      ? this.allProducts.filter(p => p.category === this.selectedCategory)
      : [...this.allProducts];
  }

  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }

  addToCart(product: Product) {
    this.orders.push(product);
    this.successMessage = `${product.name} added to cart successfully!`;
    setTimeout(() => this.successMessage = '', 3000);
  }

  removeFromCart(product: Product) {
    const index = this.orders.findIndex(p => p.id === product.id);
    if (index > -1) this.orders.splice(index, 1);
  }

  totalPrice(): number {
    return this.orders.reduce((sum, p) => sum + p.price, 0);
  }

  checkout() {
    if (!this.customerEmail.trim()) {
      alert("Please enter your email before checkout!");
      return;
    }

    if (this.orders.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const orderDetails = this.orders
      .map(o => `${o.name} - ${this.formatPrice(o.price)}`)
      .join('\n');

    emailjs.send(
      'service_4he2lwd',
      'template_mzh67af',
      {
        user_email: this.customerEmail,
        order_items: orderDetails,
        total: this.formatPrice(this.totalPrice())
      },
      'Uhk2tV_iOwFev25Qa'
    )
    .then(() => {
      alert('Order sent successfully to ' + this.customerEmail);
      this.orders = [];
      this.customerEmail = '';
    })
    .catch(err => {
      console.error('EmailJS error:', err);
      alert('Failed to send order. Please try again.');
    });
  }
}
