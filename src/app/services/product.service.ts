import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number; // 1-5
  reviews: number;
  category: string;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private api = 'http://localhost:5000/api/products'; // your backend API

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }
}
