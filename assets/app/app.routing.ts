import {RouterModule, Routes} from "@angular/router";
import {OrdersComponent} from "./orders/orders.component";
import {HomeComponent} from "./home/home.component";
import {LeveranciersComponent} from "./leveranciers/leveranciers.component";
import {StockComponent} from "./stock/stock.component";
import {PakketComponent} from "./pakketten/pakket.component";
import {NeworderComponent} from "./orders/neworder.component";
import {LeveranciersnieuwComponent} from "./leveranciers/leveranciersnieuw.component";
import {LeverancierslijstComponent} from "./leveranciers/leverancierslijst.component";
import {StocknieuwComponent} from "./stock/stocknieuw.component";
import {StocklijstComponent} from "./stock/stocklijst.component";
import {PakketlijstComponent} from "./pakketten/pakketlijst.component";
import {PakketnieuwComponent} from "./pakketten/pakketnieuw.component";
import {Pakket} from "./pakketten/pakket.model";



const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent },
    {path: 'leveranciers', component: LeveranciersComponent,
        children:[
            {path:'nieuw', component: LeveranciersnieuwComponent},
            {path:'lijst', component:LeverancierslijstComponent},
            {path:'', component:LeverancierslijstComponent}
            ]
    },
    {path: 'stock', component: StockComponent,
        children:[{path:'nieuw', component: StocknieuwComponent},
            {path:'lijst', component: StocklijstComponent},
            {path:'', component:StocklijstComponent}
        ] },
    {path: 'pakket', component: PakketComponent,
        children:[
            {path:'nieuw', component: PakketnieuwComponent},
            {path:'lijst', component: PakketlijstComponent},
            {path:'', component: PakketlijstComponent},
        ]
    },
    {path: 'orders', component: OrdersComponent},
    {path: 'neworder', component: NeworderComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);