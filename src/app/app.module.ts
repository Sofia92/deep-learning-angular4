import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HeroModule} from './modules/hero/hero.module';
import {ArticlesModule} from './modules/articles/articles.module';

import {AppComponent} from './app.component';
import {InitComponent} from './modules/init/InitComponent.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'init', pathMatch: 'full'},
  {path: 'init', component: InitComponent},
  {path: 'heroes', loadChildren: './modules/hero/hero.module#HeroModule'},
  {path: 'account', loadChildren: './modules/hero/hero.module#HeroModule'},
  {path: 'articles', loadChildren: './modules/articles/articles.module#ArticlesModule'},
];
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HeroModule,
    ArticlesModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    InitComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
