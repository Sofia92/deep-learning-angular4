/**
 * User: sofia
 * Date: 2018/1/17
 * Version: 1.0.0
 * Description:
 */
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {ArticleDashboardComponent} from './dashboard.component';
import {ArticleListComponent} from './list.component';
import {ArticleCategoriesComponent} from './categories.component';
import {ArticleEditorComponent} from './editor.component';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
  ],
  declarations: [
    ArticleDashboardComponent,
    ArticleListComponent,
    ArticleCategoriesComponent,
    ArticleEditorComponent,
  ],
  exports: [
    ArticleDashboardComponent,
    ArticleListComponent,
    ArticleCategoriesComponent,
    ArticleEditorComponent,
  ]
})

export class ArticleComponentModule {
}
