(function () {
  var _templateObject, _templateObject2;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+drn":
    /*!****************************************!*\
      !*** ./src/app/@core/structs/index.ts ***!
      \****************************************/

    /*! exports provided: Path */

    /***/
    function drn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _path_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./path.enum */
      "s6DD");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Path", function () {
        return _path_enum__WEBPACK_IMPORTED_MODULE_0__["Path"];
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/runner/work/pf-nippy/pf-nippy/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1A6t":
    /*!********************************************************!*\
      !*** ./src/app/@components/footer/footer.component.ts ***!
      \********************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function A6t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 2,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2110131441217779638$$SRC_APP__COMPONENTS_FOOTER_FOOTER_COMPONENT_TS_1 = goog.getMsg(" Built in planet \uD83C\uDF0E by YOUR_NAME\n");
            i18n_0 = MSG_EXTERNAL_2110131441217779638$$SRC_APP__COMPONENTS_FOOTER_FOOTER_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral([":\u241F13a61074e8c62851e6f25bb04129c81ebcc1e27e\u241F2110131441217779638: Built in planet \uD83C\uDF0E by YOUR_NAME\n"])));
          }

          return [[1, "py-6", "mt-auto", "text-sm", "text-center"], i18n_0];
        },
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "2it6":
    /*!*****************************************************!*\
      !*** ./src/app/@components/header/header.module.ts ***!
      \*****************************************************/

    /*! exports provided: HeaderModule */

    /***/
    function it6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderModule", function () {
        return HeaderModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header.component */
      "3eIE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderModule = function HeaderModule() {
        _classCallCheck(this, HeaderModule);
      };

      HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: HeaderModule
      });
      HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function HeaderModule_Factory(t) {
          return new (t || HeaderModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HeaderModule, {
          declarations: [_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          exports: [_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]]
        });
      })();
      /***/

    },

    /***/
    "3eIE":
    /*!********************************************************!*\
      !*** ./src/app/@components/header/header.component.ts ***!
      \********************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function eIE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 9,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6307174276781140101$$SRC_APP__COMPONENTS_HEADER_HEADER_COMPONENT_TS_1 = goog.getMsg("Repository");
            i18n_0 = MSG_EXTERNAL_6307174276781140101$$SRC_APP__COMPONENTS_HEADER_HEADER_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([":\u241Fb45d01f61abb874a71b314051193f4b72c3d4cf2\u241F6307174276781140101:Repository"])));
          }

          return [[1, "h-20", "shadow-sm", "bg-accent"], [1, "container", "flex", "items-center", "justify-between", "h-full", "py-3", "mx-auto", "center"], ["routerLink", "/", 1, "text-2xl", "font-bold", "no-underline", "cursor-pointer"], [1, "text-danger-400"], ["href", "https://github.com/juanmesa2097/angular-boilerplate", "title", i18n_0, 1, "transition-transform", "duration-200", "ease-out", "transform", "hover:scale-125"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fab", "data-icon", "github", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 496 512", 1, "w-10"], ["fill", "currentColor", "d", "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]];
        },
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Angular");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Boilerplate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "6ozH":
    /*!*********************************************!*\
      !*** ./src/app/@core/interceptors/index.ts ***!
      \*********************************************/

    /*! exports provided: JwtInterceptor, ServerErrorInterceptor */

    /***/
    function ozH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./jwt.interceptor */
      "z1xz");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__["JwtInterceptor"];
      });
      /* harmony import */


      var _server_error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./server-error.interceptor */
      "h79v");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ServerErrorInterceptor", function () {
        return _server_error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ServerErrorInterceptor"];
      });
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiUrl: 'http://localhost:3000/api/v1'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Bmk4":
    /*!*********************************************!*\
      !*** ./src/app/@core/services/seo/index.ts ***!
      \*********************************************/

    /*! exports provided: SeoService */

    /***/
    function Bmk4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _seo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./seo.service */
      "y/o3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SeoService", function () {
        return _seo_service__WEBPACK_IMPORTED_MODULE_0__["SeoService"];
      });
      /***/

    },

    /***/
    "Efwa":
    /*!*********************************************************!*\
      !*** ./src/app/@containers/not-found/not-found.page.ts ***!
      \*********************************************************/

    /*! exports provided: NotFoundPage */

    /***/
    function Efwa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundPage", function () {
        return NotFoundPage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NotFoundPage = /*#__PURE__*/function () {
        function NotFoundPage() {
          _classCallCheck(this, NotFoundPage);
        }

        _createClass(NotFoundPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundPage;
      }();

      NotFoundPage.ɵfac = function NotFoundPage_Factory(t) {
        return new (t || NotFoundPage)();
      };

      NotFoundPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundPage,
        selectors: [["ng-component"]],
        decls: 2,
        vars: 0,
        template: function NotFoundPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQucGFnZS5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "FED0":
    /*!*****************************************************!*\
      !*** ./src/app/@components/footer/footer.module.ts ***!
      \*****************************************************/

    /*! exports provided: FooterModule */

    /***/
    function FED0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterModule", function () {
        return FooterModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./footer.component */
      "1A6t");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterModule = function FooterModule() {
        _classCallCheck(this, FooterModule);
      };

      FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: FooterModule
      });
      FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function FooterModule_Factory(t) {
          return new (t || FooterModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FooterModule, {
          declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          exports: [_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]]
        });
      })();
      /***/

    },

    /***/
    "IAk5":
    /*!********************************************************!*\
      !*** ./src/app/features/dashboard/dashboard.module.ts ***!
      \********************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function IAk5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "UGnj");
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.page */
      "WvR6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: DashboardModule
      });
      DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function DashboardModule_Factory(t) {
          return new (t || DashboardModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__["DashboardRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardModule, {
          declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_2__["DashboardPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__["DashboardRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _core_structs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./@core/structs */
      "+drn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_services_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./@core/services/seo */
      "Bmk4");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, seoService) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.seoService = seoService;
          this.isLoggedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](true);
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.seoService.init();
          }
        }, {
          key: "onLogout",
          value: function onLogout() {
            this.isLoggedIn$.next(false);
            this.router.navigate(["/".concat(_core_structs__WEBPACK_IMPORTED_MODULE_1__["Path"].SignIn)]);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_seo__WEBPACK_IMPORTED_MODULE_4__["SeoService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        consts: [[1, "min-w-full"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "UGnj":
    /*!****************************************************************!*\
      !*** ./src/app/features/dashboard/dashboard-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: DashboardRoutingModule */

    /***/
    function UGnj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
        return DashboardRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _dashboard_page_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard.page.route */
      "X/rZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [_dashboard_page_route__WEBPACK_IMPORTED_MODULE_1__["DASHBOARD_ROUTE"]];

      var DashboardRoutingModule = function DashboardRoutingModule() {
        _classCallCheck(this, DashboardRoutingModule);
      };

      DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: DashboardRoutingModule
      });
      DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function DashboardRoutingModule_Factory(t) {
          return new (t || DashboardRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "WvR6":
    /*!******************************************************!*\
      !*** ./src/app/features/dashboard/dashboard.page.ts ***!
      \******************************************************/

    /*! exports provided: DashboardPage */

    /***/
    function WvR6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
        return DashboardPage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DashboardPage = /*#__PURE__*/function () {
        function DashboardPage() {
          _classCallCheck(this, DashboardPage);
        }

        _createClass(DashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardPage;
      }();

      DashboardPage.ɵfac = function DashboardPage_Factory(t) {
        return new (t || DashboardPage)();
      };

      DashboardPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardPage,
        selectors: [["ng-component"]],
        decls: 2,
        vars: 0,
        template: function DashboardPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "X/rZ":
    /*!************************************************************!*\
      !*** ./src/app/features/dashboard/dashboard.page.route.ts ***!
      \************************************************************/

    /*! exports provided: DASHBOARD_ROUTE */

    /***/
    function XRZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DASHBOARD_ROUTE", function () {
        return DASHBOARD_ROUTE;
      });
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard.page */
      "WvR6");

      var DASHBOARD_ROUTE = {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__["DashboardPage"],
        data: {
          title: 'Dashboard',
          robots: 'noindex, nofollow'
        }
      };
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/service-worker */
      "Jho9");
      /* harmony import */


      var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @components/footer/footer.module */
      "FED0");
      /* harmony import */


      var _components_header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @components/header/header.module */
      "2it6");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _core_interceptors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./@core/interceptors */
      "6ozH");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _features_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./features/dashboard/dashboard.module */
      "IAk5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
          useClass: _core_interceptors__WEBPACK_IMPORTED_MODULE_6__["ServerErrorInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
          useClass: _core_interceptors__WEBPACK_IMPORTED_MODULE_6__["JwtInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
        }), _components_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"], _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__["FooterModule"], _features_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__["DashboardModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["ServiceWorkerModule"], _components_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"], _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__["FooterModule"], _features_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__["DashboardModule"]]
        });
      })();
      /***/

    },

    /***/
    "h79v":
    /*!****************************************************************!*\
      !*** ./src/app/@core/interceptors/server-error.interceptor.ts ***!
      \****************************************************************/

    /*! exports provided: ServerErrorInterceptor */

    /***/
    function h79v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServerErrorInterceptor", function () {
        return ServerErrorInterceptor;
      });
      /* harmony import */


      var _core_structs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/structs */
      "+drn");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ServerErrorInterceptor = /*#__PURE__*/function () {
        function ServerErrorInterceptor(router) {
          _classCallCheck(this, ServerErrorInterceptor);

          this.router = router;
        }

        _createClass(ServerErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              if ([401, 403].includes(error.status)) {
                _this.router.navigateByUrl(_core_structs__WEBPACK_IMPORTED_MODULE_0__["Path"].SignIn);

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
              } else if (error.status === 500) {
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
              } else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
              }
            }));
          }
        }]);

        return ServerErrorInterceptor;
      }();

      ServerErrorInterceptor.ɵfac = function ServerErrorInterceptor_Factory(t) {
        return new (t || ServerErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      ServerErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: ServerErrorInterceptor,
        factory: ServerErrorInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "s6DD":
    /*!********************************************!*\
      !*** ./src/app/@core/structs/path.enum.ts ***!
      \********************************************/

    /*! exports provided: Path */

    /***/
    function s6DD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Path", function () {
        return Path;
      });

      var Path;

      (function (Path) {
        // General containers
        Path["Home"] = "";
        Path["NotFound"] = "404"; // Auth

        Path["Auth"] = "";
        Path["SignIn"] = "sign-in";
        Path["SignUp"] = "sign-up";
        Path["ForgotPassword"] = "forgot-password";
        Path["ForgotPasswordEmailSent"] = "forgot-password-email-sent";
        Path["PasswordReset"] = "password-reset";
        Path["PasswordResetFailed"] = "password-reset-failed";
        Path["PasswordResetSucceeded"] = "password-reset-succeeded"; // App base url

        Path["App"] = "app";
        Path["Dashboard"] = ""; // Settings

        Path["Settings"] = "settings";
        Path["SettingsAccount"] = "account";
        Path["SettingsAppearance"] = "appearance";
        Path["SettingsBilling"] = "billing";
        Path["SettingsBlockedUsers"] = "blocked-users";
        Path["SettingsNotifications"] = "notifications";
        Path["SettingsSecurity"] = "security";
        Path["SettingsSecurityLog"] = "security-log"; // User

        Path["User"] = "users";
        Path["UserOverview"] = "overview";
        Path["UserProfile"] = ":username";
      })(Path || (Path = {}));
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _containers_not_found_not_found_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./@containers/not-found/not-found.page */
      "Efwa");
      /* harmony import */


      var _core_structs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./@core/structs */
      "+drn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [// ===== Uncomment if Path.Home is different from empty =====
      // { path: '', redirectTo: Path.Home, pathMatch: 'full' },
      // Public
      {
        path: _core_structs__WEBPACK_IMPORTED_MODULE_2__["Path"].Home,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | containers-home-home-module */
          "containers-home-home-module").then(__webpack_require__.bind(null,
          /*! @containers/home/home.module */
          "BrMu")).then(function (m) {
            return m.HomeModule;
          });
        }
      }, // // Auth
      // {
      //   path: Path.Auth,
      //   canActivate: [NoAuthGuard],
      //   loadChildren: () => import('./+auth/auth.module').then((m) => m.AuthModule),
      // },
      // // App
      // {
      //   path: Path.App,
      //   redirectTo: `${Path.App}`,
      //   pathMatch: 'full',
      // },
      // {
      //   path: Path.App,
      //   canActivate: [AuthGuard],
      //   children: [
      //     {
      //       path: Path.Dashboard,
      //       loadChildren: () =>
      //         import('./features/dashboard/dashboard.module').then(
      //           (m) => m.DashboardModule
      //         ),
      //     },
      //   ],
      // },
      // {
      //   path: 'settings',
      //   loadChildren: () =>
      //     import('./+settings/settings.module').then((m) => m.SettingsModule),
      // },
      // {
      //   path: 'user',
      //   loadChildren: () => import('./+user/user.module').then((m) => m.UserModule),
      // },
      // Not found page (must go at the bottom)
      {
        path: '**',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | containers-not-found-not-found-module */
          "containers-not-found-not-found-module").then(__webpack_require__.bind(null,
          /*! @containers/not-found/not-found.module */
          "e6fJ")).then(function (m) {
            return m.NotFoundModule;
          });
        },
        component: _containers_not_found_not_found_page__WEBPACK_IMPORTED_MODULE_1__["NotFoundPage"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"],
          relativeLinkResolution: 'legacy',
          anchorScrolling: 'enabled'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "y/o3":
    /*!***************************************************!*\
      !*** ./src/app/@core/services/seo/seo.service.ts ***!
      \***************************************************/

    /*! exports provided: SeoService */

    /***/
    function yO3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeoService", function () {
        return SeoService;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var SeoService = /*#__PURE__*/function () {
        function SeoService(router, activatedRoute, titleService, metaTagService) {
          _classCallCheck(this, SeoService);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.titleService = titleService;
          this.metaTagService = metaTagService;
        }

        _createClass(SeoService, [{
          key: "init",
          value: function init() {
            var _this2 = this;

            var appTitle = this.titleService.getTitle();
            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
              var child = _this2.activatedRoute.firstChild; // Loops until finds the last child.

              while (child.firstChild) {
                child = child.firstChild;
              } // Returns values if the route has data object.


              if (Object.keys(child.snapshot.data).length > 0) {
                var _child$snapshot$data = child.snapshot.data,
                    title = _child$snapshot$data.title,
                    description = _child$snapshot$data.description,
                    robots = _child$snapshot$data.robots;
                return [title, description, robots];
              }

              return [null, null, null];
            })).subscribe(function (data) {
              // Set title and meta tag description.
              var title = data[0];
              var description = data[1];
              var robots = data[2];

              if (title) {
                _this2.titleService.setTitle("".concat(appTitle, " - ").concat(title));
              }

              if (description) {
                _this2.metaTagService.updateTag({
                  name: 'description',
                  content: description
                });
              }

              if (robots) {
                _this2.metaTagService.updateTag({
                  name: 'robots',
                  content: robots
                });
              }
            });
          }
        }]);

        return SeoService;
      }();

      SeoService.ɵfac = function SeoService_Factory(t) {
        return new (t || SeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]));
      };

      SeoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: SeoService,
        factory: SeoService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "z1xz":
    /*!*******************************************************!*\
      !*** ./src/app/@core/interceptors/jwt.interceptor.ts ***!
      \*******************************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function z1xz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor() {
          _classCallCheck(this, JwtInterceptor);
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var isLoggedIn = true;
            var token = 'ABC';
            var isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl);

            if (isLoggedIn && isApiUrl) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(token)
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
        return new (t || JwtInterceptor)();
      };

      JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: JwtInterceptor,
        factory: JwtInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map