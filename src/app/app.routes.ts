import { Routes } from '@angular/router';
import {UserPanelComponent} from "./user-panel/user-panel.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./user-panel/home/home.component";
import {DashboardComponent} from "./admin-panel/dashboard/dashboard.component";
import {BookListComponent} from "./user-panel/book-list/book-list.component";
import {BookViewComponent} from "./user-panel/book-view/book-view.component";
import {AnnouncementListComponent} from "./user-panel/announcement-list/announcement-list.component";
import {ManageUsersComponent} from "./admin-panel/manage-users/manage-users.component";
import {ManageBooksComponent} from "./admin-panel/manage-books/manage-books.component";
import {ManageAnnouncementsComponent} from "./admin-panel/manage-announcements/manage-announcements.component";
import {ManageMessagesComponent} from "./admin-panel/manage-messages/manage-messages.component";
import {UserMessagesComponent} from "./user-panel/user-messages/user-messages.component";
import {EditUserComponent} from "./admin-panel/edit-user/edit-user.component";
import {EditMessageComponent} from "./admin-panel/edit-message/edit-message.component";
import {EditBookComponent} from "./admin-panel/edit-book/edit-book.component";
import {EditAnnouncementComponent} from "./admin-panel/edit-announcement/edit-announcement.component";

export const routes: Routes = [
    {
        path:"",
        component: UserPanelComponent,
        children:[
            {path:"", component: HomeComponent},
            {path:"books", component: BookListComponent},
            {path:"book/view", component: BookViewComponent}, // view book details
            {path:"announcements", component: AnnouncementListComponent},
            {path:"profile", component: EditUserComponent}, // current user's profile
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
            {path:"message", component: EditMessageComponent}, // for user To send a message to all the admins; receiver is not required
            {path:"message/:receiver", component: EditMessageComponent}, // for admin To send a message to a user; receiver is required
            {path:"book", component: EditBookComponent},// create
            {path:"book/:id", component: EditBookComponent},// update
            {path:"announcement", component: EditAnnouncementComponent},// create
            {path:"announcement/:id", component: EditAnnouncementComponent},// update
        ]
    },
    {path:"login", component: LoginComponent},
];
