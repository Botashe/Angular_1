import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ComotanmuchachoComponent } from './componentes/comotanmuchacho/comotanmuchacho.component';

const routes: Routes = [
  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"contacto",
    component:ContactoComponent
  },
  {
    path:"nosotros",
    component:NosotrosComponent
  },
  {
    path:"Como",
    component:ComotanmuchachoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
