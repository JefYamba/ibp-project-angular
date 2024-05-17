import {Component, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BookCardComponent} from "../../../shared/book-card/book-card.component";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ToastService, ToastType} from "../../../core/services/toast.service";
import {ToastComponent} from "../../../shared/toast/toast.component";
import {PageBookResponse} from "../../../core/openapi-services/models/page-book-response";
import {BookService} from "../../../core/openapi-services/services/book.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-manage-books',
  standalone: true,
    imports: [
        BookCardComponent,
        NgForOf,
        RouterLink,
        ToastComponent,
        NgIf,
        DatePipe,
        FormsModule
    ],
  templateUrl: './manage-books.component.html',
  styleUrl: './manage-books.component.css'
})
export class ManageBooksComponent implements OnInit{
    searchKeyWord: string = ""
    listType: 'LATEST'|'ALL' = 'ALL'
    booksPage!: PageBookResponse;

    constructor(private bookService: BookService) {}

    ngOnInit(): void {
        this.getBooks();
    }

    getBooks(){

        if (this.listType === "LATEST"){

            this.bookService.getAllLatestBooks({size:20})
                .subscribe({
                        next: bookPage => {
                            this.booksPage = bookPage;
                        }
                    }
                );
        } else {
            this.bookService.getAllBooks({searchKey: this.searchKeyWord,size:1000})
                .subscribe({
                        next: bookPage => {
                            this.booksPage = bookPage;
                        }
                    }
                );
        }
    }

    onKeyUp(event: KeyboardEvent): void {
        if (event.key === 'Enter') {
            this.getBooks();
        }
    }

    deleteBook(id: number | undefined) {
        if (id) {
            this.bookService.delete2({book_id : id})
                .subscribe({
                        next: response =>{
                            this.toastMessage = response.message
                            this.showToast(this.toastElement, ToastType.SUCCESS);
                            this.booksPage.content = this.booksPage.content?.filter(book => book.id !== id);
                        },
                        error: err => {
                            this.toastMessage = err.error.message
                            this.showToast(this.toastElement, ToastType.ERROR)
                        }
                    }
                )
        }
    }


    // Handle toast
    toastService = inject(ToastService);
    @ViewChild('ToastTpl') toastElement!: TemplateRef<any>;
    toastMessage: string | undefined = "";

    showToast(template: TemplateRef<any>, type: ToastType) {
        if (type === ToastType.SUCCESS){
            this.toastService.show({ template, classname: 'bg-success text-light' });

        } else if (type === ToastType.ERROR){
            this.toastService.show({ template, classname: 'bg-danger text-light' });
        } else {
            this.toastService.show({ template });
        }
    }
}
