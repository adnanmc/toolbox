import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsonToExcelComponent } from './components/json-to-excel/json-to-excel.component';

const routes: Routes = [
  { path: '', component: JsonToExcelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
