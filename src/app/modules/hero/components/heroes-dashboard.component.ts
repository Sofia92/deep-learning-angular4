/**
 * User: sofia
 * Date: 2018/1/11
 * Version: 1.0.0
 * Description:
 */
import {Component, OnInit} from '@angular/core';
import {Hero} from '../models/hero';
import {HeroService} from './../service/hero.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroes-dashboard',
  templateUrl: './heroes-dashboard.component.html',
  styleUrls: ['./heroes-dashboard.component.scss']
})

export class HeroesDashboardComponent implements OnInit {
  topHeroes: Hero[];
  heroName: string;
  ableCreateHero: boolean;

  ngOnInit() {
    this._heroService.fetchHeroes().subscribe((heroes: Hero[]) => {
      this.topHeroes = heroes.slice(0, 5);
    });
    this.heroName = 'super hero';
  }

  constructor(private _heroService: HeroService, private router: Router) {
    this.ableCreateHero = false;
  }

  routerToHeroDetail(hero: Hero) {
    this.router.navigate([`/heroes/${hero.id}`]);
  }

  removeHero(hero: Hero) {
    this._heroService.removeHero(hero).switchMap(() => {
      return this._heroService.fetchHeroes();
    }).subscribe((heroes: Hero[]) => {
      this.topHeroes = heroes.slice(0, 5);
    })
  }

  showCreateHero() {
    this.ableCreateHero = true;
  }

  createHero(name) {
    this.ableCreateHero = false;
    this._heroService.createHero(name).switchMap(() => {
      return this._heroService.fetchHeroes();
    }).subscribe((heroes: Hero[]) => {
      this.topHeroes = heroes.slice(0, 5);
    })
  }
}
