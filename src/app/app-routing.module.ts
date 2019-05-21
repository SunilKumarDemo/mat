import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './core/default/default.component';
import { FormControlsComponent } from './core/form-controls/form-controls.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { LayoutComponent } from './core/layout/layout.component';
import { ButtonsIndicatorsComponent } from './core/buttons-indicators/buttons-indicators.component';
import { PopupsModalsComponent } from './core/popups-modals/popups-modals.component';
import { DataTableComponent } from './core/data-table/data-table.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent
  }, {
    path: 'form-controls',
    component: FormControlsComponent
  },
  {
    path: 'navigation',
    component: NavigationComponent

  },
  {
    path: 'layout',
    component: LayoutComponent
  },
  {
    path: 'buttons-indicators',
    component: ButtonsIndicatorsComponent
  },
  {
    path: 'popups-modals',
    component: PopupsModalsComponent
  },
  {
    path: 'table',
    component: DataTableComponent
  },
  {
    path: 'accounts',
    loadChildren: './accounts/accounts.module#AccountsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
