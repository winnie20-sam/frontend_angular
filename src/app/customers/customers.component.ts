import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,   // Add this to make the component standalone
  imports: [CommonModule],  // Import CommonModule here
  templateUrl: './customers.component.html',
})
export class CustomersComponent implements OnInit {
  customers: any[] = [];
  errorMessage = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if (token) {
      this.http.get('http://127.0.0.1:8000/api/customers', {
        headers: { Authorization: `Bearer ${token}` }
      }).subscribe(
        (data: any) => {
          this.customers = data;
        },
        (error) => {
          this.errorMessage = 'Failed to load customers. Please log in.';
        }
      );
    } else {
      this.errorMessage = 'No token found. Please log in.';
    }
  }

}

