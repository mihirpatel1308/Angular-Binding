ng g c interpolation-demo

ng g c property-binding-demo

ng g c attribute-binding-demo

ng g c class-style-binding-demo

ng g c event-binding-demo

ng g c two-way-binding-demo

------------------------------------------

Interpolation ts :

 public sample = 'String Interpolation';

Interpolation html : 

<h1>{{ sample }}</h1>

---------------------------------------------

Property bind ts

 itemImageUrl = '../assets/dummy-image-one.jpg';
  isUnchanged = true;

  classes = 'special';

  interpolationTitle = 'Interpolation';
  propertyTitle = 'Property binding';

Property bind html : 

<div>
    <h2>Binding the src property of an image:</h2>
    <img style="height: 200px;" [src]="itemImageUrl">

    <h2>Using bind- syntax:</h2>
    <img style="height: 200px;" bind-src="itemImageUrl">
    <hr />


    <!-- -------------------------------------------------------------- -->
    <h2>Binding to the colSpan property</h2>
    <table border=1>
        <tr>
            <td>Column 1</td>
            <td>Column 2</td>
        </tr>
        <!-- Notice the colSpan property is camel case -->
        <tr>
            <td [colSpan]="2">Span 2 columns</td>
        </tr>
    </table>


    <hr />

    <!-- ---------------------------------------------------------------- -->
    <h2>Button disabled state bound to isUnchanged property:</h2>
    <!-- Bind button disabled state to `isUnchanged` property -->
    <button [disabled]="isUnchanged">Disabled Button</button>
    <hr />

    <!-- ---------------------------------------------------------------- -->

    <h2>Binding to a property of a directive</h2>
    <p [ngClass]="classes">[ngClass] binding to the classes property making this blue</p>
    <hr />

    <!-- ----------------------------------------------------------------- -->

    <h2>Property binding and interpolation</h2>
    <p><img style="height: 200px;" src="{{itemImageUrl}}"> is the <i>interpolated</i> image.</p>
    <p><img style="height: 200px;" [src]="itemImageUrl"> is the <i>property bound</i> image.</p>

    <p><span>"{{interpolationTitle}}" is the <i>interpolated</i> title.</span></p>
    <p>"<span [innerHTML]="propertyTitle"></span>" is the <i>property bound</i> title.</p>

    <hr />

</div>

Property binding html ends

-------------------------------------------------------------

Attribute binding ts

actionName = 'Go for it';

Attribute binding html : 

<h2>Attribute binding</h2>
<table border=1>
    <!--  expression calculates colspan=2 -->
    <tr>
        <td [attr.colspan]="1 + 1">One-Two</td>
    </tr>

    <!-- Notice the colSpan property is camel case -->
    <tr>
        <td [colSpan]="1 + 1">Three-Four</td>
    </tr>

    <tr>
        <td>Five</td>
        <td>Six</td>
    </tr>
</table>

<hr />

---------------------------------------------------------------------------

Class style binding ts :

 public tittle1 = "This is Class Binding";
  public applyClass = true;

  public tittle2 = "This is Style Binding";
  public applyStyle = true;

  isSpecial = true;
  canSave = true;

Class style binding html :

<!--Class Binding -->
<h2>{{tittle1}}</h2>
<div [class.my-class]="applyClass">Apply Class</div><br>

<!-- Style Binding -->
<h2>{{tittle2}}</h2>
<div [style.color]="applyStyle? 'blue':'orange'">Style binding</div>`

<button [style.color]="isSpecial ? 'red': 'green'">Red</button>
<button [style.background-color]="canSave ? 'cyan': 'grey'" >Save</button>

<button [style.font-size.em]="isSpecial ? 3 : 1" >Big</button>
<button [style.font-size.%]="!isSpecial ? 150 : 50" >Small</button>

-------------------------------------------------------------------------------

Event binding ts : 

isDisabled = true;
  name = 'hide';

  disable() {
    if (this.isDisabled) {
      this.isDisabled = false;
      this.name = 'show';
    } else {
      this.isDisabled = true;
      this.name = 'hide';
    }
  }

Event binding html : 

<p> Event binding </p>
<button (click)="disable()"> {{ name }} </button>
<p *ngIf="isDisabled"> Hello There! </p>

<hr>

------------------------------------------------------------------------------------------

Two way binding ts

 twoWay = "this text value is already defined on the source code. this input element rendered it because it is bound to the data. now if you edit this, the data in the source then will change too because the data is bound also to the input element."

Two way binding html

<p> two way binding </p>

<p> {{ twoWay }} </p>
<textarea [(ngModel)]="twoWay"></textarea>

==> Import forms module in App module - FormsModule