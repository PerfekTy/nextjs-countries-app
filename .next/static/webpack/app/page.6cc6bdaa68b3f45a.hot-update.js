"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/country-element.tsx":
/*!****************************************!*\
  !*** ./components/country-element.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CountryElement: function() { return /* binding */ CountryElement; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* __next_internal_client_entry_do_not_use__ CountryElement auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst CountryElement = (param)=>{\n    let { country } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const population = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        if (!country) {\n            return null;\n        }\n        return country.population.toLocaleString(\"en-EN\");\n    }, [\n        country\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n        className: \"w-full mx-auto dark:bg-dark dark:border-none hover:scale-105 transition cursor-pointer\",\n        onClick: ()=>router.push(\"/\".concat(country.name)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                className: \"p-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: country.flags.png,\n                            alt: country.name,\n                            height: 100,\n                            className: \"w-full rounded-t-lg\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardDescription, {\n                        className: \"text-black dark:text-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-xl py-2 pt-5 ml-11 font-bold\",\n                            children: country.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-3 mx-5 flex flex-col gap-1 justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"flex gap-1 font-light\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-semibold\",\n                                    children: \"Population:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                population\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"flex gap-1 font-light\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-semibold\",\n                                    children: \"Region:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                country.region\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"flex gap-1 font-light\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-semibold\",\n                                    children: \"Capital:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                country.capital\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CountryElement, \"ILzX/7qDxNY5Yr2fql3PHvErKZ4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CountryElement;\nvar _c;\n$RefreshReg$(_c, \"CountryElement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY291bnRyeS1lbGVtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFZ0M7QUFDWTtBQVFkO0FBRXZCLE1BQU1PLGlCQUFpQjtRQUFDLEVBQUVDLE9BQU8sRUFBb0I7O0lBQzFELE1BQU1DLFNBQVNSLDBEQUFTQTtJQUN4QixNQUFNUyxhQUFhViw4Q0FBT0EsQ0FBQztRQUN6QixJQUFJLENBQUNRLFNBQVM7WUFDWixPQUFPO1FBQ1Q7UUFFQSxPQUFPQSxRQUFRRSxVQUFVLENBQUNDLGNBQWMsQ0FBQztJQUMzQyxHQUFHO1FBQUNIO0tBQVE7SUFFWixxQkFDRSw4REFBQ04scURBQUlBO1FBQ0hVLFdBQVU7UUFDVkMsU0FBUyxJQUFNSixPQUFPSyxJQUFJLENBQUMsSUFBaUIsT0FBYk4sUUFBUU8sSUFBSTs7MEJBRTNDLDhEQUFDViwyREFBVUE7Z0JBQUNPLFdBQVU7O2tDQUNwQiw4REFBQ04sMERBQVNBO2tDQUNSLDRFQUFDVTs0QkFDQ0MsS0FBS1QsUUFBUVUsS0FBSyxDQUFDQyxHQUFHOzRCQUN0QkMsS0FBS1osUUFBUU8sSUFBSTs0QkFDakJNLFFBQVE7NEJBQ1JULFdBQVU7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDUixnRUFBZUE7d0JBQUNRLFdBQVU7a0NBQ3pCLDRFQUFDVTs0QkFBR1YsV0FBVTtzQ0FBcUNKLFFBQVFPLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUduRSw4REFBQ1osNERBQVdBOzBCQUNWLDRFQUFDb0I7b0JBQUlYLFdBQVU7O3NDQUNiLDhEQUFDWTs0QkFBS1osV0FBVTs7OENBQ2QsOERBQUNhO29DQUFFYixXQUFVOzhDQUFnQjs7Ozs7O2dDQUFlO2dDQUFFRjs7Ozs7OztzQ0FFaEQsOERBQUNjOzRCQUFLWixXQUFVOzs4Q0FDZCw4REFBQ2E7b0NBQUViLFdBQVU7OENBQWdCOzs7Ozs7Z0NBQVc7Z0NBQUVKLFFBQVFrQixNQUFNOzs7Ozs7O3NDQUUxRCw4REFBQ0Y7NEJBQUtaLFdBQVU7OzhDQUNkLDhEQUFDYTtvQ0FBRWIsV0FBVTs4Q0FBZ0I7Ozs7OztnQ0FBWTtnQ0FBRUosUUFBUW1CLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10RSxFQUFFO0dBM0NXcEI7O1FBQ0lOLHNEQUFTQTs7O0tBRGJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY291bnRyeS1lbGVtZW50LnRzeD84YWVjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmltcG9ydCB7XG4gIENhcmQsXG4gIENhcmRDb250ZW50LFxuICBDYXJkRGVzY3JpcHRpb24sXG4gIENhcmRIZWFkZXIsXG4gIENhcmRUaXRsZSxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBDb3VudHJ5RWxlbWVudCA9ICh7IGNvdW50cnkgfTogeyBjb3VudHJ5OiBhbnkgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgcG9wdWxhdGlvbiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghY291bnRyeSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvdW50cnkucG9wdWxhdGlvbi50b0xvY2FsZVN0cmluZyhcImVuLUVOXCIpO1xuICB9LCBbY291bnRyeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvIGRhcms6YmctZGFyayBkYXJrOmJvcmRlci1ub25lIGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uIGN1cnNvci1wb2ludGVyXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvJHtjb3VudHJ5Lm5hbWV9YCl9XG4gICAgPlxuICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwicC0wXCI+XG4gICAgICAgIDxDYXJkVGl0bGU+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtjb3VudHJ5LmZsYWdzLnBuZ31cbiAgICAgICAgICAgIGFsdD17Y291bnRyeS5uYW1lfVxuICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC10LWxnXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgPENhcmREZXNjcmlwdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHB5LTIgcHQtNSBtbC0xMSBmb250LWJvbGRcIj57Y291bnRyeS5uYW1lfTwvaDI+XG4gICAgICAgIDwvQ2FyZERlc2NyaXB0aW9uPlxuICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTMgbXgtNSBmbGV4IGZsZXgtY29sIGdhcC0xIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBnYXAtMSBmb250LWxpZ2h0XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+UG9wdWxhdGlvbjo8L3A+IHtwb3B1bGF0aW9ufVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xIGZvbnQtbGlnaHRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5SZWdpb246PC9wPiB7Y291bnRyeS5yZWdpb259XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgZm9udC1saWdodFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPkNhcGl0YWw6PC9wPiB7Y291bnRyeS5jYXBpdGFsfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlTWVtbyIsInVzZVJvdXRlciIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmREZXNjcmlwdGlvbiIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJDb3VudHJ5RWxlbWVudCIsImNvdW50cnkiLCJyb3V0ZXIiLCJwb3B1bGF0aW9uIiwidG9Mb2NhbGVTdHJpbmciLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicHVzaCIsIm5hbWUiLCJpbWciLCJzcmMiLCJmbGFncyIsInBuZyIsImFsdCIsImhlaWdodCIsImgyIiwiZGl2Iiwic3BhbiIsInAiLCJyZWdpb24iLCJjYXBpdGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/country-element.tsx\n"));

/***/ })

});