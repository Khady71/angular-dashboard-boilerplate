import {Routes, RouterModule} from '@angular/router';
import { SignIn } from './pages/sign-in/sign-in';
import { SignUp } from './pages/sign-up/sign-up';
import { NgModule } from '@angular/core';

const authRoutes : Routes = [
    {path:'signin', component:SignIn},
    {path:'signup', component:SignUp}
]

@NgModule({
    imports:[RouterModule.forChild(authRoutes)],
    exports:[RouterModule]
})
export class AuthRoutingModule{}