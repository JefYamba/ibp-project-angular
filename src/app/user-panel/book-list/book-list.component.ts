import {Component} from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {NgbPagination, NgbPaginationPages} from "@ng-bootstrap/ng-bootstrap";
import {BookCardComponent} from "../../shared/book-card/book-card.component";
@Component({
  selector: 'app-book-list',
  standalone: true,
    imports: [
        NgForOf,
        NgOptimizedImage,
        RouterLink,
        NgClass,
        NgbPagination,
        NgbPaginationPages,
        BookCardComponent
    ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

}
