import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule} from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule, MatTableModule, MatToolbarModule
} from "@angular/material";
import {PortalModule} from '@angular/cdk/portal'
import {MatBadge} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StatisticsComponent } from './statistics/statistics.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginDialogComponent } from './login/login-dialog/login-dialog.component';
import { ProposComponent } from './propos/propos.component';
import {CategoryComponent} from "./category/category.component";
import { AdminComponent } from './admin/admin.component';
import { TraderComponent } from './trader/trader.component';
import { AddComponent } from './trader/dialogs/add/add.component';
import { EditComponent } from './trader/dialogs/edit/edit.component';
import { DetailsComponent } from './trader/dialogs/details/details.component';


const appRoutes: Routes = [
  { path: '',   component: CategoryComponent },
  { path: 'statistics',   component: StatisticsComponent },
  { path: 'profile',   component: ProfileComponent },
  { path: 'login',   component: LoginComponent },
  { path: 'propos',   component: ProposComponent },
  { path: 'trader',   component: TraderComponent },






  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MatBadge,
    StatisticsComponent,
    ProfileComponent,
    LoginComponent,
    LoginDialogComponent,
    ProposComponent,
    AdminComponent,
    TraderComponent,
    AddComponent,
    EditComponent,
    DetailsComponent,
  ],

  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),

    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    PortalModule,
    NgxChartsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginDialogComponent, AddComponent, EditComponent, DetailsComponent
  ],

})
export class AppModule { }
