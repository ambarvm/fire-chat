import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

// Routing
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { AppComponent } from "./app.component";

// Shubham Ataria's Navbar
import { NavBarComponent } from "./nav-bar/nav-bar.component";

import { ProfileComponent } from "./profile/profile.component";
import { MatExpansionModule } from "@angular/material/expansion";

// Chat related features

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { ChatFormComponent } from "./chat-form/chat-form.component";
import { ChatroomComponent } from "./chatroom/chatroom.component";
import { FeedComponent } from "./feed/feed.component";
import { MessageComponent } from "./message/message.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";

//  Chat UI navbar -> Utkarsh and Himani
// import { NavbarComponent } from "./navbar/navbar.component";

import { UserListComponent } from "./user-list/user-list.component";
import { UserItemComponent } from "./user-item/user-item.component";

import { ChatService } from "./services/chat.service";
import { AuthService } from "./services/auth.service";

import { appRoutes } from "../routes";
import { environment } from "../environments/environment";

// Alternative Emoji picker Components
//import { PickerModule } from '@ctrl/ngx-emoji-mart';
//import  {  NgxEmojiPickerModule  }  from  'ngx-emoji-picker';

@NgModule({
	declarations: [
		AppComponent,
		NavBarComponent,
		ProfileComponent,
		ChatFormComponent,
		ChatroomComponent,
		FeedComponent,
		MessageComponent,
		LoginFormComponent,
		SignupFormComponent,
		UserListComponent,
		UserItemComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatSidenavModule,
		FormsModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule,
		MatListModule,
		MatExpansionModule,
		// Chat
		RouterModule.forRoot(appRoutes),
		AngularFireModule,
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		AngularFireModule.initializeApp(environment.firebase),
		//PickerModule
		//NgxEmojiPickerModule.forRoot(),
	],
	providers: [AuthService, ChatService],
	bootstrap: [AppComponent],
})
export class AppModule {}
