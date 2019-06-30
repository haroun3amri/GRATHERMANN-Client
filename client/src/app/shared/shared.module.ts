import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {
  MatButtonToggleModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatExpansionModule,
  MatInputModule,
  MatMenuModule,
  MatRadioModule,
  MatSidenavModule, MatSnackBarModule
} from "@angular/material";
import {MatIconModule} from "@angular/material";
import {MatToolbarModule} from "@angular/material";
import {MatButtonModule} from "@angular/material";
import {MatTabsModule} from "@angular/material";
import { CategoryComponent } from '../category/category.component';
import {MatCardModule} from "@angular/material";
import {MatGridListModule} from "@angular/material";
import {MatStepperModule} from "@angular/material";
import {MatSelectModule} from "@angular/material";
import {MatListModule} from "@angular/material";
import {MatFormFieldModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {StatisticsComponent} from "../statistics/statistics.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


const appRoutes: Routes = [
  { path: 'statistics',   component: StatisticsComponent },
];


@NgModule({
  declarations: [MenuComponent,
    CategoryComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatStepperModule,
    MatSelectModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatSidenavModule,
    MatDialogModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSnackBarModule
  ],
  exports: [
    MenuComponent,
  ],
})
export class SharedModule { }
