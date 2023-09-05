"use strict";
exports.id = 558;
exports.ids = [558];
exports.modules = {

/***/ 98:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function Loading({ isLoading }) {
    if (!isLoading) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "animate-spin rounded-full h-16 w-16 border-t-4 border-r-4 border-tourBrown"
        })
    });
}


/***/ }),

/***/ 5348:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebaseConfig__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebaseConfig__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function useAuth() {
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const { replace, pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const login = (email, password)=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I, email, password).catch((error)=>alert(error.message));
    };
    const logout = ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setIsLoading(true);
        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I, (currentuser)=>{
            if (currentuser && pathname === "/admin/dashboard-es") {
                return setIsLoading(false);
            } else if (currentuser && pathname === "/admin/dashboard-port") {
                return setIsLoading(false);
            } else if (currentuser) replace("/admin/dashboard-en");
            else replace("/admin/login");
        });
        setTimeout(()=>setIsLoading(false), 700);
        return ()=>unsubscribe();
    }, [
        _firebaseConfig__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I
    ]);
    return {
        login,
        logout,
        isLoading
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;