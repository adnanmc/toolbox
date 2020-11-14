import { Component, OnInit } from '@angular/core';
import * as jsonexport from 'jsonexport/dist';
import { saveAs } from 'file-saver';

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

  downloadCSVFile(): void {
    /* generate worksheet */
    let tempData = this.jsonText;
    if (!tempData.startsWith('[') && !tempData.endsWith(']')) {
      tempData = `[${tempData}]`;
    }
    // console.log(tempData);

    jsonexport(JSON.parse(tempData), (err, csv) => {
      if (err) console.error(err);
      if (err) {
        console.error(err);
      } else {
        var blob = new Blob([csv], { type: 'text/csv' });
        if (this.fileName) {
          saveAs(blob, `${this.fileName}.csv`);
        } else {
          saveAs(blob, `fileName.csv`);
        }
      }
    });
  }
}
