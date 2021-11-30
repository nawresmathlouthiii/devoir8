import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProduitGuard } from './produit.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: "produits", component : ProduitsComponent},
  {path: "add-produit", component : AddProduitComponent ,canActivate:[ProduitGuard]},
  {path: "updateProduit/:id", component: UpdateProduitComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  //{path: "add-produit", component: AddProduitComponent,canActivate:[ProduitGuard]},
  {path: "", redirectTo: "produits", pathMatch: "full" }
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
