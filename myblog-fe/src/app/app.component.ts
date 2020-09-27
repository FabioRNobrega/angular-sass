import { Component } from '@angular/core';
import { faList, faCode, faEllipsisH} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myblog-fe';
  faList = faList;
  faCode = faCode;
  faEllipsisH = faEllipsisH;
}
