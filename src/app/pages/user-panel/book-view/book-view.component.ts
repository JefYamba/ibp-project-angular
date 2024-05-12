import {Component, OnInit} from '@angular/core';
import {DatePipe, NgIf, NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {BookService} from "../../../core/openapi-services/services/book.service";
import {BookResponse} from "../../../core/openapi-services/models/book-response";

@Component({
  selector: 'app-book-view',
  standalone: true,
    imports: [
        NgOptimizedImage,
        NgIf,
        RouterLink,
        DatePipe
    ],
  templateUrl: './book-view.component.html',
  styleUrl: './book-view.component.css'
})
export class BookViewComponent implements OnInit{
    book! : BookResponse;

    constructor(
        private route: ActivatedRoute,
        private bookService: BookService
    ) { }

    ngOnInit(): void {
        const idParam = this.route.snapshot.paramMap.get('id');
        let bookId = idParam ? parseInt(idParam, 10) : null;
        if (bookId){
            this.bookService.get2({book_id: (bookId as unknown as number)}).subscribe({
                next: data => {
                    this.book = data;
                },
                error: error => {
                    console.log(error);
                }
            })
        }
    }
}
