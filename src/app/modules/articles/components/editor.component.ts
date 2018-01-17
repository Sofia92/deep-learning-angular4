/**
 * User: sofia
 * Date: 2018/1/17
 * Version: 1.0.0
 * Description:
 */
import {Component} from '@angular/core';
@Component({
  selector: 'app-article-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class ArticleEditorComponent {

  back() {
    window.history.back();
  }
}
