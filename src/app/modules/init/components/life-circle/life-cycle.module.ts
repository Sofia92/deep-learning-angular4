/**
 * User: sofia
 * Date: 2018/1/29
 * Version: 1.0.0
 * Description:
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PeekABooParentComponent} from './peek-a-boo-parent.component';
import {SpyParentComponent} from './spy-parent.component';
import {OnChangesComponent, OnChangesParentComponent} from './on-changes-parent.component';
import {AfterContentComponent, AfterContentParentComponent, ChildComponent} from './after-content-parent.component';
import {AfterViewComponent, AfterViewParentComponent, ChildViewComponent} from './after-view-parent.component';
import {DoCheckComponent, DoCheckParentComponent} from './do-check-parent.component';
import {CounterParentComponent, MyCounterComponent} from './counter-parent.component';
import {PeekABooComponent} from './peek-a-boo.component';
import {SpyDirective} from './spy.directive';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    PeekABooParentComponent,
    SpyParentComponent,
    OnChangesParentComponent,
    OnChangesComponent,
    AfterContentParentComponent,
    AfterViewParentComponent,
    DoCheckParentComponent,
    CounterParentComponent,
    PeekABooComponent,
    DoCheckComponent,
    SpyDirective,
    MyCounterComponent,
    AfterContentComponent,
    ChildComponent,
    AfterViewComponent,
    ChildViewComponent,
  ],
  exports: [
    PeekABooParentComponent,
    SpyParentComponent,
    OnChangesParentComponent,
    OnChangesComponent,
    AfterContentParentComponent,
    AfterViewParentComponent,
    DoCheckParentComponent,
    CounterParentComponent,
    PeekABooComponent,
    DoCheckComponent,
  ]
})

export class LifecycleModule {

}
