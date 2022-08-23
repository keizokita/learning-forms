import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TemplateFormComponent } from './template-form.component';
 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    TemplateFormComponent,
  ],
  exports: [
    TemplateFormComponent
  ],
})
export class TemplateFormModule { }
