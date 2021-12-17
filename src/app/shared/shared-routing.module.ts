import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../contact/pages/contact/contact.component';
import { HomePageComponent } from '../home/pages/home-page/home-page.component';
import { RegisterPageComponent } from '../register/pages/register-page/register-page.component';
import { FormGuard } from './components/guard/form.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    loadChildren: () => import('../home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'contato',
    component: ContactComponent,
    loadChildren: () => import('../contact/contact.module').then(module => module.ContactModule)
  },
  {
    path: 'cadastro',
    component: RegisterPageComponent,
    loadChildren: () => import('../register/register.module').then(module => module.RegisterModule),
    canDeactivate: [FormGuard]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
