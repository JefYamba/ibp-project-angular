import {Component, HostListener} from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {NgbPagination, NgbPaginationPages} from "@ng-bootstrap/ng-bootstrap";

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-book-list',
  standalone: true,
    imports: [
        NgForOf,
        NgOptimizedImage,
        RouterLink,
        NgClass,
        NgbPagination,
        NgbPaginationPages
    ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

    page = 4;


    selectPage(page: string) {
        this.page = parseInt(page, 10) || 1;
    }

    formatInput(input: HTMLInputElement) {
        input.value = input.value.replace(FILTER_PAG_REGEX, '');
    }

    isOnMobile:boolean= false;

    @HostListener('window:resize', ['$event'])
    onResize(event: { target: { innerWidth: number; }; }) {
        this.isOnMobile = event.target.innerWidth < 768;
    }
}
