/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './app.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/router';
import * as import4 from '@angular/platform-browser';
import * as import5 from '@angular/http';
import * as import6 from '@angular/forms';
import * as import7 from 'ngx-bootstrap/modal/modal.module';
import * as import8 from 'ngx-bootstrap/positioning/positioning.service';
import * as import9 from 'ngx-bootstrap/component-loader/component-loader.factory';
import * as import10 from 'ngx-bootstrap/modal/bs-modal.service';
import * as import11 from './stock/stock.service';
import * as import12 from './leveranciers/leveranciers.service';
import * as import13 from './pakketten/pakket.service';
import * as import14 from './orders/orders.service';
import * as import15 from '../../node_modules/ngx-bootstrap/modal/modal-backdrop.component.ngfactory';
import * as import16 from '../../node_modules/ngx-bootstrap/modal/modal-container.component.ngfactory';
import * as import17 from './home/home.component.ngfactory';
import * as import18 from './leveranciers/leveranciers.component.ngfactory';
import * as import19 from './leveranciers/leveranciersnieuw.component.ngfactory';
import * as import20 from './leveranciers/leverancierslijst.component.ngfactory';
import * as import21 from './stock/stock.component.ngfactory';
import * as import22 from './stock/stocknieuw.component.ngfactory';
import * as import23 from './stock/stocklijst.component.ngfactory';
import * as import24 from './pakketten/pakket.component.ngfactory';
import * as import25 from './pakketten/pakketnieuw.component.ngfactory';
import * as import26 from './pakketten/pakketlijst.component.ngfactory';
import * as import27 from './orders/orders.component.ngfactory';
import * as import28 from './orders/neworder.component.ngfactory';
import * as import29 from './app.component.ngfactory';
import * as import30 from './home/home.component';
import * as import31 from './leveranciers/leveranciers.component';
import * as import32 from './leveranciers/leveranciersnieuw.component';
import * as import33 from './leveranciers/leverancierslijst.component';
import * as import34 from './stock/stock.component';
import * as import35 from './stock/stocknieuw.component';
import * as import36 from './stock/stocklijst.component';
import * as import37 from './pakketten/pakket.component';
import * as import38 from './pakketten/pakketnieuw.component';
import * as import39 from './pakketten/pakketlijst.component';
import * as import40 from './orders/orders.component';
import * as import41 from './orders/neworder.component';
class AppModuleInjector extends import0.ɵNgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ErrorHandler_1:any;
  _NgProbeToken_2:any[];
  _ɵg_3:import3.ɵg;
  _APP_INITIALIZER_4:any[];
  _ApplicationInitStatus_5:import0.ApplicationInitStatus;
  _ɵf_6:import0.ɵf;
  _ApplicationRef_7:any;
  _ApplicationModule_8:import0.ApplicationModule;
  _BrowserModule_9:import4.BrowserModule;
  _HttpModule_10:import5.HttpModule;
  _ɵa_11:any;
  _UrlSerializer_12:import3.DefaultUrlSerializer;
  _RouterOutletMap_13:import3.RouterOutletMap;
  _ROUTER_CONFIGURATION_14:any;
  _LocationStrategy_15:any;
  _Location_16:import2.Location;
  _Compiler_17:import0.Compiler;
  _NgModuleFactoryLoader_18:import0.SystemJsNgModuleLoader;
  _ROUTES_19:any[];
  _Router_20:any;
  _RouterModule_21:import3.RouterModule;
  _ɵba_22:import6.ɵba;
  _FormsModule_23:import6.FormsModule;
  _ReactiveFormsModule_24:import6.ReactiveFormsModule;
  _ModalModule_25:import7.ModalModule;
  _AppModule_26:import1.AppModule;
  __LOCALE_ID_27:any;
  __NgLocalization_28:import2.NgLocaleLocalization;
  __APP_ID_29:any;
  __IterableDiffers_30:any;
  __KeyValueDiffers_31:any;
  __DomSanitizer_32:import4.ɵe;
  __Sanitizer_33:any;
  __HAMMER_GESTURE_CONFIG_34:import4.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_35:any[];
  __EventManager_36:import4.EventManager;
  __ɵDomSharedStylesHost_37:import4.ɵDomSharedStylesHost;
  __ɵDomRendererFactory2_38:import4.ɵDomRendererFactory2;
  __RendererFactory2_39:any;
  __ɵSharedStylesHost_40:any;
  __Testability_41:import0.Testability;
  __Meta_42:import4.Meta;
  __Title_43:import4.Title;
  __BrowserXhr_44:import5.BrowserXhr;
  __ResponseOptions_45:import5.BaseResponseOptions;
  __XSRFStrategy_46:any;
  __XHRBackend_47:import5.XHRBackend;
  __RequestOptions_48:import5.BaseRequestOptions;
  __Http_49:any;
  __ɵi_50:import6.ɵi;
  __FormBuilder_51:import6.FormBuilder;
  __ActivatedRoute_52:any;
  __NoPreloading_53:import3.NoPreloading;
  __PreloadingStrategy_54:any;
  __RouterPreloader_55:import3.RouterPreloader;
  __PreloadAllModules_56:import3.PreloadAllModules;
  __ROUTER_INITIALIZER_57:any;
  __APP_BOOTSTRAP_LISTENER_58:any[];
  __PositioningService_59:import8.PositioningService;
  __ComponentLoaderFactory_60:import9.ComponentLoaderFactory;
  __BsModalService_61:import10.BsModalService;
  __StockService_62:import11.StockService;
  __LeveranciersService_63:import12.LeveranciersService;
  __PakketService_64:import13.PakketService;
  __OrdersService_65:import14.OrdersService;
  constructor(parent:import0.Injector) {
    super(parent,[
      import15.ModalBackdropComponentNgFactory,
      import16.ModalContainerComponentNgFactory,
      import17.HomeComponentNgFactory,
      import18.LeveranciersComponentNgFactory,
      import19.LeveranciersnieuwComponentNgFactory,
      import20.LeverancierslijstComponentNgFactory,
      import21.StockComponentNgFactory,
      import22.StocknieuwComponentNgFactory,
      import23.StocklijstComponentNgFactory,
      import24.PakketComponentNgFactory,
      import25.PakketnieuwComponentNgFactory,
      import26.PakketlijstComponentNgFactory,
      import27.OrdersComponentNgFactory,
      import28.NeworderComponentNgFactory,
      import29.AppComponentNgFactory
    ]
    ,[import29.AppComponentNgFactory]);
  }
  get _LOCALE_ID_27():any {
    if ((this.__LOCALE_ID_27 == null)) { (this.__LOCALE_ID_27 = import0.ɵn(this.parent.get(import0.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_27;
  }
  get _NgLocalization_28():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_28 == null)) { (this.__NgLocalization_28 = new import2.NgLocaleLocalization(this._LOCALE_ID_27)); }
    return this.__NgLocalization_28;
  }
  get _APP_ID_29():any {
    if ((this.__APP_ID_29 == null)) { (this.__APP_ID_29 = import0.ɵg()); }
    return this.__APP_ID_29;
  }
  get _IterableDiffers_30():any {
    if ((this.__IterableDiffers_30 == null)) { (this.__IterableDiffers_30 = import0.ɵl()); }
    return this.__IterableDiffers_30;
  }
  get _KeyValueDiffers_31():any {
    if ((this.__KeyValueDiffers_31 == null)) { (this.__KeyValueDiffers_31 = import0.ɵm()); }
    return this.__KeyValueDiffers_31;
  }
  get _DomSanitizer_32():import4.ɵe {
    if ((this.__DomSanitizer_32 == null)) { (this.__DomSanitizer_32 = new import4.ɵe(this.parent.get(import4.DOCUMENT))); }
    return this.__DomSanitizer_32;
  }
  get _Sanitizer_33():any {
    if ((this.__Sanitizer_33 == null)) { (this.__Sanitizer_33 = this._DomSanitizer_32); }
    return this.__Sanitizer_33;
  }
  get _HAMMER_GESTURE_CONFIG_34():import4.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_34 == null)) { (this.__HAMMER_GESTURE_CONFIG_34 = new import4.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_34;
  }
  get _EVENT_MANAGER_PLUGINS_35():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_35 == null)) { (this.__EVENT_MANAGER_PLUGINS_35 = [
      new import4.ɵDomEventsPlugin(this.parent.get(import4.DOCUMENT)),
      new import4.ɵKeyEventsPlugin(this.parent.get(import4.DOCUMENT)),
      new import4.ɵHammerGesturesPlugin(this.parent.get(import4.DOCUMENT),this._HAMMER_GESTURE_CONFIG_34)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_35;
  }
  get _EventManager_36():import4.EventManager {
    if ((this.__EventManager_36 == null)) { (this.__EventManager_36 = new import4.EventManager(this._EVENT_MANAGER_PLUGINS_35,this.parent.get(import0.NgZone))); }
    return this.__EventManager_36;
  }
  get _ɵDomSharedStylesHost_37():import4.ɵDomSharedStylesHost {
    if ((this.__ɵDomSharedStylesHost_37 == null)) { (this.__ɵDomSharedStylesHost_37 = new import4.ɵDomSharedStylesHost(this.parent.get(import4.DOCUMENT))); }
    return this.__ɵDomSharedStylesHost_37;
  }
  get _ɵDomRendererFactory2_38():import4.ɵDomRendererFactory2 {
    if ((this.__ɵDomRendererFactory2_38 == null)) { (this.__ɵDomRendererFactory2_38 = new import4.ɵDomRendererFactory2(this._EventManager_36,this._ɵDomSharedStylesHost_37)); }
    return this.__ɵDomRendererFactory2_38;
  }
  get _RendererFactory2_39():any {
    if ((this.__RendererFactory2_39 == null)) { (this.__RendererFactory2_39 = this._ɵDomRendererFactory2_38); }
    return this.__RendererFactory2_39;
  }
  get _ɵSharedStylesHost_40():any {
    if ((this.__ɵSharedStylesHost_40 == null)) { (this.__ɵSharedStylesHost_40 = this._ɵDomSharedStylesHost_37); }
    return this.__ɵSharedStylesHost_40;
  }
  get _Testability_41():import0.Testability {
    if ((this.__Testability_41 == null)) { (this.__Testability_41 = new import0.Testability(this.parent.get(import0.NgZone))); }
    return this.__Testability_41;
  }
  get _Meta_42():import4.Meta {
    if ((this.__Meta_42 == null)) { (this.__Meta_42 = new import4.Meta(this.parent.get(import4.DOCUMENT))); }
    return this.__Meta_42;
  }
  get _Title_43():import4.Title {
    if ((this.__Title_43 == null)) { (this.__Title_43 = new import4.Title(this.parent.get(import4.DOCUMENT))); }
    return this.__Title_43;
  }
  get _BrowserXhr_44():import5.BrowserXhr {
    if ((this.__BrowserXhr_44 == null)) { (this.__BrowserXhr_44 = new import5.BrowserXhr()); }
    return this.__BrowserXhr_44;
  }
  get _ResponseOptions_45():import5.BaseResponseOptions {
    if ((this.__ResponseOptions_45 == null)) { (this.__ResponseOptions_45 = new import5.BaseResponseOptions()); }
    return this.__ResponseOptions_45;
  }
  get _XSRFStrategy_46():any {
    if ((this.__XSRFStrategy_46 == null)) { (this.__XSRFStrategy_46 = import5.ɵb()); }
    return this.__XSRFStrategy_46;
  }
  get _XHRBackend_47():import5.XHRBackend {
    if ((this.__XHRBackend_47 == null)) { (this.__XHRBackend_47 = new import5.XHRBackend(this._BrowserXhr_44,this._ResponseOptions_45,this._XSRFStrategy_46)); }
    return this.__XHRBackend_47;
  }
  get _RequestOptions_48():import5.BaseRequestOptions {
    if ((this.__RequestOptions_48 == null)) { (this.__RequestOptions_48 = new import5.BaseRequestOptions()); }
    return this.__RequestOptions_48;
  }
  get _Http_49():any {
    if ((this.__Http_49 == null)) { (this.__Http_49 = import5.ɵc(this._XHRBackend_47,this._RequestOptions_48)); }
    return this.__Http_49;
  }
  get _ɵi_50():import6.ɵi {
    if ((this.__ɵi_50 == null)) { (this.__ɵi_50 = new import6.ɵi()); }
    return this.__ɵi_50;
  }
  get _FormBuilder_51():import6.FormBuilder {
    if ((this.__FormBuilder_51 == null)) { (this.__FormBuilder_51 = new import6.FormBuilder()); }
    return this.__FormBuilder_51;
  }
  get _ActivatedRoute_52():any {
    if ((this.__ActivatedRoute_52 == null)) { (this.__ActivatedRoute_52 = import3.ɵf(this._Router_20)); }
    return this.__ActivatedRoute_52;
  }
  get _NoPreloading_53():import3.NoPreloading {
    if ((this.__NoPreloading_53 == null)) { (this.__NoPreloading_53 = new import3.NoPreloading()); }
    return this.__NoPreloading_53;
  }
  get _PreloadingStrategy_54():any {
    if ((this.__PreloadingStrategy_54 == null)) { (this.__PreloadingStrategy_54 = this._NoPreloading_53); }
    return this.__PreloadingStrategy_54;
  }
  get _RouterPreloader_55():import3.RouterPreloader {
    if ((this.__RouterPreloader_55 == null)) { (this.__RouterPreloader_55 = new import3.RouterPreloader(this._Router_20,this._NgModuleFactoryLoader_18,this._Compiler_17,this,this._PreloadingStrategy_54)); }
    return this.__RouterPreloader_55;
  }
  get _PreloadAllModules_56():import3.PreloadAllModules {
    if ((this.__PreloadAllModules_56 == null)) { (this.__PreloadAllModules_56 = new import3.PreloadAllModules()); }
    return this.__PreloadAllModules_56;
  }
  get _ROUTER_INITIALIZER_57():any {
    if ((this.__ROUTER_INITIALIZER_57 == null)) { (this.__ROUTER_INITIALIZER_57 = import3.ɵi(this._ɵg_3)); }
    return this.__ROUTER_INITIALIZER_57;
  }
  get _APP_BOOTSTRAP_LISTENER_58():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_58 == null)) { (this.__APP_BOOTSTRAP_LISTENER_58 = [this._ROUTER_INITIALIZER_57]); }
    return this.__APP_BOOTSTRAP_LISTENER_58;
  }
  get _PositioningService_59():import8.PositioningService {
    if ((this.__PositioningService_59 == null)) { (this.__PositioningService_59 = new import8.PositioningService()); }
    return this.__PositioningService_59;
  }
  get _ComponentLoaderFactory_60():import9.ComponentLoaderFactory {
    if ((this.__ComponentLoaderFactory_60 == null)) { (this.__ComponentLoaderFactory_60 = new import9.ComponentLoaderFactory(this.componentFactoryResolver,this.parent.get(import0.NgZone),this,this._PositioningService_59,this._ApplicationRef_7)); }
    return this.__ComponentLoaderFactory_60;
  }
  get _BsModalService_61():import10.BsModalService {
    if ((this.__BsModalService_61 == null)) { (this.__BsModalService_61 = new import10.BsModalService(this._RendererFactory2_39,this._ComponentLoaderFactory_60)); }
    return this.__BsModalService_61;
  }
  get _StockService_62():import11.StockService {
    if ((this.__StockService_62 == null)) { (this.__StockService_62 = new import11.StockService(this._Http_49)); }
    return this.__StockService_62;
  }
  get _LeveranciersService_63():import12.LeveranciersService {
    if ((this.__LeveranciersService_63 == null)) { (this.__LeveranciersService_63 = new import12.LeveranciersService(this._Http_49)); }
    return this.__LeveranciersService_63;
  }
  get _PakketService_64():import13.PakketService {
    if ((this.__PakketService_64 == null)) { (this.__PakketService_64 = new import13.PakketService(this._Http_49)); }
    return this.__PakketService_64;
  }
  get _OrdersService_65():import14.OrdersService {
    if ((this.__OrdersService_65 == null)) { (this.__OrdersService_65 = new import14.OrdersService(this._Http_49)); }
    return this.__OrdersService_65;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ErrorHandler_1 = import4.ɵa();
    this._NgProbeToken_2 = [import3.ɵb()];
    this._ɵg_3 = new import3.ɵg(this);
    this._APP_INITIALIZER_4 = [
      import0.ɵo,
      import4.ɵc(this.parent.get(import4.NgProbeToken,(null as any)),this._NgProbeToken_2),
      import3.ɵh(this._ɵg_3)
    ]
    ;
    this._ApplicationInitStatus_5 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_4);
    this._ɵf_6 = new import0.ɵf(this.parent.get(import0.NgZone),this.parent.get(import0.ɵConsole),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_5);
    this._ApplicationRef_7 = this._ɵf_6;
    this._ApplicationModule_8 = new import0.ApplicationModule(this._ApplicationRef_7);
    this._BrowserModule_9 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._HttpModule_10 = new import5.HttpModule();
    this._ɵa_11 = import3.ɵd(this.parent.get(import3.Router,(null as any)));
    this._UrlSerializer_12 = new import3.DefaultUrlSerializer();
    this._RouterOutletMap_13 = new import3.RouterOutletMap();
    this._ROUTER_CONFIGURATION_14 = {};
    this._LocationStrategy_15 = import3.ɵc(this.parent.get(import2.PlatformLocation),this.parent.get(import2.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_14);
    this._Location_16 = new import2.Location(this._LocationStrategy_15);
    this._Compiler_17 = new import0.Compiler();
    this._NgModuleFactoryLoader_18 = new import0.SystemJsNgModuleLoader(this._Compiler_17,this.parent.get(import0.SystemJsNgModuleLoaderConfig,(null as any)));
      this._ROUTES_19 = [[
        {
          path: '',
          component: import30.HomeComponent
        }
        ,
        {
          path: 'home',
          component: import30.HomeComponent
        }
        ,
        {
          path: 'leveranciers',
          component: import31.LeveranciersComponent,
          children: [
            {
              path: 'nieuw',
              component: import32.LeveranciersnieuwComponent
            }
            ,
            {
              path: 'lijst',
              component: import33.LeverancierslijstComponent
            }
            ,
            {
              path: '',
              component: import33.LeverancierslijstComponent
            }

          ]

        }
        ,
        {
          path: 'stock',
          component: import34.StockComponent,
          children: [
            {
              path: 'nieuw',
              component: import35.StocknieuwComponent
            }
            ,
            {
              path: 'lijst',
              component: import36.StocklijstComponent
            }
            ,
            {
              path: '',
              component: import36.StocklijstComponent
            }

          ]

        }
        ,
        {
          path: 'pakket',
          component: import37.PakketComponent,
          children: [
            {
              path: 'nieuw',
              component: import38.PakketnieuwComponent
            }
            ,
            {
              path: 'lijst',
              component: import39.PakketlijstComponent
            }
            ,
            {
              path: '',
              component: import39.PakketlijstComponent
            }

          ]

        }
        ,
        {
          path: 'orders',
          component: import40.OrdersComponent
        }
        ,
        {
          path: 'neworder',
          component: import41.NeworderComponent
        }

      ]
    ];
    this._Router_20 = import3.ɵe(this._ApplicationRef_7,this._UrlSerializer_12,this._RouterOutletMap_13,this._Location_16,this,this._NgModuleFactoryLoader_18,this._Compiler_17,this._ROUTES_19,this._ROUTER_CONFIGURATION_14,this.parent.get(import3.UrlHandlingStrategy,(null as any)),this.parent.get(import3.RouteReuseStrategy,(null as any)));
    this._RouterModule_21 = new import3.RouterModule(this._ɵa_11,this._Router_20);
    this._ɵba_22 = new import6.ɵba();
    this._FormsModule_23 = new import6.FormsModule();
    this._ReactiveFormsModule_24 = new import6.ReactiveFormsModule();
    this._ModalModule_25 = new import7.ModalModule();
    this._AppModule_26 = new import1.AppModule();
    return this._AppModule_26;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import0.ErrorHandler)) { return this._ErrorHandler_1; }
    if ((token === import0.NgProbeToken)) { return this._NgProbeToken_2; }
    if ((token === import3.ɵg)) { return this._ɵg_3; }
    if ((token === import0.APP_INITIALIZER)) { return this._APP_INITIALIZER_4; }
    if ((token === import0.ApplicationInitStatus)) { return this._ApplicationInitStatus_5; }
    if ((token === import0.ɵf)) { return this._ɵf_6; }
    if ((token === import0.ApplicationRef)) { return this._ApplicationRef_7; }
    if ((token === import0.ApplicationModule)) { return this._ApplicationModule_8; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_9; }
    if ((token === import5.HttpModule)) { return this._HttpModule_10; }
    if ((token === import3.ɵa)) { return this._ɵa_11; }
    if ((token === import3.UrlSerializer)) { return this._UrlSerializer_12; }
    if ((token === import3.RouterOutletMap)) { return this._RouterOutletMap_13; }
    if ((token === import3.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_14; }
    if ((token === import2.LocationStrategy)) { return this._LocationStrategy_15; }
    if ((token === import2.Location)) { return this._Location_16; }
    if ((token === import0.Compiler)) { return this._Compiler_17; }
    if ((token === import0.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_18; }
    if ((token === import3.ROUTES)) { return this._ROUTES_19; }
    if ((token === import3.Router)) { return this._Router_20; }
    if ((token === import3.RouterModule)) { return this._RouterModule_21; }
    if ((token === import6.ɵba)) { return this._ɵba_22; }
    if ((token === import6.FormsModule)) { return this._FormsModule_23; }
    if ((token === import6.ReactiveFormsModule)) { return this._ReactiveFormsModule_24; }
    if ((token === import7.ModalModule)) { return this._ModalModule_25; }
    if ((token === import1.AppModule)) { return this._AppModule_26; }
    if ((token === import0.LOCALE_ID)) { return this._LOCALE_ID_27; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_28; }
    if ((token === import0.APP_ID)) { return this._APP_ID_29; }
    if ((token === import0.IterableDiffers)) { return this._IterableDiffers_30; }
    if ((token === import0.KeyValueDiffers)) { return this._KeyValueDiffers_31; }
    if ((token === import4.DomSanitizer)) { return this._DomSanitizer_32; }
    if ((token === import0.Sanitizer)) { return this._Sanitizer_33; }
    if ((token === import4.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_34; }
    if ((token === import4.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_35; }
    if ((token === import4.EventManager)) { return this._EventManager_36; }
    if ((token === import4.ɵDomSharedStylesHost)) { return this._ɵDomSharedStylesHost_37; }
    if ((token === import4.ɵDomRendererFactory2)) { return this._ɵDomRendererFactory2_38; }
    if ((token === import0.RendererFactory2)) { return this._RendererFactory2_39; }
    if ((token === import4.ɵSharedStylesHost)) { return this._ɵSharedStylesHost_40; }
    if ((token === import0.Testability)) { return this._Testability_41; }
    if ((token === import4.Meta)) { return this._Meta_42; }
    if ((token === import4.Title)) { return this._Title_43; }
    if ((token === import5.BrowserXhr)) { return this._BrowserXhr_44; }
    if ((token === import5.ResponseOptions)) { return this._ResponseOptions_45; }
    if ((token === import5.XSRFStrategy)) { return this._XSRFStrategy_46; }
    if ((token === import5.XHRBackend)) { return this._XHRBackend_47; }
    if ((token === import5.RequestOptions)) { return this._RequestOptions_48; }
    if ((token === import5.Http)) { return this._Http_49; }
    if ((token === import6.ɵi)) { return this._ɵi_50; }
    if ((token === import6.FormBuilder)) { return this._FormBuilder_51; }
    if ((token === import3.ActivatedRoute)) { return this._ActivatedRoute_52; }
    if ((token === import3.NoPreloading)) { return this._NoPreloading_53; }
    if ((token === import3.PreloadingStrategy)) { return this._PreloadingStrategy_54; }
    if ((token === import3.RouterPreloader)) { return this._RouterPreloader_55; }
    if ((token === import3.PreloadAllModules)) { return this._PreloadAllModules_56; }
    if ((token === import3.ROUTER_INITIALIZER)) { return this._ROUTER_INITIALIZER_57; }
    if ((token === import0.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_58; }
    if ((token === import8.PositioningService)) { return this._PositioningService_59; }
    if ((token === import9.ComponentLoaderFactory)) { return this._ComponentLoaderFactory_60; }
    if ((token === import10.BsModalService)) { return this._BsModalService_61; }
    if ((token === import11.StockService)) { return this._StockService_62; }
    if ((token === import12.LeveranciersService)) { return this._LeveranciersService_63; }
    if ((token === import13.PakketService)) { return this._PakketService_64; }
    if ((token === import14.OrdersService)) { return this._OrdersService_65; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ɵf_6.ngOnDestroy();
    (this.__ɵDomSharedStylesHost_37 && this._ɵDomSharedStylesHost_37.ngOnDestroy());
    (this.__RouterPreloader_55 && this._RouterPreloader_55.ngOnDestroy());
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory<any>(AppModuleInjector,import1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvZ2VicnVpa2VyL0Rlc2t0b3AvZGVwbG95L3dpbmtlbGJlaGVlci9hc3NldHMvYXBwL2FwcC5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvZ2VicnVpa2VyL0Rlc2t0b3AvZGVwbG95L3dpbmtlbGJlaGVlci9hc3NldHMvYXBwL2FwcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
