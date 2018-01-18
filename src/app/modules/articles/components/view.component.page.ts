/**
 * User: sofia
 * Date: 2018/1/18
 * Version: 1.0.0
 * Description:
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../service/article.service';
import {Article} from '../model/article';

@Component({
  selector: 'app-article-view',
  template: `
    <div *ngIf="currentArticle">
      <i class="fa fa-pencil-square-o cursor-pointer" (click)="routerToEditor(currentArticle)"></i>
      <app-rendered-content [content]="currentArticle.content"></app-rendered-content>
    </div>`,
  styleUrls: ['./view.component.page.scss']
})
export class ArticleViewComponent implements OnInit {
  currentArticle: Article;

  constructor(private activatedRouter: ActivatedRoute, private router: Router, private _articleService: ArticleService) {
  }

  ngOnInit() {
    this.activatedRouter.params.switchMap(res => {
      return this._articleService.getCurrentArticleById(+res.articleId)
    }).subscribe((article: Article) => {
      this.currentArticle = article;
    })
  }

  routerToEditor(article: Article) {
    this.router.navigate([`articles/${article.id}`])
  }
}
