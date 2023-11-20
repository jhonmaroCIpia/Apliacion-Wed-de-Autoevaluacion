import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { RouterLink } from '@angular/router';

import { AddEditUsuarioComponent } from './components/add-edit-usuario/add-edit-usuario.component';
import { InfoCoordinadorComponent } from './components/info-coordinador/info-coordinador.component';

const routes: Routes = [
  {path: '', component: InfoCoordinadorComponent},
  {path: 'add', component: AddEditUsuarioComponent},
  {path: 'edit/:id', component: AddEditUsuarioComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

//const routes2: RouterLink = [{path: '/add', component: AddEditUsuarioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
