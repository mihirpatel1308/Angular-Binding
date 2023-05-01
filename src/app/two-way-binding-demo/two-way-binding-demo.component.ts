import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-demo',
  templateUrl: './two-way-binding-demo.component.html',
  styleUrls: ['./two-way-binding-demo.component.scss']
})
export class TwoWayBindingDemoComponent {
 public twoWay = "this text value is already defined on the source code. this input element rendered it because it is bound to the data. now if you edit this, the data in the source then will change too because the data is bound also to the input element."

}
