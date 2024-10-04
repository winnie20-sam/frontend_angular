import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,  // Add this line
  imports: [CommonModule],  // Keep the imports here
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get<any[]>('http://127.0.0.1:8000/api/products') // Adjust the endpoint as necessary
      .subscribe(
        data => {
          this.products = data;
        },
        error => {
          console.error('Error fetching products:', error);
        }
      );
  }
}
