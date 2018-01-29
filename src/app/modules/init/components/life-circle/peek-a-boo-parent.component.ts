import {Component} from '@angular/core';
import {LoggerService} from './logger.service';
/**
 * User: sofia
 * Date: 2018/1/29
 * Version: 1.0.0
 * Description:
 */
@Component({
  selector: 'peek-a-boo-parent',
  templateUrl: './peek-a-boo-parent.component.html',
  styles: ['.parent {background: moccasin}'],
  providers: [LoggerService]
})
export class PeekABooParentComponent {
  hasChild: boolean;
  heroName: string;
  hookLog: string[];

  constructor(private logger: LoggerService) {
    this.heroName = 'Windstorm';
    this.hookLog = this.logger.logs;
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Windstorm';
      this.logger.clear(); // clear log on create
    }
    this.logger.tick();
  }

  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }
}
