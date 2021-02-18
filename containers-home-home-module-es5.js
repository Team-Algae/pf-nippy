(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-home-home-module"], {
    /***/
    "9yxd":
    /*!*****************************************************!*\
      !*** ./src/app/@containers/home/home.page.route.ts ***!
      \*****************************************************/

    /*! exports provided: HOME_ROUTE */

    /***/
    function yxd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HOME_ROUTE", function () {
        return HOME_ROUTE;
      });
      /* harmony import */


      var _core_structs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/structs */
      "+drn");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page */
      "vxW2");

      var HOME_ROUTE = {
        path: _core_structs__WEBPACK_IMPORTED_MODULE_0__["Path"].Home,
        component: _home_page__WEBPACK_IMPORTED_MODULE_1__["HomePage"],
        data: {
          title: 'Home',
          description: 'Start writing your business logic right away without any concern on architecture matters.',
          robots: 'index, follow'
        }
      };
      /***/
    },

    /***/
    "BrMu":
    /*!*************************************************!*\
      !*** ./src/app/@containers/home/home.module.ts ***!
      \*************************************************/

    /*! exports provided: HomeModule */

    /***/
    function BrMu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _app_components_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @app/@components/navigation/navigation.module */
      "xo3C");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home-routing.module */
      "xHYw");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "vxW2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: HomeModule
      });
      HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function HomeModule_Factory(t) {
          return new (t || HomeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], _app_components_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_1__["NavigationModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeModule, {
          declarations: [_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], _app_components_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_1__["NavigationModule"]]
        });
      })();
      /***/

    },

    /***/
    "YSEA":
    /*!****************************************************************!*\
      !*** ./src/app/@components/navigation/navigation.component.ts ***!
      \****************************************************************/

    /*! exports provided: NavigationComponent */

    /***/
    function YSEA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
        return NavigationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-page-scroll */
      "n3og");

      var NavigationComponent = /*#__PURE__*/function () {
        function NavigationComponent() {
          _classCallCheck(this, NavigationComponent);

          this.toggle = true;
        }

        _createClass(NavigationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavigationComponent;
      }();

      NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
        return new (t || NavigationComponent)();
      };

      NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavigationComponent,
        selectors: [["algae-navigation"]],
        decls: 26,
        vars: 2,
        consts: [["id", "header", 1, "flex", "flex-wrap", "items-center", "px-6", "py-2", "mx-auto", "font-bold", "bg-white", "lg:px-16", "lg:py-0", "font-montserrat"], [1, "flex", "items-center", "justify-between", "flex-1"], ["routerLink", "/", 1, "text-2xl", "text-black"], [1, "hamburger", "hamburger--elastic", "lg:hidden", 3, "ngClass", "click"], [1, "hamburger-box"], [1, "hamburger-inner"], ["id", "menu", 1, "w-full", "lg:w-auto", "lg:flex", "lg:items-center", 3, "ngClass"], [1, "items-center", "justify-between", "pt-4", "text-base", "text-gray-700", "lg:flex", "lg:pt-0"], ["pageScroll", "", "href", "#hello", 1, "block", "px-0", "py-3", "border-b-2", "border-transparent", "lg:p-4", "hover:text-primary-900"], ["pageScroll", "", "href", "#hi", 1, "block", "px-0", "py-3", "border-b-2", "border-transparent", "lg:p-4", "hover:text-primary-900"]],
        template: function NavigationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nippy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_div_click_5_listener() {
              return ctx.toggle = !ctx.toggle;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ABOUT US");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SHOP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "PORTFOLIO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "BLOG");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "ELEMENTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.toggle ? "" : "is-active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.toggle ? "hidden" : "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], ngx_page_scroll__WEBPACK_IMPORTED_MODULE_2__["NgxPageScrollDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "Zgu1":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/ngx-page-scroll-core/__ivy_ngcc__/fesm2015/ngx-page-scroll-core.js ***!
      \*****************************************************************************************/

    /*! exports provided: NGXPS_CONFIG, NgxPageScrollCoreModule, PageScrollInstance, PageScrollService, defaultPageScrollConfig */

    /***/
    function Zgu1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NGXPS_CONFIG", function () {
        return NGXPS_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxPageScrollCoreModule", function () {
        return NgxPageScrollCoreModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageScrollInstance", function () {
        return PageScrollInstance;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageScrollService", function () {
        return PageScrollService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultPageScrollConfig", function () {
        return defaultPageScrollConfig;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**
       * Represents a scrolling action
       */


      var PageScrollInstance = /*#__PURE__*/function () {
        /**
         * Private constructor, requires the properties assumed to be the bare minimum.
         * Use the factory methods to create instances:
         *      {@link PageScrollService#create}
         */
        function PageScrollInstance(pageScrollOptions) {
          _classCallCheck(this, PageScrollInstance);

          /**
           * These properties will be set/manipulated if the scroll animation starts
           */

          /* The initial value of the scrollTop or scrollLeft position when the animation starts */
          this.startScrollPosition = 0;
          /* Whether an interrupt listener is attached to the body or not */

          this.interruptListenersAttached = false;
          /* References to the timer instance that is used to perform the scroll animation to be
           able to clear it on animation end*/

          this.timer = null;

          if (!pageScrollOptions.scrollViews || pageScrollOptions.scrollViews.length === 0) {
            pageScrollOptions.scrollViews = [pageScrollOptions.document.documentElement, pageScrollOptions.document.body, pageScrollOptions.document.body.parentNode];
            this.isInlineScrolling = false;
          } else {
            this.isInlineScrolling = true;
          }

          this.pageScrollOptions = pageScrollOptions;
        }

        _createClass(PageScrollInstance, [{
          key: "getScrollPropertyValue",
          value: function getScrollPropertyValue(scrollingView) {
            if (!this.pageScrollOptions.verticalScrolling) {
              return scrollingView.scrollLeft;
            }

            return scrollingView.scrollTop;
          }
        }, {
          key: "getScrollClientPropertyValue",
          value: function getScrollClientPropertyValue(scrollingView) {
            if (!this.pageScrollOptions.verticalScrolling) {
              return scrollingView.clientWidth;
            }

            return scrollingView.clientHeight;
          }
          /**
           * Extract the exact location of the scrollTarget element.
           *
           * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
           * a string like "#heading2", then this method returns the corresponding DOM element for that id.
           *
           */

        }, {
          key: "extractScrollTargetPosition",
          value: function extractScrollTargetPosition() {
            var scrollTargetElement = this.getScrollTargetElement();

            if (scrollTargetElement === null || scrollTargetElement === undefined) {
              // Scroll target not found
              return {
                top: NaN,
                left: NaN
              };
            }

            if (this.isInlineScrolling) {
              return PageScrollInstance.getInlineScrollingTargetPosition(this.pageScrollOptions, scrollTargetElement);
            }

            return PageScrollInstance.getScrollingTargetPosition(this.pageScrollOptions, scrollTargetElement);
          }
          /**
           * Get the top offset of the scroll animation.
           * This automatically takes the offset location of the scrolling container/scrolling view
           * into account (for nested/inline scrolling).
           */

        }, {
          key: "getCurrentOffset",
          value: function getCurrentOffset() {
            return this.pageScrollOptions.scrollOffset;
          }
          /**
           * Sets the "scrollTop" or "scrollLeft" property for all scrollViews to the provided value
           * @return true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
           *          false if it failed for all ScrollViews, meaning that we should stop the animation
           *          (probably because we're at the end of the scrolling region)
           */

        }, {
          key: "setScrollPosition",
          value: function setScrollPosition(position) {
            var _this = this;

            // Set the new scrollTop/scrollLeft to all scrollViews elements
            return this.pageScrollOptions.scrollViews.reduce(function (oneAlreadyWorked, scrollingView) {
              var startScrollPropertyValue = _this.getScrollPropertyValue(scrollingView);

              if (scrollingView && startScrollPropertyValue !== undefined && startScrollPropertyValue !== null) {
                var scrollDistance = Math.abs(startScrollPropertyValue - position); // The movement we need to perform is less than 2px
                // This we consider a small movement which some browser may not perform when
                // changing the scrollTop/scrollLeft property
                // Thus in this cases we do not stop the scroll animation, although setting the
                // scrollTop/scrollLeft value "fails"

                var isSmallMovement = scrollDistance < _this.pageScrollOptions._minScrollDistance;

                if (!_this.pageScrollOptions.verticalScrolling) {
                  scrollingView.scrollLeft = position;
                } else {
                  scrollingView.scrollTop = position;
                } // Return true if setting the new scrollTop/scrollLeft value worked
                // We consider that it worked if the new scrollTop/scrollLeft value is closer to the
                // desired scrollTop/scrollLeft than before (it might not be exactly the value we
                // set due to dpi or rounding irregularities)


                if (isSmallMovement || scrollDistance > Math.abs(_this.getScrollPropertyValue(scrollingView) - position)) {
                  return true;
                }
              }

              return oneAlreadyWorked;
            }, false);
          }
          /**
           * Trigger firing a animation finish event
           * @param value Whether the animation finished at the target (true) or got interrupted (false)
           */

        }, {
          key: "fireEvent",
          value: function fireEvent(value) {
            if (this.pageScrollOptions.scrollFinishListener) {
              this.pageScrollOptions.scrollFinishListener.emit(value);
            }
          }
          /**
           * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
           * will be called if any of the attached events is fired.
           *
           * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
           */

        }, {
          key: "attachInterruptListeners",
          value: function attachInterruptListeners(interruptReporter) {
            var _this2 = this;

            if (this.interruptListenersAttached) {
              // Detach possibly existing listeners first
              this.detachInterruptListeners();
            }

            this.interruptListener = function (event) {
              interruptReporter.report(event, _this2);
            };

            this.pageScrollOptions.interruptEvents.forEach(function (event) {
              return _this2.pageScrollOptions.document.body.addEventListener(event, _this2.interruptListener);
            });
            this.interruptListenersAttached = true;
          }
          /**
           * Remove event listeners from the body and stop listening for events that might be treated as "animation
           * interrupt" events.
           */

        }, {
          key: "detachInterruptListeners",
          value: function detachInterruptListeners() {
            var _this3 = this;

            this.pageScrollOptions.interruptEvents.forEach(function (event) {
              return _this3.pageScrollOptions.document.body.removeEventListener(event, _this3.interruptListener);
            });
            this.interruptListenersAttached = false;
          }
        }, {
          key: "getScrollTargetElement",
          value: function getScrollTargetElement() {
            if (typeof this.pageScrollOptions.scrollTarget === 'string') {
              var targetSelector = this.pageScrollOptions.scrollTarget;

              if (targetSelector.match(/^#[^\s]+$/g) !== null) {
                // It's an id selector and a valid id, as it does not contain any white space characters
                return this.pageScrollOptions.document.getElementById(targetSelector.substr(1));
              }

              return this.pageScrollOptions.document.querySelector(targetSelector);
            }

            return this.pageScrollOptions.scrollTarget;
          }
        }], [{
          key: "getScrollingTargetPosition",
          value: function getScrollingTargetPosition(pageScrollOptions, scrollTargetElement) {
            var body = pageScrollOptions.document.body;
            var docEl = pageScrollOptions.document.documentElement;
            var windowPageYOffset = pageScrollOptions.document.defaultView && pageScrollOptions.document.defaultView.pageYOffset || undefined;
            var windowPageXOffset = pageScrollOptions.document.defaultView && pageScrollOptions.document.defaultView.pageXOffset || undefined;
            var scrollTop = windowPageYOffset || docEl.scrollTop || body.scrollTop;
            var scrollLeft = windowPageXOffset || docEl.scrollLeft || body.scrollLeft;
            var clientTop = docEl.clientTop || body.clientTop || 0;
            var clientLeft = docEl.clientLeft || body.clientLeft || 0;

            if (scrollTargetElement === undefined || scrollTargetElement === null) {
              // No element found, so return the current position to not cause any change in scroll position
              return {
                top: scrollTop,
                left: scrollLeft
              };
            }

            var box = scrollTargetElement.getBoundingClientRect();
            var top = box.top + scrollTop - clientTop;
            var left = box.left + scrollLeft - clientLeft;
            return {
              top: Math.round(top),
              left: Math.round(left)
            };
          }
        }, {
          key: "getInlineScrollingTargetPosition",
          value: function getInlineScrollingTargetPosition(pageScrollOptions, scrollTargetElement) {
            var position = {
              top: scrollTargetElement.offsetTop,
              left: scrollTargetElement.offsetLeft
            };

            if (pageScrollOptions.advancedInlineOffsetCalculation && pageScrollOptions.scrollViews.length === 1) {
              var accumulatedParentsPos = {
                top: 0,
                left: 0
              }; // not named window to make sure we're not getting the global window variable by accident

              var theWindow = scrollTargetElement.ownerDocument.defaultView;
              var parentFound = false; // Start parent is the immediate parent

              var parent = scrollTargetElement.parentElement; // Iterate upwards all parents

              while (!parentFound && parent !== undefined && parent !== null) {
                if (theWindow.getComputedStyle(parent).getPropertyValue('position') === 'relative') {
                  accumulatedParentsPos.top += parent.offsetTop;
                  accumulatedParentsPos.left += parent.offsetLeft;
                } // Next iteration


                parent = parent.parentElement;
                parentFound = parent === pageScrollOptions.scrollViews[0];
              }

              if (parentFound) {
                // Only use the results if we found the parent, otherwise we accumulated too much anyway
                position.top += accumulatedParentsPos.top;
                position.left += accumulatedParentsPos.left;
              } else {
                /* TODO Uncomment
                if (PageScrollConfig._logLevel >= 2 || (PageScrollConfig._logLevel >= 1 && isDevMode())) {
                  console.warn('Unable to find nested scrolling targets parent!');
                }*/
              }
            }

            return position;
          }
        }]);

        return PageScrollInstance;
      }();

      var NGXPS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ngxps_config');

      var ɵ0 = function ɵ0(t, b, c, d) {
        // Linear easing
        return c * t / d + b;
      };

      var defaultPageScrollConfig = {
        _interval: 10,
        _minScrollDistance: 2,
        _logLevel: 1,
        namespace: 'default',
        verticalScrolling: true,
        duration: 1250,
        scrollOffset: 0,
        advancedInlineOffsetCalculation: false,
        interruptEvents: ['mousedown', 'wheel', 'DOMMouseScroll', 'mousewheel', 'keyup', 'touchmove'],
        interruptKeys: [' ', 'Escape', 'Tab', 'Enter', 'PageUp', 'PageDown', 'Home', 'End', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'ArrowDown'],
        interruptible: true,
        scrollInView: true,
        easingLogic: ɵ0
      };

      var PageScrollService = /*#__PURE__*/function () {
        function PageScrollService(customConfig) {
          var _this4 = this;

          _classCallCheck(this, PageScrollService);

          this.runningInstances = [];
          this.onInterrupted = {
            report: function report(event, pageScrollInstance) {
              if (!pageScrollInstance.pageScrollOptions.interruptible) {
                // Non-interruptible anyway, so do not stop anything
                return;
              }

              var shouldStop = true;

              if (event.type === 'keyup') {
                // Only stop if specific keys have been pressed, for all others don't stop anything
                if (_this4.config.interruptKeys.indexOf(event.key) === -1) {
                  // The pressed key is not in the list of interrupting keys
                  shouldStop = false;
                }
              } else if (event.type === 'mousedown') {
                // For mousedown events we only stop the scroll animation of the mouse has
                // been clicked inside the scrolling container
                if (!pageScrollInstance.pageScrollOptions.scrollViews.some(function (scrollingView) {
                  return scrollingView.contains(event.target);
                })) {
                  // Mouse clicked an element which is not inside any of the the scrolling containers
                  shouldStop = false;
                }
              }

              if (shouldStop) {
                _this4.stopAll(pageScrollInstance.pageScrollOptions.namespace);
              }
            }
          };
          this.config = Object.assign(Object.assign({}, defaultPageScrollConfig), customConfig);

          if (PageScrollService.instanceCounter > 0 && (this.config._logLevel >= 2 || this.config._logLevel >= 1 && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])())) {
            console.warn('An instance of PageScrollService already exists, usually ' + 'including one provider should be enough, so double check.');
          }

          PageScrollService.instanceCounter++;
        }

        _createClass(PageScrollService, [{
          key: "stopInternal",
          value: function stopInternal(interrupted, pageScrollInstance) {
            var index = this.runningInstances.indexOf(pageScrollInstance);

            if (index >= 0) {
              this.runningInstances.splice(index, 1);
            }

            if (pageScrollInstance.interruptListenersAttached) {
              pageScrollInstance.detachInterruptListeners();
            }

            if (pageScrollInstance.timer) {
              // Clear/Stop the timer
              clearInterval(pageScrollInstance.timer); // Clear the reference to this timer

              pageScrollInstance.timer = undefined;
              pageScrollInstance.fireEvent(!interrupted);
              return true;
            }

            return false;
          }
        }, {
          key: "create",
          value: function create(options) {
            return new PageScrollInstance(Object.assign(Object.assign({}, this.config), options));
          }
          /**
           * Start a scroll animation. All properties of the animation are stored in the given {@link PageScrollInstance} object.
           *
           * This is the core functionality of the whole library.
           */
          // tslint:disable-next-line:cyclomatic-complexity

        }, {
          key: "start",
          value: function start(pageScrollInstance) {
            var _this5 = this;

            // Merge the default options in the pageScrollInstance options
            pageScrollInstance.pageScrollOptions = Object.assign(Object.assign({}, this.config), pageScrollInstance.pageScrollOptions); // Stop all possibly running scroll animations in the same namespace

            this.stopAll(pageScrollInstance.pageScrollOptions.namespace);

            if (pageScrollInstance.pageScrollOptions.scrollViews === null || pageScrollInstance.pageScrollOptions.scrollViews.length === 0) {
              // No scrollViews specified, thus we can't animate anything
              if (this.config._logLevel >= 2 || this.config._logLevel >= 1 && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
                console.warn('No scrollViews specified, thus ngx-page-scroll does not know which DOM elements to scroll');
              }

              return;
            }

            var startScrollPositionFound = false;
            var scrollRange = pageScrollInstance.getScrollClientPropertyValue(pageScrollInstance.pageScrollOptions.scrollViews[0]); // Reset start scroll position to 0. If any of the scrollViews has a different one, it will be extracted next

            pageScrollInstance.startScrollPosition = 0; // Get the start scroll position from the scrollViews (e.g. if the user already scrolled down the content)

            pageScrollInstance.pageScrollOptions.scrollViews.forEach(function (scrollingView) {
              if (scrollingView === undefined || scrollingView === null) {
                return;
              } // Get the scrollTop or scrollLeft value of the first scrollingView that returns a value for its "scrollTop"
              // or "scrollLeft" property that is not undefined and unequal to 0


              var scrollPosition = pageScrollInstance.getScrollPropertyValue(scrollingView);

              if (!startScrollPositionFound && scrollPosition) {
                // We found a scrollingView that does not have scrollTop or scrollLeft 0
                // Return the scroll position value, as this will be our startScrollPosition
                pageScrollInstance.startScrollPosition = scrollPosition;
                startScrollPositionFound = true; // Remember te scrollRange of this scrollingView

                scrollRange = pageScrollInstance.getScrollClientPropertyValue(scrollingView);
              }
            });
            var pageScrollOffset = pageScrollInstance.getCurrentOffset(); // Calculate the target position that the scroll animation should go to

            var scrollTargetPosition = pageScrollInstance.extractScrollTargetPosition();
            pageScrollInstance.targetScrollPosition = Math.round((pageScrollInstance.pageScrollOptions.verticalScrolling ? scrollTargetPosition.top : scrollTargetPosition.left) - pageScrollOffset); // Calculate the distance we need to go in total

            pageScrollInstance.distanceToScroll = pageScrollInstance.targetScrollPosition - pageScrollInstance.startScrollPosition;

            if (isNaN(pageScrollInstance.distanceToScroll)) {
              // We weren't able to find the target position, maybe the element does not exist?
              if (this.config._logLevel >= 2 || this.config._logLevel >= 1 && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
                console.log('Scrolling not possible, as we can\'t find the specified target');
              }

              pageScrollInstance.fireEvent(false);
              return;
            } // We're at the final destination already
            // OR we need to scroll down but are already at the end
            // OR we need to scroll up but are at the top already


            var allReadyAtDestination = Math.abs(pageScrollInstance.distanceToScroll) < pageScrollInstance.pageScrollOptions._minScrollDistance; // Check how long we need to scroll if a speed option is given
            // Default executionDuration is the specified duration


            pageScrollInstance.executionDuration = pageScrollInstance.pageScrollOptions.duration; // Maybe we need to pay attention to the speed option?

            if (pageScrollInstance.pageScrollOptions.speed !== undefined && pageScrollInstance.pageScrollOptions.speed !== null && (pageScrollInstance.pageScrollOptions.duration === undefined || pageScrollInstance.pageScrollOptions.duration === null)) {
              // Speed option is set and no duration => calculate duration based on speed and scroll distance
              pageScrollInstance.executionDuration = Math.abs(pageScrollInstance.distanceToScroll) / pageScrollInstance.pageScrollOptions.speed * 1000;
            } // We should go there directly, as our "animation" would have one big step
            // only anyway and this way we save the interval stuff


            var tooShortInterval = pageScrollInstance.executionDuration <= pageScrollInstance.pageScrollOptions._interval;

            if (allReadyAtDestination || tooShortInterval) {
              if (this.config._logLevel >= 2 || this.config._logLevel >= 1 && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
                if (allReadyAtDestination) {
                  console.log('Scrolling not possible, as we can\'t get any closer to the destination');
                } else {
                  console.log('Scroll duration shorter that interval length, jumping to target');
                }
              }

              pageScrollInstance.setScrollPosition(pageScrollInstance.targetScrollPosition);
              pageScrollInstance.fireEvent(true);
              return;
            }

            if (!pageScrollInstance.pageScrollOptions.scrollInView) {
              var alreadyInView = pageScrollInstance.targetScrollPosition > pageScrollInstance.startScrollPosition && pageScrollInstance.targetScrollPosition <= pageScrollInstance.startScrollPosition + scrollRange;

              if (alreadyInView) {
                if (this.config._logLevel >= 2 || this.config._logLevel >= 1 && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
                  console.log('Not scrolling, as target already in view');
                }

                pageScrollInstance.fireEvent(true);
                return;
              }
            } // Register the interrupt listeners if we want an interruptible scroll animation


            if (pageScrollInstance.pageScrollOptions.interruptible) {
              pageScrollInstance.attachInterruptListeners(this.onInterrupted);
            } // Let's get started, get the start time...


            pageScrollInstance.startTime = new Date().getTime(); // .. and calculate the end time (when we need to finish at last)

            pageScrollInstance.endTime = pageScrollInstance.startTime + pageScrollInstance.executionDuration;
            pageScrollInstance.timer = setInterval(function (instance) {
              // Take the current time
              var currentTime = new Date().getTime(); // Determine the new scroll position

              var newScrollPosition;
              var stopNow = false;

              if (instance.endTime <= currentTime) {
                // We're over the time already, so go the targetScrollPosition (aka destination)
                newScrollPosition = instance.targetScrollPosition;
                stopNow = true;
              } else {
                // Calculate the scroll position based on the current time using the easing function
                newScrollPosition = Math.round(instance.pageScrollOptions.easingLogic(currentTime - instance.startTime, instance.startScrollPosition, instance.distanceToScroll, instance.executionDuration));
              }

              if (_this5.config._logLevel >= 5 && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
                console.warn('Scroll Position: ' + newScrollPosition);
              } // Set the new scrollPosition to all scrollViews elements


              if (!instance.setScrollPosition(newScrollPosition)) {
                // Setting the new scrollTop/scrollLeft value failed for all ScrollViews
                // early stop the scroll animation to save resources
                stopNow = true;
              } // At the end do the internal stop maintenance and fire the pageScrollFinish event
              // (otherwise the event might arrive at "too early")


              if (stopNow) {
                _this5.stopInternal(false, instance);
              }
            }, this.config._interval, pageScrollInstance); // Register the instance as running one

            this.runningInstances.push(pageScrollInstance);
          }
        }, {
          key: "scroll",
          value: function scroll(options) {
            this.start(this.create(options));
          }
          /**
           * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
           */

        }, {
          key: "stopAll",
          value: function stopAll(namespace) {
            if (this.runningInstances.length > 0) {
              var stoppedSome = false;

              for (var i = 0; i < this.runningInstances.length; ++i) {
                var pageScrollInstance = this.runningInstances[i];

                if (!namespace || pageScrollInstance.pageScrollOptions.namespace === namespace) {
                  stoppedSome = true;
                  this.stopInternal(true, pageScrollInstance); // Decrease the counter, as we removed an item from the array we iterate over

                  i--;
                }
              }

              return stoppedSome;
            }

            return false;
          }
        }, {
          key: "stop",
          value: function stop(pageScrollInstance) {
            return this.stopInternal(true, pageScrollInstance);
          }
        }]);

        return PageScrollService;
      }();

      PageScrollService.ɵfac = function PageScrollService_Factory(t) {
        return new (t || PageScrollService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NGXPS_CONFIG));
      };

      PageScrollService.instanceCounter = 0;
      PageScrollService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function PageScrollService_Factory() {
          return new PageScrollService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(NGXPS_CONFIG));
        },
        token: PageScrollService,
        providedIn: "root"
      });

      PageScrollService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NGXPS_CONFIG]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageScrollService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NGXPS_CONFIG]
            }]
          }];
        }, null);
      })();

      var ɵ0$1 = {};

      var NgxPageScrollCoreModule = /*#__PURE__*/function () {
        function NgxPageScrollCoreModule() {
          _classCallCheck(this, NgxPageScrollCoreModule);
        }

        _createClass(NgxPageScrollCoreModule, null, [{
          key: "forRoot",
          value: function forRoot(config) {
            return {
              ngModule: NgxPageScrollCoreModule,
              providers: [PageScrollService, {
                provide: NGXPS_CONFIG,
                useValue: config
              }]
            };
          }
        }]);

        return NgxPageScrollCoreModule;
      }();

      NgxPageScrollCoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgxPageScrollCoreModule
      });
      NgxPageScrollCoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgxPageScrollCoreModule_Factory(t) {
          return new (t || NgxPageScrollCoreModule)();
        },
        providers: [PageScrollService, {
          provide: NGXPS_CONFIG,
          useValue: ɵ0$1
        }]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPageScrollCoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            providers: [PageScrollService, {
              provide: NGXPS_CONFIG,
              useValue: ɵ0$1
            }]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of ngx-page-scroll-core
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-page-scroll-core.js.map

      /***/

    },

    /***/
    "n3og":
    /*!*******************************************************************************!*\
      !*** ./node_modules/ngx-page-scroll/__ivy_ngcc__/fesm2015/ngx-page-scroll.js ***!
      \*******************************************************************************/

    /*! exports provided: NgxPageScrollDirective, NgxPageScrollModule */

    /***/
    function n3og(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxPageScrollDirective", function () {
        return NgxPageScrollDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxPageScrollModule", function () {
        return NgxPageScrollModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-page-scroll-core */
      "Zgu1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:disable:no-host-metadata-property directive-selector */


      var NgxPageScrollDirective = /*#__PURE__*/function () {
        function NgxPageScrollDirective(pageScrollService, router, document) {
          _classCallCheck(this, NgxPageScrollDirective);

          this.pageScrollService = pageScrollService;
          this.router = router;
          this.pageScrollAdjustHash = false;
          this.pageScrollFinish = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.document = document;
        }

        _createClass(NgxPageScrollDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            // Some inputs changed, reset the pageScrollInstance
            this.pageScrollInstance = undefined;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.pageScrollInstance) {
              this.pageScrollService.stop(this.pageScrollInstance);
            }
          }
        }, {
          key: "getPageScrollTarget",
          value: function getPageScrollTarget() {
            return this.pageScrollTarget || this.href || (this.fragment ? '#' + this.fragment : '');
          }
        }, {
          key: "generatePageScrollInstance",
          value: function generatePageScrollInstance() {
            if (this.pageScrollInstance === undefined || this.pageScrollInstance === null) {
              var options = {
                document: this.document,
                scrollTarget: this.getPageScrollTarget()
              };

              if (this.pageScroll) {
                options.namespace = this.pageScroll;
              }

              if (this.pageScrollHorizontal !== undefined && this.pageScrollHorizontal !== null) {
                options.verticalScrolling = !this.pageScrollHorizontal;
              }

              if (this.pageScrollOffset !== undefined && this.pageScrollOffset !== null) {
                options.scrollOffset = this.pageScrollOffset;
              }

              if (this.pageScrollInterruptible !== undefined && this.pageScrollInterruptible !== null) {
                options.interruptible = this.pageScrollInterruptible;
              }

              if (this.pageScrollInView !== undefined && this.pageScrollInView !== null) {
                options.scrollInView = this.pageScrollInView;
              }

              if (this.pageScrollEasing) {
                options.easingLogic = this.pageScrollEasing;
              }

              if (this.pageScrollDuration !== undefined && this.pageScrollDuration !== null) {
                options.duration = this.pageScrollDuration;
              }

              if (this.pageScrollSpeed !== undefined && this.pageScrollSpeed !== null) {
                options.speed = this.pageScrollSpeed;
              }

              if (this.pageScrollFinish) {
                options.scrollFinishListener = this.pageScrollFinish;
              }

              this.pageScrollInstance = this.pageScrollService.create(options);
            }

            return this.pageScrollInstance;
          }
        }, {
          key: "pushRouterState",
          value: function pushRouterState() {
            if (this.pageScrollAdjustHash && typeof this.pageScrollInstance.pageScrollOptions.scrollTarget === 'string' && this.pageScrollInstance.pageScrollOptions.scrollTarget.substr(0, 1) === '#') {
              // "Navigate" to the current route again and this time set the fragment/hash
              this.router.navigate([], {
                fragment: this.pageScrollInstance.pageScrollOptions.scrollTarget.substr(1),
                queryParamsHandling: 'preserve'
              });
            }
          }
        }, {
          key: "scroll",
          value: function scroll() {
            var pageScrollInstance = this.generatePageScrollInstance();
            this.pushRouterState();
            this.pageScrollService.start(pageScrollInstance);
          }
        }, {
          key: "handleClick",
          value: function handleClick(clickEvent) {
            var _this6 = this;

            if (this.routerLink && this.router !== null && this.router !== undefined) {
              var urlTree;

              if (typeof this.routerLink === 'string') {
                urlTree = this.router.parseUrl(this.routerLink);
              } else {
                urlTree = this.router.createUrlTree(this.routerLink);
              }

              if (!this.router.isActive(urlTree, true)) {
                // We need to navigate their first.
                // Navigation is handled by the routerLink directive so we only need to listen for route change
                this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (routerEvent) {
                  // We're only interested in successful navigations or when the navigation fails
                  return routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"] || routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"];
                }), // Consume only one event, automatically "unsubscribing" from the event stream afterwards
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (routerEvent) {
                  if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                    // use a timeout to start scrolling as soon as the stack is cleared
                    setTimeout(function () {
                      _this6.scroll();
                    }, 0);
                  }
                });
                return false; // to preventDefault()
              }
            }

            this.scroll();
            return false; // to preventDefault()
          }
        }]);

        return NgxPageScrollDirective;
      }();

      NgxPageScrollDirective.ɵfac = function NgxPageScrollDirective_Factory(t) {
        return new (t || NgxPageScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_1__["PageScrollService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
      };

      NgxPageScrollDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgxPageScrollDirective,
        selectors: [["", "pageScroll", ""]],
        hostBindings: function NgxPageScrollDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxPageScrollDirective_click_HostBindingHandler($event) {
              return ctx.handleClick($event);
            });
          }
        },
        inputs: {
          pageScrollAdjustHash: "pageScrollAdjustHash",
          routerLink: "routerLink",
          href: "href",
          fragment: "fragment",
          pageScrollTarget: "pageScrollTarget",
          pageScrollHorizontal: "pageScrollHorizontal",
          pageScrollOffset: "pageScrollOffset",
          pageScrollDuration: "pageScrollDuration",
          pageScrollSpeed: "pageScrollSpeed",
          pageScrollEasing: "pageScrollEasing",
          pageScrollInterruptible: "pageScrollInterruptible",
          pageScrollInView: "pageScrollInView",
          pageScroll: "pageScroll"
        },
        outputs: {
          pageScrollFinish: "pageScrollFinish"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      NgxPageScrollDirective.ctorParameters = function () {
        return [{
          type: ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_1__["PageScrollService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      };

      NgxPageScrollDirective.propDecorators = {
        routerLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        href: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fragment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageScrollTarget: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageScrollHorizontal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageScrollOffset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageScrollDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageScrollSpeed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageScrollEasing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageScrollInterruptible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageScrollInView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageScrollAdjustHash: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageScrollFinish: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPageScrollDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[pageScroll]',
            host: {
              '(click)': 'handleClick($event)'
            }
          }]
        }], function () {
          return [{
            type: ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_1__["PageScrollService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }];
        }, {
          pageScrollAdjustHash: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageScrollFinish: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          routerLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          href: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fragment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageScrollTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageScrollHorizontal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageScrollOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageScrollDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageScrollSpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageScrollEasing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageScrollInterruptible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageScrollInView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var NgxPageScrollModule = function NgxPageScrollModule() {
        _classCallCheck(this, NgxPageScrollModule);
      };

      NgxPageScrollModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgxPageScrollModule
      });
      NgxPageScrollModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgxPageScrollModule_Factory(t) {
          return new (t || NgxPageScrollModule)();
        },
        imports: [[ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_1__["NgxPageScrollCoreModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxPageScrollModule, {
          declarations: function declarations() {
            return [NgxPageScrollDirective];
          },
          imports: function imports() {
            return [ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_1__["NgxPageScrollCoreModule"]];
          },
          exports: function exports() {
            return [NgxPageScrollDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPageScrollModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [NgxPageScrollDirective],
            imports: [ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_1__["NgxPageScrollCoreModule"]],
            exports: [NgxPageScrollDirective]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of ngx-page-scroll
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-page-scroll.js.map

      /***/

    },

    /***/
    "vxW2":
    /*!***********************************************!*\
      !*** ./src/app/@containers/home/home.page.ts ***!
      \***********************************************/

    /*! exports provided: HomePage */

    /***/
    function vxW2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var _core_structs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/structs */
      "+drn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../@components/navigation/navigation.component */
      "YSEA");

      var HomePage = /*#__PURE__*/function () {
        function HomePage() {
          _classCallCheck(this, HomePage);

          this.path = _core_structs__WEBPACK_IMPORTED_MODULE_0__["Path"];
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomePage;
      }();

      HomePage.ɵfac = function HomePage_Factory(t) {
        return new (t || HomePage)();
      };

      HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HomePage,
        selectors: [["ng-component"]],
        decls: 2,
        vars: 0,
        consts: [[1, "min-w-full", "light"]],
        template: function HomePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "algae-navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "xHYw":
    /*!*********************************************************!*\
      !*** ./src/app/@containers/home/home-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: HomeRoutingModule */

    /***/
    function xHYw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
        return HomeRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_page_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page.route */
      "9yxd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [_home_page_route__WEBPACK_IMPORTED_MODULE_1__["HOME_ROUTE"]];

      var HomeRoutingModule = function HomeRoutingModule() {
        _classCallCheck(this, HomeRoutingModule);
      };

      HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: HomeRoutingModule
      });
      HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function HomeRoutingModule_Factory(t) {
          return new (t || HomeRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "xo3C":
    /*!*************************************************************!*\
      !*** ./src/app/@components/navigation/navigation.module.ts ***!
      \*************************************************************/

    /*! exports provided: NavigationModule */

    /***/
    function xo3C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationModule", function () {
        return NavigationModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-page-scroll */
      "n3og");
      /* harmony import */


      var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-page-scroll-core */
      "Zgu1");
      /* harmony import */


      var _navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./navigation.component */
      "YSEA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NavigationModule = function NavigationModule() {
        _classCallCheck(this, NavigationModule);
      };

      NavigationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: NavigationModule
      });
      NavigationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function NavigationModule_Factory(t) {
          return new (t || NavigationModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_2__["NgxPageScrollCoreModule"].forRoot({
          duration: 800
        }), ngx_page_scroll__WEBPACK_IMPORTED_MODULE_1__["NgxPageScrollModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NavigationModule, {
          declarations: [_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_2__["NgxPageScrollCoreModule"], ngx_page_scroll__WEBPACK_IMPORTED_MODULE_1__["NgxPageScrollModule"]],
          exports: [_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=containers-home-home-module-es5.js.map