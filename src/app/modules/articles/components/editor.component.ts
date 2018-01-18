/**
 * User: sofia
 * Date: 2018/1/17
 * Version: 1.0.0
 * Description:
 */
import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../service/article.service';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../model/article';

@Component({
  selector: 'app-article-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class ArticleEditorComponent implements OnInit {
  currentArticle: Article;
  titleEditable: boolean;

  constructor(private _articleService: ArticleService, private activatedRoute: ActivatedRoute) {
    this.titleEditable = false;
  }

  ngOnInit() {
    this.activatedRoute.params.switchMap(res => {
      return this._articleService.getCurrentArticleById(+res.articleId)
    }).subscribe((article: Article) => {
      this.currentArticle = article;
    })
  }

  back() {
    window.history.back();
  }

  showUpdateTitle() {
    this.titleEditable = true;
  }

  savePage() {
    this.titleEditable = false;
    this._articleService.saveArticle(this.currentArticle).subscribe(() => {

    })
  }
}
