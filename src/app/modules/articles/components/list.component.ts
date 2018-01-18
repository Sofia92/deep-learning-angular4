/**
 * User: sofia
 * Date: 2018/1/17
 * Version: 1.0.0
 * Description:
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ArticleService} from '../service/article.service';
import {Article} from '../model/article';
@Component({
  selector: 'app-articles-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ArticleListComponent implements OnInit {
  articles: Article[];
  pageInfo: CommonTyping.IPageInfoInterface;

  constructor(private router: Router, private _articleService: ArticleService) {
    this.pageInfo = {page: 1, pageSize: 10};
  }

  ngOnInit() {
    this._articleService.fetchArticles(this.pageInfo).subscribe((articles: Article[]) => {
      this.articles = articles;
    })
  }

  routerToEditor(article: Article) {
    this.router.navigate([`articles/${article.id}`])
  }

  viewArticle(article: Article) {
    this.router.navigate([`articles/${article.id}/view`])
  }

  deleteArticle(article: Article) {
    this._articleService.removeArticle(article).switchMap(() => {
      return this._articleService.fetchArticles(this.pageInfo)
    }).subscribe((articles: Article[]) => {
      this.articles = articles;
    })
  }

}
