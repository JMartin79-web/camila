"use strict";
exports.id = 437;
exports.ids = [437];
exports.modules = {

/***/ 3485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Flags)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./assets/es.svg
/* harmony default export */ const es = ({"src":"/_next/static/media/es.7aeb0cc2.svg","height":100,"width":100,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./assets/en.svg
/* harmony default export */ const en = ({"src":"/_next/static/media/en.6f59f40a.svg","height":100,"width":100,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./assets/port.svg
/* harmony default export */ const port = ({"src":"/_next/static/media/port.c944f3e2.svg","height":100,"width":100,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Flags.jsx






const size = 25;
function Flags({ style, handleLangauge = console.log }) {
    const { pathname, push } = (0,router_.useRouter)();
    const handleFlagPress = (lang)=>{
        if (pathname === "/") handleLangauge(lang);
        else push("/admin/dashboard-" + lang);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: style,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                className: "hover:opacity-50",
                onClick: ()=>handleFlagPress("en"),
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: en,
                    alt: "english",
                    width: size,
                    height: size
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                className: "hover:opacity-50",
                onClick: ()=>handleFlagPress("es"),
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: es,
                    alt: "espa\xf1ol",
                    width: size,
                    height: size
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                className: "hover:opacity-50",
                onClick: ()=>handleFlagPress("port"),
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: port,
                    alt: "portugues",
                    width: size,
                    height: size
                })
            })
        ]
    });
}


/***/ }),

/***/ 7309:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ auth),
/* harmony export */   db: () => (/* binding */ db),
/* harmony export */   t: () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3392);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_storage__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_storage__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const firebaseConfig = {
    apiKey: "AIzaSyA5bU6q88ObffAxVCr2TJAZf3SZptjwQRQ",
    authDomain: "yourfriendinmendoza-a49d2.firebaseapp.com",
    projectId: "yourfriendinmendoza-a49d2",
    storageBucket: "yourfriendinmendoza-a49d2.appspot.com",
    messagingSenderId: "959015182413",
    appId: "1:959015182413:web:231c1c0812c05e5e21bc04"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getStorage)(app);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)(app);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useToggle(value) {
    const [boolValue, setBoolvalue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
    const toggle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setBoolvalue((prev)=>!prev);
    }, []);
    return {
        boolValue,
        toggle,
        setBoolvalue
    };
}


/***/ }),

/***/ 3396:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Yu: () => (/* binding */ getData),
/* harmony export */   Z2: () => (/* binding */ getDataByOrder)
/* harmony export */ });
/* unused harmony exports getDataByPath, getDataByField */
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1492);
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const getData = async (docCollection)=>{
    const colRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__.db, docCollection);
    const snapShots = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(colRef);
    const response = snapShots.docs.map((doc)=>{
        const data = doc.data();
        data.id = doc.id;
        return data;
    });
    return response;
};
const getDataByPath = async (dbCollection, path)=>{
    const docRef = doc(db, dbCollection, path);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.log("No such document!");
    }
};
const getDataByField = async (dbCollection, field, value, all)=>{
    if (!value) return;
    try {
        const q = query(collection(db, dbCollection), where(field, "==", value));
        const querySnapshot = await getDocs(q);
        if (all) return querySnapshot.docs.map((doc)=>doc.data());
        const data = querySnapshot.docs[0].data();
        return data;
    } catch (error) {
        console.error(error);
    }
};
const getDataByOrder = async (dbCollection, field, order, all)=>{
    try {
        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__.db, dbCollection), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.orderBy)(field, order)) //"asc" or "desc"
        ;
        const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(q);
        if (all) return querySnapshot.docs.map((doc)=>{
            const data = doc.data();
            data.id = doc.id;
            return data;
        });
        const data = querySnapshot.docs[0].data();
        return data;
    } catch (error) {
        console.error(error);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;