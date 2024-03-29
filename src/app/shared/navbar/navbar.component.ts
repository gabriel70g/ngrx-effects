import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  values = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  irUsuario(id: string) {
    if (!id) return;
    this.router.navigate(['/usuario', id]);
  }
}
