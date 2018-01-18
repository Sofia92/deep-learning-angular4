/**
 * User: sofia
 * Date: 2018/1/18
 * Version: 1.0.0
 * Description:
 */
import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import * as marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

@Component({
  selector: 'app-rendered-content',
  template: `<div [innerHtml]="markedContent"></div>`,
  styleUrls: ['./rendered-content.page.scss']
})

export class RenderedContentComponent implements OnChanges {
  @Input('content') content: string;
  markedContent: any;

  ngOnChanges(change: SimpleChanges) {
    if (change.content.currentValue) {
      this.markedContent = marked(this.content);
    }
  }
}
