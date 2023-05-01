import { Component } from '@angular/core';

@Component({
  selector: 'app-class-style-binding-demo',
  templateUrl: './class-style-binding-demo.component.html',
  styleUrls: ['./class-style-binding-demo.component.scss']
})
export class ClassStyleBindingDemoComponent {
  public tittleOne = "This is Class Binding";
  public applyClass = true;

  public tittleTwo = "This is Style Binding";
  public applyStyle = false;

  isSpecial = true;
  canSave = true;
  testFunction(){
    
  }
}
