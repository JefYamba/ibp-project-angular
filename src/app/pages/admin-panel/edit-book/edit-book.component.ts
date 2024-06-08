import {Component, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {PageMode} from "../edit-user/edit-user.component";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {BookService} from "../../../core/openapi-services/services/book.service";
import {BookRequest} from "../../../core/openapi-services/models/book-request";
import {ToastService, ToastType} from "../../../core/services/toast.service";
import {FormsModule} from "@angular/forms";
import {ToastComponent} from "../../../shared/toast/toast.component";

@Component({
  selector: 'app-edit-book',
  standalone: true,
    imports: [
        NgIf,
        NgOptimizedImage,
        RouterLink,
        FormsModule,
        NgForOf,
        ToastComponent
    ],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent implements OnInit{

    pageMode!: PageMode;
    bookRequest!: BookRequest;
    bookImageLink: string | undefined;
    bookImageFile: Blob | undefined;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private bookService: BookService
    ) {}

    ngOnInit(): void {

        const idParam = this.activatedRoute.snapshot.paramMap.get('id');
        let bookId = idParam ? parseInt(idParam, 10) : null;

        if (bookId) {
            this.pageMode = "UPDATE";
            this.bookService.get2({book_id:bookId})
                .subscribe({
                next: bookResponse => {
                    this.bookImageLink = bookResponse.image;

                    this.bookRequest = {
                        id : bookResponse.id,
                        title : bookResponse.title ? bookResponse.title : "",
                        author : bookResponse.author ? bookResponse.author : "",
                        publisher: bookResponse.publisher,
                        publicationDate: bookResponse.publicationDate,
                        isbn: bookResponse.isbn,
                        genre: bookResponse.genre ? bookResponse.genre : "",
                        summary: bookResponse.summary
                    };
                },
                error: error => {
                    console.log(error);
                }
            })

        } else {
            this.pageMode = "ADD"
            this.bookRequest = {id: 0, title:"", author:"", publisher:"", publicationDate:"", isbn:"",genre:"" }
        }

    }


    selectImage(event: any) {
        this.toastMessage.length = 0;

        if (event.target.files) {
            this.bookImageFile = event.target.files[0];
            if (this.bookImageFile){
                const reader = new FileReader();
                reader.onload = (e: any) => {
                    this.bookImageLink = e.target.result;
                }
                reader.readAsDataURL(this.bookImageFile)
            }

        }

        if (this.pageMode === "UPDATE" ){
            if (this.bookImageFile && this.bookRequest.id){
                this.bookService.setImageCover({
                    book_id: this.bookRequest.id,
                    body: { image: this.bookImageFile }
                })
                    .subscribe({
                        next: response => {
                            this.toastMessage.push(response.message? response.message:"")
                            this.showToast(this.toastElement, ToastType.SUCCESS);
                        },
                        error: () => {
                            this.toastMessage.push("couldn't save the image");
                            this.showToast(this.toastElement, ToastType.ERROR);
                        }
                    })
            }
        }
    }

    saveBook() {
        this.toastMessage.length = 0;
        if (this.pageMode === "ADD"){
            this.bookService.register2({body: this.bookRequest})
                .subscribe({
                    next: bookResponse => {
                        if (this.bookImageFile && bookResponse.id){
                            this.bookService.setImageCover({
                                book_id: bookResponse.id,
                                body: { image: this.bookImageFile }
                            })
                                .subscribe({
                                    next: () => {
                                        this.toastMessage.push("Book saved successfully");
                                        this.showToast(this.toastElement, ToastType.SUCCESS);
                                        this.router.navigate(["admin/books"]).then(() => window.location.reload());
                                    }
                                })
                        } else {
                            this.toastMessage.push("Book saved successfully");
                            this.showToast(this.toastElement, ToastType.SUCCESS);
                            this.router.navigate(["admin/books"]).then(() => window.location.reload());
                        }
                    },
                    error: err => {
                        console.log(err)
                        if (err.error.formErrors){
                            this.toastMessage = err.error.formErrors;
                        } else {
                            this.toastMessage.push(err.error.error);
                        }
                        this.showToast(this.toastElement, ToastType.ERROR);
                    }
                })


        } else {
            this.bookService.update2({body: this.bookRequest})
                .subscribe({
                    next: () =>{
                        this.toastMessage.push("Book updated successfully");
                        this.showToast(this.toastElement, ToastType.SUCCESS);
                        this.router.navigate(["admin/books"]).then(() => window.location.reload());
                    },
                    error: err => {
                        if (err.error.formErrors){
                            this.toastMessage = err.error.formErrors;
                        } else {
                            this.toastMessage.push("Book already exist")
                        }
                        this.showToast(this.toastElement, ToastType.ERROR);
                        this.router.navigate(["admin/books"]).then(() => window.location.reload());
                    }
                })
        }
    }


    // Handle toast
    toastService = inject(ToastService);
    @ViewChild('ToastTpl') toastElement!: TemplateRef<any>;
    toastMessage: string[] = [];

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
