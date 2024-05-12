import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {PageUserResponse} from "../../../core/openapi-services/models/page-user-response";
import {UserService} from "../../../core/openapi-services/services/user.service";

@Component({
  selector: 'app-manage-users',
  standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        NgOptimizedImage,
        NgIf,
        NgClass
    ],
    providers:[
        HttpClient
    ],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.css'
})
export class ManageUsersComponent {

    usersPage!: PageUserResponse;
    private ObservableInput: any;

    constructor(private userService: UserService, private http: HttpClient) {}

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers(){
        this.userService.getAllUsers({size:200})
            .subscribe({
                next: userPage => {
                    console.log(userPage)
                    this.usersPage = userPage;
                }
            }
        );
    }


    deleteUser(id: number | undefined) {
        if (id) {
            this.userService.delete$Response({user_id : id})
                .subscribe({
                    next: response =>{
                        alert({...response})
                        console.log({...response})
                        this.getUsers();
                        //this.usersPage.content = this.usersPage.content?.filter(user => user.id !== id);
                    },
                    error: err => {
                        console.log(err.error.text);
                        this.getUsers();
                    }
                }
            )
        }
    }
}
