/**
 * User: sofia
 * Date: 2018/1/17
 * Version: 1.0.0
 * Description:
 */
import {Component} from '@angular/core';
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
  selector: 'app-article-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class ArticleEditorComponent {
  content: any;
  markedContent: any;

  back() {
    window.history.back();
  }

  displayMarkedContent(content) {
    this.content = content;
    this.markedContent = marked(content);
  }

}
