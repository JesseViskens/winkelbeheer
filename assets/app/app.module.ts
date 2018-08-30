import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {HeaderComponent} from "./shared/header.component";
import {HttpModule} from "@angular/http";
import {routing} from "./app.routing";
import {OrdersComponent} from "./orders/orders.component";
import {HomeComponent} from "./home/home.component";
import {LeveranciersComponent} from "./leveranciers/leveranciers.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StockComponent} from "./stock/stock.component";
import {ModalModule} from "ngx-bootstrap";
import {StockService} from "./stock/stock.service";
import {PakketComponent} from "./pakketten/pakket.component";
import {NeworderComponent} from "./orders/neworder.component";
import {LeveranciersService} from "./leveranciers/leveranciers.service";
import {LeveranciersnieuwComponent} from "./leveranciers/leveranciersnieuw.component";
import {LeverancierslijstComponent} from "./leveranciers/leverancierslijst.component";
import {StocklijstComponent} from "./stock/stocklijst.component";
import {StocknieuwComponent} from "./stock/stocknieuw.component";
import {PakketnieuwComponent} from "./pakketten/pakketnieuw.component";
import {PakketlijstComponent} from "./pakketten/pakketlijst.component";
import {PakketService} from "./pakketten/pakket.service";
import {OrdersService} from "./orders/orders.service";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,

        OrdersComponent,
        NeworderComponent,
        //leverancier
        LeveranciersnieuwComponent,
        LeveranciersComponent,
        LeverancierslijstComponent,
        //stock
        StockComponent,
        StocklijstComponent,
        StocknieuwComponent,
        //pakketten
        PakketComponent,
        PakketnieuwComponent,
        PakketlijstComponent

    ],
    imports: [BrowserModule, HttpModule, routing, FormsModule, ReactiveFormsModule, ModalModule.forRoot()],
    bootstrap: [AppComponent],
    providers: [StockService,LeveranciersService, PakketService, OrdersService]
})
export class AppModule {

}