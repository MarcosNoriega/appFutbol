(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_equipos_equipos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/equipos/equipos.component */ "./src/app/components/equipos/equipos.component.ts");
/* harmony import */ var _components_competicion_competicion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/competicion/competicion.component */ "./src/app/components/competicion/competicion.component.ts");
/* harmony import */ var _components_equipo_equipo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/equipo/equipo.component */ "./src/app/components/equipo/equipo.component.ts");
/* harmony import */ var _components_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/noticias/noticias.component */ "./src/app/components/noticias/noticias.component.ts");








var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'noticias', component: _components_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_7__["NoticiasComponent"] },
    { path: 'equipos/:id', component: _components_equipos_equipos_component__WEBPACK_IMPORTED_MODULE_4__["EquiposComponent"] },
    { path: 'competicion/:id', component: _components_competicion_competicion_component__WEBPACK_IMPORTED_MODULE_5__["CompeticionComponent"] },
    { path: 'equipo/:id', component: _components_equipo_equipo_component__WEBPACK_IMPORTED_MODULE_6__["EquipoComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container mt-4\">\n    <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'appFutbol';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _pipes_no_imagen_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/no-imagen.pipe */ "./src/app/pipes/no-imagen.pipe.ts");
/* harmony import */ var _components_equipos_equipos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/equipos/equipos.component */ "./src/app/components/equipos/equipos.component.ts");
/* harmony import */ var _components_tabla_posiciones_tabla_posiciones_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tabla-posiciones/tabla-posiciones.component */ "./src/app/components/tabla-posiciones/tabla-posiciones.component.ts");
/* harmony import */ var _components_competicion_competicion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/competicion/competicion.component */ "./src/app/components/competicion/competicion.component.ts");
/* harmony import */ var _components_tabla_goleadores_tabla_goleadores_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tabla-goleadores/tabla-goleadores.component */ "./src/app/components/tabla-goleadores/tabla-goleadores.component.ts");
/* harmony import */ var _components_equipo_equipo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/equipo/equipo.component */ "./src/app/components/equipo/equipo.component.ts");
/* harmony import */ var _components_tabla_plantel_tabla_plantel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tabla-plantel/tabla-plantel.component */ "./src/app/components/tabla-plantel/tabla-plantel.component.ts");
/* harmony import */ var _components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/shared/loading/loading.component */ "./src/app/components/shared/loading/loading.component.ts");
/* harmony import */ var _components_shared_error_error_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/shared/error/error.component */ "./src/app/components/shared/error/error.component.ts");
/* harmony import */ var _components_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/noticias/noticias.component */ "./src/app/components/noticias/noticias.component.ts");
/* harmony import */ var _components_card_noticias_card_noticias_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/card-noticias/card-noticias.component */ "./src/app/components/card-noticias/card-noticias.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _pipes_no_imagen_pipe__WEBPACK_IMPORTED_MODULE_9__["NoImagenPipe"],
                _components_equipos_equipos_component__WEBPACK_IMPORTED_MODULE_10__["EquiposComponent"],
                _components_tabla_posiciones_tabla_posiciones_component__WEBPACK_IMPORTED_MODULE_11__["TablaPosicionesComponent"],
                _components_competicion_competicion_component__WEBPACK_IMPORTED_MODULE_12__["CompeticionComponent"],
                _components_tabla_goleadores_tabla_goleadores_component__WEBPACK_IMPORTED_MODULE_13__["TablaGoleadoresComponent"],
                _components_equipo_equipo_component__WEBPACK_IMPORTED_MODULE_14__["EquipoComponent"],
                _components_tabla_plantel_tabla_plantel_component__WEBPACK_IMPORTED_MODULE_15__["TablaPlantelComponent"],
                _components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"],
                _components_shared_error_error_component__WEBPACK_IMPORTED_MODULE_17__["ErrorComponent"],
                _components_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_18__["NoticiasComponent"],
                _components_card_noticias_card_noticias_component__WEBPACK_IMPORTED_MODULE_19__["CardNoticiasComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/card-noticias/card-noticias.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/card-noticias/card-noticias.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header text-white bg-dark\">\n    <h5 class=\"card-title\">{{noticia.title}}</h5>\n    \n  </div>\n    <a [href]=\"noticia.url\" target=\"_blank\">\n      <img [src]=\"noticia.urlToImage | noImagen\" class=\"card-img-top\" alt=\"...\">\n    </a>\n    <div class=\"card-body text-white bg-dark\">\n      <p class=\"card-text\">{{noticia.description}}</p>\n      <p class=\"card-text\">{{noticia.content}}</p>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/card-noticias/card-noticias.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/card-noticias/card-noticias.component.ts ***!
  \*********************************************************************/
/*! exports provided: CardNoticiasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardNoticiasComponent", function() { return CardNoticiasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardNoticiasComponent = /** @class */ (function () {
    function CardNoticiasComponent() {
    }
    CardNoticiasComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardNoticiasComponent.prototype, "noticia", void 0);
    CardNoticiasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-noticias',
            template: __webpack_require__(/*! ./card-noticias.component.html */ "./src/app/components/card-noticias/card-noticias.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardNoticiasComponent);
    return CardNoticiasComponent;
}());



/***/ }),

/***/ "./src/app/components/competicion/competicion.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/competicion/competicion.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"loading && !error\"></app-loading>\n\n<app-error *ngIf=\"error\"></app-error>\n\n<div *ngIf=\"!loading && !error\" class=\"card bg-light animated fadeIn\">\n    <div class=\"card-header bg-dark text-white text-center\">\n        <h1>{{posiciones.competition.name}}</h1>\n    </div>\n    <div class=\"card-body bg-dark\">\n        <h3 class=\"text-sec mb-4\">Clasificación</h3>\n        \n        <div class=\"row justify-content-between\">\n            <div class=\"col-md-7\">\n                <div *ngFor=\"let grupo of posiciones.standings\" class=\"mb-4\">\n                    <h5 class=\"text-sec\">{{grupo.group}}</h5>\n                    \n                    <app-tabla-posiciones [posiciones]=\"grupo.table\"></app-tabla-posiciones>\n                </div>\n        \n                <h3 class=\"text-sec mb-4\">Goleadores</h3>\n        \n                <app-tabla-goleadores [goleadores]=\"goleadores\"></app-tabla-goleadores>\n            </div>\n        \n            <div class=\"col-md-4\">\n                <div class=\"card\">\n                    <div class=\"card-header bg-dark text-white\">\n                        <h3>Partidos de la Semana</h3>\n                    </div>\n                    <div class=\"card-body bg-dark\">\n                        <ul class=\"list-group list-group-flush\">\n                            <li *ngFor=\"let partido of partidos\" class=\"list-group-item  bg-dark text-white text-center\">\n                                <p>{{partido.homeTeam.name}} {{partido.score.fullTime.homeTeam}} - {{partido.score.fullTime.awayTeam}} {{partido.awayTeam.name}}</p>\n                                <small class=\"text-sec\">{{partido.utcDate | date:'dd/MM/yyyy, h:mm a'}}</small>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n        \n                <div class=\"card mt-3\">\n                    <div class=\"card-header bg-dark text-white\">\n                        <h3>Proximos Encuentros</h3>\n                    </div>\n                    <div class=\"card-body  bg-dark\">\n                            <ul class=\"list-group list-group-flush\">\n                                <li *ngFor=\"let proximo of proximos\" class=\"list-group-item bg-dark text-white text-center\">\n                                    <p>{{proximo.homeTeam.name}} {{proximo.score.fullTime.homeTeam}} - {{proximo.score.fullTime.awayTeam}} {{proximo.awayTeam.name}}</p>\n                                    <small class=\"text-sec\">{{proximo.utcDate | date:'dd/MM/yyyy, h:mm a'}}</small>\n                                </li>\n                            </ul>\n                        </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/competicion/competicion.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/competicion/competicion.component.ts ***!
  \*****************************************************************/
/*! exports provided: CompeticionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompeticionComponent", function() { return CompeticionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_football_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/football-data.service */ "./src/app/services/football-data.service.ts");




var CompeticionComponent = /** @class */ (function () {
    function CompeticionComponent(football, activatedRoute) {
        var _this = this;
        this.football = football;
        this.activatedRoute = activatedRoute;
        this.loading = true;
        this.error = false;
        activatedRoute.params.subscribe(function (params) {
            _this.getPosiciones(params['id']);
            _this.getPartidos(params['id']);
            _this.getProximosEncuentros(params['id']);
            _this.getGoleadores(params['id']);
        });
    }
    CompeticionComponent.prototype.ngOnInit = function () {
    };
    CompeticionComponent.prototype.getPosiciones = function (id) {
        var _this = this;
        this.football.getPosiciones(id).subscribe(function (res) {
            console.log(res);
            _this.posiciones = res;
            _this.loading = false;
        }, function (err) {
            _this.error = true;
        });
    };
    CompeticionComponent.prototype.getPartidos = function (id) {
        var _this = this;
        this.football.getPartidos(id).subscribe(function (res) {
            console.log(res);
            _this.partidos = res;
            _this.loading = false;
        }, function (err) {
            _this.error = true;
        });
    };
    CompeticionComponent.prototype.getProximosEncuentros = function (id) {
        var _this = this;
        this.football.getProximosEncuentros(id).subscribe(function (res) {
            console.log(res);
            _this.proximos = res;
            _this.loading = false;
        }, function (err) {
            _this.error = true;
        });
    };
    CompeticionComponent.prototype.getGoleadores = function (id) {
        var _this = this;
        this.football.getGoleadores(id).subscribe(function (res) {
            console.log(res);
            _this.goleadores = res;
            _this.loading = false;
        }, function (err) {
            _this.error = true;
        });
    };
    CompeticionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-competicion',
            template: __webpack_require__(/*! ./competicion.component.html */ "./src/app/components/competicion/competicion.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_football_data_service__WEBPACK_IMPORTED_MODULE_3__["FootballDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CompeticionComponent);
    return CompeticionComponent;
}());



/***/ }),

/***/ "./src/app/components/equipo/equipo.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/equipo/equipo.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"loading && !error\"></app-loading>\n\n<app-error *ngIf=\"error\"></app-error>\n\n<div *ngIf=\"!loading && !error\" class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-2\">\n      <img [src]=\"equipo.crestUrl | noImagen\" alt=\"\" width=\"100\" height=\"100\">\n    </div>\n    <div class=\"col-10\">\n      <a [href]=\"equipo.website\" target=\"_blank\">\n        <h1>{{equipo.name}}</h1>\n      </a>\n      <p class=\"text-muted\">{{equipo.venue}}, {{equipo.area.name}}</p>\n    </div>\n  </div>\n  \n  <div class=\"mt-4\">\n    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Plantel</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Partidos</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">Competencia</a>\n      </li>\n    </ul>\n    <div class=\"tab-content\" id=\"myTabContent\">\n      <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n        <app-tabla-plantel [plantel]=\"equipo.squad\"></app-tabla-plantel>\n      </div>\n      <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item  bg-dark text-white text-center\" *ngFor=\"let partido of partidos\">\n            <h6>{{partido.competition.name}}</h6>\n            <p>{{partido.homeTeam.name}} {{partido.score.fullTime.homeTeam}} - {{partido.score.fullTime.awayTeam}} {{partido.awayTeam.name}}</p>\n            <p class=\"text-sec\">{{partido.utcDate | date:'dd/MM/yyyy, hh:mm a'}}</p>\n          </li>\n        </ul>\n      </div>\n      <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item bg-dark text-white\" *ngFor=\"let competencia of equipo.activeCompetitions\">{{competencia.name}}</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  \n  \n  \n  \n</div>"

/***/ }),

/***/ "./src/app/components/equipo/equipo.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/equipo/equipo.component.ts ***!
  \*******************************************************/
/*! exports provided: EquipoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoComponent", function() { return EquipoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_football_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/football-data.service */ "./src/app/services/football-data.service.ts");




var EquipoComponent = /** @class */ (function () {
    function EquipoComponent(activatedRouter, football) {
        var _this = this;
        this.activatedRouter = activatedRouter;
        this.football = football;
        this.loading = true;
        this.error = false;
        activatedRouter.params.subscribe(function (params) {
            _this.getEquipo(params['id']);
            _this.getPartidos(params['id']);
        });
    }
    EquipoComponent.prototype.ngOnInit = function () {
    };
    EquipoComponent.prototype.getEquipo = function (id) {
        var _this = this;
        this.football.getEquipo(id).subscribe(function (res) {
            console.log(res);
            _this.equipo = res;
            _this.loading = false;
        }, function (err) {
            _this.error = true;
        });
    };
    EquipoComponent.prototype.getPartidos = function (id) {
        var _this = this;
        this.football.getPartidosXequipo(id).subscribe(function (res) {
            console.log(res);
            _this.partidos = res;
            _this.loading = false;
        }, function (err) {
            _this.error = true;
        });
    };
    EquipoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-equipo',
            template: __webpack_require__(/*! ./equipo.component.html */ "./src/app/components/equipo/equipo.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_football_data_service__WEBPACK_IMPORTED_MODULE_3__["FootballDataService"]])
    ], EquipoComponent);
    return EquipoComponent;
}());



/***/ }),

/***/ "./src/app/components/equipos/equipos.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/equipos/equipos.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{equipos.competition.name}}</h1>\n<hr>\n\n<div class=\"row justify-content-between\">\n    <div class=\"col-md-5\">\n      <h4 class=\"text-muted\">Equipos Participantes</h4>\n    </div>\n  <div class=\"col-md-2\">\n      <button class=\"btn btn-outline-danger\">Regresar</button>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"table-responsive mt-4\">\n      <table class=\"table table-hover\">\n        <thead class=\"table-dark\">\n          <tr>\n            <th>Escudo</th>\n            <th>Equipo</th>\n            <th>Pais</th>\n            <th>Año de fundación</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let equipo of equipos.teams\">\n            <td><img [src]=\"equipo.crestUrl | noImagen\" alt=\"\" height=\"50\" width=\"50\"></td>\n            <td>{{equipo.name}}</td>\n            <td>{{equipo.area.name}}</td>\n            <td>{{equipo.founded}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/equipos/equipos.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/equipos/equipos.component.ts ***!
  \*********************************************************/
/*! exports provided: EquiposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquiposComponent", function() { return EquiposComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_football_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/football-data.service */ "./src/app/services/football-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EquiposComponent = /** @class */ (function () {
    function EquiposComponent(football, activatedRouter) {
        var _this = this;
        this.football = football;
        this.activatedRouter = activatedRouter;
        activatedRouter.params.subscribe(function (params) {
            _this.buscarEquipos(params['id']);
        });
    }
    EquiposComponent.prototype.ngOnInit = function () {
    };
    EquiposComponent.prototype.buscarEquipos = function (id) {
        var _this = this;
        this.football.buscarEquipos(id).subscribe(function (res) {
            console.log(res);
            _this.equipos = res;
        });
    };
    EquiposComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-equipos',
            template: __webpack_require__(/*! ./equipos.component.html */ "./src/app/components/equipos/equipos.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_football_data_service__WEBPACK_IMPORTED_MODULE_2__["FootballDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EquiposComponent);
    return EquiposComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"loading && !error\"></app-loading>\n\n<app-error *ngIf=\"error\"></app-error>\n\n<div class=\"card-columns mt-4\" *ngIf=\"!loading && !error\">\n    <div class=\"card\" *ngFor=\"let competencia of competencias\" (click)=\"verCompeticion(competencia.id)\">\n        <img [src]=\"competencia.emblemUrl | noImagen\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{competencia.name}}</h5>\n        </div>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_football_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/football-data.service */ "./src/app/services/football-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(football, router) {
        var _this = this;
        this.football = football;
        this.router = router;
        this.loading = true;
        this.error = false;
        football.getCompetencias().subscribe(function (res) {
            console.log(res);
            _this.competencias = res;
            _this.loading = false;
        }, function (err) {
            _this.error = true;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.verCompeticion = function (id) {
        this.router.navigate(['/competicion', id]);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_football_data_service__WEBPACK_IMPORTED_MODULE_2__["FootballDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/noticias/noticias.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/noticias/noticias.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-error *ngIf=\"error\"></app-error>\n\n<app-loading *ngIf=\"loading && !error\"></app-loading>\n\n<div class=\"row\" *ngIf=\"!error && !loading\">\n  <div class=\"col-12 col-md-4 mt-4\" *ngFor=\"let noticia of noticias\">\n    <app-card-noticias [noticia]=\"noticia\"></app-card-noticias>\n  \n    <div class=\"container\" infiniteScroll [infiniteScrollDistance]=\"2\"  (scrolled)=\"onScroll()\">\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/noticias/noticias.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/noticias/noticias.component.ts ***!
  \***********************************************************/
/*! exports provided: NoticiasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasComponent", function() { return NoticiasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_noticias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/noticias.service */ "./src/app/services/noticias.service.ts");



var NoticiasComponent = /** @class */ (function () {
    function NoticiasComponent(noticiasService) {
        var _this = this;
        this.noticiasService = noticiasService;
        this.noticias = [];
        this.loading = true;
        this.error = false;
        this.noticiasService.getNoticiasDeporte().subscribe(function (res) {
            var _a;
            (_a = _this.noticias).push.apply(_a, res);
            _this.loading = false;
        }, function (err) {
            _this.error = true;
        });
    }
    NoticiasComponent.prototype.ngOnInit = function () {
    };
    NoticiasComponent.prototype.onScroll = function () {
        var _this = this;
        this.noticiasService.getNoticiasDeporte().subscribe(function (res) {
            var _a;
            (_a = _this.noticias).push.apply(_a, res);
        });
    };
    NoticiasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-noticias',
            template: __webpack_require__(/*! ./noticias.component.html */ "./src/app/components/noticias/noticias.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_noticias_service__WEBPACK_IMPORTED_MODULE_2__["NoticiasService"]])
    ], NoticiasComponent);
    return NoticiasComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/error/error.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/error/error.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"col-4\">\n    <div class=\"alert alert-danger\" role=\"alert\">\n      Algo Salio Mal! Intentalo de Nuevo\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/shared/error/error.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/shared/error/error.component.ts ***!
  \************************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/components/shared/error/error.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/loading/loading.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/loading/loading.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-5 text-white\">\n  <i class=\"fa fa-spinner fa-spin fa-5x mx-auto\"></i>\n</div>"

/***/ }),

/***/ "./src/app/components/shared/loading/loading.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/loading/loading.component.ts ***!
  \****************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/components/shared/loading/loading.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Image and text -->\n<nav class=\"navbar navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" [routerLink]=\"['home']\">\n    <img src=\"assets/img/sport_football_1517.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    Ark4Fútbol\n  </a>\n\n  <div>\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link text-white\" [routerLink]=\"['noticias']\" routerLinkActive=\"router-link-active\" >Noticias Deporte Argentino</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/shared/navbar/navbar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/tabla-goleadores/tabla-goleadores.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/tabla-goleadores/tabla-goleadores.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n  <table class=\"table table-dark table-hover\">\n    <thead>\n      <tr class=\"thead-dark\">\n        <th>Jugador</th>\n        <th>Equipo</th>\n        <th>Goles</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let goleador of goleadores\">\n        <td>{{goleador.player.name}}</td>\n        <td>{{goleador.team.name}}</td>\n        <td>{{goleador.numberOfGoals}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/components/tabla-goleadores/tabla-goleadores.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/tabla-goleadores/tabla-goleadores.component.ts ***!
  \***************************************************************************/
/*! exports provided: TablaGoleadoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaGoleadoresComponent", function() { return TablaGoleadoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TablaGoleadoresComponent = /** @class */ (function () {
    function TablaGoleadoresComponent() {
    }
    TablaGoleadoresComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TablaGoleadoresComponent.prototype, "goleadores", void 0);
    TablaGoleadoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabla-goleadores',
            template: __webpack_require__(/*! ./tabla-goleadores.component.html */ "./src/app/components/tabla-goleadores/tabla-goleadores.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TablaGoleadoresComponent);
    return TablaGoleadoresComponent;
}());



/***/ }),

/***/ "./src/app/components/tabla-plantel/tabla-plantel.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/tabla-plantel/tabla-plantel.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n  <table class=\"table table-dark\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Nombre</th>\n        <th>Posicion</th>\n        <th>Nacionalidad</th>\n        <th>Nacimiento</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let jugador of plantel\">\n        <td>{{jugador.name}}</td>\n        <td>{{jugador.position}}</td>\n        <td>{{jugador.nationality}}</td>\n        <td>{{jugador.dateOfBirth | date:\"dd/MM/yyyy\"}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/components/tabla-plantel/tabla-plantel.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/tabla-plantel/tabla-plantel.component.ts ***!
  \*********************************************************************/
/*! exports provided: TablaPlantelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaPlantelComponent", function() { return TablaPlantelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TablaPlantelComponent = /** @class */ (function () {
    function TablaPlantelComponent() {
    }
    TablaPlantelComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TablaPlantelComponent.prototype, "plantel", void 0);
    TablaPlantelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabla-plantel',
            template: __webpack_require__(/*! ./tabla-plantel.component.html */ "./src/app/components/tabla-plantel/tabla-plantel.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TablaPlantelComponent);
    return TablaPlantelComponent;
}());



/***/ }),

/***/ "./src/app/components/tabla-posiciones/tabla-posiciones.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/tabla-posiciones/tabla-posiciones.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n  <table class=\"table table-dark table-hover\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Posicion</th>\n        <th>Equipo</th>\n        <th>J</th>\n        <th>DG</th>\n        <th>Ptos</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let tabla of posiciones\" (click)=\"equipo(tabla.team.id)\">\n        <td>{{tabla.position}}</td>\n        <td><img [src]=\"tabla.team.crestUrl | noImagen\" alt=\"\" height=\"30\" width=\"30\">  {{tabla.team.name}}</td>\n        <td>{{tabla.playedGames}}</td>\n        <td>{{tabla.goalDifference}}</td>\n        <td>{{tabla.points}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/components/tabla-posiciones/tabla-posiciones.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/tabla-posiciones/tabla-posiciones.component.ts ***!
  \***************************************************************************/
/*! exports provided: TablaPosicionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaPosicionesComponent", function() { return TablaPosicionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TablaPosicionesComponent = /** @class */ (function () {
    function TablaPosicionesComponent(router) {
        this.router = router;
    }
    TablaPosicionesComponent.prototype.ngOnInit = function () {
    };
    TablaPosicionesComponent.prototype.equipo = function (id) {
        this.router.navigate(['/equipo', id]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TablaPosicionesComponent.prototype, "posiciones", void 0);
    TablaPosicionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabla-posiciones',
            template: __webpack_require__(/*! ./tabla-posiciones.component.html */ "./src/app/components/tabla-posiciones/tabla-posiciones.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TablaPosicionesComponent);
    return TablaPosicionesComponent;
}());



/***/ }),

/***/ "./src/app/pipes/no-imagen.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/no-imagen.pipe.ts ***!
  \*****************************************/
/*! exports provided: NoImagenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoImagenPipe", function() { return NoImagenPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoImagenPipe = /** @class */ (function () {
    function NoImagenPipe() {
    }
    NoImagenPipe.prototype.transform = function (value) {
        if (!value) {
            return 'assets/img/noimage.png';
        }
        if (value === null) {
            return 'assets/img/noimage.png';
        }
        return value;
    };
    NoImagenPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'noImagen'
        })
    ], NoImagenPipe);
    return NoImagenPipe;
}());



/***/ }),

/***/ "./src/app/services/football-data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/football-data.service.ts ***!
  \***************************************************/
/*! exports provided: FootballDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootballDataService", function() { return FootballDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var FootballDataService = /** @class */ (function () {
    function FootballDataService(http) {
        this.http = http;
    }
    FootballDataService.prototype.getQuery = function (query) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + query;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'X-Auth-Token': _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apikey
        });
        return this.http.get(url, { headers: headers });
    };
    FootballDataService.prototype.getCompetencias = function () {
        return this.getQuery('competitions?plan=TIER_ONE')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res['competitions'];
        }));
    };
    FootballDataService.prototype.buscarEquipos = function (id) {
        return this.getQuery("competitions/" + id + "/teams");
    };
    FootballDataService.prototype.getPosiciones = function (id) {
        return this.getQuery("competitions/" + id + "/standings?standingType=TOTAL");
    };
    FootballDataService.prototype.getPartidos = function (id) {
        var hoy = new Date();
        var semanaPasada = new Date();
        semanaPasada.setDate(semanaPasada.getDate() - 7);
        // tslint:disable-next-line:max-line-length
        return this.getQuery("competitions/" + id + "/matches?status=FINISHED&dateFrom=" + this.convertirFecha(semanaPasada) + "&dateTo=" + this.convertirFecha(hoy))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res['matches'];
        }));
    };
    FootballDataService.prototype.getProximosEncuentros = function (id) {
        var hoy = new Date();
        var semanaEntrante = new Date();
        semanaEntrante.setDate(semanaEntrante.getDate() + 7);
        // tslint:disable-next-line:max-line-length
        return this.getQuery("competitions/" + id + "/matches?status=SCHEDULED&dateFrom=" + this.convertirFecha(hoy) + "&dateTo=" + this.convertirFecha(semanaEntrante))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res['matches'];
        }));
    };
    FootballDataService.prototype.getGoleadores = function (id) {
        return this.getQuery("competitions/" + id + "/scorers")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res['scorers'];
        }));
    };
    FootballDataService.prototype.getEquipo = function (id) {
        return this.getQuery("teams/" + id);
    };
    FootballDataService.prototype.getPartidosXequipo = function (id) {
        var hoy = new Date();
        var mesSiguiente = new Date();
        mesSiguiente.setMonth(mesSiguiente.getMonth() + 1);
        // tslint:disable-next-line:max-line-length
        return this.getQuery("teams/" + id + "/matches/?dateFrom=" + hoy.getFullYear() + "-" + this.convertirMes(hoy.getMonth()) + "-01&dateTo=" + mesSiguiente.getFullYear() + "-" + this.convertirMes(mesSiguiente.getMonth()) + "-01")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res['matches'];
        }));
    };
    FootballDataService.prototype.convertirFecha = function (fecha) {
        var mes = (fecha.getMonth() + 1).toString();
        var dia = fecha.getDate().toString();
        var anio = fecha.getFullYear().toString();
        if (dia.length < 2) {
            dia = '0' + dia;
        }
        if (mes.length < 2) {
            mes = '0' + mes;
        }
        var f = anio + "-" + mes + "-" + dia;
        return f;
    };
    FootballDataService.prototype.convertirMes = function (mes) {
        ++mes;
        var mesString = mes.toString();
        if (mesString.length < 2) {
            mesString = '0' + mes;
        }
        return mesString;
    };
    FootballDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FootballDataService);
    return FootballDataService;
}());



/***/ }),

/***/ "./src/app/services/noticias.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/noticias.service.ts ***!
  \**********************************************/
/*! exports provided: NoticiasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasService", function() { return NoticiasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var NoticiasService = /** @class */ (function () {
    function NoticiasService(http) {
        this.http = http;
        this.page = 0;
    }
    NoticiasService.prototype.query = function (query) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiNotUrl + query;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'X-Api-Key': _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiNotKey
        });
        return this.http.get(url, { headers: headers });
    };
    NoticiasService.prototype.getNoticiasDeporte = function () {
        ++this.page;
        return this.query("top-headlines?country=ar&category=sports&page=" + this.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res['articles'];
        }));
    };
    NoticiasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NoticiasService);
    return NoticiasService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://api.football-data.org/v2/',
    apikey: '05497402832e47f19f111a2e26823fbd',
    apiNotUrl: 'https://newsapi.org/v2/',
    apiNotKey: 'ba6033e6ac41472083660f4ab1b93208'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/marcos/Documentos/appFutbol/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map