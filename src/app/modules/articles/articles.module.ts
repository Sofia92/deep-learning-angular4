/**
 * User: sofia
 * Date: 2018/1/17
 * Version: 1.0.0
 * Description:
 */
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ArticleComponentModule} from './components/article-component.module';

import {ArticleService} from './service/article.service';

import {ArticlesPageComponent} from './pages/articles.page';
import {ArticlesNavBarComponent} from './pages/navbar.component';
import {ArticleDashboardComponent} from './components/dashboard.component';
import {ArticleListComponent} from './components/list.component';
import {ArticleCategoriesComponent} from './components/categories.component';
import {ArticleEditorComponent} from './components/editor.component';


const editRoutes: Routes = [
  {
    path: 'articles', component: ArticlesPageComponent, children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: ArticleDashboardComponent},
    {path: 'lists', component: ArticleListComponent},
    {path: 'categories', component: ArticleCategoriesComponent},
    {path: ':articleId', component: ArticleEditorComponent}
  ]
  }
];
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ArticleComponentModule,
    RouterModule.forChild(editRoutes),
  ],
  declarations: [
    ArticlesPageComponent,
    ArticlesNavBarComponent,
  ],
  providers: [ArticleService],
  exports: []
})

export class ArticlesModule {

}
