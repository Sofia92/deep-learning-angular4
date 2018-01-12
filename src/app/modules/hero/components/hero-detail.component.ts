/**
 * User: sofia
 * Date: 2018/1/12
 * Version: 1.0.0
 * Description:
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../service/hero.service';
import {Hero} from '../models/hero';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {
  selectedHero: Hero;
  hero: Hero;

  ngOnInit() {
    this.activatedRoute.params
      .filter(router => !!router['heroId'])
      .map(heroId => +heroId['heroId'])
      .switchMap(heroId => {
        return this._heroService.getHeroById(heroId);
      }).subscribe((hero: Hero) => {
      this.selectedHero = hero;
      this.hero = hero;
    });
  }

  constructor(private activatedRoute: ActivatedRoute, private _heroService: HeroService) {
  }

  changeName(name: string) {
    this.hero.name = name;
  }

  cancel() {
    this.hero = this.selectedHero;
  }

  back() {
    window.history.back()
  }
}
