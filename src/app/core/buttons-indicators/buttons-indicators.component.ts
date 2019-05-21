import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
@Component({
  selector: 'wf-buttons-indicators',
  templateUrl: './buttons-indicators.component.html',
  styleUrls: ['./buttons-indicators.component.css']
})
export class ButtonsIndicatorsComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
  centered = false;
  disabled = false;
  unbounded = false;

  ngOnInit() {
  }

}
