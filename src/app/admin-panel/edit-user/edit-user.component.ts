import {Component, OnInit} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";

enum ViewState{
    PROFILE,
    PASSWORD,
    SECURITY
}

@Component({
  selector: 'app-edit-user',
  standalone: true,
    imports: [
        NgClass,
        NgIf,
        NgOptimizedImage
    ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit{
    imageUrl: string = "";
    viewState!: ViewState;

    ngOnInit(): void {
        this.viewState = ViewState.PROFILE
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

    changeViewState(vState: ViewState):void{
        this.viewState = vState;
    }

    protected readonly ViewState = ViewState;
}
