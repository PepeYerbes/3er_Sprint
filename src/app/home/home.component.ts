import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/products.models';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @Input() displayMode: 'list' | 'grid' = 'list';
  @Input() products: Product[] = [];
  @Output() productClicked = new EventEmitter<number>();


  onProductClick(productId: number) {
    this.productClicked.emit(productId);
  }
  
  }


