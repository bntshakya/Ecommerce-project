import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { authGuard } from './guards/auth.guard';
import { CartComponent } from './cart/cart.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  {
    path: 'homepage/:id',
    component: DetailsComponent,
  },
  { path: 'signin', component: SigninComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent, },
  {path:'about',component:AboutComponent},
  {path:'**',component:WildcardComponent}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
