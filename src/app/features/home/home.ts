import { Component } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly site = siteConfig;
}