/**
 * User: sofia
 * Date: 2018/1/17
 * Version: 1.0.0
 * Description:
 */
import {IArticleInterface} from '../model/article';
import {ICategoryInterface} from '../model/category';

interface IServerArticleInterface {
  id?: number;
  title?: string;
  content?: string;
  updatedat?: Date;
  createdat?: Date;
  categoryid?: number;
}
interface IServerCategoryInterface {
  id?: number;
  name?: string;
  description?: string;
  createdat?: Date;
  updatedat?: Date;
}

export class ArticleSerialize {
  static normalizeArticle(json: IServerArticleInterface): IArticleInterface {
    const {id, title, content, updatedat, createdat, categoryid} = json;
    return {
      id, title, content, updatedAt: updatedat, createdAt: createdat, category: {id: categoryid}
    }
  }

  static normalizeCategory(json: IServerCategoryInterface): ICategoryInterface {
    const {id, name, description, updatedat, createdat} = json;
    return {
      id, name, description, updatedAt: updatedat, createdAt: createdat
    }
  }
}
