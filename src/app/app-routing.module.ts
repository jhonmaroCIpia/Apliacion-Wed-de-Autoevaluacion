import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemAddComponent } from './item-add/item-add.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemRemoveComponent } from './item-remove/item-remove.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items/add', component: ItemAddComponent },
  { path: 'items/edit/:id', component: ItemEditComponent },
  { path: 'items/remove/:id', component: ItemRemoveComponent },
  { path: 'items/detalle/:eva_id', component: ItemListComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/items' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
