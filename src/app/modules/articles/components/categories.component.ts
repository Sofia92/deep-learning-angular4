/**
 * User: sofia
 * Date: 2018/1/17
 * Version: 1.0.0
 * Description:
 */
import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../service/article.service';
import {Category} from '../model/category';
@Component({
  selector: 'app-articles-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class ArticleCategoriesComponent implements OnInit {
  categories: Category[];
  showBlackPage: boolean;
  categoryName: string;
  pageInfo: CommonTyping.IPageInfoInterface;

  constructor(private _articleService: ArticleService) {
    this.pageInfo = {page: 1, pageSize: 10};
  }

  ngOnInit() {
    this._articleService.fetchCategories(this.pageInfo)
      .subscribe((categories: Category[]) => {
        this.categories = categories;
        this.showBlackPage = categories.length === 0;
      })
  }

  createCategory(categoryName) {
    this._articleService.createCategory(categoryName)
      .switchMap(() => this._articleService.fetchCategories(this.pageInfo))
      .subscribe((categories: Category[]) => {
        this.categories = categories;
        this.showBlackPage = categories.length === 0;
      })
  }
}
