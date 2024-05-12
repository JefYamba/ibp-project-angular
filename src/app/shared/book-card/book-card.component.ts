import {Component, Input} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {BookResponse} from "../../core/openapi-services/models/book-response";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-book-card',
  standalone: true,
    imports: [
        NgOptimizedImage,
        RouterLink,
        NgIf
    ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
    @Input() book!: BookResponse;
    constructor(private httpClient: HttpClient) {
    }

}
