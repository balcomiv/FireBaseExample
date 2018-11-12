import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { AuthGuard } from '../../core/auth/auth.guard';
import { SideNavComponent } from './main-layout/side-nav/side-nav.component';
import { LoginComponent } from './login-layout/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../third-party/material/material.module';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: SideNavComponent }
    ] },
  { path: '', component: LoginLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MainLayoutComponent,
    SideNavComponent,
    LoginLayoutComponent,
    LoginComponent,
  ],
  exports: [
    MainLayoutComponent,
    LoginLayoutComponent
  ]
})
export class LayoutModule { }
