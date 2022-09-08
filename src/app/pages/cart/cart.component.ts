import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart-service';
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  })
    
    items = this.cartService.getItems();

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    window.alert('Your order has been submitted');
    this.checkoutForm.reset();
    this.router.navigate([""])
    
  }

  removeProductCart(produtoId: number) {
    this.items = this.items.filter(item => item.id !== produtoId);
    this.cartService.removeProductCart(produtoId);
  }

}
