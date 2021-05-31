import {EventEmitter, Output, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() featureSelected =  new EventEmitter<string>();
  public toggleDropdown: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }

  onIsShown(toggle: boolean) {
    this.toggleDropdown = toggle;
  }
}
