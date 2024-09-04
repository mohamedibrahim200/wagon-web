import { Component } from '@angular/core';
import { AgencyComponent } from "../../../components/Items/agency/agency.component";
import { Agency } from '../../../components/Items/agency/agency';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-agency-page',
    standalone: true,
    templateUrl: './agency-page.component.html',
    styleUrl: './agency-page.component.css',
    imports: [AgencyComponent ,CommonModule, NgIf, NgFor ]
})
export class AgencyPageComponent {
   AgencyiteItems : Agency [] = JSON.parse('[{"id": "aaaaa","name":"BMW","nameen":"WWW","locationurl": "WW","locationname": "Hlwan","phonenumber": "01140748753","Address": "Hadyk-Helwan" , "imageurl":"https://i.pinimg.com/736x/e1/d0/e7/e1d0e7b12ea7d906d0016f718fb8585d.jpg"} , {"id": "aaaaa","name":"nesan","nameen":"WWW","locationurl": "WW","locationname": "Hlwan","phonenumber": "01140748753","Address": "Hadyk-Helwan" , "imageurl":"https://th.bing.com/th/id/OIP.UpR3aVnzfa4ehXzNErSrswHaE7?rs=1&pid=ImgDetMain"} , {"id": "aaaaa","name":"kia","nameen":"WWW","locationurl": "WW","locationname": "Hlwan","phonenumber": "01140748753","Address": "Hadyk-Helwan" , "imageurl":"https://th.bing.com/th/id/R.d6d68dd3644d8da608920aa3862d6332?rik=UEOYQXCCkiyn5g&pid=ImgRaw&r=0"}  , {"id": "aaaaa","name":"BMW","nameen":"WWW","locationurl": "WW","locationname": "Hlwan","phonenumber": "01140748753","Address": "Hadyk-Helwan"} , {"id": "aaaaa","name":"BMW","nameen":"WWW","locationurl": "WW","locationname": "Hlwan","phonenumber": "01140748753","Address": "Hadyk-Helwan"} ]');
}

