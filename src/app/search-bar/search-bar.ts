import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  @Output() searchChanged = new EventEmitter<string>();
  onSearch(searchTerm: string) {
    this.searchChanged.emit(searchTerm);
  }
}
