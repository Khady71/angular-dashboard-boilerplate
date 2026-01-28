import { Routes } from '@angular/router';
import { SignUp } from './auth/pages/sign-up/sign-up';
import { SignIn } from './auth/pages/sign-in/sign-in';

export const routes: Routes = [
    {
        path:'auth',
        loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
    },
    {
        path:'', 
        component: SignUp,

    }
    
    
];
