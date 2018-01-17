/**
 * User: sofia
 * Date: 2018/1/11
 * Version: 1.0.0
 * Description:
 */

interface IHeroInterface {
  id?: string | number;
  name?: string;
  age?: number;
  phone?: string;
  address?: string;
  hobby?: string;
  infoType?: string;
}

export class Hero implements IHeroInterface {
  id: string | number;
  name: string;
  age: number;
  phone: string;
  address: string;
  hobby: string;
  infoType: string;

  static createByJSON(json: IHeroInterface = {}) {
    const {id, name, age, phone, address, hobby, infoType} = json;
    return new Hero({id, name, age, phone, address, hobby, infoType});
  }

  constructor(attr: IHeroInterface = {}) {
    this.id = attr.id;
    this.name = attr.name;
    this.age = attr.age;
    this.phone = attr.phone;
    this.address = attr.address;
    this.hobby = attr.hobby;
    this.infoType = attr.infoType;
  }

}
