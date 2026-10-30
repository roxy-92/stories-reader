import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { siteConfig } from '../../core/config/site.config';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly site = siteConfig;
}