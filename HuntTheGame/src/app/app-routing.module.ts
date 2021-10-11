import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './views/contact/contact.component'; 
import { FormComponent } from './views/form/form.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { SearchComponent } from './views/search/search.component';

const routes: Routes = [
  {
    path: 'contacto',
    component: ContactComponent,
    
  },
  {
    path: 'formulario',
    component: FormComponent,
    
  },
  {
    path: 'busqueda',
    component: SearchComponent,
    
  },
  {
    path: 'sesion',
    component: LoginComponent,
    
  },
  {
    path: '',
    component: HomeComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}