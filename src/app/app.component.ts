import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageHeaderComponent } from "./components/page-header/page-header.component";
import { FooterComponent } from './components/footer/footer.component';
import { TransmissionsComponent } from "./components/Items/car-filter/Transmissions/transmissions/transmissions.component";
import { ItemsModule } from "./components/Items/items.module";



@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FooterComponent, PageHeaderComponent,
        TransmissionsComponent, ItemsModule]
})

export class AppComponent implements OnInit {
  
  title = 'Wagon.web';
  constructor(private renderer: Renderer2, private el: ElementRef){
  }
  
  ngOnInit() {
    
  }
}
  
