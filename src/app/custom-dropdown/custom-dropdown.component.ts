import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent{
  dropdownSelected ="";
  expanded:any;
  @Input() options:any;
  selectedValue = '';
  @ViewChild('dropdownMenu')
  dropdownMenu!: ElementRef;
  @ViewChild('inputTag')
  inputTag!: ElementRef;
  
  constructor(private renderer: Renderer2){
    this.renderer.listen('window','click',(e:Event)=>{
      if(this.dropdownMenu && this.inputTag) {
        if(e.target !== this.dropdownMenu.nativeElement && e.target !== this.inputTag.nativeElement) {
          this.expanded= false;
        }
      }
    })
  }

  toggleDropdown() {
    this.expanded = !this.expanded;
  };
  onSelection(option:any) {
    this.expanded = false;
    this.selectedValue = option.name;
  };
}
