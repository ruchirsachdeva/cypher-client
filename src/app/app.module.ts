import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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
import {OrderComponent} from './pages/order/order.component';
import {OrderDetailComponent} from './pages/order-detail/order-detail.component';
import {ProductListComponent} from './pages/product-list/product.list.component';
import {UserDetailComponent} from './pages/user-edit/user-detail.component';
import {ProductEditComponent} from './pages/product-edit/product-edit.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LandingPageMobileComponent } from './pages/landing-page-mobile/landing-page-mobile.component';
import { NbLayoutModule, NbThemeModule, NbMenuModule, NbSearchModule, NbCardModule, NbSidebarModule,
    NbActionsModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginModule } from './pages/login/login.module';
import { SignupModule } from './pages/signup/signup.module';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        CardComponent,
        PaginationComponent,
        DetailComponent,
        CartComponent,
        OrderComponent,
        OrderDetailComponent,
        ProductListComponent,
        UserDetailComponent,
        ProductEditComponent,
        LandingPageComponent,
        LandingPageMobileComponent,

    ],
    imports: [
        BrowserModule,
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
       
        LoginModule,
        SignupModule

    ],
    providers: [CookieService,
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
