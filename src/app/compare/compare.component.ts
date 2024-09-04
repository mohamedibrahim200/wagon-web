import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Comitem } from '../components/compare-itemelemnet/comperItems';
import { CompareItemelemnetComponent } from "../components/compare-itemelemnet/compare-itemelemnet.component";
@Component({
    selector: 'app-compare',
    standalone: true,
    templateUrl: './compare.component.html',
    styleUrl: './compare.component.css',
    imports: [CommonModule, NgIf, NgFor, CompareItemelemnetComponent]
})

export class CompareComponent {
  compariteItems:Comitem[] =JSON.parse('[{"Trim": "NESAN","CarPrice": "20000000","Transmission": "70000","EmbeddedRiders": "-","Lottary": "500","EngineCapacity_1": "10","EngineCapacity_2": "20"},{"Trim": "NESAN","CarPrice": "20000000","Transmission": "70000","EmbeddedRiders": "-","Lottary": "500","EngineCapacity_1": "10","EngineCapacity_2": "20"},{"Trim": "NESAN","CarPrice": "20000000","Transmission": "70000","EmbeddedRiders": "-","Lottary": "500","EngineCapacity_1": "10","EngineCapacity_2": "20"},{"Trim": "NESAN","CarPrice": "20000000","Transmission": "70000","EmbeddedRiders": "-","Lottary": "500","EngineCapacity_1": "10","EngineCapacity_2": "20"},{"Trim": "NESAN","CarPrice": "20000000","Transmission": "70000","EmbeddedRiders": "-","Lottary": "500","EngineCapacity_1": "10","EngineCapacity_2": "20"}]');
}
