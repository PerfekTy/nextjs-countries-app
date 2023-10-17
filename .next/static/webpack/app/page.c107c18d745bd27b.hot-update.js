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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CountryElement: function() { return /* binding */ CountryElement; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* __next_internal_client_entry_do_not_use__ CountryElement auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst CountryElement = (param)=>{\n    let { country } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const population = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        if (!country) {\n            return null;\n        }\n        return country.population.toLocaleString(\"en-EN\");\n    }, [\n        country\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.Card, {\n        className: \"w-[315px] h-[390px] mx-auto dark:bg-dark dark:border-none hover:scale-105 transition cursor-pointer\",\n        onClick: ()=>router.push(\"/\".concat(country.name)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {\n                className: \"p-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardTitle, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: country.flags.png,\n                            width: 265,\n                            height: 160,\n                            alt: \"\".concat(country.name, \" flag\"),\n                            className: \"w-full rounded-t-lg\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardDescription, {\n                        className: \"text-black dark:text-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-xl py-2 pt-5 ml-11 font-bold\",\n                            children: country.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardContent, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-3 mx-5 flex flex-col gap-1 justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"flex gap-1 font-light\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-semibold\",\n                                    children: \"Population:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                population\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"flex gap-1 font-light\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-semibold\",\n                                    children: \"Region:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                country.region\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"flex gap-1 font-light\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-semibold\",\n                                    children: \"Capital:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                country.capital\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\components\\\\country-element.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CountryElement, \"ILzX/7qDxNY5Yr2fql3PHvErKZ4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CountryElement;\nvar _c;\n$RefreshReg$(_c, \"CountryElement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY291bnRyeS1lbGVtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVnQztBQUNZO0FBQ2I7QUFRRDtBQUV2QixNQUFNUSxpQkFBaUI7UUFBQyxFQUFFQyxPQUFPLEVBQW9COztJQUMxRCxNQUFNQyxTQUFTVCwwREFBU0E7SUFDeEIsTUFBTVUsYUFBYVgsOENBQU9BLENBQUM7UUFDekIsSUFBSSxDQUFDUyxTQUFTO1lBQ1osT0FBTztRQUNUO1FBRUEsT0FBT0EsUUFBUUUsVUFBVSxDQUFDQyxjQUFjLENBQUM7SUFDM0MsR0FBRztRQUFDSDtLQUFRO0lBRVoscUJBQ0UsOERBQUNOLHFEQUFJQTtRQUNIVSxXQUFVO1FBQ1ZDLFNBQVMsSUFBTUosT0FBT0ssSUFBSSxDQUFDLElBQWlCLE9BQWJOLFFBQVFPLElBQUk7OzBCQUUzQyw4REFBQ1YsMkRBQVVBO2dCQUFDTyxXQUFVOztrQ0FDcEIsOERBQUNOLDBEQUFTQTtrQ0FDUiw0RUFBQ0wsbURBQUtBOzRCQUNKZSxLQUFLUixRQUFRUyxLQUFLLENBQUNDLEdBQUc7NEJBQ3RCQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxLQUFLLEdBQWdCLE9BQWJiLFFBQVFPLElBQUksRUFBQzs0QkFDckJILFdBQVU7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDUixnRUFBZUE7d0JBQUNRLFdBQVU7a0NBQ3pCLDRFQUFDVTs0QkFBR1YsV0FBVTtzQ0FBcUNKLFFBQVFPLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUduRSw4REFBQ1osNERBQVdBOzBCQUNWLDRFQUFDb0I7b0JBQUlYLFdBQVU7O3NDQUNiLDhEQUFDWTs0QkFBS1osV0FBVTs7OENBQ2QsOERBQUNhO29DQUFFYixXQUFVOzhDQUFnQjs7Ozs7O2dDQUFlO2dDQUFFRjs7Ozs7OztzQ0FFaEQsOERBQUNjOzRCQUFLWixXQUFVOzs4Q0FDZCw4REFBQ2E7b0NBQUViLFdBQVU7OENBQWdCOzs7Ozs7Z0NBQVc7Z0NBQUVKLFFBQVFrQixNQUFNOzs7Ozs7O3NDQUUxRCw4REFBQ0Y7NEJBQUtaLFdBQVU7OzhDQUNkLDhEQUFDYTtvQ0FBRWIsV0FBVTs4Q0FBZ0I7Ozs7OztnQ0FBWTtnQ0FBRUosUUFBUW1CLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10RSxFQUFFO0dBNUNXcEI7O1FBQ0lQLHNEQUFTQTs7O0tBRGJPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY291bnRyeS1lbGVtZW50LnRzeD84YWVjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgQ2FyZENvbnRlbnQsXG4gIENhcmREZXNjcmlwdGlvbixcbiAgQ2FyZEhlYWRlcixcbiAgQ2FyZFRpdGxlLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcblxuZXhwb3J0IGNvbnN0IENvdW50cnlFbGVtZW50ID0gKHsgY291bnRyeSB9OiB7IGNvdW50cnk6IGFueSB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBwb3B1bGF0aW9uID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFjb3VudHJ5KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY291bnRyeS5wb3B1bGF0aW9uLnRvTG9jYWxlU3RyaW5nKFwiZW4tRU5cIik7XG4gIH0sIFtjb3VudHJ5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgY2xhc3NOYW1lPVwidy1bMzE1cHhdIGgtWzM5MHB4XSBteC1hdXRvIGRhcms6YmctZGFyayBkYXJrOmJvcmRlci1ub25lIGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uIGN1cnNvci1wb2ludGVyXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvJHtjb3VudHJ5Lm5hbWV9YCl9XG4gICAgPlxuICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwicC0wXCI+XG4gICAgICAgIDxDYXJkVGl0bGU+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e2NvdW50cnkuZmxhZ3MucG5nfVxuICAgICAgICAgICAgd2lkdGg9ezI2NX1cbiAgICAgICAgICAgIGhlaWdodD17MTYwfVxuICAgICAgICAgICAgYWx0PXtgJHtjb3VudHJ5Lm5hbWV9IGZsYWdgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtdC1sZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9DYXJkVGl0bGU+XG4gICAgICAgIDxDYXJkRGVzY3JpcHRpb24gY2xhc3NOYW1lPVwidGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBweS0yIHB0LTUgbWwtMTEgZm9udC1ib2xkXCI+e2NvdW50cnkubmFtZX08L2gyPlxuICAgICAgICA8L0NhcmREZXNjcmlwdGlvbj5cbiAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zIG14LTUgZmxleCBmbGV4LWNvbCBnYXAtMSBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgZm9udC1saWdodFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlBvcHVsYXRpb246PC9wPiB7cG9wdWxhdGlvbn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBnYXAtMSBmb250LWxpZ2h0XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+UmVnaW9uOjwvcD4ge2NvdW50cnkucmVnaW9ufVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xIGZvbnQtbGlnaHRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5DYXBpdGFsOjwvcD4ge2NvdW50cnkuY2FwaXRhbH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZU1lbW8iLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmREZXNjcmlwdGlvbiIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJDb3VudHJ5RWxlbWVudCIsImNvdW50cnkiLCJyb3V0ZXIiLCJwb3B1bGF0aW9uIiwidG9Mb2NhbGVTdHJpbmciLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicHVzaCIsIm5hbWUiLCJzcmMiLCJmbGFncyIsInBuZyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDIiLCJkaXYiLCJzcGFuIiwicCIsInJlZ2lvbiIsImNhcGl0YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/country-element.tsx\n"));

/***/ })

});