import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwitterMainComponent } from './twitter-main/twitter-main.component';

const routes: Routes = [
  { path: '', component: TwitterMainComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
