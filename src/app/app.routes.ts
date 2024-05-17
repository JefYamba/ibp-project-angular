import { Routes } from '@angular/router';
import {UserPanelComponent} from "./pages/user-panel/user-panel.component";
import {HomeComponent} from "./pages/user-panel/home/home.component";
import {BookListComponent} from "./pages/user-panel/book-list/book-list.component";
import {BookViewComponent} from "./pages/user-panel/book-view/book-view.component";
import {AnnouncementListComponent} from "./pages/user-panel/announcement-list/announcement-list.component";
import {EditUserComponent} from "./pages/admin-panel/edit-user/edit-user.component";
import {EditMessageComponent} from "./pages/admin-panel/edit-message/edit-message.component";
import {UserMessagesComponent} from "./pages/user-panel/user-messages/user-messages.component";
import {AdminPanelComponent} from "./pages/admin-panel/admin-panel.component";
import {DashboardComponent} from "./pages/admin-panel/dashboard/dashboard.component";
import {ManageUsersComponent} from "./pages/admin-panel/manage-users/manage-users.component";
import {ManageBooksComponent} from "./pages/admin-panel/manage-books/manage-books.component";
import {ManageAnnouncementsComponent} from "./pages/admin-panel/manage-announcements/manage-announcements.component";
import {ManageMessagesComponent} from "./pages/admin-panel/manage-messages/manage-messages.component";
import {EditBookComponent} from "./pages/admin-panel/edit-book/edit-book.component";
import {EditAnnouncementComponent} from "./pages/admin-panel/edit-announcement/edit-announcement.component";
import {LoginComponent} from "./pages/login/login.component";


export const routes: Routes = [
    {
        path:"",
        component: UserPanelComponent,
        children:[
            {path:"", redirectTo: "home", pathMatch: "full"},
            {path:"home", component: HomeComponent},
            {path:"books", component: BookListComponent},
            {path:"book/view/:id", component: BookViewComponent}, // view book details
            {path:"announcements", component: AnnouncementListComponent},
            {path:"profile/:id", component: EditUserComponent}, // current user's profile
            {path:"message", component: EditMessageComponent}, // current user's profile
            {path:"user/messages", component: UserMessagesComponent},
        ]
    },
    {
        path:"admin",
        component: AdminPanelComponent,
        children:[
            {path:"", component: DashboardComponent},
            {path:"users", component: ManageUsersComponent},// manage users
            {path:"books", component: ManageBooksComponent},// manage books
            {path:"announcements", component: ManageAnnouncementsComponent}, // manage announcements
            {path:"messages", component: ManageMessagesComponent}, // manage messages sent to admins
            {path:"user", component: EditUserComponent}, // create
            {path:"user/:id", component: EditUserComponent}, // update
            //{path:"message", component: EditMessageComponent}, // for user To send a message to all the admins; receiver is not required
            {path:"message/:receiver", component: EditMessageComponent}, // for admin To send a message to a user; receiver is required
            {path:"book", component: EditBookComponent},// create
            {path:"book/:id", component: EditBookComponent},// update
            {path:"announcement", component: EditAnnouncementComponent},// create
            {path:"announcement/:id", component: EditAnnouncementComponent},// update
        ]
    },
    {path:"login", component: LoginComponent},
    {path:"**", redirectTo: "login", pathMatch: "full"},
];
