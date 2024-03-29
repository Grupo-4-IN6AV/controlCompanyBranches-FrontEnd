import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardCompaniesComponent } from './components/companies/dashboard-companies/dashboard-companies.component';
import { BodyCompaniesComponent } from './components/companies/body-companies/body-companies.component';
import { SetComponentsComponent } from './components/companies/set-components/set-components.component';
import { Error404Component } from './components/error404/error404.component';
import { BodyAdminComponent } from './components/admin/body-admin/body-admin.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { SetComponentsAdminComponent } from './components/admin/set-components-admin/set-components-admin.component';
import { CompaniesComponent } from './components/admin/companies/companies.component';
import { SearchCompanyPipe } from './pipes/companyPipe/search-company.pipe';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { TownshipsComponent } from './components/admin/townships/townships.component';
import { SearchTownshipPipe } from './pipes/townshipPipe/search-township.pipe';
import { TypeCompanyComponent } from './components/admin/type-company/type-company.component';
import { SearchTypeCompanyPipe } from './pipes/typeCompanyPipe/search-type-company.pipe';
import { ProductsComponent } from './components/admin/products/products.component';
import { SearchProductPipe } from './pipes/productPipe/search-product.pipe';
import { HomeCompanyComponent } from './components/companies/home-company/home-company.component';
import { ProductsCompanyComponent } from './components/companies/products-company/products-company.component';
import { BranchesCompanyComponent } from './components/companies/branches-company/branches-company.component';
import { SearchBranchPipe } from './pipes/branchPipe/search-branch.pipe';
import { ProfileCompanyComponent } from './components/companies/profile-company/profile-company.component';
import { NgChartsModule } from 'ng2-charts';
import { BranchesAdminComponent } from './components/admin/branches-admin/branches-admin.component';
import { SearchBrachAdminPipe } from './pipes/branchAdmin/search-branch-admin.pipe';
import { SalesProductsCompanyComponent } from './components/companies/sales-products-company/sales-products-company.component';
import { SalesProductComponent } from './components/companies/sales-product/sales-product.component';
import { ProductBranchPipePipe } from './pipes/productBranchPipe/product-branch-pipe.pipe';
import { SalesProductsAdminComponent } from './components/admin/sales-products-admin/sales-products-admin.component';
import { SearchProductTablePipe } from './pipes/searchProductTable/search-product-table.pipe';
import { SearchProductNamePipe } from './pipes/searchProductName/search-product-name.pipe';
import { SaleProductBranchAdminComponent } from './components/admin/sale-product-branch-admin/sale-product-branch-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    RegisterComponent,
    DashboardCompaniesComponent,
    BodyCompaniesComponent,
    SetComponentsComponent,
    Error404Component,
    BodyAdminComponent,
    DashboardAdminComponent,
    SetComponentsAdminComponent,
    CompaniesComponent,
    SearchCompanyPipe,
    HomeAdminComponent,
    TownshipsComponent,
    SearchTownshipPipe,
    TypeCompanyComponent,
    SearchTypeCompanyPipe,
    ProductsComponent,
    SearchProductPipe,
    HomeCompanyComponent,
    ProductsCompanyComponent,
    BranchesCompanyComponent,
    SearchBranchPipe,
    ProfileCompanyComponent,
    BranchesAdminComponent,
    SearchBrachAdminPipe,
    SalesProductsCompanyComponent,
    SalesProductComponent,
    ProductBranchPipePipe,
    SalesProductsAdminComponent,
    SearchProductTablePipe,
    SearchProductNamePipe,
    SaleProductBranchAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }