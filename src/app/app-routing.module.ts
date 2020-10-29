import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardComponent } from "./pages/card/card.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { DetailComponent } from "./pages/product-detail/detail.component";
import { CartComponent } from "./pages/cart/cart.component";
import { AuthGuard } from "./_guards/auth.guard";
import { OrderComponent } from "./pages/order/order.component";
import { OrderDetailComponent } from "./pages/order-detail/order-detail.component";
import { ProductListComponent } from "./pages/product-list/product.list.component";
import { UserDetailComponent } from "./pages/user-edit/user-detail.component";
import { ProductEditComponent } from "./pages/product-edit/product-edit.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { Role } from "./enum/Role";
import { SurveyComponent } from "./pages/survey/survey.component";
import { PortifolioComponent } from "./pages/portifolio/portifolio.component";
import { CypherHomeComponent } from "./pages/cypherHome/cypherHome.component";


import { VerificationComponent } from "./pages/seller-dashboard/verification/verification.component";
import { ActiveComponent } from "./pages/seller-dashboard/active/active.component";
import { HistoryComponent } from "./pages/seller-dashboard/history/history.component";
import { SneakersComponent } from "./pages/categories/sneakers/sneakers.component";
import { SellerDetailComponent } from "./pages/seller-info/seller-detail.component";
import { SettingsComponent } from "./pages/seller-dashboard/settings/settings.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: LandingPageComponent },
  { path: "cypherHome", component: CypherHomeComponent },
  { path: "sneakers", component: SneakersComponent },
  { path: "product/:id", component: DetailComponent },
  { path: "category/:id", component: CardComponent },
  { path: "product", component: CardComponent },
  { path: "category", component: CardComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LoginComponent },
  { path: "register", component: SignupComponent },
  { path: "cart", component: CartComponent },
  { path: "success", component: SignupComponent },
  { path: "survey", component: SurveyComponent },
  { path: "portifolio",
    component: PortifolioComponent,
    canActivate : [AuthGuard]
  },
  {
   path: "order/:id",
   component: OrderDetailComponent,
   canActivate: [AuthGuard],
  },
  { path: "order",
    component: OrderComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Seller] }
  },
  { path: "seller", redirectTo: "seller/product", pathMatch: "full" },
  {
    path: "seller/product",
    component: ProductListComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Seller] },
  },
  {
    path: "profile/buyer",
    component: UserDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "profile/seller",
    component: SellerDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "seller/product/:id/edit",
    component: ProductEditComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Seller] },
  },
  {
    path: "seller/product/:id/new",
    component: ProductEditComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Seller] },
  },

  { path: "verification",
    component: VerificationComponent,
    canActivate : [AuthGuard]
  },
  { path: "active",
    component: ActiveComponent,
    canActivate : [AuthGuard]
  },
  { path: "history",
    component: HistoryComponent,
    canActivate : [AuthGuard]
  },
 /* { path: "settings",
    component: SettingsComponent,
    canActivate : [AuthGuard]
  },*/

  { path:"**" ,
    redirectTo:  "/home"
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes), //{onSameUrlNavigation: 'reload'}
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
