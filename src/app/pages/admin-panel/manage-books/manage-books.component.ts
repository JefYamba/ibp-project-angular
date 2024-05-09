import { Component } from '@angular/core';
import {BookCardComponent} from "../../../shared/book-card/book-card.component";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-manage-books',
  standalone: true,
    imports: [
        BookCardComponent,
        NgForOf,
        RouterLink
    ],
  templateUrl: './manage-books.component.html',
  styleUrl: './manage-books.component.css'
})
export class ManageBooksComponent {

}
