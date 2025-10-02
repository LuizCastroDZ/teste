import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router' 
import { Home } from './pages/home/home';
import { Servicos } from './pages/servicos/servicos';
import { Equipe } from './pages/equipe/equipe';
import { Contato } from './pages/contato/contato';
import { Sobre } from './pages/sobre/sobre';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'servicos', component:Servicos},
    {path:'equipe', component:Equipe},
    {path:'contato', component:Contato},
    {path:'sobre', component:Sobre}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {  }