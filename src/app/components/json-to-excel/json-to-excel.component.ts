import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-to-excel',
  templateUrl: './json-to-excel.component.html',
  styleUrls: ['./json-to-excel.component.scss'],
})
export class JsonToExcelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  theme = 'vs-dark';

  codeModel = {
    language: 'json',
    uri: 'main.json',
    value: '',
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
    padding: {
      top: 10,
    },
  };

  onCodeChanged(value) {
    // console.log('CODE', value);
  }
}
