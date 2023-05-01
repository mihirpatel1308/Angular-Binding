import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding-demo',
  templateUrl: './property-binding-demo.component.html',
  styleUrls: ['./property-binding-demo.component.scss']
})
export class PropertyBindingDemoComponent {
  itemImageUrl = '../assets/pexels-artem-saranin-1496373.jpg';
  isUnchanged = false;

  classes = 'special';

  interpolationTitle = 'Interpolation';
  propertyTitle = 'Property binding';
}
