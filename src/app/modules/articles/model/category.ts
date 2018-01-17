/**
 * User: sofia
 * Date: 2018/1/17
 * Version: 1.0.0
 * Description:
 */
export interface ICategoryInterface {
  id?: number;
  name?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Category implements ICategoryInterface {
  id?: number;
  name?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;

  static createByJSON(json: ICategoryInterface): Category {
    const {id, name, description, createdAt, updatedAt} = json;
    return new Category({id, name, description, createdAt, updatedAt});
  }

  constructor(attr: ICategoryInterface = {}) {
    this.id = attr.id;
    this.name = attr.name;
    this.description = attr.description;
    this.createdAt = attr.createdAt;
    this.updatedAt = attr.updatedAt;
  }
}
