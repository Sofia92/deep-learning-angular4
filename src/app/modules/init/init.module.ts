/**
 * User: sofia
 * Date: 2018/1/24
 * Version: 1.0.0
 * Description:
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {InitPageComponent} from './pages/init.page';
import {LifecycleModule} from './components/life-circle/life-cycle.module';

const heroRoutes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: InitPageComponent}
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(heroRoutes),
    LifecycleModule
  ],
  declarations: [
    InitPageComponent,
  ],
  providers: [],
  exports: [],
})

export class InitModule {
}
