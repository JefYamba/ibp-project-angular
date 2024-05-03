import {Component, HostListener, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        NgOptimizedImage,
        NgForOf,
        NgClass,
        RouterLink
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
    isOnMobile!:boolean;


    ngOnInit(): void {
        this.isOnMobile = window.innerWidth  < 768;
    }




    @HostListener('window:resize', ['$event'])
    onResize(event: { target: { innerWidth: number; }; }) {
        this.isOnMobile = event.target.innerWidth < 768;
    }
}
