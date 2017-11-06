import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {RestaurantsComponent} from './restaurants/restaurants.component'
import {RestaurantDetailComponent} from './restaurants/restaurant-detail/restaurant-detail.component'
import {MenuComponent} from './restaurants/restaurant-detail/menu/menu.component'
import {OrderComponent} from './order/order.component'
import {OrderSummaryComponent} from './order-summary/order-summary.component'
import {ReviewComponent} from './restaurants/restaurant-detail/review/review.component'
import {NotFoundComponent} from './not-found/not-found.component'
import {LoginComponent} from './security/login/login.component'
import {LoggedInGuard} from './security/loggedin.guard'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login/:to', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'restaurant/:id', component: RestaurantDetailComponent, 
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'review', component: ReviewComponent}
    ]
  },
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'order', loadChildren: './order/order.module#OrderModule', canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},
  {path: 'orderSummary', component: OrderSummaryComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: '**', component: NotFoundComponent}
]
