import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComLiveInValladolidComponent } from '../app/com-live-in-valladolid/com-live-in-valladolid.component';
import { ComMainPageComponent } from '../app/com-main-page/com-main-page.component';

const routes: Routes = [
  { path: '', component: ComMainPageComponent },
  { path: 'zycie-w-valladolid', component: ComLiveInValladolidComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
