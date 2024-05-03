import { Routes } from '@angular/router';
import {UserPanelComponent} from "./user-panel/user-panel.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./user-panel/home/home.component";
import {DashboardComponent} from "./admin-panel/dashboard/dashboard.component";
import {BookListComponent} from "./user-panel/book-list/book-list.component";
import {BookViewComponent} from "./user-panel/book-view/book-view.component";

export const routes: Routes = [
    {
        path:"",
        component: UserPanelComponent,
        children:[
            {path:"", component: HomeComponent},
            {path:"books", component: BookListComponent},
            {path:"books/view", component: BookViewComponent},
        ]
    },
    {
        path:"admin",
        component: AdminPanelComponent,
        children:[
            {path:"", component: DashboardComponent},
        ]
    },
    {path:"login", component: LoginComponent},
];
