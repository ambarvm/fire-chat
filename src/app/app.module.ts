import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FindworkspaceComponent } from './findworkspace/findworkspace.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
	declarations: [AppComponent, SignupComponent, FindworkspaceComponent, SigninComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatCardModule, MatInputModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatButtonModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
