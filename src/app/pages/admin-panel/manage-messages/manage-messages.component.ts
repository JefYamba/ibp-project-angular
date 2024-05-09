import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-manage-messages',
  standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        NgOptimizedImage
    ],
  templateUrl: './manage-messages.component.html',
  styleUrl: './manage-messages.component.css'
})
export class ManageMessagesComponent {

}
