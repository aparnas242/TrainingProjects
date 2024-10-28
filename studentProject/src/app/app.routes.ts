import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { DetailsComponent } from './components/details/details.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:'list',component:ListComponent},
    {path:'addnew',component:AddNewComponent},
    {path:'details',component:DetailsComponent},
    {path:'update',component:UpdateComponent},
    {path:'delete',component:DeleteComponent},
    {path:'home',component:HomeComponent},
    {path:'',redirectTo:'home',pathMatch:'full'}
];
