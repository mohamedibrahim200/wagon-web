import { CommonModule } from '@angular/common';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { routes } from './app.routes';
import { FooterComponent } from './components/footer/footer.component';
import { ApplicationRef, NgModule } from '@angular/core';
import { FavoriteComponent } from './components/Items/favorite/favorite.component';
import { PagerComponent } from './components/Items/pager/pager.component';
import { SearchResultItemComponent } from './components/Items/search-result-item/search-result-item.component';
import { DealerComponent } from './components/Items/dealer/dealer.component';
import { PagesModule } from './app/pages.module';
import { ItemsModule } from './components/Items/items.module';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    FooterComponent,
    PagerComponent,
    ItemsModule,
    SearchResultItemComponent,   
    DealerComponent,
    PagesModule, 
    RouterOutlet,
    AppComponent,
    PageHeaderComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap:[]
})
export class AppModule {
  constructor(private appRef: ApplicationRef) {}

  ngDoBootstrap() {
    const componentRef = this.appRef.bootstrap(AppComponent); // Bootstrap your root component
  }

 }
platformBrowser().bootstrapModule(AppModule);