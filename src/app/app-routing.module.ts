import { ComPeopleComponent } from './com-people/com-people.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComLiveInValladolidComponent } from '../app/com-live-in-valladolid/com-live-in-valladolid.component';
import { ComMainPageComponent } from '../app/com-main-page/com-main-page.component';
// import { ComPeopleComponent } from './com-people/
// ';

const routes: Routes = [
  { path: '', component: ComMainPageComponent },
  { path: 'zycie-w-valladolid', component: ComLiveInValladolidComponent },
  { path: 'praktyka-zawodowa', component: ComLiveInValladolidComponent },
  { path: 'wycieczki', component: ComLiveInValladolidComponent },
  { path: 'uczestnicy', component: ComLiveInValladolidComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
