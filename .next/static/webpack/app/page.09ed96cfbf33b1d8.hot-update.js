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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CountryElement: function() { return /* binding */ CountryElement; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* __next_internal_client_entry_do_not_use__ CountryElement auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst CountryElement = (param)=>{\n    let { country } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const population = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        if (!country) {\n            return null;\n        }\n        return country.population.toLocaleString(\"en-EN\");\n    }, [\n        country\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n        className: \"mx-auto dark:bg-dark dark:border-none hover:scale-105 transition cursor-pointer\",\n        onClick: ()=>router.push(\"/\".concat(country.name)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                className: \"p-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: country.flag,\n                            alt: country.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardDescription, {\n                        className: \"text-black dark:text-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-xl py-2 pt-5 ml-11 font-bold\",\n                            children: country.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-3 mx-5 flex flex-col gap-1 justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"flex gap-1 font-light\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-semibold\",\n                                    children: \"Population:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                population\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"flex gap-1 font-light\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-semibold\",\n                                    children: \"Region:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                country.region\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"flex gap-1 font-light\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-semibold\",\n                                    children: \"Capital:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                country.capital\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CountryElement, \"ILzX/7qDxNY5Yr2fql3PHvErKZ4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CountryElement;\nvar _c;\n$RefreshReg$(_c, \"CountryElement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY291bnRyeS1lbGVtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFZ0M7QUFDWTtBQVFkO0FBRXZCLE1BQU1PLGlCQUFpQjtRQUFDLEVBQUVDLE9BQU8sRUFBb0I7O0lBQzFELE1BQU1DLFNBQVNSLDBEQUFTQTtJQUN4QixNQUFNUyxhQUFhViw4Q0FBT0EsQ0FBQztRQUN6QixJQUFJLENBQUNRLFNBQVM7WUFDWixPQUFPO1FBQ1Q7UUFFQSxPQUFPQSxRQUFRRSxVQUFVLENBQUNDLGNBQWMsQ0FBQztJQUMzQyxHQUFHO1FBQUNIO0tBQVE7SUFFWixxQkFDRSw4REFBQ04scURBQUlBO1FBQ0hVLFdBQVU7UUFDVkMsU0FBUyxJQUFNSixPQUFPSyxJQUFJLENBQUMsSUFBaUIsT0FBYk4sUUFBUU8sSUFBSTs7MEJBRTNDLDhEQUFDViwyREFBVUE7Z0JBQUNPLFdBQVU7O2tDQUNwQiw4REFBQ04sMERBQVNBO2tDQUNSLDRFQUFDVTs0QkFBSUMsS0FBS1QsUUFBUVUsSUFBSTs0QkFBRUMsS0FBS1gsUUFBUU8sSUFBSTs7Ozs7Ozs7Ozs7a0NBRTNDLDhEQUFDWCxnRUFBZUE7d0JBQUNRLFdBQVU7a0NBQ3pCLDRFQUFDUTs0QkFBR1IsV0FBVTtzQ0FBcUNKLFFBQVFPLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUduRSw4REFBQ1osNERBQVdBOzBCQUNWLDRFQUFDa0I7b0JBQUlULFdBQVU7O3NDQUNiLDhEQUFDVTs0QkFBS1YsV0FBVTs7OENBQ2QsOERBQUNXO29DQUFFWCxXQUFVOzhDQUFnQjs7Ozs7O2dDQUFlO2dDQUFFRjs7Ozs7OztzQ0FFaEQsOERBQUNZOzRCQUFLVixXQUFVOzs4Q0FDZCw4REFBQ1c7b0NBQUVYLFdBQVU7OENBQWdCOzs7Ozs7Z0NBQVc7Z0NBQUVKLFFBQVFnQixNQUFNOzs7Ozs7O3NDQUUxRCw4REFBQ0Y7NEJBQUtWLFdBQVU7OzhDQUNkLDhEQUFDVztvQ0FBRVgsV0FBVTs4Q0FBZ0I7Ozs7OztnQ0FBWTtnQ0FBRUosUUFBUWlCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10RSxFQUFFO0dBdENXbEI7O1FBQ0lOLHNEQUFTQTs7O0tBRGJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY291bnRyeS1lbGVtZW50LnRzeD84YWVjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmltcG9ydCB7XG4gIENhcmQsXG4gIENhcmRDb250ZW50LFxuICBDYXJkRGVzY3JpcHRpb24sXG4gIENhcmRIZWFkZXIsXG4gIENhcmRUaXRsZSxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBDb3VudHJ5RWxlbWVudCA9ICh7IGNvdW50cnkgfTogeyBjb3VudHJ5OiBhbnkgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgcG9wdWxhdGlvbiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghY291bnRyeSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvdW50cnkucG9wdWxhdGlvbi50b0xvY2FsZVN0cmluZyhcImVuLUVOXCIpO1xuICB9LCBbY291bnRyeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gZGFyazpiZy1kYXJrIGRhcms6Ym9yZGVyLW5vbmUgaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC8ke2NvdW50cnkubmFtZX1gKX1cbiAgICA+XG4gICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJwLTBcIj5cbiAgICAgICAgPENhcmRUaXRsZT5cbiAgICAgICAgICA8aW1nIHNyYz17Y291bnRyeS5mbGFnfSBhbHQ9e2NvdW50cnkubmFtZX0gLz5cbiAgICAgICAgPC9DYXJkVGl0bGU+XG4gICAgICAgIDxDYXJkRGVzY3JpcHRpb24gY2xhc3NOYW1lPVwidGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBweS0yIHB0LTUgbWwtMTEgZm9udC1ib2xkXCI+e2NvdW50cnkubmFtZX08L2gyPlxuICAgICAgICA8L0NhcmREZXNjcmlwdGlvbj5cbiAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zIG14LTUgZmxleCBmbGV4LWNvbCBnYXAtMSBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgZm9udC1saWdodFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlBvcHVsYXRpb246PC9wPiB7cG9wdWxhdGlvbn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBnYXAtMSBmb250LWxpZ2h0XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+UmVnaW9uOjwvcD4ge2NvdW50cnkucmVnaW9ufVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xIGZvbnQtbGlnaHRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5DYXBpdGFsOjwvcD4ge2NvdW50cnkuY2FwaXRhbH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZU1lbW8iLCJ1c2VSb3V0ZXIiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRGVzY3JpcHRpb24iLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiQ291bnRyeUVsZW1lbnQiLCJjb3VudHJ5Iiwicm91dGVyIiwicG9wdWxhdGlvbiIsInRvTG9jYWxlU3RyaW5nIiwiY2xhc3NOYW1lIiwib25DbGljayIsInB1c2giLCJuYW1lIiwiaW1nIiwic3JjIiwiZmxhZyIsImFsdCIsImgyIiwiZGl2Iiwic3BhbiIsInAiLCJyZWdpb24iLCJjYXBpdGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/country-element.tsx\n"));

/***/ })

});