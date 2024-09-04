import { RouterModule, Routes } from '@angular/router';
import { PagerComponent } from './components/Items/pager/pager.component';
import { AgencyPageComponent } from './app/pages/agency-page/agency-page.component';
import { DealerPageComponent } from './app/pages/dealer-page/dealer-page.component';
import { ItemDetailsComponent } from './components/Items/item-details/item-details.component';
import { HomePageComponent } from './app/pages/home-page/home-page.component';
import { SearchResultPageComponent } from './app/pages/search-result-page/search-result-page.component';
import { AboutUSComponent } from './app/pages/about-us/about-us.component';
import { SellCarPageComponent } from './app/pages/sell-car-page/sell-car-page.component';
import { LoginComponent } from './app/pages/User/login/login.component';
import { RegisterationComponent } from './app/pages/User/registeration/registeration.component';
import { FavouritePageComponent } from './favourite-page/favourite-page.component';
import { CompareComponent } from './compare/compare.component';


export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'Home', component: HomePageComponent },
    { path: 'Agency', component: AgencyPageComponent },
    { path: 'Dealer', component: DealerPageComponent },
    { path: 'Favorite', component: FavouritePageComponent },
    { path: 'Pager', component: PagerComponent },//to be removed
    { path: 'SearchResultItem', component: SearchResultPageComponent },
    { path: 'CarDetails', component: ItemDetailsComponent },
    { path: 'AboutUS', component: AboutUSComponent},
    { path: 'SellCar', component: SellCarPageComponent},
    { path: 'login/:screen', component: LoginComponent},
    { path: 'login', component: LoginComponent},
    { path: 'Registeration', component: RegisterationComponent},
    { path: 'copmare', component: CompareComponent},
   
];