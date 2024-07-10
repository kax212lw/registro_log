import { Routes } from '@angular/router';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path: 'admin-table',
        component: AdminTableComponent,
        title: 'Admin Table'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register'
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];