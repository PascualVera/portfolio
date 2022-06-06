import { Component, OnInit } from '@angular/core';

import { PortfolioService } from 'src/app/shared/portfolio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public links: string[];
  constructor(public portfolio: PortfolioService) {
    this.links = ['About', 'Skills', 'Works', 'Contact'];
  }
  navigate(i: number): void {
    this.portfolio.section = this.links[i];
  }
  ngOnInit(): void {}
}
