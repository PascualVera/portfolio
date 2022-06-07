import { Component, OnInit } from '@angular/core';

import { PortfolioService } from 'src/app/shared/portfolio.service';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css'],
})
export class CubeComponent implements OnInit {
  public section: string;
  constructor(public portfolio: PortfolioService) {
    this.section = portfolio.section;
  }
  styleObject(): object {
    if (this.portfolio.section == 'About') {
      document.documentElement.style.setProperty('--neon', '#bc13fe');
      return { transform: 'rotateX(-30deg) rotateY(-30deg)' };
    } else if (this.portfolio.section == 'Skills') {
      document.documentElement.style.setProperty('--neon', '#93c8c4');
      return { transform: 'rotateX(-70deg) rotateY(-140deg)' };
    } else if (this.portfolio.section == 'Works') {
      document.documentElement.style.setProperty('--neon', '#0b49bd');
      return { transform: 'rotateX(-10deg) rotateY(-150deg)' };
    } else if (this.portfolio.section == 'Contact') {
      return {
        transform: 'scale(0.1)',
      };
    } else {
      return {};
    }
  }

  ngOnInit(): void {}
}
