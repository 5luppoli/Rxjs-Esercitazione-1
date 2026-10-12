import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { SearchBar } from './search-bar/search-bar';
import { Product } from './product/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Homepage, SearchBar, Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Rxjs-Esercitazione-1');
}
