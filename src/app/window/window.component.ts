import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HighlightLoader, HighlightAutoResult } from 'ngx-highlightjs';
import { DataService } from '../data.service';
import { Data } from '../data';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
})
export class WindowComponent {
  datas: Data;
  gradient: string;
  windowWidth: string;
  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  constructor(private hljsLoader: HighlightLoader, private data: DataService) {}
  ngOnInit(): void {
    this.data.currentData.subscribe((datas) => {
      this.datas = datas;
      this.windowWidth = `${this.datas.minWidth}%`;
    });
  }

  downloadImage() {
    html2canvas(this.screen.nativeElement).then((canvas: any) => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'marble-diagram.png';
      this.downloadLink.nativeElement.click();
    });
  }
}
