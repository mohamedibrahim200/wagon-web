import { Component } from '@angular/core';
import { DealerComponent } from "../../../components/Items/dealer/dealer.component";
import { Dealer } from '../../../components/Items/dealer/Dealer';

@Component({
    selector: 'app-dealer-page',
    standalone: true,
    templateUrl: './dealer-page.component.html',
    styleUrl: './dealer-page.component.css',
    imports: [DealerComponent]
})
export class DealerPageComponent {
    
    Dealeritems : Dealer [] = JSON.parse('[{"name": "mohamed","nameEn": "Kia","startTime": "10:00 AM","endTime": "10:00 PM","locationUrl": "sssssssss","locationName": "helwan","phoneNumber": "01000000000"}]');
}
