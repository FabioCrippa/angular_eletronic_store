import { Injectable } from '@angular/core';
import { Product } from '../products';
import { HttpClient } from '@angular/common/http';
import { compileDeclareInjectableFromMetadata } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  removeProductCart(produtoId: number) {
    this.items = this.items.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.items))
  }

}
