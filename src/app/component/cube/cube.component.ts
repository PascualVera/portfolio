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
      return { transform: 'rotateX(-10deg) rotateY(-10deg)' };
    } else if (this.portfolio.section == 'Skills') {
      return { transform: 'rotateX(-10deg) rotateY(-100deg)' };
    } else if (this.portfolio.section == 'Works') {
      return { transform: 'rotateX(-10deg) rotateY(-190deg)' };
    } else {
      return {};
    }
  }

  ngOnInit(): void {}
}
