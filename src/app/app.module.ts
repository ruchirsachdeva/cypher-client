import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {AppComponent} from './app.component';
import {NavigationComponent} from './parts/navigation/navigation.component';
import {CardComponent} from './pages/card/card.component';
import {PaginationComponent} from './parts/pagination/pagination.component';
import {AppRoutingModule} from './app-routing.module';
import {DetailComponent} from './pages/product-detail/detail.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CartComponent} from './pages/cart/cart.component';
import {CookieService} from "ngx-cookie-service";
import {ErrorInterceptor} from "./_interceptors/error-interceptor.service";
import {JwtInterceptor} from "./_interceptors/jwt-interceptor.service";
import {OrderDetailComponent} from './pages/order-detail/order-detail.component';
import {ProductListComponent} from './pages/product-list/product.list.component';
import {ProductEditComponent} from './pages/product-edit/product-edit.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LandingPageMobileComponent } from './pages/landing-page-mobile/landing-page-mobile.component';
import { NbLayoutModule, NbThemeModule, NbMenuModule, NbSearchModule, NbCardModule, NbSidebarModule,
    NbActionsModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginModule } from './pages/login/login.module';
import { SignupModule } from './pages/signup/signup.module';
import { UserDetailModule } from './pages/user-edit/user-detail.module';
import { PortifolioModule } from './pages/portifolio/portifolio.module';

import { RouterModule } from '@angular/router';
import { OrderModule } from './pages/order/order.module';
import { CypherHomeComponent } from './pages/cypherHome/cypherHome.component';
import { SellerDetailModule } from './pages/seller-info/seller-detail.module';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { CypherHomeMobileComponent } from './pages/cypherHome-mobile/cypherHome-mobile.component';
import { HeaderComponent } from './parts/header/header.component';
import { SidenavComponent } from './parts/sidenav/sidenav.component';
import {MatListModule } from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { CategoriesModule } from './pages/categories/categories.module';
import { SellerDashboardModule } from './pages/seller-dashboard/seller-dashboard.module';


@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        CardComponent,
        PaginationComponent,
        DetailComponent,
        CartComponent,
        OrderDetailComponent,
        ProductListComponent,
        ProductEditComponent,
        LandingPageComponent,
        LandingPageMobileComponent,

        CypherHomeComponent,
        WishlistComponent,
        CypherHomeMobileComponent,
        HeaderComponent,
        SidenavComponent

    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NbLayoutModule,
        NbInputModule,
        NbSearchModule,
        NbCardModule,
        NbActionsModule,
        NbEvaIconsModule,
        NbIconModule,
        NbThemeModule.forRoot({ name: 'default' }),
        NbMenuModule.forRoot(),
        NbSidebarModule.forRoot(),
        RouterModule,
        LoginModule,
        OrderModule,
        SignupModule,
        UserDetailModule,
        PortifolioModule,
        SellerDetailModule,
        CategoriesModule,
        SellerDashboardModule,
        MatListModule,
        MatSidenavModule,
        MatIconModule

    ],
    providers: [CookieService,
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
