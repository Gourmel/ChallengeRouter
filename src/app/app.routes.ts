import { Routes } from '@angular/router';

import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [

    {path: '', component: UserProfileComponent},
    
    {path: 'sign-up', component: SignUpComponent},
    {path: 'user-profile', component: UserProfileComponent}
];

export {routes};