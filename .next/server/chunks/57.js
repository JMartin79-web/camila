"use strict";
exports.id = 57;
exports.ids = [57];
exports.modules = {

/***/ 1857:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ AdminLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5348);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var _Flags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3485);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);
([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function AdminLayout({ children }) {
    const { logout, isLoading } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                isLoading: isLoading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "min-h-screen bg-gray-100 text-black p-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Flags__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        style: "flex gap-2"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "absolute right-5 top-4 bg-tourBrown text-white px-4 py-2 rounded hover:opacity-50",
                        onClick: logout,
                        children: "Logout"
                    }),
                    children
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3508:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ NewTour)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_uploadToStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2865);
/* harmony import */ var _services_addToDb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9729);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6201);
/* harmony import */ var _UploadInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4762);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_uploadToStorage__WEBPACK_IMPORTED_MODULE_2__, _services_addToDb__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__]);
([_services_uploadToStorage__WEBPACK_IMPORTED_MODULE_2__, _services_addToDb__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function NewTour({ collection, refetch }) {
    const formRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const content = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const title = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const price = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const time = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const moreInfo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [previewImgs, setPreviewImgs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const handleImgAdd = (e)=>{
        const files = e?.target?.files;
        if (files) {
            let fileArr = [];
            for(let i = 0; i < files.length; i++){
                fileArr.push(files[i]);
            }
            setImages((prev)=>[
                    ...prev,
                    ...fileArr
                ]);
            (0,_services_uploadToStorage__WEBPACK_IMPORTED_MODULE_2__/* .previewFile */ .N)([
                ...fileArr
            ], setPreviewImgs);
        }
    };
    const deleteImg = (name)=>{
        const nonDeletedPreviews = previewImgs.filter((file)=>file.name !== name);
        const nonImgDeleted = images.filter((file)=>file.name !== name);
        setImages(nonImgDeleted);
        setPreviewImgs(nonDeletedPreviews);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!images.length) return (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.toast)("Deberia subir minimo una Imagen!");
        react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.toast.loading("Cargando...", {
            position: "top-center",
            duration: 2000
        });
        let imgUrls = [];
        for(let i = 0; i < images.length; i++){
            const url = await (0,_services_uploadToStorage__WEBPACK_IMPORTED_MODULE_2__/* .mediaUpload */ .u)(images[i], "tour-images");
            imgUrls.push(url);
        }
        await (0,_services_addToDb__WEBPACK_IMPORTED_MODULE_3__/* .addToDataBase */ .l)(collection, {
            content: content?.current?.value.split("\n").join("<br/>"),
            title: title?.current?.value,
            price: price?.current?.value.split("\n")?.join("<br/>"),
            schedule: time?.current?.value,
            moreInfo: moreInfo?.current?.value?.split("\n")?.join("<br/>"),
            images: imgUrls
        });
        setTimeout(()=>{
            setImages([]);
            setPreviewImgs([]);
            formRef?.current?.reset();
        }, 1500);
        refetch();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: "flex flex-col gap-4 my-4",
        ref: formRef,
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-lg font-semibold text-left",
                children: "Nuevo Tour:"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ref: title,
                className: "",
                placeholder: "Tour",
                required: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ref: time,
                className: "",
                placeholder: "Horario",
                required: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                ref: content,
                placeholder: `Informacion de Tour`,
                rows: 8,
                required: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                ref: price,
                placeholder: "Precio",
                rows: 2,
                required: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                ref: moreInfo,
                placeholder: `Mas Informacion (optional)`,
                rows: 6
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    previewImgs?.map(({ name, img })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "relative w-fit",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "my-2 rounded max-w-[500px]",
                                    src: img,
                                    alt: ""
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: ()=>deleteImg(name),
                                    className: "bg-red-600 text-white px-4 py-2 rounded hover:opacity-50 my-2 absolute top-2 right-3",
                                    children: "\xd7"
                                })
                            ]
                        }, name)),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UploadInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        handleImgAdd: handleImgAdd
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            className: "bg-green-500 hover:bg-green-300 my-4 text-white px-4 py-2 rounded",
                            children: "Guardar Tour"
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7889:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PageInformationEdit)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _services_addToDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9729);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SubmitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5538);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_addToDb__WEBPACK_IMPORTED_MODULE_1__]);
_services_addToDb__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function PageInformationEdit({ collection, docId, aboutHeader, aboutText, whatsappNum }) {
    const aboutTitle = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const aboutUs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const whatsapp = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const handleUpdate = async (e)=>{
        e.preventDefault();
        await (0,_services_addToDb__WEBPACK_IMPORTED_MODULE_1__/* .updateValues */ .o)(collection, docId, {
            aboutTitle: aboutTitle.current.value.split("\n").join("<br/>"),
            aboutUsInfo: aboutUs.current.value.split("\n").join("<br/>"),
            whatsapp: whatsapp.current.value
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleUpdate,
        className: "flex flex-col gap-4 mt-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                ref: aboutTitle,
                defaultValue: aboutHeader?.split("<br/>").join("\n"),
                placeholder: `Titulo`,
                rows: 2,
                required: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                ref: aboutUs,
                defaultValue: aboutText?.split("<br/>").join("\n"),
                placeholder: `Sobre nosotros`,
                rows: 8,
                required: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-4 items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        ref: whatsapp,
                        className: "grow",
                        defaultValue: whatsappNum,
                        placeholder: "whatsapp",
                        required: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubmitButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: "Guardar Cambios"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SubmitButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function SubmitButton({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "bg-green-500 text-white px-4 py-2 w-fit rounded hover:opacity-50",
        type: "submit",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "hidden sm:block text-white",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "sm:hidden",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21Z"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M17 3V12H7V3"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M7 21V16H17V21"
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 9954:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ UpdateTour)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6476);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var _services_addToDb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9729);
/* harmony import */ var _services_uploadToStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2865);
/* harmony import */ var _services_deleteDocs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2718);
/* harmony import */ var _UploadInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4762);
/* harmony import */ var _SubmitButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5538);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _services_addToDb__WEBPACK_IMPORTED_MODULE_4__, _services_uploadToStorage__WEBPACK_IMPORTED_MODULE_5__, _services_deleteDocs__WEBPACK_IMPORTED_MODULE_6__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _services_addToDb__WEBPACK_IMPORTED_MODULE_4__, _services_uploadToStorage__WEBPACK_IMPORTED_MODULE_5__, _services_deleteDocs__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function UpdateTour({ title, images, schedule, content, price, moreInfo, id, collection, handleDeleteTour }) {
    const { boolValue, toggle } = (0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(false);
    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const titleRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const priceRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const scheduleRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const moreInfoRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [imagesUrl, setImagesUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(images);
    const [imagesArr, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [previewImgs, setPreviewImgs] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const handleImgAdd = (e)=>{
        const files = e?.target?.files;
        if (files) {
            let fileArr = [];
            for(let i = 0; i < files.length; i++){
                fileArr.push(files[i]);
            }
            setImages((prev)=>[
                    ...prev,
                    ...fileArr
                ]);
            (0,_services_uploadToStorage__WEBPACK_IMPORTED_MODULE_5__/* .previewFile */ .N)([
                ...fileArr
            ], setPreviewImgs);
        }
    };
    const deleteImg = (name, url)=>{
        if (!confirm("Estas Seguro de Eliminar esta Imagen?")) return;
        if (name) {
            const nonDeletedPreviews = previewImgs.filter((file)=>file.name !== name);
            const nonImgDeleted = imagesArr.filter((file)=>file.name !== name);
            setImages(nonImgDeleted);
            setPreviewImgs(nonDeletedPreviews);
        } else {
            const leftOverUrls = imagesUrl.filter((src)=>src !== url);
            setImagesUrl(leftOverUrls);
        }
    };
    const handleUpdate = async (e)=>{
        e.preventDefault();
        if (!imagesUrl.length && !imagesArr.length) return (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast)("Deberia tener minimo una Imagen!");
        let imgUrls = [];
        if (imagesArr.length) {
            for(let i = 0; i < imagesArr.length; i++){
                const url = await (0,_services_uploadToStorage__WEBPACK_IMPORTED_MODULE_5__/* .mediaUpload */ .u)(imagesArr[i], "tour-images");
                imgUrls.push(url);
            }
        }
        for(let i = 0; i < images.length; i++){
            if (!imagesUrl.includes(images[i])) {
                await (0,_services_deleteDocs__WEBPACK_IMPORTED_MODULE_6__/* .deleteFromStorage */ .D)(images[i]);
            }
        }
        await (0,_services_addToDb__WEBPACK_IMPORTED_MODULE_4__/* .updateValues */ .o)(collection, id, {
            title: titleRef?.current?.value,
            schedule: scheduleRef?.current?.value,
            content: contentRef?.current?.value.split("\n").join("<br/>"),
            price: priceRef?.current?.value.split("\n")?.join("<br/>"),
            moreInfo: moreInfoRef?.current?.value?.split("\n")?.join("<br/>"),
            images: [
                ...imagesUrl,
                ...imgUrls
            ]
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleUpdate,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "flex gap-4 my-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        placeholder: "Titulo",
                        className: "grow",
                        defaultValue: title,
                        ref: titleRef,
                        required: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: "bg-red-600 text-white px-3 pb-1 text-2xl rounded hover:opacity-50",
                        onClick: async ()=>{
                            await (0,_services_deleteDocs__WEBPACK_IMPORTED_MODULE_6__/* .deleteDocFromDb */ .B)(collection, id, images);
                            handleDeleteTour(id);
                        },
                        children: "\xd7"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: `flex items-center bg-white text-black px-4 pt-2 border-slate-300 
                    w-fit border-2 rounded hover:opacity-50 ${boolValue ? "rotate-180" : ""}`,
                        onClick: toggle,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                points: "6 9 12 15 18 9"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubmitButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        children: "Guardar Cambios"
                    })
                ]
            }),
            boolValue && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        ref: scheduleRef,
                        className: "",
                        placeholder: "Horario",
                        defaultValue: schedule,
                        required: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        ref: contentRef,
                        defaultValue: content.split("<br/>").join("\n"),
                        placeholder: "Informacion de Tour",
                        rows: 8,
                        required: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        ref: priceRef,
                        placeholder: "Precio",
                        defaultValue: price.split("<br/>").join("\n"),
                        rows: 2,
                        required: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        ref: moreInfoRef,
                        placeholder: "Mas Informacion (optional)",
                        defaultValue: moreInfo ? moreInfo?.split("<br/>")?.join("\n") : "",
                        rows: 6
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-4 flex-wrap",
                        children: [
                            imagesUrl?.map((src)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative w-fit",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: "bg-red-600 text-white px-4 py-2 rounded hover:opacity-50 absolute top-2 right-3",
                                            onClick: ()=>deleteImg(undefined, src),
                                            children: "Eliminar"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "max-w-[500px] rounded",
                                            src: src,
                                            alt: ""
                                        })
                                    ]
                                }, src)),
                            previewImgs?.map(({ name, img })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative w-fit",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "max-w-[500px] rounded",
                                            src: img,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            onClick: ()=>deleteImg(name),
                                            className: "bg-red-600 text-white px-4 py-2 rounded hover:opacity-50 absolute top-2 right-3",
                                            children: "Eliminar"
                                        })
                                    ]
                                }, name))
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UploadInput__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        handleImgAdd: handleImgAdd
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ UploadInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function UploadInput({ handleImgAdd }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
        className: `flex flex-col items-center my-2 px-4 py-6 bg-white rounded-lg shadow-md 
            tracking-wide border border-dashed border-blue cursor-pointer hover:bg-green-500 hover:text-white`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                className: "w-8 h-8",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Subir im\xe1genes"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "file",
                className: "hidden",
                multiple: true,
                id: "file-upload",
                accept: ".jpg, .jpeg, .png, .webp",
                onChange: handleImgAdd
            })
        ]
    });
}


/***/ }),

/***/ 2479:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useFetchData)
/* harmony export */ });
/* harmony import */ var _services_getFromDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3396);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_getFromDb__WEBPACK_IMPORTED_MODULE_0__]);
_services_getFromDb__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useFetchData(language) {
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [pageData, setPageData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const fetchData = async ()=>{
        let collectionTours = "tours";
        let collectionPageInfo = "page-info";
        if (language) {
            collectionTours += `-${language}`;
            collectionPageInfo += `-${language}`;
        }
        const [tourData, pageInfo] = await Promise.all([
            (0,_services_getFromDb__WEBPACK_IMPORTED_MODULE_0__/* .getDataByOrder */ .Z2)(collectionTours, "title", "asc", true),
            (0,_services_getFromDb__WEBPACK_IMPORTED_MODULE_0__/* .getData */ .Yu)(collectionPageInfo)
        ]);
        setData(tourData);
        setPageData(pageInfo[0]);
    };
    const handleDeleteTour = (docId)=>{
        const updateTours = data.filter(({ id })=>id !== docId);
        setData(updateTours);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchData();
    }, []);
    return {
        data,
        fetchData,
        pageData,
        handleDeleteTour
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9729:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ addToDataBase),
/* harmony export */   o: () => (/* binding */ updateValues)
/* harmony export */ });
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6201);
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7309);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_0__, _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_0__, _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const addToDataBase = async (collectionName, values)=>{
    try {
        const myCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__.db, collectionName);
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)(myCollection, values);
        (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__.toast)("Creacion Finalizada", {
            style: {
                backgroundColor: "rgb(34 197 94)",
                color: "white"
            }
        });
    } catch (error) {
        (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__.toast)("Hubo un error intente mas tarde!", {
            style: {
                backgroundColor: "red",
                color: "white"
            }
        });
    }
};
const updateValues = async (collectionName, id, values)=>{
    try {
        const myDoc = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__.db, collectionName, id);
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)(myDoc, values);
        (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__.toast)("Actaulizacion Finalizada", {
            style: {
                backgroundColor: "rgb(34 197 94)",
                color: "white"
            }
        });
    } catch (error) {
        (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__.toast)("Hubo un error intente mas tarde!", {
            style: {
                backgroundColor: "red",
                color: "white"
            }
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2718:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ deleteDocFromDb),
/* harmony export */   D: () => (/* binding */ deleteFromStorage)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1492);
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7309);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3392);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const deleteFromStorage = async (path)=>{
    try {
        const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__/* .storage */ .t, path);
        await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.deleteObject)(storageRef);
    } catch (error) {
        console.log("there was an error with your request");
    }
};
const deleteDocFromDb = async (dbCollection, id, images)=>{
    const deleteConfirmation = confirm("Estas seguro de elminiar?");
    if (!deleteConfirmation) return;
    try {
        if (images) {
            for(let index = 0; index < images.length; index++){
                await deleteFromStorage(images[index]);
            }
        }
        const document = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__.db, dbCollection, id);
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc)(document);
        (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast)("Actaulizacion Finalizada", {
            style: {
                backgroundColor: "rgb(34 197 94)",
                color: "white"
            }
        });
    } catch (error) {
        (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast)("Ocurrio un error, intente mas tarde!", {
            style: {
                backgroundColor: "red",
                color: "white"
            }
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2865:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ previewFile),
/* harmony export */   u: () => (/* binding */ mediaUpload)
/* harmony export */ });
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7309);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__, firebase_storage__WEBPACK_IMPORTED_MODULE_1__]);
([_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__, firebase_storage__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const mediaUpload = async (file, folder)=>{
    try {
        const imgRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.ref)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__/* .storage */ .t, `${folder}/${file.name}` + Date.now());
        const resp = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.uploadBytes)(imgRef, file);
        const pathReference = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getDownloadURL)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.ref)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__/* .storage */ .t, resp.metadata.fullPath));
        return pathReference;
    } catch (error) {
        alert(error);
    }
};
const previewFile = (files, setPreview)=>{
    for(let i = 0; i < files.length; i++){
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onloadend = ()=>{
            setPreview((prev)=>{
                return [
                    ...prev,
                    {
                        name: files[i].name,
                        img: reader.result
                    }
                ];
            });
        };
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;