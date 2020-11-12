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

  jsonText: string;

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
  flattenJson(data) {
    var result = {};

    function recurse(cur, prop) {
      if (Object(cur) !== cur) {
        result[prop] = cur;
      } else if (Array.isArray(cur)) {
        for (var i = 0, l = cur.length; i < l; i++)
          recurse(cur[i], prop + '[' + i + ']');
        if (l == 0) result[prop] = [];
      } else {
        var isEmpty = true;
        for (var p in cur) {
          isEmpty = false;
          recurse(cur[p], prop ? prop + '.' + p : p);
        }
        if (isEmpty && prop) result[prop] = {};
      }
    }
    recurse(data, '');
    return result;
  }
  downloadXlFile(): void {
    /* generate worksheet */
    let tempdata = JSON.stringify(this.flattenJson(JSON.parse(this.jsonText)));

    if (!tempdata.startsWith('[') && !tempdata.endsWith(']')) {
      tempdata = `[${tempdata}]`;
    }
    let parsedJson = JSON.parse(tempdata);
    // console.log(parsedJson);
    const ws: WorkSheet = utils.json_to_sheet(parsedJson);

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
