"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/nfts/create/route";
exports.ids = ["app/api/nfts/create/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/@vercel/og/index.node.js":
/*!**************************************************************!*\
  !*** external "next/dist/compiled/@vercel/og/index.node.js" ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fnfts%2Fcreate%2Froute&page=%2Fapi%2Fnfts%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnfts%2Fcreate%2Froute.tsx&appDir=%2FUsers%2Fscript%2FDesktop%2Fprojects%2Fnft_market_place%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fscript%2FDesktop%2Fprojects%2Fnft_market_place&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fnfts%2Fcreate%2Froute&page=%2Fapi%2Fnfts%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnfts%2Fcreate%2Froute.tsx&appDir=%2FUsers%2Fscript%2FDesktop%2Fprojects%2Fnft_market_place%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fscript%2FDesktop%2Fprojects%2Fnft_market_place&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_script_Desktop_projects_nft_market_place_app_api_nfts_create_route_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/nfts/create/route.tsx */ \"(rsc)/./app/api/nfts/create/route.tsx\");\n\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n// @ts-expect-error - replaced by webpack/turbopack loader\n\nconst AppRouteRouteModule = next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule;\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/nfts/create/route\",\n        pathname: \"/api/nfts/create\",\n        filename: \"route\",\n        bundlePath: \"app/api/nfts/create/route\"\n    },\n    resolvedPagePath: \"/Users/script/Desktop/projects/nft_market_place/app/api/nfts/create/route.tsx\",\n    nextConfigOutput,\n    userland: _Users_script_Desktop_projects_nft_market_place_app_api_nfts_create_route_tsx__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/nfts/create/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZuZnRzJTJGY3JlYXRlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZuZnRzJTJGY3JlYXRlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGbmZ0cyUyRmNyZWF0ZSUyRnJvdXRlLnRzeCZhcHBEaXI9JTJGVXNlcnMlMkZzY3JpcHQlMkZEZXNrdG9wJTJGcHJvamVjdHMlMkZuZnRfbWFya2V0X3BsYWNlJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnNjcmlwdCUyRkRlc2t0b3AlMkZwcm9qZWN0cyUyRm5mdF9tYXJrZXRfcGxhY2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaEQ7QUFDMEY7QUFDM0I7QUFDL0Q7QUFDMEc7QUFDMUcsNEJBQTRCLGdIQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQvPzEwZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwibmV4dC9kaXN0L3NlcnZlci9ub2RlLXBvbHlmaWxsLWhlYWRlcnNcIjtcbi8vIEB0cy1pZ25vcmUgdGhpcyBuZWVkIHRvIGJlIGltcG9ydGVkIGZyb20gbmV4dC9kaXN0IHRvIGJlIGV4dGVybmFsXG5pbXBvcnQgKiBhcyBtb2R1bGUgZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbi8vIEB0cy1leHBlY3QtZXJyb3IgLSByZXBsYWNlZCBieSB3ZWJwYWNrL3R1cmJvcGFjayBsb2FkZXJcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvc2NyaXB0L0Rlc2t0b3AvcHJvamVjdHMvbmZ0X21hcmtldF9wbGFjZS9hcHAvYXBpL25mdHMvY3JlYXRlL3JvdXRlLnRzeFwiO1xuY29uc3QgQXBwUm91dGVSb3V0ZU1vZHVsZSA9IG1vZHVsZS5BcHBSb3V0ZVJvdXRlTW9kdWxlO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbmZ0cy9jcmVhdGUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9uZnRzL2NyZWF0ZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbmZ0cy9jcmVhdGUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvc2NyaXB0L0Rlc2t0b3AvcHJvamVjdHMvbmZ0X21hcmtldF9wbGFjZS9hcHAvYXBpL25mdHMvY3JlYXRlL3JvdXRlLnRzeFwiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9uZnRzL2NyZWF0ZS9yb3V0ZVwiO1xuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fnfts%2Fcreate%2Froute&page=%2Fapi%2Fnfts%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnfts%2Fcreate%2Froute.tsx&appDir=%2FUsers%2Fscript%2FDesktop%2Fprojects%2Fnft_market_place%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fscript%2FDesktop%2Fprojects%2Fnft_market_place&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/nfts/create/route.tsx":
/*!***************************************!*\
  !*** ./app/api/nfts/create/route.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _node_modules_next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/node_modules/next/server */ \"(rsc)/./node_modules/next/server.js\");\n/* harmony import */ var _node_modules_next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/middleware/auth */ \"(rsc)/./middleware/auth.ts\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// Load environment variables\ndotenv__WEBPACK_IMPORTED_MODULE_3___default().config();\nasync function POST(req, res) {\n    try {\n        // Authenticate the user\n        await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_2__.authenticateUser)(req, res);\n        // If no user is attached to the request, it means authentication failed\n        if (!req.user || !req.user.userId) {\n            return _node_modules_next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Authentication failed.\"\n            }, {\n                status: 401\n            });\n        }\n        const { name, image, description, blockchain } = req.body;\n        if (!name || !image || !description || !blockchain) {\n            return _node_modules_next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Missing required fields.\"\n            }, {\n                status: 400\n            });\n        }\n        // Create the NFT post\n        const nftpost = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.nftpost.create({\n            data: {\n                name,\n                image,\n                description,\n                blockchain,\n                userId: req.user.userId\n            }\n        });\n        return _node_modules_next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(nftpost, {\n            status: 201\n        });\n    } catch (error) {\n        let errorMessage = \"Internal Server Error\";\n        if (error instanceof Error) {\n            errorMessage = error.message;\n        }\n        return _node_modules_next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: errorMessage,\n            details: error instanceof Error ? error.message : error\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL25mdHMvY3JlYXRlL3JvdXRlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzBEO0FBQzVCO0FBQ3VCO0FBRXpCO0FBRTVCLDZCQUE2QjtBQUM3Qkcsb0RBQWE7QUFTTixlQUFlRSxLQUFLQyxHQUEyQixFQUFFQyxHQUFvQjtJQUN4RSxJQUFJO1FBQ0Esd0JBQXdCO1FBQ3hCLE1BQU1MLGtFQUFnQkEsQ0FBQ0ksS0FBS0M7UUFFNUIsd0VBQXdFO1FBQ3hFLElBQUksQ0FBQ0QsSUFBSUUsSUFBSSxJQUFJLENBQUNGLElBQUlFLElBQUksQ0FBQ0MsTUFBTSxFQUFFO1lBQy9CLE9BQU9ULG1FQUFZQSxDQUFDVSxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBeUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ2xGO1FBRUEsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxVQUFVLEVBQUUsR0FBR1YsSUFBSVcsSUFBSTtRQUV6RCxJQUFJLENBQUNKLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDQyxlQUFlLENBQUNDLFlBQVk7WUFDaEQsT0FBT2hCLG1FQUFZQSxDQUFDVSxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBMkIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3BGO1FBRUEsc0JBQXNCO1FBQ3RCLE1BQU1NLFVBQVUsTUFBTWpCLHVDQUFFQSxDQUFDaUIsT0FBTyxDQUFDQyxNQUFNLENBQUM7WUFDcENDLE1BQU07Z0JBQ0ZQO2dCQUNBQztnQkFDQUM7Z0JBQ0FDO2dCQUNBUCxRQUFRSCxJQUFJRSxJQUFJLENBQUNDLE1BQU07WUFDM0I7UUFDSjtRQUVBLE9BQU9ULG1FQUFZQSxDQUFDVSxJQUFJLENBQUNRLFNBQVM7WUFBRU4sUUFBUTtRQUFJO0lBRXBELEVBQUUsT0FBT1MsT0FBTztRQUNaLElBQUlDLGVBQWU7UUFDbkIsSUFBSUQsaUJBQWlCRSxPQUFPO1lBQ3hCRCxlQUFlRCxNQUFNVixPQUFPO1FBQ2hDO1FBQ0EsT0FBT1gsbUVBQVlBLENBQUNVLElBQUksQ0FBQztZQUNyQkMsU0FBU1c7WUFDVEUsU0FBU0gsaUJBQWlCRSxRQUFRRixNQUFNVixPQUFPLEdBQUdVO1FBQ3RELEdBQUc7WUFBRVQsUUFBUTtRQUFJO0lBQ3JCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQvLi9hcHAvYXBpL25mdHMvY3JlYXRlL3JvdXRlLnRzeD8zNTQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJAL25vZGVfbW9kdWxlcy9uZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9saWIvZGJcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0ZVVzZXIgfSBmcm9tIFwiQC9taWRkbGV3YXJlL2F1dGhcIjtcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5cbi8vIExvYWQgZW52aXJvbm1lbnQgdmFyaWFibGVzXG5kb3RlbnYuY29uZmlnKCk7XG5cbmludGVyZmFjZSBFeHRlbmRlZE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgTmV4dEFwaVJlcXVlc3Qge1xuICAgIHVzZXI/OiB7XG4gICAgICAgIHVzZXJJZDogbnVtYmVyO1xuICAgICAgICBlbWFpbDogc3RyaW5nO1xuICAgIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogRXh0ZW5kZWROZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBBdXRoZW50aWNhdGUgdGhlIHVzZXJcbiAgICAgICAgYXdhaXQgYXV0aGVudGljYXRlVXNlcihyZXEsIHJlcyk7XG5cbiAgICAgICAgLy8gSWYgbm8gdXNlciBpcyBhdHRhY2hlZCB0byB0aGUgcmVxdWVzdCwgaXQgbWVhbnMgYXV0aGVudGljYXRpb24gZmFpbGVkXG4gICAgICAgIGlmICghcmVxLnVzZXIgfHwgIXJlcS51c2VyLnVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJBdXRoZW50aWNhdGlvbiBmYWlsZWQuXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgaW1hZ2UsIGRlc2NyaXB0aW9uLCBibG9ja2NoYWluIH0gPSByZXEuYm9keTtcblxuICAgICAgICBpZiAoIW5hbWUgfHwgIWltYWdlIHx8ICFkZXNjcmlwdGlvbiB8fCAhYmxvY2tjaGFpbikge1xuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJNaXNzaW5nIHJlcXVpcmVkIGZpZWxkcy5cIiB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBORlQgcG9zdFxuICAgICAgICBjb25zdCBuZnRwb3N0ID0gYXdhaXQgZGIubmZ0cG9zdC5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgYmxvY2tjaGFpbixcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHJlcS51c2VyLnVzZXJJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24obmZ0cG9zdCwgeyBzdGF0dXM6IDIwMSB9KTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSBcIkludGVybmFsIFNlcnZlciBFcnJvclwiO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgZGV0YWlsczogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvcixcbiAgICAgICAgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZGIiLCJhdXRoZW50aWNhdGVVc2VyIiwiZG90ZW52IiwiY29uZmlnIiwiUE9TVCIsInJlcSIsInJlcyIsInVzZXIiLCJ1c2VySWQiLCJqc29uIiwibWVzc2FnZSIsInN0YXR1cyIsIm5hbWUiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiYmxvY2tjaGFpbiIsImJvZHkiLCJuZnRwb3N0IiwiY3JlYXRlIiwiZGF0YSIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwiRXJyb3IiLCJkZXRhaWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/nfts/create/route.tsx\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) {\n    globalForPrisma.prisma = prisma;\n}\nconst db = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLGtCQUFrQkM7QUFJeEIsTUFBTUMsU0FBU0YsZ0JBQWdCRSxNQUFNLElBQUksSUFBSUgsd0RBQVlBO0FBRXpELElBQUlJLElBQXFDLEVBQUU7SUFDekNILGdCQUFnQkUsTUFBTSxHQUFHQTtBQUMzQjtBQUVPLE1BQU1FLEtBQUtGLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQvLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHtcbiAgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59O1xuXG5jb25zdCBwcmlzbWEgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID8/IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hO1xufVxuXG5leHBvcnQgY29uc3QgZGIgPSBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsInByb2Nlc3MiLCJkYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./middleware/auth.ts":
/*!****************************!*\
  !*** ./middleware/auth.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authenticateUser: () => (/* binding */ authenticateUser)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst authenticateUser = async (req, res)=>{\n    const authHeader = req.headers.get(\"authorization\");\n    if (!authHeader) {\n        return res.status(401).json({\n            error: \"Authorization header is missing.\"\n        });\n    }\n    const token = authHeader.split(\" \")[1];\n    if (!token) {\n        return res.status(401).json({\n            error: \"Authentication token is missing.\"\n        });\n    }\n    try {\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET);\n        req.user = decoded;\n    } catch (error) {\n        if (error instanceof Error) {\n            console.error(\"Token verification error:\", error.message);\n            return res.status(401).json({\n                error: error.message\n            });\n        } else {\n            // Handle other types of errors or re-throw them\n            return res.status(500).json({\n                error: \"An unexpected error occurred.\"\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9taWRkbGV3YXJlL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQytCO0FBTXhCLE1BQU1DLG1CQUFtQixPQUFPQyxLQUE2QkM7SUFDaEUsTUFBTUMsYUFBYUYsSUFBSUcsT0FBTyxDQUFDQyxHQUFHLENBQUM7SUFFbkMsSUFBSSxDQUFDRixZQUFZO1FBQ2IsT0FBT0QsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQW1DO0lBQzVFO0lBRUEsTUFBTUMsUUFBUU4sV0FBV08sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBRXRDLElBQUksQ0FBQ0QsT0FBTztRQUNSLE9BQU9QLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFtQztJQUM1RTtJQUVBLElBQUk7UUFDQSxNQUFNRyxVQUFVWiwwREFBVSxDQUFDVSxPQUFPSSxRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDeERkLElBQUllLElBQUksR0FBR0w7SUFDZixFQUFFLE9BQU9ILE9BQU87UUFDWixJQUFJQSxpQkFBaUJTLE9BQU87WUFDeEJDLFFBQVFWLEtBQUssQ0FBQyw2QkFBNkJBLE1BQU1XLE9BQU87WUFDeEQsT0FBT2pCLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU9BLE1BQU1XLE9BQU87WUFBQztRQUN2RCxPQUFPO1lBQ0gsZ0RBQWdEO1lBQ2hELE9BQU9qQixJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQWdDO1FBQ3pFO0lBQ0o7QUFDSixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmZ0Ly4vbWlkZGxld2FyZS9hdXRoLnRzPzQ4YzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuXG5pbnRlcmZhY2UgRXh0ZW5kZWROZXh0QXBpUmVxdWVzdCBleHRlbmRzIE5leHRBcGlSZXF1ZXN0IHtcbiAgICB1c2VyPzogYW55OyAvLyBZb3UgY2FuIG1ha2UgdGhpcyBtb3JlIHNwZWNpZmljIGlmIHlvdSBrbm93IHRoZSBzaGFwZSBvZiB0aGUgdXNlciBvYmplY3Rcbn1cblxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZVVzZXIgPSBhc3luYyAocmVxOiBFeHRlbmRlZE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IGF1dGhIZWFkZXIgPSByZXEuaGVhZGVycy5nZXQoJ2F1dGhvcml6YXRpb24nKTtcblxuICAgIGlmICghYXV0aEhlYWRlcikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogJ0F1dGhvcml6YXRpb24gaGVhZGVyIGlzIG1pc3NpbmcuJyB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2tlbiA9IGF1dGhIZWFkZXIuc3BsaXQoJyAnKVsxXTtcblxuICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdBdXRoZW50aWNhdGlvbiB0b2tlbiBpcyBtaXNzaW5nLicgfSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgYXMgc3RyaW5nKTtcbiAgICAgICAgcmVxLnVzZXIgPSBkZWNvZGVkO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVG9rZW4gdmVyaWZpY2F0aW9uIGVycm9yOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSGFuZGxlIG90aGVyIHR5cGVzIG9mIGVycm9ycyBvciByZS10aHJvdyB0aGVtXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQuJyB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iXSwibmFtZXMiOlsiand0IiwiYXV0aGVudGljYXRlVXNlciIsInJlcSIsInJlcyIsImF1dGhIZWFkZXIiLCJoZWFkZXJzIiwiZ2V0Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwidG9rZW4iLCJzcGxpdCIsImRlY29kZWQiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsInVzZXIiLCJFcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./middleware/auth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/semver","vendor-chunks/next","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/yallist","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/dotenv","vendor-chunks/safe-buffer","vendor-chunks/ms","vendor-chunks/lru-cache","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fnfts%2Fcreate%2Froute&page=%2Fapi%2Fnfts%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnfts%2Fcreate%2Froute.tsx&appDir=%2FUsers%2Fscript%2FDesktop%2Fprojects%2Fnft_market_place%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fscript%2FDesktop%2Fprojects%2Fnft_market_place&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();