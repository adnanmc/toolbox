import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonToExcelComponent } from './components/json-to-excel/json-to-excel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CodeEditorModule } from '@ngstack/code-editor';

@NgModule({
  declarations: [
    AppComponent,
    JsonToExcelComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CodeEditorModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
