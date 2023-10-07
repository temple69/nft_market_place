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
exports.id = "app/api/nfts/get/route";
exports.ids = ["app/api/nfts/get/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

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

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fnfts%2Fget%2Froute&page=%2Fapi%2Fnfts%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnfts%2Fget%2Froute.ts&appDir=%2FUsers%2Fscript%2FDesktop%2Fprojects%2Fnft_market_place%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fscript%2FDesktop%2Fprojects%2Fnft_market_place&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fnfts%2Fget%2Froute&page=%2Fapi%2Fnfts%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnfts%2Fget%2Froute.ts&appDir=%2FUsers%2Fscript%2FDesktop%2Fprojects%2Fnft_market_place%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fscript%2FDesktop%2Fprojects%2Fnft_market_place&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_script_Desktop_projects_nft_market_place_app_api_nfts_get_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/nfts/get/route.ts */ \"(rsc)/./app/api/nfts/get/route.ts\");\n\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n// @ts-expect-error - replaced by webpack/turbopack loader\n\nconst AppRouteRouteModule = next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule;\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/nfts/get/route\",\n        pathname: \"/api/nfts/get\",\n        filename: \"route\",\n        bundlePath: \"app/api/nfts/get/route\"\n    },\n    resolvedPagePath: \"/Users/script/Desktop/projects/nft_market_place/app/api/nfts/get/route.ts\",\n    nextConfigOutput,\n    userland: _Users_script_Desktop_projects_nft_market_place_app_api_nfts_get_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/nfts/get/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZuZnRzJTJGZ2V0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZuZnRzJTJGZ2V0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGbmZ0cyUyRmdldCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNjcmlwdCUyRkRlc2t0b3AlMkZwcm9qZWN0cyUyRm5mdF9tYXJrZXRfcGxhY2UlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGc2NyaXB0JTJGRGVza3RvcCUyRnByb2plY3RzJTJGbmZ0X21hcmtldF9wbGFjZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNoRDtBQUMwRjtBQUMzQjtBQUMvRDtBQUNzRztBQUN0Ryw0QkFBNEIsZ0hBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ2lKOztBQUVqSiIsInNvdXJjZXMiOlsid2VicGFjazovL25mdC8/NmYwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJuZXh0L2Rpc3Qvc2VydmVyL25vZGUtcG9seWZpbGwtaGVhZGVyc1wiO1xuLy8gQHRzLWlnbm9yZSB0aGlzIG5lZWQgdG8gYmUgaW1wb3J0ZWQgZnJvbSBuZXh0L2Rpc3QgdG8gYmUgZXh0ZXJuYWxcbmltcG9ydCAqIGFzIG1vZHVsZSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuLy8gQHRzLWV4cGVjdC1lcnJvciAtIHJlcGxhY2VkIGJ5IHdlYnBhY2svdHVyYm9wYWNrIGxvYWRlclxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9zY3JpcHQvRGVza3RvcC9wcm9qZWN0cy9uZnRfbWFya2V0X3BsYWNlL2FwcC9hcGkvbmZ0cy9nZXQvcm91dGUudHNcIjtcbmNvbnN0IEFwcFJvdXRlUm91dGVNb2R1bGUgPSBtb2R1bGUuQXBwUm91dGVSb3V0ZU1vZHVsZTtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL25mdHMvZ2V0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbmZ0cy9nZXRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL25mdHMvZ2V0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3NjcmlwdC9EZXNrdG9wL3Byb2plY3RzL25mdF9tYXJrZXRfcGxhY2UvYXBwL2FwaS9uZnRzL2dldC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9uZnRzL2dldC9yb3V0ZVwiO1xuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fnfts%2Fget%2Froute&page=%2Fapi%2Fnfts%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnfts%2Fget%2Froute.ts&appDir=%2FUsers%2Fscript%2FDesktop%2Fprojects%2Fnft_market_place%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fscript%2FDesktop%2Fprojects%2Fnft_market_place&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/nfts/get/route.ts":
/*!***********************************!*\
  !*** ./app/api/nfts/get/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n// /api/nfts/get/index.ts\n\n\nasync function GET(req, res) {\n    if (req.method !== \"GET\") {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"Method not allowed\"\n        }, {\n            status: 405\n        });\n    }\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://api.opensea.io/api/v1/assets\", {\n            headers: {\n                \"X-API-KEY\": \"0ade3081dbe445b99bde612a3069a364\"\n            },\n            params: {\n                order_direction: \"desc\",\n                offset: \"0\",\n                limit: \"200\" // Increased limit to fetch more assets as we'll be filtering out some\n            }\n        });\n        const seenCollections = new Set();\n        const uniqueCollectionAssets = [];\n        const otherAssets = [];\n        for (const asset of response.data.assets){\n            if (uniqueCollectionAssets.length < 22 && !seenCollections.has(asset.collection.slug)) {\n                seenCollections.add(asset.collection.slug);\n                uniqueCollectionAssets.push(asset);\n            } else {\n                otherAssets.push(asset);\n            }\n        }\n        // Combine the unique collection assets with the other assets\n        const combinedAssets = [\n            ...uniqueCollectionAssets,\n            ...otherAssets\n        ];\n        // Extract and filter the required data from the combined assets\n        const filteredData = combinedAssets.slice(0, 52).map((asset)=>({\n                name: asset.asset_contract.name,\n                description: asset.description,\n                token_id: asset.token_id,\n                address: asset.asset_contract.address,\n                image: asset.asset_contract.image_url,\n                video: asset.animation_url,\n                date: asset.asset_contract.created_date,\n                blockchain: asset.asset_contract.chain_identifier,\n                price: asset.asset_contract.seller_fee_basis_points * 0.0001\n            }));\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(filteredData, {\n            status: 200\n        });\n    } catch (error) {\n        let errorMessage = \"Internal Server Error\";\n        if (error instanceof Error) {\n            errorMessage = error.message;\n        }\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: errorMessage,\n            details: error instanceof Error ? error.message : error\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL25mdHMvZ2V0L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlCQUF5QjtBQUdDO0FBQ2lCO0FBRXBDLGVBQWVFLElBQUlDLEdBQW1CLEVBQUVDLEdBQW9CO0lBQ2pFLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLE9BQU9KLGtGQUFZQSxDQUFDSyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFxQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM1RTtJQUVBLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1ULDZDQUFLQSxDQUFDVSxHQUFHLENBQUMsd0NBQXdDO1lBQ3ZFQyxTQUFTO2dCQUNQLGFBQWE7WUFDZjtZQUNBQyxRQUFRO2dCQUNOQyxpQkFBaUI7Z0JBQ2pCQyxRQUFRO2dCQUNSQyxPQUFPLE1BQU0sc0VBQXNFO1lBQ3JGO1FBQ0Y7UUFFQSxNQUFNQyxrQkFBa0IsSUFBSUM7UUFDNUIsTUFBTUMseUJBQXlCLEVBQUU7UUFDakMsTUFBTUMsY0FBYyxFQUFFO1FBRXRCLEtBQUssTUFBTUMsU0FBU1gsU0FBU1ksSUFBSSxDQUFDQyxNQUFNLENBQUU7WUFDeEMsSUFBSUosdUJBQXVCSyxNQUFNLEdBQUcsTUFBTSxDQUFDUCxnQkFBZ0JRLEdBQUcsQ0FBQ0osTUFBTUssVUFBVSxDQUFDQyxJQUFJLEdBQUc7Z0JBQ3JGVixnQkFBZ0JXLEdBQUcsQ0FBQ1AsTUFBTUssVUFBVSxDQUFDQyxJQUFJO2dCQUN6Q1IsdUJBQXVCVSxJQUFJLENBQUNSO1lBQzlCLE9BQU87Z0JBQ0xELFlBQVlTLElBQUksQ0FBQ1I7WUFDbkI7UUFDRjtRQUVBLDZEQUE2RDtRQUM3RCxNQUFNUyxpQkFBaUI7ZUFBSVg7ZUFBMkJDO1NBQVk7UUFFbEUsZ0VBQWdFO1FBQ2hFLE1BQU1XLGVBQWVELGVBQWVFLEtBQUssQ0FBQyxHQUFHLElBQUlDLEdBQUcsQ0FBQ1osQ0FBQUEsUUFBVTtnQkFDN0RhLE1BQU1iLE1BQU1jLGNBQWMsQ0FBQ0QsSUFBSTtnQkFDL0JFLGFBQWFmLE1BQU1lLFdBQVc7Z0JBQzlCQyxVQUFVaEIsTUFBTWdCLFFBQVE7Z0JBQ3hCQyxTQUFTakIsTUFBTWMsY0FBYyxDQUFDRyxPQUFPO2dCQUNyQ0MsT0FBT2xCLE1BQU1jLGNBQWMsQ0FBQ0ssU0FBUztnQkFDckNDLE9BQU9wQixNQUFNcUIsYUFBYTtnQkFDMUJDLE1BQU10QixNQUFNYyxjQUFjLENBQUNTLFlBQVk7Z0JBQ3ZDQyxZQUFZeEIsTUFBTWMsY0FBYyxDQUFDVyxnQkFBZ0I7Z0JBQ2pEQyxPQUFPMUIsTUFBTWMsY0FBYyxDQUFDYSx1QkFBdUIsR0FBRztZQUN4RDtRQUVBLE9BQU85QyxrRkFBWUEsQ0FBQ0ssSUFBSSxDQUFDd0IsY0FBYztZQUFFdEIsUUFBUTtRQUFJO0lBRXZELEVBQUUsT0FBT3dDLE9BQU87UUFDZCxJQUFJQyxlQUFlO1FBQ25CLElBQUlELGlCQUFpQkUsT0FBTztZQUMxQkQsZUFBZUQsTUFBTXpDLE9BQU87UUFDOUI7UUFDQSxPQUFPTixrRkFBWUEsQ0FBQ0ssSUFBSSxDQUN0QjtZQUNFQyxTQUFTMEM7WUFDVEUsU0FBU0gsaUJBQWlCRSxRQUFRRixNQUFNekMsT0FBTyxHQUFHeUM7UUFDcEQsR0FDQTtZQUFFeEMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQvLi9hcHAvYXBpL25mdHMvZ2V0L3JvdXRlLnRzPzdiNmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gL2FwaS9uZnRzL2dldC9pbmRleC50c1xuXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSAnR0VUJykge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSwgeyBzdGF0dXM6IDQwNSB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLm9wZW5zZWEuaW8vYXBpL3YxL2Fzc2V0cycsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1gtQVBJLUtFWSc6ICcwYWRlMzA4MWRiZTQ0NWI5OWJkZTYxMmEzMDY5YTM2NCdcbiAgICAgIH0sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgb3JkZXJfZGlyZWN0aW9uOiAnZGVzYycsXG4gICAgICAgIG9mZnNldDogJzAnLFxuICAgICAgICBsaW1pdDogJzIwMCcgLy8gSW5jcmVhc2VkIGxpbWl0IHRvIGZldGNoIG1vcmUgYXNzZXRzIGFzIHdlJ2xsIGJlIGZpbHRlcmluZyBvdXQgc29tZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2VlbkNvbGxlY3Rpb25zID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IHVuaXF1ZUNvbGxlY3Rpb25Bc3NldHMgPSBbXTtcbiAgICBjb25zdCBvdGhlckFzc2V0cyA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBhc3NldCBvZiByZXNwb25zZS5kYXRhLmFzc2V0cykge1xuICAgICAgaWYgKHVuaXF1ZUNvbGxlY3Rpb25Bc3NldHMubGVuZ3RoIDwgMjIgJiYgIXNlZW5Db2xsZWN0aW9ucy5oYXMoYXNzZXQuY29sbGVjdGlvbi5zbHVnKSkge1xuICAgICAgICBzZWVuQ29sbGVjdGlvbnMuYWRkKGFzc2V0LmNvbGxlY3Rpb24uc2x1Zyk7XG4gICAgICAgIHVuaXF1ZUNvbGxlY3Rpb25Bc3NldHMucHVzaChhc3NldCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdGhlckFzc2V0cy5wdXNoKGFzc2V0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb21iaW5lIHRoZSB1bmlxdWUgY29sbGVjdGlvbiBhc3NldHMgd2l0aCB0aGUgb3RoZXIgYXNzZXRzXG4gICAgY29uc3QgY29tYmluZWRBc3NldHMgPSBbLi4udW5pcXVlQ29sbGVjdGlvbkFzc2V0cywgLi4ub3RoZXJBc3NldHNdO1xuXG4gICAgLy8gRXh0cmFjdCBhbmQgZmlsdGVyIHRoZSByZXF1aXJlZCBkYXRhIGZyb20gdGhlIGNvbWJpbmVkIGFzc2V0c1xuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGNvbWJpbmVkQXNzZXRzLnNsaWNlKDAsIDUyKS5tYXAoYXNzZXQgPT4gKHtcbiAgICAgIG5hbWU6IGFzc2V0LmFzc2V0X2NvbnRyYWN0Lm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogYXNzZXQuZGVzY3JpcHRpb24sXG4gICAgICB0b2tlbl9pZDogYXNzZXQudG9rZW5faWQsXG4gICAgICBhZGRyZXNzOiBhc3NldC5hc3NldF9jb250cmFjdC5hZGRyZXNzLFxuICAgICAgaW1hZ2U6IGFzc2V0LmFzc2V0X2NvbnRyYWN0LmltYWdlX3VybCxcbiAgICAgIHZpZGVvOiBhc3NldC5hbmltYXRpb25fdXJsLFxuICAgICAgZGF0ZTogYXNzZXQuYXNzZXRfY29udHJhY3QuY3JlYXRlZF9kYXRlLFxuICAgICAgYmxvY2tjaGFpbjogYXNzZXQuYXNzZXRfY29udHJhY3QuY2hhaW5faWRlbnRpZmllcixcbiAgICAgIHByaWNlOiBhc3NldC5hc3NldF9jb250cmFjdC5zZWxsZXJfZmVlX2Jhc2lzX3BvaW50cyAqIDAuMDAwMVxuICAgIH0pKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihmaWx0ZXJlZERhdGEsIHsgc3RhdHVzOiAyMDAgfSk7XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsZXQgZXJyb3JNZXNzYWdlID0gXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIjtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICB9XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAge1xuICAgICAgICBtZXNzYWdlOiBlcnJvck1lc3NhZ2UsXG4gICAgICAgIGRldGFpbHM6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IsXG4gICAgICB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiTmV4dFJlc3BvbnNlIiwiR0VUIiwicmVxIiwicmVzIiwibWV0aG9kIiwianNvbiIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJyZXNwb25zZSIsImdldCIsImhlYWRlcnMiLCJwYXJhbXMiLCJvcmRlcl9kaXJlY3Rpb24iLCJvZmZzZXQiLCJsaW1pdCIsInNlZW5Db2xsZWN0aW9ucyIsIlNldCIsInVuaXF1ZUNvbGxlY3Rpb25Bc3NldHMiLCJvdGhlckFzc2V0cyIsImFzc2V0IiwiZGF0YSIsImFzc2V0cyIsImxlbmd0aCIsImhhcyIsImNvbGxlY3Rpb24iLCJzbHVnIiwiYWRkIiwicHVzaCIsImNvbWJpbmVkQXNzZXRzIiwiZmlsdGVyZWREYXRhIiwic2xpY2UiLCJtYXAiLCJuYW1lIiwiYXNzZXRfY29udHJhY3QiLCJkZXNjcmlwdGlvbiIsInRva2VuX2lkIiwiYWRkcmVzcyIsImltYWdlIiwiaW1hZ2VfdXJsIiwidmlkZW8iLCJhbmltYXRpb25fdXJsIiwiZGF0ZSIsImNyZWF0ZWRfZGF0ZSIsImJsb2NrY2hhaW4iLCJjaGFpbl9pZGVudGlmaWVyIiwicHJpY2UiLCJzZWxsZXJfZmVlX2Jhc2lzX3BvaW50cyIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwiRXJyb3IiLCJkZXRhaWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/nfts/get/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/axios","vendor-chunks/asynckit","vendor-chunks/debug","vendor-chunks/mime-db","vendor-chunks/form-data","vendor-chunks/follow-redirects","vendor-chunks/supports-color","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/mime-types","vendor-chunks/has-flag","vendor-chunks/delayed-stream","vendor-chunks/combined-stream"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fnfts%2Fget%2Froute&page=%2Fapi%2Fnfts%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnfts%2Fget%2Froute.ts&appDir=%2FUsers%2Fscript%2FDesktop%2Fprojects%2Fnft_market_place%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fscript%2FDesktop%2Fprojects%2Fnft_market_place&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();