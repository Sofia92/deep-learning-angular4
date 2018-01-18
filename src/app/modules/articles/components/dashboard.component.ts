/**
 * User: sofia
 * Date: 2018/1/17
 * Version: 1.0.0
 * Description:
 */
import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../service/article.service';
import {Article} from '../model/article';
import {Router} from "@angular/router";

@Component({
  selector: 'app-articles-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class ArticleDashboardComponent implements OnInit {
  articles: Article[];
  articleName: string;
  showBlankPage: boolean;
  pageInfo: CommonTyping.IPageInfoInterface;

  constructor(private router: Router, private _articleService: ArticleService) {
    this.pageInfo = {page: 1, pageSize: 9};
  }

  ngOnInit() {
    this._articleService.fetchArticles(this.pageInfo).subscribe((articles: Article[]) => {
      this.articles = articles;
      this.showBlankPage = articles.length === 0;
    })
  }

  createArticle(articleName) {
    if (!!articleName) {
      this._articleService.createArticle(articleName).switchMap(() => {
        return this._articleService.fetchArticles(this.pageInfo);
      }).subscribe((articles: Article[]) => {
        this.articles = articles;
        this.showBlankPage = articles.length === 0;
      })
    }
  }

  routerToView(article: Article) {
    this.router.navigate([`articles/${article.id}/view`])
  }
}
