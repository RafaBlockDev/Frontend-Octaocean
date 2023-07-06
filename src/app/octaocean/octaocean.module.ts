import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SearchComponent } from './common/search/search.component';
import { ButtonCardComponent } from './common/button-card-table/button-card-table.component';
import { ButtonCardTableGroupComponent } from './common/button-card-table-group/button-card-table-group.component';
import { MarqueeComponent } from './common/marquee/marquee.component';
import { InfoSectionComponent } from './common/info-section/info-section.component';

import { HomeComponent } from './home/home.component';
import { ButtonCardInfoPictureComponent } from './common/button-card-info-picture/button-card-info-picture.component';
import { ButtonCardInfoPictureGroupComponent } from './common/button-card-info-picture-group/button-card-info-picture-group.component';
import { ButtonCardInfoComponent } from './common/button-card-info/button-card-info.component';
import { ButtonCardInfoGroupComponent } from './common/button-card-info-group/button-card-info-group.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ButtonCardComponent,
    HomeComponent,
    ButtonCardTableGroupComponent,
    MarqueeComponent,
    InfoSectionComponent,
    ButtonCardInfoPictureComponent,
    ButtonCardInfoPictureGroupComponent,
    ButtonCardInfoComponent,
    ButtonCardInfoGroupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class OctaoceanModule { }
