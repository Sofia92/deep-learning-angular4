/**
 * User: sofia
 * Date: 2018/1/29
 * Version: 1.0.0
 * Description:
 */
import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {LoggerService} from './logger.service';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter">Counter = {{counter}}
      <h5>-- Counter Change Log --</h5>
      <div *ngFor="let chg of changeLog" mySpy>{{chg}}</div>
    </div>
  `,
  styles: ['.counter {background: LightYellow; padding: 8px; margin-top: 8px}']
})
export class MyCounterComponent implements OnChanges {
  @Input() counter: number;
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (this.counter === 0) {
      this.changeLog.length = 0;
    }
    const chng = changes['counter'];
    const cur = chng.currentValue;
    const prev = JSON.stringify(chng.previousValue);
    this.changeLog.push(`counter: currentValue = ${cur}, previousValue = ${prev}`);
  }
}


@Component({
  selector: 'counter-parent',
  templateUrl: './counter-parent.component.html',
  styles: ['.counter {background: LightYellow; padding: 8px; margin-top: 8px}'],
  providers: [LoggerService]
})

export class CounterParentComponent {
  value: number;
  spyLog: string[] = [];

  constructor(private logger: LoggerService) {
    this.spyLog = logger.logs;
    this.reset();
  }

  updateCounter() {
    this.value += 1;
    this.logger.tick();
  }

  reset() {
    this.logger.log('-- reset --');
    this.value = 0;
    this.logger.tick();
  }
}
