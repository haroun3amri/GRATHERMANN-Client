import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticationModule } from "./authentication/authentication.module";
import { SharedModule} from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MatButtonModule,
  MatDrawer,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatTableModule
} from "@angular/material";
import {MatDrawerContent} from "@angular/material";
import {MatDrawerContainer} from "@angular/material";
import {MatExpansionPanelTitle} from "@angular/material";
import {MatExpansionPanelHeader} from "@angular/material";
import {MatAccordion} from "@angular/material";
import {MatExpansionPanel} from "@angular/material";
import {MatExpansionPanelDescription} from "@angular/material";
import {PortalModule} from '@angular/cdk/portal'
import {MatBadge} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import {CommandTabsComponent} from "./shared/command-tabs/command-tabs.component";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StatisticsComponent } from './statistics/statistics.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


const appRoutes: Routes = [
  { path: '',   component: CommandTabsComponent },
  { path: 'statistics',   component: StatisticsComponent },
  { path: 'profile',   component: ProfileComponent },
  { path: 'login',   component: LoginComponent }



  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MatDrawer,
    MatDrawerContent,
    MatDrawerContainer,
    MatExpansionPanelTitle,
    MatExpansionPanelHeader,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelDescription,
    MatBadge,
    StatisticsComponent,
    ProfileComponent,
    LoginComponent

  ],

  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),

    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
