import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { TrialSectionComponent } from './trial-section/trial-section.component';
import { TrialFormComponent } from './trial-form/trial-form.component';
import { TrialPricingComponent } from './trial-pricing/trial-pricing.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IntroSectionComponent,
    TrialSectionComponent,
    TrialFormComponent,
    TrialPricingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
