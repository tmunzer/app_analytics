(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+2Ah":
    /*!************************************!*\
      !*** ./src/app/login/login-2FA.ts ***!
      \************************************/

    /*! exports provided: TwoFactorDialog */

    /***/
    function Ah(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TwoFactorDialog", function () {
        return TwoFactorDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var TwoFactorDialog = /*#__PURE__*/function () {
        function TwoFactorDialog(dialogRef) {
          _classCallCheck(this, TwoFactorDialog);

          this.dialogRef = dialogRef;
        }

        _createClass(TwoFactorDialog, [{
          key: "close2FA",
          value: function close2FA() {
            this.dialogRef.close(this.twoFactor);
          }
        }, {
          key: "cancel2FA",
          value: function cancel2FA() {
            this.dialogRef.close();
          }
        }]);

        return TwoFactorDialog;
      }();

      TwoFactorDialog.ɵfac = function TwoFactorDialog_Factory(t) {
        return new (t || TwoFactorDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
      };

      TwoFactorDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TwoFactorDialog,
        selectors: [["login-2fa"]],
        decls: 12,
        vars: 2,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["appearance", "outline"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange", "keydown.enter"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "cdkFocusInitial", "", "type", "submit", 3, "mat-dialog-close"]],
        template: function TwoFactorDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "2FA Code Required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TwoFactorDialog_Template_input_ngModelChange_6_listener($event) {
              return ctx.twoFactor = $event;
            })("keydown.enter", function TwoFactorDialog_Template_input_keydown_enter_6_listener() {
              return ctx.close2FA();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TwoFactorDialog_Template_button_click_8_listener() {
              return ctx.cancel2FA();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Verify");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.twoFactor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.twoFactor);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
        styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n    \n    \n    input[type=number][_ngcontent-%COMP%] {\n        -moz-appearance: textfield;\n    }"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TwoFactorDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'login-2fa',
            templateUrl: 'login-2fa.html'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }];
        }, null);
      })();
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
      /*! /Users/tmunzer/4_dev/Mist/app_analytics/src_angular/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3QeL":
    /*!******************************************!*\
      !*** ./src/app/common/pipe/wlan_pipe.ts ***!
      \******************************************/

    /*! exports provided: WlanPipe */

    /***/
    function QeL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WlanPipe", function () {
        return WlanPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var WlanPipe = /*#__PURE__*/function () {
        function WlanPipe() {
          _classCallCheck(this, WlanPipe);
        }

        _createClass(WlanPipe, [{
          key: "transform",
          value: function transform(wlan_id) {
            var wlans = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var result = "<unresolved>";
            wlans.forEach(function (wlan) {
              if (wlan.id == wlan_id) {
                result = wlan.name;
              }
            });
            return result;
          }
        }]);

        return WlanPipe;
      }();

      WlanPipe.ɵfac = function WlanPipe_Factory(t) {
        return new (t || WlanPipe)();
      };

      WlanPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "wlanname",
        type: WlanPipe,
        pure: true
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WlanPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'wlanname'
          }]
        }], null, null);
      })();
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
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "EFyh":
    /*!*******************************************!*\
      !*** ./src/app/services/login.service.ts ***!
      \*******************************************/

    /*! exports provided: LoginService */

    /***/
    function EFyh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var LoginService = /*#__PURE__*/function () {
        function LoginService() {
          _classCallCheck(this, LoginService);

          this.headersSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.cookiesSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.hostSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
          this.selfSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.orgIdSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
          this.siteIdSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
          this.orgModeSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.googleApiKey = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
          this.headers = this.headersSource.asObservable();
          this.host = this.hostSource.asObservable();
          this.cookies = this.cookiesSource.asObservable();
          this.self = this.selfSource.asObservable();
          this.org_id = this.orgIdSource.asObservable();
          this.site_id = this.siteIdSource.asObservable();
          this.orgMode = this.orgModeSource.asObservable();
          this.google_api_key = this.googleApiKey.asObservable();
        }

        _createClass(LoginService, [{
          key: "headersSet",
          value: function headersSet(data) {
            this.headersSource.next(data);
          }
        }, {
          key: "cookiesSet",
          value: function cookiesSet(data) {
            this.cookiesSource.next(data);
          }
        }, {
          key: "hostSet",
          value: function hostSet(data) {
            this.hostSource.next(data);
          }
        }, {
          key: "selfSet",
          value: function selfSet(data) {
            this.selfSource.next(data);
          }
        }, {
          key: "orgIdSet",
          value: function orgIdSet(data) {
            this.orgIdSource.next(data);
          }
        }, {
          key: "siteIdSet",
          value: function siteIdSet(data) {
            this.siteIdSource.next(data);
          }
        }, {
          key: "orgModeSet",
          value: function orgModeSet(data) {
            this.orgModeSource.next(data);
          }
        }, {
          key: "googleApiKeySet",
          value: function googleApiKeySet(data) {
            this.googleApiKey.next(data);
          }
        }]);

        return LoginService;
      }();

      LoginService.ɵfac = function LoginService_Factory(t) {
        return new (t || LoginService)();
      };

      LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoginService,
        factory: LoginService.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "IMNj":
    /*!**************************************!*\
      !*** ./src/app/org/org.component.ts ***!
      \**************************************/

    /*! exports provided: OrgComponent */

    /***/
    function IMNj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrgComponent", function () {
        return OrgComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _common_common_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../common/common-error */
      "Popb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/login.service */
      "EFyh");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/google-maps */
      "3sZV");

      function OrgComponent_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var org_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", org_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](org_r6.role);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](org_r6.name);
        }
      }

      function OrgComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
        }
      }

      function OrgComponent_mat_progress_bar_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 15);
        }
      }

      function OrgComponent_mat_card_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Please Select an Organization ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OrgComponent_mat_card_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You don't have access to any Site in this Organization. Please chose another Organization. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Only the Sites with \"Administrator\" authorization are listed. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OrgComponent_mat_card_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrgComponent_mat_card_16_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var site_r7 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.setSite(site_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrgComponent_mat_card_16_Template_div_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var site_r7 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.setSite(site_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "google-map", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "map-marker", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "map-info-window");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var site_r7 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", site_r7.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](site_r7.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("center", site_r7.latlng)("zoom", ctx_r5.map.zoom)("options", ctx_r5.map.options);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", site_r7.latlng);
        }
      }

      var OrgComponent = /*#__PURE__*/function () {
        function OrgComponent(_http, _loginService, _dialog, _router) {
          _classCallCheck(this, OrgComponent);

          this._http = _http;
          this._loginService = _loginService;
          this._dialog = _dialog;
          this._router = _router;
          this.headers = {};
          this.cookies = {};
          this.host = '';
          this.self = {};
          this.search = "";
          this.orgs = [];
          this.sites = [];
          this.orgMode = false;
          this.selected_org_obj = {
            id: "",
            name: ""
          };
          this.org_id = "";
          this.site_id = "";
          this.me = "";
          this.adminMode = false;
          this.map = {
            options: {
              scrollwheel: false,
              disableDefaultUI: true,
              draggable: false,
              draggableCursor: "pointer",
              clickableIcons: false
            },
            zoom: 12
          };
          this.claimDisabled = true;
          this.topBarLoading = false;
          this.noSiteToDisplay = false;
        }

        _createClass(OrgComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this._loginService.headers.subscribe(function (headers) {
              return _this.headers = headers;
            });

            this._loginService.cookies.subscribe(function (cookies) {
              return _this.cookies = cookies;
            });

            this._loginService.host.subscribe(function (host) {
              return _this.host = host;
            });

            this._loginService.self.subscribe(function (self) {
              return _this.self = self || {};
            });

            this._loginService.org_id.subscribe(function (org_id) {
              return _this.org_id = org_id;
            });

            this.me = this.self["email"] || null;
            this.displayOrgs();
          }
        }, {
          key: "displayOrgs",
          value: function displayOrgs() {
            var _this2 = this;

            var tmp_orgs = []; // roles: admin / write / read / helpdesk / none

            var allowed_roles = ["admin", "write", "read"]; // parsing all the orgs/sites from the privileges
            // only orgs with admin/write/installer roles are used

            if (this.self != {} && this.self["privileges"]) {
              this.self["privileges"].forEach(function (element) {
                if (allowed_roles.indexOf(element["role"]) > -1) {
                  if (element["scope"] == "org") {
                    if (tmp_orgs.indexOf(element["org_id"]) < 0) {
                      _this2.orgs.push({
                        id: element["org_id"],
                        name: element["name"],
                        role: element["role"],
                        scope: element["scope"],
                        site_ids: []
                      });

                      tmp_orgs.push(element["org_id"]);
                    }
                  } else if (element["scope"] == "site") {
                    if (tmp_orgs.indexOf(element["org_id"]) < 0) {
                      _this2.orgs.push({
                        id: element["org_id"],
                        name: element["org_name"],
                        role: element["role"],
                        scope: element["scope"],
                        site_ids: [element["site_id"]]
                      });

                      tmp_orgs.push(element["org_id"]);
                    } else {
                      _this2.addSiteToOrg(element);
                    }
                  }
                }
              });
              this.orgs = this.sortList(this.orgs, "name");
            } // if only one, using it by default


            if (!this.org_id && this.orgs.length == 1) {
              this.org_id = this.orgs[0]["org_id"];
            } // if back button used, retrieving previously selected org
            // or if only one org, loading it automatically


            if (this.org_id) {
              this.orgs.forEach(function (element) {
                if (element.id == _this2.org_id) {
                  _this2.selected_org_obj = element;

                  _this2.changeOrg();
                }
              });
            }
          }
        }, {
          key: "addSiteToOrg",
          value: function addSiteToOrg(element) {
            this.orgs.forEach(function (org) {
              if (org["org_id"] = element["org_id"]) {
                org["site_ids"].push(element["site_id"]);
              }
            });
          } // when the user selects a new org
          // disabling the admin mode
          // and loading the sites

        }, {
          key: "changeOrg",
          value: function changeOrg() {
            console.log(this.selected_org_obj);
            this.loadSites();
          } // loads the org sites

        }, {
          key: "loadSites",
          value: function loadSites() {
            var _this3 = this;

            this.org_id = this.selected_org_obj.id;
            this.topBarLoading = true;
            this.claimDisabled = true;
            this.sites = [];
            console.log(this.selected_org_obj);

            this._http.post('/api/sites/', {
              host: this.host,
              cookies: this.cookies,
              headers: this.headers,
              org_id: this.org_id,
              site_ids: this.selected_org_obj["site_ids"]
            }).subscribe({
              next: function next(data) {
                return _this3.parseSites(data);
              },
              error: function error(_error) {
                var message = "There was an error... ";

                if ("error" in _error) {
                  message += _error["error"]["message"];
                }

                _this3.topBarLoading = false;

                _this3.openError(message);
              }
            });
          } // parse the org sites from HTTP response

        }, {
          key: "parseSites",
          value: function parseSites(data) {
            if (data.sites.length > 0) {
              this.noSiteToDisplay = false;
              this.sites = this.sortList(data.sites, "name");
              this.claimDisabled = false;
            } else {
              this.noSiteToDisplay = true;
            }

            this.topBarLoading = false;
          } // ROUTING FUNCTION
          // used when user wants to claim devices to org

        }, {
          key: "setOrg",
          value: function setOrg() {
            this.orgMode = true;
            this.gotoDash();
          } // used when user wants to claim devices to site

        }, {
          key: "setSite",
          value: function setSite(site) {
            if (site != null) {
              this.site_id = site.id;
            } else {
              this.site_id = "";
            }

            this.orgMode = true;

            this._loginService.siteIdSet(this.site_id);

            this.gotoDash();
          } // publish variables and go to the dashboard

        }, {
          key: "gotoDash",
          value: function gotoDash() {
            this._loginService.orgModeSet(this.orgMode);

            this._loginService.orgIdSet(this.org_id);

            this._router.navigate(["/dashboard"]);
          } // COMMON

        }, {
          key: "sortList",
          value: function sortList(data, attribute) {
            return data.sort(function (a, b) {
              var nameA = a[attribute].toUpperCase(); // ignore upper and lowercase

              var nameB = b[attribute].toUpperCase(); // ignore upper and lowercase

              if (nameA < nameB) {
                return -1;
              }

              if (nameA > nameB) {
                return 1;
              }

              return 0;
            });
          } // DIALOG BOXES
          // ERROR

        }, {
          key: "openError",
          value: function openError(message) {
            var dialogRef = this._dialog.open(_common_common_error__WEBPACK_IMPORTED_MODULE_1__["ErrorDialog"], {
              data: message
            });
          }
        }]);

        return OrgComponent;
      }();

      OrgComponent.ɵfac = function OrgComponent_Factory(t) {
        return new (t || OrgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      OrgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrgComponent,
        selectors: [["app-org"]],
        decls: 17,
        vars: 8,
        consts: [[1, "card-outer"], ["fxLayout", "column", 1, "top-bar-container"], ["fxLayout", "row wrap", 1, "top-bar", "mat-elevation-z8"], ["appearance", "outline", 1, "list"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["style", "width: 100%; height: 4px; background-color: rgb(111 157 43);", 4, "ngIf"], ["mode", "indeterminate", "color", "accent", 4, "ngIf"], ["fxLayoutAlign", "center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center stretch", 4, "ngIf"], ["fxLayout", "row wrap"], ["class", "mat-elevation-z2", "fxLayout", "column", "fxLayoutAlign", "space-between stretch", "style", "cursor: pointer;margin: 10px; padding: 0px; width: 300px;", 4, "ngFor", "ngForOf"], [3, "value"], [2, "margin-right", "1em", "background-color", "lightgray", "border-radius", "14px", "padding", "5px", "font-size", "smaller"], [2, "width", "100%", "height", "4px", "background-color", "rgb(111 157 43)"], ["mode", "indeterminate", "color", "accent"], ["fxLayoutAlign", "center"], [2, "color", "#777"], ["fxLayout", "column", "fxLayoutAlign", "center stretch"], ["fxLayoutAlign", "center stretch", 2, "color", "#777", "margin", "2em auto"], ["fxLayoutAlign", "center stretch", 2, "color", "#777", "font-size", "small", "margin-bottom", "2em"], ["fxLayout", "column", "fxLayoutAlign", "space-between stretch", 1, "mat-elevation-z2", 2, "cursor", "pointer", "margin", "10px", "padding", "0px", "width", "300px"], [3, "click"], [2, "margin", "10px"], [2, "width", "100%"], [2, "margin", "0px"], ["height", "300px", "width", "300px", 3, "center", "zoom", "options"], [3, "position"]],
        template: function OrgComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Organization");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function OrgComponent_Template_mat_select_valueChange_6_listener($event) {
              return ctx.selected_org_obj = $event;
            })("selectionChange", function OrgComponent_Template_mat_select_selectionChange_6_listener() {
              return ctx.changeOrg();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select-trigger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OrgComponent_mat_option_9_Template, 5, 3, "mat-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OrgComponent_div_10_Template, 1, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrgComponent_mat_progress_bar_11_Template, 1, 0, "mat-progress-bar", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OrgComponent_mat_card_13_Template, 3, 0, "mat-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OrgComponent_mat_card_14_Template, 5, 0, "mat-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OrgComponent_mat_card_16_Template, 13, 6, "mat-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selected_org_obj);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selected_org_obj.name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orgs);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topBarLoading == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topBarLoading == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.org_id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noSiteToDisplay);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sites);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__["GoogleMap"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__["MapMarker"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__["MapInfoWindow"]],
        styles: [".card-outer[_ngcontent-%COMP%] {\n    background-color: unset;\n    max-width: 1900px;\n    margin: auto;\n}\n\n.top-bar-container[_ngcontent-%COMP%] {\n    margin: 1em 0;\n}\n\n.top-bar[_ngcontent-%COMP%] {\n    background-color: white;\n    border-radius: 5px 5px 0 0;\n}\n\n.list[_ngcontent-%COMP%] {\n    margin: 1.34375em 1em 0;\n}\n\n.loading[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff9c;\n    border-radius: 5px;\n    z-index: 1000;\n}\n\n.loading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: auto;\n    align-self: center;\n}\n\n.button-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 300px;\n    justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJvcmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLW91dGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICBtYXgtd2lkdGg6IDE5MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi50b3AtYmFyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxZW0gMDtcbn1cblxuLnRvcC1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xufVxuXG4ubGlzdCB7XG4gICAgbWFyZ2luOiAxLjM0Mzc1ZW0gMWVtIDA7XG59XG5cbi5sb2FkaW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5YztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLmxvYWRpbmcgZGl2IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrgComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-org',
            templateUrl: './org.component.html',
            styleUrls: ['./org.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "JyYV":
    /*!******************************************!*\
      !*** ./src/app/services/apps.service.ts ***!
      \******************************************/

    /*! exports provided: AppsService */

    /***/
    function JyYV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppsService", function () {
        return AppsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var AppsService = /*#__PURE__*/function () {
        function AppsService() {
          _classCallCheck(this, AppsService);

          this.appsSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
          this.apps = this.appsSource.asObservable();
        }

        _createClass(AppsService, [{
          key: "appsSet",
          value: function appsSet(data) {
            this.appsSource.next(data);
          }
        }]);

        return AppsService;
      }();

      AppsService.ɵfac = function AppsService_Factory(t) {
        return new (t || AppsService)();
      };

      AppsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AppsService,
        factory: AppsService.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "M4/w":
    /*!*******************************************!*\
      !*** ./src/app/services/wlans.service.ts ***!
      \*******************************************/

    /*! exports provided: WlansService */

    /***/
    function M4W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WlansService", function () {
        return WlansService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var WlansService = /*#__PURE__*/function () {
        function WlansService() {
          _classCallCheck(this, WlansService);

          this.wlansSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
          this.wlans = this.wlansSource.asObservable();
        }

        _createClass(WlansService, [{
          key: "wlansSet",
          value: function wlansSet(data) {
            this.wlansSource.next(data);
          }
        }]);

        return WlansService;
      }();

      WlansService.ɵfac = function WlansService_Factory(t) {
        return new (t || WlansService)();
      };

      WlansService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: WlansService,
        factory: WlansService.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WlansService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "NAjw":
    /*!*******************************************!*\
      !*** ./src/app/common/pipe/bytes_pipe.ts ***!
      \*******************************************/

    /*! exports provided: BytesPipe */

    /***/
    function NAjw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BytesPipe", function () {
        return BytesPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BytesPipe = /*#__PURE__*/function () {
        function BytesPipe() {
          _classCallCheck(this, BytesPipe);
        }

        _createClass(BytesPipe, [{
          key: "transform",
          value: function transform(size) {
            var multiplicator = ["B", "KB", "MB", "GB", "TB", "PB", "EB"];
            var m = 0;
            var result = "";

            while (size >= 1000) {
              size = size / 1000;
              m += 1;
            }

            result = size.toFixed(2) + " " + multiplicator[m];
            return result;
          }
        }]);

        return BytesPipe;
      }();

      BytesPipe.ɵfac = function BytesPipe_Factory(t) {
        return new (t || BytesPipe)();
      };

      BytesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "bytessize",
        type: BytesPipe,
        pure: true
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BytesPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'bytessize'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Popb":
    /*!****************************************!*\
      !*** ./src/app/common/common-error.ts ***!
      \****************************************/

    /*! exports provided: ErrorDialog */

    /***/
    function Popb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorDialog", function () {
        return ErrorDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var ErrorDialog = /*#__PURE__*/function () {
        function ErrorDialog(dialogRef, data) {
          _classCallCheck(this, ErrorDialog);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(ErrorDialog, [{
          key: "ok",
          value: function ok() {
            this.dialogRef.close();
          }
        }]);

        return ErrorDialog;
      }();

      ErrorDialog.ɵfac = function ErrorDialog_Factory(t) {
        return new (t || ErrorDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      ErrorDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ErrorDialog,
        selectors: [["common-error"]],
        decls: 8,
        vars: 1,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "fxLayout", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", "color", "accent", 3, "click"]],
        template: function ErrorDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Oops...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorDialog_Template_button_click_6_listener() {
              return ctx.ok();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ok");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data, "");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'common-error',
            templateUrl: 'common-error.html'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QX6l":
    /*!**************************************************!*\
      !*** ./src/app/dashboard/dashboard.component.ts ***!
      \**************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function QX6l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _common_common_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/common-error */
      "Popb");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/login.service */
      "EFyh");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _services_clients_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/clients.service */
      "yHwA");
      /* harmony import */


      var _services_apps_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/apps.service */
      "JyYV");
      /* harmony import */


      var _services_wlans_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/wlans.service */
      "M4/w");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular-material-components/datetime-picker */
      "n1FK");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var _src_app_dashboard_clients_clients_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @src/app/dashboard/clients/clients.component */
      "dGGL");
      /* harmony import */


      var _src_app_dashboard_apps_apps_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @src/app/dashboard/apps/apps.component */
      "lBvA");

      var _c0 = ["picker"];

      function DashboardComponent_span_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.clients.length);
        }
      }

      function DashboardComponent_span_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
        }
      }

      function DashboardComponent_span_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.apps.length);
        }
      }

      function DashboardComponent_span_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
        }
      }

      function DashboardComponent_app_dashboard_clients_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dashboard-clients");
        }
      }

      function DashboardComponent_app_dashboard_apps_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dashboard-apps");
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "selected": a0
        };
      };

      var moment = moment__WEBPACK_IMPORTED_MODULE_4__;

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(_http, _loginService, _dialog, _snackBar, _clientsService, _appsService, _wlansService, _router) {
          _classCallCheck(this, DashboardComponent);

          this._http = _http;
          this._loginService = _loginService;
          this._dialog = _dialog;
          this._snackBar = _snackBar;
          this._clientsService = _clientsService;
          this._appsService = _appsService;
          this._wlansService = _wlansService;
          this._router = _router;
          this.headers = {};
          this.cookies = {};
          this.host = '';
          this.self = {};
          this.orgs = [];
          this.sites = [];
          this.maps = [];
          this.org_id = "";
          this.site_id = "__any__";
          this.me = "";
          this.bandwidth = {
            keys: Array(),
            values: Array()
          };
          this.apps = [];
          this.clients = [];
          this.total_rx_string = "";
          this.total_tx_string = "";
          this.multiplicator = ["B", "KB", "MB", "GB", "TB", "PB", "EB"];
          this.wlans = [];
          this.min_start_date = moment().subtract(7, 'day');
          this.startDateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment().second(0).subtract(1, 'day'));
          this.max_end_date = moment();
          this.endDateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment().second(0)); // LOADINBG INDICATORS

          this.topBarLoading = false;
          this.chartLoading = false;
          this.appsLoading = false;
          this.clientsLoading = false;
          this.wlansLoading = false;
          this.wlansLoaded = false;
          this.table_to_display = "clients"; /////////////////////////
          // Line Chart

          this.lineChartLabels = [];
          this.lineChartData = [];
          this.lineChartLegend = false;
          this.lineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Site Bandwidth'
            }
          };
        } //////////////////////////////////////////////////////////////////////////////
        /////           INIT
        //////////////////////////////////////////////////////////////////////////////


        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.startDateControl.setValue(this.setMinutes(this.startDateControl.value));
            this.startDateControl.valueChanges.subscribe(function (value) {
              _this4.min_end_date = moment(value);
            });
            this.endDateControl.setValue(this.setMinutes(this.endDateControl.value));
            this.endDateControl.valueChanges.subscribe(function (value) {
              _this4.max_start_date = moment(value);
            });

            this._loginService.headers.subscribe(function (headers) {
              return _this4.headers = headers;
            });

            this._loginService.cookies.subscribe(function (cookies) {
              return _this4.cookies = cookies;
            });

            this._loginService.host.subscribe(function (host) {
              return _this4.host = host;
            });

            this._loginService.self.subscribe(function (self) {
              return _this4.self = self || {};
            });

            this._loginService.org_id.subscribe(function (org_id) {
              return _this4.org_id = org_id;
            });

            this._loginService.site_id.subscribe(function (site_id) {
              return _this4.site_id = site_id;
            });

            this.getSiteStats();
            this.getSiteClients();
            this.getSiteWlans();
          } //////////////////////////////////////////////////////////////////////////////
          /////           TIME MANAGEMENT
          //////////////////////////////////////////////////////////////////////////////

        }, {
          key: "setMinutes",
          value: function setMinutes(date) {
            var minutes = date.minute();
            if (minutes < 10) date.minute(0);else if (minutes < 20) date.minute(10);else if (minutes < 30) date.minute(20);else if (minutes < 40) date.minute(30);else if (minutes < 50) date.minute(40);else date.minute(50);
            return date;
          }
        }, {
          key: "getStart",
          value: function getStart() {
            return this.startDateControl.value.unix();
          }
        }, {
          key: "getEnd",
          value: function getEnd() {
            return this.endDateControl.value.unix();
          }
        }, {
          key: "refresh",
          value: function refresh() {
            console.log(this.startDateControl.value.unix());
            console.log(this.endDateControl.value.unix());
            this.getSiteStats();
            this.getSiteClients();
          } //////////////////////////////////////////////////////////////////////////////
          /////           LOAD SITE STATS
          //////////////////////////////////////////////////////////////////////////////

        }, {
          key: "processTxRx",
          value: function processTxRx(bytes_array) {
            var bytes = 0;
            var m = 0;
            var result = "";

            for (var i in bytes_array) {
              bytes = bytes + bytes_array[i];
            }

            while (bytes >= 1000) {
              bytes = bytes / 1000;
              m += 1;
            }

            result = bytes.toFixed(2) + " " + this.multiplicator[m];
            return result;
          }
        }, {
          key: "parseBandwidth",
          value: function parseBandwidth(data) {
            this.lineChartLabels = [];

            for (var j in data["rt"]) {
              this.lineChartLabels.push(new Date(data["rt"][j]).toLocaleTimeString());
            } //this.lineChartLabels = data["rt"];


            this.lineChartData = [{
              data: data["rx_bytes"],
              label: 'Rx',
              backgroundColor: 'rgba(0,149,163,0.2)',
              borderColor: 'rgba(0,149,163,1)',
              pointBackgroundColor: 'rgba(0,149,163,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(0,149,163,0.8)',
              fill: 'origin'
            }, {
              data: data["tx_bytes"],
              label: 'Tx',
              backgroundColor: 'rgba(132,176,53,0.2)',
              borderColor: 'rgba(132,176,53,1)',
              pointBackgroundColor: 'rgba(132,176,53,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(132,176,53,0.8)',
              fill: 'origin'
            }];
            this.total_tx_string = this.processTxRx(data["tx_bytes"]);
            this.total_rx_string = this.processTxRx(data["rx_bytes"]);
          }
        }, {
          key: "getSiteStats",
          value: function getSiteStats() {
            var _this5 = this;

            var body = null;
            body = {
              host: this.host,
              cookies: this.cookies,
              headers: this.headers,
              site_id: this.site_id,
              start: this.getStart(),
              end: this.getEnd()
            };

            if (body) {
              this.chartLoading = true;

              this._http.post('/api/sites/stats/', body).subscribe({
                next: function next(data) {
                  _this5.parseBandwidth(data);

                  _this5._appsService.appsSet(data["top-app-by-bytes"]);

                  _this5.apps = data["top-app-by-bytes"];
                  _this5.chartLoading = false;
                },
                error: function error(_error2) {
                  _this5.chartLoading = false;
                  var message = "There was an error... ";

                  if ("error" in _error2) {
                    message += _error2["error"]["message"];
                  }

                  _this5.openError(message);
                }
              });
            }
          } //////////////////////////////////////////////////////////////////////////////
          /////           LOAD CLIENTS STATS
          //////////////////////////////////////////////////////////////////////////////

        }, {
          key: "parseSiteClients",
          value: function parseSiteClients(data) {
            this.clients = data["clients"];
            this.clients.forEach(function (client) {
              client.total_bytes = client.rx_bytes + client.tx_bytes;
            });

            this._clientsService.clientsSet(this.clients);
          }
        }, {
          key: "getSiteClients",
          value: function getSiteClients() {
            var _this6 = this;

            var body = null;
            body = {
              host: this.host,
              cookies: this.cookies,
              headers: this.headers,
              site_id: this.site_id
            };

            if (body) {
              this.clientsLoading = true;

              this._http.post('/api/sites/clients/', body).subscribe({
                next: function next(data) {
                  _this6.parseSiteClients(data);

                  _this6.clientsLoading = false;
                },
                error: function error(_error3) {
                  _this6.clientsLoading = false;
                  var message = "There was an error... ";

                  if ("error" in _error3) {
                    message += _error3["error"]["message"];
                  }

                  _this6.openError(message);
                }
              });
            }
          }
        }, {
          key: "getSiteWlans",
          value: function getSiteWlans() {
            var _this7 = this;

            var body = null;
            this.wlansLoaded = false;
            body = {
              host: this.host,
              cookies: this.cookies,
              headers: this.headers,
              site_id: this.site_id
            };

            if (body) {
              this.wlansLoading = true;

              this._http.post('/api/sites/wlans/', body).subscribe({
                next: function next(data) {
                  _this7._wlansService.wlansSet(data["wlans"]);

                  _this7._clientsService.displaySet(true);

                  _this7.wlansLoaded = true;
                  _this7.wlansLoading = false;
                },
                error: function error(_error4) {
                  _this7.wlansLoading = false;
                  var message = "There was an error... ";

                  if ("error" in _error4) {
                    message += _error4["error"]["message"];
                  }

                  _this7.openError(message);
                }
              });
            }
          } //////////////////////////////////////////////////////////////////////////////
          /////           COMMON
          //////////////////////////////////////////////////////////////////////////////

        }, {
          key: "sortList",
          value: function sortList(data, attribute) {
            return data.sort(function (a, b) {
              var nameA = a[attribute].toUpperCase(); // ignore upper and lowercase

              var nameB = b[attribute].toUpperCase(); // ignore upper and lowercase

              if (nameA < nameB) {
                return -1;
              }

              if (nameA > nameB) {
                return 1;
              }

              return 0;
            });
          }
        }, {
          key: "back",
          value: function back() {
            this._router.navigateByUrl("/select");
          } //////////////////////////////////////////////////////////////////////////////
          /////           DIALOG BOXES
          //////////////////////////////////////////////////////////////////////////////
          // ERROR

        }, {
          key: "openError",
          value: function openError(message) {
            var dialogRef = this._dialog.open(_common_common_error__WEBPACK_IMPORTED_MODULE_3__["ErrorDialog"], {
              data: message
            });
          } // SNACK BAR

        }, {
          key: "openSnackBar",
          value: function openSnackBar(message, action) {
            this._snackBar.open(message, action, {
              duration: 5000,
              horizontalPosition: "center",
              verticalPosition: "top"
            });
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_clients_service__WEBPACK_IMPORTED_MODULE_9__["ClientsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apps_service__WEBPACK_IMPORTED_MODULE_10__["AppsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wlans_service__WEBPACK_IMPORTED_MODULE_11__["WlansService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]));
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        viewQuery: function DashboardComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.picker = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 54,
        vars: 28,
        consts: [["mat-raised-button", "", "color", "primary", 2, "position", "absolute", "top", "1em", "right", "1em", "margin", "0", 3, "click"], ["fxLayout", "row", 2, "height", "100%"], ["fxLayout", "column", 2, "width", "100%"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxLayout", "column"], [2, "margin", "0 1em"], ["matInput", "", "placeholder", "Start date", 3, "ngxMatDatetimePicker", "min", "max", "formControl"], ["matSuffix", "", 3, "for"], ["color", "accent", "stepMinute", "10"], ["start_picker", ""], ["matInput", "", "placeholder", "End date", 3, "ngxMatDatetimePicker", "min", "max", "formControl"], ["end_picker", ""], ["mat-raised-button", "", "color", "accent", 3, "click"], ["fxLayout", "row"], [1, "info", 2, "border-color", "rgba(0,149,163,1)"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "color", "rgba(0,149,163,1)"], [1, "info", 2, "border-color", "rgba(132,176,53,1)"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "color", "rgba(132,176,53,1)"], [1, "info", "clickable", 3, "ngClass", "click"], [1, "material-icons", 2, "font-size", "20px"], [4, "ngIf"], [1, "dashboard-content", "chart", 2, "height", "12em", "width", "100%", "position", "relative", "display", "block"], ["baseChart", "", "chartType", "line", 2, "height", "100%", 3, "datasets", "labels", "options", "legend"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_0_listener() {
              return ctx.back();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back to Sites");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-datepicker-toggle", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ngx-mat-datetime-picker", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-datepicker-toggle", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ngx-mat-datetime-picker", 9, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_17_listener() {
              return ctx.refresh();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Refresh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-title", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Total Rx");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-title", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Total Tx");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_mat_card_click_31_listener() {
              return ctx.table_to_display = "clients";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-title", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "# of Clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "loupe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DashboardComponent_span_38_Template, 2, 1, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DashboardComponent_span_39_Template, 1, 0, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_mat_card_click_40_listener() {
              return ctx.table_to_display = "apps";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card-title", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "# of Apps");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "loupe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, DashboardComponent_span_47_Template, 2, 1, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, DashboardComponent_span_48_Template, 1, 0, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-card", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "canvas", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, DashboardComponent_app_dashboard_clients_52_Template, 1, 0, "app-dashboard-clients", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, DashboardComponent_app_dashboard_apps_53_Template, 1, 0, "app-dashboard-apps", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxMatDatetimePicker", _r0)("min", ctx.min_start_date)("max", ctx.max_start_date)("formControl", ctx.startDateControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxMatDatetimePicker", _r1)("min", ctx.min_end_date)("max", ctx.max_end_date)("formControl", ctx.endDateControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.total_rx_string);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.total_tx_string);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c1, ctx.table_to_display == "clients"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clients);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.clients);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c1, ctx.table_to_display == "apps"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apps);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.apps);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("legend", ctx.lineChartLegend);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.table_to_display == "clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.table_to_display == "apps");
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_17__["NgxMatDatetimeInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatSuffix"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_17__["NgxMatDatetimePicker"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__["DefaultClassDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], ng2_charts__WEBPACK_IMPORTED_MODULE_23__["BaseChartDirective"], _src_app_dashboard_clients_clients_component__WEBPACK_IMPORTED_MODULE_24__["ClientsComponent"], _src_app_dashboard_apps_apps_component__WEBPACK_IMPORTED_MODULE_25__["AppsComponent"]],
        styles: [".loading[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff9c;\n    border-radius: 5px;\n    z-index: 1000;\n}\n\n.loading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: auto;\n    align-self: center;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n    color: gray;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover {\n    color: black;\n}\n\nmat-card[_ngcontent-%COMP%] {\n    margin: 1em;\n    border: 1px solid lightgray;\n}\n\nbutton[_ngcontent-%COMP%] {\n    margin: 1em;\n}\n\n\n\n.info[_ngcontent-%COMP%] {\n    height: 4em;\n    width: 15em;\n}\n\n.info.clickable[_ngcontent-%COMP%] {\n    cursor: pointer;\n    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n    transition: all 0.2s ease-in-out;\n}\n\n.info.clickable[_ngcontent-%COMP%]:hover {\n    box-shadow: rgb(50 50 93 / 25%) 0px 2px 3px -2px inset, rgb(0 0 0 / 30%) 0px 1px 2px -1px inset;\n    transition: all 0.2s ease-in-out;\n}\n\n.info.clickable.selected[_ngcontent-%COMP%] {\n    color: #eee;\n    background-color: #999;\n    transition: all 0.2s ease-in-out;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\n}\n\n\n\n.table-parent-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    height: calc(100vh - 450px);\n    padding: 0;\n}\n\n.table-container[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: scroll;\n}\n\ntable[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\ntr.mat-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\n    height: 30px;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n    font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBR0EsVUFBVTs7QUFFVjtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUhBQWlIO0lBQ2pILGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLCtGQUErRjtJQUMvRixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQywwR0FBMEc7QUFDOUc7O0FBR0EsVUFBVTs7QUFFVjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOWM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG5cbi5sb2FkaW5nIGRpdiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnRvb2x0aXAge1xuICAgIGNvbG9yOiBncmF5O1xufVxuXG4udG9vbHRpcDpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5tYXQtY2FyZCB7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuXG5idXR0b24ge1xuICAgIG1hcmdpbjogMWVtO1xufVxuXG5cbi8qIENBUkRTICovXG5cbi5pbmZvIHtcbiAgICBoZWlnaHQ6IDRlbTtcbiAgICB3aWR0aDogMTVlbTtcbn1cblxuLmluZm8uY2xpY2thYmxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggLTFweCByZ2IoMCAwIDAgLyAyMCUpLCAwcHggMXB4IDFweCAwcHggcmdiKDAgMCAwIC8gMTQlKSwgMHB4IDFweCAzcHggMHB4IHJnYigwIDAgMCAvIDEyJSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5pbmZvLmNsaWNrYWJsZTpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogcmdiKDUwIDUwIDkzIC8gMjUlKSAwcHggMnB4IDNweCAtMnB4IGluc2V0LCByZ2IoMCAwIDAgLyAzMCUpIDBweCAxcHggMnB4IC0xcHggaW5zZXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5pbmZvLmNsaWNrYWJsZS5zZWxlY3RlZCB7XG4gICAgY29sb3I6ICNlZWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAzMHB4IDYwcHggLTEycHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMThweCAzNnB4IC0xOHB4IGluc2V0O1xufVxuXG5cbi8qIFRBQkxFICovXG5cbi50YWJsZS1wYXJlbnQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDUwcHgpO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxudHIubWF0LXJvdyxcbnRyLm1hdC1mb290ZXItcm93IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5tYXQtY2VsbCB7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbn0iXX0= */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }, {
            type: _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]
          }, {
            type: _services_clients_service__WEBPACK_IMPORTED_MODULE_9__["ClientsService"]
          }, {
            type: _services_apps_service__WEBPACK_IMPORTED_MODULE_10__["AppsService"]
          }, {
            type: _services_wlans_service__WEBPACK_IMPORTED_MODULE_11__["WlansService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
          }];
        }, {
          picker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['picker']
          }],
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Mist App Analytics';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 5,
        vars: 0,
        consts: [["fxLayout", "row", "fxLayoutAlign", "start center", 2, "background-color", "rgb(236 236 236)", "color", "gray"], ["height", "100%", "alt", "Mist Logo", "src", "data:image/png;base64,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"], [2, "margin-left", "1em", "font-weight", "lighter"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mist App Analytics");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */", "[_nghost-%COMP%] {\n        font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-size: 14px;\n        color: #333;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n    \n    h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n        margin: 8px 0;\n    }\n    \n    p[_ngcontent-%COMP%] {\n        margin: 0;\n    }\n    \n    .spacer[_ngcontent-%COMP%] {\n        flex: 1;\n    }\n    \n    .toolbar[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        height: 40px;\n        display: flex;\n        align-items: center;\n        background-color: #0e62ad;\n        \n        color: white;\n        font-weight: 600;\n    }\n    \n    .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        margin: 0 16px;\n    }\n    \n    .content[_ngcontent-%COMP%] {\n        display: flex;\n        margin: 82px auto 32px;\n        padding: 0 16px;\n        max-width: 960px;\n        flex-direction: column;\n        align-items: center;\n    }\n    \n    svg.material-icons[_ngcontent-%COMP%] {\n        height: 24px;\n        width: auto;\n    }\n    \n    svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n        margin-right: 8px;\n    }\n    \n    .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n        fill: #888;\n    }\n    \n    .card-container[_ngcontent-%COMP%] {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        margin-top: 16px;\n    }\n    \n    .card[_ngcontent-%COMP%] {\n        border-radius: 4px;\n        border: 1px solid #eee;\n        background-color: #fafafa;\n        height: 40px;\n        width: 200px;\n        margin: 0 8px 16px;\n        padding: 16px;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        transition: all 0.2s ease-in-out;\n        line-height: 24px;\n    }\n    \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n        margin-right: 0;\n    }\n    \n    .card.card-small[_ngcontent-%COMP%] {\n        height: 16px;\n        width: 168px;\n    }\n    \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n        cursor: pointer;\n    }\n    \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n        transform: translateY(-3px);\n        box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n    }\n    \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n        fill: rgb(105, 103, 103);\n    }\n    \n    .card.highlight-card[_ngcontent-%COMP%] {\n        background-color: #1976d2;\n        color: white;\n        font-weight: 600;\n        border: none;\n        width: auto;\n        min-width: 30%;\n        position: relative;\n    }\n    \n    .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-left: 60px;\n    }\n    \n    svg#rocket[_ngcontent-%COMP%] {\n        width: 80px;\n        position: absolute;\n        left: -10px;\n        top: -24px;\n    }\n    \n    svg#rocket-smoke[_ngcontent-%COMP%] {\n        height: calc(100vh - 95px);\n        position: absolute;\n        top: 10px;\n        right: 180px;\n        z-index: -10;\n    }\n    \n    a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n        color: #1976d2;\n        text-decoration: none;\n    }\n    \n    a[_ngcontent-%COMP%]:hover {\n        color: #125699;\n    }\n    \n    .terminal[_ngcontent-%COMP%] {\n        position: relative;\n        width: 80%;\n        max-width: 600px;\n        border-radius: 6px;\n        padding-top: 45px;\n        margin-top: 8px;\n        overflow: hidden;\n        background-color: rgb(15, 15, 16);\n    }\n    \n    .terminal[_ngcontent-%COMP%]::before {\n        content: \"\\2022 \\2022 \\2022\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 4px;\n        background: rgb(58, 58, 58);\n        color: #c2c3c4;\n        width: 100%;\n        font-size: 2rem;\n        line-height: 0;\n        padding: 14px 0;\n        text-indent: 4px;\n    }\n    \n    .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n        font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n        color: white;\n        padding: 0 1rem 1rem;\n        margin: 0;\n    }\n    \n    .circle-link[_ngcontent-%COMP%] {\n        height: 40px;\n        width: 40px;\n        border-radius: 40px;\n        margin: 8px;\n        background-color: white;\n        border: 1px solid #eeeeee;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n        transition: 1s ease-out;\n    }\n    \n    .circle-link[_ngcontent-%COMP%]:hover {\n        transform: translateY(-0.25rem);\n        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n    }\n    \n    footer[_ngcontent-%COMP%] {\n        margin-top: 8px;\n        display: flex;\n        align-items: center;\n        line-height: 20px;\n    }\n    \n    footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n    }\n    \n    .github-star-badge[_ngcontent-%COMP%] {\n        color: #24292e;\n        display: flex;\n        align-items: center;\n        font-size: 12px;\n        padding: 3px 10px;\n        border: 1px solid rgba(27, 31, 35, .2);\n        border-radius: 3px;\n        background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n        margin-left: 4px;\n        font-weight: 600;\n        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n    }\n    \n    .github-star-badge[_ngcontent-%COMP%]:hover {\n        background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n        border-color: rgba(27, 31, 35, .35);\n        background-position: -.5em;\n    }\n    \n    .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n        height: 16px;\n        width: 16px;\n        margin-right: 4px;\n    }\n    \n    svg#clouds[_ngcontent-%COMP%] {\n        position: fixed;\n        bottom: -160px;\n        left: -230px;\n        z-index: -10;\n        width: 1920px;\n    }\n    \n    \n    @media screen and (max-width: 767px) {\n        .card-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n            width: 100%;\n        }\n        .card[_ngcontent-%COMP%]:not(.highlight-card) {\n            height: 16px;\n            margin: 8px 0;\n        }\n        .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n            margin-left: 72px;\n        }\n        svg#rocket-smoke[_ngcontent-%COMP%] {\n            right: 120px;\n            transform: rotate(-5deg);\n        }\n    }\n    \n    @media screen and (max-width: 575px) {\n        svg#rocket-smoke[_ngcontent-%COMP%] {\n            display: none;\n            visibility: hidden;\n        }\n    }\n    \n    footer[_ngcontent-%COMP%] {\n        position: absolute;\n        bottom: 0px;\n        right: 0px\n    }"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/google-maps */
      "3sZV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @src/app/common/common-pipes */
      "sIjS");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular-material-components/datetime-picker */
      "n1FK");
      /* harmony import */


      var _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular-material-components/moment-adapter */
      "WU52");
      /* harmony import */


      var _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @src/app/app-routing.module */
      "vY5A");
      /* harmony import */


      var _src_app_app_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @src/app/app.component */
      "Sy1n");
      /* harmony import */


      var _src_app_login_login_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @src/app/login/login.component */
      "vtpD");
      /* harmony import */


      var _src_app_login_login_2FA__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @src/app/login/login-2FA */
      "+2Ah");
      /* harmony import */


      var _src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @src/app/dashboard/dashboard.component */
      "QX6l");
      /* harmony import */


      var _src_app_dashboard_clients_clients_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @src/app/dashboard/clients/clients.component */
      "dGGL");
      /* harmony import */


      var _src_app_dashboard_apps_apps_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @src/app/dashboard/apps/apps.component */
      "lBvA");
      /* harmony import */


      var _src_app_common_common_error__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @src/app/common/common-error */
      "Popb");
      /* harmony import */


      var _src_app_common_common_warning__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @src/app/common/common-warning */
      "auAq");
      /* harmony import */


      var _src_app_org_org_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @src/app/org/org.component */
      "IMNj");
      /* harmony import */


      var _src_app_common_pipe_bytes_pipe__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @src/app/common/pipe/bytes_pipe */
      "NAjw");
      /* harmony import */


      var _src_app_common_pipe_wlan_pipe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! @src/app/common/pipe/wlan_pipe */
      "3QeL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! @angular-material-extensions/google-maps-autocomplete */
      "BhjI");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppModule = // Diagnostic only: inspect router configuration
      function AppModule(router) {
        _classCallCheck(this, AppModule);

        // Use a custom replacer to display function names in the route configs
        var replacer = function replacer(key, value) {
          return typeof value === 'function' ? value.name : value;
        };
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_49__["Router"]));
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_35__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
          useValue: {
            color: 'accent'
          }
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_34__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_31__["ChartsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientJsonpModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbModule"], _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_47__["MatGoogleMapsAutocompleteModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_32__["NgxMatDatetimePickerModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_32__["NgxMatTimepickerModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_32__["NgxMatNativeDateModule"], _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_33__["NgxMatMomentModule"], _agm_core__WEBPACK_IMPORTED_MODULE_48__["AgmCoreModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_35__["AppComponent"], _src_app_login_login_component__WEBPACK_IMPORTED_MODULE_36__["LoginComponent"], _src_app_login_login_2FA__WEBPACK_IMPORTED_MODULE_37__["TwoFactorDialog"], _src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_38__["DashboardComponent"], _src_app_dashboard_clients_clients_component__WEBPACK_IMPORTED_MODULE_39__["ClientsComponent"], _src_app_dashboard_apps_apps_component__WEBPACK_IMPORTED_MODULE_40__["AppsComponent"], _src_app_common_common_error__WEBPACK_IMPORTED_MODULE_41__["ErrorDialog"], _src_app_common_common_warning__WEBPACK_IMPORTED_MODULE_42__["WarningDialog"], _src_app_common_pipe_bytes_pipe__WEBPACK_IMPORTED_MODULE_44__["BytesPipe"], _src_app_common_pipe_wlan_pipe__WEBPACK_IMPORTED_MODULE_45__["WlanPipe"], _src_app_org_org_component__WEBPACK_IMPORTED_MODULE_43__["OrgComponent"], _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_30__["StartsWithPipe"], _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_30__["MapToArrayPipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_34__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_31__["ChartsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientJsonpModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbModule"], _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_47__["MatGoogleMapsAutocompleteModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_32__["NgxMatDatetimePickerModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_32__["NgxMatTimepickerModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_32__["NgxMatNativeDateModule"], _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_33__["NgxMatMomentModule"], _agm_core__WEBPACK_IMPORTED_MODULE_48__["AgmCoreModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_35__["AppComponent"], _src_app_login_login_component__WEBPACK_IMPORTED_MODULE_36__["LoginComponent"], _src_app_login_login_2FA__WEBPACK_IMPORTED_MODULE_37__["TwoFactorDialog"], _src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_38__["DashboardComponent"], _src_app_dashboard_clients_clients_component__WEBPACK_IMPORTED_MODULE_39__["ClientsComponent"], _src_app_dashboard_apps_apps_component__WEBPACK_IMPORTED_MODULE_40__["AppsComponent"], _src_app_common_common_error__WEBPACK_IMPORTED_MODULE_41__["ErrorDialog"], _src_app_common_common_warning__WEBPACK_IMPORTED_MODULE_42__["WarningDialog"], _src_app_common_pipe_bytes_pipe__WEBPACK_IMPORTED_MODULE_44__["BytesPipe"], _src_app_common_pipe_wlan_pipe__WEBPACK_IMPORTED_MODULE_45__["WlanPipe"], _src_app_org_org_component__WEBPACK_IMPORTED_MODULE_43__["OrgComponent"], _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_30__["StartsWithPipe"], _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_30__["MapToArrayPipe"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_34__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_31__["ChartsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientJsonpModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbModule"], _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_47__["MatGoogleMapsAutocompleteModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_32__["NgxMatDatetimePickerModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_32__["NgxMatTimepickerModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_32__["NgxMatNativeDateModule"], _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_33__["NgxMatMomentModule"], _agm_core__WEBPACK_IMPORTED_MODULE_48__["AgmCoreModule"].forRoot()],
            providers: [{
              provide: _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
              useValue: {
                color: 'accent'
              }
            }],
            bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_35__["AppComponent"]]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_49__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "auAq":
    /*!******************************************!*\
      !*** ./src/app/common/common-warning.ts ***!
      \******************************************/

    /*! exports provided: WarningDialog */

    /***/
    function auAq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WarningDialog", function () {
        return WarningDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function WarningDialog_li_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r2.reason);
        }
      }

      function WarningDialog_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Warning:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Changes may have impact on existing users, especially for users using PSK without VLAN. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var WarningDialog = /*#__PURE__*/function () {
        function WarningDialog(dialogRef, data) {
          _classCallCheck(this, WarningDialog);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(WarningDialog, [{
          key: "ok",
          value: function ok() {
            this.dialogRef.close(true);
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }]);

        return WarningDialog;
      }();

      WarningDialog.ɵfac = function WarningDialog_Factory(t) {
        return new (t || WarningDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      WarningDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WarningDialog,
        selectors: [["common-warning"]],
        decls: 16,
        vars: 3,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [2, "margin", "2em 0em 0", "font-weight", "bold"], [2, "list-style", "none", "padding", "0"], [4, "ngFor", "ngForOf"], ["fxLayout", "column", "style", "color: red;justify-content: center;margin: 2em 0 0;", 4, "ngIf"], ["mat-dialog-actions", "", "fxLayout", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", 3, "click"], ["mat-button", "", "color", "accent", 3, "click"], ["fxLayout", "column", 2, "color", "red", "justify-content", "center", "margin", "2em 0 0"], [2, "font-weight", "bold", "margin", "auto"], [2, "margin", "auto"]],
        template: function WarningDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Be careful");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Details:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WarningDialog_li_9_Template, 2, 1, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WarningDialog_div_10_Template, 5, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WarningDialog_Template_button_click_12_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "I Don't Care");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WarningDialog_Template_button_click_14_listener() {
              return ctx.ok();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Fix It");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.text, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.vlan_check);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.bigWarning == true);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarningDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'common-warning',
            templateUrl: 'common-warning.html'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "dGGL":
    /*!********************************************************!*\
      !*** ./src/app/dashboard/clients/clients.component.ts ***!
      \********************************************************/

    /*! exports provided: ClientsComponent */

    /***/
    function dGGL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientsComponent", function () {
        return ClientsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _services_clients_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/clients.service */
      "yHwA");
      /* harmony import */


      var _services_wlans_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/wlans.service */
      "M4/w");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _src_app_common_pipe_wlan_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @src/app/common/pipe/wlan_pipe */
      "3QeL");
      /* harmony import */


      var _src_app_common_pipe_bytes_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @src/app/common/pipe/bytes_pipe */
      "NAjw");

      function ClientsComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientsComponent_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.filter = "";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientsComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SSID ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientsComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "wlanname");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r22 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r22.wlan_id, ctx_r3.wlans), " ");
        }
      }

      function ClientsComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MAC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientsComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r23.mac, " ");
        }
      }

      function ClientsComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " HOSTNAME ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientsComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r24.hostname, " ");
        }
      }

      function ClientsComponent_th_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " USERNAME ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientsComponent_td_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r25.username, " ");
        }
      }

      function ClientsComponent_th_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " IP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientsComponent_td_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r26.ip, " ");
        }
      }

      function ClientsComponent_th_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " RX BYTES ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientsComponent_td_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "bytessize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r27.rx_bytes), " ");
        }
      }

      function ClientsComponent_th_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " TX BYTES ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientsComponent_td_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "bytessize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r28.tx_bytes), " ");
        }
      }

      function ClientsComponent_th_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " TOTAL BYTES ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientsComponent_td_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "bytessize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r29.total_bytes), " ");
        }
      }

      function ClientsComponent_tr_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 30);
        }
      }

      function ClientsComponent_tr_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 31);
        }
      }

      var ClientsComponent = /*#__PURE__*/function () {
        function ClientsComponent(_clientsService, _wlanService, _liveAnnouncer) {
          _classCallCheck(this, ClientsComponent);

          this._clientsService = _clientsService;
          this._wlanService = _wlanService;
          this._liveAnnouncer = _liveAnnouncer; /////////////////////////
          // table

          this.displayedColumns = ['ssid', 'mac', 'hostname', 'username', 'ip', 'rx_bytes', 'tx_bytes', 'total_bytes'];
          this.clientsDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
          this.clientsDisplayed = [];
          this.pageIndex = 0;
          this.pageSize = 25;
          this.pageLength = 0;
          this.pageSizeOptions = [5, 25, 50];
          this.clients = [];
          this.wlans = [];
          this.display = false;
          this.filter = "";
        } //////////////////////////////////////////////////////////////////////////////
        /////           INIT
        //////////////////////////////////////////////////////////////////////////////


        _createClass(ClientsComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this8 = this;

            this._clientsService.clients.subscribe(function (clients) {
              _this8.clients = clients;

              _this8.displayTable();
            });

            this._clientsService.display.subscribe(function (display) {
              _this8.display = display;

              _this8.displayTable();
            });

            this._wlanService.wlans.subscribe(function (wlans) {
              return _this8.wlans = wlans;
            });
          }
        }, {
          key: "displayTable",
          value: function displayTable() {
            if (this.display) {
              this.clientsDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.clients);
              this.clientsDataSource.sort = this.sort;
            }
          } //////////////////////////////////////////////////////////////////////////////
          /////           COMMON
          //////////////////////////////////////////////////////////////////////////////

        }, {
          key: "sortList",
          value: function sortList(data, attribute) {
            return data.sort(function (a, b) {
              var nameA = a[attribute].toUpperCase(); // ignore upper and lowercase

              var nameB = b[attribute].toUpperCase(); // ignore upper and lowercase

              if (nameA < nameB) {
                return -1;
              }

              if (nameA > nameB) {
                return 1;
              }

              return 0;
            });
          }
        }, {
          key: "announceSortChange",
          value: function announceSortChange(sortState) {
            // This example uses English messages. If your application supports
            // multiple language, you would internationalize these strings.
            // Furthermore, you can customize the message to add additional
            // details about the values being sorted.
            if (sortState.direction) {
              this._liveAnnouncer.announce("Sorted ".concat(sortState.direction, "ending"));
            } else {
              this._liveAnnouncer.announce('Sorting cleared');
            }
          }
        }]);

        return ClientsComponent;
      }();

      ClientsComponent.ɵfac = function ClientsComponent_Factory(t) {
        return new (t || ClientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_clients_service__WEBPACK_IMPORTED_MODULE_4__["ClientsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wlans_service__WEBPACK_IMPORTED_MODULE_5__["WlansService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"]));
      };

      ClientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ClientsComponent,
        selectors: [["app-dashboard-clients"]],
        viewQuery: function ClientsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 37,
        vars: 9,
        consts: [[1, "table-parent-container"], ["fxLayout", "row", "fxLayoutAlign", "space-between center\xA0"], ["appearance", "standard", 2, "width", "44%", "padding", "0 1.2em"], ["type", "text", "matInput", "", 3, "ngModel", "ngModelChange"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["aria-label", "Select page", 3, "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], [1, "table-container"], ["mat-table", "", "matSort", "", 3, "dataSource", "matSortChange"], ["matColumnDef", "ssid"], ["mat-header-cell", "", "mat-sort-header", "", "mat-sort-header", "", "style", "width: 15%;", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "mac"], ["mat-header-cell", "", "mat-sort-header", "", "mat-sort-header", "", "style", "width: 10%;", 4, "matHeaderCellDef"], ["matColumnDef", "hostname"], ["matColumnDef", "username"], ["mat-header-cell", "", "mat-sort-header", "", "style", "text-align: center;", "style", "width: 10%;", 4, "matHeaderCellDef"], ["matColumnDef", "ip"], ["matColumnDef", "rx_bytes"], ["mat-header-cell", "", "mat-sort-header", "", "style", "text-align: center;", "style", "width: 10%; text-align: center;", 4, "matHeaderCellDef"], ["matColumnDef", "tx_bytes"], ["matColumnDef", "total_bytes"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", "mat-sort-header", "", 2, "width", "15%"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "mat-sort-header", "", 2, "width", "10%"], ["mat-header-cell", "", "mat-sort-header", "", 2, "width", "10%"], ["mat-header-cell", "", "mat-sort-header", "", 2, "width", "10%", "text-align", "center"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function ClientsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientsComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.filter = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ClientsComponent_button_6_Template, 3, 0, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-paginator", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function ClientsComponent_Template_table_matSortChange_10_listener($event) {
              return ctx.announceSortChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ClientsComponent_th_12_Template, 2, 0, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClientsComponent_td_13_Template, 3, 4, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ClientsComponent_th_15_Template, 2, 0, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ClientsComponent_td_16_Template, 2, 1, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ClientsComponent_th_18_Template, 2, 0, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ClientsComponent_td_19_Template, 2, 1, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ClientsComponent_th_21_Template, 2, 0, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ClientsComponent_td_22_Template, 2, 1, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ClientsComponent_th_24_Template, 2, 0, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ClientsComponent_td_25_Template, 2, 1, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ClientsComponent_th_27_Template, 2, 0, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ClientsComponent_td_28_Template, 3, 3, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ClientsComponent_th_30_Template, 2, 0, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ClientsComponent_td_31_Template, 3, 3, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ClientsComponent_th_33_Template, 2, 0, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ClientsComponent_td_34_Template, 3, 3, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ClientsComponent_tr_35_Template, 1, 0, "tr", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ClientsComponent_tr_36_Template, 1, 0, "tr", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageIndex", ctx.pageIndex)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.clientsDataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        pipes: [_src_app_common_pipe_wlan_pipe__WEBPACK_IMPORTED_MODULE_15__["WlanPipe"], _src_app_common_pipe_bytes_pipe__WEBPACK_IMPORTED_MODULE_16__["BytesPipe"]],
        styles: [".loading[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff9c;\n    border-radius: 5px;\n    z-index: 1000;\n}\n\n.loading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: auto;\n    align-self: center;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n    color: gray;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover {\n    color: black;\n}\n\nmat-card[_ngcontent-%COMP%] {\n    margin: 1em;\n    border: 1px solid lightgray;\n}\n\nbutton[_ngcontent-%COMP%] {\n    margin: 1em;\n}\n\n\n\n.info[_ngcontent-%COMP%] {\n    height: 4em;\n    width: 15em;\n}\n\n.info.clickable[_ngcontent-%COMP%] {\n    cursor: pointer;\n    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n    transition: all 0.2s ease-in-out;\n}\n\n.info.clickable[_ngcontent-%COMP%]:hover {\n    box-shadow: rgb(50 50 93 / 25%) 0px 2px 3px -2px inset, rgb(0 0 0 / 30%) 0px 1px 2px -1px inset;\n    transition: all 0.2s ease-in-out;\n}\n\n.info.clickable.selected[_ngcontent-%COMP%] {\n    color: #eee;\n    background-color: #999;\n    transition: all 0.2s ease-in-out;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\n}\n\n\n\n.table-parent-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    height: calc(100vh - 450px);\n    padding: 0;\n}\n\n.table-container[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: scroll;\n}\n\ntable[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\ntr.mat-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\n    height: 30px;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n    font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBR0EsVUFBVTs7QUFFVjtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUhBQWlIO0lBQ2pILGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLCtGQUErRjtJQUMvRixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQywwR0FBMEc7QUFDOUc7O0FBR0EsVUFBVTs7QUFFVjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOWM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG5cbi5sb2FkaW5nIGRpdiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnRvb2x0aXAge1xuICAgIGNvbG9yOiBncmF5O1xufVxuXG4udG9vbHRpcDpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5tYXQtY2FyZCB7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuXG5idXR0b24ge1xuICAgIG1hcmdpbjogMWVtO1xufVxuXG5cbi8qIENBUkRTICovXG5cbi5pbmZvIHtcbiAgICBoZWlnaHQ6IDRlbTtcbiAgICB3aWR0aDogMTVlbTtcbn1cblxuLmluZm8uY2xpY2thYmxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggLTFweCByZ2IoMCAwIDAgLyAyMCUpLCAwcHggMXB4IDFweCAwcHggcmdiKDAgMCAwIC8gMTQlKSwgMHB4IDFweCAzcHggMHB4IHJnYigwIDAgMCAvIDEyJSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5pbmZvLmNsaWNrYWJsZTpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogcmdiKDUwIDUwIDkzIC8gMjUlKSAwcHggMnB4IDNweCAtMnB4IGluc2V0LCByZ2IoMCAwIDAgLyAzMCUpIDBweCAxcHggMnB4IC0xcHggaW5zZXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5pbmZvLmNsaWNrYWJsZS5zZWxlY3RlZCB7XG4gICAgY29sb3I6ICNlZWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAzMHB4IDYwcHggLTEycHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMThweCAzNnB4IC0xOHB4IGluc2V0O1xufVxuXG5cbi8qIFRBQkxFICovXG5cbi50YWJsZS1wYXJlbnQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDUwcHgpO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxudHIubWF0LXJvdyxcbnRyLm1hdC1mb290ZXItcm93IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5tYXQtY2VsbCB7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbn0iXX0= */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard-clients',
            templateUrl: './clients.component.html',
            styleUrls: ['./../dashboard.component.css']
          }]
        }], function () {
          return [{
            type: _services_clients_service__WEBPACK_IMPORTED_MODULE_4__["ClientsService"]
          }, {
            type: _services_wlans_service__WEBPACK_IMPORTED_MODULE_5__["WlansService"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"]
          }];
        }, {
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
          }],
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "lBvA":
    /*!**************************************************!*\
      !*** ./src/app/dashboard/apps/apps.component.ts ***!
      \**************************************************/

    /*! exports provided: AppsComponent */

    /***/
    function lBvA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppsComponent", function () {
        return AppsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _services_apps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/apps.service */
      "JyYV");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _src_app_common_pipe_bytes_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @src/app/common/pipe/bytes_pipe */
      "NAjw");

      function AppsComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppsComponent_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.filter = "";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppsComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " APP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppsComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.app, " ");
        }
      }

      function AppsComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " #CLIENTS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppsComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.num_clients, " ");
        }
      }

      function AppsComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " RX BYTES ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppsComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "bytessize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r18.rx_bytes), " ");
        }
      }

      function AppsComponent_th_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " TX BYTES ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppsComponent_td_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "bytessize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r19.tx_bytes), " ");
        }
      }

      function AppsComponent_th_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " TOTAL BYTES ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppsComponent_td_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "bytessize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r20.total_bytes), " ");
        }
      }

      function AppsComponent_tr_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
        }
      }

      function AppsComponent_tr_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 26);
        }
      }

      var AppsComponent = /*#__PURE__*/function () {
        function AppsComponent(_appsService, _liveAnnouncer) {
          _classCallCheck(this, AppsComponent);

          this._appsService = _appsService;
          this._liveAnnouncer = _liveAnnouncer;
          this.multiplicator = ["B", "KB", "MB", "GB", "TB", "PB", "EB"]; /////////////////////////
          // table

          this.displayedColumns = ['app', 'num_clients', 'rx_bytes', 'tx_bytes', 'total_bytes'];
          this.appsDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
          this.appsDisplayed = [];
          this.pageIndex = 0;
          this.pageSize = 25;
          this.pageLength = 0;
          this.pageSizeOptions = [5, 25, 50];
          this.filter = "";
        } //////////////////////////////////////////////////////////////////////////////
        /////           INIT
        //////////////////////////////////////////////////////////////////////////////


        _createClass(AppsComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this9 = this;

            this._appsService.apps.subscribe(function (apps) {
              _this9.appsDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](apps);
              _this9.appsDataSource.sort = _this9.sort;
            });
          } //////////////////////////////////////////////////////////////////////////////
          /////           COMMON
          //////////////////////////////////////////////////////////////////////////////

        }, {
          key: "sortList",
          value: function sortList(data, attribute) {
            return data.sort(function (a, b) {
              var nameA = a[attribute].toUpperCase(); // ignore upper and lowercase

              var nameB = b[attribute].toUpperCase(); // ignore upper and lowercase

              if (nameA < nameB) {
                return -1;
              }

              if (nameA > nameB) {
                return 1;
              }

              return 0;
            });
          }
          /** Announce the change in sort state for assistive technology. */

        }, {
          key: "announceSortChange",
          value: function announceSortChange(sortState) {
            // This example uses English messages. If your application supports
            // multiple language, you would internationalize these strings.
            // Furthermore, you can customize the message to add additional
            // details about the values being sorted.
            if (sortState.direction) {
              this._liveAnnouncer.announce("Sorted ".concat(sortState.direction, "ending"));
            } else {
              this._liveAnnouncer.announce('Sorting cleared');
            }
          }
        }]);

        return AppsComponent;
      }();

      AppsComponent.ɵfac = function AppsComponent_Factory(t) {
        return new (t || AppsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apps_service__WEBPACK_IMPORTED_MODULE_4__["AppsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["LiveAnnouncer"]));
      };

      AppsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppsComponent,
        selectors: [["app-dashboard-apps"]],
        viewQuery: function AppsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 28,
        vars: 9,
        consts: [[1, "table-parent-container"], ["fxLayout", "row", "fxLayoutAlign", "space-between center\xA0"], ["appearance", "standard", 2, "width", "44%", "padding", "0 1.2em"], ["type", "text", "matInput", "", 3, "ngModel", "ngModelChange"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["aria-label", "Select page", 3, "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], [1, "table-container"], ["mat-table", "", "matSort", "", 3, "dataSource", "matSortChange"], ["matColumnDef", "app"], ["mat-header-cell", "", "mat-sort-header", "", "mat-sort-header", "", "style", "width: 30%;", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "num_clients"], ["mat-header-cell", "", "mat-sort-header", "", "mat-sort-header", "", "style", "width: 10%;", 4, "matHeaderCellDef"], ["matColumnDef", "rx_bytes"], ["mat-header-cell", "", "mat-sort-header", "", "style", "text-align: center;", "style", "width: 20%; text-align: center;", 4, "matHeaderCellDef"], ["matColumnDef", "tx_bytes"], ["matColumnDef", "total_bytes"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", "mat-sort-header", "", 2, "width", "30%"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "mat-sort-header", "", 2, "width", "10%"], ["mat-header-cell", "", "mat-sort-header", "", 2, "width", "20%", "text-align", "center"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function AppsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppsComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.filter = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppsComponent_button_6_Template, 3, 0, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-paginator", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function AppsComponent_Template_table_matSortChange_10_listener($event) {
              return ctx.announceSortChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppsComponent_th_12_Template, 2, 0, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppsComponent_td_13_Template, 2, 1, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppsComponent_th_15_Template, 2, 0, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppsComponent_td_16_Template, 2, 1, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppsComponent_th_18_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppsComponent_td_19_Template, 3, 3, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AppsComponent_th_21_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppsComponent_td_22_Template, 3, 3, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AppsComponent_th_24_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppsComponent_td_25_Template, 3, 3, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AppsComponent_tr_26_Template, 1, 0, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AppsComponent_tr_27_Template, 1, 0, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageIndex", ctx.pageIndex)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.appsDataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        pipes: [_src_app_common_pipe_bytes_pipe__WEBPACK_IMPORTED_MODULE_14__["BytesPipe"]],
        styles: [".loading[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff9c;\n    border-radius: 5px;\n    z-index: 1000;\n}\n\n.loading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: auto;\n    align-self: center;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n    color: gray;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover {\n    color: black;\n}\n\nmat-card[_ngcontent-%COMP%] {\n    margin: 1em;\n    border: 1px solid lightgray;\n}\n\nbutton[_ngcontent-%COMP%] {\n    margin: 1em;\n}\n\n\n\n.info[_ngcontent-%COMP%] {\n    height: 4em;\n    width: 15em;\n}\n\n.info.clickable[_ngcontent-%COMP%] {\n    cursor: pointer;\n    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n    transition: all 0.2s ease-in-out;\n}\n\n.info.clickable[_ngcontent-%COMP%]:hover {\n    box-shadow: rgb(50 50 93 / 25%) 0px 2px 3px -2px inset, rgb(0 0 0 / 30%) 0px 1px 2px -1px inset;\n    transition: all 0.2s ease-in-out;\n}\n\n.info.clickable.selected[_ngcontent-%COMP%] {\n    color: #eee;\n    background-color: #999;\n    transition: all 0.2s ease-in-out;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\n}\n\n\n\n.table-parent-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    height: calc(100vh - 450px);\n    padding: 0;\n}\n\n.table-container[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: scroll;\n}\n\ntable[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\ntr.mat-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\n    height: 30px;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n    font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBR0EsVUFBVTs7QUFFVjtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUhBQWlIO0lBQ2pILGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLCtGQUErRjtJQUMvRixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQywwR0FBMEc7QUFDOUc7O0FBR0EsVUFBVTs7QUFFVjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOWM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG5cbi5sb2FkaW5nIGRpdiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnRvb2x0aXAge1xuICAgIGNvbG9yOiBncmF5O1xufVxuXG4udG9vbHRpcDpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5tYXQtY2FyZCB7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuXG5idXR0b24ge1xuICAgIG1hcmdpbjogMWVtO1xufVxuXG5cbi8qIENBUkRTICovXG5cbi5pbmZvIHtcbiAgICBoZWlnaHQ6IDRlbTtcbiAgICB3aWR0aDogMTVlbTtcbn1cblxuLmluZm8uY2xpY2thYmxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggLTFweCByZ2IoMCAwIDAgLyAyMCUpLCAwcHggMXB4IDFweCAwcHggcmdiKDAgMCAwIC8gMTQlKSwgMHB4IDFweCAzcHggMHB4IHJnYigwIDAgMCAvIDEyJSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5pbmZvLmNsaWNrYWJsZTpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogcmdiKDUwIDUwIDkzIC8gMjUlKSAwcHggMnB4IDNweCAtMnB4IGluc2V0LCByZ2IoMCAwIDAgLyAzMCUpIDBweCAxcHggMnB4IC0xcHggaW5zZXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5pbmZvLmNsaWNrYWJsZS5zZWxlY3RlZCB7XG4gICAgY29sb3I6ICNlZWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAzMHB4IDYwcHggLTEycHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMThweCAzNnB4IC0xOHB4IGluc2V0O1xufVxuXG5cbi8qIFRBQkxFICovXG5cbi50YWJsZS1wYXJlbnQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDUwcHgpO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxudHIubWF0LXJvdyxcbnRyLm1hdC1mb290ZXItcm93IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5tYXQtY2VsbCB7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbn0iXX0= */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard-apps',
            templateUrl: './apps.component.html',
            styleUrls: ['./../dashboard.component.css']
          }]
        }], function () {
          return [{
            type: _services_apps_service__WEBPACK_IMPORTED_MODULE_4__["AppsService"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["LiveAnnouncer"]
          }];
        }, {
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
          }],
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "sIjS":
    /*!****************************************!*\
      !*** ./src/app/common/common-pipes.ts ***!
      \****************************************/

    /*! exports provided: StartsWithPipe, MapToArrayPipe */

    /***/
    function sIjS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StartsWithPipe", function () {
        return StartsWithPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapToArrayPipe", function () {
        return MapToArrayPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StartsWithPipe = /*#__PURE__*/function () {
        function StartsWithPipe() {
          _classCallCheck(this, StartsWithPipe);
        }

        _createClass(StartsWithPipe, [{
          key: "transform",
          value: function transform(fullText, textMatch) {
            return fullText.startsWith(textMatch);
          }
        }]);

        return StartsWithPipe;
      }();

      StartsWithPipe.ɵfac = function StartsWithPipe_Factory(t) {
        return new (t || StartsWithPipe)();
      };

      StartsWithPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "startsWith",
        type: StartsWithPipe,
        pure: true
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartsWithPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'startsWith'
          }]
        }], null, null);
      })();

      var MapToArrayPipe = /*#__PURE__*/function () {
        function MapToArrayPipe() {
          _classCallCheck(this, MapToArrayPipe);
        }

        _createClass(MapToArrayPipe, [{
          key: "transform",
          value: function transform(value, args) {
            var arr = [];

            for (var key in value) {
              arr.push({
                key: key,
                value: value[key]
              });
            }

            return arr;
          }
        }]);

        return MapToArrayPipe;
      }();

      MapToArrayPipe.ɵfac = function MapToArrayPipe_Factory(t) {
        return new (t || MapToArrayPipe)();
      };

      MapToArrayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "mapToArray",
        type: MapToArrayPipe,
        pure: true
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapToArrayPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'mapToArray'
          }]
        }], null, null);
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "QX6l");
      /* harmony import */


      var _org_org_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./org/org.component */
      "IMNj");

      var routes = [{
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'select',
        component: _org_org_component__WEBPACK_IMPORTED_MODULE_4__["OrgComponent"]
      }, {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
      }, {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }, {
        path: '**',
        redirectTo: '/login'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              relativeLinkResolution: 'legacy'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _login_2FA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login-2FA */
      "+2Ah");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/login.service */
      "EFyh");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function LoginComponent_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var host_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", host_r4.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", host_r4.viewValue, " ");
        }
      }

      function LoginComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_a_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r2.github_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function LoginComponent_a_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r3.docker_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(_formBuilder, _http, _router, _loginService, _dialog, _platformLocation) {
          _classCallCheck(this, LoginComponent);

          this._formBuilder = _formBuilder;
          this._http = _http;
          this._router = _router;
          this._loginService = _loginService;
          this._dialog = _dialog;
          this._platformLocation = _platformLocation;
          this.host = null;
          this.headers = {};
          this.cookies = {};
          this.self = {};
          this.hosts = [{
            value: 'api.mist.com',
            viewValue: 'US - manage.mist.com'
          }, {
            value: 'api.eu.mist.com',
            viewValue: 'EU - manage.eu.mist.com'
          }, {
            value: 'api.gc1.mist.com',
            viewValue: 'GCP - manage.gc1.mist.com'
          }]; // LOGIN FORM

          this.frmStepLogin = this._formBuilder.group({
            host: [''],
            credentials: this._formBuilder.group({
              email: [''],
              password: ['']
            }),
            token: ['']
          });
          this.error_mess = {
            "credentials": "",
            "token": ""
          };
        } //// INIT ////


        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.frmStepLogin = this._formBuilder.group({
              host: ['api.mist.com'],
              credentials: this._formBuilder.group({
                email: [''],
                password: ['']
              }),
              token: [""]
            });

            this._http.get('/api/gap').subscribe({
              next: function next(data) {
                return _this10._loginService.googleApiKeySet(data.gap);
              },
              error: function error(_error5) {
                return console.error("Unable to load the Google API Key... Maps won't be available...");
              }
            });

            this._http.get("/api/disclaimer").subscribe({
              next: function next(data) {
                if (data.disclaimer) _this10.disclaimer = data.disclaimer;
                if (data.github_url) _this10.github_url = data.github_url;
                if (data.docker_url) _this10.docker_url = data.docker_url;
              }
            });
          } //// COMMON ////

        }, {
          key: "check_host",
          value: function check_host() {
            if (this.frmStepLogin.value.host != '') {
              return true;
            } else {
              return false;
            }
          } // RESET AUTHENTICATION FORM

        }, {
          key: "reset_response",
          value: function reset_response() {
            this.host = null;

            this._loginService.headersSet({});

            this._loginService.cookiesSet({});

            this._loginService.selfSet({});

            this._loginService.hostSet(this.host);

            this.reset_error_mess();
          }
        }, {
          key: "reset_error_mess",
          value: function reset_error_mess() {
            this.error_mess = {
              "credentials": "",
              "token": ""
            };
          } // PARSE AUTHENTICATION RESPONSE FROM SERVER

        }, {
          key: "parse_response",
          value: function parse_response(data) {
            if ("error" in data) {
              this.loading = false;
              this.error_mess["username"] = data.error;
            } else if ("data" in data) {
              if ("detail" in data.data) {
                this.error_message(data["method"], data.data.detail);
              } else if ("two_factor_required" in data.data && "two_factor_passed" in data.data) {
                if (data.data["two_factor_required"] == false) {
                  this.authenticated(data);
                } else if (data.data["two_factor_passed"] == true) {
                  this.authenticated(data);
                } else {
                  this.open2FA();
                }
              } else {
                this.authenticated(data);
              }
            }
          } // WHEN AUTHENTICATION IS NOT OK

        }, {
          key: "error_message",
          value: function error_message(method, message) {
            this.loading = false;
            this.error_mess[method] = message;
          } // WHEN AUTHENTICATION IS OK

        }, {
          key: "authenticated",
          value: function authenticated(data) {
            this._loginService.headersSet(data.headers);

            this._loginService.cookiesSet(data.cookies);

            this._loginService.hostSet(data.host);

            this._loginService.selfSet(data.data);

            this.loading = false;

            this._router.navigate(['/select']);
          } //// AUTHENTICATION ////

        }, {
          key: "submitCredentials",
          value: function submitCredentials() {
            var _this11 = this;

            this.reset_response();

            if (this.check_host()) {
              this.loading = true;

              this._http.post('/api/login/', {
                host: this.frmStepLogin.value.host,
                email: this.frmStepLogin.value.credentials.email,
                password: this.frmStepLogin.value.credentials.password
              }).subscribe({
                next: function next(data) {
                  return _this11.parse_response(data);
                },
                error: function error(_error6) {
                  return _this11.error_message("credentials", _error6.error.message);
                }
              });
            }
          }
        }, {
          key: "submitToken",
          value: function submitToken() {
            var _this12 = this;

            this.reset_response();

            if (this.check_host()) {
              this.loading = true;

              this._http.post('/api/login/', {
                host: this.frmStepLogin.value.host,
                token: this.frmStepLogin.value.token
              }).subscribe({
                next: function next(data) {
                  return _this12.parse_response(data);
                },
                error: function error(_error7) {
                  return _this12.error_message("credentials", _error7.error.message);
                }
              });
            }
          }
        }, {
          key: "submit2FA",
          value: function submit2FA(twoFactor) {
            var _this13 = this;

            if (this.check_host()) {
              this.loading = true;

              this._http.post('/api/login/', {
                host: this.frmStepLogin.value.host,
                email: this.frmStepLogin.value.credentials.email,
                password: this.frmStepLogin.value.credentials.password,
                two_factor: twoFactor
              }).subscribe({
                next: function next(data) {
                  return _this13.parse_response(data);
                },
                error: function error(_error8) {
                  return _this13.error_message("credentials", _error8.error.message);
                }
              });
            }
          } //// DIALOG BOX ////

        }, {
          key: "open2FA",
          value: function open2FA() {
            var _this14 = this;

            var dialogRef = this._dialog.open(_login_2FA__WEBPACK_IMPORTED_MODULE_1__["TwoFactorDialog"], {});

            dialogRef.afterClosed().subscribe(function (result) {
              _this14.submit2FA(result);
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 58,
        vars: 11,
        consts: [[1, "card-outer"], [1, "login-form", 3, "formGroup"], ["fxLayout", "column", 1, "login-form-outer", 3, "formGroup"], [1, "login-form-inner"], ["fxLayout", "column", 1, "login-step"], ["appearance", "outline"], ["formControlName", "host"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 1, "login-form-or"], ["mat-fab", "", "color", "accent", "aria-label", "AND", 1, "disable-click"], ["fxLayout", "row", 1, "login-step"], ["formGroupName", "credentials", "fxLayout", "column", 1, "login-form-inputs"], ["matInput", "", "formControlName", "email", "type", "email"], ["matInput", "", "type", "password", "formControlName", "password", 3, "keydown.enter"], [2, "margin-bottom", "1em", "min-height", "20px"], [2, "color", "red", "font-weight", "normal"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["fxLayout", "column", 1, "login-form-or"], [3, "vertical"], ["mat-fab", "", "color", "accent", "aria-label", "OR", 1, "disable-click", 2, "margin-bottom", "4em"], ["fxLayout", "column", 1, "login-form-inputs"], ["appearance", "outline", 2, "padding", "0"], ["type", "text", "matInput", "", "formControlName", "token", 3, "keydown.enter"], ["class", "loading", "fxLayout", "row", 4, "ngIf"], [1, "disclaimer"], [1, "source"], ["target", "_blank", 3, "href", 4, "ngIf"], [3, "value"], ["fxLayout", "row", 1, "loading"], ["fxLayout", "column"], ["target", "_blank", 3, "href"], ["src", "static/github.png"], ["src", "static/docker.png"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mist Cloud");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_mat_option_9_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " AND ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Access with Login/Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function LoginComponent_Template_input_keydown_enter_26_listener() {
              return ctx.submitCredentials();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_31_listener() {
              return ctx.submitCredentials();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Continue with credentials");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-divider", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " OR ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-divider", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Access with API Token");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "API Token");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function LoginComponent_Template_input_keydown_enter_44_listener() {
              return ctx.submitToken();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_49_listener() {
              return ctx.submitToken();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Continue with API Token");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, LoginComponent_div_51_Template, 3, 0, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, LoginComponent_a_56_Template, 2, 1, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, LoginComponent_a_57_Template, 2, 1, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.frmStepLogin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.frmStepLogin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hosts);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.error_mess.credentials);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.error_mess.token);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.disclaimer, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.github_url);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.docker_url);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"]],
        styles: ["mat-card[_ngcontent-%COMP%] {\n    background-color: rgb(236 236 236);\n}\n\n.login-form-inner[_ngcontent-%COMP%] {\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 50em;\n    position: relative;\n    margin: auto;\n    padding: 2em;\n    border-radius: 0.3em;\n}\n\n.login-form-outer[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: rgb(236 236 236);\n}\n\n.login-form-inputs[_ngcontent-%COMP%] {\n    padding: 10px;\n    width: 25em;\n    text-align: center;\n    justify-content: space-between;\n}\n\n.login-form-or[_ngcontent-%COMP%] {\n    padding: 10px;\n    text-align: center;\n    justify-content: space-between;\n}\n\n.disable-click[_ngcontent-%COMP%] {\n    pointer-events: none;\n    cursor: default;\n}\n\n.login-step[_ngcontent-%COMP%] {\n    border: solid 1px lightgray;\n    background-color: white;\n    border-radius: 5px;\n    margin: -2em;\n    padding: 2em;\n}\n\n.loading[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff9c;\n    border-radius: 5px;\n}\n\n.loading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: auto;\n    align-self: center;\n}\n\n.disclaimer[_ngcontent-%COMP%] {\n    width: 50em;\n    text-align: center;\n    margin: 5em auto;\n    text-transform: uppercase;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-weight: 100;\n    font-size: smaller;\n}\n\n.source[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n}\n\n.source[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 1em;\n    height: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsaURBQWlEO0lBQ2pELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiAyMzYgMjM2KTtcbn1cblxuLmxvZ2luLWZvcm0taW5uZXIge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1pbi13aWR0aDogNTBlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbn1cblxuLmxvZ2luLWZvcm0tb3V0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYgMjM2IDIzNik7XG59XG5cbi5sb2dpbi1mb3JtLWlucHV0cyB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMjVlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubG9naW4tZm9ybS1vciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZGlzYWJsZS1jbGljayB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubG9naW4tc3RlcCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggbGlnaHRncmF5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IC0yZW07XG4gICAgcGFkZGluZzogMmVtO1xufVxuXG4ubG9hZGluZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOWM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubG9hZGluZyBkaXYge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5kaXNjbGFpbWVyIHtcbiAgICB3aWR0aDogNTBlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1ZW0gYXV0bztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuLnNvdXJjZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zb3VyY2UgaW1nIHtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBoZWlnaHQ6IDJlbTtcbn0iXX0= */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "yHwA":
    /*!*********************************************!*\
      !*** ./src/app/services/clients.service.ts ***!
      \*********************************************/

    /*! exports provided: ClientsService */

    /***/
    function yHwA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientsService", function () {
        return ClientsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ClientsService = /*#__PURE__*/function () {
        function ClientsService() {
          _classCallCheck(this, ClientsService);

          this.clientsSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
          this.clients = this.clientsSource.asObservable();
          this.displaySource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.display = this.displaySource.asObservable();
        }

        _createClass(ClientsService, [{
          key: "clientsSet",
          value: function clientsSet(data) {
            this.clientsSource.next(data);
          }
        }, {
          key: "displaySet",
          value: function displaySet(data) {
            this.displaySource.next(data);
          }
        }]);

        return ClientsService;
      }();

      ClientsService.ɵfac = function ClientsService_Factory(t) {
        return new (t || ClientsService)();
      };

      ClientsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ClientsService,
        factory: ClientsService.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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