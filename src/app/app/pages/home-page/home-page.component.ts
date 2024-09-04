import { Component } from '@angular/core';
import { SliderWithTapsComponent } from "../../../components/Items/slider-with-taps/slider-with-taps.component";
import { CarAgencyComponent } from "../../../components/Items/car-agency/car-agency.component";
import { RouterModule } from '@angular/router';
import { CarFilterComponent } from "../../../components/Items/car-filter/car-filter.component";
import { DealersMapComponent } from "../../../components/Items/dealers-map/dealers-map.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [SliderWithTapsComponent, CarAgencyComponent, RouterModule, CarFilterComponent, DealersMapComponent]
})
export class HomePageComponent {

}
