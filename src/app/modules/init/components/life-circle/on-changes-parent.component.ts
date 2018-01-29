/**
 * User: sofia
 * Date: 2018/1/29
 * Version: 1.0.0
 * Description:
 */
import {Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
// import {Hero} from "../../../hero/models/hero";

class Hero {
  constructor(public name: string) {
  }
}

@Component({
  selector: 'on-changes',
  template: `
    <div class="hero">
      <p>{{hero.name}} can {{power}}</p>

      <h4>-- Change Log --</h4>
      <div *ngFor="let chg of changeLog">{{chg}}</div>
    </div>
  `,
  styles: [
    '.hero {background: LightYellow; padding: 8px; margin-top: 8px}',
    'p {background: Yellow; padding: 8px; margin-top: 8px}'
  ]
})

export class OnChangesComponent implements OnChanges {
  @Input('hero') hero: Hero;
  @Input('power') power: string;
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  reset() {
    this.changeLog.length = 0;
  }
}


@Component({
  selector: 'on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styles: ['.parent {background: Lavender;}']
})

export class OnChangesParentComponent {
  title: string;
  hero: Hero;
  power: string;
  @ViewChild(OnChangesComponent) childView: OnChangesComponent;

  constructor() {
    this.title = 'OnChanges';
    this.reset();
  }

  reset() {
    this.hero = new Hero('Windstorm');
    this.power = 'sing';
    if (this.childView) {
      this.childView.reset();
    }
  }
}

