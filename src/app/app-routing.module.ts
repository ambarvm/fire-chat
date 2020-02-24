import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { FindworkspaceComponent } from './findworkspace/findworkspace.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
	{path: 'signin', component: SigninComponent },
	{path: 'find', component: FindworkspaceComponent },
	{path: 'signup', component: SignupComponent },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
