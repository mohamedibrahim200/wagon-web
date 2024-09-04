import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarFilterComponent } from './car-filter/car-filter.component';
import { AgencyComponent } from './agency/agency.component';
import { CarAgencyComponent } from './car-agency/car-agency.component';
import { DealerComponent } from './dealer/dealer.component';
import { DealersMapComponent } from './dealers-map/dealers-map.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { PagerComponent } from './pager/pager.component';
import { SearchResultItemComponent } from './search-result-item/search-result-item.component';
import { SliderWithTapsComponent } from './slider-with-taps/slider-with-taps.component';
import { RouterModule } from '@angular/router';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { EmptyComponent } from './empty/empty.component';



@NgModule({
  
  declarations: [    
    FavoriteComponent,
    UploadImageComponent,
    EmptyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarFilterComponent,
    AgencyComponent,
    CarAgencyComponent,
    DealerComponent,
    DealersMapComponent,
    ItemDetailsComponent,
    PagerComponent,
    SearchResultItemComponent,
    SliderWithTapsComponent, 
    
  ],
  exports: [
    CarFilterComponent,
    AgencyComponent,
    CarAgencyComponent,
    DealerComponent,
    DealersMapComponent,
    FavoriteComponent,
    ItemDetailsComponent,
    PagerComponent,
    SearchResultItemComponent,
    SliderWithTapsComponent,
    UploadImageComponent,
    EmptyComponent
  ]
})
export class ItemsModule { }
