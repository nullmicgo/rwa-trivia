import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }     from '@angular/forms';
import { HttpClientModule }     from '@angular/common/http';
import { CdkTableModule }     from '@angular/cdk/table';

import { SharedMaterialModule } from './shared-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { QuestionComponent, QuestionsComponent, QuestionsTableComponent } from './components';

@NgModule({
  declarations: [
    QuestionComponent,
    QuestionsComponent,
    QuestionsTableComponent
  ],
  imports: [
    CommonModule,

    //http client
    HttpClientModule,

    // Forms
    ReactiveFormsModule, 

    //cdk
    CdkTableModule,

    //Material
    SharedMaterialModule,

    //Flex
    FlexLayoutModule

  ],
  providers: [ 
  ],                                                                      
  exports:  [ QuestionComponent, QuestionsComponent, QuestionsTableComponent,
              CommonModule, HttpClientModule, ReactiveFormsModule,
              FlexLayoutModule, 
              SharedMaterialModule, CdkTableModule ]
})
export class SharedModule { }
