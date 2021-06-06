import {EventEmitter, Output, Component, OnInit} from '@angular/core';
import {DataStorageService} from "../shared/data-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() featureSelected =  new EventEmitter<string>();
  public toggleDropdown: boolean;

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
  }

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }

  onIsShown(toggle: boolean) {
    this.toggleDropdown = toggle;
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
