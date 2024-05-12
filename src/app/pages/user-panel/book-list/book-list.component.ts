import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {NgbPagination, NgbPaginationPages} from "@ng-bootstrap/ng-bootstrap";
import {BookCardComponent} from "../../../shared/book-card/book-card.component";
import {BookResponse} from "../../../core/openapi-services/models/book-response";
import {BookService} from "../../../core/openapi-services/services/book.service";
import {PageBookResponse} from "../../../core/openapi-services/models/page-book-response";
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
        BookCardComponent,
        NgIf
    ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit{

    booksPage!: PageBookResponse;

    constructor(private bookService: BookService) {}

    ngOnInit(): void {
        this.bookService.getAllBooks({size:200}).subscribe((bookPage: PageBookResponse) => {
                this.booksPage = bookPage;
            }
        )
    }
}
