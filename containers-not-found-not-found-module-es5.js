(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-not-found-not-found-module"], {
    /***/
    "I8oi":
    /*!*******************************************************************!*\
      !*** ./src/app/@containers/not-found/not-found-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: NotFoundRoutingModule */

    /***/
    function I8oi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundRoutingModule", function () {
        return NotFoundRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _not_found_page_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./not-found.page.route */
      "NLdw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [_not_found_page_route__WEBPACK_IMPORTED_MODULE_1__["NOT_FOUND_ROUTE"]];

      var NotFoundRoutingModule = function NotFoundRoutingModule() {
        _classCallCheck(this, NotFoundRoutingModule);
      };

      NotFoundRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: NotFoundRoutingModule
      });
      NotFoundRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function NotFoundRoutingModule_Factory(t) {
          return new (t || NotFoundRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotFoundRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "NLdw":
    /*!***************************************************************!*\
      !*** ./src/app/@containers/not-found/not-found.page.route.ts ***!
      \***************************************************************/

    /*! exports provided: NOT_FOUND_ROUTE */

    /***/
    function NLdw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NOT_FOUND_ROUTE", function () {
        return NOT_FOUND_ROUTE;
      });
      /* harmony import */


      var _core_structs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/structs */
      "+drn");
      /* harmony import */


      var _not_found_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./not-found.page */
      "Efwa");

      var NOT_FOUND_ROUTE = {
        path: _core_structs__WEBPACK_IMPORTED_MODULE_0__["Path"].NotFound,
        component: _not_found_page__WEBPACK_IMPORTED_MODULE_1__["NotFoundPage"],
        data: {
          title: 'The page you were looking for could not be found',
          robots: 'noindex, nofollow'
        }
      };
      /***/
    },

    /***/
    "e6fJ":
    /*!***********************************************************!*\
      !*** ./src/app/@containers/not-found/not-found.module.ts ***!
      \***********************************************************/

    /*! exports provided: NotFoundModule */

    /***/
    function e6fJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundModule", function () {
        return NotFoundModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./not-found-routing.module */
      "I8oi");
      /* harmony import */


      var _not_found_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./not-found.page */
      "Efwa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NotFoundModule = function NotFoundModule() {
        _classCallCheck(this, NotFoundModule);
      };

      NotFoundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: NotFoundModule
      });
      NotFoundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function NotFoundModule_Factory(t) {
          return new (t || NotFoundModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__["NotFoundRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NotFoundModule, {
          declarations: [_not_found_page__WEBPACK_IMPORTED_MODULE_2__["NotFoundPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__["NotFoundRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=containers-not-found-not-found-module-es5.js.map