import { Component, OnInit } from '@angular/core';
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

  editorOptions = {
    theme: 'vs-dark',
    language: 'json',
    wordWrap: 'on',
    padding: {
      top: 10,
    },
  };

  onChange(code) {
    console.log('new code', code);
  }
  resetJaonInput() {
    this.jsonText = '';
  }
}
