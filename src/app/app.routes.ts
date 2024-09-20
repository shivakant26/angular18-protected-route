import { Routes } from '@angular/router';
import { LoginComponent } from '../component/login/login.component';
import { LayoutComponent } from '../component/layout/layout.component';
import { LogoutComponent } from '../component/logout/logout.component';
import { SettingsComponent } from '../component/settings/settings.component';
import { ProfileComponent } from '../component/profile/profile.component';
import { authGuard } from '../guard/auth.guard';

export const routes: Routes = [
    {
        path:"login",
        redirectTo:"login",
        pathMatch:"full"
    },
    {
        path:"login",
        component:LoginComponent,
    },
    {
        path:"",
        component:LayoutComponent,
        canActivate:[authGuard],
        children:[
            {
                path:"profile",
                component:ProfileComponent,
            },
            {
                path:"settings",
                component:SettingsComponent,
            },
            {
                path:"logout",
                component:LogoutComponent,
            },
        ]
    }
];
