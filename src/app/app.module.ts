import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationDemoComponent } from './interpolation-demo/interpolation-demo.component';
import { PropertyBindingDemoComponent } from './property-binding-demo/property-binding-demo.component';
import { AttributeBindingDemoComponent } from './attribute-binding-demo/attribute-binding-demo.component';
import { ClassStyleBindingDemoComponent } from './class-style-binding-demo/class-style-binding-demo.component';
import { EventBindingDemoComponent } from './event-binding-demo/event-binding-demo.component';
import { TwoWayBindingDemoComponent } from './two-way-binding-demo/two-way-binding-demo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationDemoComponent,
    PropertyBindingDemoComponent,
    AttributeBindingDemoComponent,
    ClassStyleBindingDemoComponent,
    EventBindingDemoComponent,
    TwoWayBindingDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
