import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { StockmanageComponent } from './stock/stockmanage/stockmanage.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    StockmanageComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
