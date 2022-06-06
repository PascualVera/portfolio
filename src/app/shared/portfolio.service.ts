import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  public section: string;
  constructor() {
    this.section = 'about';
  }
}
