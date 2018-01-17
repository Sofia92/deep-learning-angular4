/**
 * User: sofia
 * Date: 2018/1/11
 * Version: 1.0.0
 * Description:
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Hero} from '../models/hero';
import 'rxjs/add/observable/of';
import {environment} from './../../../../environments/environment';

const host = environment.host;
@Injectable()
export class HeroService {
  constructor(private http: HttpClient) {
  }

  fetchHeroes(): Observable<Hero[]> {
    return this.http.get(`${host}/heroes`)
      .map((heroes: any[]) => heroes.map(hero => Hero.createByJSON(hero)));
  }

  getHeroById(heroId: number): Observable<Hero> {
    return this.http.get(`${host}/heroes/${heroId}`);
  }

  createHero(heroName: string): Observable<Hero> {
    return this.http.post(`${host}/heroes`, {name: heroName});
  }

  updateHero(hero: Hero): Observable<Hero> {
    const params = {
      name: hero.name,
      phone: hero.phone,
      hobby: hero.hobby
    };
    return this.http.put(`${host}/heroes/${hero.id}`, params);
  }

  removeHero(hero: Hero) {
    return this.http.delete(`${host}/heroes/${hero.id}`);
  }
}
