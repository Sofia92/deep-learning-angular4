import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {InitModule} from './modules/init/init.module';
import {HeroModule} from './modules/hero/hero.module';
import {ArticlesModule} from './modules/articles/articles.module';

import {AppComponent} from './app.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'init', pathMatch: 'full'},
  {path: 'init', loadChildren: './modules/init/init.module#InitModule'},
  {path: 'heroes', loadChildren: './modules/hero/hero.module#HeroModule'},
  {path: 'articles', loadChildren: './modules/articles/articles.module#ArticlesModule'},
];
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HeroModule,
    ArticlesModule,
    InitModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
