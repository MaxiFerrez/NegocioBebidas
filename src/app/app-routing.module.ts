import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoWebComponent } from './contenido-web/contenido-web.component';
import { FormInicialComponent } from './form-inicial/form-inicial.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [

  {path: '', component: FormInicialComponent},
  {path: 'home', component: FormInicialComponent},
  {path: 'contenido', component: ContenidoWebComponent},
  {path: 'admin', component: AdminComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
