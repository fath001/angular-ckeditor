import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CkEditorWrapperComponent } from './ck-editor-wrapper.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CkEditorWrapperComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-demo');

  onEditorChange(html: string) {
    console.log('CKEditor HTML updated:', html);
  }
}
