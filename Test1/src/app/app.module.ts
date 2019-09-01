import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';
import { TemplateFbItemComponent } from './_template/template-fb-item/template-fb-item.component';
import { TemplateSuchBoxComponent } from './_template/template-such-box/template-such-box.component';
import { FbSingleComponent } from './fb-single/fb-single.component';
import { FbListComponent } from './fb-list/fb-list.component';
import { TemplateFooterComponent } from './_template/template-footer/template-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateHeaderComponent,
    TemplateFbItemComponent,
    TemplateSuchBoxComponent,
    FbSingleComponent,
    FbListComponent,
    TemplateFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
