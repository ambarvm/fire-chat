import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
	declarations: [AppComponent, NavBarComponent, ProfileComponent],
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
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
