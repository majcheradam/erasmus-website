import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComHeaderComponent } from './com-header/com-header.component';
import { ComHeroComponent } from './com-hero/com-hero.component';
import { ComHomeSectionComponent } from './com-home-section/com-home-section.component';
import { ComSubpageSectionComponent } from './com-subpage-section/com-subpage-section.component';
import { ComFooterComponent } from './com-footer/com-footer.component';
import { ComLiveInValladolidComponent } from './com-live-in-valladolid/com-live-in-valladolid.component';
import { ComMainPageComponent } from './com-main-page/com-main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ComHeaderComponent,
    ComHeroComponent,
    ComHomeSectionComponent,
    ComSubpageSectionComponent,
    ComFooterComponent,
    ComLiveInValladolidComponent,
    ComMainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
