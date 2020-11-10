import { Component, OnInit } from '@angular/core';
import { WorkSheet, WorkBook, utils, writeFile } from 'xlsx';

@Component({
  selector: 'app-json-to-excel',
  templateUrl: './json-to-excel.component.html',
  styleUrls: ['./json-to-excel.component.scss'],
})
export class JsonToExcelComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  jsonText: any;

  fileName: string;

  editorOptions = {
    theme: 'vs-dark',
    language: 'json',
    wordWrap: 'on',
    padding: {
      top: 10,
    },
    formatOnPaste: true,
  };
  resetJaonInput() {
    this.jsonText = null;
  }
  downloadXlFile(): void {
    /* generate worksheet */
    const ws: WorkSheet = utils.json_to_sheet(JSON.parse(this.jsonText));

    /* generate workbook and add the worksheet */
    const wb: WorkBook = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    if (this.fileName) {
      writeFile(wb, `${this.fileName}.xlsx`);
    } else {
      writeFile(wb, `fileName.xlsx`);
    }
  }
}
