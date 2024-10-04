import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Fix typo: styleUrl -> styleUrls
})

export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    const loginData = { email: this.email, password: this.password };

    this.http.post('http://127.0.0.1:8000/api/auth/login', loginData)
      .subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          this.errorMessage = 'Invalid email or password';
        }
      );
  }
}
// export class LoginComponent {

//   loginObj: any = {
//     email: '',
//     password: ''
//   };

//   constructor(private http: HttpClient, private router: Router) {}

//   onLogin() {
//     // debugger;
//     this.http.post('http://127.0.0.1:8000/api/auth/login', this.loginObj)
//       .subscribe(
//         (res: any) => {
//           if (res.result) {
//             alert('Login success');
//             localStorage.setItem('loginToken', res.data.token);
//             this.router.navigate(['/dashboard']);
//           } else {
//             alert(res.message);
//           }
//         },
//         (error) => {
//           console.error('Login error:', error);
//           alert('Login failed');
//         }
//       );
//   }
// }
