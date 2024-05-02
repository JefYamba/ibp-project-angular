import { Routes } from '@angular/router';
import {UserPanelComponent} from "./user-panel/user-panel.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./user-panel/home/home.component";
import {DashboardComponent} from "./admin-panel/dashboard/dashboard.component";

export const routes: Routes = [
    {
        path:"",
        component: UserPanelComponent,
        children:[
            {path:"", component: HomeComponent}
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
