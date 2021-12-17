import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputComponent } from './components/input/input.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { FirstLetterPipe } from './pipes/first-letter.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AbbreviatePipe } from './pipes/abbreviate.pipe';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    MasterPageComponent,
    CardComponent,
    NavbarComponent,
    InputComponent,
    NotFoundPageComponent,
    FormComponent,
    FirstLetterPipe,
    AbbreviatePipe,
    BarChartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule,
    HttpClientModule,
    NgChartsModule
    
  ],
  exports: [
    MasterPageComponent,
    CardComponent,
    InputComponent,
    FormComponent,
    BarChartComponent
    
  ],
  providers: [HttpClient]
})
export class SharedModule { }
