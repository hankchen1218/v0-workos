(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Berkeley/challenge/workosdemo/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/workos/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkOSSidebar",
    ()=>WorkOSSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function WorkOSSidebar({ activeView, onViewChange }) {
    _s();
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            id: "dashboard",
            label: "Skills Dashboard",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
        },
        {
            id: "upskilling",
            label: "Upskilling Path",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
        },
        {
            id: "matching",
            label: "Skill Matching",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col border-r border-border bg-sidebar transition-all duration-300", collapsed ? "w-16" : "w-64"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-14 items-center justify-between border-b border-border px-4",
                children: [
                    !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/workos-logo.png",
                                alt: "WorkOS",
                                className: "h-8 w-auto"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/sidebar.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-foreground",
                                children: "WorkOS"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/sidebar.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/sidebar.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 text-muted-foreground hover:text-foreground",
                        onClick: ()=>setCollapsed(!collapsed),
                        children: collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/sidebar.tsx",
                            lineNumber: 42,
                            columnNumber: 24
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/sidebar.tsx",
                            lineNumber: 42,
                            columnNumber: 63
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/sidebar.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/sidebar.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 p-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-1",
                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onViewChange(item.id),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors", activeView === item.id ? "bg-sidebar-accent text-foreground" : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                        className: "h-5 w-5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/sidebar.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this),
                                    !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/sidebar.tsx",
                                        lineNumber: 60,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/sidebar.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this)
                        }, item.id, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/sidebar.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/sidebar.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/sidebar.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-border p-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors", "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                            className: "h-5 w-5 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/sidebar.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Settings"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/sidebar.tsx",
                            lineNumber: 75,
                            columnNumber: 26
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/sidebar.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/sidebar.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/sidebar.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(WorkOSSidebar, "IaHwFfvbaw8y79e5do0CzWS1eXc=");
_c = WorkOSSidebar;
var _c;
__turbopack_context__.k.register(_c, "WorkOSSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/ui/avatar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Avatar({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "avatar",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative flex size-8 shrink-0 overflow-hidden rounded-full', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/avatar.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Avatar;
function AvatarImage({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
        "data-slot": "avatar-image",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('aspect-square size-full', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/avatar.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c1 = AvatarImage;
function AvatarFallback({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fallback"], {
        "data-slot": "avatar-fallback",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-muted flex size-full items-center justify-center rounded-full', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/avatar.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = AvatarFallback;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Avatar");
__turbopack_context__.k.register(_c1, "AvatarImage");
__turbopack_context__.k.register(_c2, "AvatarFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/workos/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkOSHeader",
    ()=>WorkOSHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/avatar.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function WorkOSHeader({ title, subtitle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex h-14 items-center justify-between border-b border-border bg-background px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg font-semibold text-foreground",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/header.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/header.tsx",
                        lineNumber: 18,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/header.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative hidden md:block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/header.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Search employees, skills...",
                                className: "w-64 bg-secondary pl-9 text-sm placeholder:text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/header.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/header.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "text-muted-foreground hover:text-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/header.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/header.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                        className: "h-8 w-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                src: "/manager-avatar.png"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/header.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                className: "bg-primary text-primary-foreground text-xs",
                                children: "MG"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/header.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/header.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/header.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/header.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = WorkOSHeader;
var _c;
__turbopack_context__.k.register(_c, "WorkOSHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/lib/workos-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Mock data for WorkOS prototype
__turbopack_context__.s([
    "employees",
    ()=>employees,
    "learningPaths",
    ()=>learningPaths,
    "projectMatches",
    ()=>projectMatches,
    "skillGaps",
    ()=>skillGaps,
    "teamStats",
    ()=>teamStats
]);
const employees = [
    {
        id: "1",
        name: "LeBron James",
        role: "Senior Developer",
        department: "Engineering",
        avatar: "/professional-woman-developer.png",
        availability: "Available",
        skills: [
            {
                name: "React",
                category: "Technical",
                proficiency: 90,
                targetProficiency: 95,
                trend: "up"
            },
            {
                name: "TypeScript",
                category: "Technical",
                proficiency: 85,
                targetProficiency: 90,
                trend: "up"
            },
            {
                name: "Node.js",
                category: "Technical",
                proficiency: 75,
                targetProficiency: 85,
                trend: "stable"
            },
            {
                name: "Communication",
                category: "Soft",
                proficiency: 80,
                targetProficiency: 85,
                trend: "up"
            },
            {
                name: "Problem Solving",
                category: "Soft",
                proficiency: 88,
                targetProficiency: 90,
                trend: "stable"
            },
            {
                name: "Team Leadership",
                category: "Leadership",
                proficiency: 70,
                targetProficiency: 80,
                trend: "up"
            }
        ]
    },
    {
        id: "2",
        name: "Jackie Chan",
        role: "Product Manager",
        department: "Product",
        avatar: "/professional-man-manager.jpg",
        availability: "Busy",
        skills: [
            {
                name: "Product Strategy",
                category: "Domain",
                proficiency: 92,
                targetProficiency: 95,
                trend: "up"
            },
            {
                name: "Data Analysis",
                category: "Technical",
                proficiency: 78,
                targetProficiency: 85,
                trend: "up"
            },
            {
                name: "Stakeholder Management",
                category: "Soft",
                proficiency: 88,
                targetProficiency: 90,
                trend: "stable"
            },
            {
                name: "Agile",
                category: "Domain",
                proficiency: 85,
                targetProficiency: 90,
                trend: "up"
            },
            {
                name: "Communication",
                category: "Soft",
                proficiency: 90,
                targetProficiency: 92,
                trend: "stable"
            },
            {
                name: "Team Leadership",
                category: "Leadership",
                proficiency: 82,
                targetProficiency: 88,
                trend: "up"
            }
        ]
    },
    {
        id: "3",
        name: "Taylor Swift",
        role: "UX Designer",
        department: "Design",
        avatar: "/professional-woman-designer.png",
        availability: "Available",
        skills: [
            {
                name: "Figma",
                category: "Technical",
                proficiency: 95,
                targetProficiency: 98,
                trend: "up"
            },
            {
                name: "User Research",
                category: "Domain",
                proficiency: 88,
                targetProficiency: 92,
                trend: "up"
            },
            {
                name: "Prototyping",
                category: "Technical",
                proficiency: 90,
                targetProficiency: 95,
                trend: "stable"
            },
            {
                name: "Communication",
                category: "Soft",
                proficiency: 85,
                targetProficiency: 88,
                trend: "up"
            },
            {
                name: "Design Systems",
                category: "Domain",
                proficiency: 82,
                targetProficiency: 90,
                trend: "up"
            },
            {
                name: "Collaboration",
                category: "Soft",
                proficiency: 88,
                targetProficiency: 90,
                trend: "stable"
            }
        ]
    },
    {
        id: "4",
        name: "Kanye West",
        role: "Data Scientist",
        department: "Data",
        avatar: "/professional-data-scientist.png",
        availability: "Available",
        skills: [
            {
                name: "Python",
                category: "Technical",
                proficiency: 92,
                targetProficiency: 95,
                trend: "up"
            },
            {
                name: "Machine Learning",
                category: "Technical",
                proficiency: 85,
                targetProficiency: 90,
                trend: "up"
            },
            {
                name: "SQL",
                category: "Technical",
                proficiency: 88,
                targetProficiency: 90,
                trend: "stable"
            },
            {
                name: "Data Visualization",
                category: "Technical",
                proficiency: 80,
                targetProficiency: 88,
                trend: "up"
            },
            {
                name: "Problem Solving",
                category: "Soft",
                proficiency: 90,
                targetProficiency: 92,
                trend: "stable"
            },
            {
                name: "Communication",
                category: "Soft",
                proficiency: 72,
                targetProficiency: 82,
                trend: "up"
            }
        ]
    },
    {
        id: "5",
        name: "Elon Musk",
        role: "DevOps Engineer",
        department: "Engineering",
        avatar: "/professional-woman-engineer.png",
        availability: "On Leave",
        skills: [
            {
                name: "AWS",
                category: "Technical",
                proficiency: 90,
                targetProficiency: 95,
                trend: "up"
            },
            {
                name: "Kubernetes",
                category: "Technical",
                proficiency: 85,
                targetProficiency: 92,
                trend: "up"
            },
            {
                name: "CI/CD",
                category: "Technical",
                proficiency: 88,
                targetProficiency: 92,
                trend: "stable"
            },
            {
                name: "Linux",
                category: "Technical",
                proficiency: 92,
                targetProficiency: 95,
                trend: "stable"
            },
            {
                name: "Problem Solving",
                category: "Soft",
                proficiency: 85,
                targetProficiency: 88,
                trend: "up"
            },
            {
                name: "Documentation",
                category: "Soft",
                proficiency: 75,
                targetProficiency: 85,
                trend: "up"
            }
        ]
    }
];
const skillGaps = [
    {
        skill: "Machine Learning",
        current: 45,
        required: 75,
        gap: 30,
        priority: "High"
    },
    {
        skill: "Cloud Architecture",
        current: 55,
        required: 80,
        gap: 25,
        priority: "High"
    },
    {
        skill: "Team Leadership",
        current: 60,
        required: 80,
        gap: 20,
        priority: "Medium"
    },
    {
        skill: "Data Visualization",
        current: 65,
        required: 80,
        gap: 15,
        priority: "Medium"
    },
    {
        skill: "Agile Methodology",
        current: 70,
        required: 85,
        gap: 15,
        priority: "Low"
    }
];
const learningPaths = [
    {
        id: "1",
        title: "Advanced React Patterns",
        description: "Master advanced React patterns including compound components, render props, and hooks optimization",
        duration: "4 weeks",
        skills: [
            "React",
            "TypeScript",
            "Performance"
        ],
        progress: 65,
        status: "In Progress",
        difficulty: "Advanced"
    },
    {
        id: "2",
        title: "Leadership Fundamentals",
        description: "Develop core leadership skills including communication, delegation, and team motivation",
        duration: "6 weeks",
        skills: [
            "Team Leadership",
            "Communication",
            "Stakeholder Management"
        ],
        progress: 30,
        status: "In Progress",
        difficulty: "Intermediate"
    },
    {
        id: "3",
        title: "Cloud Architecture with AWS",
        description: "Learn to design and implement scalable cloud solutions on AWS",
        duration: "8 weeks",
        skills: [
            "AWS",
            "Cloud Architecture",
            "DevOps"
        ],
        progress: 0,
        status: "Not Started",
        difficulty: "Advanced"
    },
    {
        id: "4",
        title: "Data Science Essentials",
        description: "Build a foundation in data science with Python, statistics, and machine learning basics",
        duration: "10 weeks",
        skills: [
            "Python",
            "Machine Learning",
            "Data Analysis"
        ],
        progress: 100,
        status: "Completed",
        difficulty: "Beginner"
    }
];
const projectMatches = [
    {
        employeeId: "1",
        employeeName: "LeBron James",
        role: "Senior Developer",
        matchScore: 92,
        skillsMatched: [
            "React",
            "TypeScript",
            "Problem Solving"
        ],
        skillsMissing: [
            "GraphQL"
        ],
        availability: "Available",
        growthPotential: 85
    },
    {
        employeeId: "4",
        employeeName: "Kanye West",
        role: "UX Designer",
        matchScore: 45,
        skillsMatched: [
            "Python",
            "Data Analysis",
            "Problem Solving"
        ],
        skillsMissing: [
            "React",
            "TypeScript"
        ],
        availability: "Available",
        growthPotential: 92
    },
    {
        employeeId: "3",
        employeeName: "Taylor Swift",
        role: "UX Designer",
        matchScore: 85,
        skillsMatched: [
            "Figma",
            "User Research",
            "Communication"
        ],
        skillsMissing: [
            "React",
            "TypeScript"
        ],
        availability: "Available",
        growthPotential: 91
    },
    {
        employeeId: "2",
        employeeName: "Jackie Chan",
        role: "Product Manager",
        matchScore: 65,
        skillsMatched: [
            "Stakeholder Management",
            "Communication"
        ],
        skillsMissing: [
            "React",
            "TypeScript",
            "Technical Skills"
        ],
        availability: "Busy",
        growthPotential: 60
    },
    {
        employeeId: "5",
        employeeName: "Elon Musk",
        role: "DevOps Engineer",
        matchScore: 72,
        skillsMatched: [
            "CI/CD",
            "Problem Solving"
        ],
        skillsMissing: [
            "React",
            "Frontend"
        ],
        availability: "On Leave",
        growthPotential: 75
    }
];
const teamStats = {
    totalEmployees: 24,
    avgSkillLevel: 78,
    skillsTracked: 156,
    coursesCompleted: 42,
    internalMobility: 23,
    trainingROI: 340
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/workos/stat-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatCard",
    ()=>StatCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/utils.ts [app-client] (ecmascript)");
;
;
function StatCard({ title, value, subtitle, icon: Icon, trend, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border border-border bg-card p-4", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/stat-card.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-2xl font-semibold text-foreground",
                            children: value
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/stat-card.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-muted-foreground",
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/stat-card.tsx",
                            lineNumber: 23,
                            columnNumber: 24
                        }, this),
                        trend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-1 text-xs", trend.isPositive ? "text-green-600" : "text-destructive-foreground"),
                            children: [
                                trend.isPositive ? "+" : "",
                                trend.value,
                                "% ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "from last month"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/stat-card.tsx",
                                    lineNumber: 27,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/stat-card.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/stat-card.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: "h-5 w-5 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/stat-card.tsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/stat-card.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/stat-card.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/stat-card.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = StatCard;
var _c;
__turbopack_context__.k.register(_c, "StatCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-radar-chart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkillRadarChart",
    ()=>SkillRadarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Radar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/recharts/es6/polar/Radar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$RadarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/recharts/es6/chart/RadarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/recharts/es6/polar/PolarGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarAngleAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/recharts/es6/polar/PolarAngleAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarRadiusAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/recharts/es6/polar/PolarRadiusAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
"use client";
;
;
function SkillRadarChart({ skills }) {
    const data = skills.map((skill)=>({
            skill: skill.name,
            current: skill.proficiency,
            target: skill.targetProficiency || skill.proficiency
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
        width: "100%",
        height: 450,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$RadarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadarChart"], {
            data: data,
            cx: "50%",
            cy: "50%",
            outerRadius: "80%",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarGrid"], {
                    stroke: "#e5e7eb"
                }, void 0, false, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-radar-chart.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarAngleAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarAngleAxis"], {
                    dataKey: "skill",
                    tick: {
                        fill: "#1f2937",
                        fontSize: 14,
                        fontWeight: 500
                    }
                }, void 0, false, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-radar-chart.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarRadiusAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarRadiusAxis"], {
                    angle: 30,
                    domain: [
                        0,
                        100
                    ],
                    tick: {
                        fill: "#6b7280",
                        fontSize: 11
                    }
                }, void 0, false, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-radar-chart.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Radar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Radar"], {
                    name: "Current",
                    dataKey: "current",
                    stroke: "#10b981",
                    fill: "#10b981",
                    fillOpacity: 0.3,
                    strokeWidth: 2
                }, void 0, false, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-radar-chart.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Radar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Radar"], {
                    name: "Target",
                    dataKey: "target",
                    stroke: "#6366f1",
                    fill: "transparent",
                    strokeDasharray: "4 4",
                    strokeWidth: 2
                }, void 0, false, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-radar-chart.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-radar-chart.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-radar-chart.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = SkillRadarChart;
var _c;
__turbopack_context__.k.register(_c, "SkillRadarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-bar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkillGapBar",
    ()=>SkillGapBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/badge.tsx [app-client] (ecmascript)");
;
;
;
function SkillGapBar({ skill, current, required, priority }) {
    const gap = required - current;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-foreground",
                        children: skill
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-bar.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "outline",
                                className: "gap-1.5 text-xs font-normal text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("size-1 rounded-full", priority === "High" && "bg-red-500", priority === "Medium" && "bg-yellow-500", priority === "Low" && "bg-blue-500")
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-bar.tsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, this),
                                    priority
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-bar.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: [
                                    "Gap: ",
                                    gap,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-bar.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-bar.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-bar.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-1 rounded-full bg-secondary",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 top-0 h-full rounded-full bg-primary transition-all",
                        style: {
                            width: `${current}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-bar.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 h-full w-0.5 bg-muted-foreground",
                        style: {
                            left: `${required}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-bar.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-bar.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-xs text-muted-foreground",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Current: ",
                            current,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-bar.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Required: ",
                            required,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-bar.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-bar.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-bar.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = SkillGapBar;
var _c;
__turbopack_context__.k.register(_c, "SkillGapBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmployeeCard",
    ()=>EmployeeCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
"use client";
;
;
;
;
function EmployeeCard({ employee, selected, onClick, onDoubleClick }) {
    const avgProficiency = Math.round(employee.skills.reduce((acc, s)=>acc + s.proficiency, 0) / employee.skills.length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        onDoubleClick: onDoubleClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-colors", selected ? "border-muted-foreground bg-muted-foreground/5" : "border-border bg-card hover:border-muted-foreground"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                className: "h-10 w-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                        src: employee.avatar || "/placeholder.svg"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-card.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                        className: "bg-secondary text-foreground text-xs",
                        children: employee.name.split(" ").map((n)=>n[0]).join("")
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-card.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-card.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "truncate font-medium text-foreground",
                        children: employee.name
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-card.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground",
                        children: employee.role
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-card.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-card.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-right",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-end gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium text-muted-foreground",
                            children: [
                                avgProficiency,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-card.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        employee.skills.filter((s)=>s.trend === "up").length > 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                            className: "h-3 w-3 text-primary"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-card.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this) : employee.skills.filter((s)=>s.trend === "down").length > 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                            className: "h-3 w-3 text-destructive-foreground"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-card.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                            className: "h-3 w-3 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-card.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-card.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-card.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-card.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = EmployeeCard;
var _c;
__turbopack_context__.k.register(_c, "EmployeeCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmployeeDetailModal",
    ()=>EmployeeDetailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function EmployeeDetailModal({ employee, open, onClose }) {
    if (!employee) return null;
    const avgSkillLevel = Math.round(employee.skills.reduce((acc, s)=>acc + s.proficiency, 0) / employee.skills.length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-2xl gap-0 overflow-hidden p-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    className: "p-6 pb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        className: "flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Employee Profile"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[80vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 pb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                        className: "h-24 w-24 border-4 border-background shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                src: employee.avatar || "/placeholder.svg"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                className: "bg-primary text-xl text-primary-foreground",
                                                children: employee.name.split(" ").map((n)=>n[0]).join("")
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 pt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-2xl font-bold text-foreground",
                                                                children: employee.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                                lineNumber: 50,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 text-muted-foreground",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                                        lineNumber: 52,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: employee.role
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                                        lineNumber: 53,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                                        lineNumber: 54,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: employee.department
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                                        lineNumber: 55,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                                lineNumber: 51,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "outline",
                                                        className: "gap-1.5 font-normal text-muted-foreground",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("size-2 rounded-full", employee.availability === "Available" && "bg-green-500", employee.availability === "Busy" && "bg-orange-500", employee.availability === "On Leave" && "bg-red-500")
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                                lineNumber: 62,
                                                                columnNumber: 21
                                                            }, this),
                                                            employee.availability
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                className: "h-4 w-4 text-foreground/70"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                                lineNumber: 76,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    employee.name.toLowerCase().replace(" ", "."),
                                                                    "@company.com"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                                lineNumber: 77,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                className: "h-4 w-4 text-foreground/70"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                                lineNumber: 80,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "+1 (555) 123-4567"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                                lineNumber: 81,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "h-4 w-4 text-foreground/70"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                                lineNumber: 84,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "San Francisco, CA"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                                lineNumber: 85,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                className: "h-4 w-4 text-foreground/70"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                                lineNumber: 88,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Joined Mar 2022"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                                lineNumber: 89,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 divide-x border-y bg-secondary/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-1 text-2xl font-bold text-foreground",
                                            children: [
                                                avgSkillLevel,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-medium text-muted-foreground",
                                            children: "Avg Skill Level"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-1 text-2xl font-bold text-foreground",
                                            children: "12"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-medium text-muted-foreground",
                                            children: "Courses Completed"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-1 text-2xl font-bold text-green-600",
                                            children: [
                                                "+15%",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-medium text-muted-foreground",
                                            children: "Growth (YTD)"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-1 text-2xl font-bold text-foreground",
                                            children: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-medium text-muted-foreground",
                                            children: "Certifications"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "mb-4 flex items-center gap-2 font-semibold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                            className: "h-5 w-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this),
                                        "Skills & Proficiency"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-4 sm:grid-cols-2",
                                    children: employee.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border bg-card p-3 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-2 flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-xs",
                                                                    children: skill.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                                    lineNumber: 134,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: skill.category
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                                    lineNumber: 135,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-bold",
                                                                    children: [
                                                                        skill.proficiency,
                                                                        "%"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                                    lineNumber: 138,
                                                                    columnNumber: 23
                                                                }, this),
                                                                skill.targetProficiency && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: [
                                                                        "Target: ",
                                                                        skill.targetProficiency,
                                                                        "%"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                                    lineNumber: 140,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative h-0.5 w-full overflow-hidden rounded-full bg-secondary",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-full text-sm bg-primary transition-all duration-500",
                                                            style: {
                                                                width: `${skill.proficiency}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 21
                                                        }, this),
                                                        skill.targetProficiency && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-0 h-full w-0.5 bg-foreground/30",
                                                            style: {
                                                                left: `${skill.targetProficiency}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, skill.name, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t bg-secondary/30 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                onClick: onClose,
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this),
                                    "View Learning Path"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = EmployeeDetailModal;
var _c;
__turbopack_context__.k.register(_c, "EmployeeDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/ui/progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Progress({ className, value, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "progress",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-primary/20 relative h-2 w-full overflow-hidden rounded-full', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "progress-indicator",
            className: "bg-primary h-full w-full flex-1 transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/progress.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/progress.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Progress;
;
var _c;
__turbopack_context__.k.register(_c, "Progress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkillGapModal",
    ()=>SkillGapModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/workos-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function SkillGapModal({ skillGap, open, onClose }) {
    if (!skillGap) return null;
    const gapPercentage = Math.round((skillGap.required - skillGap.current) / skillGap.required * 100);
    // Find employees who have this skill
    const employeesWithSkill = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employees"].filter((emp)=>emp.skills.some((s)=>s.name.toLowerCase().includes(skillGap.skill.toLowerCase().split(" ")[0])));
    // Find related learning paths
    const relatedCourses = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["learningPaths"].filter((path)=>path.title.toLowerCase().includes(skillGap.skill.toLowerCase().split(" ")[0]) || path.description.toLowerCase().includes(skillGap.skill.toLowerCase().split(" ")[0]));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-2xl bg-card border-border",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        className: "text-foreground",
                        children: "Skill Gap Analysis"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pb-4 border-b border-border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-foreground mb-2",
                                            children: skillGap.skill
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "outline",
                                            className: "gap-1.5 font-normal text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("size-2 rounded-full", skillGap.priority === "Critical" && "bg-red-500", skillGap.priority === "High" && "bg-amber-500", skillGap.priority === "Medium" && "bg-yellow-500", skillGap.priority === "Low" && "bg-blue-500")
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 17
                                                }, this),
                                                skillGap.priority,
                                                " Priority"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold text-red-500",
                                            children: [
                                                gapPercentage,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Gap Size"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground",
                                            children: "Current Level"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-foreground font-medium",
                                            children: [
                                                skillGap.current,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                    value: skillGap.current,
                                    className: "h-2"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground",
                                            children: "Required Level"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary font-medium",
                                            children: [
                                                skillGap.required,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-4 border-b border-border",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "h-5 w-5 text-amber-500 mt-0.5"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-foreground",
                                        children: "Business Impact"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground mt-1",
                                        children: "This skill gap affects project delivery timelines and may require external hiring if not addressed within 3 months."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-4 border-b border-border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-sm font-medium text-foreground mb-3 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    className: "h-4 w-4 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                "Team Members with Related Skills (",
                                employeesWithSkill.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: employeesWithSkill.slice(0, 3).map((emp)=>{
                                const skill = emp.skills.find((s)=>s.name.toLowerCase().includes(skillGap.skill.toLowerCase().split(" ")[0]));
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-3 rounded-lg bg-secondary/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary",
                                                    children: emp.name.split(" ").map((n)=>n[0]).join("")
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-foreground",
                                                            children: emp.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: emp.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-primary font-medium",
                                            children: [
                                                skill?.current || 0,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                            lineNumber: 117,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, emp.id, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-sm font-medium text-foreground mb-3 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                    className: "h-4 w-4 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                "Recommended Actions"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                            className: "h-5 w-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-foreground",
                                                    children: "Enroll team in training program"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "3 courses available · 12 hrs total"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            className: "h-4 w-4 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "h-5 w-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-foreground",
                                                    children: "Pair programming sessions"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "Connect juniors with senior experts"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            className: "h-4 w-4 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-3 pt-4 border-t border-border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: onClose,
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            className: "bg-primary text-primary-foreground",
                            children: "Create Action Plan"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = SkillGapModal;
var _c;
__turbopack_context__.k.register(_c, "SkillGapModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkillsDashboard",
    ()=>SkillsDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/workos-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$stat$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/workos/stat-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$skill$2d$radar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-radar-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$skill$2d$gap$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-bar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$employee$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$employee$2d$detail$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/workos/employee-detail-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$skill$2d$gap$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-gap-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function SkillsDashboard() {
    _s();
    const [selectedEmployee, setSelectedEmployee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employees"][0]);
    const [detailEmployee, setDetailEmployee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedGap, setSelectedGap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$stat$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
                        title: "Team Members",
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teamStats"].totalEmployees,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        trend: {
                            value: 8,
                            isPositive: true
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$stat$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
                        title: "Avg Skill Level",
                        value: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teamStats"].avgSkillLevel}%`,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
                        trend: {
                            value: 5,
                            isPositive: true
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$stat$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
                        title: "Skills Tracked",
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teamStats"].skillsTracked,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        subtitle: "Across all employees"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$stat$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
                        title: "Training ROI",
                        value: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teamStats"].trainingROI}%`,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
                        trend: {
                            value: 12,
                            isPositive: true
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-border bg-card lg:col-span-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base font-medium text-foreground",
                                    children: "Team Members"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-2 max-h-[500px] overflow-y-auto",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employees"].map((employee)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$employee$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmployeeCard"], {
                                            employee: employee,
                                            selected: selectedEmployee.id === employee.id,
                                            onClick: ()=>setSelectedEmployee(employee),
                                            onDoubleClick: ()=>setDetailEmployee(employee)
                                        }, employee.id, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground text-center pt-2",
                                        children: "Double-click to view full profile"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-border bg-card lg:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-base font-medium text-foreground",
                                            children: [
                                                "Skill Profile: ",
                                                selectedEmployee.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2 w-2 rounded-full bg-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Current"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                                            lineNumber: 80,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2 w-2 rounded-full border-2 border-[#6366f1] bg-transparent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Target"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$skill$2d$radar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkillRadarChart"], {
                                    skills: selectedEmployee.skills
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-border bg-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "text-base font-medium text-foreground",
                                children: "Team Skill Gaps"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Click on a skill gap to see recommendations"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-6",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skillGaps"].map((gap)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setSelectedGap(gap),
                                className: "cursor-pointer hover:opacity-80 transition-opacity",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$skill$2d$gap$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkillGapBar"], {
                                    skill: gap.skill,
                                    current: gap.current,
                                    required: gap.required,
                                    priority: gap.priority
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this)
                            }, gap.skill, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$employee$2d$detail$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmployeeDetailModal"], {
                employee: detailEmployee,
                open: !!detailEmployee,
                onClose: ()=>setDetailEmployee(null)
            }, void 0, false, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$skill$2d$gap$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkillGapModal"], {
                skillGap: selectedGap,
                open: !!selectedGap,
                onClose: ()=>setSelectedGap(null)
            }, void 0, false, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(SkillsDashboard, "/Dsm1Mad/ubbcamu3PTe4SG6Uo0=");
_c = SkillsDashboard;
var _c;
__turbopack_context__.k.register(_c, "SkillsDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LearningPathCard",
    ()=>LearningPathCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
"use client";
;
;
;
;
;
;
function LearningPathCard({ path, onStart, onContinue, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "border-border bg-card overflow-hidden cursor-pointer hover:border-muted-foreground transition-colors",
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-medium text-foreground",
                                            children: path.title
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "outline",
                                            className: "gap-1.5 text-xs font-normal text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("size-1.5 rounded-full", path.status === "Completed" && "bg-green-500", path.status === "In Progress" && "bg-blue-500", path.status === "Not Started" && "bg-muted-foreground")
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                                                    lineNumber: 29,
                                                    columnNumber: 17
                                                }, this),
                                                path.status
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                                            lineNumber: 28,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: path.description
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 text-xs text-muted-foreground shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: path.duration
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: path.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "outline",
                                className: "text-xs text-muted-foreground",
                                children: skill
                            }, skill, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: "Progress"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-foreground font-medium",
                                        children: [
                                            path.progress,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-0.5 rounded-full bg-secondary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full rounded-full transition-all", path.status === "Completed" ? "bg-primary" : "bg-blue-500"),
                                    style: {
                                        width: `${path.progress}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    path.status === "Completed" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-sm text-primary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Course completed"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this) : path.status === "In Progress" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: (e)=>{
                            e.stopPropagation();
                            onContinue?.();
                        },
                        variant: "outline",
                        className: "w-full border-border text-foreground hover:bg-blue-500/5 hover:text-blue-500 bg-transparent",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "mr-2 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            "Continue Learning"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: (e)=>{
                            e.stopPropagation();
                            onStart?.();
                        },
                        variant: "outline",
                        className: "w-full border-border text-foreground hover:bg-blue-500/5 hover:text-blue-500 bg-transparent",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "mr-2 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            "Start Course"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = LearningPathCard;
var _c;
__turbopack_context__.k.register(_c, "LearningPathCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-progress-item.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkillProgressItem",
    ()=>SkillProgressItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
;
;
;
function SkillProgressItem({ skill }) {
    const gap = (skill.targetProficiency || skill.proficiency) - skill.proficiency;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4 rounded-lg border border-border bg-card p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium text-foreground",
                                    children: skill.name
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-progress-item.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    className: "text-xs text-muted-foreground",
                                    children: skill.category
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-progress-item.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-progress-item.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: [
                                skill.trend === "up" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    className: "h-4 w-4 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-progress-item.tsx",
                                    lineNumber: 24,
                                    columnNumber: 38
                                }, this),
                                skill.trend === "down" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                    className: "h-4 w-4 text-destructive-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-progress-item.tsx",
                                    lineNumber: 25,
                                    columnNumber: 40
                                }, this),
                                skill.trend === "stable" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                    className: "h-4 w-4 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-progress-item.tsx",
                                    lineNumber: 26,
                                    columnNumber: 42
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-progress-item.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-progress-item.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-0.5 rounded-full bg-secondary",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-0 top-0 h-full rounded-full bg-primary transition-all",
                            style: {
                                width: `${skill.proficiency}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-progress-item.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        skill.targetProficiency && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 h-full w-0.5 bg-muted-foreground",
                            style: {
                                left: `${skill.targetProficiency}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-progress-item.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-progress-item.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2 flex justify-between text-xs text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Current: ",
                                skill.proficiency,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-progress-item.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        skill.targetProficiency && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Target: ",
                                skill.targetProficiency,
                                "% ",
                                gap > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-amber-700",
                                    children: [
                                        "(+",
                                        gap,
                                        "% needed)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-progress-item.tsx",
                                    lineNumber: 48,
                                    columnNumber: 62
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-progress-item.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-progress-item.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-progress-item.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-progress-item.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = SkillProgressItem;
var _c;
__turbopack_context__.k.register(_c, "SkillProgressItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CourseDetailModal",
    ()=>CourseDetailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function CourseDetailModal({ course, open, onClose, onEnroll }) {
    _s();
    const [enrolled, setEnrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!course) return null;
    const handleEnroll = ()=>{
        setEnrolled(true);
        onEnroll?.(course);
        setTimeout(()=>{
            setEnrolled(false);
            onClose();
        }, 1500);
    };
    const modules = [
        {
            name: "Introduction & Setup",
            duration: "30 min",
            completed: course.progress >= 20
        },
        {
            name: "Core Concepts",
            duration: "1.5 hrs",
            completed: course.progress >= 40
        },
        {
            name: "Hands-on Practice",
            duration: "2 hrs",
            completed: course.progress >= 60
        },
        {
            name: "Advanced Topics",
            duration: "1.5 hrs",
            completed: course.progress >= 80
        },
        {
            name: "Final Project",
            duration: "2 hrs",
            completed: course.progress >= 100
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-2xl max-h-[85vh] overflow-y-auto bg-card border-border",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        className: "text-foreground pr-8",
                        children: "Course Details"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                enrolled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-12 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "h-8 w-8 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold text-foreground mb-2",
                            children: "Successfully Enrolled!"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "You can now access this course from your learning dashboard."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pb-4 border-b border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pr-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-semibold text-foreground mb-2",
                                                    children: course.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground",
                                                    children: course.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "outline",
                                            className: "gap-1.5 font-normal text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("size-2 rounded-full", course.status === "Completed" && "bg-green-500", course.status === "In Progress" && "bg-blue-500", course.status === "Not Started" && "bg-muted-foreground")
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this),
                                                course.status
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-6 mt-4 text-sm text-muted-foreground flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, this),
                                                course.duration
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this),
                                                course.difficulty
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 19
                                                }, this),
                                                "1,234 enrolled"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: "h-4 w-4 text-amber-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 19
                                                }, this),
                                                "4.8 (256 reviews)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this),
                        course.status !== "Not Started" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-4 border-b border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-foreground",
                                            children: "Your Progress"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-primary font-medium",
                                            children: [
                                                course.progress,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                            lineNumber: 106,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                    value: course.progress,
                                    className: "h-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                    lineNumber: 108,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                            lineNumber: 103,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-medium text-foreground mb-3",
                                    children: "Course Modules"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: modules.map((module, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        module.completed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            className: "h-5 w-5 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-5 w-5 rounded-full border-2 border-muted-foreground/30"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: module.completed ? "text-foreground" : "text-muted-foreground",
                                                            children: module.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: module.duration
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                            lineNumber: 117,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-4 border-t border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-medium text-foreground mb-3 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                            className: "h-4 w-4 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this),
                                        "Skills You'll Gain"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                        "Problem Solving",
                                        "Technical Design",
                                        "Best Practices",
                                        "Code Review"
                                    ].map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "outline",
                                            className: "text-muted-foreground",
                                            children: skill
                                        }, skill, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                            lineNumber: 145,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 pt-4 border-t border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: onClose,
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this),
                                course.status === "Not Started" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "bg-primary text-primary-foreground",
                                    onClick: handleEnroll,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            className: "mr-2 h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                            lineNumber: 159,
                                            columnNumber: 19
                                        }, this),
                                        "Enroll Now"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                    lineNumber: 158,
                                    columnNumber: 17
                                }, this) : course.status === "In Progress" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "bg-primary text-primary-foreground",
                                    onClick: onClose,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            className: "mr-2 h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, this),
                                        "Continue Learning"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                    lineNumber: 163,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "bg-primary text-primary-foreground",
                                    onClick: onClose,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                            className: "mr-2 h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                            lineNumber: 169,
                                            columnNumber: 19
                                        }, this),
                                        "View Certificate"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                                    lineNumber: 168,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(CourseDetailModal, "XSgROBFeEHdSZUma0phkAGezzgo=");
_c = CourseDetailModal;
var _c;
__turbopack_context__.k.register(_c, "CourseDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpskillingPath",
    ()=>UpskillingPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/workos-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$learning$2d$path$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/workos/learning-path-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$skill$2d$progress$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-progress-item.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$skill$2d$radar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-radar-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$course$2d$detail$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/workos/course-detail-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function UpskillingPath() {
    _s();
    // Using the first employee as the "current user" for the prototype
    const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employees"][0];
    const [selectedCourse, setSelectedCourse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const inProgressPaths = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["learningPaths"].filter((p)=>p.status === "In Progress");
    const recommendedPaths = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["learningPaths"].filter((p)=>p.status === "Not Started");
    const completedPaths = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["learningPaths"].filter((p)=>p.status === "Completed");
    const totalProgress = Math.round(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["learningPaths"].reduce((acc, p)=>acc + p.progress, 0) / __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["learningPaths"].length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6 p-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-6 md:flex-row md:items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                        className: "h-20 w-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                src: currentUser.avatar || "/placeholder.svg"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                className: "bg-primary text-primary-foreground text-xl",
                                children: currentUser.name.split(" ").map((n)=>n[0]).join("")
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-foreground",
                                children: currentUser.name
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: [
                                    currentUser.role,
                                    " - ",
                                    currentUser.department
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-4 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                className: "h-4 w-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    currentUser.skills.length,
                                                    " skills tracked"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                className: "h-4 w-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    completedPaths.length,
                                                    " courses completed"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                lineNumber: 50,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "h-4 w-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    inProgressPaths.length,
                                                    " in progress"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center md:text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-bold text-primary",
                                children: [
                                    totalProgress,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Overall Progress"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 lg:col-span-2",
                        children: [
                            inProgressPaths.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                className: "h-5 w-5 text-blue-400"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-medium text-foreground",
                                                children: "Continue Learning"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 md:grid-cols-2",
                                        children: inProgressPaths.map((path)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$learning$2d$path$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LearningPathCard"], {
                                                path: path,
                                                onClick: ()=>setSelectedCourse(path),
                                                onContinue: ()=>setSelectedCourse(path)
                                            }, path.id, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            recommendedPaths.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                className: "h-5 w-5 text-amber-600"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-medium text-foreground",
                                                children: "Recommended For You"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 md:grid-cols-2",
                                        children: recommendedPaths.map((path)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$learning$2d$path$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LearningPathCard"], {
                                                path: path,
                                                onClick: ()=>setSelectedCourse(path),
                                                onStart: ()=>setSelectedCourse(path)
                                            }, path.id, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            completedPaths.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                className: "h-5 w-5 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-medium text-foreground",
                                                children: "Completed"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 md:grid-cols-2",
                                        children: completedPaths.map((path)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$learning$2d$path$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LearningPathCard"], {
                                                path: path,
                                                onClick: ()=>setSelectedCourse(path)
                                            }, path.id, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-border bg-card mt-11",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "pb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-base font-medium text-foreground",
                                            children: "Your Skill Profile"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$skill$2d$radar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkillRadarChart"], {
                                                skills: currentUser.skills
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                lineNumber: 132,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex items-center justify-center gap-4 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 w-2 rounded-full bg-primary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-muted-foreground",
                                                                children: "Current"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 w-2 rounded-full border-2 border-[#6366f1] bg-transparent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-muted-foreground",
                                                                children: "Target"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-border bg-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "pb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-base font-medium text-foreground",
                                            children: "Skill Progress"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "space-y-3",
                                        children: currentUser.skills.slice(0, 4).map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$skill$2d$progress$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkillProgressItem"], {
                                                skill: skill
                                            }, skill.name, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$course$2d$detail$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CourseDetailModal"], {
                course: selectedCourse,
                open: !!selectedCourse,
                onClose: ()=>setSelectedCourse(null)
            }, void 0, false, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(UpskillingPath, "Qu/FbX9TIaaPauMUSlzRJW4QCHk=");
_c = UpskillingPath;
var _c;
__turbopack_context__.k.register(_c, "UpskillingPath");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AssignModal",
    ()=>AssignModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function AssignModal({ employeeName, employeeAvatar, projectName, matchScore, open, onClose, onConfirm }) {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("confirm");
    const handleConfirm = ()=>{
        setStatus("loading");
        setTimeout(()=>{
            setStatus("success");
            onConfirm();
            setTimeout(()=>{
                setStatus("confirm");
                onClose();
            }, 1500);
        }, 1000);
    };
    const handleClose = ()=>{
        setStatus("confirm");
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: handleClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-md bg-card border-border",
            children: status === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "h-8 w-8 text-primary"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                            lineNumber: 53,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-foreground mb-2",
                        children: "Assignment Successful!"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: [
                            employeeName,
                            " has been assigned to ",
                            projectName,
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                lineNumber: 51,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "text-foreground",
                            children: "Confirm Assignment"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                            lineNumber: 63,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 p-4 rounded-lg bg-secondary/50 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                        className: "h-12 w-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                src: employeeAvatar || "/placeholder.svg"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                className: "bg-primary text-primary-foreground",
                                                children: employeeName.split(" ").map((n)=>n[0]).join("")
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-foreground",
                                                children: employeeName
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: [
                                                    "Match Score: ",
                                                    matchScore,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                                                lineNumber: 79,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "h-5 w-5 text-primary mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-foreground",
                                                children: [
                                                    "Assigning to: ",
                                                    projectName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground mt-1",
                                                children: "This employee will be notified and added to the project team."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this),
                            matchScore < 70 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "h-5 w-5 text-amber-500 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                                        lineNumber: 95,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-foreground",
                                                children: "Low Match Score"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                                                lineNumber: 97,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground mt-1",
                                                children: "Consider providing additional training resources for this assignment."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                                                lineNumber: 98,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                                        lineNumber: 96,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                                lineNumber: 94,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end gap-3 pt-4 border-t border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                onClick: handleClose,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "bg-primary text-primary-foreground",
                                onClick: handleConfirm,
                                disabled: status === "loading",
                                children: status === "loading" ? "Assigning..." : "Confirm Assignment"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(AssignModal, "qOtJbxe+ySxcFSN6520JYu1RA7E=");
_c = AssignModal;
var _c;
__turbopack_context__.k.register(_c, "AssignModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = DropdownMenu;
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = DropdownMenuPortal;
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = DropdownMenuTrigger;
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c3 = DropdownMenuContent;
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = DropdownMenuGroup;
function DropdownMenuItem({ className, inset, variant = 'default', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c5 = DropdownMenuItem;
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c6 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c7 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_c8 = DropdownMenuRadioItem;
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c9 = DropdownMenuLabel;
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-border -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c10 = DropdownMenuSeparator;
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground ml-auto text-xs tracking-widest', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_c11 = DropdownMenuShortcut;
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
_c12 = DropdownMenuSub;
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_c13 = DropdownMenuSubTrigger;
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_c14 = DropdownMenuSubContent;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "DropdownMenu");
__turbopack_context__.k.register(_c1, "DropdownMenuPortal");
__turbopack_context__.k.register(_c2, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c3, "DropdownMenuContent");
__turbopack_context__.k.register(_c4, "DropdownMenuGroup");
__turbopack_context__.k.register(_c5, "DropdownMenuItem");
__turbopack_context__.k.register(_c6, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c7, "DropdownMenuRadioGroup");
__turbopack_context__.k.register(_c8, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c9, "DropdownMenuLabel");
__turbopack_context__.k.register(_c10, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c11, "DropdownMenuShortcut");
__turbopack_context__.k.register(_c12, "DropdownMenuSub");
__turbopack_context__.k.register(_c13, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c14, "DropdownMenuSubContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkillMatching",
    ()=>SkillMatching
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/lib/workos-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$assign$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/workos/assign-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/arrow-up-down.js [app-client] (ecmascript) <export default as ArrowUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const allSkills = [
    "React",
    "TypeScript",
    "GraphQL",
    "Problem Solving",
    "Communication",
    "Node.js",
    "Team Leadership",
    "System Design"
];
function SkillMatching() {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("matchScore");
    const [sortOrder, setSortOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("desc");
    const [selectedSkills, setSelectedSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [availabilityFilter, setAvailabilityFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [minMatchScore, setMinMatchScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [assignModal, setAssignModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        open: false,
        employeeName: "",
        matchScore: 0
    });
    const sortedMatches = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectMatches"]
    ].filter((match)=>{
        // Search filter
        const matchesSearch = match.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) || match.role.toLowerCase().includes(searchQuery.toLowerCase()) || match.skillsMatched.some((skill)=>skill.toLowerCase().includes(searchQuery.toLowerCase()));
        // Skills filter
        const matchesSkills = selectedSkills.length === 0 || selectedSkills.every((skill)=>match.skillsMatched.includes(skill));
        // Availability filter
        const matchesAvailability = availabilityFilter.length === 0 || availabilityFilter.includes(match.availability);
        // Match score filter
        const matchesScore = match.matchScore >= minMatchScore;
        return matchesSearch && matchesSkills && matchesAvailability && matchesScore;
    }).sort((a, b)=>{
        let comparison = 0;
        if (sortBy === "matchScore") {
            comparison = a.matchScore - b.matchScore;
        } else if (sortBy === "growthPotential") {
            comparison = a.growthPotential - b.growthPotential;
        } else {
            const order = {
                Available: 0,
                Busy: 1,
                "On Leave": 2
            };
            comparison = order[a.availability] - order[b.availability];
        }
        return sortOrder === "desc" ? -comparison : comparison;
    });
    const toggleSort = (column)=>{
        if (sortBy === column) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(column);
            setSortOrder("desc");
        }
    };
    const toggleSkill = (skill)=>{
        setSelectedSkills((prev)=>prev.includes(skill) ? prev.filter((s)=>s !== skill) : [
                ...prev,
                skill
            ]);
    };
    const toggleAvailability = (availability)=>{
        setAvailabilityFilter((prev)=>prev.includes(availability) ? prev.filter((a)=>a !== availability) : [
                ...prev,
                availability
            ]);
    };
    const clearFilters = ()=>{
        setSelectedSkills([]);
        setAvailabilityFilter([]);
        setMinMatchScore(0);
        setSearchQuery("");
    };
    const hasActiveFilters = selectedSkills.length > 0 || availabilityFilter.length > 0 || minMatchScore > 0;
    const getEmployee = (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employees"].find((e)=>e.id === id);
    const handleAssignClick = (match)=>{
        const employee = getEmployee(match.employeeId);
        setAssignModal({
            open: true,
            employeeName: match.employeeName,
            employeeAvatar: employee?.avatar,
            matchScore: match.matchScore
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-foreground",
                        children: "Project: Frontend Redesign"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Find the best team members for this project based on required skills"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-border bg-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "pb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-base font-medium text-foreground",
                            children: "Required Skills"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                                "React",
                                "TypeScript",
                                "GraphQL",
                                "Problem Solving",
                                "Communication"
                            ].map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    className: "text-sm text-muted-foreground",
                                    children: skill
                                }, skill, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1 max-w-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Search by name, role, or skill...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "bg-secondary pl-9 text-foreground placeholder:text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-border text-muted-foreground hover:bg-secondary hover:text-foreground bg-transparent", selectedSkills.length > 0 && "border-primary text-primary"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                            className: "mr-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Skills ",
                                                        selectedSkills.length > 0 && `(${selectedSkills.length})`
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                align: "end",
                                                className: "w-56",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                                        children: "Filter by Skills"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 17
                                                    }, this),
                                                    allSkills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuCheckboxItem"], {
                                                            checked: selectedSkills.includes(skill),
                                                            onCheckedChange: ()=>toggleSkill(skill),
                                                            children: skill
                                                        }, skill, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                lineNumber: 175,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-border text-muted-foreground hover:bg-secondary hover:text-foreground bg-transparent", availabilityFilter.length > 0 && "border-primary text-primary"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                            className: "mr-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Availability ",
                                                        availabilityFilter.length > 0 && `(${availabilityFilter.length})`
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                lineNumber: 192,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                align: "end",
                                                className: "w-48",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                                        children: "Filter by Availability"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 17
                                                    }, this),
                                                    [
                                                        "Available",
                                                        "Busy",
                                                        "On Leave"
                                                    ].map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuCheckboxItem"], {
                                                            checked: availabilityFilter.includes(status),
                                                            onCheckedChange: ()=>toggleAvailability(status),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-1.5 w-1.5 rounded-full", status === "Available" && "bg-primary", status === "Busy" && "bg-amber-400", status === "On Leave" && "bg-muted-foreground")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                                        lineNumber: 215,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    status
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                                lineNumber: 214,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, status, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                lineNumber: 205,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-border text-muted-foreground hover:bg-secondary hover:text-foreground bg-transparent", minMatchScore > 0 && "border-primary text-primary"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "mr-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Match ",
                                                        minMatchScore > 0 && `(${minMatchScore}%+)`
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                lineNumber: 232,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                align: "end",
                                                className: "w-48",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                                        children: "Minimum Match Score"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 17
                                                    }, this),
                                                    [
                                                        0,
                                                        50,
                                                        70,
                                                        80,
                                                        90
                                                    ].map((score)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuCheckboxItem"], {
                                                            checked: minMatchScore === score,
                                                            onCheckedChange: ()=>setMinMatchScore(score),
                                                            children: score === 0 ? "All scores" : `${score}% or higher`
                                                        }, score, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                lineNumber: 245,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this),
                                    hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: clearFilters,
                                        className: "text-muted-foreground hover:text-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "mr-1 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this),
                                            "Clear"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-muted-foreground",
                                children: "Active filters:"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this),
                            selectedSkills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    className: "gap-1 text-xs font-normal text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                            className: "h-3 w-3 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                            lineNumber: 285,
                                            columnNumber: 17
                                        }, this),
                                        skill,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>toggleSkill(skill),
                                            className: "hover:text-foreground",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                lineNumber: 288,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                            lineNumber: 287,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, skill, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this)),
                            availabilityFilter.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    className: "gap-1 text-xs font-normal text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-1.5 w-1.5 rounded-full", status === "Available" && "bg-green-500", status === "Busy" && "bg-orange-500", status === "On Leave" && "bg-red-500")
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, this),
                                        status,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>toggleAvailability(status),
                                            className: "hover:text-foreground",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                lineNumber: 308,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                            lineNumber: 307,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, status, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                    lineNumber: 293,
                                    columnNumber: 15
                                }, this)),
                            minMatchScore > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "outline",
                                className: "gap-1 text-xs font-normal text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        className: "h-3 w-3 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                        lineNumber: 314,
                                        columnNumber: 17
                                    }, this),
                                    minMatchScore,
                                    "%+ match",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMinMatchScore(0),
                                        className: "hover:text-foreground",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                            lineNumber: 317,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                        lineNumber: 316,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                lineNumber: 313,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                        lineNumber: 277,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            "Showing ",
                            sortedMatches.length,
                            " of ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectMatches"].length,
                            " employees"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-border bg-card overflow-hidden py-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-border bg-secondary/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 text-left text-sm font-medium text-muted-foreground",
                                            children: "Employee"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                            lineNumber: 336,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 text-left text-sm font-medium text-muted-foreground",
                                            children: "Skills Matched"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 text-left text-sm font-medium text-muted-foreground",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>toggleSort("matchScore"),
                                                className: "flex items-center gap-1 hover:text-foreground",
                                                children: [
                                                    "Match Score",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                lineNumber: 339,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                            lineNumber: 338,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 text-left text-sm font-medium text-muted-foreground",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>toggleSort("growthPotential"),
                                                className: "flex items-center gap-1 hover:text-foreground",
                                                children: [
                                                    "Growth Potential",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                lineNumber: 348,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                            lineNumber: 347,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 text-left text-sm font-medium text-muted-foreground",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>toggleSort("availability"),
                                                className: "flex items-center gap-1 hover:text-foreground",
                                                children: [
                                                    "Availability",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                lineNumber: 357,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 text-right text-sm font-medium text-muted-foreground",
                                            children: "Action"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                            lineNumber: 365,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                    lineNumber: 335,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                lineNumber: 334,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: sortedMatches.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 6,
                                        className: "px-4 py-12 text-center text-muted-foreground",
                                        children: "No employees match your current filters. Try adjusting your criteria."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                        lineNumber: 371,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                    lineNumber: 370,
                                    columnNumber: 17
                                }, this) : sortedMatches.map((match, index)=>{
                                    const employee = getEmployee(match.employeeId);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b border-border transition-colors hover:bg-secondary/30", index === sortedMatches.length - 1 && "border-b-0"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                            className: "h-9 w-9",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                                    src: employee?.avatar || "/placeholder.svg"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                                    lineNumber: 390,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                    className: "bg-secondary text-foreground text-xs",
                                                                    children: match.employeeName.split(" ").map((n)=>n[0]).join("")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                                    lineNumber: 391,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium text-foreground",
                                                                    children: match.employeeName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                                    lineNumber: 399,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: match.role
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                                    lineNumber: 400,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                            lineNumber: 398,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                lineNumber: 387,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1.5",
                                                    children: [
                                                        match.skillsMatched.slice(0, 3).map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: "outline",
                                                                className: "gap-1 text-xs font-normal text-muted-foreground",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                        className: "h-3 w-3 text-green-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                                        lineNumber: 414,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    skill
                                                                ]
                                                            }, skill, true, {
                                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                                lineNumber: 409,
                                                                columnNumber: 29
                                                            }, this)),
                                                        match.skillsMissing.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            className: "gap-1 text-xs font-normal text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                    className: "h-3 w-3 text-red-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                                    lineNumber: 420,
                                                                    columnNumber: 31
                                                                }, this),
                                                                match.skillsMissing.length,
                                                                " missing"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                            lineNumber: 419,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                lineNumber: 406,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-0.5 w-16 rounded-full bg-secondary",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full rounded-full", match.matchScore >= 85 && "bg-primary", match.matchScore >= 70 && match.matchScore < 85 && "bg-blue-500", match.matchScore < 70 && "bg-amber-500"),
                                                                style: {
                                                                    width: `${match.matchScore}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                                lineNumber: 431,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                            lineNumber: 430,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium", match.matchScore >= 85 && "text-primary", match.matchScore >= 70 && match.matchScore < 85 && "text-blue-600", match.matchScore < 70 && "text-amber-600"),
                                                            children: [
                                                                match.matchScore,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                lineNumber: 428,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", match.growthPotential >= 80 && "text-primary", match.growthPotential >= 60 && match.growthPotential < 80 && "text-blue-400", match.growthPotential < 60 && "text-muted-foreground")
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                            lineNumber: 457,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-foreground",
                                                            children: [
                                                                match.growthPotential,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                            lineNumber: 465,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                lineNumber: 455,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "outline",
                                                    className: "gap-1.5 text-xs font-normal text-muted-foreground",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-1.5 w-1.5 rounded-full", match.availability === "Available" && "bg-green-500", match.availability === "Busy" && "bg-orange-500", match.availability === "On Leave" && "bg-red-500")
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                            lineNumber: 472,
                                                            columnNumber: 27
                                                        }, this),
                                                        match.availability
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                lineNumber: 470,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-4 text-right",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "sm",
                                                    variant: match.availability === "Available" ? "secondary" : "outline",
                                                    disabled: match.availability === "On Leave",
                                                    onClick: ()=>handleAssignClick(match),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(match.availability === "Available" && ""),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                            className: "mr-1.5 h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                            lineNumber: 496,
                                                            columnNumber: 27
                                                        }, this),
                                                        "Assign"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                                lineNumber: 485,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, match.employeeId, true, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                        lineNumber: 379,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                lineNumber: 368,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                        lineNumber: 333,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                    lineNumber: 332,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 sm:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-border bg-card p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "h-5 w-5 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                        lineNumber: 514,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                    lineNumber: 513,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-semibold text-foreground",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectMatches"].filter((m)=>m.matchScore >= 80).length
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                            lineNumber: 517,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Strong Matches"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                            lineNumber: 520,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                    lineNumber: 516,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                            lineNumber: 512,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                        lineNumber: 511,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-border bg-card p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "h-5 w-5 text-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                        lineNumber: 527,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                    lineNumber: 526,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-semibold text-foreground",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectMatches"].filter((m)=>m.availability === "Available").length
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                            lineNumber: 530,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Available Now"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                            lineNumber: 533,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                    lineNumber: 529,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                            lineNumber: 525,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                        lineNumber: 524,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-border bg-card p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        className: "h-5 w-5 text-amber-600"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                        lineNumber: 540,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                    lineNumber: 539,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-semibold text-foreground",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$lib$2f$workos$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectMatches"].filter((m)=>m.growthPotential >= 80).length
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                            lineNumber: 543,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "High Growth Potential"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                            lineNumber: 546,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                                    lineNumber: 542,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                            lineNumber: 538,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                        lineNumber: 537,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                lineNumber: 510,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$assign$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssignModal"], {
                employeeName: assignModal.employeeName,
                employeeAvatar: assignModal.employeeAvatar,
                projectName: "Frontend Redesign",
                matchScore: assignModal.matchScore,
                open: assignModal.open,
                onClose: ()=>setAssignModal({
                        ...assignModal,
                        open: false
                    }),
                onConfirm: ()=>{}
            }, void 0, false, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
                lineNumber: 552,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(SkillMatching, "YrlTg9+C7lgqJTPxFv4ETQQUwFs=");
_c = SkillMatching;
var _c;
__turbopack_context__.k.register(_c, "SkillMatching");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Berkeley/challenge/workosdemo/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkOSApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/workos/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/workos/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$skills$2d$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skills-dashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$upskilling$2d$path$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/workos/upskilling-path.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$skill$2d$matching$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Berkeley/challenge/workosdemo/components/workos/skill-matching.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function WorkOSApp() {
    _s();
    const [activeView, setActiveView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dashboard");
    const viewConfig = {
        dashboard: {
            title: "Skills Dashboard",
            subtitle: "",
            component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$skills$2d$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkillsDashboard"]
        },
        upskilling: {
            title: "My Growth Path",
            subtitle: "Personalized learning recommendations based on your goals",
            component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$upskilling$2d$path$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UpskillingPath"]
        },
        matching: {
            title: "Skill Matching",
            subtitle: "",
            component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$skill$2d$matching$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkillMatching"]
        }
    };
    const CurrentView = viewConfig[activeView].component;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkOSSidebar"], {
                activeView: activeView,
                onViewChange: setActiveView
            }, void 0, false, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/app/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$components$2f$workos$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkOSHeader"], {
                        title: viewConfig[activeView].title,
                        subtitle: viewConfig[activeView].subtitle
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/app/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 overflow-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Berkeley$2f$challenge$2f$workosdemo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrentView, {}, void 0, false, {
                            fileName: "[project]/Documents/Berkeley/challenge/workosdemo/app/page.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/app/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Berkeley/challenge/workosdemo/app/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Berkeley/challenge/workosdemo/app/page.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(WorkOSApp, "XwNR4FjxKHPH8zHpNRRjAqfD2l4=");
_c = WorkOSApp;
var _c;
__turbopack_context__.k.register(_c, "WorkOSApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Berkeley_challenge_workosdemo_42ad4a93._.js.map