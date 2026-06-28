import { Component, ElementRef, inject, Output, EventEmitter, AfterViewInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import * as React from 'react';
import { createRoot, Root } from 'react-dom/client';
// @ts-ignore
import CkEditor from 'athif-custom-package';

@Component({
  selector: 'app-ck-editor',
  standalone: true,
  template: '',
  styles: [':host { display: block; }']
})
export class CkEditorWrapperComponent implements AfterViewInit, OnDestroy, OnChanges {
  private elementRef = inject(ElementRef);
  private root: Root | null = null;

  @Output() onChange = new EventEmitter<string>();

  ngAfterViewInit() {
    this.root = createRoot(this.elementRef.nativeElement);
    this.render();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.render();
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.unmount();
    }
  }

  private render() {
    if (!this.root) return;

    this.root.render(
      React.createElement(CkEditor, {
        onChange: (html: string) => this.onChange.emit(html)
      })
    );
  }
}
