import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding-demo',
  templateUrl: './event-binding-demo.component.html',
  styleUrls: ['./event-binding-demo.component.scss']
})
export class EventBindingDemoComponent {
  isDisabled = true;
  name = 'hide';

  disable() {
    debugger
    if (this.isDisabled) {
      this.isDisabled = false;
      this.name = 'show';
    } else {
      this.isDisabled = true;
      this.name = 'hide';
    }
  }
}
