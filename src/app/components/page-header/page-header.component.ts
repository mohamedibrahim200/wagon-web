import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Category1Component } from '../../category1/category1.component';
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule]
})
export class PageHeaderComponent implements OnInit{
  currentDate: Date = new Date();
  user: any;
  ngOnInit(): void {
   try{ let data = sessionStorage.getItem("UserData")??"";
    this.user = data? JSON.parse(data): null;}catch (e) {}
  }

}
