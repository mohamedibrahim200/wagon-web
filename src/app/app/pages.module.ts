import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../components/page-header/page-header.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from '../app.routes';
import { ItemsModule } from '../components/Items/items.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellCarPageComponent } from './pages/sell-car-page/sell-car-page.component';
import { CarInformationComponent } from './pages/sell-car-page/car-information/car-information.component';
import { SelectNewsPaperPageComponent } from './pages/sell-car-page/select-news-paper-page/select-news-paper-page.component';
import { NewsPaperLocationComponent } from './pages/sell-car-page/news-paper-location/news-paper-location.component';
import { ConfirmaionPageComponent } from './pages/sell-car-page/confirmaion-page/confirmaion-page.component';
import { PaymentPageComponent } from './pages/sell-car-page/payment-page/payment-page.component';
import { DealerPageComponent } from './pages/dealer-page/dealer-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/User/login/login.component';
import { RegisterationComponent } from './pages/User/registeration/registeration.component';



@NgModule({
  declarations: [
    SellCarPageComponent,
    CarInformationComponent,
    SelectNewsPaperPageComponent,
    NewsPaperLocationComponent,
    ConfirmaionPageComponent,
    FavoritesPageComponent,
    PaymentPageComponent,
    RegisterationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DealerPageComponent,
    RouterModule.forRoot(routes),
    HomePageComponent, 
    ItemsModule,
    RouterOutlet
  ]
})
export class PagesModule { }
