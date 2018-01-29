/**
 * User: sofia
 * Date: 2018/1/29
 * Version: 1.0.0
 * Description:
 */
import {AfterViewChecked, AfterViewInit, Component, ViewChild} from '@angular/core';
import {LoggerService} from './logger.service';

@Component({
  selector: 'app-child-view',
  template: '<input [(ngModel)]="hero">'
})
export class ChildViewComponent {
  hero = 'Magneta';
}

@Component({
  selector: 'after-view',
  template: `
    <div>-- child view begins --</div>
      <app-child-view></app-child-view>
    <div>-- child view ends --</div>`
  + `
    <p *ngIf="comment" class="comment">
      {{comment}}
    </p>
  `
})
export class AfterViewComponent implements AfterViewChecked, AfterViewInit {
  private prevHero = '';
  @ViewChild(ChildViewComponent) viewChild: ChildViewComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterView constructor');
  }

  ngAfterViewInit() {
    this.logIt('AfterViewInit');
    this.doSomething();
  }

  ngAfterViewChecked() {
    if (this.prevHero === this.viewChild.hero) {
      this.logIt('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      this.logIt('AfterViewChecked');
      this.doSomething();
    }
  }

  comment = '';

  private doSomething() {
    let c = this.viewChild.hero.length > 10 ? `That's a long name` : '';
    if (c !== this.comment) {
      this.logger.tick_then(() => this.comment = c);
    }
  }

  private logIt(method: string) {
    let child = this.viewChild;
    let message = `${method}: ${child ? child.hero : 'no'} child view`;
    this.logger.log(message);
  }

  // ...
}

@Component({
  selector: 'after-view-parent',
  template: `
    <div class="parent">
      <h2>AfterView</h2>

      <after-view *ngIf="show"></after-view>

      <h4>-- AfterView Logs --</h4>
      <p>
        <button (click)="reset()">Reset</button>
      </p>
      <div *ngFor="let msg of logs">{{msg}}</div>
    </div>
  `,
  styles: ['.parent {background: burlywood}'],
  providers: [LoggerService]
})

export class AfterViewParentComponent {
  logs: string[];
  show = true;

  constructor(private logger: LoggerService) {
    this.logs = logger.logs;
  }

  reset() {
    this.logs.length = 0;
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }
}
