import {Component, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {DatePipe, NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {UserService} from "../../../core/openapi-services/services/user.service";
import {FormsModule} from "@angular/forms";
import {UserRequest} from "../../../core/openapi-services/models/user-request";
import {ToastComponent} from "../../../shared/toast/toast.component";
import {ToastService, ToastType} from "../../../core/services/toast.service";

enum ViewState{
    PROFILE,
    PASSWORD,
    SECURITY
}
type PageMode = 'ADD' | 'UPDATE';

@Component({
  selector: 'app-edit-user',
  standalone: true,
    imports: [
        NgClass,
        NgIf,
        NgOptimizedImage,
        FormsModule,
        DatePipe,
        RouterLink,
        ToastComponent,
        NgForOf
    ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit{
    protected readonly ViewState = ViewState;
    viewState!: ViewState;
    pageMode!: PageMode;
    userRequest!: UserRequest;
    userImageLink: string | undefined;
    userImageFile: Blob | undefined;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private userService: UserService,
    ) { }


    ngOnInit(): void {
        this.viewState = ViewState.PROFILE


        const idParam = this.activatedRoute.snapshot.paramMap.get('id');
        let userId = idParam ? parseInt(idParam, 10) : null;

        if (userId) {
            this.pageMode = "UPDATE";
            this.userService.get({user_id: userId}).subscribe({
                next: userResponse => {
                    this.userImageLink = userResponse.image;

                    this.userRequest = {
                        id : userResponse.id,
                        email: userResponse.email ? userResponse.email : "",
                        lastName: userResponse.lastName? userResponse.lastName : "",
                        firstName: userResponse.firstName ? userResponse.firstName : "",
                        gender: userResponse.gender,
                        birthDate: userResponse.birthDate,
                        phoneNumber: userResponse.phoneNumber,
                        address: userResponse.address,
                    }
                },
                error: error => {
                    console.log(error);
                }
            })

        } else {
            this.pageMode = "ADD"
            this.userRequest = {email:"",firstName:"",lastName:""}
        }
    }


    selectImage(event: any) {
        if (event.target.files) {
            this.userImageFile = event.target.files[0];
            if (this.userImageFile) {
                const reader = new FileReader();
                reader.onload = (e: any) => {
                    this.userImageLink = e.target.result;
                }
                reader.readAsDataURL(this.userImageFile)
            }
        }
    }

    changeViewState(vState: ViewState):void{
        this.viewState = vState;
    }



    saveUser() {
        this.userService.register({body: this.userRequest})
        .subscribe({
            next: userResponse => {
                if (this.pageMode === "ADD" && this.userImageFile && userResponse.id){
                    this.userService.setImageProfile$Jpeg$Response({
                        user_id: userResponse.id,
                        body: { image: this.userImageFile }
                    })
                        .subscribe({
                            next: () => {
                                this.toastMessage.push("User registered successfully")
                                this.showToast(this.toastElement, ToastType.SUCCESS);
                            },
                            error: err => {
                                if (err.error.formErrors){
                                    for (const error of err.error.formErrors) {
                                        this.toastMessage.push(error)
                                    }
                                } else {
                                    this.toastMessage.push(err.error.error)
                                }
                                this.showToast(this.toastElement, ToastType.ERROR);
                            }
                        })
                } else {
                    this.toastMessage.push("User updated successfully")
                    this.showToast(this.toastElement, ToastType.SUCCESS);
                }
                // this.router.navigate(["admin/users"]).then(() => window.location.reload());
            },
            error: err => {
                if (err.error.formErrors){
                    for (const error of err.error.formErrors) {
                        this.toastMessage.push(error)
                    }
                } else {
                    this.toastMessage.push(err.error.error)
                }
                this.showToast(this.toastElement, ToastType.ERROR);
            }
        })
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
