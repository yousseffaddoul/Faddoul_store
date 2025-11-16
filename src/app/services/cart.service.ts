import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface CartItem {
  id: number;
  productId: number;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private api = 'http://localhost:5000/api/cart'; // your cart API endpoint
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor(private http: HttpClient) {}

  getCart(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.api).pipe(
      tap(cart => this.cartSubject.next(cart)) // update local state
    );
  }

  addToCart(productId: number): Observable<CartItem> {
    return this.http.post<CartItem>(this.api, { product_id: productId }).pipe(
      tap(item => {
        const current = this.cartSubject.value;
        this.cartSubject.next([...current, item]);
      })
    );
  }

  removeFromCart(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`).pipe(
      tap(() => {
        const updated = this.cartSubject.value.filter(item => item.id !== id);
        this.cartSubject.next(updated);
      })
    );
  }
}
