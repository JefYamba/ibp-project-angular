import {Component, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-edit-book',
  standalone: true,
    imports: [
        NgIf,
        NgOptimizedImage
    ],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent implements OnInit{
    imageUrl: string = "";

    ngOnInit(): void {
        this.imageUrl = "assets/images/default.png"
    }


    selectImage(event: any) {
        if (event.target.files) {
            const file: Blob = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = (e: any) => {
                this.imageUrl = e.target.result;
            }
        }
    }
}
