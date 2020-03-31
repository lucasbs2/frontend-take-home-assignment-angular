import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxCurrencyModule } from 'ngx-currency';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SavingGoalComponent } from './presentation/saving-goal/saving-goal.component';
import { BuyAHouseComponent } from './presentation/buy-a-house/buy-a-house.component';
import { DepositResultComponent } from './presentation/deposit-result/deposit-result.component';
import { StoreModule } from '@ngrx/store';
import { goalReducer } from 'src/app/presentation/state/goal.reducer';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { GoalEffect } from 'src/app/presentation/state/goal.effect';


@NgModule({
  declarations: [
    AppComponent,
    SavingGoalComponent,
    BuyAHouseComponent,
    DepositResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxCurrencyModule,
    EffectsModule.forRoot([GoalEffect]),
    StoreModule.forRoot({ goal: goalReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
