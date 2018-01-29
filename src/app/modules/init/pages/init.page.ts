/**
 * User: sofia
 * Date: 2018/1/12
 * Version: 1.0.0
 * Description:
 */
import {Component} from '@angular/core';
@Component({
  selector: 'app-init-component',
  templateUrl: `./init.page.html`,
  styles: [
      `
      li {
        display: inline-block;
        border: 1px solid #eee;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
      }

      li.active {
        background: #CFD8DC;
      }
    `
  ]
})

export class InitPageComponent {
  hooks: any[];
  currentHook;

  constructor() {
    this.hooks = [
      {id: '1', name: 'hooks'},
      {id: '1', name: 'spy'},
      {id: '1', name: 'onchanges'},
      {id: '1', name: 'docheck'},
      {id: '1', name: 'after-view'},
      {id: '1', name: 'after-content'},
      {id: '1', name: 'counter'},
    ];
    this.currentHook = this.hooks[0];
  }

  setCurrentHook(hook) {
    this.currentHook = hook;
  }
}
