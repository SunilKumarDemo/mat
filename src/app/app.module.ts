import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCoreModule } from './core/mat-core/mat-core.module';
import { DefaultComponent } from './core/default/default.component';
import { FormControlsComponent } from './core/form-controls/form-controls.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { LayoutComponent } from './core/layout/layout.component';
import { ButtonsIndicatorsComponent } from './core/buttons-indicators/buttons-indicators.component';
import { PopupsModalsComponent, PopupContent, DialogOverviewExampleDialog } from './core/popups-modals/popups-modals.component';
import { DataTableComponent } from './core/data-table/data-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    FormControlsComponent,
    NavigationComponent,
    LayoutComponent,
    ButtonsIndicatorsComponent,
    PopupsModalsComponent,
    DataTableComponent,
    PopupContent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  entryComponents:[PopupContent,DialogOverviewExampleDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
