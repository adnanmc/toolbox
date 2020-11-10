import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-json-to-excel',
  templateUrl: './json-to-excel.component.html',
  styleUrls: ['./json-to-excel.component.scss'],
})
export class JsonToExcelComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  jsonText: any;

  fileName: string = 'fileName';

  editorOptions = {
    theme: 'vs-dark',
    language: 'json',
    wordWrap: 'on',
    padding: {
      top: 10,
    },
  };

  async paste() {
    this.jsonText = await navigator.clipboard.readText();
  }
  resetJaonInput() {
    this.jsonText = null;
  }
  downloadXlFile(): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(
      JSON.parse(this.jsonText)
    );

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, `${this.fileName}.xlsx`);
  }
}
