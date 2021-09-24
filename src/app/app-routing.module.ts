import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ProductoComponent } from './producto/producto/producto.component';
import { LoginComponent } from './login/login/login.component';
import { CategoriaComponent } from './categoria/categoria/categoria.component';
import { PagenotfoundComponent} from './compartida/pagenotfound/pagenotfound.component';

// REferencias a los componentes 
const app_routes : Routes = [
    { path:'' , component: ProductoComponent  },
    { path:'login' , component: LoginComponent },
    { path:'categoria' , component: CategoriaComponent },
    { path: '**', component: PagenotfoundComponent },
];

// Decorador: No olvidar importarlo
@NgModule({
    imports:[RouterModule.forRoot(app_routes)],
    exports:[RouterModule]

   
})
export class AppRoutingModule {}