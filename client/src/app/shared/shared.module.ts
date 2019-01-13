import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {MatInputModule, MatMenuModule} from "@angular/material";
import {MatIconModule} from "@angular/material";
import {MatToolbarModule} from "@angular/material";
import {MatButtonModule} from "@angular/material";
import { CommandTabsComponent } from './command-tabs/command-tabs.component';
import {MatTabsModule} from "@angular/material";
import { CategoryComponent } from './menu/tabsContent/category/category.component';
import { ProductComponent } from './menu/tabsContent/product/product.component';
import { DriverComponent } from './menu/tabsContent/driver/driver.component';
import { ChoiceComponent } from './menu/tabsContent/choice/choice.component';
import { PaiementComponent } from './menu/tabsContent/paiement/paiement.component';
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

const appRoutes: Routes = [
  { path: 'statistics',   component: StatisticsComponent },
  { path: 'command' , component: CommandTabsComponent }

];


@NgModule({
  declarations: [MenuComponent,
    CommandTabsComponent,
    CategoryComponent,
    ProductComponent,
    DriverComponent,
    ChoiceComponent,
    PaiementComponent,
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
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    MenuComponent,
  ]
})
export class SharedModule { }
