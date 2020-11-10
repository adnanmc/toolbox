import { Component, OnInit } from '@angular/core';
import 'ace-builds/src-noconflict/mode-json';
@Component({
  selector: 'app-json-to-excel',
  templateUrl: './json-to-excel.component.html',
  styleUrls: ['./json-to-excel.component.scss'],
})
export class JsonToExcelComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  jsonText: string = '';

  fileName: string = 'fileName.xlsx';

  options: any = {
    maxLines: 1000,
    printMargin: false,
    wrap: true,
    keyBinding: 'vscode',
  };

  onChange(code) {
    console.log('new code', code);
  }
  resetJaonInput() {
    this.jsonText = '';
  }
}
