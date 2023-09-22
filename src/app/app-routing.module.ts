import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatTableComponent } from './mat-table/mat-table.component';

const routes: Routes = [
  { path: "", redirectTo: 'mat-table', pathMatch: "full" },
  { path: "mat-table", component: MatTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
