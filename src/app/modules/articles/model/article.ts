/**
 * User: sofia
 * Date: 2018/1/17
 * Version: 1.0.0
 * Description:
 */
import {Category, ICategoryInterface} from './category';

export interface IArticleInterface {
  id?: number;
  title?: string;
  content?: string;
  updatedAt?: Date;
  createdAt?: Date;
  category?: ICategoryInterface;
}

export class Article implements IArticleInterface {
  id: number;
  title: string;
  content: string;
  updatedAt: Date;
  createdAt: Date;
  category?: Category;

  static createByJSON(json: IArticleInterface = {}): Article {
    const {id, title, content, updatedAt, createdAt, category} = json;
    return new Article({id, title, content, updatedAt, createdAt, category: Category.createByJSON(category)});
  }

  constructor(attr: IArticleInterface = {}) {
    this.id = attr.id;
    this.title = attr.title;
    this.content = attr.content;
    this.updatedAt = attr.updatedAt;
    this.createdAt = attr.createdAt;
    this.category = attr.category;
  }
}
