import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { ProductsComponent } from './pages/products';
import { AboutComponent } from './pages/about';
import { ContactComponent } from './pages/contact';
import { PlaceholderComponent } from './pages/placeholder';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PlaceholderComponent }
];
