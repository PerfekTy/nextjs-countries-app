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

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_filter_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/filter-bar */ \"(app-pages-browser)/./components/filter-bar.tsx\");\n/* harmony import */ var _components_search_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/search-bar */ \"(app-pages-browser)/./components/search-bar.tsx\");\n/* harmony import */ var _components_countries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/countries */ \"(app-pages-browser)/./components/countries.tsx\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spinners */ \"(app-pages-browser)/./node_modules/react-spinners/esm/PuffLoader.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [countries, setCountries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getCountries = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{\n        try {\n            const res = await fetch(\"/api/countries\");\n            const data = await res.json();\n            setCountries(data);\n        } catch (err) {\n            console.log(err);\n        }\n        setLoading(false);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            getCountries();\n        }, 2000);\n        return ()=>clearTimeout(timer);\n    }, [\n        getCountries\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"static md:flex md:justify-between md:items-center xl:mx-20 mx-5 my-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_search_bar__WEBPACK_IMPORTED_MODULE_3__.SearchBar, {\n                        countries: countries\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\app\\\\page.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_filter_bar__WEBPACK_IMPORTED_MODULE_2__.FilterBar, {\n                        countries: countries\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\app\\\\page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\app\\\\page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    size: 200,\n                    color: \"#3bc04b\",\n                    loading: loading\n                }, void 0, false, {\n                    fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\app\\\\page.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\app\\\\page.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_countries__WEBPACK_IMPORTED_MODULE_4__.Countries, {\n                countries: countries\n            }, void 0, false, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\app\\\\page.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\NEXT\\\\nextjs-countries\\\\APP\\\\app\\\\page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"WdiXPE2ZLdOk/mmsDim0TuoqpCM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXlEO0FBRUw7QUFDQTtBQUNEO0FBQ1A7QUFFN0IsU0FBU087O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUU3QyxNQUFNVSxlQUFlWixrREFBV0EsQ0FBQztRQUMvQixJQUFJO1lBQ0YsTUFBTWEsTUFBTSxNQUFNQyxNQUFNO1lBQ3hCLE1BQU1DLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtZQUMzQkwsYUFBYUk7UUFDZixFQUFFLE9BQU9FLEtBQUs7WUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO1FBQ0FSLFdBQVc7SUFDYixHQUFHLEVBQUU7SUFFTFIsZ0RBQVNBLENBQUM7UUFDUixNQUFNbUIsUUFBUUMsV0FBVztZQUN2QlQ7UUFDRixHQUFHO1FBQ0gsT0FBTyxJQUFNVSxhQUFhRjtJQUM1QixHQUFHO1FBQUNSO0tBQWE7SUFFakIscUJBQ0UsOERBQUNXO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNwQiw2REFBU0E7d0JBQUNNLFdBQVdBOzs7Ozs7a0NBQ3RCLDhEQUFDUCw2REFBU0E7d0JBQUNPLFdBQVdBOzs7Ozs7Ozs7Ozs7WUFFdkJGLHdCQUNDLDhEQUFDaUI7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNsQixzREFBVUE7b0JBQUNvQixNQUFNO29CQUFLQyxPQUFNO29CQUFVbkIsU0FBU0E7Ozs7Ozs7Ozs7cUNBR2xELDhEQUFDSCw0REFBU0E7Z0JBQUNLLFdBQVdBOzs7Ozs7Ozs7Ozs7QUFJOUI7R0FyQ3dCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgRmlsdGVyQmFyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9maWx0ZXItYmFyXCI7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IENvdW50cmllcyB9IGZyb20gXCJAL2NvbXBvbmVudHMvY291bnRyaWVzXCI7XG5pbXBvcnQgeyBQdWZmTG9hZGVyIH0gZnJvbSBcInJlYWN0LXNwaW5uZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbY291bnRyaWVzLCBzZXRDb3VudHJpZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGdldENvdW50cmllcyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NvdW50cmllc1wiKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgc2V0Q291bnRyaWVzKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBnZXRDb3VudHJpZXMoKTtcbiAgICB9LCAyMDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgfSwgW2dldENvdW50cmllc10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpYyBtZDpmbGV4IG1kOmp1c3RpZnktYmV0d2VlbiBtZDppdGVtcy1jZW50ZXIgeGw6bXgtMjAgbXgtNSBteS0xMFwiPlxuICAgICAgICA8U2VhcmNoQmFyIGNvdW50cmllcz17Y291bnRyaWVzfSAvPlxuICAgICAgICA8RmlsdGVyQmFyIGNvdW50cmllcz17Y291bnRyaWVzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxQdWZmTG9hZGVyIHNpemU9ezIwMH0gY29sb3I9XCIjM2JjMDRiXCIgbG9hZGluZz17bG9hZGluZ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8Q291bnRyaWVzIGNvdW50cmllcz17Y291bnRyaWVzfSAvPlxuICAgICAgKX1cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZpbHRlckJhciIsIlNlYXJjaEJhciIsIkNvdW50cmllcyIsIlB1ZmZMb2FkZXIiLCJIb21lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjb3VudHJpZXMiLCJzZXRDb3VudHJpZXMiLCJnZXRDb3VudHJpZXMiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJzaXplIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});