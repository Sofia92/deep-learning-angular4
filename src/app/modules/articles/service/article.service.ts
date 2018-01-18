/**
 * User: sofia
 * Date: 2018/1/17
 * Version: 1.0.0
 * Description:
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from './../../../../environments/environment';
import {Article} from '../model/article';
import {Category} from '../model/category';
import {ArticleSerialize} from './article-serialize';


const host = environment.host;
@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {
  }

  fetchArticles(pageInfo: CommonTyping.IPageInfoInterface): Observable<Article[]> {
    return this.http.get(`${host}/articles?page=${pageInfo.page}&pageSize=${pageInfo.pageSize}`)
      .map((articles: any[]) => {
        return articles.map(article => {
          const normalizedArticle = ArticleSerialize.normalizeArticle(article);
          return Article.createByJSON(normalizedArticle);
        });
      })
  }

  getCurrentArticleById(id: number): Observable<Article> {
    return this.http.get(`${host}/articles/${id}`).map(article => {
      const normalizedArticle = ArticleSerialize.normalizeArticle(article);
      return Article.createByJSON(normalizedArticle);
    })
  }

  saveArticle(article: Article): Observable<Article> {
    const deNormalizedArticle = ArticleSerialize.deNormalizeArticle(article);
    return this.http.put(`${host}/articles/${article.id}`, deNormalizedArticle)
  }

  createArticle(name: string) {
    return this.http.post(`${host}/articles`, {title: name});
  }

  removeArticle(article: Article) {
    return this.http.delete(`${host}/articles/${article.id}`);
  }

  fetchCategories(pageInfo: CommonTyping.IPageInfoInterface): Observable<Category[]> {
    return this.http.get(`${host}/categories?page=${pageInfo.page}&pageSize=${pageInfo.pageSize}`)
      .map((categories: any[]) => {
        return categories.map(category => {
          const normalizedCategory = ArticleSerialize.normalizeCategory(category);
          return Category.createByJSON(normalizedCategory);
        })
      })
  }

  createCategory(name: string) {
    return this.http.post(`${host}/categories`, {name: name});
  }

  fetchArticlesByCategory() {

  }
}
