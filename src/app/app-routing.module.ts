import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavingGoalComponent } from 'src/app/presentation/saving-goal/saving-goal.component';


const routes: Routes = [
  { path: "", component: SavingGoalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
