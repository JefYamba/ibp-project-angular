import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-book-view',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './book-view.component.html',
  styleUrl: './book-view.component.css'
})
export class BookViewComponent implements OnInit{
    imageUrl: string = "";

    ngOnInit(): void {
        this.imageUrl = "assets/images/default.png"
    }
}
