/** 
 * onetrust-banner-sdk
 * v202403.1.0
 * by OneTrust LLC
 * Copyright 2024 
 */
! function() {
    "use strict";
    var N = function(e, t) {
        return (N = Object.setPrototypeOf || ({
                __proto__: []
            }
            instanceof Array ? function(e, t) {
                e.__proto__ = t
            } : function(e, t) {
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }))(e, t)
    };

    function D(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function o() {
            this.constructor = e
        }
        N(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    }
    var H, R = function() {
        return (R = Object.assign || function(e) {
            for (var t, o = 1, n = arguments.length; o < n; o++)
                for (var r in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }).apply(this, arguments)
    };

    function u(e, s, a, l) {
        return new(a = a || Promise)(function(o, t) {
            function n(e) {
                try {
                    i(l.next(e))
                } catch (e) {
                    t(e)
                }
            }

            function r(e) {
                try {
                    i(l.throw(e))
                } catch (e) {
                    t(e)
                }
            }

            function i(e) {
                var t;
                e.done ? o(e.value) : ((t = e.value) instanceof a ? t : new a(function(e) {
                    e(t)
                })).then(n, r)
            }
            i((l = l.apply(e, s || [])).next())
        })
    }

    function p(n, r) {
        var i, s, a, l = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            },
            c = {
                next: e(0),
                throw: e(1),
                return: e(2)
            };
        return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
            return this
        }), c;

        function e(o) {
            return function(e) {
                var t = [o, e];
                if (i) throw new TypeError("Generator is already executing.");
                for (; l = c && t[c = 0] ? 0 : l;) try {
                    if (i = 1, s && (a = 2 & t[0] ? s.return : t[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, t[1])).done) return a;
                    switch (s = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                        case 0:
                        case 1:
                            a = t;
                            break;
                        case 4:
                            return l.label++, {
                                value: t[1],
                                done: !1
                            };
                        case 5:
                            l.label++, s = t[1], t = [0];
                            continue;
                        case 7:
                            t = l.ops.pop(), l.trys.pop();
                            continue;
                        default:
                            if (!(a = 0 < (a = l.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                l = 0;
                                continue
                            }
                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) l.label = t[1];
                            else if (6 === t[0] && l.label < a[1]) l.label = a[1], a = t;
                            else {
                                if (!(a && l.label < a[2])) {
                                    a[2] && l.ops.pop(), l.trys.pop();
                                    continue
                                }
                                l.label = a[2], l.ops.push(t)
                            }
                    }
                    t = r.call(n, l)
                } catch (e) {
                    t = [6, e], s = 0
                } finally {
                    i = a = 0
                }
                if (5 & t[0]) throw t[1];
                return {
                    value: t[0] ? t[1] : void 0,
                    done: !0
                }
            }
        }
    }

    function F() {
        for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
        for (var n = Array(e), r = 0, t = 0; t < o; t++)
            for (var i = arguments[t], s = 0, a = i.length; s < a; s++, r++) n[r] = i[s];
        return n
    }(e = H = H || {})[e.ACTIVE = 0] = "ACTIVE", e[e.ALWAYS_ACTIVE = 1] = "ALWAYS_ACTIVE", e[e.EXPIRED = 2] = "EXPIRED", e[e.NO_CONSENT = 3] = "NO_CONSENT", e[e.OPT_OUT = 4] = "OPT_OUT", e[e.PENDING = 5] = "PENDING", e[e.WITHDRAWN = 6] = "WITHDRAWN";
    var M = setTimeout;

    function q(e) {
        return Boolean(e && void 0 !== e.length)
    }

    function U() {}

    function j(e) {
        if (!(this instanceof j)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], X(e, this)
    }

    function z(o, n) {
        for (; 3 === o._state;) o = o._value;
        0 === o._state ? o._deferreds.push(n) : (o._handled = !0, j._immediateFn(function() {
            var e, t = 1 === o._state ? n.onFulfilled : n.onRejected;
            if (null === t)(1 === o._state ? K : W)(n.promise, o._value);
            else {
                try {
                    e = t(o._value)
                } catch (e) {
                    return void W(n.promise, e)
                }
                K(n.promise, e)
            }
        }))
    }

    function K(t, e) {
        try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var o = e.then;
                if (e instanceof j) return t._state = 3, t._value = e, void J(t);
                if ("function" == typeof o) return void X((n = o, r = e, function() {
                    n.apply(r, arguments)
                }), t)
            }
            t._state = 1, t._value = e, J(t)
        } catch (e) {
            W(t, e)
        }
        var n, r
    }

    function W(e, t) {
        e._state = 2, e._value = t, J(e)
    }

    function J(e) {
        2 === e._state && 0 === e._deferreds.length && j._immediateFn(function() {
            e._handled || j._unhandledRejectionFn(e._value)
        });
        for (var t = 0, o = e._deferreds.length; t < o; t++) z(e, e._deferreds[t]);
        e._deferreds = null
    }

    function Y(e, t, o) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = o
    }

    function X(e, t) {
        var o = !1;
        try {
            e(function(e) {
                o || (o = !0, K(t, e))
            }, function(e) {
                o || (o = !0, W(t, e))
            })
        } catch (e) {
            o || (o = !0, W(t, e))
        }
    }

    function Q() {}
    j.prototype.catch = function(e) {
        return this.then(null, e)
    }, j.prototype.then = function(e, t) {
        var o = new this.constructor(U);
        return z(this, new Y(e, t, o)), o
    }, j.prototype.finally = function(t) {
        var o = this.constructor;
        return this.then(function(e) {
            return o.resolve(t()).then(function() {
                return e
            })
        }, function(e) {
            return o.resolve(t()).then(function() {
                return o.reject(e)
            })
        })
    }, j.all = function(t) {
        return new j(function(r, i) {
            if (!q(t)) return i(new TypeError("Promise.all accepts an array"));
            var s = Array.prototype.slice.call(t);
            if (0 === s.length) return r([]);
            var a = s.length;
            for (var e = 0; e < s.length; e++) ! function t(o, e) {
                try {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var n = e.then;
                        if ("function" == typeof n) return void n.call(e, function(e) {
                            t(o, e)
                        }, i)
                    }
                    s[o] = e, 0 == --a && r(s)
                } catch (e) {
                    i(e)
                }
            }(e, s[e])
        })
    }, j.resolve = function(t) {
        return t && "object" == typeof t && t.constructor === j ? t : new j(function(e) {
            e(t)
        })
    }, j.reject = function(o) {
        return new j(function(e, t) {
            t(o)
        })
    }, j.race = function(r) {
        return new j(function(e, t) {
            if (!q(r)) return t(new TypeError("Promise.race accepts an array"));
            for (var o = 0, n = r.length; o < n; o++) j.resolve(r[o]).then(e, t)
        })
    }, j._immediateFn = "function" == typeof setImmediate ? function(e) {
        setImmediate(e)
    } : function(e) {
        M(e, 0)
    }, j._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    }, Q.prototype.initPolyfill = function() {
        this.initArrayIncludesPolyfill(), this.initObjectAssignPolyfill(), this.initArrayFillPolyfill(), this.initClosestPolyfill(), this.initIncludesPolyfill(), this.initEndsWithPoly(), this.initCustomEventPolyfill(), this.promisesPolyfil()
    }, Q.prototype.initArrayIncludesPolyfill = function() {
        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(e) {
                for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
                if (null == this) throw new TypeError("Array.prototype.includes called on null or undefined");
                var n = Object(this),
                    r = parseInt(n.length, 10) || 0;
                if (0 !== r) {
                    var i, s, a = t[1] || 0;
                    for (0 <= a ? i = a : (i = r + a) < 0 && (i = 0); i < r;) {
                        if (e === (s = n[i]) || e != e && s != s) return !0;
                        i++
                    }
                }
                return !1
            },
            writable: !0,
            configurable: !0
        })
    }, Q.prototype.initEndsWithPoly = function() {
        String.prototype.endsWith || Object.defineProperty(String.prototype, "endsWith", {
            value: function(e, t) {
                return (void 0 === t || t > this.length) && (t = this.length), this.substring(t - e.length, t) === e
            },
            writable: !0,
            configurable: !0
        })
    }, Q.prototype.initClosestPolyfill = function() {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || Object.defineProperty(Element.prototype, "closest", {
            value: function(e) {
                var t = this;
                do {
                    if (t.matches(e)) return t
                } while (null !== (t = t.parentElement || t.parentNode) && 1 === t.nodeType);
                return null
            },
            writable: !0,
            configurable: !0
        })
    }, Q.prototype.initIncludesPolyfill = function() {
        String.prototype.includes || Object.defineProperty(String.prototype, "includes", {
            value: function(e, t) {
                return !((t = "number" != typeof t ? 0 : t) + e.length > this.length) && -1 !== this.indexOf(e, t)
            },
            writable: !0,
            configurable: !0
        })
    }, Q.prototype.initObjectAssignPolyfill = function() {
        "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(e, t) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                for (var o = Object(e), n = 1; n < arguments.length; n++) {
                    var r = arguments[n];
                    if (null != r)
                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (o[i] = r[i])
                }
                return o
            },
            writable: !0,
            configurable: !0
        })
    }, Q.prototype.initArrayFillPolyfill = function() {
        Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
            value: function(e) {
                if (null == this) throw new TypeError("this is null or not defined");
                for (var t = Object(this), o = t.length >>> 0, n = arguments[1] >> 0, r = n < 0 ? Math.max(o + n, 0) : Math.min(n, o), n = arguments[2], n = void 0 === n ? o : n >> 0, i = n < 0 ? Math.max(o + n, 0) : Math.min(n, o); r < i;) t[r] = e, r++;
                return t
            }
        })
    }, Q.prototype.initCustomEventPolyfill = function() {
        if ("function" == typeof window.CustomEvent) return !1;

        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var o = document.createEvent("CustomEvent");
            return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o
        }
        e.prototype = window.Event.prototype, window.CustomEvent = e
    }, Q.prototype.insertViewPortTag = function() {
        var e = document.querySelector('meta[name="viewport"]'),
            t = document.createElement("meta");
        t.name = "viewport", t.content = "width=device-width, initial-scale=1", e || document.head.appendChild(t)
    }, Q.prototype.promisesPolyfil = function() {
        "undefined" == typeof Promise && (window.Promise = j)
    };
    var $, Z, ee, te, oe, ne, re, ie, se, ae, le, ce, de, ue, pe, he, ge, Ce, ye, fe, me, ve, Se, ke, be, Pe, Te, Ae, Ie, Le, _e, Ee, Ve, Oe, Be, we, Ge = new Q,
        xe = ((e = $ = $ || {})[e.Unknown = 0] = "Unknown", e[e.BannerCloseButton = 1] = "BannerCloseButton", e[e.ConfirmChoiceButton = 2] = "ConfirmChoiceButton", e[e.AcceptAll = 3] = "AcceptAll", e[e.RejectAll = 4] = "RejectAll", e[e.BannerSaveSettings = 5] = "BannerSaveSettings", e[e.ContinueWithoutAcceptingButton = 6] = "ContinueWithoutAcceptingButton", (e = Z = Z || {})[e.Banner = 1] = "Banner", e[e.PC = 2] = "PC", e[e.API = 3] = "API", (e = ee = ee || {}).AcceptAll = "AcceptAll", e.RejectAll = "RejectAll", e.UpdateConsent = "UpdateConsent", (e = te = te || {})[e.Purpose = 1] = "Purpose", e[e.SpecialFeature = 2] = "SpecialFeature", (e = oe = oe || {}).Legal = "legal", e.UserFriendly = "user_friendly", (e = ne = ne || {}).Top = "top", e.Bottom = "bottom", (e = re = re || {})[e.Banner = 0] = "Banner", e[e.PrefCenterHome = 1] = "PrefCenterHome", e[e.VendorList = 2] = "VendorList", e[e.CookieList = 3] = "CookieList", e[e.IabIllustrations = 4] = "IabIllustrations", (e = ie = ie || {})[e.RightArrow = 39] = "RightArrow", e[e.LeftArrow = 37] = "LeftArrow", (e = se = se || {}).AfterTitle = "AfterTitle", e.AfterDescription = "AfterDescription", e.AfterDPD = "AfterDPD", (e = ae = ae || {}).PlusMinus = "Plusminus", e.Caret = "Caret", e.NoAccordion = "NoAccordion", (e = le = le || {}).Consent = "Consent", e.LI = "LI", e.AddtlConsent = "AddtlConsent", (e = ce = ce || {}).Iab1Pub = "eupubconsent", e.Iab2Pub = "eupubconsent-v2", e.Iab1Eu = "euconsent", e.Iab2Eu = "euconsent-v2", (e = de = de || {})[e.Disabled = 0] = "Disabled", e[e.Consent = 1] = "Consent", e[e.LegInt = 2] = "LegInt", (e = ue = ue || {})[e["Banner - Allow All"] = 1] = "Banner - Allow All", e[e["Banner - Reject All"] = 2] = "Banner - Reject All", e[e["Banner - Close"] = 3] = "Banner - Close", e[e["Preference Center - Allow All"] = 4] = "Preference Center - Allow All", e[e["Preference Center - Reject All"] = 5] = "Preference Center - Reject All", e[e["Preference Center - Confirm"] = 6] = "Preference Center - Confirm", e[e["GPC value changed"] = 7] = "GPC value changed", (e = pe = pe || {}).Active = "1", e.InActive = "0", (e = he = he || {}).Host = "Host", e.GenVendor = "GenVen", (e = ge = ge || {})[e.Host = 1] = "Host", e[e.GenVen = 2] = "GenVen", e[e.HostAndGenVen = 3] = "HostAndGenVen", (e = Ce = Ce || {})[e.minDays = 1] = "minDays", e[e.maxDays = 30] = "maxDays", e[e.maxYear = 31536e3] = "maxYear", e[e.maxSecToDays = 86400] = "maxSecToDays", (e = ye = ye || {})[e.RTL = 0] = "RTL", e[e.LTR = 1] = "LTR", (e = fe = fe || {})[e.GoogleVendor = 1] = "GoogleVendor", e[e.GeneralVendor = 2] = "GeneralVendor", (e = Pt = Pt || {})[e.Days = 1] = "Days", e[e.Weeks = 7] = "Weeks", e[e.Months = 30] = "Months", e[e.Years = 365] = "Years", (e = me = me || {}).Checkbox = "Checkbox", e.Toggle = "Toggle", (e = ve = ve || {}).SlideIn = "Slide_In", e.FadeIn = "Fade_In", e.RemoveAnimation = "Remove_Animation", (e = Se = Se || {}).Link = "Link", e.Icon = "Icon", (e = ke = ke || {}).consent = "consent", e.set = "set", (e = be = be || {}).update = "update", e.default = "default", e.ads_data_redaction = "ads_data_redaction", (e = Pe = Pe || {}).analytics_storage = "analytics_storage", e.ad_storage = "ad_storage", e.functionality_storage = "functionality_storage", e.personalization_storage = "personalization_storage", e.security_storage = "security_storage", e.ad_user_data = "ad_user_data", e.ad_personalization = "ad_personalization", e.region = "region", e.wait_for_update = "wait_for_update", (e = Te = Te || {}).granted = "granted", e.denied = "denied", 0, (e = Ae = Ae || {}).OBJECT_TO_LI = "ObjectToLI", e.LI_ACTIVE_IF_LEGAL_BASIS = "LIActiveIfLegalBasis", (e = Ie = Ie || {}).cookies = "cookies", e.vendors = "vendors", (e = Le = Le || {}).GDPR = "GDPR", e.CCPA = "CCPA", e.IAB2 = "IAB2", e.IAB2V2 = "IAB2V2", e.GENERIC = "GENERIC", e.LGPD = "LGPD", e.GENERIC_PROMPT = "GENERIC_PROMPT", e.CPRA = "CPRA", e.CDPA = "CDPA", e.USNATIONAL = "USNATIONAL", e.CUSTOM = "CUSTOM", e.COLORADO = "COLORADO", e.CONNECTICUT = "CTDPA", e.UCPA = "UCPA", (e = _e = _e || {}).Name = "OTGPPConsent", e[e.ChunkSize = 4e3] = "ChunkSize", e.ChunkCountParam = "GPPCookiesCount", (e = Ee = Ee || {}).MspaCoveredTransaction = "IsMSPAEnabled", e.MspaOptOutOptionMode = "Opt-Out", e.MspaServiceProviderMode = "Service Provider", 0, (e = Ve = Ve || {}).GpcSegmentType = "GpcSegmentType", e.Gpc = "Gpc", (e = Oe = Oe || {}).SensitiveDataProcessing = "SensitiveDataProcessing", e.KnownChildSensitiveDataConsents = "KnownChildSensitiveDataConsents", (e = Be = Be || {}).CPRA = "uscav1", e.CCPA = "uscav1", e.CDPA = "usvav1", e.USNATIONAL = "usnatv1", e.COLORADO = "uscov1", e.CTDPA = "usctv1", e.UCPA = "usutv1", e.IAB2V2 = "tcfeuv2", (e = we = we || {})[e.CPRA = 8] = "CPRA", e[e.CCPA = 8] = "CCPA", e[e.CDPA = 9] = "CDPA", e[e.USNATIONAL = 7] = "USNATIONAL", e[e.COLORADO = 10] = "COLORADO", e[e.UCPA = 11] = "UCPA", e[e.CTDPA = 12] = "CTDPA", e[e.IAB2V2 = 2] = "IAB2V2", 0, 0, 0, 0, 0, {
            AWAITING_RE_CONSENT: "AwaitingReconsent",
            CONSENT_ID: "consentId",
            GEO_LOCATION: "geolocation",
            INTERACTION_COUNT: "interactionCount",
            IS_IAB_GLOBAL: "isIABGlobal",
            NOT_LANDING_PAGE: "NotLandingPage",
            GEO: "geo",
            GPC_ENABLED: "isGpcEnabled",
            GPC_Browser_Flag: "browserGpcFlag",
            IS_ANONYMOUS_CONSENT: "isAnonUser",
            IDENTIFIER_TYPE: "identifierType"
        }),
        v = {
            ADDITIONAL_CONSENT_STRING: "OTAdditionalConsentString",
            ALERT_BOX_CLOSED: "OptanonAlertBoxClosed",
            OPTANON_CONSENT: "OptanonConsent",
            EU_PUB_CONSENT: "eupubconsent-v2",
            EU_CONSENT: "euconsent-v2",
            SELECTED_VARIANT: "OTVariant",
            OT_PREVIEW: "otpreview",
            GPP_CONSENT: _e.Name
        },
        Ne = "CONFIRMED",
        De = "OPT_OUT",
        He = "NO_CHOICE",
        Re = "NOTGIVEN",
        Fe = "NO_OPT_OUT",
        m = {
            ALWAYS_INACTIVE: "always inactive",
            ALWAYS_ACTIVE: "always active",
            ACTIVE: "active",
            INACTIVE_LANDING_PAGE: "inactive landingpage",
            INACTIVE: "inactive",
            IMPLIED_CONSENT: "implied consent",
            GPC: "gpc",
            DNT: "dnt"
        },
        Me = "LOCAL",
        qe = "TEST",
        Ue = "LOCAL_TEST",
        je = "data-language",
        ze = "otCookieSettingsButton.json",
        Ke = "otCookieSettingsButtonRtl.json",
        We = "otCenterRounded",
        Je = "otFlat",
        Ye = "otFloatingRoundedCorner",
        Xe = "otFloatingFlat",
        Qe = "otFloatingRoundedIcon",
        $e = "otFloatingRounded",
        Ze = "otChoicesBanner",
        et = "otNoBanner",
        tt = "otPcCenter",
        ot = "otPcList",
        nt = "otPcPanel",
        rt = "otPcPopup",
        it = "otPcTab",
        st = "hidebanner",
        at = ((e = {})[Pt.Days] = "PCenterVendorListLifespanDay", e[Pt.Weeks] = "LfSpnWk", e[Pt.Months] = "PCenterVendorListLifespanMonth", e[Pt.Years] = "LfSpnYr", e),
        lt = "DNAC",
        ct = "Category",
        dt = "Host",
        ut = "General Vendor",
        pt = "VendorService",
        ht = "aria-label",
        gt = "aria-hidden",
        Ct = "BRANCH",
        yt = "COOKIE",
        ft = ["IAB2_PURPOSE", "IAB2_STACK", "IAB2_FEATURE", "IAB2_SPL_PURPOSE", "IAB2_SPL_FEATURE", "IAB2V2_PURPOSE", "IAB2V2_SPL_PURPOSE", "IAB2V2_FEATURE", "IAB2V2_SPL_FEATURE", "IAB2V2_STACK"],
        mt = ["COOKIE", "BRANCH", "IAB2_STACK", "IAB2V2_STACK"],
        vt = ["IAB2_PURPOSE", "IAB2_SPL_FEATURE", "IAB2V2_PURPOSE", "IAB2V2_SPL_FEATURE"],
        St = ["IAB2_FEATURE", "IAB2_SPL_PURPOSE", "IAB2V2_FEATURE", "IAB2V2_SPL_PURPOSE"],
        kt = ["IAB2_PURPOSE", "IAB2_SPL_PURPOSE", "IAB2_FEATURE", "IAB2_SPL_FEATURE"],
        S = new function() {};

    function d(e, t, o) {
        void 0 === o && (o = !1);

        function n(e) {
            return e ? (";" !== (e = e.trim()).charAt(e.length - 1) && (e += ";"), e.trim()) : null
        }
        var i = n(e.getAttribute("style")),
            s = n(t),
            t = "",
            t = o && i ? function() {
                for (var e = i.split(";").concat(s.split(";")).filter(function(e) {
                        return 0 !== e.length
                    }), t = "", o = "", n = e.length - 1; 0 <= n; n--) {
                    var r = e[n].substring(0, e[n].indexOf(":") + 1).trim();
                    t.indexOf(r) < 0 && (t += r, o += e[n] + ";")
                }
                return o
            }() : s;
        e.setAttribute("style", t)
    }

    function bt() {}
    bt.prototype.convertKeyValueLowerCase = function(e) {
        for (var t in e) e[t.toLowerCase()] ? e[t.toLowerCase()] = e[t].toLowerCase() : (e[t] && (e[t.toLowerCase()] = e[t].toLowerCase()), delete e[t]);
        return e
    }, bt.prototype.arrToStr = function(e) {
        return e.toString()
    }, bt.prototype.strToArr = function(e) {
        return e ? e.split(",") : []
    }, bt.prototype.strToMap = function(e) {
        if (!e) return new Map;
        for (var t = new Map, o = 0, n = this.strToArr(e); o < n.length; o++) {
            var r = n[o].split(":");
            t.set(r[0], "1" === r[1])
        }
        return t
    }, bt.prototype.empty = function(e) {
        var t = document.getElementById(e);
        if (t)
            for (; t.hasChildNodes();) t.removeChild(t.lastChild)
    }, bt.prototype.show = function(e) {
        e = document.getElementById(e);
        e && d(e, "display: block;", !0)
    }, bt.prototype.remove = function(e) {
        e = document.getElementById(e);
        e && e.parentNode && e.parentNode.removeChild(e)
    }, bt.prototype.appendTo = function(e, t) {
        var o, e = document.getElementById(e);
        e && ((o = document.createElement("div")).innerHTML = t, e.appendChild(o))
    }, bt.prototype.contains = function(e, t) {
        for (var o = 0; o < e.length; o += 1)
            if (e[o].toString().toLowerCase() === t.toString().toLowerCase()) return !0;
        return !1
    }, bt.prototype.indexOf = function(e, t) {
        for (var o = 0; o < e.length; o += 1)
            if (e[o] === t) return o;
        return -1
    }, bt.prototype.endsWith = function(e, t) {
        return -1 !== e.indexOf(t, e.length - t.length)
    }, bt.prototype.generateUUID = function() {
        var o = (new Date).getTime();
        return "undefined" != typeof performance && "function" == typeof performance.now && (o += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = (o + 16 * Math.random()) % 16 | 0;
            return o = Math.floor(o / 16), ("x" === e ? t : 3 & t | 8).toString(16)
        })
    }, bt.prototype.getActiveIdArray = function(e) {
        return e.filter(function(e) {
            return "true" === e.split(":")[1]
        }).map(function(e) {
            return parseInt(e.split(":")[0])
        })
    }, bt.prototype.distinctArray = function(e) {
        var t = new Array;
        return e.forEach(function(e) {
            t.indexOf(e) < 0 && t.push(e)
        }), t
    }, bt.prototype.findIndex = function(e, t) {
        for (var o = -1, n = 0; n < e.length; n++)
            if (void 0 !== e[n] && t(e[n], n)) {
                o = n;
                break
            }
        return o
    }, bt.prototype.getURL = function(e) {
        var t = document.createElement("a");
        return t.href = e, t
    }, bt.prototype.removeURLPrefixes = function(e) {
        return e.toLowerCase().replace(/(^\w+:|^)\/\//, "").replace("www.", "")
    }, bt.prototype.removeChild = function(e) {
        if (e)
            if (e instanceof NodeList || e instanceof Array)
                for (var t = 0; t < e.length; t++) e[t].parentElement.removeChild(e[t]);
            else e.parentElement.removeChild(e)
    }, bt.prototype.getRelativeURL = function(e, t, o) {
        return void 0 === o && (o = !1), t ? (t = "./" + e.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/").replace(".json", ""), o ? t : t + ".js") : e
    }, bt.prototype.setCheckedAttribute = function(e, t, o) {
        (t = e ? document.querySelector(e) : t) && (o ? t.setAttribute("checked", "") : t.removeAttribute("checked"), t.checked = o)
    }, bt.prototype.setDisabledAttribute = function(e, t, o) {
        (t = e ? document.querySelector(e) : t) && (o ? t.setAttribute("disabled", o.toString()) : t.removeAttribute("disabled"))
    }, bt.prototype.setHtmlAttributes = function(e, t) {
        for (var o in t) e.setAttribute(o, t[o]), e[o] = t[o]
    }, bt.prototype.calculateCookieLifespan = function(e) {
        return e < 0 ? I.LifespanTypeText : (e = Math.floor(e / Ce.maxSecToDays)) < Ce.minDays ? "< 1 " + I.PCenterVendorListLifespanDay : e < Ce.maxDays ? e + " " + I.PCenterVendorListLifespanDays : 1 === (e = Math.floor(e / Ce.maxDays)) ? e + " " + I.PCenterVendorListLifespanMonth : e + " " + I.PCenterVendorListLifespanMonths
    }, bt.prototype.insertElement = function(e, t, o) {
        e && t && e.insertAdjacentElement(o, t)
    }, bt.prototype.customQuerySelector = function(t) {
        return function(e) {
            return t.querySelector(e)
        }
    }, bt.prototype.customQuerySelectorAll = function(t) {
        return function(e) {
            return t.querySelectorAll(e)
        }
    };
    var k, b = new bt,
        Pt = (Tt.prototype.removeAlertBox = function() {
            null !== this.getCookie(v.ALERT_BOX_CLOSED) && this.setCookie(v.ALERT_BOX_CLOSED, "", 0, !0)
        }, Tt.prototype.removeIab1 = function() {
            null !== this.getCookie(ce.Iab1Pub) && this.setCookie(ce.Iab1Pub, "", 0, !0)
        }, Tt.prototype.removeIab2 = function() {
            null !== this.getCookie(ce.Iab2Pub) && this.setCookie(ce.Iab2Pub, "", 0, !0)
        }, Tt.prototype.removeAddtlStr = function() {
            null !== this.getCookie(v.ADDITIONAL_CONSENT_STRING) && this.setCookie(v.ADDITIONAL_CONSENT_STRING, "", 0, !0)
        }, Tt.prototype.removeVariant = function() {
            null !== this.getCookie(v.SELECTED_VARIANT) && this.setCookie(v.SELECTED_VARIANT, "", 0, !0)
        }, Tt.prototype.removeOptanon = function() {
            null !== this.getCookie(v.OPTANON_CONSENT) && this.setCookie(v.OPTANON_CONSENT, "", 0, !0)
        }, Tt.prototype.removePreview = function() {
            null !== this.getCookie(v.OT_PREVIEW) && this.setCookie(v.OT_PREVIEW, "", 0, !0)
        }, Tt.prototype.removeAllCookies = function() {
            this.removeIab1(), this.removeIab2(), this.removePreview(), this.removeOptanon(), this.removeVariant(), this.removeAlertBox(), this.removeAddtlStr(), this.removeAmpStorage()
        }, Tt.prototype.writeCookieParam = function(e, t, o, n) {
            var r, i, s, a = {},
                l = this.getCookie(e);
            if (l)
                for (i = l.split("&"), r = 0; r < i.length; r += 1) s = i[r].split("="), a[decodeURIComponent(s[0])] = s[0] === t && n ? decodeURIComponent(s[1]) : decodeURIComponent(s[1]).replace(/\+/g, " ");
            a[t] = o;
            l = S.moduleInitializer.TenantFeatures;
            l && l.CookieV2CookieDateTimeInISO ? a.datestamp = (new Date).toISOString() : a.datestamp = (new Date).toString(), a.version = L.otSDKVersion, o = this.param(a), this.setCookie(e, o, I.ReconsentFrequencyDays)
        }, Tt.prototype.readCookieParam = function(e, t, o) {
            var n, r, i, s, e = this.getCookie(e);
            if (e) {
                for (r = {}, i = e.split("&"), n = 0; n < i.length; n += 1) s = i[n].split("="), r[decodeURIComponent(s[0])] = o ? decodeURIComponent(s[1]) : decodeURIComponent(s[1]).replace(/\+/g, " ");
                return t && r[t] ? r[t] : t && !r[t] ? "" : r
            }
            return ""
        }, Tt.prototype.getCookie = function(e) {
            if (S && S.moduleInitializer && S.moduleInitializer.MobileSDK) {
                var t = this.getCookieDataObj(e);
                if (t) return t.value
            }
            if (L.isAMP && (L.ampData = JSON.parse(localStorage.getItem(L.dataDomainId)) || {}, L.ampData)) return L.ampData[e] || null;
            for (var o, n = e + "=", r = document.cookie.split(";"), i = 0; i < r.length; i += 1) {
                for (o = r[i];
                    " " === o.charAt(0);) o = o.substring(1, o.length);
                if (0 === o.indexOf(n)) return o.substring(n.length, o.length)
            }
            return null
        }, Tt.prototype.setAmpStorage = function() {
            window.localStorage.setItem(L.dataDomainId, JSON.stringify(L.ampData))
        }, Tt.prototype.removeAmpStorage = function() {
            window.localStorage.removeItem(L.dataDomainId)
        }, Tt.prototype.handleAmp = function(e, t) {
            "" !== t ? L.ampData[e] = t : delete L.ampData[e], 0 === Object.keys(L.ampData).length ? this.removeAmpStorage() : this.setAmpStorage()
        }, Tt.prototype.setCookie = function(e, t, o, n, r) {
            var i, s, a, l, c;
            void 0 === n && (n = !1), void 0 === r && (r = new Date), L.isAMP ? this.handleAmp(e, t) : (i = void 0, i = o ? (r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3), "; expires=" + r.toUTCString()) : n ? "; expires=" + new Date(0).toUTCString() : "", o = "", (s = (n = S.moduleInitializer) && n.Domain ? n.Domain.split("/") : []).length <= 1 ? s[1] = "" : o = s.slice(1).join("/"), a = "Samesite=Lax", n.CookieSameSiteNoneEnabled && (a = "Samesite=None; Secure"), l = n.ScriptType === qe || n.ScriptType === Ue, L.isPreview || !l && !n.MobileSDK ? (c = t + i + "; path=/" + o + "; domain=." + s[0] + "; " + a, document.cookie = e + "=" + c) : (c = t + i + "; path=/; " + a, n.MobileSDK ? this.setCookieDataObj({
                name: e,
                value: t,
                expires: i,
                date: r,
                domainAndPath: s
            }) : document.cookie = e + "=" + c))
        }, Tt.prototype.setCookieDataObj = function(t) {
            var e;
            t && (L.otCookieData || (window.OneTrust && window.OneTrust.otCookieData ? L.otCookieData = window.OneTrust.otCookieData : L.otCookieData = []), -1 < (e = b.findIndex(L.otCookieData, function(e) {
                return e.name === t.name
            })) ? L.otCookieData[e] = t : L.otCookieData.push(t))
        }, Tt.prototype.getCookieDataObj = function(t) {
            L.otCookieData && 0 !== L.otCookieData.length || (window.OneTrust && window.OneTrust.otCookieData ? L.otCookieData = window.OneTrust.otCookieData : L.otCookieData = []);
            var e = b.findIndex(L.otCookieData, function(e) {
                return e.name === t
            });
            if (0 <= e) {
                var o = L.otCookieData[e];
                if (o.date) return new Date(o.date) < new Date ? (L.otCookieData.splice(e, 1), null) : o
            }
            return null
        }, Tt.prototype.param = function(e) {
            var t, o = "";
            for (t in e) e.hasOwnProperty(t) && ("" !== o && (o += "&"), o += t + "=" + encodeURIComponent(e[t]).replace(/%20/g, "+"));
            return o
        }, Tt);

    function Tt() {}
    var P, T, At = {
            P_Content: "#ot-pc-content",
            P_Logo: ".ot-pc-logo",
            P_Title: "#ot-pc-title",
            P_Policy_Txt: "#ot-pc-desc",
            P_Vendor_Title_Elm: "#ot-lst-title",
            P_Vendor_Title: "#ot-lst-title h3",
            P_Manage_Cookies_Txt: "#ot-category-title",
            P_Label_Txt: ".ot-label-txt",
            P_Category_Header: ".ot-cat-header",
            P_Category_Grp: ".ot-cat-grp",
            P_Category_Item: ".ot-cat-item",
            P_Vendor_List: "#ot-pc-lst",
            P_Vendor_Content: "#ot-lst-cnt",
            P_Vendor_Container: "#ot-ven-lst",
            P_Ven_Bx: "ot-ven-box",
            P_Ven_Name: ".ot-ven-name",
            P_Ven_Link: ".ot-ven-link",
            P_Ven_Leg_Claim: ".ot-ven-legclaim-link",
            P_Ven_Ctgl: "ot-ven-ctgl",
            P_Ven_Ltgl: "ot-ven-litgl",
            P_Ven_Ltgl_Only: "ot-ven-litgl-only",
            P_Ven_Opts: ".ot-ven-opts",
            P_Triangle: "#ot-anchor",
            P_Fltr_Modal: "#ot-fltr-modal",
            P_Fltr_Options: ".ot-fltr-opts",
            P_Fltr_Option: ".ot-fltr-opt",
            P_Select_Cntr: "#ot-sel-blk",
            P_Host_Cntr: "#ot-host-lst",
            P_Host_Hdr: ".ot-host-hdr",
            P_Host_Desc: ".ot-host-desc",
            P_Li_Hdr: ".ot-pli-hdr",
            P_Li_Title: ".ot-li-title",
            P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
            P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
            P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
            P_Host_Title: ".ot-host-name",
            P_Leg_Select_All: ".ot-sel-all-hdr",
            P_Leg_Header: ".ot-li-hdr",
            P_Acc_Header: ".ot-acc-hdr",
            P_Cnsnt_Header: ".ot-consent-hdr",
            P_Tgl_Cntr: ".ot-tgl-cntr",
            P_CBx_Cntr: ".ot-chkbox",
            P_Sel_All_Host_El: "ot-selall-hostcntr",
            P_Sel_All_Vendor_Consent_El: "ot-selall-vencntr",
            P_Sel_All_Vendor_Leg_El: "ot-selall-licntr",
            P_c_Name: "ot-c-name",
            P_c_Host: "ot-c-host",
            P_c_Duration: "ot-c-duration",
            P_c_Type: "ot-c-type",
            P_c_Category: "ot-c-category",
            P_c_Desc: "ot-c-description",
            P_Host_View_Cookies: ".ot-host-expand",
            P_Host_Opt: ".ot-host-opt",
            P_Host_Info: ".ot-host-info",
            P_Arrw_Cntr: ".ot-arw-cntr",
            P_Acc_Txt: ".ot-acc-txt",
            P_Vendor_CheckBx: "ot-ven-chkbox",
            P_Vendor_LegCheckBx: "ot-ven-leg-chkbox",
            P_Host_UI: "ot-hosts-ui",
            P_Host_Cnt: "ot-host-cnt",
            P_Host_Bx: "ot-host-box",
            P_Ven_Dets: ".ot-ven-dets",
            P_Ven_Disc: ".ot-ven-disc",
            P_Gven_List: "#ot-gn-venlst",
            P_Close_Btn: ".ot-close-icon",
            P_Ven_Lst_Cntr: ".ot-vlst-cntr",
            P_Host_Lst_cntr: ".ot-hlst-cntr",
            P_Sub_Grp_Cntr: ".ot-subgrp-cntr",
            P_Subgrp_Desc: ".ot-subgrp-desc",
            P_Subgp_ul: ".ot-subgrps",
            P_Subgrp_li: ".ot-subgrp",
            P_Subgrp_Tgl_Cntr: ".ot-subgrp-tgl",
            P_Grp_Container: ".ot-grps-cntr",
            P_Privacy_Txt: "#ot-pvcy-txt",
            P_Privacy_Hdr: "#ot-pvcy-hdr",
            P_Active_Menu: "ot-active-menu",
            P_Desc_Container: ".ot-desc-cntr",
            P_Tab_Grp_Hdr: "ot-grp-hdr1",
            P_Search_Cntr: "#ot-search-cntr",
            P_Clr_Fltr_Txt: "#clear-filters-handler",
            P_Acc_Grp_Desc: ".ot-acc-grpdesc",
            P_Acc_Container: ".ot-acc-grpcntr",
            P_Line_Through: "line-through",
            P_Vendor_Search_Input: "#vendor-search-handler"
        },
        It = {
            P_Grp_Container: ".groups-container",
            P_Content: "#ot-content",
            P_Category_Header: ".category-header",
            P_Desc_Container: ".description-container",
            P_Label_Txt: ".label-text",
            P_Acc_Grp_Desc: ".ot-accordion-group-pc-container",
            P_Leg_Int_Hdr: ".leg-int-header",
            P_Not_Always_Active: "p:not(.ot-always-active)",
            P_Category_Grp: ".category-group",
            P_Category_Item: ".category-item",
            P_Sub_Grp_Cntr: ".cookie-subgroups-container",
            P_Acc_Container: ".ot-accordion-pc-container",
            P_Close_Btn: ".pc-close-button",
            P_Logo: ".pc-logo",
            P_Title: "#pc-title",
            P_Privacy_Txt: "#privacy-text",
            P_Privacy_Hdr: "#pc-privacy-header",
            P_Policy_Txt: "#pc-policy-text",
            P_Manage_Cookies_Txt: "#manage-cookies-text",
            P_Vendor_Title: "#vendors-list-title",
            P_Vendor_Title_Elm: "#vendors-list-title",
            P_Vendor_List: "#vendors-list",
            P_Vendor_Content: "#vendor-list-content",
            P_Vendor_Container: "#vendors-list-container",
            P_Ven_Bx: "vendor-box",
            P_Ven_Name: ".vendor-title",
            P_Ven_Link: ".vendor-privacy-notice",
            P_Ven_Leg_Claim: ".vendor-legclaim-link",
            P_Ven_Ctgl: "ot-vendor-consent-tgl",
            P_Ven_Ltgl: "ot-leg-int-tgl",
            P_Ven_Ltgl_Only: "ot-leg-int-tgl-only",
            P_Ven_Opts: ".vendor-options",
            P_Triangle: "#ot-triangle",
            P_Fltr_Modal: "#ot-filter-modal",
            P_Fltr_Options: ".ot-group-options",
            P_Fltr_Option: ".ot-group-option",
            P_Select_Cntr: "#select-all-container",
            P_Host_Cntr: "#hosts-list-container",
            P_Host_Hdr: ".host-info",
            P_Host_Desc: ".host-description",
            P_Host_Opt: ".host-option-group",
            P_Host_Info: ".vendor-host",
            P_Ven_Dets: ".vendor-purpose-groups",
            P_Ven_Disc: ".ot-ven-disc",
            P_Gven_List: "#ot-gn-venlst",
            P_Arrw_Cntr: ".ot-arrow-container",
            P_Li_Hdr: ".leg-int-header",
            P_Li_Title: ".leg-int-title",
            P_Acc_Txt: ".accordion-text",
            P_Tgl_Cntr: ".ot-toggle-group",
            P_CBx_Cntr: ".ot-chkbox-container",
            P_Host_Title: ".host-title",
            P_Leg_Select_All: ".leg-int-sel-all-hdr",
            P_Leg_Header: ".leg-int-hdr",
            P_Cnsnt_Header: ".consent-hdr",
            P_Acc_Header: ".accordion-header",
            P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
            P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
            P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
            P_Sel_All_Host_El: "select-all-hosts-input-container",
            P_Sel_All_Vendor_Consent_El: "select-all-vendors-input-container",
            P_Sel_All_Vendor_Leg_El: "select-all-vendors-leg-input-container",
            P_c_Name: "cookie-name-container",
            P_c_Host: "cookie-host-container",
            P_c_Duration: "cookie-duration-container",
            P_c_Type: "cookie-type-container",
            P_c_Category: "cookie-category-container",
            P_c_Desc: "cookie-description-container",
            P_Host_View_Cookies: ".host-view-cookies",
            P_Vendor_CheckBx: "vendor-chkbox",
            P_Vendor_LegCheckBx: "vendor-leg-chkbox",
            P_Host_UI: "hosts-list",
            P_Host_Cnt: "host-list-content",
            P_Host_Bx: "host-box",
            P_Ven_Lst_Cntr: ".category-vendors-list-container",
            P_Host_Lst_cntr: ".category-host-list-container",
            P_Subgrp_Desc: ".cookie-subgroups-description-legal",
            P_Subgp_ul: ".cookie-subgroups",
            P_Subgrp_li: ".cookie-subgroup",
            P_Subgrp_Tgl_Cntr: ".cookie-subgroup-toggle",
            P_Active_Menu: "active-group",
            P_Tab_Grp_Hdr: "group-toggle",
            P_Search_Cntr: "#search-container",
            P_Clr_Fltr_Txt: "#clear-filters-handler p",
            P_Vendor_Search_Input: "#vendor-search-handler"
        },
        Lt = {
            GroupTypes: {
                Cookie: "COOKIE",
                Bundle: "BRANCH",
                Ft: "IAB2_FEATURE",
                Pur: "IAB2_PURPOSE",
                Spl_Ft: "IAB2_SPL_FEATURE",
                Spl_Pur: "IAB2_SPL_PURPOSE",
                Stack: "IAB2_STACK"
            },
            IdPatterns: {
                Pur: "IABV2_",
                Ft: "IFEV2_",
                Spl_Pur: "ISPV2_",
                Spl_Ft: "ISFV2_"
            }
        },
        _t = {
            GroupTypes: {
                Cookie: "COOKIE",
                Bundle: "BRANCH",
                Ft: "IAB2V2_FEATURE",
                Pur: "IAB2V2_PURPOSE",
                Spl_Ft: "IAB2V2_SPL_FEATURE",
                Spl_Pur: "IAB2V2_SPL_PURPOSE",
                Stack: "IAB2V2_STACK"
            },
            IdPatterns: {
                Pur: "IAB2V2_",
                Ft: "IFE2V2_",
                Spl_Pur: "ISP2V2_",
                Spl_Ft: "ISF2V2_"
            }
        };
    t.prototype.getPurposeOneGrpId = function() {
        return T.IdPatterns.Pur + "1"
    }, t.prototype.setRegionRule = function(e) {
        this.rule = e
    }, t.prototype.getRegionRule = function() {
        return this.rule
    }, t.prototype.getRegionRuleType = function() {
        return this.multiVariantTestingEnabled && this.selectedVariant ? this.selectedVariant.TemplateType : this.conditionalLogicEnabled && !this.allConditionsFailed ? this.Condition.TemplateType : this.rule.Type
    }, t.prototype.canUseGoogleVendors = function(e) {
        return !!e && (this.conditionalLogicEnabled && !this.allConditionsFailed ? this.Condition : this.rule).UseGoogleVendors
    }, t.prototype.initVariables = function() {
        this.consentableGrps = [], this.consentableIabGrps = [], this.iabGrps = [], this.iabGrpIdMap = {}, this.domainGrps = {}, this.iabGroups = {
            purposes: {},
            legIntPurposes: {},
            specialPurposes: {},
            features: {},
            specialFeatures: {}
        }
    }, t.prototype.init = function(e) {
        this.getGPCSignal(), this.initVariables();
        var t = e.DomainData;
        this.setPublicDomainData(JSON.parse(JSON.stringify(t))), this.domainDataMapper(t), this.commonDataMapper(e.CommonData), I.NtfyConfig = e.NtfyConfig || {}, this.setBannerName(), this.setPcName(), this.populateGPCSignal(), this.populateGPCBrowserSignal(), I.GoogleConsent.GCEnable && this.initGCM()
    }, t.prototype.getGPCSignal = function() {
        navigator.globalPrivacyControl ? this.gpcEnabled = !0 : this.gpcEnabled = !1
    }, t.prototype.isValidConsentNoticeGroup = function(e, t) {
        var o, n, r, i, s;
        return !!e.ShowInPopup && (o = this.isGroupHasCookies(e), i = r = n = !1, null != (s = e) && s.Parent || (e.SubGroups.length && (n = e.SubGroups.some(function(e) {
            return e.GroupName && e.ShowInPopup && e.FirstPartyCookies.length
        }), r = e.SubGroups.some(function(e) {
            return e.GroupName && e.ShowInPopup && (e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length)
        }), !t || e.FirstPartyCookies.length && e.Hosts.length || (i = !e.SubGroups.some(function(e) {
            return -1 === ft.indexOf(e.Type)
        }))), s = e.SubGroups.some(function(e) {
            return -1 < ft.indexOf(e.Type)
        }), (-1 < ft.indexOf(e.Type) || s) && (e.ShowVendorList = !0), (e.Hosts.length || r || n) && (e.ShowHostList = !0)), this.isValidGroup(o, e, n, r, i))
    }, t.prototype.isValidGroup = function(e, t, o, n, r) {
        return e || -1 < ft.indexOf(t.Type) || o || n || r
    }, t.prototype.isGroupHasCookies = function(e) {
        return e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || e.VendorServices && e.VendorServices.length
    }, t.prototype.extractGroupIdForIabGroup = function(e) {
        return -1 < e.indexOf(T.IdPatterns.Spl_Pur) ? e = e.replace(T.IdPatterns.Spl_Pur, "") : -1 < e.indexOf(T.IdPatterns.Pur) ? e = e.replace(T.IdPatterns.Pur, "") : -1 < e.indexOf(T.IdPatterns.Ft) ? e = e.replace(T.IdPatterns.Ft, "") : -1 < e.indexOf(T.IdPatterns.Spl_Ft) && (e = e.replace(T.IdPatterns.Spl_Ft, "")), e
    }, t.prototype.isIabGrpAndNonConsentable = function(e) {
        var t = T.GroupTypes;
        return !this.isIab2orv2Template && -1 < ft.indexOf(e.Type) || this.isIab2orv2Template && (e.Type === t.Pur || e.Type === t.Stack) && !e.HasConsentOptOut && !e.HasLegIntOptOut || e.Type === t.Spl_Ft && !e.HasConsentOptOut
    }, t.prototype.setTcfPurposeParentMapForGrp = function(e) {
        var t = T.GroupTypes;
        if (this.isTcfV2Template && e.Parent) switch (e.Type) {
            case t.Pur:
                this.tcfParentMap.pur.set(parseInt(e.IabGrpId), e.Parent);
                break;
            case t.Spl_Pur:
                this.tcfParentMap.spl_pur.set(parseInt(e.IabGrpId), e.Parent);
                break;
            case t.Ft:
                this.tcfParentMap.ft.set(parseInt(e.IabGrpId), e.Parent);
                break;
            case t.Spl_Ft:
                this.tcfParentMap.spl_ft.set(parseInt(e.IabGrpId), e.Parent)
        }
    }, t.prototype.populateGroups = function(e, r) {
        var i = this,
            s = {},
            a = [],
            l = T.GroupTypes,
            t = (e.forEach(function(e) {
                var t = e.CustomGroupId;
                if (e.needsHealthSignature = i.requireSignatureEnabled && r.RequireSignatureCID === e.CustomGroupId, void 0 !== e.HasConsentOptOut && e.IsIabPurpose || (e.HasConsentOptOut = !0), !i.isIabGrpAndNonConsentable(e)) {
                    if (t !== A.getPurposeOneGrpId() || e.ShowInPopup || (i.purposeOneTreatment = !0), i.grpContainLegalOptOut = e.HasLegIntOptOut || i.grpContainLegalOptOut, e.SubGroups = [], e.Parent ? a.push(e) : s[t] = e, i.isIab2orv2Template && -1 < ft.indexOf(e.Type)) {
                        var o = i.extractGroupIdForIabGroup(t),
                            n = (i.iabGrpIdMap[t] = o, e.IabGrpId = o, {
                                description: e.GroupDescription,
                                descriptionLegal: e.DescriptionLegal,
                                id: Number(o),
                                name: e.GroupName
                            });
                        switch (e.Type) {
                            case l.Pur:
                                i.iabGroups.purposes[o] = n;
                                break;
                            case l.Spl_Pur:
                                i.iabGroups.specialPurposes[o] = n;
                                break;
                            case l.Ft:
                                i.iabGroups.features[o] = n;
                                break;
                            case l.Spl_Ft:
                                i.iabGroups.specialFeatures[o] = n
                        }
                    }
                    i.setTcfPurposeParentMapForGrp(e)
                }
            }), a.forEach(function(e) {
                s[e.Parent] && e.ShowInPopup && (e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || -1 < ft.indexOf(e.Type)) && s[e.Parent].SubGroups.push(e)
            }), []);
        return Object.keys(s).forEach(function(e) {
            i.isValidConsentNoticeGroup(s[e], r.IsIabEnabled) && (s[e].SubGroups.sort(function(e, t) {
                return e.Order - t.Order
            }), t.push(s[e]))
        }), this.initGrpVar(t), t.sort(function(e, t) {
            return e.Order - t.Order
        })
    }, t.prototype.isGrpConsentable = function(e) {
        var t = T.GroupTypes;
        return e.Type === t.Cookie || e.Type === t.Pur || e.Type === t.Spl_Ft
    }, t.prototype.initGrpVar = function(e) {
        var o = this,
            n = !0,
            r = !0;
        e.forEach(function(e) {
            F([e], e.SubGroups).forEach(function(e) {
                var t;
                o.isGrpConsentable(e) && (o.domainGrps[e.PurposeId.toLowerCase()] = e.CustomGroupId), -1 < mt.indexOf(e.Type) && o.consentableGrps.push(e), -1 < vt.indexOf(e.Type) && o.consentableIabGrps.push(e), -1 === mt.indexOf(e.Type) && o.iabGrps.push(e), o.gpcEnabled && e.IsGpcEnabled && (e.Status = m.INACTIVE), (t = o.DNTEnabled && e.IsDntEnabled ? m.DNT : e.Status.toLowerCase()) !== m.ACTIVE && t !== m.INACTIVE_LANDING_PAGE && t !== m.DNT || (n = !1), t !== m.INACTIVE_LANDING_PAGE && t !== m.ALWAYS_ACTIVE && (r = !1), o.gpcForAGrpEnabled || (o.gpcForAGrpEnabled = e.IsGpcEnabled)
            })
        }), this.isOptInMode = n, this.isSoftOptInMode = r
    }, t.prototype.domainDataMapper = function(e) {
        this.requireSignatureEnabled = (null == (t = S.fp) ? void 0 : t.CookieV2SubmitPurpose) && e.IsRequireSignatureEnabled;
        var t = {
            AriaClosePreferences: e.AriaClosePreferences,
            AriaOpenPreferences: e.AriaOpenPreferences,
            AriaPrivacy: e.AriaPrivacy,
            CenterRounded: e.CenterRounded,
            Flat: e.Flat,
            FloatingFlat: e.FloatingFlat,
            FloatingRounded: e.FloatingRounded,
            FloatingRoundedCorner: e.FloatingRoundedCorner,
            FloatingRoundedIcon: e.FloatingRoundedIcon,
            VendorLevelOptOut: e.IsIabEnabled,
            AboutCookiesText: e.AboutCookiesText,
            AboutLink: e.AboutLink,
            AboutText: e.AboutText,
            ActiveText: e.ActiveText,
            AddLinksToCookiepedia: e.AddLinksToCookiepedia,
            AlertAllowCookiesText: e.AlertAllowCookiesText,
            AlertCloseText: e.AlertCloseText,
            AlertLayout: e.AlertLayout,
            AlertMoreInfoText: e.AlertMoreInfoText,
            AlertNoticeText: e.AlertNoticeText,
            AllowAllText: e.PreferenceCenterConfirmText,
            AlwaysActiveText: e.AlwaysActiveText,
            AlwaysInactiveText: e.AlwaysInactiveText,
            BannerAdditionalDescPlacement: e.BannerAdditionalDescPlacement,
            BannerAdditionalDescription: e.BannerAdditionalDescription,
            BannerCloseButtonText: e.BannerCloseButtonText,
            BannerFeatureDescription: e.BannerFeatureDescription,
            BannerFeatureTitle: e.BannerFeatureTitle,
            BannerIABPartnersLink: e.BannerIABPartnersLink,
            BannerInformationDescription: e.BannerInformationDescription,
            BannerInformationTitle: e.BannerInformationTitle,
            BannerNonIABVendorListText: e.BannerNonIABVendorListText,
            BannerPosition: e.BannerPosition,
            BannerPurposeDescription: e.BannerPurposeDescription,
            BannerPurposeTitle: e.BannerPurposeTitle,
            BannerRejectAllButtonText: e.BannerRejectAllButtonText,
            BannerRelativeFontSizesToggle: e.BannerRelativeFontSizesToggle,
            BannerSettingsButtonDisplayLink: e.BannerSettingsButtonDisplayLink,
            BannerShowRejectAllButton: e.BannerShowRejectAllButton,
            BShowOptOutSignal: e.BShowOptOutSignal,
            BOptOutSignalText: e.BOptOutSignalText,
            BRegionAriaLabel: e.BRegionAriaLabel,
            BannerTitle: e.BannerTitle,
            BCloseButtonType: e.BCloseButtonType,
            BContinueText: e.BContinueText,
            BCookiePolicyLinkScreenReader: e.BCookiePolicyLinkScreenReader,
            BnrLogoAria: e.BnrLogoAria,
            BImprintLinkScreenReader: e.BImprintLinkScreenReader,
            BInitialFocus: e.BInitialFocus,
            BInitialFocusLinkAndButton: e.BInitialFocusLinkAndButton,
            BRejectConsentType: e.BRejectConsentType,
            BSaveBtnTxt: e.BSaveBtnText,
            BShowImprintLink: e.BShowImprintLink,
            BShowPolicyLink: e.BShowPolicyLink,
            BShowSaveBtn: e.BShowSaveBtn,
            cctId: e.cctId,
            ChoicesBanner: e.ChoicesBanner,
            CloseShouldAcceptAllCookies: e.CloseShouldAcceptAllCookies,
            CloseText: e.CloseText,
            ConfirmText: e.ConfirmText,
            ConsentModel: {
                Name: e.ConsentModel
            },
            CookieListDescription: e.CookieListDescription,
            CookieListTitle: e.CookieListTitle,
            CookieSettingButtonText: e.CookieSettingButtonText,
            CookiesUsedText: e.CookiesUsedText,
            CustomJs: e.CustomJs,
            firstPartyTxt: e.CookieFirstPartyText,
            FooterDescriptionText: e.FooterDescriptionText,
            ForceConsent: e.ForceConsent,
            GeneralVendors: e.GeneralVendors,
            GeneralVendorsEnabled: e.PCenterUseGeneralVendorsToggle,
            GenVenOptOut: e.PCenterAllowVendorOptout,
            GlobalRestrictionEnabled: e.GlobalRestrictionEnabled,
            GlobalRestrictions: e.GlobalRestrictions,
            GoogleConsent: {
                GCAdStorage: e.GCAdStorage,
                GCAnalyticsStorage: e.GCAnalyticsStorage,
                GCEnable: e.GCEnable,
                GCFunctionalityStorage: e.GCFunctionalityStorage,
                GCPersonalizationStorage: e.GCPersonalizationStorage,
                GCRedactEnable: e.GCRedactEnable,
                GCSecurityStorage: e.GCSecurityStorage,
                GCWaitTime: e.GCWaitTime,
                GCAdUserData: e.GCAdUserData,
                GCAdPersonalization: e.GCAdPersonalization
            },
            GroupGenVenListLabel: e.PCenterGeneralVendorThirdPartyCookiesText,
            Groups: this.populateGroups(e.Groups, e),
            HideToolbarCookieList: e.HideToolbarCookieList,
            IabType: e.IabType,
            InactiveText: e.InactiveText,
            IsConsentLoggingEnabled: e.IsConsentLoggingEnabled,
            IsIabEnabled: e.IsIabEnabled,
            IsIabThirdPartyCookieEnabled: e.IsIabThirdPartyCookieEnabled,
            IsLifespanEnabled: e.IsLifespanEnabled,
            Language: e.Language,
            LastReconsentDate: e.LastReconsentDate,
            LfSpanSecs: e.PCLifeSpanSecs,
            LfSpnWk: e.PCLifeSpanWk,
            LfSpnWks: e.PCLifeSpanWks,
            LfSpnYr: e.PCLifeSpanYr,
            LfSpnYrs: e.PCLifeSpanYrs,
            LifespanDurationText: e.LifespanDurationText,
            MainInfoText: e.MainInfoText,
            MainText: e.MainText,
            ManagePreferenceText: e.PreferenceCenterManagePreferencesText,
            NewVendorsInactiveEnabled: e.NewVendorsInactiveEnabled,
            NewWinTxt: e.PreferenceCenterMoreInfoScreenReader,
            NextPageAcceptAllCookies: e.NextPageAcceptAllCookies,
            NextPageCloseBanner: e.NextPageCloseBanner,
            NoBanner: e.NoBanner,
            OnClickAcceptAllCookies: e.OnClickAcceptAllCookies,
            OnClickCloseBanner: e.OnClickCloseBanner,
            OverriddenVendors: null != (t = e.OverriddenVendors) ? t : {},
            OverridenGoogleVendors: null != (t = e.OverridenGoogleVendors) ? t : {},
            Publisher: e.publisher,
            PublisherCC: e.PublisherCC,
            ReconsentFrequencyDays: e.ReconsentFrequencyDays,
            ScrollAcceptAllCookies: e.ScrollAcceptAllCookies,
            ScrollCloseBanner: e.ScrollCloseBanner,
            ShowAlertNotice: e.ShowAlertNotice,
            showBannerCloseButton: e.showBannerCloseButton,
            ShowPreferenceCenterCloseButton: e.ShowPreferenceCenterCloseButton,
            ThirdPartyCookieListText: e.ThirdPartyCookieListText,
            thirdPartyTxt: e.CookieThirdPartyText,
            UseGoogleVendors: this.canUseGoogleVendors(e.PCTemplateUpgrade),
            VendorConsentModel: e.VendorConsentModel,
            VendorListText: e.VendorListText,
            Vendors: e.Vendors,
            PCCategoryStyle: e.PCCategoryStyle || me.Checkbox,
            PCShowAlwaysActiveToggle: e.PCShowAlwaysActiveToggle,
            PCenterImprintLinkScreenReader: e.PCenterImprintLinkScreenReader,
            PCenterImprintLinkText: e.PCenterImprintLinkText,
            PCenterImprintLinkUrl: e.PCenterImprintLinkUrl,
            PCShowOptOutSignal: e.PCShowOptOutSignal,
            PCOptOutSignalText: e.PCOptOutSignalText,
            PCRegionAriaLabel: e.PCRegionAriaLabel,
            PCHostNotFound: e.PCHostNotFound,
            PCVendorNotFound: e.PCVendorNotFound,
            PCTechNotFound: e.PCTechNotFound,
            UseNonStandardStacks: e.UseNonStandardStacks,
            RequireSignatureCID: e.RequireSignatureCID,
            IsRequireSignatureEnabled: e.IsRequireSignatureEnabled,
            PCRequireSignatureHelpText: e.PCRequireSignatureHelpText,
            PCRequireSignatureFieldLabel: e.PCRequireSignatureFieldLabel,
            PCRequireSignatureHeaderText: e.PCRequireSignatureHeaderText,
            PCRequireSignatureHeaderDesc: e.PCRequireSignatureHeaderDesc,
            PCRequireSignatureRejectBtnText: e.PCRequireSignatureRejectBtnText,
            PCRequireSignatureConfirmBtnText: e.PCRequireSignatureConfirmBtnText
        };
        this.setPCDomainData(t, e), this.setAdditionalTechnologies(t, e), this.setVendorServiceConfigData(t, e), this.setDomainCommonDataDefaults(t, e), this.setDomainPCDataDefaults(t, e), this.setGppData(t, e), e.PCTemplateUpgrade && (e.Center || e.Panel) && (t.PCAccordionStyle = e.PCAccordionStyle), t.PCenterEnableAccordion = e.PCAccordionStyle !== ae.NoAccordion, this.legIntSettings = e.LegIntSettings || {}, void 0 === this.legIntSettings.PAllowLI && (this.legIntSettings.PAllowLI = !0), S.moduleInitializer.MobileSDK || (this.pagePushedDown = e.BannerPushesDownPage), I = R(R({}, I), t)
    }, t.prototype.setGppData = function(e, t) {
        e.GPPPurposes = R({}, t.GPPPurposes), e.IsGPPDataProcessingApplicable = t.IsGPPDataProcessingApplicable, e.IsGPPEnabled = t.IsGPPEnabled, e.IsGPPKnownChildApplicable = t.IsGPPKnownChildApplicable, e.IsMSPAEnabled = t.IsMSPAEnabled, e.MSPAOptionMode = t.MSPAOptionMode, e.UseGPPUSNational = t.UseGPPUSNational
    }, t.prototype.setPCDomainData = function(e, t) {
        e.PCAccordionStyle = ae.Caret, e.PCActiveText = t.PCActiveText, e.PCCloseButtonType = t.PCCloseButtonType, e.PCContinueText = t.PCContinueText, e.PCCookiePolicyLinkScreenReader = t.PCCookiePolicyLinkScreenReader, e.PCCookiePolicyText = t.PCCookiePolicyText, e.PCenterAllowAllConsentText = t.PCenterAllowAllConsentText, e.PCenterApplyFiltersText = t.PCenterApplyFiltersText, e.PCenterBackText = t.PCenterBackText, e.PCenterCancelFiltersText = t.PCenterCancelFiltersText, e.PCenterClearFiltersText = t.PCenterClearFiltersText, e.PCenterCookiesListText = t.PCenterCookiesListText, e.PCenterEnableAccordion = t.PCenterEnableAccordion, e.PCenterFilterText = t.PCenterFilterText, e.PCenterGeneralVendorsText = t.PCenterGeneralVendorsText, e.PCenterRejectAllButtonText = t.PCenterRejectAllButtonText, e.PCenterSelectAllVendorsText = t.PCenterSelectAllVendorsText, e.PCenterShowRejectAllButton = t.PCenterShowRejectAllButton, e.PCenterUserIdDescriptionText = t.PCenterUserIdDescriptionText, e.PCenterUserIdNotYetConsentedText = t.PCenterUserIdNotYetConsentedText, e.PCenterUserIdTimestampTitleText = t.PCenterUserIdTimestampTitleText, e.PCenterUserIdTitleText = t.PCenterUserIdTitleText, e.PCenterVendorListDescText = t.PCenterVendorListDescText, e.PCenterVendorListDisclosure = t.PCenterVendorListDisclosure, e.PCenterVendorListLifespan = t.PCenterVendorListLifespan, e.PCenterVendorListLifespanDay = t.PCenterVendorListLifespanDay, e.PCenterVendorListLifespanDays = t.PCenterVendorListLifespanDays, e.PCenterVendorListLifespanMonth = t.PCenterVendorListLifespanMonth, e.PCenterVendorListLifespanMonths = t.PCenterVendorListLifespanMonths, e.PCenterVendorListNonCookieUsage = t.PCenterVendorListNonCookieUsage, e.PCenterVendorListStorageDomain = t.PCenterVendorListStorageDomain, e.PCVLSDomainsUsed = t.PCVLSDomainsUsed, e.PCVLSUse = t.PCVLSUse, e.PCenterVendorListStorageIdentifier = t.PCenterVendorListStorageIdentifier, e.PCenterVendorListStoragePurposes = t.PCenterVendorListStoragePurposes, e.PCenterVendorListStorageType = t.PCenterVendorListStorageType, e.PCenterVendorsListText = t.PCenterVendorsListText, e.PCenterViewPrivacyPolicyText = t.PCenterViewPrivacyPolicyText, e.PCGoogleVendorsText = t.PCGoogleVendorsText, e.PCGrpDescLinkPosition = t.PCGrpDescLinkPosition, e.PCGrpDescType = t.PCGrpDescType, e.PCGVenPolicyTxt = t.PCGeneralVendorsPolicyText, e.PCIABVendorsText = t.PCIABVendorsText, e.PCIABVendorLegIntClaimText = t.PCIABVendorLegIntClaimText, e.PCVListDataDeclarationText = t.PCVListDataDeclarationText, e.PCVListDataRetentionText = t.PCVListDataRetentionText, e.PCVListStdRetentionText = t.PCVListStdRetentionText, e.IABDataCategories = t.IABDataCategories, e.PCInactiveText = t.PCInactiveText, e.PCIllusText = t.PCIllusText, e.PCLogoAria = t.PCLogoScreenReader, e.PCOpensCookiesDetailsAlert = t.PCOpensCookiesDetailsAlert, e.PCenterVendorListScreenReader = t.PCenterVendorListScreenReader, e.PCOpensVendorDetailsAlert = t.PCOpensVendorDetailsAlert, e.PCenterDynamicRenderingEnable = t.PCenterDynamicRenderingEnable, e.PCTemplateUpgrade = t.PCTemplateUpgrade, e.PCVendorFullLegalText = t.PCVendorFullLegalText, e.PCViewCookiesText = t.PCViewCookiesText, e.PCLayout = {
            Center: t.Center,
            List: t.List,
            Panel: t.Panel,
            Popup: t.Popup,
            Tab: t.Tab
        }, e.PCenterVendorListLinkText = t.PCenterVendorListLinkText, e.PCenterVendorListLinkAriaLabel = t.PCenterVendorListLinkAriaLabel, e.PreferenceCenterPosition = t.PreferenceCenterPosition, e.PCVendorsCountText = t.PCVendorsCountText
    }, t.prototype.setVendorServiceConfigData = function(e, t) {
        e.VendorServiceConfig = {
            PCVSOptOut: t.PCVSOptOut,
            PCVSEnable: t.PCVSEnable,
            PCVSExpandCategory: t.PCVSExpandCategory,
            PCVSExpandGroup: t.PCVSExpandGroup,
            PCVSCategoryView: t.PCVSCategoryView,
            PCVSNameText: t.PCVSNameText,
            PCVSAllowAllText: t.PCVSAllowAllText,
            PCVSListTitle: t.PCVSListTitle,
            PCVSParentCompanyText: t.PCVSParentCompanyText,
            PCVSAddressText: t.PCVSAddressText,
            PCVSDefaultCategoryText: t.PCVSDefaultCategoryText,
            PCVSDefaultDescriptionText: t.PCVSDefaultDescriptionText,
            PCVSDPOEmailText: t.PCVSDPOEmailText,
            PCVSDPOLinkText: t.PCVSDPOLinkText,
            PCVSPrivacyPolicyLinkText: t.PCVSPrivacyPolicyLinkText,
            PCVSCookiePolicyLinkText: t.PCVSCookiePolicyLinkText,
            PCVSOptOutLinkText: t.PCVSOptOutLinkText,
            PCVSLegalBasisText: t.PCVSLegalBasisText
        }
    }, t.prototype.setAdditionalTechnologies = function(e, t) {
        e.AdditionalTechnologiesConfig = {
            PCShowTrackingTech: t.PCShowTrackingTech,
            PCCookiesLabel: t.PCCookiesLabel,
            PCTechDetailsText: t.PCTechDetailsText,
            PCTrackingTechTitle: t.PCTrackingTechTitle,
            PCLocalStorageLabel: t.PCLocalStorageLabel,
            PCSessionStorageLabel: t.PCSessionStorageLabel,
            PCTechDetailsAriaLabel: t.PCTechDetailsAriaLabel,
            PCLocalStorageDurationText: t.PCLocalStorageDurationText,
            PCSessionStorageDurationText: t.PCSessionStorageDurationText
        }
    }, t.prototype.setDomainCommonDataDefaults = function(e, t) {
        e.AdvancedAnalyticsCategory = t.AdvancedAnalyticsCategory || "", e.BannerDPDDescription = t.BannerDPDDescription || [], e.BannerDPDDescriptionFormat = t.BannerDPDDescriptionFormat || "", e.BannerDPDTitle = t.BannerDPDTitle || "", e.CategoriesText = t.CategoriesText || "Categories", e.CookiesText = t.CookiesText || "Cookies", e.CookiesDescText = t.CookiesDescText || "Description", e.LifespanText = t.LifespanText || "Lifespan", e.LifespanTypeText = t.LifespanTypeText || "Session", e.PCenterConsentText = t.PCenterConsentText || "Consent"
    }, t.prototype.setDomainPCDataDefaults = function(e, t) {
        e.PCenterCookieListFilterAria = t.PCenterCookieListFilterAria || "Filter", e.PCenterCookieListSearch = t.PCenterCookieListSearch || "Search", e.PCenterCookieSearchAriaLabel = t.PCenterCookieSearchAriaLabel || "Cookie list search", e.PCenterFilterAppliedAria = t.PCenterFilterAppliedAria || "Applied", e.PCenterFilterClearedAria = t.PCenterFilterClearedAria || "Filters Cleared", e.PCenterLegIntColumnHeader = t.PCenterLegIntColumnHeader || "Legitimate Interest", e.PCenterLegitInterestText = t.PCenterLegitInterestText || "Legitimate Interest", e.PCenterVendorListFilterAria = t.PCenterVendorListFilterAria || "Filter", e.PCenterVendorListSearch = t.PCenterVendorListSearch || "Search", e.PCenterVendorSearchAriaLabel = t.PCenterVendorSearchAriaLabel || "Vendor list search", e.PCFirstPartyCookieListText = t.PCFirstPartyCookieListText || "First Party Cookies", e.PCShowConsentLabels = !(!t.Tab || !t.PCTemplateUpgrade) && t.PCShowConsentLabels, e.PCShowPersistentCookiesHoverButton = t.PCShowPersistentCookiesHoverButton || !1
    }, t.prototype.commonDataMapper = function(e) {
        var t = {
            iabThirdPartyConsentUrl: e.IabThirdPartyCookieUrl,
            optanonHideAcceptButton: e.OptanonHideAcceptButton,
            optanonHideCookieSettingButton: e.OptanonHideCookieSettingButton,
            optanonStyle: e.OptanonStyle,
            optanonStaticContentLocation: e.OptanonStaticContentLocation,
            bannerCustomCSS: e.BannerCustomCSS.replace(/\\n/g, ""),
            pcCustomCSS: e.PCCustomCSS.replace(/\\n/g, ""),
            textColor: e.TextColor,
            buttonColor: e.ButtonColor,
            buttonTextColor: e.ButtonTextColor,
            bannerMPButtonColor: e.BannerMPButtonColor,
            bannerMPButtonTextColor: e.BannerMPButtonTextColor,
            backgroundColor: e.BackgroundColor,
            bannerAccordionBackgroundColor: e.BannerAccordionBackgroundColor,
            BContinueColor: e.BContinueColor,
            PCContinueColor: e.PCContinueColor,
            pcTextColor: e.PcTextColor,
            pcButtonColor: e.PcButtonColor,
            pcButtonTextColor: e.PcButtonTextColor,
            pcAccordionBackgroundColor: e.PcAccordionBackgroundColor,
            pcLinksTextColor: e.PcLinksTextColor,
            bannerLinksTextColor: e.BannerLinksTextColor,
            pcEnableToggles: e.PcEnableToggles,
            pcBackgroundColor: e.PcBackgroundColor,
            pcMenuColor: e.PcMenuColor,
            pcMenuHighLightColor: e.PcMenuHighLightColor,
            legacyBannerLayout: e.LegacyBannerLayout,
            optanonLogo: e.OptanonLogo,
            oneTrustFtrLogo: e.OneTrustFooterLogo,
            optanonCookieDomain: e.OptanonCookieDomain,
            cookiePersistentLogo: e.CookiePersistentLogo,
            optanonGroupIdPerformanceCookies: e.OptanonGroupIdPerformanceCookies,
            optanonGroupIdFunctionalityCookies: e.OptanonGroupIdFunctionalityCookies,
            optanonGroupIdTargetingCookies: e.OptanonGroupIdTargetingCookies,
            optanonGroupIdSocialCookies: e.OptanonGroupIdSocialCookies,
            optanonShowSubGroupCookies: e.ShowSubGroupCookies,
            useRTL: e.UseRTL,
            showBannerCookieSettings: e.ShowBannerCookieSettings,
            showBannerAcceptButton: e.ShowBannerAcceptButton,
            showCookieList: e.ShowCookieList,
            allowHostOptOut: e.AllowHostOptOut,
            CookiesV2NewCookiePolicy: e.CookiesV2NewCookiePolicy,
            cookieListTitleColor: e.CookieListTitleColor,
            cookieListGroupNameColor: e.CookieListGroupNameColor,
            cookieListTableHeaderColor: e.CookieListTableHeaderColor,
            CookieListTableHeaderBackgroundColor: e.CookieListTableHeaderBackgroundColor,
            cookieListPrimaryColor: e.CookieListPrimaryColor,
            cookieListCustomCss: e.CookieListCustomCss,
            pcShowCookieHost: e.PCShowCookieHost,
            pcShowCookieDuration: e.PCShowCookieDuration,
            pcShowCookieType: e.PCShowCookieType,
            pcShowCookieCategory: e.PCShowCookieCategory,
            pcShowCookieDescription: e.PCShowCookieDescription,
            ConsentIntegration: e.ConsentIntegration,
            ConsentPurposesText: e.BConsentPurposesText || "Consent Purposes",
            FeaturesText: e.BFeaturesText || "Features",
            LegitimateInterestPurposesText: e.BLegitimateInterestPurposesText || "Legitimate Interest Purposes",
            ConsentText: e.BConsentText || "Consent",
            LegitInterestText: e.BLegitInterestText || "Legit. Interest",
            pcDialogClose: e.PCDialogClose || "dialog closed",
            pCFooterLogoUrl: e.PCFooterLogoUrl,
            SpecialFeaturesText: e.BSpecialFeaturesText || "Special Features",
            SpecialPurposesText: e.BSpecialPurposesText || "Special Purposes",
            pcCListName: e.PCCListName || "Name",
            pcCListHost: e.PCCListHost || "Host",
            pcCListDuration: e.PCCListDuration || "Duration",
            pcCListType: e.PCCListType || "Type",
            pcCListCategory: e.PCCListCategory || "Category",
            pcCListDescription: e.PCCListDescription || "Description",
            IabLegalTextUrl: e.IabLegalTextUrl,
            pcLegIntButtonColor: e.PcLegIntButtonColor,
            pcLegIntButtonTextColor: e.PcLegIntButtonTextColor,
            PCenterExpandToViewText: e.PCenterExpandToViewText,
            BCategoryContainerColor: e.BCategoryContainerColor,
            BCategoryStyleColor: e.BCategoryStyleColor,
            BLineBreakColor: e.BLineBreakColor,
            BSaveBtnColor: e.BSaveBtnColor,
            BCategoryStyle: e.BCategoryStyle,
            BAnimation: e.BAnimation,
            BFocusBorderColor: e.BFocusBorderColor,
            PCFocusBorderColor: e.PCFocusBorderColor,
            BnrLogo: e.BnrLogo,
            OTCloseBtnLogo: e.OTCloseBtnLogo,
            OTExternalLinkLogo: e.OTExternalLinkLogo
        };
        this.cookieListMapper(t, e), I = R(R({}, I), t), this.pubDomainData.CookiesV2NewCookiePolicy = e.CookiesV2NewCookiePolicy
    }, t.prototype.cookieListMapper = function(e, t) {
        e.TTLGroupByTech = t.TTLGroupByTech, e.TTLShowTechDesc = t.TTLShowTechDesc
    }, t.prototype.setPublicDomainData = function(n) {
        this.pubDomainData = {
            AboutCookiesText: n.AboutCookiesText,
            AboutLink: n.AboutLink,
            AboutText: n.AboutText,
            ActiveText: n.ActiveText,
            AddLinksToCookiepedia: n.AddLinksToCookiepedia,
            AlertAllowCookiesText: n.AlertAllowCookiesText,
            AlertCloseText: n.AlertCloseText,
            AlertLayout: n.AlertLayout,
            AlertMoreInfoText: n.AlertMoreInfoText,
            AlertNoticeText: n.AlertNoticeText,
            AllowAllText: n.PreferenceCenterConfirmText,
            AlwaysActiveText: n.AlwaysActiveText,
            AlwaysInactiveText: n.AlwaysInactiveText,
            BAnimation: n.BAnimation,
            BannerCloseButtonText: n.BannerCloseButtonText,
            BannerDPDDescription: n.BannerDPDDescription || [],
            BannerDPDDescriptionFormat: n.BannerDPDDescriptionFormat || "",
            BannerDPDTitle: n.BannerDPDTitle || "",
            BannerFeatureDescription: n.BannerFeatureDescription,
            BannerFeatureTitle: n.BannerFeatureTitle,
            BannerIABPartnersLink: n.BannerIABPartnersLink,
            BannerInformationDescription: n.BannerInformationDescription,
            BannerInformationTitle: n.BannerInformationTitle,
            BannerPosition: n.BannerPosition,
            BannerPurposeDescription: n.BannerPurposeDescription,
            BannerPurposeTitle: n.BannerPurposeTitle,
            BannerRejectAllButtonText: n.BannerRejectAllButtonText,
            BannerRelativeFontSizesToggle: n.BannerRelativeFontSizesToggle,
            BannerSettingsButtonDisplayLink: n.BannerSettingsButtonDisplayLink,
            BannerShowRejectAllButton: n.BannerShowRejectAllButton,
            BannerTitle: n.BannerTitle,
            BCategoryContainerColor: n.BCategoryContainerColor,
            BCategoryStyle: n.BCategoryStyle,
            BCategoryStyleColor: n.BCategoryStyleColor,
            BCloseButtonType: n.BCloseButtonType,
            BContinueText: n.BContinueText,
            BInitialFocus: n.BInitialFocus,
            BInitialFocusLinkAndButton: n.BInitialFocusLinkAndButton,
            BLineBreakColor: n.BLineBreakColor,
            BRejectConsentType: n.BRejectConsentType,
            BSaveBtnColor: n.BSaveBtnColor,
            BSaveBtnTxt: n.BSaveBtnText,
            BShowSaveBtn: n.BShowSaveBtn,
            CategoriesText: n.CategoriesText,
            cctId: n.cctId,
            ChoicesBanner: n.ChoicesBanner,
            CloseShouldAcceptAllCookies: n.CloseShouldAcceptAllCookies,
            CloseText: n.CloseText,
            ConfirmText: n.ConfirmText,
            ConsentIntegrationData: null,
            ConsentModel: {
                Name: n.ConsentModel
            },
            CookieListDescription: n.CookieListDescription,
            CookieListTitle: n.CookieListTitle,
            CookieSettingButtonText: n.CookieSettingButtonText,
            CookiesText: n.CookiesText,
            CookiesDescText: n.CookiesDescText,
            CookiesUsedText: n.CookiesUsedText,
            CustomJs: n.CustomJs,
            Domain: S.moduleInitializer.Domain,
            FooterDescriptionText: n.FooterDescriptionText,
            ForceConsent: n.ForceConsent,
            GeneralVendors: n.GeneralVendors,
            GoogleConsent: {
                GCAdStorage: n.GCAdStorage,
                GCAnalyticsStorage: n.GCAnalyticsStorage,
                GCEnable: n.GCEnable,
                GCFunctionalityStorage: n.GCFunctionalityStorage,
                GCPersonalizationStorage: n.GCPersonalizationStorage,
                GCRedactEnable: n.GCRedactEnable,
                GCSecurityStorage: n.GCSecurityStorage,
                GCWaitTime: n.GCWaitTime,
                GCAdUserData: n.GCAdUserData,
                GCAdPersonalization: n.GCAdPersonalization
            },
            Groups: null,
            HideToolbarCookieList: n.HideToolbarCookieList,
            IabType: n.IabType,
            InactiveText: n.InactiveText,
            IsBannerLoaded: !1,
            IsConsentLoggingEnabled: n.IsConsentLoggingEnabled,
            IsIABEnabled: n.IsIabEnabled,
            IsIabThirdPartyCookieEnabled: n.IsIabThirdPartyCookieEnabled,
            IsLifespanEnabled: n.IsLifespanEnabled,
            Language: n.Language,
            LastReconsentDate: n.LastReconsentDate,
            LifespanDurationText: n.LifespanDurationText,
            LifespanText: n.LifespanText,
            LifespanTypeText: n.LifespanTypeText,
            MainInfoText: n.MainInfoText,
            MainText: n.MainText,
            ManagePreferenceText: n.PreferenceCenterManagePreferencesText,
            NextPageAcceptAllCookies: n.NextPageAcceptAllCookies,
            NextPageCloseBanner: n.NextPageCloseBanner,
            NoBanner: n.NoBanner,
            OnClickAcceptAllCookies: n.OnClickAcceptAllCookies,
            OnClickCloseBanner: n.OnClickCloseBanner,
            OverridenGoogleVendors: n.OverridenGoogleVendors,
            PCAccordionStyle: ae.Caret,
            PCCloseButtonType: n.PCCloseButtonType,
            PCContinueText: n.PCContinueText,
            PCenterAllowAllConsentText: n.PCenterAllowAllConsentText,
            PCenterApplyFiltersText: n.PCenterApplyFiltersText,
            PCenterBackText: n.PCenterBackText,
            PCenterCancelFiltersText: n.PCenterCancelFiltersText,
            PCenterClearFiltersText: n.PCenterClearFiltersText,
            PCenterCookieSearchAriaLabel: n.PCenterCookieSearchAriaLabel || "Cookie list search",
            PCenterCookiesListText: n.PCenterCookiesListText,
            PCenterEnableAccordion: n.PCenterEnableAccordion,
            PCenterExpandToViewText: n.PCenterExpandToViewText,
            PCenterFilterAppliedAria: n.PCenterFilterAppliedAria || "Applied",
            PCenterFilterClearedAria: n.PCenterFilterClearedAria || "Filters Cleared",
            PCenterFilterText: n.PCenterFilterText,
            PCenterRejectAllButtonText: n.PCenterRejectAllButtonText,
            PCenterSelectAllVendorsText: n.PCenterSelectAllVendorsText,
            PCenterShowRejectAllButton: n.PCenterShowRejectAllButton,
            PCenterUserIdDescriptionText: n.PCenterUserIdDescriptionText,
            PCenterUserIdNotYetConsentedText: n.PCenterUserIdNotYetConsentedText,
            PCenterUserIdTimestampTitleText: n.PCenterUserIdTimestampTitleText,
            PCenterUserIdTitleText: n.PCenterUserIdTitleText,
            PCenterVendorListDescText: n.PCenterVendorListDescText,
            PCenterVendorSearchAriaLabel: n.PCenterVendorSearchAriaLabel || "Vendor list search",
            PCenterVendorsListText: n.PCenterVendorsListText,
            PCenterViewPrivacyPolicyText: n.PCenterViewPrivacyPolicyText,
            PCFirstPartyCookieListText: n.PCFirstPartyCookieListText,
            PCGoogleVendorsText: n.PCGoogleVendorsText,
            PCGrpDescLinkPosition: n.PCGrpDescLinkPosition,
            PCGrpDescType: n.PCGrpDescType,
            PCIABVendorsText: n.PCIABVendorsText,
            PCIABVendorLegIntClaimText: n.PCIABVendorLegIntClaimText,
            PCVListDataDeclarationText: n.PCVListDataDeclarationText,
            PCVListDataRetentionText: n.PCVListDataRetentionText,
            PCVListStdRetentionText: n.PCVListStdRetentionText,
            IABDataCategories: n.IABDataCategories,
            PCLogoAria: n.PCLogoScreenReader,
            PCOpensCookiesDetailsAlert: n.PCOpensCookiesDetailsAlert,
            PCenterVendorListScreenReader: n.PCenterVendorListScreenReader,
            PCOpensVendorDetailsAlert: n.PCOpensVendorDetailsAlert,
            PCShowPersistentCookiesHoverButton: n.PCShowPersistentCookiesHoverButton,
            PCenterDynamicRenderingEnable: n.PCenterDynamicRenderingEnable,
            PCTemplateUpgrade: n.PCTemplateUpgrade,
            PCVendorFullLegalText: n.PCVendorFullLegalText,
            PCViewCookiesText: n.PCViewCookiesText,
            PCLayout: {
                Center: n.Center,
                List: n.List,
                Panel: n.Panel,
                Popup: n.Popup,
                Tab: n.Tab
            },
            PCenterVendorListLinkText: n.PCenterVendorListLinkText,
            PCenterVendorListLinkAriaLabel: n.PCenterVendorListLinkAriaLabel,
            PCenterImprintLinkScreenReader: n.PCenterImprintLinkScreenReader,
            PCenterImprintLinkText: n.PCenterImprintLinkText,
            PCenterImprintLinkUrl: n.PCenterImprintLinkUrl,
            PreferenceCenterPosition: n.PreferenceCenterPosition,
            ScrollAcceptAllCookies: n.ScrollAcceptAllCookies,
            ScrollCloseBanner: n.ScrollCloseBanner,
            ShowAlertNotice: n.ShowAlertNotice,
            showBannerCloseButton: n.showBannerCloseButton,
            ShowPreferenceCenterCloseButton: n.ShowPreferenceCenterCloseButton,
            ThirdPartyCookieListText: n.ThirdPartyCookieListText,
            UseGoogleVendors: this.canUseGoogleVendors(n.PCTemplateUpgrade),
            VendorConsentModel: n.VendorConsentModel,
            VendorLevelOptOut: n.IsIabEnabled,
            VendorListText: n.VendorListText,
            CookiesV2NewCookiePolicy: !1
        }, n.PCTemplateUpgrade && (n.Center || n.Panel) && n.PCAccordionStyle !== ae.NoAccordion && (this.pubDomainData.PCAccordionStyle = n.PCAccordionStyle), this.pubDomainData.PCenterEnableAccordion = n.PCAccordionStyle !== ae.NoAccordion;
        var r = [];
        n.Groups.forEach(function(e) {
            var t, o;
            !n.IsIabEnabled && e.IsIabPurpose || (e.Cookies = JSON.parse(JSON.stringify(e.FirstPartyCookies)), o = null == (o = e.Hosts) ? void 0 : o.reduce(function(e, t) {
                return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
            }, []), (t = e.Cookies).push.apply(t, o), r.push(e))
        }), this.pubDomainData.Groups = r
    }, t.prototype.setBannerScriptElement = function(e) {
        this.bannerScriptElement = e, this.setDomainElementAttributes()
    }, t.prototype.setGCMcallback = function() {
        window.otEventListeners && window.otEventListeners.length && window.otEventListeners.forEach(function(e) {
            e && "consent.changed" === e.event && (A.gcmUpdateCallback = e.listener)
        })
    }, t.prototype.setDomainElementAttributes = function() {
        this.bannerScriptElement && (this.bannerScriptElement.hasAttribute("data-document-language") && this.setUseDocumentLanguage("true" === this.bannerScriptElement.getAttribute("data-document-language")), this.bannerScriptElement.hasAttribute("data-ignore-ga") && (this.ignoreGoogleAnlyticsCall = "true" === this.bannerScriptElement.getAttribute("data-ignore-ga")), this.bannerScriptElement.hasAttribute("data-ignore-html")) && (this.ignoreInjectingHtmlCss = "true" === this.bannerScriptElement.getAttribute("data-ignore-html"))
    }, t.prototype.setUseDocumentLanguage = function(e) {
        this.useDocumentLanguage = e
    }, t.prototype.setPcName = function() {
        var e = I.PCLayout;
        e.Center ? this.pcName = tt : e.Panel ? this.pcName = nt : e.Popup ? this.pcName = rt : e.List ? this.pcName = ot : e.Tab && (this.pcName = it)
    }, t.prototype.setBannerName = function() {
        I.Flat ? this.bannerName = Je : I.FloatingRoundedCorner ? this.bannerName = Ye : I.FloatingFlat ? this.bannerName = Xe : I.FloatingRounded ? this.bannerName = $e : I.FloatingRoundedIcon ? this.bannerName = Qe : I.CenterRounded ? this.bannerName = We : I.ChoicesBanner ? this.bannerName = Ze : I.NoBanner && (this.bannerName = et)
    }, t.prototype.populateGPCSignal = function() {
        var e = k.readCookieParam(v.OPTANON_CONSENT, xe.GPC_ENABLED),
            t = this.gpcForAGrpEnabled && this.gpcEnabled ? "1" : "0";
        this.gpcValueChanged = e ? e != t : this.gpcForAGrpEnabled, k.writeCookieParam(v.OPTANON_CONSENT, xe.GPC_ENABLED, t)
    }, t.prototype.populateGPCBrowserSignal = function() {
        var e = k.readCookieParam(v.OPTANON_CONSENT, xe.GPC_Browser_Flag),
            t = this.gpcEnabled ? "1" : "0";
        this.gpcBrowserValueChanged = e !== t, k.writeCookieParam(v.OPTANON_CONSENT, xe.GPC_Browser_Flag, t)
    }, t.prototype.initGCM = function() {
        var o = [],
            e = (Object.keys(this.rule.States).forEach(function(t) {
                A.rule.States[t].forEach(function(e) {
                    o.push((t + "-" + e).toUpperCase())
                })
            }), A.rule.Countries.map(function(e) {
                return e.toUpperCase()
            }));
        A.gcmCountries = e.concat(o)
    };
    var e = t;

    function t() {
        var t = this;
        this.DNTEnabled = "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack, this.gpcEnabled = !1, this.gpcForAGrpEnabled = !1, this.pagePushedDown = !1, this.iabGroups = {
            purposes: {},
            legIntPurposes: {},
            specialPurposes: {},
            features: {},
            specialFeatures: {}
        }, this.iabType = null, this.grpContainLegalOptOut = !1, this.purposeOneTreatment = !1, this.ignoreInjectingHtmlCss = !1, this.ignoreGoogleAnlyticsCall = !1, this.mobileOnlineURL = [], this.iabGrpIdMap = {}, this.iabGrps = [], this.consentableGrps = [], this.consentableIabGrps = [], this.domainGrps = {}, this.thirdPartyiFrameLoaded = !1, this.thirdPartyiFrameResolve = null, this.thirdPartyiFramePromise = new Promise(function(e) {
            t.thirdPartyiFrameResolve = e
        }), this.isOptInMode = !1, this.isSoftOptInMode = !1, this.gpcValueChanged = !1, this.gpcBrowserValueChanged = !1, this.conditionalLogicEnabled = !1, this.allConditionsFailed = !1, this.canUseConditionalLogic = !1, this.gtmUpdatedinStub = !1, this.gcmDevIdSet = !1, this.tcf2ActiveVendors = {
            all: 0,
            pur: new Map,
            ft: new Map,
            spl_pur: new Map,
            spl_ft: new Map,
            stack: new Map
        }, this.tcfParentMap = {
            pur: new Map,
            ft: new Map,
            spl_pur: new Map,
            spl_ft: new Map
        }
    }
    var A, I = {};

    function Et() {
        this.otSDKVersion = "202403.1.0", this.isAMP = !1, this.ampData = {}, this.otCookieData = window.OneTrust && window.OneTrust.otCookieData || [], this.syncRequired = !1, this.isIabSynced = !1, this.isGacSynced = !1, this.grpsSynced = [], this.syncedValidGrp = !1, this.groupsConsent = [], this.initialGroupsConsent = [], this.hostsConsent = [], this.initialHostConsent = [], this.genVendorsConsent = {}, this.vsConsent = new Map, this.initialGenVendorsConsent = {}, this.vendors = {
            list: [],
            searchParam: "",
            vendorTemplate: null,
            selectedVendors: [],
            selectedPurpose: [],
            selectedLegInt: [],
            selectedLegIntVendors: [],
            selectedSpecialFeatures: []
        }, this.initialVendors = {
            list: [],
            searchParam: "",
            vendorTemplate: null,
            selectedVendors: [],
            selectedPurpose: [],
            selectedLegInt: [],
            selectedLegIntVendors: [],
            selectedSpecialFeatures: []
        }, this.oneTrustIABConsent = {
            purpose: [],
            legimateInterest: [],
            features: [],
            specialFeatures: [],
            specialPurposes: [],
            vendors: [],
            legIntVendors: [],
            vendorList: null,
            IABCookieValue: ""
        }, this.initialOneTrustIABConsent = {
            purpose: [],
            legimateInterest: [],
            features: [],
            specialFeatures: [],
            specialPurposes: [],
            vendors: [],
            legIntVendors: [],
            vendorList: null,
            IABCookieValue: ""
        }, this.addtlVendors = {
            vendorConsent: [],
            vendorSelected: {}
        }, this.initialAddtlVendors = {
            vendorConsent: [],
            vendorSelected: {}
        }, this.addtlConsentVersion = "1~", this.initialAddtlVendorsList = {}, this.isAddtlConsent = !1, this.currentGlobalFilteredList = [], this.filterByIABCategories = [], this.filterByCategories = [], this.hosts = {
            hostTemplate: null,
            hostCookieTemplate: null
        }, this.generalVendors = {
            gvTemplate: null,
            gvCookieTemplate: null
        }, this.oneTrustAlwaysActiveHosts = [], this.alwaysActiveGenVendors = [], this.softOptInGenVendors = [], this.optInGenVendors = [], this.optanonHostList = [], this.srcExecGrps = [], this.htmlExecGrps = [], this.srcExecGrpsTemp = [], this.htmlExecGrpsTemp = [], this.isPCVisible = !1, this.dataGroupState = [], this.userLocation = {
            country: "",
            state: ""
        }, this.vendorsSetting = {}, this.dsParams = {}, this.isV2Stub = !1, this.fireOnetrustGrp = !1, this.showVendorService = !1, this.showGeneralVendors = !1, this.genVenOptOutEnabled = !1, this.gpcConsentTxn = !1, this.vsIsActiveAndOptOut = !1, this.bAsset = {}, this.pcAsset = {}, this.csBtnAsset = {}, this.cStyles = {}, this.vendorDomInit = !1, this.genVendorDomInit = !1, this.syncNtfyContent = {}, this.ntfyRequired = !1, this.skipAddingHTML = !1, this.bnrAnimationInProg = !1, this.isPreview = !1, this.geoFromUrl = "", this.hideBanner = !1, this.setAttributePolyfillIsActive = !1, this.storageBaseURL = "", this.isKeyboardUser = !1, this.customerStyles = new Map, this.showTrackingTech = !1, this.currentTrackingTech = {}
    }
    Et.prototype.getVendorsInDomain = function() {
        var e, t;
        return L._vendorsInDomain || (e = new Map, t = null != (t = I.Groups) ? t : [], L.setVendorServicesMap(t, e), L._vendorsInDomain = e), L._vendorsInDomain
    }, Et.prototype.setVendorServicesMap = function(e, t) {
        for (var o, n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            i.SubGroups && 0 < i.SubGroups.length && L.setVendorServicesMap(i.SubGroups, t);
            for (var s = 0, a = null != (o = i.VendorServices) ? o : []; s < a.length; s++) {
                var l = a[s],
                    c = Object.assign({}, i);
                delete c.VendorServices, l.groupRef = c, t.set(l.CustomVendorServiceId, l)
            }
        }
    }, Et.prototype.clearVendorsInDomain = function() {
        L._vendorsInDomain = null
    }, Et.prototype.checkVendorConsent = function(e) {
        return L.vendorsSetting[e] && L.vendorsSetting[e].consent
    };
    var L = new Et,
        Vt = (i.insertAfter = function(e, t) {
            t.parentNode.insertBefore(e, t.nextSibling)
        }, i.insertBefore = function(e, t) {
            t.parentNode.insertBefore(e, t)
        }, i.inArray = function(e, t) {
            return t.indexOf(e)
        }, i.ajax = function(e) {
            var t = null,
                o = new XMLHttpRequest,
                n = e.type,
                r = e.url,
                i = (e.dataType, e.contentType),
                s = e.data,
                a = e.success,
                l = e.token,
                t = e.error,
                e = e.sync;
            o.open(n, r, !e), o.setRequestHeader("Content-Type", i), l && o.setRequestHeader("Authorization", l), o.withCredentials = !1, o.onload = function() {
                var e;
                200 <= this.status && this.status < 400 ? (e = JSON.parse(this.responseText), a(e)) : t({
                    message: "Error Loading Data",
                    statusCode: this.status
                })
            }, o.onerror = function(e) {
                t(e)
            }, "post" === n.toLowerCase() || "put" === n.toLowerCase() ? o.send(s) : o.send()
        }, i.prevNextHelper = function(o, e, n) {
            var r = [];

            function i(e, t, o) {
                t[e] && o ? o.includes(".") ? (t[e].classList[0] || t[e].classList.value && t[e].classList.value.includes(o.split(".")[1])) && r.push(t[e]) : o.includes("#") ? t[e].id === o.split("#")[1] && r.push(t[e]) : t[e].tagName === document.createElement(o.trim()).tagName && r.push(t[e]) : t[e] && r.push(t[e])
            }
            return "string" == typeof e ? Array.prototype.forEach.call(document.querySelectorAll(e), function(e, t) {
                i(o, e, n)
            }) : i(o, e, n), r
        }, i.browser = function() {
            var e, t, o;
            return navigator.sayswho = (t = navigator.userAgent, o = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(o[1]) ? "IE " + ((e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || "") : "Chrome" === o[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e.slice(1).join(" ").replace("OPR", "Opera") : (o = o[2] ? [o[1], o[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && o.splice(1, 1, e[1]), o.join(" "))), {
                version: parseInt(navigator.sayswho.split(" ")[1]),
                type: navigator.sayswho.split(" ")[0],
                userAgent: navigator.userAgent
            }
        }, i.isNodeList = function(e) {
            e = Object.prototype.toString.call(e);
            return "[object NodeList]" === e || "[object Array]" === e
        }, i.prototype.fadeOut = function(e) {
            var t = this;
            if (void 0 === e && (e = 60), 1 <= this.el.length)
                for (var o = 0; o < this.el.length; o++) d(this.el[o], "\n                    visibility: hidden;\n                    opacity: 0;\n                    transition: visibility 0s " + e + "ms, opacity " + e + "ms linear;\n                ", !0);
            var n = setInterval(function() {
                if (1 <= t.el.length)
                    for (var e = 0; e < t.el.length; e++) t.el[e].style.opacity <= 0 && (d(t.el[e], "display: none;", !0), clearInterval(n), "optanon-popup-bg" === t.el[e].id) && t.el[e].removeAttribute("style")
            }, e);
            return this
        }, i.prototype.hide = function() {
            if (1 <= this.el.length)
                for (var e = 0; e < this.el.length; e++) d(this.el[e], "display: none;", !0), this.el[e].setAttribute(gt, !0);
            else i.isNodeList(this.el) || (d(this.el, "display: none;", !0), this.el.setAttribute(gt, !0));
            return this
        }, i.prototype.show = function(e) {
            if (void 0 === e && (e = "block"), 1 <= this.el.length)
                for (var t = 0; t < this.el.length; t++) d(this.el[t], "display: " + e + ";", !0), this.el[t].removeAttribute(gt);
            else i.isNodeList(this.el) || (d(this.el, "display: " + e + ";", !0), this.el.removeAttribute(gt));
            return this
        }, i.prototype.remove = function() {
            if (1 <= this.el.length)
                for (var e = 0; e < this.el.length; e++) this.el[e].parentNode.removeChild(this.el[e]);
            else this.el.parentNode.removeChild(this.el);
            return this
        }, i.prototype.css = function(e) {
            if (e)
                if (1 <= this.el.length) {
                    if (!e.includes(":")) return this.el[0].style[e];
                    for (var t = 0; t < this.el.length; t++) d(this.el[t], e)
                } else {
                    if (!e.includes(":")) return this.el.style[e];
                    d(this.el, e)
                }
            return this
        }, i.prototype.removeClass = function(e) {
            if (1 <= this.el.length)
                for (var t = 0; t < this.el.length; t++) this.el[t].classList ? this.el[t].classList.remove(e) : this.el[t].className = this.el[t].className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
            else this.el.classList ? this.el.classList.remove(e) : this.el.className = this.el.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
            return this
        }, i.prototype.addClass = function(e) {
            if (1 <= this.el.length)
                for (var t = 0; t < this.el.length; t++) this.el[t].classList ? this.el[t].classList.add(e) : this.el[t].className += " " + e;
            else this.el.classList ? this.el.classList.add(e) : this.el.className += " " + e;
            return this
        }, i.prototype.on = function(r, i, s) {
            var e = this;
            if ("string" != typeof i)
                if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r) switch (r) {
                        case "load":
                            window.onload = i;
                            break;
                        case "resize":
                            window.onresize = i;
                            break;
                        case "scroll":
                            window.onscroll = i
                    } else if (this.el && 1 <= this.el.length)
                        for (var t = 0; t < this.el.length; t++) this.el[t].addEventListener(r, i);
                    else this.el && this.el instanceof Element && this.el.addEventListener(r, i);
            else if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r) switch (r) {
                case "load":
                    window.onload = s;
                    break;
                case "resize":
                    window.onresize = s;
                    break;
                case "scroll":
                    window.onscroll = s
            } else {
                var a = function(o) {
                    var n = o.target;
                    e.el.eventExecuted = !0, Array.prototype.forEach.call(document.querySelectorAll(i), function(e, t) {
                        Bt["" + r + i] && delete Bt["" + r + i], e.addEventListener(r, s), e === n && s && s.call(e, o)
                    }), e.el && e.el[0] ? e.el[0].removeEventListener(r, a) : e.el && e.el instanceof Element && e.el.removeEventListener(r, a)
                };
                if (this.el && 1 <= this.el.length)
                    for (t = 0; t < this.el.length; t++) this.el[t].eventExecuted = !1, this.el[t].eventExecuted || this.el[t].addEventListener(r, a);
                else this.el && (this.el.eventExecuted = !1, !this.el.eventExecuted) && this.el instanceof Element && (Bt["" + r + i] || (Bt["" + r + i] = !0, this.el.addEventListener(r, a)))
            }
            return this
        }, i.prototype.off = function(e, t) {
            if (1 <= this.el.length)
                for (var o = 0; o < this.el.length; o++) this.el[o].removeEventListener(e, t);
            else this.el.removeEventListener(e, t);
            return this
        }, i.prototype.one = function(t, o) {
            var n = this;
            if (1 <= this.el.length)
                for (var e = 0; e < this.el.length; e++) this.el[e].addEventListener(t, function(e) {
                    e.stopPropagation(), e.currentTarget.dataset.triggered || (o(), e.currentTarget.dataset.triggered = !0)
                });
            else {
                var r = function(e) {
                    e.stopPropagation(), o(), n.off(t, r)
                };
                this.el.addEventListener(t, r)
            }
            return this
        }, i.prototype.trigger = function(e) {
            e = new CustomEvent(e, {
                customEvent: "yes"
            });
            return this.el.dispatchEvent(e), this
        }, i.prototype.focus = function() {
            return (1 <= this.el.length ? this.el[0] : this.el).focus(), this
        }, i.prototype.attr = function(e, t) {
            return this.el && 1 <= this.el.length ? t ? ("class" === e ? this.addClass(t) : this.el[0].setAttribute(e, t), this) : this.el[0].getAttribute(e) : t && this.el ? ("class" === e ? this.addClass(t) : this.el.setAttribute(e, t), this) : this.el && this.el.getAttribute(e)
        }, i.prototype.html = function(e) {
            if (null == e) return (1 <= this.el.length ? this.el[0] : this.el).innerHTML;
            if (1 <= this.el.length)
                for (var t = 0; t < this.el.length; t++) this.el[t].innerHTML = e;
            else this.el.innerHTML = e;
            return this
        }, i.prototype.append = function(e) {
            if ("string" != typeof e || e.includes("<") || e.includes(">"))
                if (Array.isArray(e)) {
                    var o = this;
                    Array.prototype.forEach.call(e, function(e, t) {
                        document.querySelector(o.selector).appendChild(new i(e, "ce").el)
                    })
                } else {
                    if ("string" == typeof e || Array.isArray(e)) return this.appendHtmlElement(e);
                    if ("string" == typeof this.selector) document.querySelector(this.selector).appendChild(e);
                    else if (1 <= e.length)
                        for (var t = 0; t < e.length; t++) this.selector.appendChild(e[t]);
                    else this.selector.appendChild(e)
                }
            else this.el.insertAdjacentText("beforeend", e);
            return this
        }, i.prototype.text = function(o) {
            if (this.el) {
                if (1 <= this.el.length) {
                    if (!o) return this.el[0].textContent;
                    Array.prototype.forEach.call(this.el, function(e, t) {
                        e.textContent = o
                    })
                } else {
                    if (!o) return this.el.textContent;
                    this.el.textContent = o
                }
                return this
            }
        }, i.prototype.data = function(o, n) {
            if (!(this.el.length < 1)) {
                if (!(1 <= this.el.length)) return r(this.el, n);
                Array.prototype.forEach.call(this.el, function(e, t) {
                    r(e, n)
                })
            }
            return this;

            function r(e, t) {
                if (!t) return JSON.parse(e.getAttribute("data-" + o));
                "object" == typeof t ? e.setAttribute("data-" + o, JSON.stringify(t)) : e.setAttribute("data-" + o, t)
            }
        }, i.prototype.height = function(e) {
            this.el.length && (this.el = this.el[0]);
            for (var t = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-top").split("px")[0]), o = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-bottom").split("px")[0]), n = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-top").split("px")[0]), r = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-bottom").split("px")[0]), i = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("height").split("px")[0]), s = [t, o, n, r], a = 0, l = 0; l < s.length; l++) 0 < s[l] && (a += s[l]);
            return e ? (t = e.toString().split(parseInt(e))[1] ? e.toString().split(parseInt(e))[1] : "px", o = "number" == typeof e ? e : parseInt(e.toString().split(t)[0]), (t && "px" === t || "%" === t || "em" === t || "rem" === t) && (0 < o ? d(this.el, "height: " + (a + o + t) + ";", !0) : "auto" === e && d(this.el, "height: " + e + ";", !0)), this) : this.selector === document ? i : this.el.clientHeight - a
        }, i.prototype.each = function(e) {
            var t = !1;
            return void 0 === this.el.length && (this.el = [this.el], t = !0), Array.prototype.forEach.call(this.el, e), t && (this.el = this.el[0]), this
        }, i.prototype.is = function(e) {
            return this.el.length ? (this.el[0].matches || this.el[0].matchesSelector || this.el[0].msMatchesSelector || this.el[0].mozMatchesSelector || this.el[0].webkitMatchesSelector || this.el[0].oMatchesSelector).call(this.el[0], e) : (this.el.matches || this.el.matchesSelector || this.el.msMatchesSelector || this.el.mozMatchesSelector || this.el.webkitMatchesSelector || this.el.oMatchesSelector).call(this.el, e)
        }, i.prototype.filter = function(e) {
            return this.el = Array.prototype.filter.call(document.querySelectorAll(this.selector), e), this
        }, i.prototype.animate = function(e, t) {
            var o, n, r, i, s = this;
            this.el = document.querySelector(this.selector);
            for (o in e) n = o, i = r = void 0, r = parseInt(e[n]), i = e[n].split(parseInt(e[n]))[1] ? e[n].split(parseInt(e[n]))[1] : "px", r = s.createKeyFrameAnimation(n, s.el, r, i), (i = document.head.querySelector("#onetrust-style")) ? i.innerHTML += r : ((i = document.createElement("style")).id = "onetrust-legacy-style", i.type = "text/css", i.innerHTML = r, document.head.appendChild(i)), s.addWebKitAnimation(n, t);
            return this
        }, i.prototype.scrollTop = function() {
            return this.el.scrollTop
        }, i.prototype.appendHtmlElement = function(o) {
            var n, r, e;
            return "string" == typeof this.selector ? document.querySelector(this.selector).appendChild(new i(o, "ce").el) : this.useEl ? (n = document.createDocumentFragment(), (r = !(!o.includes("<th") && !o.includes("<td"))) && (e = o.split(" ")[0].split("<")[1], n.appendChild(document.createElement(e)), n.firstChild.innerHTML = o), Array.prototype.forEach.call(this.el, function(e, t) {
                r ? e.appendChild(n.firstChild) : e.appendChild(new i(o, "ce").el)
            })) : this.selector.appendChild(new i(o, "ce").el), this
        }, i.prototype.createKeyFrameAnimation = function(e, t, o, n) {
            return "\n        @keyframes slide-" + ("top" === e ? "up" : "down") + "-custom {\n            0% {\n                " + ("top" === e ? "top" : "bottom") + ": " + ("top" === e ? t.getBoundingClientRect().top : window.innerHeight) + "px !important;\n            }\n            100% {\n                " + ("top" === e ? "top" : "bottom") + ": " + (o + n) + ";\n            }\n        }\n        @-webkit-keyframes slide-" + ("top" === e ? "up" : "down") + "-custom {\n            0% {\n                " + ("top" === e ? "top" : "bottom") + ": " + ("top" === e ? t.getBoundingClientRect().top : window.innerHeight) + "px !important;\n            }\n            100% {\n                " + ("top" === e ? "top" : "bottom") + ": " + (o + n) + ";\n            }\n        }\n        @-moz-keyframes slide-" + ("top" === e ? "up" : "down") + "-custom {\n            0% {\n                " + ("top" === e ? "top" : "bottom") + ": " + ("top" === e ? t.getBoundingClientRect().top : window.innerHeight) + "px !important;\n            }\n            100% {\n                " + ("top" === e ? "top" : "bottom") + ": " + (o + n) + ";\n            }\n        }\n        "
        }, i.prototype.addWebKitAnimation = function(e, t) {
            (i.browser().type = i.browser().version <= 8) ? d(this.el, "top" === e ? "-webkit-animation: slide-up-custom " : "-webkit-animation: slide-down-custom " + t + "ms ease-out forwards;"): d(this.el, "\n                animation-name: " + ("top" === e ? "slide-up-custom" : "slide-down-custom") + ";\n                animation-duration: " + t + "ms;\n                animation-fill-mode: forwards;\n                animation-timing-function: ease-out;\n            ", !0)
        }, i);

    function i(e, t) {
        switch (void 0 === t && (t = ""), this.selector = e, this.useEl = !1, t) {
            case "ce":
                var o = i.browser().type.toLowerCase(),
                    n = i.browser().version;
                n < 10 && "safari" === o || "chrome" === o && n <= 44 || n <= 40 && "firefox" === o ? ((n = document.implementation.createHTMLDocument()).body.innerHTML = e, this.el = n.body.children[0]) : (o = document.createRange().createContextualFragment(e), this.el = o.firstChild), this.length = 1;
                break;
            case "":
                this.el = e === document || e === window ? document.documentElement : "string" != typeof e ? e : document.querySelectorAll(e), this.length = e === document || e === window || "string" != typeof e ? 1 : this.el.length;
                break;
            default:
                this.length = 0
        }
    }

    function _(e, t) {
        return new Vt(e, t = void 0 === t ? "" : t)
    }
    var Ot, Bt = {},
        wt = (Gt.prototype.getDataLanguageCulture = function() {
            var e = A.bannerScriptElement;
            return e && e.getAttribute(je) ? this.checkAndTansformLangCodeWithUnderdscore(e.getAttribute(je).toLowerCase()) : this.detectDocumentOrBrowserLanguage().toLowerCase()
        }, Gt.prototype.checkAndTansformLangCodeWithUnderdscore = function(e) {
            return e.replace(/\_/, "-")
        }, Gt.prototype.detectDocumentOrBrowserLanguage = function() {
            var e = "";
            if (A.langSwitcherPldr) {
                var t = b.convertKeyValueLowerCase(A.langSwitcherPldr),
                    o = this.getUserLanguage().toLowerCase();
                if (!(e = t[o] || t[o + "-" + o] || (t.default === o ? t.default : null)))
                    if (2 === o.length)
                        for (var n = 0; n < Object.keys(t).length; n += 1) {
                            var r = Object.keys(t)[n];
                            if (r.substr(0, 2) === o) {
                                e = t[r];
                                break
                            }
                        } else 2 < o.length && (e = t[o.substr(0, 2)]);
                e = e || t.default
            }
            return e
        }, Gt.prototype.getUserLanguage = function() {
            return A.useDocumentLanguage ? this.checkAndTansformLangCodeWithUnderdscore(document.documentElement.lang) : navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language || navigator.userLanguage
        }, Gt.prototype.isValidLanguage = function(e, t) {
            var o = b.convertKeyValueLowerCase(A.langSwitcherPldr);
            return !(!o || !o[t] && !o[t + "-" + t] && o.default !== t)
        }, Gt.prototype.getLangJsonUrl = function(e) {
            void 0 === e && (e = null);
            var t, o = A.getRegionRule();
            if (e) {
                if (e = e.toLowerCase(), !this.isValidLanguage(o, e)) return null
            } else e = this.getDataLanguageCulture();
            return L.lang = e, L.consentLanguage = e.substr(0, 2), t = A.canUseConditionalLogic ? A.bannerDataParentURL + "/" + o.Id + "/" + A.Condition.Id + "/" + e : A.bannerDataParentURL + "/" + o.Id + "/" + e, t = A.multiVariantTestingEnabled ? A.bannerDataParentURL + "/" + o.Id + "/variants/" + A.selectedVariant.Id + "/" + e : t
        }, Gt.prototype.populateLangSwitcherPlhdr = function() {
            var e, t, o, n = A.getRegionRule();
            n && (e = n.Variants, A.multiVariantTestingEnabled && e ? (o = void 0, (t = k.getCookie(v.SELECTED_VARIANT)) && (o = e[b.findIndex(e, function(e) {
                return e.Id === t
            })]), t && o || (o = e[Math.floor(Math.random() * e.length)]), A.langSwitcherPldr = o.LanguageSwitcherPlaceholder, A.selectedVariant = o) : A.canUseConditionalLogic ? A.langSwitcherPldr = A.Condition.LanguageSwitcherPlaceholder : A.langSwitcherPldr = n.LanguageSwitcherPlaceholder)
        }, Gt);

    function Gt() {}
    Dt.prototype.getLangJson = function(e) {
        var t;
        return void 0 === e && (e = null), A.previewMode ? (t = JSON.parse(window.sessionStorage.getItem("otPreviewData")), Promise.resolve(t.langJson)) : (t = Ot.getLangJsonUrl(e)) ? xt.otFetch(t + ".json") : Promise.resolve(null)
    }, Dt.prototype.getPersistentCookieSvg = function(e) {
        e = e || I.cookiePersistentLogo;
        return e ? xt.otFetch(e, !0) : Promise.resolve(null)
    }, Dt.prototype.fetchGvlObj = function() {
        var e = S.moduleInitializer.IabV2Data.globalVendorListUrl;
        return "IAB2V2" === A.getRegionRuleType() && (e = S.moduleInitializer.Iab2V2Data.globalVendorListUrl), this.otFetch(e)
    }, Dt.prototype.fetchGoogleVendors = function() {
        var e = y.updateCorrectIABUrl(S.moduleInitializer.GoogleData.googleVendorListUrl);
        return y.checkMobileOfflineRequest(y.getBannerVersionUrl()) ? y.otFetchOfflineFile(b.getRelativeURL(e, !0)) : (A.mobileOnlineURL.push(e), this.otFetch(e))
    }, Dt.prototype.getStorageDisclosure = function(t) {
        return u(this, void 0, void 0, function() {
            return p(this, function(e) {
                return [2, this.otFetch(t, !1, !0)]
            })
        })
    }, Dt.prototype.loadCMP = function() {
        var o = this;
        return new Promise(function(e) {
            var t = o.checkIfRequiresPollyfill() ? "otTCF-ie" : "otTCF";
            y.jsonp(y.getBannerVersionUrl() + "/" + t + ".js", e, e)
        })
    }, Dt.prototype.loadGPP = function() {
        return new Promise(function(e) {
            y.jsonp(y.getBannerVersionUrl() + "/otGPP.js", e, e)
        })
    }, Dt.prototype.getCSBtnContent = function() {
        return u(this, void 0, void 0, function() {
            var t, o, n, r;
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = I.useRTL ? ye.RTL : ye.LTR, L.csBtnAsset[t]) ? [3, 2] : (o = y.getBannerSDKAssestsUrl() + "/" + (I.useRTL ? Ke : ze), n = L.csBtnAsset, r = t, [4, this.otFetch(o)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, L.csBtnAsset[t]]
                }
            })
        })
    }, Dt.prototype.getPcContent = function(i) {
        return void 0 === i && (i = !1), u(this, void 0, void 0, function() {
            var t, o, n, r;
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = I.useRTL ? ye.RTL : ye.LTR, L.pcAsset[t] && !i) ? [3, 2] : (o = y.getBannerSDKAssestsUrl(), I.PCTemplateUpgrade && (o += "/v2"), o = o + "/" + A.pcName + (I.useRTL ? "Rtl" : "") + ".json", n = L.pcAsset, r = t, [4, this.otFetch(o)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, L.pcAsset[t]]
                }
            })
        })
    }, Dt.prototype.getBannerContent = function(s, a) {
        return void 0 === s && (s = !1), void 0 === a && (a = null), u(this, void 0, void 0, function() {
            var t, o, n, r, i;
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        if (t = I.useRTL ? ye.RTL : ye.LTR, o = a || Ot.getDataLanguageCulture(), L.bAsset[t] && !s) return [3, 2];
                        if (i = A.getRegionRule(), n = void 0, S.fp.CookieV2SSR) {
                            if (A.previewMode) return r = JSON.parse(window.sessionStorage.getItem("otPreviewData")), [2, Promise.resolve(r.bLayout)];
                            n = A.bannerDataParentURL + "/" + i.Id, A.canUseConditionalLogic && (n += "/" + A.Condition.Id), n += "/bLayout-" + o + ".json"
                        } else n = y.getBannerSDKAssestsUrl() + ("/" + A.bannerName + (I.useRTL ? "Rtl" : "")) + ".json";
                        return r = L.bAsset, i = t, [4, this.otFetch(n)];
                    case 1:
                        r[i] = e.sent(), e.label = 2;
                    case 2:
                        return [2, L.bAsset[t]]
                }
            })
        })
    }, Dt.prototype.getCommonStyles = function(i) {
        return void 0 === i && (i = !1), u(this, void 0, void 0, function() {
            var t, o, n, r;
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = I.useRTL ? ye.RTL : ye.LTR, L.cStyles[t] && !i) ? [3, 2] : (o = y.getBannerSDKAssestsUrl() + "/otCommonStyles" + (I.useRTL ? "Rtl" : "") + ".css", n = L.cStyles, r = t, [4, this.otFetch(o, !0)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, L.cStyles[t]]
                }
            })
        })
    }, Dt.prototype.getSyncNtfyContent = function() {
        return u(this, void 0, void 0, function() {
            var t, o, n, r;
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = I.useRTL ? ye.RTL : ye.LTR, L.syncNtfyContent[t]) ? [3, 2] : (o = y.getBannerSDKAssestsUrl() + "/otSyncNotification" + (I.useRTL ? "Rtl" : "") + ".json", n = L.syncNtfyContent, r = t, [4, this.otFetch(o)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, L.syncNtfyContent[t]]
                }
            })
        })
    }, Dt.prototype.getConsentProfile = function(e, t) {
        var o = this,
            n = {
                Identifier: e,
                TenantId: L.tenantId,
                Authorization: t
            };
        return new Promise(function(e) {
            o.getJSON(L.consentApi, n, e, e)
        })
    }, Dt.prototype.checkIfRequiresPollyfill = function() {
        var e = window.navigator.userAgent;
        return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/") || "undefined" == typeof Set
    }, Dt.prototype.otFetch = function(r, i, s) {
        return void 0 === i && (i = !1), void 0 === s && (s = !1), u(this, void 0, void 0, function() {
            var t, o, n = this;
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        return y.checkMobileOfflineRequest(r) ? [4, y.otFetchOfflineFile(r)] : [3, 2];
                    case 1:
                        return [2, e.sent()];
                    case 2:
                        return e.trys.push([2, 9, , 10]), A.mobileOnlineURL.push(r), "undefined" != typeof fetch ? [3, 3] : [2, new Promise(function(e) {
                            n.getJSON(r, null, e, e, i)
                        })];
                    case 3:
                        return [4, fetch(r)];
                    case 4:
                        return (t = e.sent(), s && t.headers.get("Access-Control-Allow-Credentials")) ? [2, Promise.resolve()] : i ? [4, t.text()] : [3, 6];
                    case 5:
                        return [2, e.sent()];
                    case 6:
                        return [4, t.json()];
                    case 7:
                        return [2, e.sent()];
                    case 8:
                        return [3, 10];
                    case 9:
                        return o = e.sent(), console.log("Error in fetch URL : " + r + " Exception :" + o), [3, 10];
                    case 10:
                        return [2]
                }
            })
        })
    }, Dt.prototype.getJSON = function(e, t, o, n, r) {
        void 0 === t && (t = null), void 0 === r && (r = !1);
        var i = new XMLHttpRequest;
        if (i.open("GET", e, !0), i.withCredentials = !1, t)
            for (var s in t) i.setRequestHeader(s, t[s]);
        i.onload = function() {
            var e;
            200 <= this.status && this.status < 400 && this.responseText ? (e = void 0, e = r ? this.responseText : JSON.parse(this.responseText), o(e)) : n({
                message: "Error Loading Data",
                statusCode: this.status
            })
        }, i.onerror = function(e) {
            n(e)
        }, i.send()
    };
    var xt, Nt = Dt;

    function Dt() {}
    Rt.prototype.addLogoUrls = function() {
        y.checkMobileOfflineRequest(y.getBannerVersionUrl()) || (A.mobileOnlineURL.push(y.updateCorrectUrl(I.optanonLogo)), A.mobileOnlineURL.push(y.updateCorrectUrl(I.oneTrustFtrLogo)))
    }, Rt.prototype.getCookieLabel = function(e, t, o) {
        var n;
        return void 0 === o && (o = !0), e ? (n = e.Name, t ? '\n                <a  class="cookie-label"\n                    href="' + (o ? "http://cookiepedia.co.uk/cookies/" : "http://cookiepedia.co.uk/host/") + e.Name + '"\n                    rel="noopener"\n                    target="_blank"\n                >\n                    ' + e.Name + '&nbsp;<span class="ot-scrn-rdr">' + I.NewWinTxt + "</span>\n                </a>\n            " : n) : ""
    }, Rt.prototype.getBannerSDKAssestsUrl = function() {
        return this.getBannerVersionUrl() + "/assets"
    }, Rt.prototype.getBannerVersionUrl = function() {
        var e = A.bannerScriptElement.getAttribute("src");
        return "" + (-1 !== e.indexOf("/consent/") ? e.split("consent/")[0] + "scripttemplates/" : e.split("otSDKStub")[0]) + S.moduleInitializer.Version
    }, Rt.prototype.checkMobileOfflineRequest = function(e) {
        return S.moduleInitializer.MobileSDK && new RegExp("^file://", "i").test(e)
    }, Rt.prototype.updateCorrectIABUrl = function(e) {
        var t, o = S.moduleInitializer.ScriptType;
        return o !== Me && o !== Ue || (o = b.getURL(e), (t = (t = A.bannerScriptElement) && t.getAttribute("src") ? b.getURL(t.getAttribute("src")) : null) && o && t.hostname !== o.hostname && (e = (e = (t = "" + A.bannerDataParentURL) + o.pathname.split("/").pop().replace(/(^\/?)/, "/")).replace(o.hostname, t.hostname))), e
    }, Rt.prototype.updateCorrectUrl = function(e, t) {
        if ((void 0 === t && (t = !1), A.previewMode) && new RegExp("^data:image/").test(e)) return e;
        var o = b.getURL(e),
            n = A.bannerScriptElement,
            n = n && n.getAttribute("src") ? b.getURL(n.getAttribute("src")) : null;
        if (n && o && n.hostname !== o.hostname) {
            var r = S.moduleInitializer.ScriptType;
            if (r === Me || r === Ue) {
                if (t) return e;
                e = (n = A.bannerDataParentURL + "/" + A.getRegionRule().Id) + o.pathname.replace(/(^\/?)/, "/")
            } else e = null == (r = e) ? void 0 : r.replace(o.hostname, n.hostname)
        }
        return e
    }, Rt.prototype.isBundleOrStackActive = function(n, r) {
        void 0 === r && (r = null);
        for (var i = L.oneTrustIABConsent, s = !0, a = (r = r || L.groupsConsent, 0);

            function() {
                var e, t, o = n.SubGroups[a];
                o.Status !== m.ALWAYS_ACTIVE && (o.Type === yt ? (-1 < (t = b.findIndex(r, function(e) {
                    return e.split(":")[0] === o.CustomGroupId
                })) && "0" === r[t].split(":")[1] || !r.length) && (s = !1) : (e = o.Type === T.GroupTypes.Spl_Ft ? i.specialFeatures : i.purpose, (-1 < (t = b.findIndex(e, function(e) {
                    return e.split(":")[0] === o.IabGrpId
                })) && "false" === e[t].split(":")[1] || !e.length) && (s = !1))), a++
            }(), s && a < n.SubGroups.length;);
        return s
    }, Rt.prototype.otFetchOfflineFile = function(n) {
        return u(this, void 0, void 0, function() {
            var t, o;
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        return n = n.replace(".json", ".js"), t = n.split("/"), t = t[t.length - 1], o = t.split(".js")[0], [4, new Promise(function(e) {
                            function t() {
                                e(window[o])
                            }
                            y.jsonp(n, t, t)
                        })];
                    case 1:
                        return [2, e.sent()]
                }
            })
        })
    }, Rt.prototype.jsonp = function(e, t, o) {
        y.checkMobileOfflineRequest(e) || A.mobileOnlineURL.push(e);
        var n = document.createElement("script"),
            r = document.getElementsByTagName("head")[0];

        function i() {
            t()
        }
        n.onreadystatechange = function() {
            "loaded" !== this.readyState && "complete" !== this.readyState || i()
        }, n.onload = i, n.onerror = function() {
            o()
        }, n.type = "text/javascript", n.async = !0, n.src = e, L.crossOrigin && n.setAttribute("crossorigin", L.crossOrigin), r.appendChild(n)
    }, Rt.prototype.isCookiePolicyPage = function(e) {
        for (var t = !1, o = b.removeURLPrefixes(window.location.href), n = _("<div></div>", "ce").el, r = (_(n).html(e), n.querySelectorAll("a")), i = 0; i < r.length; i++)
            if (b.removeURLPrefixes(r[i].href) === o) {
                t = !0;
                break
            }
        return t
    }, Rt.prototype.isBannerVisible = function() {
        var e = !1,
            t = document.getElementById("onetrust-banner-sdk");
        return e = t && t.getAttribute("style") ? -1 !== t.getAttribute("style").indexOf("display: none") || -1 !== t.getAttribute("style").indexOf("display:none") : e
    }, Rt.prototype.hideBanner = function() {
        var e = this;
        L.bnrAnimationInProg ? setTimeout(function() {
            return e.hideBanner()
        }, 100) : _("#onetrust-banner-sdk").fadeOut(400)
    }, Rt.prototype.resetFocusToBody = function() {
        document.activeElement && document.activeElement.blur()
    }, Rt.prototype.getDuration = function(e) {
        var t, o = e.Length,
            e = e.DurationType;
        return o && 0 !== parseInt(o) ? (o = parseInt(o), e ? (t = 1 < (o = this.round_to_precision(o / e, .5)) ? at[e] + "s" : at[e], I.LifespanDurationText && 1 === e && (t = "LifespanDurationText"), o + " " + I[t]) : this.getDurationText(o)) : I.LfSpanSecs
    }, Rt.prototype.isDateCurrent = function(e) {
        var e = e.split("/"),
            t = parseInt(e[1]),
            o = parseInt(e[0]),
            e = parseInt(e[2]),
            n = new Date,
            r = n.getDate(),
            i = n.getFullYear(),
            n = n.getMonth() + 1;
        return i < e || e === i && n < o || e === i && o === n && r <= t
    }, Rt.prototype.insertFooterLogo = function(e) {
        var t = _(e).el;
        if (t.length && I.oneTrustFtrLogo) {
            var o = y.updateCorrectUrl(I.oneTrustFtrLogo);
            y.checkMobileOfflineRequest(y.getBannerVersionUrl()) && (o = b.getRelativeURL(o, !0, !0));
            for (var n = 0; n < t.length; n++) {
                var r = t[n].querySelector("img"),
                    i = "Powered by OneTrust " + I.NewWinTxt;
                _(t[n]).attr("href", I.pCFooterLogoUrl), r.setAttribute("src", o), r.setAttribute("title", i), _(t[n]).attr("aria-label", i)
            }
        }
    }, Rt.prototype.getUTCFormattedDate = function(e) {
        e = new Date(e);
        return e.getUTCFullYear() + "-" + (e.getUTCMonth() + 1).toString().padStart(2, "0") + "-" + e.getUTCDate().toString().toString().padStart(2, "0") + " " + e.getUTCHours() + ":" + e.getUTCMinutes().toString().toString().padStart(2, "0") + ":" + e.getUTCSeconds().toString().toString().padStart(2, "0")
    }, Rt.prototype.getDurationText = function(e) {
        return 365 <= e ? (e = this.round_to_precision(e /= 365, .5)) + " " + (1 < e ? I.LfSpnYrs : I.LfSpnYr) : I.LifespanDurationText ? e + " " + I.LifespanDurationText : e + " " + (1 < e ? I.PCenterVendorListLifespanDays : I.PCenterVendorListLifespanDay)
    }, Rt.prototype.round_to_precision = function(e, t) {
        e = +e + (void 0 === t ? .5 : t / 2);
        return e - e % (void 0 === t ? 1 : +t)
    }, Rt.prototype.isOptOutEnabled = function() {
        return I.PCTemplateUpgrade ? L.genVenOptOutEnabled : I.allowHostOptOut
    }, Rt.prototype.findUserType = function(e) {
        L.isKeyboardUser = !(!e || 0 !== e.detail)
    }, Rt.prototype.getCSSPropsFromString = function(e) {
        var t, o;
        return e ? (t = e.length, o = {}, (e = e.endsWith(";") ? e.substring(0, t - 1) : e).trim().split(";").forEach(function(e) {
            e = e.trim().toString().split(":"), e = JSON.parse('{ "' + e[0].trim() + '" : "' + e[1].trim() + '" }');
            o = Object.assign(o, e)
        }), o) : {}
    }, Rt.prototype.setCloseIcon = function(e) {
        var t = y.updateCorrectUrl(I.OTCloseBtnLogo),
            e = _(e);
        e.length && d(e.el, 'background-image: url("' + t + '")', !0)
    }, Rt.prototype.createOptOutSignalElement = function(e, t) {
        var e = e(t ? "#ot-pc-content" : "#onetrust-policy"),
            o = document.createElement("div"),
            n = (o.classList.add("ot-optout-signal"), document.createElement("div")),
            r = (n.classList.add("ot-optout-icon"), document.createElement("span"));
        return r.innerText = t ? I.PCOptOutSignalText : I.BOptOutSignalText, o.append(n), o.append(r), null != (t = e) && t.prepend(o), this.applyGuardLogo(), o
    }, Rt.prototype.applyGuardLogo = function() {
        return u(this, void 0, void 0, function() {
            var t, o, n;
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = I.cookiePersistentLogo).includes("ot_guard_logo.svg") || (o = I.OTCloseBtnLogo, n = o.indexOf("static/"), t = o.replace(o.slice(n + 7), "ot_guard_logo.svg")), (o = S.moduleInitializer.ScriptType) !== Me && o !== Ue || (t = y.updateCorrectUrl(t)), [4, xt.getPersistentCookieSvg(t)];
                    case 1:
                        return n = e.sent(), _(".ot-optout-icon").html(n), [2]
                }
            })
        })
    }, Rt.prototype.updateTCString = function() {
        var e = h.iabStringSDK().tcString().encode(L.tcModel);
        L.cmpApi.update(e, !1)
    }, Rt.prototype.replaceTextFromString = function(e, t, o) {
        return t.split(e).join(o)
    };
    var y, Ht = Rt;

    function Rt() {}

    function o() {}
    o.prototype.initializeBannerVariables = function(e) {
        var t = e.DomainData;
        A.iabType = t.IabType, t = t.PCTemplateUpgrade, P = t ? At : It, t = A.iabType, T = "IAB2" === t ? Lt : _t, A.init(e), L.showGeneralVendors = I.GeneralVendorsEnabled && I.PCTemplateUpgrade, L.showVendorService = S.fp.CookieV2VendorServiceScript && I.VendorServiceConfig.PCVSEnable && !A.isIab2orv2Template && I.PCTemplateUpgrade, L.vsIsActiveAndOptOut = L.showVendorService && I.VendorServiceConfig.PCVSOptOut, L.showTrackingTech = S.fp.CookieV2TrackingTechPrefCenter && I.AdditionalTechnologiesConfig.PCShowTrackingTech, L.genVenOptOutEnabled = L.showGeneralVendors && I.GenVenOptOut, y.addLogoUrls(), this.setGeolocationInCookies(), this.setOrUpdate3rdPartyIABConsentFlag()
    }, o.prototype.initializeVendorInOverriddenVendors = function(e, t) {
        I.OverriddenVendors[e] = {
            disabledCP: [],
            disabledLIP: [],
            active: t,
            legInt: !1,
            consent: !1
        }
    }, o.prototype.applyGlobalRestrictionsonNewVendor = function(e, t, o, n) {
        var r = I.GlobalRestrictions,
            i = I.OverriddenVendors;
        switch (I.Publisher.restrictions[o] || (I.Publisher.restrictions[o] = {}), i[t] || this.initializeVendorInOverriddenVendors(t, !0), i[t].disabledCP || (i[t].disabledCP = []), i[t].disabledLIP || (i[t].disabledLIP = []), r[o]) {
            case de.Disabled:
                (n ? i[t].disabledCP : i[t].disabledLIP).push(o), I.Publisher.restrictions[o][t] = de.Disabled;
                break;
            case de.Consent:
                n ? (i[t].consent = !0, I.Publisher.restrictions[o][t] = de.Consent) : (i[t].disabledLIP.push(o), this.checkFlexiblePurpose(e, t, o, !1));
                break;
            case de.LegInt:
                n ? (i[t].disabledCP.push(o), this.checkFlexiblePurpose(e, t, o, !0)) : (i[t].legInt = !0, I.Publisher.restrictions[o][t] = de.LegInt);
                break;
            case void 0:
                n ? i[t].consent = !0 : i[t].legInt = !0
        }
    }, o.prototype.checkFlexiblePurpose = function(e, t, o, n) {
        e.flexiblePurposes.includes(o) ? (n ? I.OverriddenVendors[t].legInt = !0 : I.OverriddenVendors[t].consent = !0, I.Publisher.restrictions[o][t] = n ? de.LegInt : de.Consent) : I.Publisher.restrictions[o][t] = de.Disabled
    }, o.prototype.getActivePurposesForVendor = function(e, t) {
        var o = I.OverriddenVendors[t] && I.OverriddenVendors[t].disabledCP,
            n = I.OverriddenVendors[t] && I.OverriddenVendors[t].disabledLIP,
            o = o ? this.removeElementsFromArray(e.purposes, I.OverriddenVendors[t].disabledCP) || [] : e.purposes || [],
            n = n ? this.removeElementsFromArray(e.legIntPurposes, I.OverriddenVendors[t].disabledLIP) || [] : e.legIntPurposes || [],
            t = F(o, n, e.flexiblePurposes || []);
        return new Set(t)
    }, o.prototype.setActiveVendorCount = function(e, t) {
        var o, n;
        "IAB2V2" === A.getRegionRuleType() && (o = new Set, n = A.tcf2ActiveVendors, this.getActivePurposesForVendor(e, t).forEach(function(e) {
            var t = n.pur.get(e) || 0;
            n.pur.set(e, t + 1), A.tcfParentMap.pur.get(e) && o.add(A.tcfParentMap.pur.get(e))
        }), e.specialPurposes && e.specialPurposes.forEach(function(e) {
            var t = n.spl_pur.get(e) || 0;
            n.spl_pur.set(e, t + 1), A.tcfParentMap.spl_pur.get(e) && o.add(A.tcfParentMap.spl_pur.get(e))
        }), e.features && e.features.forEach(function(e) {
            var t = n.ft.get(e) || 0;
            n.ft.set(e, t + 1), A.tcfParentMap.ft.get(e) && o.add(A.tcfParentMap.ft.get(e))
        }), e.specialFeatures && e.specialFeatures.forEach(function(e) {
            var t = n.spl_ft.get(e) || 0;
            n.spl_ft.set(e, t + 1), A.tcfParentMap.spl_ft.get(e) && o.add(A.tcfParentMap.spl_ft.get(e))
        }), o.forEach(function(e) {
            var t = n.stack.get(e) || 0;
            n.stack.set(e, t + 1)
        }))
    }, o.prototype.isVendorInvalid = function(e, t) {
        var o = !1,
            n = !e.purposes.length && !e.flexiblePurposes.length,
            r = (I.OverriddenVendors[t] && !I.OverriddenVendors[t].consent && (n = !0), !0);
        return A.legIntSettings.PAllowLI && e.legIntPurposes.length && (!I.OverriddenVendors[t] || I.OverriddenVendors[t].legInt) && (r = !1), o = !n || !r || e.specialPurposes.length || e.features.length || e.specialFeatures.length ? o : !0
    }, o.prototype.removeInActiveVendorsForTcf = function(r) {
        var i = this,
            s = L.iabData.vendorListVersion,
            e = I.Publisher,
            a = I.GlobalRestrictionEnabled;
        0 !== Object.keys(e).length && e && Object.keys(e.restrictions).length;
        Object.keys(r.vendors).forEach(function(t) {
            var o = r.vendors[t],
                e = !1,
                n = i.getVendorGVLVersion(o),
                n = (s < n && (I.NewVendorsInactiveEnabled ? (i.initializeVendorInOverriddenVendors(t, !1), e = !0) : a && (o.purposes.forEach(function(e) {
                    i.applyGlobalRestrictionsonNewVendor(o, t, e, !0)
                }), o.legIntPurposes.forEach(function(e) {
                    i.applyGlobalRestrictionsonNewVendor(o, t, e, !1)
                }))), I.OverriddenVendors[t] && !I.OverriddenVendors[t].active && (e = !0), -1 < I.Vendors.indexOf(Number(t)) && (e = !0), i.isVendorInvalid(o, t));
            (e = e || n) && delete r.vendors[t], e || i.setActiveVendorCount(o, t)
        })
    }, o.prototype.getVendorGVLVersion = function(e) {
        return A.isTcfV2Template ? e.iab2V2GVLVersion : e.iab2GVLVersion
    }, o.prototype.removeElementsFromArray = function(e, t) {
        return e.filter(function(e) {
            return !t.includes(e)
        })
    }, o.prototype.setPublisherRestrictions = function() {
        var i, t, s, a, e = I.Publisher;
        e && e.restrictions && (i = this.iabStringSDK(), t = e.restrictions, s = L.iabData, a = L.oneTrustIABConsent.vendorList.vendors, Object.keys(t).forEach(function(o) {
            var n, r = t[o],
                e = A.iabGroups.purposes[o];
            e && (n = {
                description: e.description,
                purposeId: e.id,
                purposeName: e.name
            }), Object.keys(r).forEach(function(e) {
                var t;
                L.vendorsSetting[e] && (t = L.vendorsSetting[e].arrIndex, 1 === r[e] && -1 === a[e].purposes.indexOf(Number(o)) ? s.vendors[t].purposes.push(n) : 2 === r[e] && -1 === a[e].legIntPurposes.indexOf(Number(o)) && s.vendors[t].legIntPurposes.push(n), t = i.purposeRestriction(Number(o), r[e]), L.tcModel.publisherRestrictions.add(Number(e), t))
            })
        }))
    }, o.prototype.populateVendorListTCF = function() {
        return u(this, void 0, void 0, function() {
            var t, o, n, r, i, s, a, l, c;
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = this.iabStringSDK(), o = L.iabData, n = y.updateCorrectIABUrl(o.globalVendorListUrl), r = !this.isIABCrossConsentEnabled(), y.checkMobileOfflineRequest(y.getBannerVersionUrl())) ? [3, 1] : (A.mobileOnlineURL.push(n), i = t.gvl(n, L.gvlObj), [3, 3]);
                    case 1:
                        return a = (s = t).gvl, l = [null], [4, y.otFetchOfflineFile(b.getRelativeURL(n, !0))];
                    case 2:
                        i = a.apply(s, l.concat([e.sent()])), e.label = 3;
                    case 3:
                        return e.trys.push([3, 5, , 6]), [4, i.changeLanguage(L.consentLanguage)];
                    case 4:
                        return e.sent(), [3, 6];
                    case 5:
                        return e.sent(), [3, 6];
                    case 6:
                        return this.removeInActiveVendorsForTcf(i), A.tcf2ActiveVendors.all = Object.keys(i.vendors).length, L.oneTrustIABConsent.vendorList = i, this.assignIABDataWithGlobalVendorList(i), c = L, [4, t.tcModel(i)];
                    case 7:
                        c.tcModel = e.sent(), r && this.setPublisherRestrictions(), L.tcModel.cmpId = parseInt(o.cmpId), A.isTcfV2Template && (L.tcModel.useNonStandardTexts = I.UseNonStandardStacks), L.tcModel.cmpVersion = parseInt(o.cmpVersion);
                        try {
                            L.tcModel.consentLanguage = L.consentLanguage
                        } catch (e) {
                            L.tcModel.consentLanguage = "EN"
                        }
                        return L.tcModel.consentScreen = parseInt(o.consentScreen), L.tcModel.isServiceSpecific = r, L.tcModel.purposeOneTreatment = A.purposeOneTreatment, I.PublisherCC ? L.tcModel.publisherCountryCode = I.PublisherCC : L.userLocation.country && (L.tcModel.publisherCountryCode = L.userLocation.country), L.cmpApi = t.cmpApi(L.tcModel.cmpId, L.tcModel.cmpVersion, r, I.UseGoogleVendors ? {
                            getTCData: this.addtlConsentString,
                            getInAppTCData: this.addtlConsentString
                        } : void 0), null !== this.alertBoxCloseDate() && !this.needReconsent() || this.resetTCModel(), [2]
                }
            })
        })
    }, o.prototype.resetTCModel = function() {
        var e, t, o = this.iabStringSDK(),
            n = L.tcModel.clone();
        n.unsetAll(), A.legIntSettings.PAllowLI && (e = A.consentableIabGrps.filter(function(e) {
            return e.HasLegIntOptOut && e.Type === T.GroupTypes.Pur
        }).map(function(e) {
            return parseInt(A.iabGrpIdMap[e.CustomGroupId])
        }), t = Object.keys(L.vendorsSetting).filter(function(e) {
            return L.vendorsSetting[e].legInt
        }).map(function(e) {
            return parseInt(e)
        }), n.purposeLegitimateInterests.set(e), n.vendorLegitimateInterests.set(t), n.isServiceSpecific) && n.publisherLegitimateInterests.set(e), L.cmpApi.update(o.tcString().encode(n), !0)
    }, o.prototype.addtlConsentString = function(e, t, o) {
        t && t.tcString && (t.addtlConsent = "" + L.addtlConsentVersion + (L.isAddtlConsent ? L.addtlVendors.vendorConsent.join(".") : "")), "function" == typeof e ? e(t, o) : console.error("__tcfapi received invalid parameters.")
    }, o.prototype.setIabData = function() {
        L.iabData = A.isTcfV2Template ? S.moduleInitializer.Iab2V2Data : S.moduleInitializer.IabV2Data, L.iabData.consentLanguage = L.consentLanguage
    }, o.prototype.assignIABDataWithGlobalVendorList = function(r) {
        var i = this,
            s = I.OverriddenVendors,
            a = (L.iabData.vendorListVersion = r.vendorListVersion, L.iabData.vendors = [], I.IABDataCategories);
        Object.keys(r.vendors).forEach(function(n) {
            L.vendorsSetting[n] = {
                consent: !0,
                legInt: !0,
                arrIndex: 0,
                specialPurposesOnly: !1
            };
            var e = {},
                t = r.vendors[n],
                o = (e.vendorId = n, e.vendorName = t.name, e.policyUrl = t.policyUrl, i.setIAB2VendorData(t, e), e.cookieMaxAge = b.calculateCookieLifespan(t.cookieMaxAgeSeconds), e.usesNonCookieAccess = t.usesNonCookieAccess, e.deviceStorageDisclosureUrl = t.deviceStorageDisclosureUrl || null, !t.legIntPurposes.length && !t.purposes.length && t.specialPurposes.length);
            A.legIntSettings.PAllowLI && ((!s[n] || s[n].legInt) && (s[n] || t.legIntPurposes.length) || o) || (L.vendorsSetting[n].legInt = !1), A.legIntSettings.PAllowLI && o && (L.vendorsSetting[n].specialPurposesOnly = !0), (!s[n] || s[n].consent) && (s[n] || t.purposes.length || t.flexiblePurposes.length) && (t.purposes.length || t.flexiblePurposes.length) || (L.vendorsSetting[n].consent = !1), e.features = t.features.reduce(function(e, t) {
                t = A.iabGroups.features[t];
                return t && e.push({
                    description: t.description,
                    featureId: t.id,
                    featureName: t.name
                }), e
            }, []), e.specialFeatures = r.vendors[n].specialFeatures.reduce(function(e, t) {
                t = A.iabGroups.specialFeatures[t];
                return t && e.push({
                    description: t.description,
                    featureId: t.id,
                    featureName: t.name
                }), e
            }, []), i.mapDataDeclarationForVendor(r.vendors[n], e, a), i.mapDataRetentionForVendor(r.vendors[n], e), e.purposes = r.vendors[n].purposes.reduce(function(e, t) {
                var o = A.iabGroups.purposes[t];
                return !o || s[n] && s[n].disabledCP && -1 !== s[n].disabledCP.indexOf(t) || e.push({
                    description: o.description,
                    purposeId: o.id,
                    purposeName: o.name
                }), e
            }, []), e.legIntPurposes = r.vendors[n].legIntPurposes.reduce(function(e, t) {
                var o = A.iabGroups.purposes[t];
                return !o || s[n] && s[n].disabledLIP && -1 !== s[n].disabledLIP.indexOf(t) || e.push({
                    description: o.description,
                    purposeId: o.id,
                    purposeName: o.name
                }), e
            }, []), e.specialPurposes = t.specialPurposes.reduce(function(e, t) {
                t = A.iabGroups.specialPurposes[t];
                return t && e.push({
                    description: t.description,
                    purposeId: t.id,
                    purposeName: t.name
                }), e
            }, []), L.iabData.vendors.push(e), L.vendorsSetting[n].arrIndex = L.iabData.vendors.length - 1
        })
    }, o.prototype.mapDataDeclarationForVendor = function(e, t, n) {
        var o;
        A.isTcfV2Template && null != (o = e.dataDeclaration) && o.length && (t.dataDeclaration = e.dataDeclaration.reduce(function(e, t) {
            var o = n.find(function(e) {
                return e.Id === t
            });
            return o && e.push({
                Description: o.Description,
                Id: o.Id,
                Name: o.Name
            }), e
        }, []))
    }, o.prototype.mapDataRetentionForVendor = function(o, n) {
        var e;
        n.dataRetention = {}, A.isTcfV2Template && o.dataRetention && (null !== (null == (e = o.dataRetention) ? void 0 : e.stdRetention) && void 0 !== (null == (e = o.dataRetention) ? void 0 : e.stdRetention) && (n.dataRetention = {
            stdRetention: o.dataRetention.stdRetention
        }), Object.keys(null == (e = o.dataRetention) ? void 0 : e.purposes).length && (n.dataRetention.purposes = JSON.parse(JSON.stringify(o.dataRetention.purposes)), Object.keys(o.dataRetention.purposes).forEach(function(e) {
            var t = A.iabGroups.purposes[e];
            t && (n.dataRetention.purposes[e] = {
                name: t.name,
                id: t.id,
                retention: o.dataRetention.purposes[e]
            })
        })), Object.keys(null == (e = o.dataRetention) ? void 0 : e.specialPurposes).length) && (n.dataRetention.specialPurposes = JSON.parse(JSON.stringify(o.dataRetention.specialPurposes)), Object.keys(o.dataRetention.specialPurposes).forEach(function(e) {
            var t = A.iabGroups.specialPurposes[e];
            t && (n.dataRetention.specialPurposes[e] = {
                name: t.name,
                id: t.id,
                retention: o.dataRetention.specialPurposes[e]
            })
        }))
    }, o.prototype.setIAB2VendorData = function(e, t) {
        var o, n, r;
        A.isTcfV2Template && (n = L.lang, r = (r = e.urls.find(function(e) {
            return e.langId === n
        })) || e.urls[0], t.vendorPrivacyUrl = (null == (o = r) ? void 0 : o.privacy) || "", t.legIntClaim = (null == (o = r) ? void 0 : o.legIntClaim) || "", null != (r = e.dataDeclaration) && r.length && (t.dataDeclaration = e.dataDeclaration), e.DataRetention) && (t.DataRetention = e.DataRetention)
    }, o.prototype.populateIABCookies = function() {
        return u(this, void 0, void 0, function() {
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        if (!this.isIABCrossConsentEnabled()) return [3, 5];
                        e.label = 1;
                    case 1:
                        return e.trys.push([1, 3, , 4]), [4, this.setIAB3rdPartyCookie(v.EU_CONSENT, "", 0, !0)];
                    case 2:
                        return e.sent(), [3, 4];
                    case 3:
                        return e.sent(), this.setIABCookieData(), this.updateCrossConsentCookie(!1), [3, 4];
                    case 4:
                        return [3, 6];
                    case 5:
                        h.needReconsent() || this.setIABCookieData(), e.label = 6;
                    case 6:
                        return [2]
                }
            })
        })
    }, o.prototype.setIAB3rdPartyCookie = function(e, t, o, n) {
        var r = I.iabThirdPartyConsentUrl;
        try {
            if (r && document.body) return this.updateThirdPartyConsent(r, e, t, o, n);
            throw new ReferenceError
        } catch (e) {
            throw e
        }
    }, o.prototype.setIABCookieData = function() {
        L.oneTrustIABConsent.IABCookieValue = k.getCookie(v.EU_PUB_CONSENT)
    }, o.prototype.updateThirdPartyConsent = function(n, r, i, s, a) {
        return u(this, void 0, void 0, function() {
            var t, o;
            return p(this, function(e) {
                return t = window.location.protocol + "//" + n + "/?name=" + r + "&value=" + i + "&expire=" + s + "&isFirstRequest=" + a, document.getElementById("onetrustIabCookie") ? (document.getElementById("onetrustIabCookie").contentWindow.location.replace(t), [2]) : (d(o = document.createElement("iframe"), "display: none;", !0), o.id = "onetrustIabCookie", o.setAttribute("title", "OneTrust IAB Cookie"), o.src = t, document.body.appendChild(o), [2, new Promise(function(e) {
                    o.onload = function() {
                        A.thirdPartyiFrameResolve(), A.thirdPartyiFrameLoaded = !0, e()
                    }, o.onerror = function() {
                        throw A.thirdPartyiFrameResolve(), A.thirdPartyiFrameLoaded = !0, e(), new URIError
                    }
                })])
            })
        })
    }, o.prototype.setIABVendor = function(o, n) {
        var t;
        void 0 === o && (o = !0), void 0 === n && (n = !1), L.iabData.vendors.forEach(function(e) {
            var t, e = e.vendorId;
            A.legIntSettings.PAllowLI ? (t = void 0, t = (n || !!L.vendorsSetting[e].consent) && o, L.oneTrustIABConsent.vendors.push(e.toString() + ":" + t), L.oneTrustIABConsent.legIntVendors.push(e.toString() + ":" + L.vendorsSetting[e].legInt)) : (L.oneTrustIABConsent.legIntVendors = [], L.oneTrustIABConsent.vendors.push(e.toString() + ":" + o))
        }), I.UseGoogleVendors && (t = L.addtlVendors, Object.keys(L.addtlVendorsList).forEach(function(e) {
            o && (t.vendorSelected["" + e.toString()] = !0, t.vendorConsent.push("" + e.toString()))
        }))
    }, o.prototype.setOrUpdate3rdPartyIABConsentFlag = function() {
        var e = this.getIABCrossConsentflagData();
        I.IsIabEnabled ? e && !this.needReconsent() || this.updateCrossConsentCookie(I.IsIabThirdPartyCookieEnabled) : e && !this.reconsentRequired() && "true" !== e || this.updateCrossConsentCookie(!1)
    }, o.prototype.isIABCrossConsentEnabled = function() {
        return "true" === this.getIABCrossConsentflagData()
    }, o.prototype.getIABCrossConsentflagData = function() {
        return k.readCookieParam(v.OPTANON_CONSENT, xe.IS_IAB_GLOBAL)
    }, o.prototype.setGeolocationInCookies = function() {
        var e, t = k.readCookieParam(v.OPTANON_CONSENT, xe.GEO_LOCATION);
        L.userLocation && !t && this.isAlertBoxClosedAndValid() ? (e = L.userLocation.country + ";" + L.userLocation.state, this.setUpdateGeolocationCookiesData(e)) : this.reconsentRequired() && t && this.setUpdateGeolocationCookiesData("")
    }, o.prototype.iabStringSDK = function() {
        var e = S.moduleInitializer.otIABModuleData;
        if (I.IsIabEnabled && e) return {
            gvl: e.tcfSdkRef.gvl,
            tcModel: e.tcfSdkRef.tcModel,
            tcString: e.tcfSdkRef.tcString,
            cmpApi: e.tcfSdkRef.cmpApi,
            purposeRestriction: e.tcfSdkRef.purposeRestriction
        }
    }, o.prototype.setUpdateGeolocationCookiesData = function(e) {
        k.writeCookieParam(v.OPTANON_CONSENT, xe.GEO_LOCATION, e)
    }, o.prototype.reconsentRequired = function() {
        return (S.moduleInitializer.MobileSDK || this.awaitingReconsent()) && this.needReconsent()
    }, o.prototype.awaitingReconsent = function() {
        return "true" === k.readCookieParam(v.OPTANON_CONSENT, xe.AWAITING_RE_CONSENT)
    }, o.prototype.needReconsent = function() {
        var e = this.alertBoxCloseDate(),
            t = I.LastReconsentDate;
        return e && t && new Date(t) > new Date(e)
    }, o.prototype.updateCrossConsentCookie = function(e) {
        k.writeCookieParam(v.OPTANON_CONSENT, xe.IS_IAB_GLOBAL, e)
    }, o.prototype.alertBoxCloseDate = function() {
        return k.getCookie(v.ALERT_BOX_CLOSED)
    }, o.prototype.isAlertBoxClosedAndValid = function() {
        return null !== this.alertBoxCloseDate() && !this.reconsentRequired()
    }, o.prototype.generateLegIntButtonElements = function(e, t, o) {
        return '<div class="ot-leg-btn-container" data-group-id="' + t + '" data-el-id="' + t + '-leg-out" is-vendor="' + (o = void 0 === o ? !1 : o) + '">\n                    <button class="ot-obj-leg-btn-handler ' + (e ? "ot-leg-int-enabled ot-inactive-leg-btn" : "ot-active-leg-btn") + '">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">\n                            <path fill="' + I.pcButtonTextColor + '" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>\n                        </svg>\n                        <span>' + (e ? A.legIntSettings.PObjectLegIntText : A.legIntSettings.PObjectionAppliedText) + '\n                        </span>\n                    </button>\n                    <button\n                        class="ot-remove-objection-handler"\n                            data-style="color:' + I.pcButtonColor + "; " + (e ? "display:none;" : "") + '"\n                    >\n                        ' + A.legIntSettings.PRemoveObjectionText + "\n                    </button>\n                </div>"
    }, o.prototype.syncAlertBoxCookie = function(e) {
        var t = I.ReconsentFrequencyDays;
        k.setCookie(v.ALERT_BOX_CLOSED, e, t, !1, new Date(e))
    }, o.prototype.syncCookieExpiry = function() {
        var e, t, o;
        L.syncRequired && (e = I.ReconsentFrequencyDays, t = k.getCookie(v.ALERT_BOX_CLOSED), o = k.getCookie(v.OPTANON_CONSENT), k.setCookie(v.OPTANON_CONSENT, o, e, !1, new Date(t)), h.needReconsent() && k.removeAlertBox(), (o = k.getCookie(v.EU_PUB_CONSENT)) && (h.isIABCrossConsentEnabled() ? k.removeIab2() : k.setCookie(v.EU_PUB_CONSENT, o, e, !1, new Date(t))), o = k.getCookie(v.ADDITIONAL_CONSENT_STRING)) && k.setCookie(v.ADDITIONAL_CONSENT_STRING, o, e, !1, new Date(t))
    }, o.prototype.syncOtPreviewCookie = function() {
        var e = k.getCookie(v.OT_PREVIEW);
        e && k.setCookie(v.OT_PREVIEW, e, 1, !1)
    }, o.prototype.dispatchConsentEvent = function() {
        window.dispatchEvent(new CustomEvent("OTConsentApplied", {
            OTConsentApplied: "yes"
        }))
    };
    var E, h = new o,
        Ft = function() {};
    Kt.prototype.isAlwaysActiveGroup = function(e) {
        var t;
        return !this.getGrpStatus(e) || (t = this.getGrpStatus(e).toLowerCase(), (t = e.Parent && t !== m.ALWAYS_ACTIVE ? this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase() : t) === m.ALWAYS_ACTIVE)
    }, Kt.prototype.getGrpStatus = function(e) {
        return e && e.Status ? A.DNTEnabled && e.IsDntEnabled ? m.DNT : e.Status : ""
    }, Kt.prototype.getParentGroup = function(t) {
        var e;
        return t && 0 < (e = I.Groups.filter(function(e) {
            return e.OptanonGroupId === t
        })).length ? e[0] : null
    }, Kt.prototype.checkIfGroupHasConsent = function(t) {
        var e = L.groupsConsent,
            o = b.findIndex(e, function(e) {
                return e.split(":")[0] === t.CustomGroupId
            });
        return -1 < o && "1" === e[o].split(":")[1]
    }, Kt.prototype.checkIsActiveByDefault = function(e) {
        var t;
        return !this.getGrpStatus(e) || (t = this.getGrpStatus(e).toLowerCase(), (t = e.Parent && t !== m.ALWAYS_ACTIVE ? this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase() : t) === m.ALWAYS_ACTIVE) || t === m.INACTIVE_LANDING_PAGE || t === m.ACTIVE || t === m.DNT && !A.DNTEnabled
    }, Kt.prototype.getGroupById = function(e) {
        for (var t = null, o = 0, n = I.Groups; o < n.length; o++) {
            for (var r = n[o], i = 0, s = F(r.SubGroups, [r]); i < s.length; i++) {
                var a = s[i];
                if (a.CustomGroupId === e) {
                    t = a;
                    break
                }
            }
            if (t) break
        }
        return t
    }, Kt.prototype.isSoftOptInGrp = function(e) {
        return !!e && (e = e && !e.Parent ? e : C.getParentGroup(e.Parent), "inactive landingpage" === C.getGrpStatus(e).toLowerCase())
    }, Kt.prototype.isOptInGrp = function(e) {
        return !!e && "inactive" === C.getGrpStatus(e).toLowerCase()
    }, Kt.prototype.getParentByGrp = function(e) {
        return e.Parent ? this.getGroupById(e.Parent) : null
    }, Kt.prototype.getVSById = function(e) {
        return L.getVendorsInDomain().get(e)
    }, Kt.prototype.getGrpByVendorId = function(e) {
        var t = null;
        return t = L.getVendorsInDomain().has(e) ? L.getVendorsInDomain().get(e).groupRef : t
    };
    var C, Mt, qt, Ut, jt, zt = Kt;

    function Kt() {}(s = Mt = Mt || {}).SaleOptOut = "SaleOptOutCID", s.SharingOptOut = "SharingOptOutCID", s.PersonalDataConsents = "PersonalDataCID", (s = qt = qt || {}).SharingOptOutNotice = "SharingOptOutCID", s.SaleOptOutNotice = "SaleOptOutCID", s.SensitiveDataLimitUseNotice = "SensitivePICID || SensitiveSICID || GeolocationCID || RREPInfoCID || CommunicationCID || GeneticCID|| BiometricCID || HealthCID || SexualOrientationCID", (s = Ut = Ut || {}).KnownChildSensitiveDataConsents1 = "KnownChildSellPICID", s.KnownChildSensitiveDataConsents2 = "KnownChildSharePICID", (s = jt = jt || {}).SensitiveDataProcessing1 = "SensitivePICID", s.SensitiveDataProcessing2 = "SensitiveSICID", s.SensitiveDataProcessing3 = "GeolocationCID", s.SensitiveDataProcessing4 = "RREPInfoCID", s.SensitiveDataProcessing5 = "CommunicationCID", s.SensitiveDataProcessing6 = "GeneticCID", s.SensitiveDataProcessing7 = "BiometricCID", s.SensitiveDataProcessing8 = "HealthCID", s.SensitiveDataProcessing9 = "SexualOrientationCID";
    Yt.prototype.initialiseCssReferences = function() {
        var e, t = "";
        document.getElementById("onetrust-style") ? e = document.getElementById("onetrust-style") : ((e = document.createElement("style")).id = "onetrust-style", S.moduleInitializer.CookieV2CSPEnabled && L.nonce && e.setAttribute("nonce", L.nonce)), G.commonStyles && (t += G.commonStyles), G.bannerGroup && (t += G.bannerGroup.css, S.fp.CookieV2SSR || (t += this.addCustomBannerCSS()), I.bannerCustomCSS) && (t += I.bannerCustomCSS), G.preferenceCenterGroup && (t = (t += G.preferenceCenterGroup.css) + this.addCustomPreferenceCenterCSS()), G.cookieListGroup && !S.fp.CookieV2TrackingTechnologies && (t = (t += G.cookieListGroup.css) + this.addCustomCookieListCSS()), I.cookiePersistentLogo && !I.cookiePersistentLogo.includes("ot_guard_logo.svg") && (t += ".ot-floating-button__front{background-image:url('" + y.updateCorrectUrl(I.cookiePersistentLogo) + "')}"), this.processedCSS = t, A.ignoreInjectingHtmlCss || (e.textContent = t, _(document.head).append(e))
    }, Yt.prototype.setButonColor = function() {
        var e, t = I.pcButtonColor,
            o = I.pcButtonTextColor,
            n = I.pcLegIntButtonColor,
            r = I.pcLegIntButtonTextColor,
            i = "";
        return (t || o) && (e = A.pcName === ot ? "#onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Category_Item + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk.ot-leg-opt-out " + P.P_Li_Hdr + "{\n                    border-color: " + t + ";\n                }" : "", i = "#onetrust-consent-sdk #onetrust-pc-sdk\n            button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not([aria-expanded]):not(.ot-link-btn),\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn {\n                " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (o ? "color: " + o + ";" : "") + "\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk ." + P.P_Active_Menu + " {\n                " + (t ? "border-color: " + t + ";" : "") + "\n            }\n            " + e + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-remove-objection-handler{\n                background-color: transparent;\n                border: 1px solid transparent;\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn {\n                " + (n ? "background-color: " + n + ";" : "") + "\n                " + (r ? "color: " + r + "; border-color: " + r + ";" : "") + "\n            }"), i
    }, Yt.prototype.setFocusBorderColor = function() {
        var e = "",
            t = I.PCFocusBorderColor;
        return t && (e += '\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-tgl input:focus + .ot-switch, .ot-switch .ot-switch-nob, .ot-switch .ot-switch-nob:before,\n            #onetrust-pc-sdk .ot-checkbox input[type="checkbox"]:focus + label::before,\n            #onetrust-pc-sdk .ot-chkbox input[type="checkbox"]:focus + label::before {\n                outline-color: ' + t + ";\n                outline-width: 1px;\n            }\n            #onetrust-pc-sdk .ot-host-item > button:focus, #onetrust-pc-sdk .ot-ven-item > button:focus {\n                border: 1px solid " + t + ";\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-vlst-cntr > a:focus {\n               outline: 1px solid " + t + ";\n            }"), e
    }, Yt.prototype.setCloseIconColor = function() {
        var e = "";
        return I.PCCloseButtonType === Se.Link && (e += "#onetrust-pc-sdk.ot-close-btn-link .ot-close-icon {color: " + I.PCContinueColor + "}"), e
    }, Yt.prototype.setTabLayoutStyles = function() {
        var e = "",
            t = I.pcMenuColor,
            o = I.pcMenuHighLightColor;
        return A.pcName === it && (t && (e += "#onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {\n                    background-color: " + t + "\n                }"), o) && (e += "#onetrust-consent-sdk #onetrust-pc-sdk ." + P.P_Active_Menu + " {\n                    background-color: " + o + "\n                }"), e
    }, Yt.prototype.setFocusIfTemplateUpgrade = function() {
        var e = "",
            t = I.PCFocusBorderColor;
        return !I.PCTemplateUpgrade && t && (e += '\n            #onetrust-pc-sdk input[type="checkbox"]:focus + .accordion-header,\n            #onetrust-pc-sdk .category-item .ot-switch.ot-toggle input:focus + .ot-switch-label,\n            #onetrust-pc-sdk .checkbox input:focus + label::after {\n                outline-color: ' + t + ";\n                outline-width: 1px;\n            }"), e
    }, Yt.prototype.setExtLnkUrl = function() {
        var e = "",
            t = y.updateCorrectUrl(I.OTExternalLinkLogo);
        return t && (e += "#onetrust-pc-sdk .ot-vlst-cntr .ot-ext-lnk,  #onetrust-pc-sdk .ot-ven-hdr .ot-ext-lnk{\n                    background-image: url('" + t + "');\n                }\n            "), e
    }, Yt.prototype.setCustomCss = function() {
        var e = "";
        return I.pcCustomCSS && (e += I.pcCustomCSS), e
    };
    var Wt, Jt = Yt;

    function Yt() {
        this.processedCSS = "", this.addCustomBannerCSS = function() {
            var e = I.backgroundColor,
                t = I.buttonColor,
                o = I.textColor,
                n = I.buttonTextColor,
                r = I.bannerMPButtonColor,
                i = I.bannerMPButtonTextColor,
                s = I.bannerAccordionBackgroundColor,
                a = I.BSaveBtnColor,
                l = I.BCategoryContainerColor,
                c = I.BLineBreakColor,
                d = I.BCategoryStyleColor,
                u = I.bannerLinksTextColor,
                p = I.BFocusBorderColor,
                o = "\n        " + (A.bannerName === Xe ? e ? "#onetrust-consent-sdk #onetrust-banner-sdk .ot-sdk-container {\n                    background-color: " + e + ";}" : "" : e ? "#onetrust-consent-sdk #onetrust-banner-sdk {background-color: " + e + ";}" : "") + "\n            " + (o ? "#onetrust-consent-sdk #onetrust-policy-title,\n                    #onetrust-consent-sdk #onetrust-policy-text,\n                    #onetrust-consent-sdk .ot-b-addl-desc,\n                    #onetrust-consent-sdk .ot-dpd-desc,\n                    #onetrust-consent-sdk .ot-dpd-title,\n                    #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,\n                    #onetrust-banner-sdk .ot-cat-header,\n                    #onetrust-banner-sdk .ot-optout-signal\n                    {\n                        color: " + o + ";\n                    }" : "") + "\n            " + (s ? "#onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {\n                    background-color: " + s + ";}" : "") + "\n            " + (u ? " #onetrust-consent-sdk #onetrust-banner-sdk a[href],\n                    #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,\n                    #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn\n                        {\n                            color: " + u + ";\n                        }" : "");
            return (t || n) && (o += "#onetrust-consent-sdk #onetrust-accept-btn-handler,\n                         #onetrust-banner-sdk #onetrust-reject-all-handler {\n                            " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (n ? "color: " + n + ";" : "") + "\n            }"), p && (o += "\n            #onetrust-consent-sdk #onetrust-banner-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-banner-sdk:focus {\n               outline-color: " + p + ";\n               outline-width: 1px;\n            }"), (i || r) && (o += "\n            #onetrust-consent-sdk #onetrust-pc-btn-handler,\n            #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {\n                " + (i ? "color: " + i + "; border-color: " + i + ";" : "") + "\n                background-color:\n                " + (r && !I.BannerSettingsButtonDisplayLink ? r : e) + ";\n            }"), A.bannerName === Ze && (r = i = t = u = s = void 0, d && (i = "background-color: " + d + ";", r = "border-color: " + d + ";"), p && (o += "\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-tgl input:focus+.ot-switch .ot-switch-nob,\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-chkbox input:focus + label::before {\n                    outline-color: " + p + ";\n                    outline-width: 1px;\n                }"), o += "#onetrust-banner-sdk .ot-bnr-save-handler {" + (s = a ? "color: " + n + ";border-color: " + n + ";background-color: " + a + ";" : s) + "}#onetrust-banner-sdk .ot-cat-lst {" + (u = l ? "background-color: " + l + ";" : u) + "}#onetrust-banner-sdk .ot-cat-bdr {" + (t = c ? "border-color: " + c + ";" : t) + "}#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob:before,#onetrust-banner-sdk .ot-chkbox input:checked~label::before {" + i + "}#onetrust-banner-sdk .ot-chkbox label::before,#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob {" + r + "}#onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link {background: inherit}"), I.BCloseButtonType === Se.Link && (o += "#onetrust-banner-sdk.ot-close-btn-link .banner-close-button {color: " + I.BContinueColor + "}"), o
        }, this.addCustomPreferenceCenterCSS = function() {
            var e = I.pcBackgroundColor,
                t = I.pcTextColor,
                o = I.pcLinksTextColor,
                n = I.PCenterEnableAccordion,
                r = I.pcAccordionBackgroundColor,
                e = "\n            " + (e ? (A.pcName === ot ? "#onetrust-consent-sdk #onetrust-pc-sdk .group-parent-container,\n                        #onetrust-consent-sdk #onetrust-pc-sdk .manage-pc-container,\n                        #onetrust-pc-sdk " + P.P_Vendor_List : "#onetrust-consent-sdk #onetrust-pc-sdk") + ",\n                #onetrust-consent-sdk " + P.P_Search_Cntr + ",\n                " + (n && A.pcName === ot ? "#onetrust-consent-sdk #onetrust-pc-sdk .ot-accordion-layout" + P.P_Category_Item : "#onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle") + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Tab_Grp_Hdr + " .checkbox,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Title + ":after\n                " + (S.isV2Template ? ",#onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,\n                        #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,\n                        #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Triangle : "") + " {\n                    background-color: " + e + ";\n                }\n               " : "") + "\n            " + (t ? "#onetrust-consent-sdk #onetrust-pc-sdk h3,\n                #onetrust-consent-sdk #onetrust-pc-sdk h4,\n                #onetrust-consent-sdk #onetrust-pc-sdk h5,\n                #onetrust-consent-sdk #onetrust-pc-sdk h6,\n                #onetrust-consent-sdk #onetrust-pc-sdk p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Vendor_Container + " " + P.P_Ven_Opts + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Policy_Txt + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Li_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Leg_Select_All + " span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Host_Cntr + " " + P.P_Host_Info + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Fltr_Modal + " #modal-header,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Vendor_List + " " + P.P_Select_Cntr + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Vendor_List + " " + P.P_Vendor_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Vendor_List + " .back-btn-handler p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Vendor_List + " " + P.P_Ven_Name + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Vendor_List + " " + P.P_Vendor_Container + " .consent-category,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-optout-signal\n                {\n                    color: " + t + ";\n                }" : "") + "\n            " + (o ? " #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .ot-pgph-link,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler + a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Ven_Link + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Ven_Leg_Claim + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Host_Cntr + " " + P.P_Host_Title + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Host_Cntr + " " + P.P_Acc_Header + " " + P.P_Host_View_Cookies + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Host_Cntr + " " + P.P_Host_Info + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Content + " " + P.P_Policy_Txt + " .ot-link-btn,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info a\n                    {\n                        color: " + o + ";\n                    }" : "") + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler:hover { text-decoration: underline;}\n            " + (n && r ? "#onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Acc_Container + P.P_Acc_Txt + ",\n            #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Acc_Txt + " " + P.P_Subgrp_Tgl_Cntr + " .ot-switch.ot-toggle\n             {\n                background-color: " + r + ";\n            }" : "") + "\n            " + (r ? " #onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Host_Cntr + " " + P.P_Host_Info + ",\n                    " + (S.isV2Template ? "#onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Acc_Txt + " .ot-ven-dets" : "#onetrust-consent-sdk #onetrust-pc-sdk " + P.P_Acc_Txt + " " + P.P_Ven_Opts) + "\n                            {\n                                background-color: " + r + ";\n                            }" : "") + "\n        ";
            return (e += Wt.setButonColor()) + Wt.setFocusBorderColor() + Wt.setCloseIconColor() + Wt.setTabLayoutStyles() + Wt.setTabLayoutStyles() + Wt.setFocusIfTemplateUpgrade() + Wt.setExtLnkUrl() + Wt.setCustomCss()
        }, this.addCustomCookieListCSS = function() {
            var e = I.CookiesV2NewCookiePolicy ? "-v2.ot-sdk-cookie-policy" : "",
                e = "\n                " + (I.cookieListPrimaryColor ? "\n                    #ot-sdk-cookie-policy" + e + " h5,\n                    #ot-sdk-cookie-policy" + e + " h6,\n                    #ot-sdk-cookie-policy" + e + " li,\n                    #ot-sdk-cookie-policy" + e + " p,\n                    #ot-sdk-cookie-policy" + e + " a,\n                    #ot-sdk-cookie-policy" + e + " span,\n                    #ot-sdk-cookie-policy" + e + " td,\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-description {\n                        color: " + I.cookieListPrimaryColor + ";\n                    }" : "") + "\n                    " + (I.cookieListTableHeaderColor ? "#ot-sdk-cookie-policy" + e + " th {\n                        color: " + I.cookieListTableHeaderColor + ";\n                    }" : "") + "\n                    " + (I.cookieListGroupNameColor ? "#ot-sdk-cookie-policy" + e + " .ot-sdk-cookie-policy-group {\n                        color: " + I.cookieListGroupNameColor + ";\n                    }" : "") + "\n                    " + (I.cookieListTitleColor ? "\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-title {\n                            color: " + I.cookieListTitleColor + ";\n                        }\n                    " : "") + "\n            " + (e && I.CookieListTableHeaderBackgroundColor ? "\n                    #ot-sdk-cookie-policy" + e + " table th {\n                            background-color: " + I.CookieListTableHeaderBackgroundColor + ";\n                        }\n                    " : "") + "\n            ";
            return I.cookieListCustomCss && (e += I.cookieListCustomCss), e
        }
    }
    $t.prototype.getAllowAllButton = function() {
        return _("#onetrust-pc-sdk #accept-recommended-btn-handler")
    }, $t.prototype.getSelectedVendors = function() {
        return _("#onetrust-pc-sdk " + P.P_Tgl_Cntr + " .ot-checkbox input:checked")
    };
    var Xt, Qt = $t;

    function $t() {}
    to.prototype.isIabCookieValid = function() {
        var e = null;
        return null !== (e = A.isIab2orv2Template ? k.getCookie("eupubconsent-v2") : e)
    }, to.prototype.iabTypeIsChanged = function() {
        this.isIabCookieValid() || (k.removeAlertBox(), k.removeIab1())
    }, to.prototype.initializeIABModule = function() {
        return u(this, void 0, void 0, function() {
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        return I.IsIabEnabled ? (S.moduleInitializer.otIABModuleData = window.otIabModule, h.setIabData(), [4, h.populateVendorListTCF()]) : [3, 2];
                    case 1:
                        return e.sent(), h.isIABCrossConsentEnabled() || this.iabTypeIsChanged(), h.populateIABCookies(), I.UseGoogleVendors && this.removeInActiveAddtlVendors(), [3, 3];
                    case 2:
                        k.removeIab1(), e.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, to.prototype.removeInActiveAddtlVendors = function() {
        var e, t = I.OverridenGoogleVendors;
        for (e in L.addtlVendorsList) t && t[e] && !t[e].active && delete L.addtlVendorsList[e]
    }, to.prototype.getIABConsentData = function() {
        var e = L.oneTrustIABConsent,
            t = h.iabStringSDK().tcString(),
            o = (L.tcModel.unsetAllPurposeConsents(), L.tcModel.unsetAllVendorConsents(), L.tcModel.unsetAllVendorLegitimateInterests(), L.tcModel.unsetAllSpecialFeatureOptins(), L.tcModel.unsetAllPurposeLegitimateInterests(), L.tcModel.publisherConsents.empty(), L.tcModel.publisherLegitimateInterests.empty(), L.tcModel.purposeConsents.set(b.getActiveIdArray(e.purpose)), L.tcModel.publisherConsents.set(b.getActiveIdArray(e.purpose)), A.legIntSettings.PAllowLI ? b.getActiveIdArray(e.legimateInterest) : []),
            o = (L.tcModel.purposeLegitimateInterests.set(o), L.tcModel.publisherLegitimateInterests.set(o), L.tcModel.vendorConsents.set(b.getActiveIdArray(b.distinctArray(e.vendors))), A.legIntSettings.PAllowLI && !o.length && (e.legIntVendors = []), L.tcModel.vendorLegitimateInterests.set(b.getActiveIdArray(b.distinctArray(e.legIntVendors))), L.tcModel.specialFeatureOptins.set(b.getActiveIdArray(e.specialFeatures)), new Date),
            e = new Date(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate(), 0, 0, 0),
            o = (L.tcModel.lastUpdated = e, L.tcModel.created = e, t.encode(L.tcModel));
        return L.cmpApi.update(o, !1), o
    }, to.prototype.decodeTCString = function(e) {
        return h.iabStringSDK().tcString().decode(e)
    }, to.prototype.getVendorConsentsRequestV2 = function(e) {
        var o;
        return window.__tcfapi("getInAppTCData", 2, function(e, t) {
            o = [e, t]
        }), e.apply(this, o)
    }, to.prototype.getPingRequestForTcf = function(e) {
        var t;
        return window.__tcfapi("ping", 2, function(e) {
            t = [e]
        }), e.apply(this, t)
    }, to.prototype.populateVendorAndPurposeFromCookieData = function() {
        var n = L.oneTrustIABConsent,
            e = Zt.decodeTCString(n.IABCookieValue),
            t = T.GroupTypes,
            r = {},
            i = {},
            s = (A.iabGrps.forEach(function(e) {
                e.Type === t.Pur ? r[A.iabGrpIdMap[e.CustomGroupId]] = e : e.Type === t.Spl_Ft && (i[A.iabGrpIdMap[e.CustomGroupId]] = e)
            }), []);
        this.syncVendorConsent(e), s = [], e.vendorLegitimateInterests.forEach(function(e, t) {
            var o = e;
            L.vendorsSetting[t] && L.vendorsSetting[t].legInt || !e || (s.push(t), o = !1), n.legIntVendors.push(t + ":" + o)
        }), e.vendorLegitimateInterests.unset(s), s = [], e.purposeConsents.forEach(function(e, o) {
            var t = e,
                e = (!(r[o] && r[o].HasConsentOptOut) && e && (s.push(o), t = !1), b.findIndex(n.purpose, function(e, t) {
                    return e.split(":")[0] === o.toString()
                })); - 1 === e ? n.purpose.push(o + ":" + t) : n.purpose[e] = o + ":" + t
        }), e.purposeConsents.unset(s), e.publisherConsents.unset(s), s = [], e.specialFeatureOptins.forEach(function(e, o) {
            var t = e,
                e = (!(i[o] && i[o].HasConsentOptOut) && e && (s.push(o), t = !1), b.findIndex(n.specialFeatures, function(e, t) {
                    return e.split(":")[0] === o.toString()
                })); - 1 === e ? n.specialFeatures.push(o + ":" + t) : n.specialFeatures[e] = o + ":" + t
        }), e.specialFeatureOptins.unset(s), this.syncPurAndPubLegInt(e, r), this.syncBundleAndStack(), e.gvl = L.tcModel.gvl, e.isServiceSpecific = !h.isIABCrossConsentEnabled(), L.tcModel = e, h.isAlertBoxClosedAndValid() ? L.cmpApi.update(n.IABCookieValue, !1) : h.resetTCModel()
    }, to.prototype.syncVendorConsent = function(e) {
        var n = [],
            r = L.oneTrustIABConsent;
        e.vendorConsents.forEach(function(e, t) {
            var o = e;
            L.vendorsSetting[t] && L.vendorsSetting[t].consent || !e || (n.push(t), o = !1), r.vendors.push(t + ":" + o)
        }), e.vendorConsents.unset(n)
    }, to.prototype.syncPurAndPubLegInt = function(e, n) {
        var r = [],
            i = L.oneTrustIABConsent;
        e.purposeLegitimateInterests.forEach(function(e, o) {
            var t = e,
                e = (!(n[o] && n[o].HasLegIntOptOut && A.legIntSettings.PAllowLI) && e && (r.push(o), t = !1), b.findIndex(i.legimateInterest, function(e, t) {
                    return e.split(":")[0] === o.toString()
                })); - 1 === e ? i.legimateInterest.push(o + ":" + t) : i.legimateInterest[e] = o + ":" + t
        }), e.purposeLegitimateInterests.unset(r), e.publisherLegitimateInterests.unset(r)
    }, to.prototype.syncBundleAndStack = function() {
        var e = k.readCookieParam(v.OPTANON_CONSENT, "groups"),
            n = (L.groupsConsent = b.strToArr(e), T.GroupTypes);
        I.Groups.forEach(function(t) {
            var e, o;
            t.Type !== n.Bundle && t.Type !== n.Stack || (o = y.isBundleOrStackActive(t), e = b.findIndex(L.groupsConsent, function(e) {
                return e.split(":")[0] === t.CustomGroupId
            }), o = t.CustomGroupId + ":" + Number(o), -1 < e ? L.groupsConsent[e] = o : L.groupsConsent.push(o))
        }), k.writeCookieParam(v.OPTANON_CONSENT, "groups", L.groupsConsent.join(","))
    }, to.prototype.populateGoogleConsent = function() {
        var e;
        I.UseGoogleVendors && (e = k.getCookie(v.ADDITIONAL_CONSENT_STRING)) && (L.isAddtlConsent = !0, L.addtlVendors.vendorConsent = e.replace(L.addtlConsentVersion, "").split("."))
    }, to.prototype.isInitIABCookieData = function(e) {
        return "init" === e || h.needReconsent()
    }, to.prototype.updateFromGlobalConsent = function(e) {
        var t = L.oneTrustIABConsent;
        t.IABCookieValue = e, t.purpose = t.purpose || [], t.specialFeatures = t.specialFeatures || [], t.legIntVendors = [], t.legimateInterest = t.legimateInterest || [], t.vendors = [], Zt.populateVendorAndPurposeFromCookieData(), k.setCookie(v.EU_PUB_CONSENT, "", -1)
    };
    var Zt, eo = to;

    function to() {}
    no.prototype.loadBanner = function() {
        S.moduleInitializer.ScriptDynamicLoadEnabled ? "complete" === document.readyState ? _(window).trigger("otloadbanner") : window.addEventListener("load", function(e) {
            _(window).trigger("otloadbanner")
        }) : "loading" !== document.readyState ? _(window).trigger("otloadbanner") : window.addEventListener("DOMContentLoaded", function(e) {
            _(window).trigger("otloadbanner")
        }), A.pubDomainData.IsBannerLoaded = !0
    }, no.prototype.OnConsentChanged = function(e) {
        var t = e.toString();
        g.consentChangedEventMap[t] || (g.consentChangedEventMap[t] = !0, window.addEventListener("consent.onetrust", e))
    }, no.prototype.triggerGoogleAnalyticsEvent = function(e, t, o, n) {
        var r = !1;
        S.moduleInitializer.GATrackToggle && ("AS" === S.moduleInitializer.GATrackAssignedCategory || "" === S.moduleInitializer.GATrackAssignedCategory || window.OnetrustActiveGroups.includes("," + S.moduleInitializer.GATrackAssignedCategory + ",")) && (r = !0), !A.ignoreGoogleAnlyticsCall && r && (void 0 !== window._gaq && window._gaq.push(["_trackEvent", e, t, o, n]), "function" == typeof window.ga && window.ga("send", "event", e, t, o, n), r = window[A.otDataLayer.name], !A.otDataLayer.ignore) && void 0 !== r && r && r.constructor === Array && ("function" == typeof window.gtag ? window.gtag("event", "trackOptanonEvent", {
            optanonCategory: e,
            optanonAction: t,
            optanonLabel: o,
            optanonValue: n
        }) : r.push({
            event: "trackOptanonEvent",
            optanonCategory: e,
            optanonAction: t,
            optanonLabel: o,
            optanonValue: n
        }))
    }, no.prototype.setAlertBoxClosed = function(e) {
        var t = (new Date).toISOString(),
            e = (e ? k.setCookie(v.ALERT_BOX_CLOSED, t, I.ReconsentFrequencyDays) : k.setCookie(v.ALERT_BOX_CLOSED, t, 0), _(".onetrust-pc-dark-filter").el[0]);
        e && "none" !== getComputedStyle(e).getPropertyValue("display") && _(".onetrust-pc-dark-filter").fadeOut(400)
    }, no.prototype.updateConsentFromCookie = function(t) {
        return u(this, void 0, void 0, function() {
            return p(this, function(e) {
                return t ? (Zt.isInitIABCookieData(t) || Zt.updateFromGlobalConsent(t), "init" === t && (k.removeIab1(), h.isAlertBoxClosedAndValid() && h.resetTCModel(), k.removeAlertBox())) : (h.resetTCModel(), h.updateCrossConsentCookie(!1), h.setIABCookieData()), g.assetPromise.then(function() {
                    g.loadBanner()
                }), [2]
            })
        })
    };
    var g, oo = no;

    function no() {
        var t = this;
        this.consentChangedEventMap = {}, this.assetResolve = null, this.assetPromise = new Promise(function(e) {
            t.assetResolve = e
        })
    }
    var ro, io = "groups",
        so = "hosts",
        ao = "genVendors",
        lo = "vs",
        co = (uo.prototype.writeHstParam = function(e, t) {
            k.writeCookieParam(e, "hosts", b.arrToStr((t = void 0 === t ? null : t) || L.hostsConsent))
        }, uo.prototype.writeGenVenCookieParam = function(e) {
            var t = I.GeneralVendors,
                o = L.genVendorsConsent,
                n = "";
            t.forEach(function(e) {
                n += e.VendorCustomId + ":" + (o[e.VendorCustomId] ? "1" : "0") + ","
            }), k.writeCookieParam(e, "genVendors", n)
        }, uo.prototype.writeVSConsentCookieParam = function(e) {
            var o = "";
            L.vsConsent.forEach(function(e, t) {
                return o += t + ":" + (e ? "1" : "0") + ","
            }), o = o.slice(0, -1), k.writeCookieParam(e, lo, o)
        }, uo.prototype.updateGroupsInCookie = function(e, t) {
            k.writeCookieParam(e, "groups", b.arrToStr((t = void 0 === t ? null : t) || L.groupsConsent))
        }, uo.prototype.writeGrpParam = function(e, t) {
            this.updateGroupsInCookie(e, t = void 0 === t ? null : t), I.IsIabEnabled && h.isAlertBoxClosedAndValid() && this.insertOrUpdateIabCookies()
        }, uo.prototype.insertOrUpdateIabCookies = function() {
            var e, t = L.oneTrustIABConsent;
            t.purpose && t.vendors && (L.isAddtlConsent = I.UseGoogleVendors, t.IABCookieValue = Zt.getIABConsentData(), e = I.ReconsentFrequencyDays, h.isIABCrossConsentEnabled() ? h.setIAB3rdPartyCookie(v.EU_CONSENT, t.IABCookieValue, e, !1) : (k.setCookie(v.EU_PUB_CONSENT, t.IABCookieValue, e), I.UseGoogleVendors && k.setCookie(v.ADDITIONAL_CONSENT_STRING, "" + L.addtlConsentVersion + L.addtlVendors.vendorConsent.join("."), e)))
        }, uo);

    function uo() {}
    go.prototype.initGenVendorConsent = function() {
        var e, t, n = this;
        I.GenVenOptOut ? (e = A.consentableGrps, (t = k.readCookieParam(v.OPTANON_CONSENT, "genVendors")) ? (L.genVendorsConsent = {}, t.split(",").forEach(function(e) {
            e && "1" === (e = e.split(":"))[1] && (L.genVendorsConsent[e[0]] = !0)
        })) : (L.genVendorsConsent = {}, e.forEach(function(e) {
            var o = L.syncRequired ? C.checkIfGroupHasConsent(e) : C.checkIsActiveByDefault(e);
            e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function(e) {
                var t = n.isGenVenPartOfAlwaysActiveGroup(e);
                L.genVendorsConsent[e] = t || o
            })
        }))) : (L.genVendorsConsent = {}, ro.writeGenVenCookieParam(v.OPTANON_CONSENT))
    }, go.prototype.populateGenVendorLists = function() {
        A.consentableGrps.forEach(function(e) {
            e.GeneralVendorsIds && (C.isAlwaysActiveGroup(e) ? e.GeneralVendorsIds.forEach(function(e) {
                L.alwaysActiveGenVendors.push(e)
            }) : C.isOptInGrp(e) ? e.GeneralVendorsIds.forEach(function(e) {
                L.optInGenVendors.push(e)
            }) : C.isSoftOptInGrp(e) && e.GeneralVendorsIds.forEach(function(e) {
                L.optInGenVendors.includes(e) || L.softOptInGenVendors.push(e)
            }))
        })
    }, go.prototype.updateGenVendorStatus = function(e, t) {
        L.genVendorsConsent[e] = t || this.isGenVenPartOfAlwaysActiveGroup(e)
    }, go.prototype.isGenVenPartOfAlwaysActiveGroup = function(e) {
        return L.alwaysActiveGenVendors.includes(e)
    };
    var po, ho = go;

    function go() {}
    fo.prototype.synchroniseCookieGroupData = function(e) {
        var t = k.readCookieParam(v.OPTANON_CONSENT, "groups"),
            n = b.strToArr(t),
            r = b.strToArr(t.replace(/:0|:1/g, "")),
            t = h.needReconsent(),
            i = !1,
            s = !1,
            a = T.GroupTypes;
        e.forEach(function(e) {
            var t, o = e.CustomGroupId;
            e.Type !== a.Bundle && e.Type !== a.Stack && (-1 === b.indexOf(r, o) ? (i = !0, t = C.checkIsActiveByDefault(e), s = !0, n.push(o + (t ? ":1" : ":0"))) : A.gpcEnabled && e.IsGpcEnabled && A.gpcValueChanged && -1 < (t = n.indexOf(o + ":1")) && (s = !0, L.gpcConsentTxn = !0, n[t] = o + ":0"))
        }), s = this.updateConsentForBundleGrps(e, n, r, s, t), (s = this.removeRedundantGrpsFromCookie(n, t, s)) && (L.fireOnetrustGrp = !0, ro.updateGroupsInCookie(v.OPTANON_CONSENT, n), L.syncRequired) && i && k.removeAlertBox()
    }, fo.prototype.removeRedundantGrpsFromCookie = function(e, o, t) {
        for (var n = e.length, r = t; n--;) ! function() {
            var t = e[n].replace(/:0|:1/g, "");
            I.Groups.some(function(e) {
                return (!o || e.Type !== T.GroupTypes.Stack) && (e.CustomGroupId === t || e.SubGroups.some(function(e) {
                    return e.CustomGroupId === t
                }))
            }) || (r = !0, e.splice(n, 1))
        }();
        return r
    }, fo.prototype.updateConsentForBundleGrps = function(e, n, r, t, i) {
        var s = t,
            a = T.GroupTypes;
        return e.forEach(function(e) {
            var t = e.Type === a.Bundle || e.Type === a.Stack,
                o = e.CustomGroupId;
            t && (-1 === b.indexOf(r, o) ? (t = y.isBundleOrStackActive(e, n), s = !0, n.push(o + (t ? ":1" : ":0"))) : (i && "false" === h.getIABCrossConsentflagData() || A.gpcEnabled && A.gpcValueChanged || L.syncRequired) && (t = y.isBundleOrStackActive(e, n), -1 < (e = n.indexOf(o + ":" + (t ? "0" : "1")))) && (s = !0, n[e] = o + (t ? ":1" : ":0")))
        }), s
    }, fo.prototype.groupHasConsent = function(t) {
        var e = b.strToArr(k.readCookieParam(v.OPTANON_CONSENT, "groups")),
            o = b.findIndex(e, function(e) {
                return e.split(":")[0] === t.CustomGroupId
            });
        return -1 < o && "1" === e[o].split(":")[1]
    }, fo.prototype.synchroniseCookieHostData = function() {
        for (var n = this, e = k.readCookieParam(v.OPTANON_CONSENT, "hosts"), r = b.strToArr(e), i = b.strToArr(e.replace(/:0|:1/g, "")), s = !1, o = (I.Groups.forEach(function(e) {
                F(e.SubGroups, [e]).forEach(function(o) {
                    o.Hosts.length && o.Hosts.forEach(function(e) {
                        var t; - 1 === b.indexOf(i, e.HostId) && (s = !0, t = L.syncRequired ? n.groupHasConsent(o) : C.checkIsActiveByDefault(o), r.push(e.HostId + (t ? ":1" : ":0")))
                    })
                })
            }), r.length); o--;) ! function() {
            var t = r[o].replace(/:0|:1/g, "");
            I.Groups.some(function(e) {
                return F(e.SubGroups, [e]).some(function(e) {
                    return e.Hosts.some(function(e) {
                        return e.HostId === t
                    })
                })
            }) || (s = !0, r.splice(o, 1))
        }();
        s && (L.fireOnetrustGrp = !0, ro.writeHstParam(v.OPTANON_CONSENT, r))
    }, fo.prototype.toggleGroupHosts = function(e, t) {
        var o = this;
        e.Hosts.forEach(function(e) {
            o.updateHostStatus(e, t)
        })
    }, fo.prototype.toggleGroupGenVendors = function(e, t) {
        e.GeneralVendorsIds.forEach(function(e) {
            po.updateGenVendorStatus(e, t)
        })
    }, fo.prototype.updateHostStatus = function(t, e) {
        var o = b.findIndex(L.hostsConsent, function(e) {
            return !t.isActive && t.HostId === e.replace(/:0|:1/g, "")
        }); - 1 < o && (e = e || this.isHostPartOfAlwaysActiveGroup(t.HostId), L.hostsConsent[o] = t.HostId + ":" + (e ? "1" : "0"))
    }, fo.prototype.isHostPartOfAlwaysActiveGroup = function(e) {
        return L.oneTrustAlwaysActiveHosts.includes(e)
    };
    var Co, yo = fo;

    function fo() {}
    var mo, vo = "OneTrust Cookie Consent",
        So = "Banner Auto Close",
        ko = "Banner Close Button",
        bo = "Banner - Continue without Accepting",
        Po = "Banner - Confirm",
        To = "Preferences Close Button",
        Ao = "Preference Center Opened From Banner",
        Io = "Preference Center Opened From Button",
        Lo = "Preference Center Opened From Function",
        _o = "Preferences Save Settings",
        Eo = "Vendors List Opened From Function",
        Vo = "Floating Cookie Settings Open Button",
        Oo = "Floating Cookie Settings Close Button",
        Bo = "Preferences Toggle On",
        wo = "Preferences Toggle Off",
        Go = "General Vendor Toggle On",
        xo = "General Vendor Toggle Off",
        No = "Host Toggle On",
        Do = "Host Toggle Off",
        Ho = "Preferences Legitimate Interest Objection",
        Ro = "Preferences Legitimate Interest Remove Objection",
        Fo = "IAB Vendor Toggle ON",
        Mo = "IAB Vendor Toggle Off",
        qo = "IAB Vendor Legitimate Interest Objection",
        Uo = "IAB Vendor Legitimate Interest Remove Objection",
        jo = "Vendor Service Toggle On",
        zo = "Vendor Service Toggle Off",
        Ko = (Wo.prototype.setBannerFocus = function() {
            var e = Array.prototype.slice.call(_("#onetrust-banner-sdk .onetrust-vendors-list-handler").el),
                t = Array.prototype.slice.call(_('#onetrust-banner-sdk #onetrust-policy-text [href],#onetrust-banner-sdk #onetrust-policy-text button,#onetrust-banner-sdk #onetrust-policy-text [tabindex]:not([tabindex="-1"])').el),
                o = Array.prototype.slice.call(_("#onetrust-banner-sdk .ot-bnr-save-handler").el),
                n = Array.prototype.slice.call(_("#onetrust-banner-sdk #onetrust-pc-btn-handler").el),
                r = Array.prototype.concat.call(Array.prototype.slice.call(_("#onetrust-banner-sdk .category-switch-handler:not([disabled])").el), Array.prototype.slice.call(_("#onetrust-banner-sdk .ot-cat-lst button").el), e),
                r = Array.prototype.concat.call(t, r),
                i = Array.prototype.slice.call(_("#onetrust-banner-sdk .onetrust-close-btn-handler").el),
                e = (A.bannerName === Xe && (r = Array.prototype.concat.call(e, t)), Array.prototype.slice.call(_("#onetrust-banner-sdk #onetrust-accept-btn-handler").el)),
                t = Array.prototype.slice.call(_("#onetrust-banner-sdk #onetrust-reject-all-handler").el),
                o = Array.prototype.concat.call(o, e, t, n),
                n = ((A.bannerName !== Je || I.IsIabEnabled) && A.bannerName !== We && A.bannerName !== $e || (o = Array.prototype.concat.call(n, t, e)), Array.prototype.slice.call(_("#onetrust-banner-sdk .ot-gv-list-handler").el));
            A.bannerName === Ze ? (r = Array.prototype.concat.call(n, r), o = Array.prototype.slice.call(_("#onetrust-banner-sdk #onetrust-button-group button").el)) : r = Array.prototype.concat.call(r, n), this.bannerEl = Array.prototype.concat.call(Array.prototype.slice.call(_("#onetrust-banner-sdk #onetrust-cookie-btn").el), r, Array.prototype.slice.call(_("#onetrust-banner-sdk .banner-option-input").el), o, Array.prototype.slice.call(_("#onetrust-banner-sdk .ot-bnr-footer-logo a").el), i), this.banner = _("#onetrust-banner-sdk").el[0], (I.BInitialFocus || I.BInitialFocusLinkAndButton || I.ForceConsent) && (I.BInitialFocus ? this.banner : this.bannerEl[0]).focus()
        }, Wo.prototype.handleBannerFocus = function(e, t) {
            var o = e.target,
                n = mo.bannerEl,
                r = n.indexOf(o),
                i = n.length - 1,
                s = null;
            if (this.handleBannerFocusBodyReset(t, r, i)) y.resetFocusToBody();
            else if (this.banner === o) s = this.handleInitialBannerFocus(t, n, i, s);
            else
                for (; !s;) {
                    var a = void 0;
                    0 !== (a = t ? r <= 0 ? n[i] : n[r - 1] : r === i ? n[0] : n[r + 1]).clientHeight || 0 !== a.offsetHeight ? s = a : t ? r-- : r++
                }
            s && (e.preventDefault(), s.focus())
        }, Wo.prototype.handleBannerFocusBodyReset = function(e, t, o) {
            return !(I.ForceConsent || !I.BInitialFocus && !I.BInitialFocusLinkAndButton || !(e && 0 === t || !e && t === o))
        }, Wo.prototype.handleInitialBannerFocus = function(e, t, o, n) {
            return e && I.ForceConsent ? n = t[o] : e || (n = t[0]), n
        }, Wo.prototype.setPCFocus = function(e) {
            if (e && !(e.length <= 0)) {
                for (var t = 0; t < e.length; t++) e[t].setAttribute("tabindex", "0");
                this.setFirstAndLast(e);
                var o = I.ShowPreferenceCenterCloseButton,
                    n = o ? this.getElementForFocus(e, I.PCLayout.Popup ? 2 : 1, !0) : null,
                    r = {
                        preventScroll: !0
                    };
                this.firstItem ? (o ? n : this.firstItem).focus(r) : e[0].focus(), this.firstItem && _(this.firstItem).on("keydown", mo.firstItemHandler), this.lastItem && _(this.lastItem).on("keydown", mo.lastItemHandler)
            }
        }, Wo.prototype.setFirstAndLast = function(e) {
            this.firstItem = this.getElementForFocus(e, 0, !0), this.lastItem = this.firstItem ? this.getElementForFocus(e, e.length - 1, !1) : null
        }, Wo.prototype.setLastItem = function() {
            var e = this.getPCElements(),
                e = this.getElementForFocus(e, e.length - 1, !1);
            e !== this.lastItem && (_(this.lastItem).off("keydown", mo.lastItemHandler), this.lastItem = e, _(e).on("keydown", mo.lastItemHandler))
        }, Wo.prototype.getPCElements = function() {
            var e = "#onetrust-pc-sdk #close-pc-btn-handler,\n            #onetrust-pc-sdk .back-btn-handler,\n            #onetrust-pc-sdk ." + P.P_Active_Menu + ',\n            #onetrust-pc-sdk input,\n            #onetrust-pc-sdk a,\n            #onetrust-pc-sdk [tabindex="0"] button,\n            #onetrust-pc-sdk .save-preference-btn-handler,\n            #onetrust-pc-sdk .ot-pc-refuse-all-handler,\n            #onetrust-pc-sdk #accept-recommended-btn-handler';
            return L.pcLayer === re.CookieList ? e += " ,#onetrust-pc-sdk " + P.P_Content + " .powered-by-logo" : e += ",#onetrust-pc-sdk #vendor-list-save-btn .powered-by-logo", Array.prototype.slice.call(_(e).el)
        }, Wo.prototype.getActiveTab = function() {
            return document.querySelector('#onetrust-pc-sdk .category-menu-switch-handler[tabindex="0"]')
        }, Wo.prototype.getElementForFocus = function(e, t, o) {
            for (var n = e[t]; o ? n && null === n.offsetParent && t < e.length - 1 : n && null === n.offsetParent && 0 < t;) n = e[t], o ? ++t : --t;
            return n
        }, Wo.prototype.handleFocusTabLayoutExceptClosePC = function(e) {
            var t = "close-pc-btn-handler" === e.target.id && (13 === e.keyCode || 32 === e.keyCode || "Enter" === e.code || "Space" === e.code);
            I.PCLayout.Tab && L.pcLayer === re.PrefCenterHome && !t && (t = mo.getActiveTab()) && (e.preventDefault(), t.focus())
        }, Wo.prototype.firstItemHandler = function(e) {
            var t = document.getElementById("onetrust-banner-sdk");
            9 === e.keyCode && e.shiftKey && mo.firstItem !== t ? (e.preventDefault(), mo.lastItem.focus()) : I.ShowPreferenceCenterCloseButton ? this.handleFocusTabLayoutExceptClosePC(e) : !I.PCLayout.Tab || L.pcLayer !== re.PrefCenterHome || 37 !== e.keyCode && 39 !== e.keyCode || (t = mo.getActiveTab()) && _(t).on("keydown", mo.firstItemHandler)
        }, Wo.prototype.lastItemHandler = function(e) {
            9 !== e.keyCode || e.shiftKey || (e.preventDefault(), e = L.pcLayer === re.VendorList || L.pcLayer === re.CookieList, (I.PCLayout.Tab && L.isPCVisible && !I.ShowPreferenceCenterCloseButton && !e ? mo.getActiveTab() : mo.firstItem).focus())
        }, Wo);

    function Wo() {
        this.bannerEl = []
    }
    Yo.prototype.getAllGroupElements = function() {
        return document.querySelectorAll("div#onetrust-pc-sdk " + P.P_Category_Grp + " " + P.P_Category_Item + ":not(.ot-vnd-item)")
    }, Yo.prototype.toggleGrpElements = function(e, t, o, n) {
        void 0 === n && (n = !1);
        for (var r = (e = A.pcName === it && I.PCTemplateUpgrade ? document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")) : e).querySelectorAll('input[class*="category-switch-handler"]'), i = 0; i < r.length; i++) {
            var s = r[i].getAttribute("id").includes("leg-out");
            n && s || (b.setCheckedAttribute(null, r[i], o), r[i] && I.PCShowConsentLabels && (r[i].parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? I.PCActiveText : I.PCInactiveText))
        }
        A.legIntSettings.PAllowLI && A.legIntSettings.PShowLegIntBtn && t.Type === T.GroupTypes.Pur && t.HasLegIntOptOut && !n && f.updateLegIntBtnElement(e.querySelector(".ot-leg-btn-container"), o)
    }, Yo.prototype.toogleAllSubGrpElements = function(e, t) {
        var o;
        e.ShowSubgroup ? (o = e.CustomGroupId, o = this.getGroupElementByOptanonGroupId(o.toString()), f.toogleSubGroupElement(o, t, e.IsLegIntToggle)) : this.updateHiddenSubGroupData(e, t)
    }, Yo.prototype.isSubGrpLegIntEnabled = function(e, t) {
        return A.legIntSettings.PAllowLI && A.legIntSettings.PShowLegIntBtn && e.Type === T.GroupTypes.Pur && e.HasLegIntOptOut && t.ShowSubgroupToggle
    }, Yo.prototype.toogleSubGroupElement = function(e, t, o, n) {
        void 0 === o && (o = !1), void 0 === n && (n = !1);
        for (var r = (e = A.pcName === it && I.PCTemplateUpgrade ? document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")) : e).querySelectorAll("li" + P.P_Subgrp_li), i = 0; i < r.length; i++) {
            var s = C.getGroupById(r[i].getAttribute("data-optanongroupid")),
                a = s.OptanonGroupId,
                l = C.getParentGroup(s.Parent),
                l = (this.isSubGrpLegIntEnabled(s, l) && o && f.updateLegIntBtnElement(r[i], t), o ? "[id='ot-sub-group-id-" + a + "-leg-out']" : "[id='ot-sub-group-id-" + a + "']"),
                a = r[i].querySelector('input[class*="cookie-subgroup-handler"]' + l);
            b.setCheckedAttribute(null, a, t), a && I.PCShowConsentLabels && (a.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = t ? I.PCActiveText : I.PCInactiveText), n || (s.IsLegIntToggle = o, f.toggleGrpStatus(s, t), s.IsLegIntToggle = !1, Co.toggleGroupHosts(s, t), L.genVenOptOutEnabled && Co.toggleGroupGenVendors(s, t))
        }
    }, Yo.prototype.toggleGrpStatus = function(e, t) {
        var o = e.IsLegIntToggle && e.Type === T.GroupTypes.Pur ? t ? Ro : Ho : t ? Bo : wo;
        g.triggerGoogleAnalyticsEvent(vo, o, e.GroupName + ": " + e.OptanonGroupId), t ? this.updateEnabledGroupData(e) : this.updateDisabledGroupData(e)
    }, Yo.prototype.setInputID = function(e, t, o, n, r) {
        _(e).attr("id", t), _(e).attr("name", t), _(e).data("optanonGroupId", o), b.setCheckedAttribute(null, e, n), _(e).attr("aria-labelledby", r)
    }, Yo.prototype.updateEnabledGroupData = function(e) {
        var t, o; - 1 < vt.indexOf(e.Type) ? this.updateIabGroupData(e, !0) : (t = f.getGroupVariable(), -1 !== (o = b.indexOf(t, e.CustomGroupId + ":0")) && (t[o] = e.CustomGroupId + ":1"))
    }, Yo.prototype.updateDisabledGroupData = function(e) {
        var t, o; - 1 < vt.indexOf(e.Type) ? this.updateIabGroupData(e, !1) : e.Status !== m.ALWAYS_ACTIVE && (t = f.getGroupVariable(), -1 !== (o = b.indexOf(t, e.CustomGroupId + ":1"))) && (t[o] = e.CustomGroupId + ":0")
    }, Yo.prototype.updateIabGroupData = function(e, t) {
        var o;
        e.Type === T.GroupTypes.Spl_Ft ? this.updateIabSpecialFeatureData(e.IabGrpId, t) : (o = e.IsLegIntToggle ? L.vendors.selectedLegInt : L.vendors.selectedPurpose, this.updateIabPurposeData(e.IabGrpId, t, o))
    }, Yo.prototype.isAllSubgroupsDisabled = function(e) {
        return !e.SubGroups.some(function(e) {
            return f.isGroupActive(e)
        })
    }, Yo.prototype.isAllSubgroupsEnabled = function(e) {
        return !e.SubGroups.some(function(e) {
            return f.IsGroupInActive(e)
        })
    }, Yo.prototype.toggleGroupHtmlElement = function(e, t, o) {
        A.legIntSettings.PAllowLI && A.legIntSettings.PShowLegIntBtn && e.Type === T.GroupTypes.Pur && e.HasLegIntOptOut && (e = document.querySelector("[data-el-id=" + t + "]")) && this.updateLegIntBtnElement(e, o);
        e = _("#ot-group-id-" + t).el[0];
        b.setCheckedAttribute(null, e, o), e && I.PCShowConsentLabels && (e.parentElement.querySelector(".ot-label-status").innerHTML = o ? I.PCActiveText : I.PCInactiveText)
    }, Yo.prototype.updateLegIntBtnElement = function(e, t) {
        var o = A.legIntSettings,
            n = e.querySelector(".ot-obj-leg-btn-handler"),
            e = e.querySelector(".ot-remove-objection-handler");
        t ? (n.classList.add("ot-inactive-leg-btn"), n.classList.add("ot-leg-int-enabled"), n.classList.remove("ot-active-leg-btn")) : (n.classList.add("ot-active-leg-btn"), n.classList.remove("ot-inactive-leg-btn"), n.classList.remove("ot-leg-int-enabled")), n.querySelector("span").innerText = t ? o.PObjectLegIntText : o.PObjectionAppliedText, d(e, "display: " + (t ? "none" : "inline-block") + ";", !0)
    }, Yo.prototype.isGroupActive = function(e) {
        e = -1 < vt.indexOf(e.Type) ? -1 !== this.isIabPurposeActive(e) : -1 !== Vt.inArray(e.CustomGroupId + ":1", f.getGroupVariable());
        return e
    }, Yo.prototype.safeFormattedGroupDescription = function(e) {
        return e && e.GroupDescription ? e.GroupDescription.replace(/\r\n/g, "<br>") : ""
    }, Yo.prototype.canInsertForGroup = function(e, t) {
        void 0 === t && (t = !1);
        var o = null != e && void 0 !== e,
            n = k.readCookieParam(v.OPTANON_CONSENT, "groups"),
            r = L.groupsConsent.join(","),
            i = k.readCookieParam(v.OPTANON_CONSENT, "hosts"),
            s = L.hostsConsent.join(",");
        if (t) return !0;
        n === r && i === s || G.ensureHtmlGroupDataInitialised();
        var a = [];
        if (L.showGeneralVendors)
            for (var l = 0, c = Object.entries(L.genVendorsConsent); l < c.length; l++) {
                var d = c[l],
                    u = d[0],
                    d = d[1];
                a.push(u + ":" + (d ? "1" : "0"))
            }
        L.showVendorService && L.vsConsent.forEach(function(e, t) {
            a.push(t + ":" + (e ? "1" : "0"))
        });
        t = L.groupsConsent.concat(L.hostsConsent).concat(a), n = b.contains(t, e + ":1"), r = this.doesHostExist(e), i = this.doesGroupExist(e), s = !1, L.showGeneralVendors ? s = this.doesGenVendorExist(e) : L.showVendorService && (s = this.doesVendorServiceExist(e)), t = !(!r && !s) || n && G.canSoftOptInInsertForGroup(e);
        return !(!o || !(n && t || !i && !r && !s))
    }, Yo.prototype.setAllowAllButton = function() {
        var t = 0,
            e = I.Groups.some(function(e) {
                if (-1 === St.indexOf(e.Type)) return f.IsGroupInActive(e) && t++, e.SubGroups.some(function(e) {
                    return f.IsGroupInActive(e)
                }) && t++, 1 <= t
            }),
            o = Xt.getAllowAllButton();
        return e ? o.show("inline-block") : o.hide(), mo.lastItem && mo.setLastItem(), e
    }, Yo.prototype.isAnyGroupOptedOut = function() {
        for (var e = !1, t = 0, o = I.Groups; t < o.length; t++) {
            var n = o[t];
            if (!0 === f.IsGroupInActive(n)) {
                e = !0;
                break
            }
        }
        return e
    }, Yo.prototype.getGroupVariable = function() {
        return L.groupsConsent
    }, Yo.prototype.IsGroupInActive = function(e) {
        e = -1 < vt.indexOf(e.Type) ? -1 === this.isIabPurposeActive(e) : !(-1 < St.indexOf(e.Type)) && -1 === Vt.inArray(e.CustomGroupId + ":1", f.getGroupVariable());
        return e
    }, Yo.prototype.updateIabPurposeData = function(t, e, o) {
        var n = b.findIndex(o, function(e) {
            return e.split(":")[0] === t
        });
        o[-1 === n ? Number(t) : n] = t + ":" + e
    }, Yo.prototype.updateIabSpecialFeatureData = function(t, e) {
        var o = -1 === (o = b.findIndex(L.vendors.selectedSpecialFeatures, function(e) {
            return e.split(":")[0] === t
        })) ? Number(t) : o;
        L.vendors.selectedSpecialFeatures[o] = t + ":" + e
    }, Yo.prototype.getGroupElementByOptanonGroupId = function(e) {
        return document.querySelector("#onetrust-pc-sdk " + P.P_Category_Grp + " " + P.P_Category_Item + '[data-optanongroupid=\n            "' + e + '"]')
    }, Yo.prototype.updateHiddenSubGroupData = function(e, t) {
        e.SubGroups.forEach(function(e) {
            f.toggleGrpStatus(e, t), Co.toggleGroupHosts(e, t), L.genVenOptOutEnabled && Co.toggleGroupGenVendors(e, t)
        })
    }, Yo.prototype.isIabPurposeActive = function(e) {
        var t = e.Type === T.GroupTypes.Spl_Ft ? L.vendors.selectedSpecialFeatures : e.IsLegIntToggle ? L.vendors.selectedLegInt : L.vendors.selectedPurpose;
        return Vt.inArray(e.IabGrpId + ":true", t)
    }, Yo.prototype.doesGroupExist = function(e) {
        return !!C.getGroupById(e)
    }, Yo.prototype.doesHostExist = function(e) {
        var t = L.hostsConsent;
        return -1 !== t.indexOf(e + ":0") || -1 !== t.indexOf(e + ":1")
    }, Yo.prototype.doesGenVendorExist = function(t) {
        return !!I.GeneralVendors && !!I.GeneralVendors.find(function(e) {
            return e.VendorCustomId === t
        })
    }, Yo.prototype.doesVendorServiceExist = function(e) {
        return L.getVendorsInDomain().has(e)
    };
    var f, Jo = Yo;

    function Yo() {}
    var Xo, Qo, $o = "#onetrust-banner-sdk",
        Zo = ".banner_logo",
        en = "#onetrust-pc-sdk",
        tn = (on.prototype.BannerPushDownHandler = function() {
            this.checkIsBrowserIE11OrBelow() || (Qo.pushPageDown($o), _(window).on("resize", function() {
                "none" !== _($o).css("display") && Qo.pushPageDown($o)
            }))
        }, on.prototype.checkIsBrowserIE11OrBelow = function() {
            var e = window.navigator.userAgent;
            return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/")
        }, on.prototype.addOTCssPropertiesToBody = function(e, t) {
            var o = Qo.getCssData(e, t);
            L.customerStyles.set(e, o), Qo.setStylesOnBody(t), e === Xo.PC && Qo.setStylesOnHtml(t)
        }, on.prototype.removeAddedOTCssStyles = function(e) {
            void 0 === e && (e = Xo.Banner);
            var t = L.customerStyles.get(e);
            t ? (Qo.setStylesOnBody(t.customerBodyCSS), Qo.setStylesOnHtml(t.customerHtmlCSS), L.customerStyles.delete(e)) : 0 < L.customerStyles.size && L.customerStyles.forEach(function(e, t) {
                return Qo.removeAddedOTCssStyles(t)
            })
        }, on.prototype.getCssData = function(e, t) {
            var o, n, r = _("body").el[0],
                i = _("html").el[0],
                s = {},
                a = {},
                e = L.customerStyles.get(e),
                a = e ? (o = e.scriptBodyCSS, n = e.customerBodyCSS, e = e.customerHtmlCSS, r.style.top !== o.top && (n.top = r.style.top), r.style.position !== o.position && (n.position = r.style.position), r.style.overflow !== o.overflow && (n.overflow = r.style.overflow), i.style.overflow !== o.overflow && (e.overflow = i.style.overflow), s = n, e) : (s = {
                    top: r.style.top,
                    position: r.style.position,
                    overflow: r.style.overflow
                }, {
                    overflow: i.style.overflow
                });
            return {
                scriptBodyCSS: t,
                customerBodyCSS: s,
                customerHtmlCSS: a
            }
        }, on.prototype.setStylesOnBody = function(e) {
            var t = _("body").el[0];
            Qo.setStylesOnHtmlElement(t, e)
        }, on.prototype.setStylesOnHtml = function(e) {
            var t = _("html").el[0];
            Qo.setStylesOnHtmlElement(t, {
                overflow: e.overflow
            })
        }, on.prototype.setStylesOnHtmlElement = function(e, t) {
            for (var o = "", n = 0, r = Object.entries(t); n < r.length; n++) {
                var i = r[n],
                    s = i[0],
                    i = i[1];
                i ? o += s + ": " + i + ";" : e.style.removeProperty(s)
            }
            o && d(e, o, !0)
        }, on.prototype.pushPageDown = function(e) {
            var t = _(e).height() + "px",
                e = (_(e).show().css("\n            bottom: auto;\n            position: absolute;\n            top: -" + t + ";\n        "), L.isPCVisible ? Xo.PC : Xo.Banner),
                t = {
                    position: "relative",
                    top: t
                };
            L.isPCVisible && (t.overflow = "hidden"), Qo.addOTCssPropertiesToBody(e, t)
        }, on);

    function on() {}(s = Xo = Xo || {}).Banner = "Banner", s.PC = "PC";
    sn.prototype.showConsentNotice = function() {
        var e, t, o;
        !I.NoBanner || I.ForceConsent ? _(".onetrust-pc-dark-filter").removeClass("ot-hide") : _(".onetrust-pc-dark-filter").addClass("ot-hide"), _("" + nn.ONETRUST_PC_SDK).removeClass("ot-hide"), S.isV2Template && this.closePCText(!0), A.pcName === nt && (_("" + nn.ONETRUST_PC_SDK).el[0].classList.contains("ot-animated") || _("" + nn.ONETRUST_PC_SDK).addClass("ot-animated"), e = I.PreferenceCenterPosition, t = (o = I.useRTL) ? "right" : "left", o = o ? "left" : "right", _("" + nn.ONETRUST_PC_SDK).el[0].classList.contains("ot-slide-out-" + ("right" === e ? o : t)) && _("" + nn.ONETRUST_PC_SDK).removeClass("ot-slide-out-" + ("right" === e ? o : t)), _("" + nn.ONETRUST_PC_SDK).addClass("ot-slide-in-" + ("right" === e ? o : t))), f.setAllowAllButton(), mo.setPCFocus(mo.getPCElements()), I.NoBanner && I.ScrollCloseBanner || this.pcHasScroll(), this.handleBodyStylesForBannerPushdown()
    }, sn.prototype.hideConsentNoticeV2 = function() {
        var e, t, o;
        0 === _(this.ONETRUST_PC_SDK).length ? this.setFocusOnPage() : (S.isV2Template && this.closePCText(), I.ForceConsent && !y.isCookiePolicyPage(I.AlertNoticeText) && !h.isAlertBoxClosedAndValid() && I.ShowAlertNotice ? _("" + this.ONETRUST_PC_DARK_FILTER).css("z-index: 2147483645;").show() : _("" + this.ONETRUST_PC_DARK_FILTER).fadeOut(I.PCLayout.Panel ? 500 : 400), I.PCLayout.Panel && (e = I.PreferenceCenterPosition, t = (o = I.useRTL) ? "right" : "left", o = o ? "left" : "right", _("" + this.ONETRUST_PC_SDK).removeClass("ot-slide-in-" + ("right" === e ? o : t)), _("" + this.ONETRUST_PC_SDK).addClass("ot-slide-out-" + ("right" === e ? o : t))), _("" + this.ONETRUST_PC_SDK).fadeOut(I.PCLayout.Panel ? 500 : 400), L.isPCVisible = !1, L.pcLayer = re.Banner, this.setFocus())
    }, sn.prototype.setFocus = function() {
        var e;
        L.pcSource || h.isAlertBoxClosedAndValid() ? L.pcSource ? (L.pcSource.focus(), L.pcSource = null) : I.BInitialFocus ? y.resetFocusToBody() : this.setFocusOnPage() : (e = _("#onetrust-banner-sdk #onetrust-pc-btn-handler").el[0]) && e.focus()
    }, sn.prototype.handleBodyStylesForBannerPushdown = function() {
        A.pcName === it && A.pagePushedDown && "top" === I.BannerPosition && Qo.addOTCssPropertiesToBody(Xo.PC, {})
    }, sn.prototype.setFocusOnPage = function() {
        var e = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        L.isKeyboardUser && e.length && e[0].focus()
    }, sn.prototype.closePCText = function(e) {
        void 0 === e && (e = !1);
        var t = document.querySelector("#onetrust-pc-sdk span[aria-live]"),
            o = I.AboutCookiesText;
        t && (t.innerText = e ? "" : o + (" " + I.pcDialogClose))
    }, sn.prototype.pcHasScroll = function() {
        var e = _(P.P_Grp_Container).el[0] || _("#onetrust-pc-sdk " + P.P_Content).el[0];
        e.scrollHeight > e.clientHeight && (this.bodyStyleChanged = !0, e = _("body")) && e.length && Qo.addOTCssPropertiesToBody(Xo.PC, {
            overflow: "hidden"
        })
    }, sn.prototype.checkIfPcSdkContainerExist = function() {
        return !_("" + nn.ONETRUST_PC_SDK).length
    };
    var nn, rn = sn;

    function sn() {
        this.ONETRUST_PC_SDK = "#onetrust-pc-sdk", this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter", this.bodyStyleChanged = !1
    }
    cn.prototype.isLandingPage = function() {
        var e = k.readCookieParam(v.OPTANON_CONSENT, "landingPath");
        return !e || e === location.href
    }, cn.prototype.setLandingPathParam = function(e) {
        k.writeCookieParam(v.OPTANON_CONSENT, "landingPath", e)
    };
    var an, ln = cn;

    function cn() {}
    pn.prototype.updateGtmMacros = function(e) {
        void 0 === e && (e = !0);
        var n = [];
        L.groupsConsent.forEach(function(e) {
            var t = e.replace(":1", ""),
                o = C.getGrpStatus(C.getGroupById(t)).toLowerCase() === m.ALWAYS_ACTIVE;
            b.endsWith(e, ":1") && (G.canSoftOptInInsertForGroup(t) || o) && n.push(t)
        }), L.hostsConsent.forEach(function(e) {
            b.endsWith(e, ":1") && n.push(e.replace(":1", ""))
        }), L.showGeneralVendors && I.GenVenOptOut && I.GeneralVendors.forEach(function(e) {
            !L.genVendorsConsent[e.VendorCustomId] || L.softOptInGenVendors.includes(e.VendorCustomId) && an.isLandingPage() || n.push(e.VendorCustomId)
        });
        L.vsIsActiveAndOptOut && L.getVendorsInDomain().forEach(function(e) {
            L.vsConsent.get(e.CustomVendorServiceId) && n.push(e.CustomVendorServiceId)
        });
        var t = "," + b.arrToStr(n) + ",";
        I.GoogleConsent.GCEnable && !A.otDataLayer.ignore && this.updateGCMTags(n), window.OnetrustActiveGroups = t, window.OptanonActiveGroups = t, A.gcmUpdateCallback && A.gcmUpdateCallback(), A.otDataLayer.ignore || void 0 === this._window[A.otDataLayer.name] || this._window[A.otDataLayer.name].constructor !== Array ? !A.otDataLayer.ignore && A.otDataLayer.name && (this._window[A.otDataLayer.name] = [{
            event: "OneTrustLoaded",
            OnetrustActiveGroups: t
        }, {
            event: "OptanonLoaded",
            OptanonActiveGroups: t
        }]) : (this._window[A.otDataLayer.name].push({
            event: "OneTrustLoaded",
            OnetrustActiveGroups: t
        }), this._window[A.otDataLayer.name].push({
            event: "OptanonLoaded",
            OptanonActiveGroups: t
        })), this.dispatchEvents(e, n, t)
    }, pn.prototype.dispatchEvents = function(e, t, o) {
        !e && A.gtmUpdatedinStub || (n = new CustomEvent("consent.onetrust", {
            detail: t
        }));
        var n, r, i = k.readCookieParam(v.OPTANON_CONSENT, "groups"),
            s = L.fireOnetrustGrp || !i || e || !A.gtmUpdatedinStub;
        s && (L.fireOnetrustGrp = !1, !A.otDataLayer.ignore && this._window[A.otDataLayer.name] && this._window[A.otDataLayer.name].constructor === Array && this._window[A.otDataLayer.name].push({
            event: "OneTrustGroupsUpdated",
            OnetrustActiveGroups: o
        }), r = new CustomEvent("OneTrustGroupsUpdated", {
            detail: t
        })), setTimeout(function() {
            n && s && window.dispatchEvent(n), r && window.dispatchEvent(r)
        })
    }, pn.prototype.categoryNotMapped = function(e) {
        return e !== lt && "" !== e
    }, pn.prototype.updateGCMTags = function(o) {
        var n, r = this,
            i = {},
            e = (this.canUpdateGCMCategories() && (e = [
                [I.GoogleConsent.GCAdStorage, Pe.ad_storage],
                [I.GoogleConsent.GCAnalyticsStorage, Pe.analytics_storage],
                [I.GoogleConsent.GCFunctionalityStorage, Pe.functionality_storage],
                [I.GoogleConsent.GCPersonalizationStorage, Pe.personalization_storage],
                [I.GoogleConsent.GCSecurityStorage, Pe.security_storage]
            ], S.fp.CookieV2GCMDMA && (e.push([I.GoogleConsent.GCAdUserData, Pe.ad_user_data]), e.push([I.GoogleConsent.GCAdPersonalization, Pe.ad_personalization])), e.forEach(function(e) {
                var t;
                r.categoryNotMapped(e[0]) && (t = o.includes(e[0]) ? Te.granted : Te.denied, i[e[1]] = t)
            })), k.getCookie(v.ALERT_BOX_CLOSED)),
            t = A.getRegionRule().Global;
        "function" != typeof window.gtag && (n = this._window, window.gtag = function(e, t, o) {
            A.otDataLayer.ignore || (n[A.otDataLayer.name] ? n[A.otDataLayer.name].push(arguments) : n[A.otDataLayer.name] = [arguments])
        }), "function" == typeof window.gtag && (A.gcmDevIdSet || (window.gtag(ke.set, "developer_id.dYWJhMj", !0), A.gcmDevIdSet = !0), e) && (t || (i[Pe.region] = A.gcmCountries), 0 !== Object.keys(i).length) && window.gtag(ke.consent, be.update, i)
    }, pn.prototype.canUpdateGCMCategories = function() {
        return I.GoogleConsent.GCAdStorage !== lt || I.GoogleConsent.GCAnalyticsStorage !== lt || I.GoogleConsent.GCFunctionalityStorage !== lt || I.GoogleConsent.GCPersonalizationStorage !== lt || I.GoogleConsent.GCSecurityStorage !== lt || I.GoogleConsent.GCAdUserData !== lt || I.GoogleConsent.GCAdPersonalization !== lt
    };
    var dn, un = pn;

    function pn() {
        this._window = window
    }
    Cn.prototype.updateFilterSelection = function(e) {
        o = (e = void 0 === e ? !1 : e) ? (t = L.filterByCategories, "data-optanongroupid") : (t = L.filterByIABCategories, "data-purposeid");
        for (var t, o, n = _("#onetrust-pc-sdk .category-filter-handler").el, r = 0; r < n.length; r++) {
            var i = n[r].getAttribute(o),
                i = -1 < t.indexOf(i);
            b.setCheckedAttribute(null, n[r], i)
        }
    }, Cn.prototype.cancelHostFilter = function() {
        for (var e = _("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-optanongroupid"),
                o = 0 <= L.filterByCategories.indexOf(o);
            b.setCheckedAttribute(null, e[t], o)
        }
    }, Cn.prototype.updateHostFilterList = function() {
        for (var e = _("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o, n = e[t].getAttribute("data-optanongroupid");
            e[t].checked && L.filterByCategories.indexOf(n) < 0 ? L.filterByCategories.push(n) : !e[t].checked && -1 < L.filterByCategories.indexOf(n) && (o = L.filterByCategories, L.filterByCategories.splice(o.indexOf(n), 1))
        }
        return L.filterByCategories
    }, Cn.prototype.InitializeHostList = function() {
        var e = P.P_Vendor_List + " " + P.P_Host_Cntr + " li";
        L.hosts.hostTemplate = _(e).el[0].cloneNode(!0), L.hosts.hostCookieTemplate = _(P.P_Vendor_List + " " + P.P_Host_Cntr + " " + P.P_Host_Opt + " li").el[0].cloneNode(!0)
    }, Cn.prototype.getCookiesForGroup = function(t) {
        var o = [],
            n = [];
        return t.FirstPartyCookies.length && t.FirstPartyCookies.forEach(function(e) {
            n.push(R(R({}, e), {
                groupName: t.GroupName
            }))
        }), t.Hosts.length && t.Hosts.forEach(function(e) {
            o.push(R(R({}, e), {
                isActive: "always active" === C.getGrpStatus(t).toLowerCase(),
                groupName: t.GroupName,
                Type: he.Host
            }))
        }), {
            firstPartyCookiesList: n,
            thirdPartyCookiesList: o
        }
    }, Cn.prototype.reactivateSrcTag = function(e) {
        var t = ["src"];
        e.setAttribute(t[0], e.getAttribute("data-" + t[0])), e.removeAttribute("data-src")
    }, Cn.prototype.reactivateScriptTag = function(e) {
        var t = e.parentNode,
            o = document.createElement(e.tagName),
            n = (o.innerHTML = e.innerHTML, e.attributes);
        if (0 < n.length)
            for (var r = 0; r < n.length; r++) "type" !== n[r].name ? o.setAttribute(n[r].name, n[r].value, !0) : o.setAttribute("type", "text/javascript", !0);
        t.appendChild(o), t.removeChild(e)
    }, Cn.prototype.reactivateTag = function(e, t) {
        var o, n = 0 <= e.className.indexOf("ot-vscat"),
            r = 0 <= e.className.indexOf("optanon-category"),
            i = (n && r ? o = this.getGroupElements(e.className, L.showVendorService) : n ? L.showVendorService ? o = this.getGroupElements(e.className, !0) : this.unBlockTag(t, e) : r && (L.showVendorService ? this.unBlockTag(t, e) : o = this.getGroupElements(e.className, !1)), !0);
        if (o && 0 < o.length) {
            for (var s = 0; s < o.length; s++)
                if (!f.canInsertForGroup(o[s].trim())) {
                    i = !1;
                    break
                }
            i && this.unBlockTag(t, e)
        }
    }, Cn.prototype.unBlockTag = function(e, t) {
        e ? this.reactivateSrcTag(t) : this.reactivateScriptTag(t)
    }, Cn.prototype.getGroupElements = function(e, t) {
        return (t ? e.match(/ot-vscat(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/ot-vscat-/i) : e.match(/optanon-category(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/optanon-category-/i))[1].split("-")
    }, Cn.prototype.substitutePlainTextScriptTags = function() {
        var t = this,
            e = [].slice.call(document.querySelectorAll('script[class*="optanon-category"]')),
            o = [].slice.call(document.querySelectorAll('*[class*="optanon-category"]')),
            e = Array.from(new Set(e.concat([].slice.call(document.querySelectorAll('script[class*="ot-vscat"]') || [])))),
            o = Array.from(new Set(o.concat([].slice.call(document.querySelectorAll('*[class*="ot-vscat"]') || []))));
        Array.prototype.forEach.call(o, function(e) {
            "SCRIPT" !== e.tagName && e.hasAttribute("data-src") && t.reactivateTag(e, !0)
        }), Array.prototype.forEach.call(e, function(e) {
            e.hasAttribute("type") && "text/plain" === e.getAttribute("type") && t.reactivateTag(e, !1)
        })
    };
    var hn, gn = Cn;

    function Cn() {}
    var yn, fn = "Banner",
        mn = "Preference Center",
        vn = "API",
        Sn = "Close",
        kn = "Allow All",
        bn = "Reject All",
        Pn = "Confirm",
        Tn = "Confirm",
        An = "Continue without Accepting",
        In = (Ln.prototype.init = function() {
            this.insertHtml(), this.insertCss(), this.showNty(), this.initHandler()
        }, Ln.prototype.getContent = function() {
            return u(this, void 0, void 0, function() {
                return p(this, function(e) {
                    return [2, xt.getSyncNtfyContent().then(function(e) {
                        L.syncNtfyGrp = {
                            name: e.name,
                            html: atob(e.html),
                            css: e.css
                        }
                    })]
                })
            })
        }, Ln.prototype.insertHtml = function() {
            this.removeHtml();

            function e(e) {
                return t.querySelector(e)
            }
            var t = document.createDocumentFragment(),
                o = document.createElement("div"),
                o = (_(o).html(L.syncNtfyGrp.html), o.querySelector(this.El)),
                n = (I.BannerRelativeFontSizesToggle && _(o).addClass("otRelFont"), I.useRTL && _(o).attr("dir", "rtl"), _(t).append(o), I.NtfyConfig),
                n = (this.initHtml("Sync", n.Sync, e, t.querySelector(this.El)), n.ShowCS ? _(e(".ot-pc-handler")).html(n.CSTxt) : (_(o).addClass("ot-hide-csbtn"), e(".ot-sync-btncntr").parentElement.removeChild(e(".ot-sync-btncntr"))), document.createElement("div"));
            _(n).append(t), _("#onetrust-consent-sdk").append(n.firstChild)
        }, Ln.prototype.initHandler = function() {
            _(this.El + " .ot-sync-close-handler").on("click", function() {
                return yn.close()
            })
        }, Ln.prototype.showNty = function() {
            var e = _(this.El);
            e.css("bottom: -300px;"), e.animate({
                bottom: "1em;"
            }, 1e3), setTimeout(function() {
                e.css("bottom: 1rem;")
            }, 1e3), e.focus()
        }, Ln.prototype.changeState = function() {
            setTimeout(function() {
                yn.refreshState()
            }, 1500)
        }, Ln.prototype.refreshState = function() {
            function e(e) {
                return t.querySelector(e)
            }
            var t = _(this.El).el[0],
                o = (t.classList.add("ot-nty-complete"), t.classList.remove("ot-nty-sync"), I.NtfyConfig);
            this.initHtml("Complete", o.Complete, e, t), o.ShowCS && ("LINK" === o.CSType && _(e(".ot-pc-handler")).addClass("ot-pc-link"), _(".ot-sync-btncntr").show("inline-block"), this.alignContent(), _(window).on("resize", function() {
                return yn.resizeEvent
            })), setTimeout(function() {
                yn.close()
            }, 1e3 * I.NtfyConfig.NtfyDuration)
        }, Ln.prototype.insertCss = function() {
            var e = document.getElementById("onetrust-style");
            e.innerHTML += L.syncNtfyGrp.css, e.innerHTML += this.addCustomStyles()
        }, Ln.prototype.addCustomStyles = function() {
            var e = I.NtfyConfig,
                t = e.Sync,
                o = e.Complete,
                n = e.CSButton,
                r = e.CSLink;
            return "\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync {\n            background-color: " + t.BgColor + ";\n            border: 1px solid " + t.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-refresh>g {\n            fill: " + t.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync #ot-sync-title {\n            text-align: " + t.TitleAlign + ";\n            color: " + t.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync .ot-sync-desc  {\n            text-align: " + t.DescAlign + ";\n            color: " + t.DescColor + "; \n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete {\n            background-color: " + o.BgColor + ";\n            border: 1px solid " + o.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-check>g {\n            fill: " + o.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete #ot-sync-title {\n            text-align: " + o.TitleAlign + ";\n            color: " + o.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete .ot-sync-desc  {\n            text-align: " + o.DescAlign + ";\n            color: " + o.DescColor + "; \n        }\n        " + ("BUTTON" === e.CSType ? "\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler {\n            background-color: " + n.BgColor + ";\n            border: 1px solid " + n.BdrColor + ";\n            color: " + n.Color + ";\n            text-align: " + n.Align + ";\n        }" : " #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler.ot-pc-link {\n            color: " + r.Color + ";\n            text-align: " + r.Align + ";\n        }") + "\n        "
        }, Ln.prototype.initHtml = function(e, t, o, n) {
            var r = "Complete" === e ? ".ot-sync-refresh" : ".ot-sync-check";
            t.ShowIcon ? (_(o("Sync" === e ? ".ot-sync-refresh" : ".ot-sync-check")).show(), _(o(r)).hide(), _(o(".ot-sync-icon")).show("inline-block"), n.classList.remove("ot-hide-icon")) : (_(o(".ot-sync-icon")).hide(), n.classList.add("ot-hide-icon")), t.Title ? _(o("#ot-sync-title")).html(t.Title) : _(o("#ot-sync-title")).hide(), t.Desc ? _(o(".ot-sync-desc")).html(t.Desc) : _(o(".ot-sync-desc")).hide(), t.ShowClose ? (_(o(".ot-sync-close-handler")).show("inline-block"), _(o(".ot-close-icon")).attr("aria-label", t.CloseAria), n.classList.remove("ot-hide-close")) : (_(o(".ot-sync-close-handler")).hide(), n.classList.add("ot-hide-close"))
        }, Ln.prototype.close = function() {
            this.hideSyncNtfy(), y.resetFocusToBody()
        }, Ln.prototype.hideSyncNtfy = function() {
            I.NtfyConfig.ShowCS && window.removeEventListener("resize", yn.resizeEvent), _("#ot-sync-ntfy").fadeOut(400)
        }, Ln.prototype.removeHtml = function() {
            var e = _(this.El).el;
            e && b.removeChild(e)
        }, Ln.prototype.alignContent = function() {
            _(".ot-sync-btncntr").el[0].clientHeight > _(".ot-sync-titlecntr").el[0].clientHeight && (_(".ot-sync-titlecntr").addClass("ot-pos-abs"), _(".ot-sync-btncntr").addClass("ot-pos-rel"))
        }, Ln.prototype.resizeEvent = function() {
            window.innerWidth <= 896 && yn.alignContent()
        }, Ln);

    function Ln() {
        this.El = "#ot-sync-ntfy"
    }
    Vn.prototype.toggleVendorConsent = function(e, t) {
        void 0 === t && (t = null), (e = (e = void 0 === e ? [] : e).length ? e : L.oneTrustIABConsent.vendors).forEach(function(e) {
            var e = e.split(":"),
                t = e[0],
                e = e[1],
                t = _(P.P_Vendor_Container + " ." + P.P_Ven_Ctgl + ' [vendorid="' + t + '"]').el[0];
            t && b.setCheckedAttribute("", t, "true" === e)
        });
        var o, n = _("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
        n && (o = b.getActiveIdArray(b.distinctArray(e)), (t = null === t ? o.length === e.length : t) || 0 === o.length ? n.parentElement.classList.remove(At.P_Line_Through) : n.parentElement.classList.add(At.P_Line_Through), b.setCheckedAttribute("", n, t))
    }, Vn.prototype.toggleVendorLi = function(e, t) {
        void 0 === t && (t = null), (e = (e = void 0 === e ? [] : e).length ? e : L.oneTrustIABConsent.legIntVendors).forEach(function(e) {
            var e = e.split(":"),
                t = e[0],
                e = e[1],
                t = _(P.P_Vendor_Container + " ." + P.P_Ven_Ltgl + ' [leg-vendorid="' + t + '"]').el[0];
            t && b.setCheckedAttribute("", t, "true" === e)
        });
        var o, n = _("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
        n && (o = b.getActiveIdArray(b.distinctArray(e)), (t = null === t ? o.length === e.length : t) || 0 === o.length ? n.parentElement.classList.remove(At.P_Line_Through) : n.parentElement.classList.add(At.P_Line_Through), b.setCheckedAttribute("", n, t))
    }, Vn.prototype.updateVendorLegBtns = function(e) {
        (e = (e = void 0 === e ? [] : e).length ? e : L.oneTrustIABConsent.legIntVendors).forEach(function(e) {
            var e = e.split(":"),
                t = e[0],
                e = e[1],
                t = _(P.P_Vendor_Container + ' .ot-leg-btn-container[data-group-id="' + t + '"]').el[0];
            t && f.updateLegIntBtnElement(t, "true" === e)
        })
    };
    var _n, En = Vn;

    function Vn() {}

    function On() {
        return (!A.isIab2orv2Template && I.PCTemplateUpgrade && I.PCCategoryStyle === me.Toggle ? E.toggleEl : E.chkboxEl).cloneNode(!0)
    }
    wn.prototype.setHtmlTemplate = function(e) {
        V.setInternalData(), V.rootHtml = e, V.cloneHtmlElements()
    }, wn.prototype.getVendorListEle = function(e) {
        var t = document.createDocumentFragment(),
            o = document.createElement("div"),
            n = (o.classList.add("ot-vs-list"), I.VendorServiceConfig.PCVSExpandGroup);
        return e.forEach(function(e, t) {
            e = V.createVendor(e.groupRef, e, n, "ot-vs-lst-id-" + t);
            o.appendChild(e)
        }), t.appendChild(o), t
    }, wn.prototype.insertVendorServiceHtml = function(e, t) {
        var o;
        V.checkIfIsInvalid(e, t) || (o = document.createDocumentFragment(), V.setVendorContainer(o, e), V.setVendorList(o, e), e.SubGroups && 0 < e.SubGroups.length ? (o.querySelector(this.MAIN_CONT_ELE).classList.add("ot-vnd-subgrp-cnt"), e = t.children[1], A.pcName === it && (e = t.children[2]), t.insertBefore(o, e)) : t.appendChild(o))
    }, wn.prototype.toggleVendorService = function(e, t, o, n) {
        e = C.getGroupById(e), t = C.getVSById(t);
        n = n || V.getVendorInputElement(t.CustomVendorServiceId), V.setVendorServiceState(n, t, o), o ? V.changeGroupState(e, o, V.isToggle) : V.checkGroupChildrenState(e) || V.changeGroupState(e, !1, V.isToggle)
    }, wn.prototype.setVendorStateByGroup = function(e, t) {
        e = e.VendorServices;
        if (L.showVendorService && e)
            for (var o = 0, n = e; o < n.length; o++) {
                var r = n[o],
                    i = V.getVendorInputElement(r.CustomVendorServiceId);
                V.setVendorServiceState(i, r, t)
            }
    }, wn.prototype.resetVendorUIState = function(e) {
        e.forEach(function(e, t) {
            t = V.getVendorInputElement(t);
            V.changeVendorServiceUIState(t, e)
        })
    }, wn.prototype.setVendorServiceState = function(e, t, o) {
        V.changeVendorServiceState(t, o), V.changeVendorServiceUIState(e, o);
        e = o ? jo : zo;
        g.triggerGoogleAnalyticsEvent(vo, e, t.ServiceName + ": " + t.CustomVendorServiceId)
    }, wn.prototype.removeVSUITemplate = function(e) {
        var t = e.querySelector(this.MAIN_CONT_ELE);
        t && e.removeChild(t)
    }, wn.prototype.consentAll = function(o) {
        L.getVendorsInDomain().forEach(function(e) {
            var t = o;
            o || (t = C.isAlwaysActiveGroup(e.groupRef)), V.toggleVendorService(e.groupRef.CustomGroupId, e.CustomVendorServiceId, t || o)
        })
    }, wn.prototype.cloneHtmlElements = function() {
        var e, t, o, n, r = V.rootHtml.querySelector(this.MAIN_CONT_ELE);
        r && (e = r.querySelector(".ot-vnd-serv-hdr-cntr"), n = (o = (t = r.querySelector(".ot-vnd-lst-cont")).querySelector(".ot-vnd-item")).querySelector(".ot-vnd-info"), V.vendorLabelContainerClone = e.cloneNode(!0), r.removeChild(e), V.vendorInfoClone = n.cloneNode(!0), o.querySelector(".ot-vnd-info-cntr").removeChild(n), V.vendorItemClone = o.cloneNode(!0), t.removeChild(o), V.vendorListContainerClone = t.cloneNode(!0), r.removeChild(t), V.vendorServMainContainerClone = r.cloneNode(!0), V.rootHtml.removeChild(r))
    }, wn.prototype.setInternalData = function() {
        V.isToggle = I.PCCategoryStyle === me.Toggle;
        var e = I.VendorServiceConfig;
        V.stringTranslation = new Map, V.stringTranslation.set("ServiceName", e.PCVSNameText || "ServiceName"), V.stringTranslation.set("ParentCompany", e.PCVSParentCompanyText || "ParentCompany"), V.stringTranslation.set("Address", e.PCVSAddressText || "Address"), V.stringTranslation.set("DefaultCategoryName", e.PCVSDefaultCategoryText || "DefaultCategoryName"), V.stringTranslation.set("Description", e.PCVSDefaultDescriptionText || "Description"), V.stringTranslation.set("DPOEmail", e.PCVSDPOEmailText || "DPOEmail"), V.stringTranslation.set("DPOLink", e.PCVSDPOLinkText || "DPOLink"), V.stringTranslation.set("PrivacyPolicyLink", e.PCVSPrivacyPolicyLinkText || "PrivacyPolicyLink"), V.stringTranslation.set("CookiePolicyLink", e.PCVSCookiePolicyLinkText || "CookiePolicyLink"), V.stringTranslation.set("OptOutLink", e.PCVSOptOutLinkText || "OptOutLink"), V.stringTranslation.set("LegalBasis", e.PCVSLegalBasisText || "LegalBasis")
    }, wn.prototype.setVendorContainer = function(e, t) {
        var o = V.vendorServMainContainerClone.cloneNode(!0),
            t = (o.setAttribute("data-group-id", t.CustomGroupId), V.vendorLabelContainerClone.cloneNode(!0));
        t.querySelector(".ot-vnd-serv-hdr").innerHTML = I.VendorServiceConfig.PCVSListTitle, o.appendChild(t), e.appendChild(o)
    }, wn.prototype.setVendorList = function(e, t) {
        for (var o = 0, n = V.getVSFromGroupAndSubgroups(t), r = n.length, e = e.querySelector(this.MAIN_CONT_ELE), i = V.vendorListContainerClone.cloneNode(), s = I.VendorServiceConfig.PCVSExpandCategory; o < r; o++) {
            var a = V.createVendor(t, n[o], s);
            i.appendChild(a)
        }
        e.appendChild(i)
    }, wn.prototype.getVSFromGroupAndSubgroups = function(e, t) {
        var o, n = null != (o = e.VendorServices) ? o : [];
        if (t = void 0 === t ? !1 : t)
            for (var r = 0, i = null != (o = e.SubGroups) ? o : []; r < i.length; r++) {
                var s = null != (s = i[r].VendorServices) ? s : [];
                n.push.apply(n, s)
            }
        return n
    }, wn.prototype.createVendor = function(e, t, o, n) {
        var r = V.vendorItemClone.cloneNode(!0),
            i = (r.setAttribute("data-vnd-id", t.CustomVendorServiceId), I.PCAccordionStyle === ae.NoAccordion ? (r.classList.remove("ot-accordion-layout"), (i = r.querySelector("button")) && r.removeChild(i)) : V.setExpandVendorList(r, o), V.setVendorHeader(e, t, r, n), r.querySelector(".ot-vnd-info-cntr"));
        return V.setVendorInfo(i, t), r
    }, wn.prototype.setExpandVendorList = function(e, t) {
        e.querySelector("button").setAttribute("aria-expanded", "" + t)
    }, wn.prototype.setVendorHeader = function(e, t, o, n) {
        var r = I.PCShowAlwaysActiveToggle,
            i = "always active" === C.getGrpStatus(e).toLowerCase(),
            o = o.querySelector(".ot-acc-hdr"),
            s = (i && o.classList.add("ot-always-active-group"), null),
            e = (i && I.PCCategoryStyle === me.Toggle || (s = V.setHeaderInputStyle(e, t, i, n)), V.setHeaderText(t, o)),
            n = (o.appendChild(e), V.getPositionForElement(I.PCAccordionStyle, V.isToggle)),
            t = n.positionIcon,
            e = n.positionInput;
        s && o.insertAdjacentElement(e, s), i && r && (n = V.getAlwaysActiveElement(), o.insertAdjacentElement("beforeend", n)), I.PCAccordionStyle !== ae.NoAccordion && (e = V.setHeaderAccordionIcon(), o.insertAdjacentElement(t, e))
    }, wn.prototype.getPositionForElement = function(e, t) {
        var o = "beforeend",
            n = "beforeend";
        return {
            positionIcon: o = t && e === ae.PlusMinus ? "afterbegin" : o,
            positionInput: n = t ? n : "afterbegin"
        }
    }, wn.prototype.setHeaderAccordionIcon = function() {
        var e = (I.PCAccordionStyle === ae.Caret ? E.arrowEl : E.plusMinusEl).cloneNode(!0);
        return e
    }, wn.prototype.setHeaderText = function(e, t) {
        var o = t.querySelector(".ot-cat-header"),
            n = o.cloneNode();
        return t.removeChild(o), n.innerText = e.ServiceName, n
    }, wn.prototype.setHeaderInputStyle = function(e, t, o, n) {
        var r, i, s, a;
        return I.VendorServiceConfig.PCVSOptOut ? (e = C.checkIsActiveByDefault(e), r = !1, r = (i = L.vsConsent).has(t.CustomVendorServiceId) ? i.get(t.CustomVendorServiceId) : e, (i = On()).querySelector("input").classList.add("category-switch-handler"), e = i.querySelector("input"), a = t.CustomVendorServiceId, n = null != n ? n : "ot-vendor-id-" + a, s = "ot-vendor-header-id-" + a, _(e).attr("id", n), _(e).attr("name", n), _(e).attr("aria-labelledby", s), _(e).data("ot-vs-id", a), _(e).data("optanongroupid", t.groupRef.CustomGroupId), e.disabled = o, b.setCheckedAttribute(null, e, r), a = V.isToggle ? n : s, _(i.querySelector("label")).attr("for", a), _(i.querySelector(".ot-label-txt")).html(t.ServiceName), _(i.querySelector(".ot-switch-nob")).attr("aria-label", t.ServiceName), i) : null
    }, wn.prototype.getAlwaysActiveElement = function() {
        var e = document.createElement("div");
        return e.classList.add("ot-always-active"), e.innerText = I.AlwaysActiveText, e
    }, wn.prototype.setVendorInfo = function(e, t) {
        var o, n, r, i, s, a, l = ["DPOLink", "PrivacyPolicyLink", "CookiePolicyLink", "OptOutLink"];
        for (o in t) V.skipVendorInfoKey(o, t) || (n = t[o], (r = V.vendorInfoClone.cloneNode(!0)).dataset.vndInfoKey = o + "-" + t.CustomVendorServiceId, i = r.querySelector(".ot-vnd-lbl"), s = r.querySelector(".ot-vnd-cnt"), i.innerHTML = V.getLocalizedString(o), l.includes(o) ? (s.remove(), a = document.createElement("a"), _(a).attr("href", n), _(a).attr("target", "_blank"), _(a).attr("rel", "noopener"), _(a).attr("aria-label", n + " " + I.NewWinTxt), a.classList.add("ot-vnd-cnt"), a.innerText = n, i.insertAdjacentElement("afterend", a)) : s.innerHTML = n, e.appendChild(r))
    }, wn.prototype.skipVendorInfoKey = function(e, t) {
        return "VendorServiceId" === e || "DefaultCategoryId" === e || "ServiceName" === e || "groupRef" === e || "CustomVendorServiceId" === e || "PurposeId" === e || !t[e]
    }, wn.prototype.getLocalizedString = function(e) {
        return V.stringTranslation.has(e) ? V.stringTranslation.get(e) : "DEFAULT"
    }, wn.prototype.checkGroupChildrenState = function(e) {
        for (var t, o = 0, n = null != (t = e.SubGroups) ? t : []; o < n.length; o++) {
            var r = n[o];
            if (V.checkGroupChildrenState(r)) return !0
        }
        for (var i = 0, s = null != (t = e.VendorServices) ? t : []; i < s.length; i++) {
            var a = s[i];
            if (L.vsConsent.get(a.CustomVendorServiceId)) return !0
        }
        return !1
    }, wn.prototype.changeVendorServiceState = function(e, t) {
        L.vsConsent.set(e.CustomVendorServiceId, t)
    }, wn.prototype.changeVendorServiceUIState = function(e, t) {
        e && (b.setCheckedAttribute(null, e, t), V.isToggle) && e.parentElement.querySelector(".ot-switch-nob").setAttribute("aria-checked", "" + t)
    }, wn.prototype.changeGroupState = function(e, t, o) {
        var n = C.getParentByGrp(e);
        f.toggleGrpStatus(e, t), V.updateGroupUIState(e.CustomGroupId, t, o, null !== n), n && (e = V.checkGroupChildrenState(n), V.changeGroupState(n, e, o))
    }, wn.prototype.updateGroupUIState = function(e, t, o, n) {
        void 0 === n && (n = !1);
        n = document.querySelector((n ? "#ot-sub-group-id-" : "#ot-group-id-") + e);
        n && (b.setCheckedAttribute(null, n, t), o) && n.parentElement.querySelector(".ot-switch-nob").setAttribute("aria-checked", "" + t)
    }, wn.prototype.getVendorInputElement = function(e) {
        return document.getElementById("ot-vendor-id-" + e)
    }, wn.prototype.checkIfIsInvalid = function(e, t) {
        return !e || !e.VendorServices || !t || e.VendorServices.length <= 0
    };
    var V, Bn = wn;

    function wn() {
        this.MAIN_CONT_ELE = ".ot-vnd-serv"
    }

    function Gn(e, t, o) {
        var n, r, i, s, a = "otGenericBackdrop",
            l = "#" + a,
            c = "ot-generic-modal-layer";

        function d(e) {
            e ? (_(l).removeClass("ot-hide"), _(l).el[0].removeAttribute("style")) : (_(l).fadeOut(400), _(l).addClass("ot-hide"))
        }
        for (s in (n = document.createElement("div")).classList.add(c), (i = document.createElement("div")).setAttribute("id", a), i.classList.add("onetrust-pc-dark-filter"), n.appendChild(i), (r = document.createElement("div")).classList.add("ot-general-modal"), r.setAttribute("id", null != e ? e : "genericModal"), n.appendChild(r), t) r.style[s] = t[s];
        return {
            dialogLayerHtml: n,
            modalHtml: r,
            closeModalHandler: function() {
                d(!1);
                var e = o.querySelector("." + c);
                o.removeChild(e)
            },
            openModalHandler: function() {
                d(!0)
            }
        }
    }
    Nn.getInstance = function() {
        return Nn.instance = Nn.instance ? Nn.instance : new Nn
    }, Nn.prototype.checkIfHealthSignatureNeeded = function(o) {
        var n = this;
        return void 0 === o && (o = !1), new Promise(function(t) {
            var e;
            A.requireSignatureEnabled || t(), A.healthSignatureGroup || o ? A.healthSignatureData ? (f.toggleGrpStatus(A.healthSignatureGroup, !0), ar.setDataSubjectIdV2(A.healthSignatureData), t()) : (e = function(e) {
                n.setSignHealthData(e), t()
            }, nn.hideConsentNoticeV2(), n.langJson = I, n.parentElement = document.querySelector(n.PARENT_SELECTOR), n.healthSignatureGroup = I.Groups.find(function(e) {
                return e.needsHealthSignature
            }), n.showMyHealthDataModal(e, e)) : t()
        })
    }, Nn.prototype.getHealthSignatureComponent = function(e) {
        this.isModal = !1, this.langJson = I, this.parentElement = e;
        var e = {
                errorMessage: this.langJson.PCRequireSignatureHelpText,
                inputLabelText: this.langJson.PCRequireSignatureFieldLabel
            },
            e = '<form class="ot-signature-health-form" id="form">\n        <div class="ot-input-field-cont">\n            <label for="otHealthSignatureData" class="ot-signature-label">' + e.inputLabelText + '</label>\n            <input type="text" id="otHealthSignatureData" name="otHealthSignatureData" required aria-required="true" class="ot-signature-input"\n                aria-label="' + e.inputLabelText + '" autofocus aria-invalid="true" aria-describedby="otHealthSignatureErrorMesg"/>\n            <span id="otHealthSignatureErrorMesg" class="ot-health-signature-error">\n                ' + e.errorMessage + "\n            </span>\n        </div>\n    </form>",
            t = document.createElement("div");
        t.innerHTML = e, t.classList.add("ot-signature-health-group"), this.healthSignatureElement = t, this.parentElement.appendChild(t), this.addEventHandlers()
    }, Nn.prototype.showMyHealthDataModal = function(e, t) {
        this.isModal = !0, this.acceptAllCallback = e, this.rejectAllCallback = t, this.configOptions = {
            mainTitle: this.healthSignatureGroup.GroupName,
            description: this.healthSignatureGroup.GroupDescription,
            subtitle: this.langJson.PCRequireSignatureHeaderText,
            ariaLabel: this.langJson.PCRequireSignatureHeaderDesc,
            errorMessage: this.langJson.PCRequireSignatureHelpText,
            subDescription: this.langJson.PCRequireSignatureHeaderDesc,
            inputLabelText: this.langJson.PCRequireSignatureFieldLabel,
            rejectButtonText: this.langJson.PCRequireSignatureRejectBtnText,
            acceptButtonText: this.langJson.PCRequireSignatureConfirmBtnText
        };
        e = document.createDocumentFragment(), t = this.createModal(e);
        this.healthSignatureElement = this.createHealtSignatureForm(t), this.parentElement.appendChild(e), this.setFocusOnInput(), this.hideErrorMessage(), this.addEventHandlers(), this.genericModal.openModalHandler()
    }, Nn.prototype.setSignHealthData = function(e) {
        e ? (ar.setDataSubjectIdV2(e), A.healthSignatureData = e, f.toggleGrpStatus(this.healthSignatureGroup, !0)) : (A.healthSignatureData = "", f.toggleGrpStatus(this.healthSignatureGroup, !1))
    }, Nn.prototype.createModal = function(e) {
        var t = this.setModalStyles();
        return this.genericModal = Gn(this.MODAL_ID_SELECTOR, t, this.parentElement), e.appendChild(this.genericModal.dialogLayerHtml), this.genericModal.modalHtml
    }, Nn.prototype.createHealtSignatureForm = function(e) {
        var t = '<div\n        class="ot-signature-health"\n        role="dialog"\n        aria-label="' + (t = this.configOptions).ariaLabel + '"\n        aria-describedby="otSignatureGroupDesc">\n        <section class="ot-signature-cont">\n            <h5 id="otSignatureSubtitle" class="ot-signature-subtitle">' + t.subtitle + '</h5>\n            <p class="ot-signarure-paragraph">' + t.subDescription + '</p>\n        </section>\n        <section class="ot-signature-cont">\n            <h4 id="otSignatureGroupTitle" class="ot-signature-group-title">' + t.mainTitle + '</h4>\n            <p id="otSignatureGroupDesc" class="ot-signarure-paragraph">' + t.description + '</p>\n        </section>\n        <form class="ot-signature-health-form" id="form">\n            <label for="otHealthSignatureData" class="ot-signature-label">' + t.inputLabelText + '</label>\n            <input type="text" id="otHealthSignatureData" name="otHealthSignatureData" required aria-required="true" class="ot-signature-input"\n                aria-label="' + t.inputLabelText + '" autofocus aria-invalid="true" aria-describedby="otHealthSignatureErrorMesg"/>\n            <span id="otHealthSignatureErrorMesg" class="ot-health-signature-error" aria-live="assertive">\n                ' + t.errorMessage + '\n            </span>\n        </form>\n        <div class="ot-signature-buttons-cont">\n            <button class="ot-signature-button reject">' + t.rejectButtonText + '</button>\n            <button class="ot-signature-button accept">' + t.acceptButtonText + "</button>\n        </div>\n    </div>",
            t = (e.innerHTML = t, e.querySelector(this.ACCEPT_ALL_SELECTOR)),
            t = (this.setAcceptButtonsStyles(t), e.querySelector(this.REJECT_ALL_SELECTOR)),
            t = (this.setRejectButtonsStyles(t), e.querySelectorAll(this.HEALTH_SIGNATURE_PARAGRAPH_SELECTOR));
        return this.setParagraphStyles(t), e.querySelector(".ot-signature-health")
    }, Nn.prototype.addEventHandlers = function() {
        this.isModal ? (this.parentElement.querySelector(this.REJECT_ALL_SELECTOR).addEventListener("click", this.rejectAllListener.bind(this)), this.parentElement.querySelector(this.ACCEPT_ALL_SELECTOR).addEventListener("click", this.acceptAllListener.bind(this))) : this.parentElement.querySelector(this.HEALTH_SIGNATURE_INPUT_SELECTOR).addEventListener("keyup", this.healthSignatureInputChanged.bind(this))
    }, Nn.prototype.removeModal = function() {
        this.removeEventHandlers(), this.genericModal.closeModalHandler()
    }, Nn.prototype.removeEventHandlers = function() {
        this.isModal ? (this.parentElement.querySelector(this.REJECT_ALL_SELECTOR).removeEventListener("click", this.rejectAllListener), this.parentElement.querySelector(this.ACCEPT_ALL_SELECTOR).removeEventListener("click", this.acceptAllListener)) : this.parentElement.querySelector(this.HEALTH_SIGNATURE_INPUT_SELECTOR).removeEventListener("change", this.healthSignatureInputChanged)
    }, Nn.prototype.rejectAllListener = function() {
        this.removeModal(), this.rejectAllCallback && this.rejectAllCallback()
    }, Nn.prototype.acceptAllListener = function() {
        var e = this.healthSignatureElement.querySelector(this.HEALTH_SIGNATURE_INPUT_SELECTOR).value;
        this.hideErrorMessage("" !== e), e && (this.removeModal(), this.acceptAllCallback(e))
    }, Nn.prototype.healthSignatureInputChanged = function() {
        var e = this.healthSignatureElement.querySelector(this.HEALTH_SIGNATURE_INPUT_SELECTOR).value;
        A.healthSignatureData = e
    }, Nn.prototype.setModalStyles = function() {
        var e = {};
        return e.backgroundColor = this.langJson.pcBackgroundColor, e
    }, Nn.prototype.setParagraphStyles = function(e) {
        var t = this,
            o = {};
        o.color = this.langJson.textColor, e.forEach(function(e) {
            t.setStylesInElement(e, o)
        })
    }, Nn.prototype.hideErrorMessage = function(e) {
        void 0 === e && (e = !0), this.healthSignatureElement.querySelector(this.ERROR_MSG_SELECTOR).style.opacity = e ? "0" : "1"
    }, Nn.prototype.setFocusOnInput = function() {
        this.healthSignatureElement.querySelector(this.HEALTH_SIGNATURE_INPUT_SELECTOR).focus()
    }, Nn.prototype.setRejectButtonsStyles = function(e) {
        var t = {};
        t.color = this.langJson.bannerMPButtonTextColor, t.borderColor = this.langJson.bannerMPButtonTextColor, t.backgroundColor = this.langJson.bannerMPButtonColor, this.setStylesInElement(e, t)
    }, Nn.prototype.setAcceptButtonsStyles = function(e) {
        var t = {};
        t.color = this.langJson.buttonTextColor, t.borderColor = this.langJson.buttonColor, t.backgroundColor = this.langJson.buttonColor, this.setStylesInElement(e, t)
    }, Nn.prototype.setStylesInElement = function(e, t) {
        for (var o in t) e.style[o] = t[o]
    };
    var xn = Nn;

    function Nn() {
        this.PARENT_SELECTOR = "#onetrust-consent-sdk", this.MODAL_ID_SELECTOR = "#healthSignatureDataModal", this.ERROR_MSG_SELECTOR = "#otHealthSignatureErrorMesg", this.REJECT_ALL_SELECTOR = ".ot-signature-button.reject", this.ACCEPT_ALL_SELECTOR = ".ot-signature-button.accept", this.HEALTH_SIGNATURE_INPUT_SELECTOR = "#otHealthSignatureData", this.HEALTH_SIGNATURE_PARAGRAPH_SELECTOR = "p.ot-signarure-paragraph"
    }
    Hn.prototype.updateDataSubjectTimestamp = function() {
        var e = h.alertBoxCloseDate(),
            e = e && y.getUTCFormattedDate(e);
        _(".ot-userid-timestamp").html(I.PCenterUserIdTimestampTitleText + ": " + e)
    }, Hn.prototype.closeBanner = function(e) {
        this.closeOptanonAlertBox(), e ? this.allowAll(!1) : this.close(!1)
    }, Hn.prototype.allowAll = function(e, t) {
        void 0 === t && (t = !1), S.moduleInitializer.MobileSDK ? window.OneTrust.AllowAll() : this.AllowAllV2(e, t)
    }, Hn.prototype.bannerActionsHandler = function(t, n, e) {
        var r = this,
            i = (void 0 === e && (e = !1), an.setLandingPathParam(xe.NOT_LANDING_PAGE), L.groupsConsent = [], L.hostsConsent = [], L.genVendorsConsent = {}, {});
        I.Groups.forEach(function(e) {
            if (e.IsAboutGroup) return !1;
            F(e.SubGroups, [e]).forEach(function(e) {
                var o = r.getGroupStatus(t, n, e);
                r.setGroupConsent(o, e), e.Hosts.length && y.isOptOutEnabled() && e.Hosts.forEach(function(e) {
                    var t;
                    i[e.HostId] ? Co.updateHostStatus(e, o) : (i[e.HostId] = !0, t = Co.isHostPartOfAlwaysActiveGroup(e.HostId), L.hostsConsent.push(e.HostId + ":" + (t || o ? "1" : "0")))
                }), L.genVenOptOutEnabled && e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function(e) {
                    po.updateGenVendorStatus(e, o)
                })
            })
        }), I.IsIabEnabled && (t ? this.iab.allowAllhandler() : this.iab.rejectAllHandler(e)), Qo.removeAddedOTCssStyles(), nn.hideConsentNoticeV2(), ro.writeGrpParam(v.OPTANON_CONSENT), ro.writeHstParam(v.OPTANON_CONSENT), L.genVenOptOutEnabled && ro.writeGenVenCookieParam(v.OPTANON_CONSENT), L.vsIsActiveAndOptOut && ro.writeVSConsentCookieParam(v.OPTANON_CONSENT), hn.substitutePlainTextScriptTags(), dn.updateGtmMacros(), this.executeOptanonWrapper()
    }, Hn.prototype.getGroupStatus = function(e, t, o) {
        return e ? o.Status.toLowerCase() !== m.ALWAYS_INACTIVE : !!t && C.isAlwaysActiveGroup(o)
    }, Hn.prototype.setGroupConsent = function(e, t) {
        var o; - 1 < mt.indexOf(t.Type) && (o = "", o = A.requireSignatureEnabled && t.needsHealthSignature ? A.healthSignatureData ? "1" : "0" : e && t.HasConsentOptOut ? "1" : "0", L.groupsConsent.push(t.CustomGroupId + ":" + o))
    }, Hn.prototype.nextPageCloseBanner = function() {
        an.isLandingPage() || h.isAlertBoxClosedAndValid() || this.closeBanner(I.NextPageAcceptAllCookies)
    }, Hn.prototype.rmScrollAndClickBodyEvents = function() {
        I.ScrollCloseBanner && window.removeEventListener("scroll", this.scrollCloseBanner), I.OnClickCloseBanner && document.body.removeEventListener("click", this.bodyClickEvent)
    }, Hn.prototype.onClickCloseBanner = function(e) {
        h.isAlertBoxClosedAndValid() || (g.triggerGoogleAnalyticsEvent(vo, So), this.closeBanner(I.OnClickAcceptAllCookies), e.stopPropagation()), O.rmScrollAndClickBodyEvents()
    }, Hn.prototype.scrollCloseBanner = function() {
        var e = _(document).height() - _(window).height(),
            e = (0 === e && (e = _(window).height()), 100 * _(window).scrollTop() / e);
        25 < (e = e <= 0 ? 100 * (document.scrollingElement && document.scrollingElement.scrollTop || document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop) / (document.scrollingElement && document.scrollingElement.scrollHeight || document.documentElement && document.documentElement.scrollHeight || document.body && document.body.scrollHeight) : e) && !h.isAlertBoxClosedAndValid() && (!L.isPCVisible || I.NoBanner) ? (g.triggerGoogleAnalyticsEvent(vo, So), O.closeBanner(I.ScrollAcceptAllCookies), O.rmScrollAndClickBodyEvents()) : h.isAlertBoxClosedAndValid() && O.rmScrollAndClickBodyEvents()
    }, Hn.prototype.AllowAllV2 = function(e, t) {
        void 0 === t && (t = !1);
        for (var o = this.groupsClass.getAllGroupElements(), n = 0; n < o.length; n++) {
            var r = C.getGroupById(o[n].getAttribute("data-optanongroupid"));
            A.requireSignatureEnabled && r.needsHealthSignature ? this.groupsClass.toggleGrpElements(o[n], r, !!A.healthSignatureData) : (this.groupsClass.toggleGrpElements(o[n], r, !0), this.groupsClass.toogleSubGroupElement(o[n], !0, !1, !0), this.groupsClass.toogleSubGroupElement(o[n], !0, !0, !0))
        }
        L.showVendorService && V.consentAll(!0), this.bannerActionsHandler(!0, !1), this.consentTransactions(e, !0, t), I.IsIabEnabled && (this.iab.updateIabVariableReference(), this.iab.updateVendorsDOMToggleStatus(!0), this.updateVendorLegBtns(!0))
    }, Hn.prototype.rejectAll = function(e, t) {
        for (var o, n, r = (t = void 0 === t ? !1 : t) ? ue[5] : ue[2], i = this.groupsClass.getAllGroupElements(), s = null != (o = null == (o = S) ? void 0 : o.fp) && o.CookieV2RejectAll ? (n = this.initializeObjectToLIRejectAll(t), this.initializeAllowLIRejectAll(t)) : !(n = !0), a = 0; a < i.length; a++) {
            var l = C.getGroupById(i[a].getAttribute("data-optanongroupid"));
            "always active" !== C.getGrpStatus(l).toLowerCase() && (f.toggleGrpElements(i[a], l, !1, s), this.groupsClass.toogleSubGroupElement(i[a], !1, !1, !0), !I.IsIabEnabled || I.IsIabEnabled && n) && this.groupsClass.toogleSubGroupElement(i[a], !1, !0, !0)
        }
        L.showVendorService && V.consentAll(!1), this.bannerActionsHandler(!1, !0, s), r !== L.consentInteractionType && this.consentTransactions(e, !1, t), I.IsIabEnabled && (this.iab.updateIabVariableReference(), this.iab.updateVendorsDOMToggleStatus(!1, s), s || this.updateVendorLegBtns(!1))
    }, Hn.prototype.initializeObjectToLIRejectAll = function(e) {
        return !e && I.BannerShowRejectAllButton && I.BRejectConsentType === Ae.OBJECT_TO_LI || e && I.PCenterShowRejectAllButton && I.BRejectConsentType === Ae.OBJECT_TO_LI
    }, Hn.prototype.initializeAllowLIRejectAll = function(e) {
        return I.IsIabEnabled && (!e && I.BannerShowRejectAllButton && I.BRejectConsentType === Ae.LI_ACTIVE_IF_LEGAL_BASIS || e && I.PCenterShowRejectAllButton && I.BRejectConsentType === Ae.LI_ACTIVE_IF_LEGAL_BASIS)
    }, Hn.prototype.executeCustomScript = function() {
        I.CustomJs && new Function(I.CustomJs)()
    }, Hn.prototype.updateConsentData = function(e) {
        an.setLandingPathParam(xe.NOT_LANDING_PAGE), I.IsIabEnabled && !e && this.iab.saveVendorStatus(), ro.writeGrpParam(v.OPTANON_CONSENT), ro.writeHstParam(v.OPTANON_CONSENT), L.showGeneralVendors && I.GenVenOptOut && ro.writeGenVenCookieParam(v.OPTANON_CONSENT), L.vsIsActiveAndOptOut && ro.writeVSConsentCookieParam(v.OPTANON_CONSENT), hn.substitutePlainTextScriptTags(), dn.updateGtmMacros()
    }, Hn.prototype.close = function(e, t) {
        var o;
        void 0 === t && (t = Z.Banner), nn.hideConsentNoticeV2(), this.updateConsentData(e), I.IsConsentLoggingEnabled ? (e = t === Z.PC ? Pn : t === Z.Banner ? Sn : A.apiSource, o = t === Z.PC ? mn : t === Z.Banner ? fn : vn, L.bannerCloseSource === $.ContinueWithoutAcceptingButton && (e = An), L.bannerCloseSource === $.BannerSaveSettings && (e = Tn), $r.createConsentTxn(!1, o + " - " + e, t === Z.PC)) : h.dispatchConsentEvent(), this.executeOptanonWrapper()
    }, Hn.prototype.executeOptanonWrapper = function() {
        try {
            if (this.executeCustomScript(), "function" == typeof window.OptanonWrapper && "undefined" !== window.OptanonWrapper) {
                window.OptanonWrapper();
                for (var e = 0, t = L.srcExecGrpsTemp; e < t.length; e++) {
                    var o = t[e]; - 1 === L.srcExecGrps.indexOf(o) && L.srcExecGrps.push(o)
                }
                L.srcExecGrpsTemp = [];
                for (var n = 0, r = L.htmlExecGrpsTemp; n < r.length; n++) {
                    o = r[n]; - 1 === L.htmlExecGrps.indexOf(o) && L.htmlExecGrps.push(o)
                }
                L.htmlExecGrpsTemp = []
            }
        } catch (e) {
            console.warn("Error in Optanon wrapper, please review your code. " + e)
        }
    }, Hn.prototype.updateVendorLegBtns = function(e) {
        if (A.legIntSettings.PAllowLI && A.legIntSettings.PShowLegIntBtn)
            for (var t = _(P.P_Vendor_Container + " .ot-leg-btn-container").el, o = 0; o < t.length; o++) this.groupsClass.updateLegIntBtnElement(t[o], e)
    }, Hn.prototype.showFltgCkStgButton = function() {
        var e = _("#ot-sdk-btn-floating"),
            e = (e.removeClass("ot-hide"), e.removeClass("ot-pc-open"), I.cookiePersistentLogo.includes("ot_guard_logo.svg") && _(O.fltgFrontBtnSvg).attr(gt, ""), _(O.fltgBackBtnSvg).attr(gt, "true"), document.querySelector(O.fltgBtnBackBtn)),
            t = document.querySelector(O.fltgBtnFrontBtn);
        t && (t.setAttribute(gt, "false"), t.style.display = "block"), e && (e.setAttribute(gt, "true"), e.style.display = "none")
    }, Hn.prototype.consentTransactions = function(e, t, o) {
        void 0 === o && (o = !1), $r && !e && I.IsConsentLoggingEnabled ? $r.createConsentTxn(!1, (o ? mn : fn) + " - " + (t ? kn : bn), o) : h.dispatchConsentEvent()
    }, Hn.prototype.hideVendorsList = function() {
        nn.checkIfPcSdkContainerExist() || (I.PCTemplateUpgrade ? _("#onetrust-pc-sdk " + P.P_Content).removeClass("ot-hide") : _("#onetrust-pc-sdk .ot-main-content").show(), _("#onetrust-pc-sdk #close-pc-btn-handler.main").show(), _("#onetrust-pc-sdk " + P.P_Vendor_List).addClass("ot-hide"))
    }, Hn.prototype.resetConsent = function() {
        var e = this;
        L.groupsConsent = JSON.parse(JSON.stringify(L.initialGroupsConsent)), L.hostsConsent = JSON.parse(JSON.stringify(L.initialHostConsent)), L.showGeneralVendors && (L.genVendorsConsent = JSON.parse(JSON.stringify(L.initialGenVendorsConsent))), L.vsIsActiveAndOptOut && (L.vsConsent = new Map(L.initialVendorsServiceConsent)), I.IsIabEnabled && (L.oneTrustIABConsent = JSON.parse(JSON.stringify(L.initialOneTrustIABConsent)), L.vendors = JSON.parse(JSON.stringify(L.initialVendors)), L.vendors.vendorTemplate = L.initialVendors.vendorTemplate), I.UseGoogleVendors && (L.addtlVendors = JSON.parse(JSON.stringify(L.initialAddtlVendors)), L.addtlVendorsList = JSON.parse(JSON.stringify(L.initialAddtlVendorsList))), setTimeout(function() {
            e.resetConsentUI()
        }, 400)
    }, Hn.prototype.setLblTxtForTgl = function(e, t) {
        e = e.querySelector(".ot-label-status");
        I.PCShowConsentLabels && e && (e.innerHTML = t ? I.PCActiveText : I.PCInactiveText)
    }, Hn.prototype.resetConsentUI = function() {
        var p = this;
        f.getAllGroupElements().forEach(function(e) {
            var t = e.getAttribute("data-optanongroupid"),
                o = C.getGroupById(t),
                t = O.isGroupActive(o, t),
                n = T.GroupTypes;
            if (A.pcName === it && I.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid"))), p.setLblTxtForTgl(e, t), o.Type === Ct || o.Type === n.Stack)
                for (var n = y.isBundleOrStackActive(o, L.initialGroupsConsent), r = e.querySelector('input[class*="category-switch-handler"]'), i = (b.setCheckedAttribute(null, r, n), e.querySelectorAll("li" + P.P_Subgrp_li)), s = 0; s < i.length; s++) {
                    var a = C.getGroupById(i[s].getAttribute("data-optanongroupid")),
                        l = a.OptanonGroupId,
                        l = O.isGroupActive(a, l),
                        c = i[s].querySelector('input[class*="cookie-subgroup-handler"]'),
                        d = i[s].querySelector(".ot-label-status"),
                        u = e.querySelector(".ot-label-status");
                    I.PCShowConsentLabels && d && (u.innerHTML = l ? I.PCActiveText : I.PCInactiveText), b.setCheckedAttribute(null, c, l), O.resetLegIntButton(a, i[s])
                } else {
                    r = e.querySelector('input[class*="category-switch-handler"]');
                    b.setCheckedAttribute(null, r, t), O.resetLegIntButton(o, e)
                }
        }), I.IsIabEnabled && _n.toggleVendorConsent(), this.resetGenVenUI(), this.resetGoogleVenUI(), L.vsIsActiveAndOptOut && V.resetVendorUIState(L.vsConsent)
    }, Hn.prototype.resetGenVenUI = function() {
        var e = _("#onetrust-pc-sdk .ot-gnven-chkbox-handler").el;
        if (L.showGeneralVendors && e && e.length) {
            for (var t = 0, o = e; t < o.length; t++) {
                var n = o[t],
                    r = n.getAttribute("gn-vid"),
                    i = Boolean(L.genVendorsConsent[r]);
                b.setCheckedAttribute("", n, i), po.updateGenVendorStatus(r, i)
            }
            x.genVenSelectAllTglEvent()
        }
    }, Hn.prototype.resetGoogleVenUI = function() {
        var e = _("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el;
        if (I.UseGoogleVendors && e && e.length)
            for (var t = 0, o = e; t < o.length; t++) {
                var n = o[t],
                    r = n.getAttribute("addtl-vid");
                L.addtlVendorsList[r] && (r = Boolean(L.addtlVendors.vendorSelected[r]), b.setCheckedAttribute("", n, r))
            }
    }, Hn.prototype.isGroupActive = function(e, t) {
        var o;
        return e.IabGrpId ? (o = void 0, o = e.Type === T.GroupTypes.Spl_Ft ? L.initialVendors.selectedSpecialFeatures : e.IsLegIntToggle ? L.initialVendors.selectedLegInt : L.initialVendors.selectedPurpose, -1 !== Vt.inArray(e.IabGrpId + ":true", o)) : -1 !== Vt.inArray(t + ":1", L.initialGroupsConsent)
    }, Hn.prototype.resetLegIntButton = function(e, t) {
        var o;
        A.legIntSettings.PAllowLI && e.Type === T.GroupTypes.Pur && e.HasLegIntOptOut && A.legIntSettings.PShowLegIntBtn && (o = !0, -1 < L.vendors.selectedLegInt.indexOf(e.IabGrpId + ":false") && (o = !1), f.updateLegIntBtnElement(t, o))
    }, Hn.prototype.handleTogglesOnSingularConsentUpdate = function(e, t) {
        if (this.closeOptanonAlertBox(), e === ct)
            for (var s = this, o = 0, n = t; o < n.length; o++) {
                var r = n[o];
                ! function(e, t) {
                    for (var o = C.getGroupById(e), n = s.groupsClass.getAllGroupElements(), r = 0; r < n.length; r++) {
                        var i = C.getGroupById(n[r].getAttribute("data-optanongroupid"));
                        if (i.OptanonGroupId === o.OptanonGroupId && !i.Parent) {
                            w.toggleV2Category(null, i, t, i.CustomGroupId);
                            break
                        }
                        i = i.SubGroups.find(function(e) {
                            return e.OptanonGroupId === o.OptanonGroupId
                        });
                        i && w.toggleSubCategory(null, i.CustomGroupId, t, i.CustomGroupId)
                    }
                }(c = r.id, d = r.isEnabled)
            } else if (e === pt)
                for (var i = 0, a = t; i < a.length; i++) {
                    var l = a[i],
                        c = l.id,
                        d = l.isEnabled,
                        l = C.getGrpByVendorId(c);
                    l && V.toggleVendorService(l.CustomGroupId, c, d)
                }
        this.close(!1, Z.API)
    };
    var O, Dn = Hn;

    function Hn() {
        var n = this;
        this.iab = x, this.groupsClass = f, this.fltgBackBtnSvg = ".ot-floating-button__back svg", this.fltgFrontBtnSvg = ".ot-floating-button__front svg", this.fltgBtnBackBtn = ".ot-floating-button__back button", this.fltgBtnFrontBtn = ".ot-floating-button__front button", this.closeOptanonAlertBox = function() {
            var e;
            y.hideBanner(), _(document).off("keydown", w.closePCWhenEscPressed), I.NtfyConfig.ShowNtfy && yn.hideSyncNtfy(), A.isOptInMode || !A.isOptInMode && !h.isAlertBoxClosedAndValid() ? (g.setAlertBoxClosed(!0), I.PCTemplateUpgrade && I.PCenterUserIdTitleText && I.IsConsentLoggingEnabled && n.updateDataSubjectTimestamp()) : h.isAlertBoxClosedAndValid() && (e = _(".onetrust-pc-dark-filter").el[0]) && "none" !== getComputedStyle(e).getPropertyValue("display") && _(".onetrust-pc-dark-filter").fadeOut(400), G.csBtnGroup && n.showFltgCkStgButton()
        }, this.bodyClickEvent = function(e) {
            var t = e.target;
            t.closest("#onetrust-banner-sdk") || t.closest("#onetrust-pc-sdk") || t.closest(".onetrust-pc-dark-filter") || t.closest(".ot-sdk-show-settings") || t.closest(".optanon-show-settings") || t.closest(".optanon-toggle-display") || O.onClickCloseBanner(e)
        }, this.bannerCloseButtonHandler = function(o) {
            return void 0 === o && (o = !1), u(n, void 0, void 0, function() {
                var t;
                return p(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return (O.closeOptanonAlertBox(), S.moduleInitializer.MobileSDK) ? (window.OneTrust.Close(), [3, 3]) : [3, 1];
                        case 1:
                            return [4, xn.getInstance().checkIfHealthSignatureNeeded()];
                        case 2:
                            e.sent(), t = L.bannerCloseSource === $.ConfirmChoiceButton ? Z.PC : Z.Banner, O.close(o, t), e.label = 3;
                        case 3:
                            return [2, !1]
                    }
                })
            })
        }, this.allowAllEventHandler = function(o) {
            return void 0 === o && (o = !1), u(n, void 0, void 0, function() {
                var t;
                return p(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return _(document).off("keydown", w.shiftBannerFocus), t = o ? "Preferences Allow All" : "Banner Accept Cookies", g.triggerGoogleAnalyticsEvent(vo, t), o && A.requireSignatureEnabled && (nn.hideConsentNoticeV2(), this.closeOptanonAlertBox()), [4, xn.getInstance().checkIfHealthSignatureNeeded(!0)];
                        case 1:
                            return e.sent(), this.allowAllEvent(!1, o), this.hideVendorsList(), [2]
                    }
                })
            })
        }, this.allowAllEvent = function(e, t) {
            void 0 === e && (e = !1), void 0 === t && (t = !1), n.closeOptanonAlertBox(), O.allowAll(e, t)
        }, this.rejectAllEventHandler = function(e) {
            void 0 === e && (e = !1), _(document).off("keydown", w.shiftBannerFocus), g.triggerGoogleAnalyticsEvent(vo, e ? "Preferences Reject All" : "Banner Reject All"), A.requireSignatureEnabled && (A.healthSignatureData = "", A.healthSignatureGroup = null), S.moduleInitializer.MobileSDK ? window.OneTrust.RejectAll() : (n.rejectAllEvent(!1, e), n.hideVendorsList())
        }, this.rejectAllEvent = function(e, t) {
            void 0 === e && (e = !1), void 0 === t && (t = !1), n.closeOptanonAlertBox(), !h.isIABCrossConsentEnabled() || A.thirdPartyiFrameLoaded ? n.rejectAll(e, t) : A.thirdPartyiFramePromise.then(function() {
                n.rejectAll(e, t)
            })
        }
    }
    Mn.prototype.setFilterList = function(o) {
        var n = this,
            r = _("#onetrust-pc-sdk " + P.P_Fltr_Modal + " " + P.P_Fltr_Option).el[0].cloneNode(!0);
        _("#onetrust-pc-sdk " + P.P_Fltr_Modal + " " + P.P_Fltr_Options).html(""), (S.isV2Template || I.PCLayout.Popup) && _("#onetrust-pc-sdk #filter-cancel-handler").html(I.PCenterCancelFiltersText || "Cancel"), !S.isV2Template && I.PCLayout.Popup || (_("#onetrust-pc-sdk " + P.P_Clr_Fltr_Txt).html(I.PCenterClearFiltersText), _("#filter-btn-handler").el[0].setAttribute("aria-label", I.PCenterFilterText)), _("#onetrust-pc-sdk #filter-apply-handler").html(I.PCenterApplyFiltersText), o ? A.consentableGrps.forEach(function(e) {
            var t = L.cookieListType === ge.GenVen || L.cookieListType === ge.HostAndGenVen ? e.Hosts.length || e.FirstPartyCookies.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length : e.Hosts.length || e.FirstPartyCookies.length;
            t && n.filterGroupOptionSetter(r, e, o)
        }) : A.iabGrps.forEach(function(e) {
            n.filterGroupOptionSetter(r, e, o)
        })
    }, Mn.prototype.setFilterListByGroup = function(e, t) {
        var o, n = this;
        !e || e.length <= 0 ? _("#onetrust-pc-sdk " + P.P_Fltr_Modal + " " + P.P_Fltr_Options).html("") : (o = _("#onetrust-pc-sdk " + P.P_Fltr_Modal + " " + P.P_Fltr_Option).el[0].cloneNode(!0), _("#onetrust-pc-sdk " + P.P_Fltr_Modal + " " + P.P_Fltr_Options).html(""), (S.isV2Template || I.PCLayout.Popup) && _("#onetrust-pc-sdk #filter-cancel-handler").html(I.PCenterCancelFiltersText || "Cancel"), !S.isV2Template && I.PCLayout.Popup || (_("#onetrust-pc-sdk " + P.P_Clr_Fltr_Txt).html(I.PCenterClearFiltersText), _("#filter-btn-handler").el[0].setAttribute("aria-label", I.PCenterFilterText)), _("#onetrust-pc-sdk #filter-apply-handler").html(I.PCenterApplyFiltersText), e.forEach(function(e) {
            n.filterGroupOptionSetter(o, e, t)
        }))
    }, Mn.prototype.filterGroupOptionSetter = function(e, t, o) {
        var n = t.CustomGroupId,
            r = n + "-filter",
            e = e.cloneNode(!0);
        _(P.P_Fltr_Modal + " " + P.P_Fltr_Options).append(e), _(e.querySelector("input")).attr("id", r), _(e.querySelector("label")).attr("for", r), (S.isV2Template ? _(e.querySelector(P.P_Label_Txt)) : _(e.querySelector("label span"))).html(t.GroupName), _(e.querySelector("input")).attr(o ? "data-optanongroupid" : "data-purposeid", n)
    };
    var Rn, Fn = Mn;

    function Mn() {
        this.bodyScrollProp = "", this.htmlScrollProp = "", this.ONETRUST_PC_SDK = "#onetrust-pc-sdk", this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter"
    }
    jn.prototype.showParagraph = function(e) {
        var t = R({}, e),
            o = t.listTitle,
            n = t.htmlFragment,
            t = t.paragrphContainerSelector;
        qn.options = e, qn.hideOtherHtmlElements(e), qn.setParagraphTitle(o), qn.addItemListToRootElement(n, t)
    }, jn.prototype.hideParagraphUI = function() {
        var e = R({}, qn.options),
            t = e.showFooter;
        e.showSearchBox || (null != (e = qn.checkboxesContainerEle) && e.classList.remove("ot-hide"), null != (e = qn.searchInputContainerEle) && e.classList.remove("ot-hide"), null != (e = qn.listHotsVendorsContainerEle) && e.classList.remove("ot-hide")), t || null != (e = qn.footerButtonContainerEle) && e.classList.remove("ot-hide"), qn.rootEle.removeChild(qn.paragraphContainerEle)
    }, jn.prototype.addItemListToRootElement = function(e, t) {
        var o = document.querySelector("#onetrust-pc-sdk " + P.P_Vendor_List);
        qn.rootEle = o.querySelector(this.MAIN_CONT_ELE), qn.rootEle.appendChild(e), qn.paragraphContainerEle = qn.rootEle.querySelector(t)
    }, jn.prototype.setParagraphTitle = function(e) {
        document.querySelector("#onetrust-pc-sdk " + P.P_Vendor_Title).innerHTML = e
    }, jn.prototype.hideOtherHtmlElements = function(e) {
        var e = R({}, e),
            t = e.showFooter,
            e = e.showSearchBox,
            o = document.querySelector("#onetrust-pc-sdk " + P.P_Vendor_List),
            o = (!e && o && (qn.checkboxesContainerEle = o.querySelector(this.SEL_BLK_ELE), qn.searchInputContainerEle = o.querySelector(this.LST_SUBHDR_ELE), qn.listHotsVendorsContainerEle = o.querySelector(this.SDK_ROW_ELE), null != (e = qn.checkboxesContainerEle) && e.classList.add("ot-hide"), null != (o = qn.searchInputContainerEle) && o.classList.add("ot-hide"), null != (e = qn.listHotsVendorsContainerEle)) && e.classList.add("ot-hide"), document.querySelector("#onetrust-pc-sdk .ot-pc-footer .ot-btn-container"));
        !t && o && (qn.footerButtonContainerEle = o, null != (e = qn.footerButtonContainerEle)) && e.classList.add("ot-hide")
    };
    var qn, Un = jn;

    function jn() {
        this.SDK_ROW_ELE = ".ot-sdk-row", this.SEL_BLK_ELE = "#ot-sel-blk", this.MAIN_CONT_ELE = "#ot-lst-cnt", this.LST_SUBHDR_ELE = ".ot-lst-subhdr"
    }
    Wn.prototype.showIllustrations = function(e, t) {
        e = zn.insertParagraphContainer(e, t), t = {
            showFooter: !1,
            showSearchBox: !1,
            listTitle: I.PCIllusText,
            htmlFragment: e,
            paragrphContainerSelector: "." + this.PARAGRAPH_CONTAINER_ELE
        };
        qn.showParagraph(t)
    }, Wn.prototype.hideUI = function() {
        qn.hideParagraphUI()
    }, Wn.prototype.addIllustrationsLink = function(e, t, o, n) {
        void 0 === n && (n = !1);
        var r = t.IabIllustrations && 0 < t.IabIllustrations.length;
        o && r && I.PCGrpDescType === oe.UserFriendly && (o = I.PCVendorFullLegalText + "&nbsp;", (r = document.createElement("button")).classList.add("ot-link-btn"), r.classList.add("ot-pgph-link"), r.setAttribute("aria-label", I.PCVendorFullLegalText), r.setAttribute("data-parent-id", t.CustomGroupId), n ? (r.classList.add("ot-pgph-link-subgroup"), e.appendChild(r)) : (o = "&nbsp;|&nbsp" + o, e.insertAdjacentElement("afterend", r)), r.innerHTML = o)
    }, Wn.prototype.insertParagraphContainer = function(e, t) {
        var o = document.createDocumentFragment(),
            n = document.createElement("div"),
            e = (n.classList.add(this.PARAGRAPH_CONTAINER_ELE), zn.insertPurposeTitle(e)),
            r = (n.appendChild(e), document.createElement("div"));
        return r.classList.add("ot-paragraph-lst"), t.forEach(function(e, t) {
            e = zn.insertDescriptionElement(e, t);
            r.appendChild(e)
        }), n.appendChild(r), o.appendChild(n), o
    }, Wn.prototype.insertPurposeTitle = function(e) {
        var t = document.createElement("h4"),
            e = (t.classList.add("ot-pgph-title"), document.createTextNode(e));
        return t.appendChild(e), t
    }, Wn.prototype.insertDescriptionElement = function(e, t) {
        var o = document.createElement("p");
        return o.setAttribute("id", "ot-pgph-desc-id-" + t), o.classList.add("ot-pgph-desc"), o.innerText = e, o
    };
    var zn, Kn = Wn;

    function Wn() {
        this.PARAGRAPH_CONTAINER_ELE = "ot-pgph-contr"
    }
    n.prototype.insertPcHtml = function() {
        B.jsonAddAboutCookies(I);
        var t = document.createDocumentFragment(),
            e = (G.preferenceCenterGroup && (o = document.createElement("div"), _(o).html(G.preferenceCenterGroup.html), o = o.querySelector("#onetrust-pc-sdk"), B.addClassesPerConfig(o), _(t).append(o), B.manageCloseButtons(o, o = function(e) {
                return t.querySelectorAll(e)
            }, n = function(e) {
                return t.querySelector(e)
            }), I.Language && I.Language.Culture && _(n("#onetrust-pc-sdk")).attr("lang", I.Language.Culture), B.addLogos(n, o), _(n(P.P_Title)).html(I.MainText), I.PCCloseButtonType === Se.Link && I.PCTemplateUpgrade && A.pcName === it && _(n(P.P_Title)).addClass("ot-pc-title-shrink"), I.PCTemplateUpgrade && _(n(en + ' > div[role="alertdialog"]')).css("height: 100%;"), _(n(en + ' > div[role="alertdialog"]')).attr(this._ariaLabel, I.MainText), I.PCRegionAriaLabel && (_(n("#onetrust-pc-sdk")).attr(this._ariaLabel, I.PCRegionAriaLabel), _(n("#onetrust-pc-sdk")).attr("role", "region")), A.pcName === it && (_(n(P.P_Privacy_Txt)).html(I.AboutCookiesText), _(n(P.P_Privacy_Hdr)).html(I.AboutCookiesText)), e = '<span class="ot-tcf2-vendor-count ot-text-bold tcf2-vcount">' + A.tcf2ActiveVendors.all.toString() + "</span>", e = y.replaceTextFromString("[VENDOR_NUMBER]", I.MainInfoText, e), _(n(P.P_Policy_Txt)).html(e), B.configureLinkFields(n), B.configureSubjectDataFields(n), B.configureButtons(n, o), B.setManagePreferenceText(n), B.initializePreferenceCenterGroups(n, t), B.removeListsWhenAppropriate(n), I.PCTemplateUpgrade) && B.setOptOutSignalNotification(n), document.createElement("iframe")),
            o = (e.setAttribute("class", "ot-text-resize"), e.setAttribute("sandbox", "allow-same-origin"), e.setAttribute("title", "onetrust-text-resize"), d(e, "position: absolute; top: -50000px; width: 100em;"), e.setAttribute(this._ariaHidden, "true"), _(t.querySelector("#onetrust-pc-sdk")).append(e), document.getElementById("onetrust-consent-sdk")),
            n = (_(o).append(t), A.ignoreInjectingHtmlCss || _(document.body).append(o), (I.showCookieList || L.showGeneralVendors) && hn.InitializeHostList(), P.P_Vendor_List + " " + P.P_Host_Cntr + " li"),
            e = _(n).el[0];
        e && b.removeChild(e)
    }, n.prototype.addClassesPerConfig = function(e) {
        /Chrome|Safari/i.test(navigator.userAgent) && /Google Inc|Apple Computer/i.test(navigator.vendor) || _(e).addClass("ot-sdk-not-webkit"), I.useRTL && _(e).attr("dir", "rtl"), A.legIntSettings.PAllowLI && A.isIab2orv2Template && (_(e).addClass("ot-leg-opt-out"), A.legIntSettings.PShowLegIntBtn) && _(e).addClass("ot-leg-btn"), I.BannerRelativeFontSizesToggle && _(e).addClass("otRelFont"), I.PCShowConsentLabels && _(e).addClass("ot-tgl-with-label"), (I.UseGoogleVendors || L.showGeneralVendors) && _(e).addClass("ot-addtl-vendors"), "right" === I.PreferenceCenterPosition && _(e).addClass(I.useRTL ? "right-rtl" : "right")
    }, n.prototype.manageCloseButtons = function(e, t, o) {
        var n = _(t(P.P_Close_Btn)).el;
        if (I.ShowPreferenceCenterCloseButton) {
            I.CloseText || (I.CloseText = "Close Preference Center");
            for (var r = 0, i = n; r < i.length; r++) {
                var s = i[r];
                I.PCCloseButtonType === Se.Link && I.PCTemplateUpgrade ? (_(s).html(I.PCContinueText), _(e).addClass("ot-close-btn-link"), _(s).el.removeAttribute(this._ariaLabel)) : (_(s).el.setAttribute(this._ariaLabel, I.CloseText), y.setCloseIcon(o("#onetrust-pc-sdk .ot-close-icon")))
            }
        } else
            for (var a = 0; a < n.length; a++) _(n[a].parentElement).el.removeChild(n[a])
    }, n.prototype.addLogos = function(e, t) {
        var o, n, e = e(P.P_Logo);
        e && I.optanonLogo && (o = y.updateCorrectUrl(I.optanonLogo), y.checkMobileOfflineRequest(y.getBannerVersionUrl()) && (o = b.getRelativeURL(o, !0, !0)), (n = document.createElement("img")).setAttribute("alt", I.PCLogoAria), n.setAttribute("src", o), e.append(n), I.PCLogoAria) && _(e).attr(this._ariaLabel, I.PCLogoAria), y.insertFooterLogo(t(".ot-pc-footer-logo a"))
    }, n.prototype.configureLinkFields = function(e) {
        var t;
        I.AboutText && _(e(P.P_Policy_Txt)).html(_(e(P.P_Policy_Txt)).html() + '\n            <br/><a href="' + I.AboutLink + '" class="privacy-notice-link" rel="noopener" target="_blank"\n                    aria-label="' + I.PCCookiePolicyLinkScreenReader + '">' + I.AboutText + "</a>"), I.PCenterImprintLinkText && (I.AboutText || e(P.P_Policy_Txt).insertAdjacentHTML("beforeend", "<br/>"), (t = document.createElement("a")).classList.add("ot-link-btn", "ot-imprint-handler"), t.textContent = I.PCenterImprintLinkText, t.setAttribute(this._ariaLabel, I.PCenterImprintLinkScreenReader), t.setAttribute("href", I.PCenterImprintLinkUrl), t.setAttribute("rel", "noopener"), t.setAttribute("target", "_blank"), e(P.P_Policy_Txt).appendChild(t)), I.PCenterVendorListLinkText && (t = !I.IsIabEnabled && L.showGeneralVendors ? "ot-gv-list-handler" : "onetrust-vendors-list-handler", e(P.P_Policy_Txt).insertAdjacentHTML("beforeend", '<button class="ot-link-btn ' + t + '" aria-label="' + I.PCenterVendorListLinkAriaLabel + '">\n            ' + I.PCenterVendorListLinkText + "\n            </button>"))
    }, n.prototype.configureSubjectDataFields = function(e) {
        var t;
        I.PCTemplateUpgrade && I.PCenterUserIdTitleText && I.IsConsentLoggingEnabled && (t = k.readCookieParam(v.OPTANON_CONSENT, xe.CONSENT_ID), e(P.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-title"><span>' + I.PCenterUserIdTitleText + ": </span> " + t + "</div>"), I.PCenterUserIdDescriptionText && e(P.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-desc">' + I.PCenterUserIdDescriptionText + "</div>"), I.PCenterUserIdTimestampTitleText) && (t = (t = k.getCookie(v.ALERT_BOX_CLOSED)) && y.getUTCFormattedDate(t) || I.PCenterUserIdNotYetConsentedText, e(P.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-timestamp"><span>' + I.PCenterUserIdTimestampTitleText + ": </span> " + t + "</div>"))
    }, n.prototype.setManagePreferenceText = function(e) {
        var e = e(P.P_Manage_Cookies_Txt),
            t = _(e);
        e && (t.html(I.ManagePreferenceText), I.ManagePreferenceText || t.attr(this._ariaHidden, !0))
    }, n.prototype.configureButtons = function(e, t) {
        I.ConfirmText.trim() ? _(e("#accept-recommended-btn-handler")).html(I.ConfirmText) : e("#accept-recommended-btn-handler").parentElement.removeChild(e("#accept-recommended-btn-handler"));
        for (var o = t(".save-preference-btn-handler"), n = 0; n < o.length; n++) _(o[n]).html(I.AllowAllText);
        var r = t(".ot-pc-refuse-all-handler");
        if (I.PCenterShowRejectAllButton && I.PCenterRejectAllButtonText.trim())
            for (n = 0; n < r.length; n++) _(r[n]).html(I.PCenterRejectAllButtonText);
        else b.removeChild(r)
    }, n.prototype.removeListsWhenAppropriate = function(e) {
        var t;
        I.IsIabEnabled || (t = e(P.P_Vendor_Container)) && t.parentElement.removeChild(t), I.showCookieList || L.showGeneralVendors || (t = e(P.P_Host_Cntr)) && t.parentElement.removeChild(t)
    }, n.prototype.setParentGroupName = function(e, t, o, n) {
        var r = e.querySelector(".category-header,.ot-cat-header,.category-menu-switch-handler>h3");
        _(r).html(t), _(r).attr("id", o), A.pcName === it && (e.querySelector(P.P_Category_Header).innerHTML = t, e.querySelector("" + P.P_Desc_Container).setAttribute("id", n), e.querySelector(".category-menu-switch-handler").setAttribute("aria-controls", n))
    }, n.prototype.setLegIntButton = function(e, t, o, n) {
        void 0 === o && (o = !1);
        var r = !0,
            r = (-1 < L.vendors.selectedLegInt.indexOf(t.IabGrpId + ":false") && (r = !1), h.generateLegIntButtonElements(r, t.OptanonGroupId)),
            t = (o ? n.insertAdjacentHTML("afterend", r) : e.insertAdjacentHTML("beforeend", r), e.querySelector(".ot-remove-objection-handler"));
        t && d(t, t.getAttribute("data-style"))
    }, n.prototype.setParentGroupDescription = function(e, t, o, n, r) {
        var i = f.safeFormattedGroupDescription(t),
            s = e.querySelector("p:not(.ot-always-active)"),
            a = e.querySelector(P.P_Acc_Grp_Desc),
            s = s || a;
        return -1 < kt.indexOf(t.Type) && o.PCGrpDescType === oe.Legal ? i = t.DescriptionLegal : s.classList.add("ot-category-desc"), A.legIntSettings.PAllowLI && !A.legIntSettings.PShowLegIntBtn && (t.SubGroups.some(function(e) {
            return e.HasLegIntOptOut
        }) || t.HasLegIntOptOut ? s.parentElement.classList.add("ot-leg-border-color") : b.removeChild(e.querySelector(P.P_Li_Hdr))), A.pcName !== it && s.setAttribute("id", n), _(s).html(i), t.Type === T.GroupTypes.Stack && b.removeChild(s), s
    }, n.prototype.cloneOtHtmlEls = function(e) {
        var t = /otPcPanel|otPcCenter/;
        E.toggleEl = _(e(".ot-tgl")).el.cloneNode(!0), E.arrowEl = _(e('#onetrust-pc-sdk [role="alertdialog"] > ' + P.P_Arrw_Cntr)).el.cloneNode(!0), E.subGrpEl = _(e(P.P_Sub_Grp_Cntr)).el.cloneNode(!0), E.vListEl = _(e(P.P_Ven_Lst_Cntr)).el.cloneNode(!0), E.cListEl = _(e(P.P_Host_Lst_cntr)).el.cloneNode(!0), E.chkboxEl = _(e(P.P_CBx_Cntr)).el.cloneNode(!0), E.accordionEl = _(e(".ot-acc-cntr")).el.cloneNode(!0), t.test(A.pcName) && (E.plusMinusEl = _(e(".ot-plus-minus")).el.cloneNode(!0)), b.removeChild(e(".ot-tgl")), b.removeChild(e('#onetrust-pc-sdk [role="alertdialog"] > ' + P.P_Arrw_Cntr)), b.removeChild(e(P.P_Sub_Grp_Cntr)), b.removeChild(e(P.P_Ven_Lst_Cntr)), b.removeChild(e(P.P_Host_Lst_cntr)), b.removeChild(e(P.P_CBx_Cntr)), b.removeChild(e(".ot-acc-cntr")), t.test(A.pcName) && b.removeChild(e(".ot-plus-minus"))
    }, n.prototype.insertSelectAllEls = function(e) {
        var e = e(P.P_Select_Cntr + " .ot-sel-all-chkbox"),
            t = L.showVendorService ? On() : E.chkboxEl.cloneNode(!0),
            t = (t.id = P.P_Sel_All_Host_El, t.querySelector("input").id = "select-all-hosts-groups-handler", t.querySelector("label").setAttribute("for", "select-all-hosts-groups-handler"), _(e).append(t), L.showVendorService ? On() : E.chkboxEl.cloneNode(!0)),
            t = (t.id = P.P_Sel_All_Vendor_Consent_El, t.querySelector("input").id = "select-all-vendor-groups-handler", t.querySelector("label").setAttribute("for", "select-all-vendor-groups-handler"), _(e).append(t), L.showVendorService ? On() : E.chkboxEl.cloneNode(!0));
        t.id = P.P_Sel_All_Vendor_Leg_El, t.querySelector("input").id = "select-all-vendor-leg-handler", t.querySelector("label").setAttribute("for", "select-all-vendor-leg-handler"), _(e).append(t)
    }, n.prototype.initializePreferenceCenterGroups = function(e, t) {
        var o, n = A.pcName,
            r = (S.isV2Template && (B.cloneOtHtmlEls(e), (r = E.chkboxEl.cloneNode(!0)).querySelector("input").classList.add("category-filter-handler"), _(e(P.P_Fltr_Modal + " " + P.P_Fltr_Option)).append(r), B.insertSelectAllEls(e)), _(e("#onetrust-pc-sdk " + P.P_Category_Grp))),
            i = (n === tt || n === nt || n === ot ? I.PCenterEnableAccordion ? b.removeChild(r.el.querySelector(P.P_Category_Item + ":not(.ot-accordion-layout)")) : b.removeChild(r.el.querySelector(P.P_Category_Item + ".ot-accordion-layout")) : n === it && (I.PCenterEnableAccordion = !1), e("#onetrust-pc-sdk " + P.P_Category_Item)),
            s = S.isV2Template ? E.subGrpEl.cloneNode(!0) : _(e(P.P_Sub_Grp_Cntr)),
            a = S.isV2Template ? null : _(e(P.P_Acc_Container + " " + P.P_Sub_Grp_Cntr));
        I.PCTemplateUpgrade && /otPcTab/.test(n) && (o = e(".ot-abt-tab").cloneNode(!0), b.removeChild(e(".ot-abt-tab"))), r.el.removeChild(i), B.setVendorListClass(e, i), B.setPCHeader(e, i), B.createHtmlForEachGroup({
            fm: e,
            fragment: t,
            categoryGroupTemplate: i,
            cookiePreferencesContainer: r,
            popupSubGrpContainer: a,
            subGrpContainer: s
        }), B.setPcTabLayout(e, t, o)
    }, n.prototype.getActiveVendorCount = function(e) {
        var t = parseInt(e.IabGrpId),
            o = 0;
        return e.Type === T.GroupTypes.Pur ? o = A.tcf2ActiveVendors.pur.get(t) : e.Type === T.GroupTypes.Ft ? o = A.tcf2ActiveVendors.ft.get(t) : e.Type === T.GroupTypes.Spl_Pur ? o = A.tcf2ActiveVendors.spl_pur.get(t) : e.Type === T.GroupTypes.Spl_Ft && (o = A.tcf2ActiveVendors.spl_ft.get(t)), o || 0
    }, n.prototype.getActiveVendorCountForStack = function(e) {
        return A.tcf2ActiveVendors.stack.get(e) || 0
    }, n.prototype.getVendorCountEl = function(e) {
        var t = "[VENDOR_NUMBER]";
        return I.PCVendorsCountText && -1 < I.PCVendorsCountText.indexOf(t) ? '<span class="ot-pur-vdr-count"> ' + I.PCVendorsCountText.replace(t, e.toString()) + " </span>" : ""
    }, n.prototype.createHtmlForEachGroup = function(e) {
        var t = e.fm,
            o = e.fragment,
            n = e.categoryGroupTemplate,
            r = e.cookiePreferencesContainer,
            i = e.popupSubGrpContainer,
            s = e.subGrpContainer,
            e = I.Groups.filter(function(e) {
                return e.Order
            }),
            a = 0 === r.el.children.length;
        I.PCTemplateUpgrade && (L.showVendorService ? V.setHtmlTemplate(t('#onetrust-pc-sdk div[role="alertdialog"]')) : V.removeVSUITemplate(t('#onetrust-pc-sdk div[role="alertdialog"]')));
        for (var l = 0, c = e; l < c.length; l++) {
            var d = c[l],
                u = d.GroupName,
                p = d.CustomGroupId,
                u = B.appendVendorCountElement(d, u),
                h = n.cloneNode(!0),
                h = _(h).el,
                g = "ot-group-id-" + p,
                C = "ot-header-id-" + p,
                y = "ot-desc-id-" + p,
                f = "",
                p = (d.Status === m.ALWAYS_ACTIVE && (f = " ot-status-id-" + p), h.setAttribute("data-optanongroupid", p), h.querySelector("input,button")),
                p = (p && (p.setAttribute("aria-controls", y), p.setAttribute("aria-labelledby", C + f)), B.setParentGroupName(h, u, C, y), B.setPopupData(d, h), B.setParentGroupDescription(h, d, I, y, g)),
                f = (S.isV2Template ? B.setToggle(h, p, d, g, C) : B.setToggleProps(h, p, d, g, C), !!t("#onetrust-pc-sdk " + P.P_Category_Grp).querySelector(P.P_Category_Item)),
                u = (u = r.el.querySelectorAll(P.P_Category_Item + ":not(.ot-vnd-item)"))[u.length - 1],
                y = (a ? r.append(h) : f ? Vt.insertAfter(h, u) : Vt.insertAfter(h, r.el.querySelector(P.P_Li_Hdr) || r.el.querySelector("h3")), B.setSubGroupData(d, h, i, s), I.PCGrpDescLinkPosition === ne.Top),
                g = (d.Type === T.GroupTypes.Stack && y && (p = h.querySelector(P.P_Sub_Grp_Cntr)), y ? p : null);
            B.setVendorListBtn(h, t, o, d, g, I), B.setHostListBtn(h, t, o, d), B.setVendorServiceData(d, h), B.appendHealthSignatureFormToGroup(d, h), L.dataGroupState.push(d)
        }
    }, n.prototype.appendHealthSignatureFormToGroup = function(e, t) {
        var o;
        A.requireSignatureEnabled && e.needsHealthSignature && (o = P.P_Acc_Container, I.PCLayout.Tab && (o = "#ot-desc-id-" + e.CustomGroupId), e = t.querySelector(o), xn.getInstance().getHealthSignatureComponent(e))
    }, n.prototype.appendVendorCountElement = function(e, t) {
        var o, n, r = -1 < e.SubGroups.findIndex(function(e) {
            return e.IsIabPurpose
        });
        return A.isTcfV2Template && (e.IsIabPurpose || r) && (n = void 0, n = e.Type !== T.GroupTypes.Stack && e.Type !== T.GroupTypes.Bundle ? this.getActiveVendorCount(e) : (o = "", o = !e.IsIabPurpose && r ? e.CustomGroupId : e.IabGrpId, this.getActiveVendorCountForStack(o)), t += this.getVendorCountEl(n)), t
    }, n.prototype.setPopupData = function(e, t) {
        A.pcName === rt && (e.ShowVendorList && A.isIab2orv2Template ? (b.removeChild(t.querySelector("p:not(.ot-always-active)")), b.removeChild(t.querySelector(P.P_Acc_Txt + ":not(" + P.P_Acc_Container + ")")), e.SubGroups.length || S.isV2Template || b.removeChild(t.querySelector(P.P_Sub_Grp_Cntr))) : b.removeChild(t.querySelector(P.P_Acc_Container)))
    }, n.prototype.setVendorServiceData = function(e, t) {
        var o, n = A.pcName;
        L.showVendorService && I.VendorServiceConfig.PCVSCategoryView && (o = P.P_Acc_Txt, n === it && (o = P.P_Desc_Container), n = t.querySelector(o), I.PCAccordionStyle === ae.NoAccordion && (n = t), V.insertVendorServiceHtml(e, n))
    }, n.prototype.jsonAddAboutCookies = function(e) {
        var t = {};
        return t.GroupName = e.AboutCookiesText, t.GroupDescription = e.MainInfoText, t.ShowInPopup = !0, t.Order = 0, t.IsAboutGroup = !0, t
    }, n.prototype.setVendorListBtn = function(e, t, o, n, r, i) {
        var s, a, l = A.pcName;
        n.ShowVendorList ? (s = a = void 0, S.isV2Template ? a = (s = E.vListEl.cloneNode(!0)).querySelector(".category-vendors-list-handler") : s = (a = e.querySelector(".category-vendors-list-handler")).parentElement, a.innerHTML = i.VendorListText + "&#x200E;", a.setAttribute(this._ariaLabel, I.PCOpensVendorDetailsAlert), a.setAttribute("data-parent-id", n.CustomGroupId), B.setIABLegalLink(a, n, i), S.isV2Template && (a = e, l === it ? a = e.querySelector("" + P.P_Desc_Container) : i.PCenterEnableAccordion && (a = e.querySelector(P.P_Acc_Txt)), a.insertAdjacentElement("beforeend", s)), r && r.insertAdjacentElement("beforebegin", s)) : S.isV2Template || (l !== nt && l !== tt || i.PCenterEnableAccordion ? (l === rt || l === nt || l === tt && i.PCenterEnableAccordion) && (n = t("#vendor-list-container"), a = e.querySelector(P.P_Acc_Txt), n && o.querySelector("" + P.P_Content).removeChild(n), S.isV2Template || _(a).el.removeChild(a.querySelector(P.P_Ven_Lst_Cntr))) : b.removeChild(e.querySelector(P.P_Ven_Lst_Cntr)), l !== it && l !== ot) || (r = e.querySelector(P.P_Ven_Lst_Cntr)) && r.parentElement.removeChild(r)
    }, n.prototype.setIABLegalLink = function(e, t, o) {
        A.isTcfV2Template ? zn.addIllustrationsLink(e, t, t.ShowVendorList) : o.PCGrpDescType === oe.UserFriendly && (e.insertAdjacentHTML("afterend", "<span class='ot-ext-lnk'></span>"), e.insertAdjacentHTML("afterend", "<a href='" + I.IabLegalTextUrl + "?lang=" + L.consentLanguage + "' rel=\"noopener\" target='_blank'>&nbsp;|&nbsp;" + o.PCVendorFullLegalText + '&nbsp;<span class="ot-scrn-rdr">' + I.NewWinTxt + "</span></a>"))
    }, n.prototype.setHostListBtn = function(e, t, o, n) {
        var r, i = A.pcName,
            s = !1,
            a = (I.showCookieList && (s = -1 < b.findIndex(F(n.SubGroups, [n]), function(e) {
                return -1 === ft.indexOf(e.Type) && e.FirstPartyCookies.length
            })), L.showGeneralVendors && n.GeneralVendorsIds && n.GeneralVendorsIds.length);
        !L.showVendorService && (I.showCookieList || L.showGeneralVendors) && (n.ShowHostList || s || a) ? (s = void 0, S.isV2Template ? (s = (a = E.cListEl.cloneNode(!0)).querySelector(".category-host-list-handler"), r = e, i === it ? r = e.querySelector("" + P.P_Desc_Container) : I.PCenterEnableAccordion && (r = e.querySelector(P.P_Acc_Txt)), r.insertAdjacentElement("beforeend", a)) : s = e.querySelector(".category-host-list-handler"), B.setcListHandler(s, n)) : B.setHostListVendorList(t, o, e)
    }, n.prototype.setcListHandler = function(e, t) {
        var o, n;
        e && (o = (n = B.setcListHeaderTitleAndScreenReader())[0], n = n[1], e.innerHTML = o + "&#x200E;", e.setAttribute(this._ariaLabel, n), e.setAttribute("data-parent-id", t.CustomGroupId))
    }, n.prototype.setcListHeaderTitleAndScreenReader = function() {
        var e, t = L.showTrackingTech ? (e = I.AdditionalTechnologiesConfig.PCTechDetailsText, I.AdditionalTechnologiesConfig.PCTechDetailsAriaLabel) : L.showGeneralVendors ? (e = I.GroupGenVenListLabel, I.PCenterVendorListScreenReader) : (e = I.ThirdPartyCookieListText, I.PCOpensCookiesDetailsAlert);
        return [e, t]
    }, n.prototype.setHostListVendorList = function(e, t, o) {
        var n;
        A.pcName === rt ? (e = e("#vendor-list-container"), n = o.querySelector(P.P_Acc_Txt), e && t.querySelector("" + P.P_Content).removeChild(e), n.querySelector(P.P_Host_Lst_cntr) && _(n).el.removeChild(n.querySelector(P.P_Host_Lst_cntr))) : (t = o.querySelector(P.P_Host_Lst_cntr)) && t.parentElement.removeChild(t)
    }, n.prototype.setSubGroupData = function(e, t, o, n) {
        var r;
        0 < e.SubGroups.length && e.ShowSubgroup && (r = A.pcName === rt && e.ShowVendorList && A.isIab2orv2Template && !I.PCTemplateUpgrade, B.setSubGrps(e, r ? o : n, t, I))
    }, n.prototype.setSubGrps = function(t, o, n, r) {
        var e;
        A.pcName === rt && t.ShowVendorList && A.isIab2orv2Template && !I.PCTemplateUpgrade && (e = n.querySelector(P.P_Sub_Grp_Cntr)).parentElement.removeChild(e), t.SubGroups.forEach(function(e) {
            B.setSubGroups({
                group: t,
                subgroup: e,
                grpEl: n,
                subGrpEl: o,
                json: r
            })
        })
    }, n.prototype.setSubGroups = function(e) {
        var t, o = e.group,
            n = e.subgroup,
            r = e.grpEl,
            i = e.subGrpEl,
            e = e.json,
            s = A.pcName,
            a = B.getRemoveConsentToggle(n),
            i = (S.isV2Template ? i : i.el).cloneNode(!0),
            l = i.querySelector(P.P_Subgp_ul),
            c = i.querySelector(P.P_Subgrp_li).cloneNode(!0),
            d = n.CustomGroupId,
            u = "ot-sub-group-id-" + d,
            p = C.getGrpStatus(n).toLowerCase(),
            h = c.querySelector(".cookie-subgroup>h4, .cookie-subgroup>h5, .cookie-subgroup>h6, .ot-subgrp>h4, .ot-subgrp>h5, .ot-subgrp>h6"),
            g = c.querySelector(P.P_Tgl_Cntr),
            d = (c.setAttribute("data-optanongroupid", d), S.isV2Template ? ((t = B.getInputEle()).querySelector("input").setAttribute("data-optanongroupid", d), t.querySelector("input").classList.add("cookie-subgroup-handler"), t = t.cloneNode(!0), g.insertAdjacentElement("beforeend", t)) : (t = c.querySelector(".ot-toggle")).querySelector("input").setAttribute("data-optanongroupid", d), _(i.querySelector(P.P_Subgp_ul)).html(""), B.addSubgroupName(n, h), B.setDataIfVendorServiceEnabled(h, c, t), t.querySelector("input").setAttribute("id", u), t.querySelector("input").setAttribute(this._ariaLabel, n.GroupName), t.querySelector("label").setAttribute("for", u), B.setSubGroupDescription({
                json: e,
                group: o,
                subgroup: n,
                subGroupClone: c
            }), A.isTcfV2Template && zn.addIllustrationsLink(c, n, o.ShowVendorList, !0), F(vt, mt));
        o.ShowSubgroupToggle && -1 < d.indexOf(n.Type) ? B.setSubGroupToggle({
            id: u,
            subGroupClone: c,
            group: o,
            subgroup: n,
            toggleGroup: g
        }) : p === m.ALWAYS_ACTIVE && (o.ShowSubgroupToggle || -1 === St.indexOf(n.Type)) || (a = !0), B.setSubGroupsProperties({
            removeConsentToggle: a,
            subGroupToggle: t,
            subGroupClone: c,
            status: p,
            subgroup: n,
            grpEl: r,
            pcName: s,
            json: e,
            subGrpElClone: i,
            ulParentContainerEle: l
        })
    }, n.prototype.getRemoveConsentToggle = function(e) {
        var t = !1;
        return t = A.isIab2orv2Template && e.Type === T.GroupTypes.Pur && !e.HasConsentOptOut ? !0 : t
    }, n.prototype.addSubgroupName = function(e, t) {
        var o = e.GroupName;
        A.isTcfV2Template && e.IsIabPurpose && (e = this.getActiveVendorCount(e), o += this.getVendorCountEl(e)), _(t).html(o)
    }, n.prototype.setDataIfVendorServiceEnabled = function(e, t, o) {
        var n;
        L.showVendorService && ((n = document.createElement("div")).classList.add("ot-acc-hdr"), e.classList.add("ot-cat-header"), n.appendChild(e), e = "afterbegin", I.PCCategoryStyle === me.Toggle && (e = "beforeend"), n.insertAdjacentElement(e, o), t.removeChild(t.querySelector(P.P_Subgrp_Tgl_Cntr)), t.insertAdjacentElement("afterbegin", n))
    }, n.prototype.setSubGroupDescription = function(e) {
        var t, o = e.json,
            n = e.group,
            r = e.subgroup,
            e = e.subGroupClone,
            i = A.pcName,
            s = o.PCGrpDescType === oe.Legal,
            i = i === rt && n.ShowVendorList && A.isIab2orv2Template,
            a = _(e.querySelector(P.P_Subgrp_Desc));
        i ? (t = r.DescriptionLegal && s ? r.DescriptionLegal : r.GroupDescription, a.html(t)) : (t = f.safeFormattedGroupDescription(r), i = !1, -1 < kt.indexOf(r.Type) && s && (i = !0, t = r.DescriptionLegal), o.PCenterEnableAccordion && i || (a = _(e.querySelector("p"))), n.ShowSubGroupDescription ? a.html(t) : a.html(""))
    }, n.prototype.setSubGroupToggle = function(e) {
        var t = e.id,
            o = e.subGroupClone,
            n = e.group,
            r = e.subgroup,
            e = e.toggleGroup,
            i = f.isGroupActive(r),
            n = (B.setSubGroupActive({
                group: n,
                subgroup: r,
                subGroupClone: o
            }, i), e.querySelector(".ot-label-status"));
        I.PCShowConsentLabels ? n.innerHTML = i ? I.PCActiveText : I.PCInactiveText : b.removeChild(n), A.legIntSettings.PAllowLI && r.Type === T.GroupTypes.Pur && r.HasLegIntOptOut && (A.legIntSettings.PShowLegIntBtn ? B.setLegIntButton(o, r) : (i = e.cloneNode(!0), e.insertAdjacentElement("afterend", i), n = i.querySelector(".ot-label-status"), (o = i.querySelector("input")).setAttribute("id", t + "-leg-out"), i.querySelector("label").setAttribute("for", t + "-leg-out"), r.IsLegIntToggle = !0, e = f.isGroupActive(r), I.PCShowConsentLabels ? n.innerHTML = e ? I.PCActiveText : I.PCInactiveText : b.removeChild(n), b.setCheckedAttribute(null, o, e), r.IsLegIntToggle = !1))
    }, n.prototype.setSubGroupActive = function(e, t) {
        var o;
        t && (t = e.group, o = e.subgroup, e = e.subGroupClone, t = C.getGrpStatus(t).toLowerCase(), e.querySelector("input").setAttribute("checked", ""), t === m.ALWAYS_ACTIVE) && -1 === kt.indexOf(o.Type) && (e.querySelector("input").disabled = !0, e.querySelector("input").setAttribute("disabled", "true"))
    }, n.prototype.setSubGroupsProperties = function(e) {
        var t = e.removeConsentToggle,
            o = e.subGroupToggle,
            n = e.subGroupClone,
            r = e.status,
            i = e.subgroup,
            s = e.grpEl,
            a = e.pcName,
            l = e.json,
            c = e.subGrpElClone,
            e = e.ulParentContainerEle;
        t && (o.classList.add("ot-hide-tgl"), o.querySelector("input").setAttribute(this._ariaHidden, "true")), r !== m.ALWAYS_ACTIVE && r !== m.ALWAYS_INACTIVE || t || (o && o.parentElement.removeChild(o), (t = n.querySelector(P.P_Tgl_Cntr)) && t.classList.add("ot-always-active-subgroup"), B.setAlwaysActive(n, !0, r === m.ALWAYS_INACTIVE)), "COOKIE" === i.Type && -1 !== i.Parent.indexOf("STACK") && d(c, "display: none;"), _(e).append(n), S.isV2Template ? (o = s, "otPcTab" === a ? o = s.querySelector("" + P.P_Desc_Container) : l.PCenterEnableAccordion && (o = s.querySelector(P.P_Acc_Txt)), o.insertAdjacentElement("beforeend", c)) : (t = s.querySelector(P.P_Category_Item + " " + P.P_Ven_Lst_Cntr)) && t.insertAdjacentElement("beforebegin", c), L.showVendorService && I.VendorServiceConfig.PCVSCategoryView && V.insertVendorServiceHtml(i, e)
    }, n.prototype.getInputEleForCategory = function(e) {
        return L.showVendorService && I.PCCategoryStyle === me.Checkbox && e.classList.add("ot-checkbox-consent"), B.getInputEle()
    }, n.prototype.getInputEle = function() {
        return !A.isIab2orv2Template && I.PCTemplateUpgrade ? On() : E.toggleEl.cloneNode(!0)
    }, n.prototype.setToggle = function(e, t, o, n, r) {
        var i = B.getInputEleForCategory(e),
            s = (i.querySelector("input").classList.add("category-switch-handler"), i.querySelector("input")),
            a = e.querySelector(P.P_Category_Header),
            l = f.isGroupActive(o),
            c = [m.ALWAYS_ACTIVE, m.ALWAYS_INACTIVE].includes(C.getGrpStatus(o).toLowerCase()),
            d = o.OptanonGroupId.toString(),
            u = T.GroupTypes,
            p = !0;
        !A.isIab2orv2Template || o.Type !== u.Pur && o.Type !== u.Stack || o.HasConsentOptOut || (p = !1), _(i.querySelector("label")).attr("for", n), _(i.querySelector(".ot-label-txt")).html(o.GroupName), _(i.querySelector(".ot-switch-nob")).attr("aria-label", o.GroupName);
        A.legIntSettings.PAllowLI && o.Type === u.Pur && o.HasLegIntOptOut && (A.legIntSettings.PShowLegIntBtn ? B.setLegIntButton(e, o, !0, t) : (u = i.cloneNode(!0), o.IsLegIntToggle = !0, t = f.isGroupActive(o), h = u.querySelector(".ot-label-status"), I.PCShowConsentLabels ? h.innerHTML = t ? I.PCActiveText : I.PCInactiveText : b.removeChild(h), o.IsLegIntToggle = !1, f.setInputID(u.querySelector("input"), n + "-leg-out", d, t, r), _(u.querySelector("label")).attr("for", n + "-leg-out"), a.insertAdjacentElement("afterend", u)));
        var h = i.querySelector(".ot-label-status"),
            d = (I.PCShowConsentLabels ? h.innerHTML = l ? I.PCActiveText : I.PCInactiveText : b.removeChild(h), I.PCCategoryStyle === me.Toggle);
        this.hideToggleContainer(c, p, d, i), p && this.setAlwaysActiveOrToggleInput(o, e, i, s, n, r), B.setNoAccordionHeader(e, c), _(i.querySelector(".ot-switch-nob")).attr("aria-checked", s.checked)
    }, n.prototype.setNoAccordionHeader = function(e, t) {
        var o, n, r, i;
        !A.isIab2orv2Template && I.PCTemplateUpgrade && (o = I.PCCategoryStyle === me.Checkbox, I.PCAccordionStyle === ae.NoAccordion) && o && ((o = document.createElement("div")).classList.add("ot-acc-hdr"), n = e.querySelector(".ot-chkbox"), r = e.querySelector(".ot-always-active"), i = e.querySelector(P.P_Category_Header), n && o.appendChild(n), o.appendChild(i), t && o.appendChild(r), e.insertBefore(o, e.firstChild))
    }, n.prototype.hideToggleContainer = function(e, t, o, n) {
        !e && t || !o || (n.classList.add("ot-hide-tgl"), n.querySelector("input").setAttribute(this._ariaHidden, "true"))
    }, n.prototype.setAlwaysActiveOrToggleInput = function(e, t, o, n, r, i) {
        var s = "always active" === C.getGrpStatus(e).toLowerCase(),
            a = "always inactive" === C.getGrpStatus(e).toLowerCase(),
            l = I.PCCategoryStyle === me.Toggle,
            c = e.OptanonGroupId.toString(),
            e = f.isGroupActive(e),
            d = t.querySelector(P.P_Category_Header);
        !A.isIab2orv2Template && I.PCTemplateUpgrade ? ((s || a) && I.PCShowAlwaysActiveToggle && (B.setAlwaysActive(t, !1, a), o.querySelector("input").setAttribute("disabled", "true")), s && l || B.insertAccordionInputHeader(d, o), f.setInputID(n, r, c, e, i), B.insertAccordionPointer(t, d)) : (B.insertAccordionPointer(t, d), s || a ? I.PCShowAlwaysActiveToggle && B.setAlwaysActive(t, !1, a) : (B.insertAccordionInputHeader(d, o), f.setInputID(n, r, c, e, i)))
    }, n.prototype.setOptOutSignalVisibility = function(e) {
        var t = A.gpcEnabled && A.gpcForAGrpEnabled,
            o = h.isAlertBoxClosedAndValid() && f.isAnyGroupOptedOut();
        I.PCShowOptOutSignal && (t || o || A.previewMode) ? e.classList.remove("ot-hide") : e.classList.add("ot-hide")
    }, n.prototype.setOptOutSignalNotification = function(e) {
        e = y.createOptOutSignalElement(e, !0);
        B.setOptOutSignalVisibility(e)
    }, n.prototype.insertAccordionInputHeader = function(e, t) {
        var o = B.getPositionForInputEle();
        e.insertAdjacentElement(o, t)
    }, n.prototype.getPositionForInputEle = function() {
        var e = "beforebegin";
        return e = !A.isIab2orv2Template && I.PCTemplateUpgrade && I.PCCategoryStyle !== me.Toggle ? e : "afterend"
    }, n.prototype.insertAccordionPointer = function(e, t) {
        var o, n;
        e.classList.add("ot-vs-config"), I.PCenterEnableAccordion && (!A.isIab2orv2Template && I.PCTemplateUpgrade ? (e = e.querySelector(P.P_Acc_Header), o = n = void 0, n = (I.PCAccordionStyle === ae.Caret ? (o = "beforeend", E.arrowEl) : (o = I.PCCategoryStyle === me.Checkbox ? "beforeend" : "afterbegin", E.plusMinusEl)).cloneNode(!0), e.insertAdjacentElement(o, n)) : I.PCAccordionStyle === ae.Caret ? t.insertAdjacentElement("afterend", E.arrowEl.cloneNode(!0)) : t.insertAdjacentElement("beforebegin", E.plusMinusEl.cloneNode(!0)))
    }, n.prototype.setToggleProps = function(e, t, o, n, r) {
        var i = e.querySelectorAll("input:not(.cookie-subgroup-handler)"),
            s = e.querySelectorAll("label"),
            a = f.isGroupActive(o),
            l = o.CustomGroupId,
            c = e.querySelector(".label-text");
        c && _(c).html(o.GroupName);
        for (var d, u, p, h, g = 0; g < i.length; g++) s[g] && _(s[g]).attr("for", n), 2 <= i.length && 0 === g ? _(i[g]).attr("id", n + "-toggle") : (d = this.canShowConsentToggle(o), this.canShowLegIntToggle(o) && (A.legIntSettings.PShowLegIntBtn ? B.setLegIntButton(e, o, !0, t) : (h = (u = e.querySelector(P.P_Tgl_Cntr + ":not(" + P.P_Subgrp_Tgl_Cntr + ")") || e.querySelector(".ot-toggle")).cloneNode(!0), u.insertAdjacentElement("afterend", h), u = h.querySelector("input"), o.IsLegIntToggle = !0, p = f.isGroupActive(o), o.IsLegIntToggle = !1, f.setInputID(u, n + "-leg-out", l, p, r), _(h.querySelector("label")).attr("for", n + "-leg-out"), b.removeChild(h.querySelector(P.P_Arrw_Cntr)))), u = C.getGrpStatus(o).toLowerCase() === m.ALWAYS_ACTIVE, p = C.getGrpStatus(o).toLowerCase() === m.ALWAYS_INACTIVE, !u && d || (h = i[g].closest(".ot-toggle")) && (h.classList.add("ot-hide-tgl"), h.querySelector("input").setAttribute(this._ariaHidden, !0)), d && (u && B.setAlwaysActive(e, !1, p), f.setInputID(i[g], n, l, a, r)))
    }, n.prototype.canShowConsentToggle = function(e) {
        var t = !0,
            o = T.GroupTypes;
        return t = !A.isIab2orv2Template || e.Type !== o.Pur && e.Type !== o.Stack || e.HasConsentOptOut ? t : !1
    }, n.prototype.canShowLegIntToggle = function(e) {
        var t = T.GroupTypes;
        return A.legIntSettings.PAllowLI && e.Type === t.Pur && e.HasLegIntOptOut
    }, n.prototype.setAlwaysActive = function(e, t, o) {
        void 0 === t && (t = !1), void 0 === o && (o = !1);
        var n, r = A.pcName;
        r === rt || r === it || t ? (r = e.querySelector(P.P_Tgl_Cntr)) && r.insertAdjacentElement("afterbegin", _("<div class='ot-always-active'>" + (o ? I.AlwaysInactiveText : I.AlwaysActiveText) + "</div>", "ce").el) : (r = "ot-status-id-" + (r = null == (n = r = (t = e.querySelector(P.P_Category_Header)).id) ? void 0 : n.split("-")[3]), !S.isV2Template && I.PCenterEnableAccordion && (r = "ot-status-id-" + (r = null == (n = r = (t = e.querySelector(P.P_Arrw_Cntr)).id) ? void 0 : n.split("-")[3])), _(t).el.insertAdjacentElement("afterend", _('<div id="' + r + "\" class='ot-always-active'>" + (o ? I.AlwaysInactiveText : I.AlwaysActiveText) + "</div>", "ce").el)), I.PCenterEnableAccordion ? (n = e.querySelector(P.P_Acc_Header)) && n.classList.add("ot-always-active-group") : ((t = e.querySelector("" + P.P_Desc_Container)) && t.classList.add("ot-always-active-group"), e.classList.add("ot-always-active-group"))
    }, n.prototype.setPcTabLayout = function(e, t, o) {
        var n = e(".ot-tab-desc");
        "otPcTab" === A.pcName && (o && e("#onetrust-pc-sdk " + P.P_Category_Grp).insertAdjacentElement("afterbegin", o), n && 640 < window.innerWidth && _(n).append(t.querySelectorAll("#onetrust-pc-sdk " + P.P_Desc_Container)), I.IsIabEnabled ? e(P.P_Desc_Container + " .category-vendors-list-handler").innerHTML = I.VendorListText + "&#x200E;" : (o = e(P.P_Desc_Container + " .category-vendors-list-handler")) && o.parentElement.removeChild(o))
    }, n.prototype.setVendorListClass = function(e, t) {
        S.isV2Template ? I.PCAccordionStyle === ae.Caret && (_(e("#onetrust-pc-sdk " + P.P_Vendor_List)).addClass("ot-enbl-chr"), I.PCenterEnableAccordion) && _(e("#onetrust-pc-sdk " + P.P_Content)).addClass("ot-enbl-chr") : _(t.querySelector(P.P_Sub_Grp_Cntr)).remove()
    }, n.prototype.setPCHeader = function(e, t) {
        var o = A.pcName,
            n = e(P.P_Li_Hdr) || t.querySelector(P.P_Li_Hdr);
        A.legIntSettings.PAllowLI && A.grpContainLegalOptOut && A.isIab2orv2Template && !A.legIntSettings.PShowLegIntBtn ? (n.querySelector("span:first-child").innerText = I.ConsentText, n.querySelector("span:last-child").innerText = I.LegitInterestText, S.isV2Template && (n.querySelector("span:first-child").innerText = I.PCenterConsentText, n.querySelector("span:last-child").innerText = I.PCenterLegIntColumnHeader), I.PCenterEnableAccordion && n ? n.classList.add("ot-leg-border-color") : "otPcList" === o && t.insertAdjacentElement("afterbegin", n)) : (b.removeChild(e("#onetrust-pc-sdk " + P.P_Li_Hdr)), b.removeChild(t.querySelector(P.P_Li_Hdr)))
    };
    var B, Jn = n;

    function n() {
        this._ariaHidden = "aria-hidden", this._ariaLabel = "aria-label"
    }
    Qn.prototype.showBanner = function() {
        var e = A.bannerName,
            t = _(this.El);
        L.skipAddingHTML && "none" === getComputedStyle(t.el[0]).getPropertyValue("display") && e !== Ye && e !== Je && e !== $e ? t.css("display: block;") : I.BAnimation === ve.SlideIn ? this.slideInAnimation(t, e) : I.BAnimation === ve.FadeIn && t.addClass("ot-fade-in")
    }, Qn.prototype.insertAlertHtml = function() {
        I.IsGPPEnabled && Yr.setCmpDisplayStatus("visible");

        function e(e) {
            return t.querySelector(e)
        }
        var t = document.createDocumentFragment(),
            o = document.createElement("div"),
            o = (_(o).html(G.bannerGroup.html), o.querySelector("#onetrust-banner-sdk"));
        this.setAriaModalForBanner(o), S.fp.CookieV2SSR ? (_(t).append(o), this.setBannerLinkAttributes(e), this._rejectBtn = e("#onetrust-reject-all-handler"), this._acceptBtn = e("#onetrust-accept-btn-handler")) : this.insertHtmlForNonSSRFlow(o, t, e, function(e) {
            return t.querySelectorAll(e)
        }), this.ssrAndNonSSRCommonHtml(t)
    }, Qn.prototype.insertHtmlForNonSSRFlow = function(e, t, o, n) {
        var r, i, s = A.bannerName;
        G.bannerGroup && (I.BannerRelativeFontSizesToggle && _(e).addClass("otRelFont"), (I.BInitialFocus || I.BInitialFocusLinkAndButton) && (e.setAttribute("tabindex", "0"), e.setAttribute("role", "main")), I.useRTL && _(e).attr("dir", "rtl"), A.isIab2orv2Template && I.BannerDPDDescription.length && _(e).addClass("ot-iab-2"), (r = I.BannerPosition) && ("bottom-left" === r ? _(e).addClass("ot-bottom-left") : "bottom-right" === r ? _(e).addClass("ot-bottom-right") : _(e).addClass(r)), _(t).append(e), this.setBannerData(o), r = this.setIAB2HtmlData(o), this.setAcceptAndRejectBtnHtml(o), t = this.htmlForBannerButtons(e, o, n), n = I.showBannerCloseButton, i = I.BCloseButtonType === Se.Link, this.setWidthForFlatBanner(o, r, t), n && s === Xe && A.isIab2orv2Template && !i && ((t = o(".banner-close-btn-container")).parentElement.removeChild(t), _(e).el.insertAdjacentElement("beforeEnd", t), _(o("#onetrust-banner-sdk .ot-sdk-container")).addClass("ot-top-cntr")), this.setBannerOptions(o, r), this.setBannerLogo(e, o))
    }, Qn.prototype.setBannerOptions = function(e, t) {
        var o = this,
            n = A.bannerName,
            r = this.isCmpEnabled(),
            i = [{
                type: "purpose",
                titleKey: "BannerPurposeTitle",
                descriptionKey: "BannerPurposeDescription",
                identifier: "purpose-option"
            }, {
                type: "feature",
                titleKey: "BannerFeatureTitle",
                descriptionKey: "BannerFeatureDescription",
                identifier: "feature-option"
            }, {
                type: "information",
                titleKey: "BannerInformationTitle",
                descriptionKey: "BannerInformationDescription",
                identifier: "information-option"
            }],
            s = _(e(this._bannerOptionsSelector)).el;
        r ? (n === Qe ? this.setFloatingRoundedIconBannerCmpOptions(e, i) : (this.setCmpBannerOptions(e, i), n === Ze && t.el.insertAdjacentElement("beforeend", s)), _(window).on("resize", function() {
            window.innerWidth <= 896 && o.setBannerOptionContent()
        })) : (A.bannerName === Xe && (s = _(e(".banner-options-card")).el), b.removeChild(s))
    }, Qn.prototype.setWidthForFlatBanner = function(e, t, o) {
        var n = A.bannerName,
            r = I.showBannerCloseButton,
            i = this.hasNoActionButtons();
        n === Je && (A.isIab2orv2Template && (t.removeClass("ot-sdk-eight"), I.showBannerAcceptButton && o.insertAdjacentElement("afterbegin", this._acceptBtn), I.showBannerCookieSettings) && o.insertAdjacentElement("beforeend", e("#onetrust-pc-btn-handler")), r && !i && A.isIab2orv2Template ? t.addClass("ot-sdk-nine") : r && i ? t.addClass("ot-sdk-eleven") : !r && i ? t.addClass("ot-sdk-twelve") : r || i || !A.isIab2orv2Template || (t.addClass("ot-sdk-ten"), _(e(this._btnGrpParentSelector)).addClass("ot-sdk-two"), _(e(this._btnGrpParentSelector)).removeClass("ot-sdk-three")))
    }, Qn.prototype.hasNoActionButtons = function() {
        return !I.showBannerAcceptButton && !I.showBannerCookieSettings && !I.BannerShowRejectAllButton
    }, Qn.prototype.htmlForBannerButtons = function(e, t, o) {
        var n = A.bannerName,
            r = (this.hasNoActionButtons() && t(this._btnGrpParentSelector).parentElement.removeChild(t(this._btnGrpParentSelector)), I.showBannerCloseButton),
            i = _(o(".banner-close-button")).el,
            s = t("#onetrust-button-group"),
            a = I.BCloseButtonType === Se.Link;
        if (r)
            for (l = 0; l < i.length; l++) a ? (_(i[l]).html(I.BContinueText), _(e).addClass("ot-close-btn-link"), _(i[l]).addClass("ot-close-link"), _(i[l]).removeClass("onetrust-close-btn-ui"), _(i[l]).removeClass("ot-close-icon"), n !== Xe && n !== Qe || (s.insertAdjacentElement("afterbegin", t(".onetrust-close-btn-handler").parentElement), _(i[l]).attr("tabindex", "1"))) : (y.setCloseIcon(t("#onetrust-banner-sdk .ot-close-icon")), _(i[l]).el.setAttribute(ht, I.BannerCloseButtonText || "Close Cookie Banner"));
        else {
            for (var l = 0; l < i.length; l++) _(i[l].parentElement).el.removeChild(i[l]);
            n !== Je && n !== Qe || b.removeChild(t("#onetrust-close-btn-container-mobile"))
        }
        return s
    }, Qn.prototype.setAcceptAndRejectBtnHtml = function(e) {
        var t = A.bannerName,
            e = (I.showBannerAcceptButton ? (this._acceptBtn = e("#onetrust-accept-btn-handler"), _(this._acceptBtn).html(I.AlertAllowCookiesText), t !== $e || I.showBannerCookieSettings || I.BannerShowRejectAllButton || _(this._acceptBtn.parentElement).addClass("accept-btn-only")) : b.removeChild(e("#onetrust-accept-btn-handler")), I.BannerShowRejectAllButton && I.BannerRejectAllButtonText.trim() ? (this._rejectBtn = e("#onetrust-reject-all-handler"), _(this._rejectBtn).html(I.BannerRejectAllButtonText), e(this._btnGrpParentSelector).classList.add("has-reject-all-button")) : (b.removeChild(e("#onetrust-reject-all-handler")), b.removeChild(e("#onetrust-reject-btn-container"))), _(e("#onetrust-pc-btn-handler")));
        I.showBannerCookieSettings ? (e.html(I.AlertMoreInfoText), I.BannerSettingsButtonDisplayLink && e.addClass("cookie-setting-link"), t !== $e || I.showBannerAcceptButton || e.addClass("cookie-settings-btn-only")) : b.removeChild(e.el)
    }, Qn.prototype.setIAB2HtmlData = function(e) {
        var t = A.bannerName,
            o = (A.isIab2orv2Template && I.BannerDPDDescription.length && t !== Ze ? (_(e(".ot-dpd-container .ot-dpd-title")).html(I.BannerDPDTitle), _(e(".ot-dpd-container .ot-dpd-desc")).html(I.BannerDPDDescription.join(",&nbsp;"))) : b.removeChild(e(".ot-dpd-container")), _(e(this._otGrpContainerSelector))),
            t = (A.isIab2orv2Template && I.BannerAdditionalDescription.trim() && this.setAdditionalDesc(e), A.isIab2orv2Template && I.BannerDPDDescription.length ? t !== Ze ? _(e(".ot-dpd-container .ot-dpd-desc")) : o : _(e(Yn.POLICY_TEXT_SELECTOR)));
        return I.IsIabEnabled && I.BannerIABPartnersLink && t.append('<button class="ot-link-btn onetrust-vendors-list-handler">\n        ' + I.BannerIABPartnersLink + "\n        </button>"), o
    }, Qn.prototype.setBannerData = function(e) {
        var t;
        I.BannerTitle ? (_(e("#onetrust-policy-title")).html(I.BannerTitle), _(e('[role="alertdialog"]')).attr(ht, I.BannerTitle)) : (b.removeChild(e("#onetrust-policy-title")), _(e("#onetrust-banner-sdk")).addClass("ot-wo-title"), _(e('[role="alertdialog"]')).attr(ht, I.AriaPrivacy)), !I.IsIabEnabled && L.showGeneralVendors && I.BannerNonIABVendorListText && ((t = document.createElement("div")).setAttribute("id", "ot-gv-link-ctnr"), _(t).html('<button class="ot-link-btn ot-gv-list-handler">' + I.BannerNonIABVendorListText + "</button>"), _(e("#onetrust-policy")).el.appendChild(t)), _(e(Yn.POLICY_TEXT_SELECTOR)).html(I.AlertNoticeText), this.setBannerLinkAttributes(e)
    }, Qn.prototype.setBannerLinkAttributes = function(e) {
        var t;
        _(e(this.cookiePolicyLinkSelector)).length && (I.BShowPolicyLink && I.BShowImprintLink ? ((t = _(e(Yn.POLICY_TEXT_SELECTOR + " a:first-of-type"))).attr(ht, I.BCookiePolicyLinkScreenReader), t.attr("rel", "noopener"), t.attr("target", "_blank"), (t = _(e(Yn.POLICY_TEXT_SELECTOR + " a:nth-of-type(2)"))).attr(ht, I.BImprintLinkScreenReader), t.attr("rel", "noopener"), t) : (t = _(e(this.cookiePolicyLinkSelector)), I.BShowPolicyLink ? t.attr(ht, I.BCookiePolicyLinkScreenReader) : I.BShowImprintLink && t.attr(ht, I.BImprintLinkScreenReader), t.attr("rel", "noopener"), t)).attr("target", "_blank")
    }, Qn.prototype.isCmpEnabled = function() {
        return I.BannerPurposeTitle || I.BannerPurposeDescription || I.BannerFeatureTitle || I.BannerFeatureDescription || I.BannerInformationTitle || I.BannerInformationDescription
    }, Qn.prototype.ssrAndNonSSRCommonHtml = function(t) {
        function e(e) {
            return t.querySelector(e)
        }
        var o, n = this,
            r = this.isCmpEnabled(),
            i = (this.setOptOutSignalNotification(e), "[VENDOR_NUMBER]"),
            s = _(e(Yn.POLICY_TEXT_SELECTOR)).html(),
            i = (A.isIab2orv2Template && -1 < s.indexOf(i) && (o = '<span class="ot-tcf2-vendor-count ot-text-bold">' + A.tcf2ActiveVendors.all.toString() + "</span>", s = y.replaceTextFromString(i, s, o), _(e(Yn.POLICY_TEXT_SELECTOR)).html(s)), I.BRegionAriaLabel && (_(e("#onetrust-banner-sdk")).attr("role", "region"), _(e("#onetrust-banner-sdk")).attr(ht, I.BRegionAriaLabel)), A.bannerName === Ze && S.moduleInitializer.IsSuppressPC && (L.dataGroupState = I.Groups.filter(function(e) {
                return e.Order
            })), A.bannerName === Ze && (this._fourBtns = I.BannerShowRejectAllButton && I.showBannerAcceptButton && I.showBannerCookieSettings && I.BShowSaveBtn, this._saveBtn = e(".ot-bnr-save-handler"), this._settingsBtn = e("#onetrust-pc-btn-handler"), this._btnsCntr = e(".banner-actions-container"), I.BShowSaveBtn ? _(this._saveBtn).html(I.BSaveBtnTxt) : (b.removeChild(this._saveBtn), this._saveBtn = null), y.insertFooterLogo(t.querySelectorAll(".ot-bnr-footer-logo a")), this._descriptCntr = e(".ot-cat-lst"), this.setBannerBtn(), window.addEventListener("resize", function() {
                n.setBannerBtn()
            }), this._fourBtns && _(e("#onetrust-banner-sdk")).addClass("has-reject-all-button"), this.insertGrps(e)), document.createElement("div"));
        _(i).append(t), A.ignoreInjectingHtmlCss || (_("#onetrust-consent-sdk").append(i.firstChild), r && this.setBannerOptionContent()), this.setBnrBtnGrpAlignment()
    }, Qn.prototype.setAriaModalForBanner = function(e) {
        I.ForceConsent && e.querySelector('[role="alertdialog"]').setAttribute("aria-modal", "true")
    }, Qn.prototype.setBnrBtnGrpAlignment = function() {
        var e = _(this._otGrpContainerSelector).el,
            t = _(this._btnGrpParentSelector).el,
            e = ((e.length && e[0].clientHeight) < (t.length && t[0].clientHeight) ? _("#onetrust-banner-sdk").removeClass("vertical-align-content") : _("#onetrust-banner-sdk").addClass("vertical-align-content"), document.querySelector("#onetrust-button-group-parent button:first-of-type")),
            t = document.querySelector("#onetrust-button-group-parent button:last-of-type");
        t && e && 1 < Math.abs(t.offsetTop - e.offsetTop) && _("#onetrust-banner-sdk").addClass("ot-buttons-fw")
    }, Qn.prototype.slideInAnimation = function(e, t) {
        t === Je ? "bottom" === I.BannerPosition ? (e.css("bottom: -99px;"), e.animate({
            bottom: "0px"
        }, 1e3), L.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("bottom: 0px;"), L.bnrAnimationInProg = !1
        }, 1e3)) : (e.css("top: -99px; bottom: auto;"), A.pagePushedDown && !Qo.checkIsBrowserIE11OrBelow() ? Qo.BannerPushDownHandler() : (e.animate({
            top: "0"
        }, 1e3), L.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("top: 0px; bottom: auto;"), L.bnrAnimationInProg = !1
        }, 1e3))) : t !== Ye && t !== $e || (e.css("bottom: -300px;"), e.animate({
            bottom: "1em"
        }, 2e3), L.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("bottom: 1rem;"), L.bnrAnimationInProg = !1
        }, 2e3))
    }, Qn.prototype.setBannerBtn = function() {
        window.innerWidth <= 600 ? (b.insertElement(this._btnsCntr, this._settingsBtn, "afterbegin"), b.insertElement(this._btnsCntr, this._saveBtn, "afterbegin"), b.insertElement(this._btnsCntr, this._acceptBtn, "afterbegin"), b.insertElement(this._btnsCntr, this._rejectBtn, "afterbegin")) : this._fourBtns ? (this._descriptCntr.insertAdjacentElement("beforeend", this._settingsBtn), this._acceptBtn.insertAdjacentElement("beforebegin", this._rejectBtn), this._btnsCntr.insertAdjacentElement("beforebegin", this._saveBtn)) : (b.insertElement(this._btnsCntr, this._settingsBtn, "beforebegin"), b.insertElement(this._btnsCntr, this._saveBtn, this._settingsBtn ? "afterbegin" : "beforebegin"), b.insertElement(this._btnsCntr, this._rejectBtn, "beforeend"), b.insertElement(this._btnsCntr, this._acceptBtn, "beforeend"))
    }, Qn.prototype.setCmpBannerOptions = function(n, e) {
        var r = _(n("#banner-options .banner-option")).el.cloneNode(!0),
            i = (_(n(this._bannerOptionsSelector)).html(""), 1);
        e.forEach(function(e) {
            var t = r.cloneNode(!0),
                o = I[e.titleKey],
                e = I[e.descriptionKey];
            (o || e) && (t.querySelector(".banner-option-header :first-child").innerHTML = o, o = t.querySelector(".banner-option-details"), e ? (o.setAttribute("id", "option-details-" + i++), o.innerHTML = e) : o.parentElement.removeChild(o), _(n("#banner-options")).el.appendChild(t))
        })
    }, Qn.prototype.setFloatingRoundedIconBannerCmpOptions = function(r, e) {
        var i = this,
            s = _(r("#banner-options button")).el.cloneNode(!0),
            n = _(r(".banner-option-details")).el.cloneNode(!0);
        _(r(this._bannerOptionsSelector)).html(""), e.forEach(function(e) {
            var t = s.cloneNode(!0),
                o = I[e.titleKey],
                n = I[e.descriptionKey];
            (o || n) && (t.setAttribute("id", e.identifier), t.querySelector(".banner-option-header :first-child").innerHTML = o, _(r(i._bannerOptionsSelector)).el.appendChild(t))
        }), e.forEach(function(e) {
            var t, o = I[e.descriptionKey];
            o && ((t = n.cloneNode(!0)).innerHTML = o, t.classList.add(e.identifier), _(r(i._bannerOptionsSelector)).el.appendChild(t))
        })
    }, Qn.prototype.setBannerOptionContent = function() {
        var t = this;
        A.bannerName !== Je && A.bannerName !== Qe || setTimeout(function() {
            var e;
            (window.innerWidth < 769 ? (e = _(t._bannerOptionsSelector).el[0], _(t._otGrpContainerSelector)) : (e = _(t._bannerOptionsSelector).el[0], A.bannerName === Qe ? _(".banner-content") : _("#onetrust-banner-sdk .ot-sdk-container"))).el[0].appendChild(e)
        })
    }, Qn.prototype.setAdditionalDesc = function(e) {
        var t = I.BannerAdditionalDescPlacement,
            o = document.createElement("span"),
            n = (o.classList.add("ot-b-addl-desc"), o.innerHTML = I.BannerAdditionalDescription, e(Yn.POLICY_TEXT_SELECTOR));
        t === se.AfterTitle ? n.insertAdjacentElement("beforeBegin", o) : t === se.AfterDescription ? n.insertAdjacentElement("afterEnd", o) : t === se.AfterDPD && (n = e(".ot-dpd-container .ot-dpd-desc"), (n = I.ChoicesBanner ? e(this._otGrpContainerSelector) : n).insertAdjacentElement("beforeEnd", o))
    }, Qn.prototype.insertGrps = function(e) {
        var d = e(".ot-cat-item").cloneNode(!0),
            u = (b.removeChild(e(".ot-cat-item")), I.BCategoryStyle === me.Checkbox ? b.removeChild(d.querySelector(".ot-tgl")) : (b.removeChild(d.querySelector(".ot-chkbox")), _(d).addClass("ot-cat-bdr")), e(".ot-cat-lst ul"));
        I.Groups.forEach(function(e) {
            var t = d.cloneNode(!0),
                o = t.querySelector(".ot-tgl,.ot-chkbox"),
                n = e.GroupName,
                r = e.CustomGroupId,
                i = "ot-bnr-grp-id-" + r,
                s = "ot-bnr-hdr-id-" + r,
                a = -1 !== St.indexOf(e.Type),
                l = C.getGrpStatus(e).toLowerCase() === m.ALWAYS_ACTIVE || a,
                c = C.getGrpStatus(e).toLowerCase() === m.ALWAYS_INACTIVE || a,
                a = f.isGroupActive(e) || a,
                e = (_(o.querySelector("label")).attr("for", i), _(o.querySelector(".ot-label-txt")).html(e.GroupName), o.querySelector("input")),
                l = ((l || c) && (I.BCategoryStyle === me.Toggle ? (b.removeChild(o), t.insertAdjacentElement("beforeend", _("<div class='ot-always-active'>" + (c ? I.AlwaysInactiveText : I.AlwaysActiveText) + "</div>", "ce").el)) : _(e).attr("disabled", !0)), e.classList.add("category-switch-handler"), f.setInputID(e, i, r, a, s), t.querySelector("h4"));
            _(l).html(n), _(l).attr("id", s), _(u).append(t)
        })
    }, Qn.prototype.setBannerLogo = function(e, t) {
        var o, n;
        S.fp.CookieV2BannerLogo && I.BnrLogo && (o = t(Zo), n = "afterend", A.bannerName === Qe && (o = t("#onetrust-cookie-btn"), n = "beforeend"), t = y.updateCorrectUrl(I.BnrLogo), _(e).addClass("ot-bnr-w-logo"), _(o).el.innerHTML = "", o.insertAdjacentHTML(n, "<img class='ot-bnr-logo' src='" + t + "'\n            title='" + I.BnrLogoAria + "'\n            alt='" + I.BnrLogoAria + "'/>"))
    }, Qn.prototype.setOptOutSignalNotification = function(e) {
        var t = A.gpcEnabled && A.gpcForAGrpEnabled;
        I.BShowOptOutSignal && (t || A.previewMode) && y.createOptOutSignalElement(e, !1)
    };
    var Yn, Xn = Qn;

    function Qn() {
        this.POLICY_TEXT_SELECTOR = "#onetrust-policy-text", this.El = "#onetrust-banner-sdk", this._saveBtn = null, this._settingsBtn = null, this._acceptBtn = null, this._rejectBtn = null, this._descriptCntr = null, this._btnsCntr = null, this._fourBtns = !1, this._bannerOptionsSelector = "#banner-options", this._btnGrpParentSelector = "#onetrust-button-group-parent", this._otGrpContainerSelector = "#onetrust-group-container", this.cookiePolicyLinkSelector = "#onetrust-policy-text a"
    }
    Zn.prototype.setHeaderConfig = function() {
        c.setHeader(), c.setSearchInput(), c.setHeaderUIConsent();
        var e = c.getGroupsForFilter();
        Rn.setFilterListByGroup(e, !1)
    }, Zn.prototype.filterVendorByString = function(e) {
        c.searchQuery = e, c.filterVendorByGroupOrQuery()
    }, Zn.prototype.filterVendorByGroup = function(e) {
        c.filterGroups = e, c.filterVendorByGroupOrQuery()
    }, Zn.prototype.showVSList = function() {
        c.removeListeners(), c.showEmptyResults(!1, ""), c.clearUIElementsInMain(), c.addVSList(L.getVendorsInDomain())
    }, Zn.prototype.showEmptyResults = function(e, t) {
        e ? this.setNoResultsContent(t) : (_("#onetrust-pc-sdk " + P.P_Vendor_Content).removeClass("no-results"), (e = _("#onetrust-pc-sdk #no-results")).length && e.remove())
    }, Zn.prototype.setNoResultsContent = function(e) {
        var t, o, n, r, i = _("#onetrust-pc-sdk #no-results").el[0];
        if (!i) return t = document.createElement("div"), o = document.createElement("p"), n = document.createTextNode(" " + I.PCVendorNotFound + "."), r = document.createElement("span"), t.id = "no-results", r.id = "user-text", r.innerText = e, o.appendChild(r), o.appendChild(n), t.appendChild(o), _("#onetrust-pc-sdk " + P.P_Vendor_Content).addClass("no-results"), _("#vendor-search-handler").el[0].setAttribute("aria-describedby", t.id), _("#onetrust-pc-sdk " + P.P_Vendor_Content).append(t);
        i.querySelector("span").innerText = e
    }, Zn.prototype.getGroupsFilter = function() {
        for (var e = [], t = 0, o = _("#onetrust-pc-sdk .category-filter-handler").el; t < o.length; t++) {
            var n = o[t],
                r = n.getAttribute("data-purposeid");
            n.checked && e.push(r)
        }
        return e
    }, Zn.prototype.cancelFilter = function() {
        for (var e = 0, t = _("#onetrust-pc-sdk .category-filter-handler").el; e < t.length; e++) {
            var o = t[e],
                n = o.getAttribute("data-optanongroupid"),
                n = 0 <= L.filterByCategories.indexOf(n);
            b.setCheckedAttribute(null, o, n)
        }
        var r = c.getGroupsFilter();
        c.filterVendorByGroup(r)
    }, Zn.prototype.clearFilter = function() {
        c.searchQuery = "", c.filterGroups = []
    }, Zn.prototype.toggleVendors = function(r) {
        L.getVendorsInDomain().forEach(function(e, t) {
            var o, n;
            C.isAlwaysActiveGroup(e.groupRef) || (o = document.getElementById("ot-vendor-id-" + t), n = document.getElementById("ot-vs-lst-id-" + t), V.toggleVendorService(e.groupRef.CustomGroupId, t, r, o), V.toggleVendorService(e.groupRef.CustomGroupId, t, r, n))
        })
    }, Zn.prototype.hideVendorList = function() {
        c.removeListeners(), c.clearUIElementsInMain()
    }, Zn.prototype.addListeners = function() {
        _("#onetrust-pc-sdk " + P.P_Vendor_Content + " .ot-vs-list .category-switch-handler").on("click", c.toggleVendorHandler), _("#onetrust-pc-sdk").on("click", ".ot-vs-list", w.onCategoryItemToggle.bind(this))
    }, Zn.prototype.removeListeners = function() {
        var e;
        document.querySelectorAll("#onetrust-pc-sdk .ot-vs-list .category-switch-handler").forEach(function(e) {
            return e.removeEventListener("click", w.toggleGroupORVendorHandler)
        }), null != (e = document.querySelector("#onetrust-pc-sdk .ot-vs-list")) && e.removeEventListener("click", w.onCategoryItemToggle)
    }, Zn.prototype.toggleVendorHandler = function(e) {
        w.toggleVendorFromListHandler(e), c.checkAllowAllCheckedValue()
    }, Zn.prototype.filterVendorByGroupOrQuery = function() {
        var o = new Map;
        L.getVendorsInDomain().forEach(function(e, t) {
            c.checkVendorConditions(e) && o.set(t, e)
        }), c.showEmptyResults(o.size <= 0, c.searchQuery), c.removeListeners(), c.clearUIElementsInMain(), c.addVSList(o)
    }, Zn.prototype.checkVendorConditions = function(e) {
        return !("" !== c.searchQuery && e.ServiceName.toLowerCase().indexOf(c.searchQuery.toLowerCase()) < 0 || 0 < c.filterGroups.length && c.filterGroups.indexOf(e.groupRef.CustomGroupId) < 0)
    }, Zn.prototype.addVSList = function(e) {
        var t = _("#onetrust-pc-sdk " + P.P_Vendor_Content + " .ot-sdk-column"),
            e = V.getVendorListEle(e);
        t.append(e), c.addListeners()
    }, Zn.prototype.getGroupsForFilter = function() {
        var t = new Map;
        return L.getVendorsInDomain().forEach(function(e) {
            t.has(e.groupRef.CustomGroupId) || t.set(e.groupRef.CustomGroupId, e.groupRef)
        }), Array.from(t.values())
    }, Zn.prototype.clearUIElementsInMain = function() {
        _("#onetrust-pc-sdk " + P.P_Vendor_Content + " ul" + P.P_Host_Cntr).html(""), _("#onetrust-pc-sdk " + P.P_Vendor_Content + " ul" + P.P_Host_Cntr).hide(), _("#onetrust-pc-sdk " + P.P_Vendor_Content + " ul" + P.P_Vendor_Container).html(""), _("#onetrust-pc-sdk " + P.P_Vendor_Content + " ul" + P.P_Vendor_Container).hide();
        var e = _("#onetrust-pc-sdk " + P.P_Vendor_Content + " .ot-vs-list");
        e && e.length && e.remove()
    }, Zn.prototype.setHeader = function() {
        var e = I.VendorServiceConfig.PCVSListTitle,
            t = document.querySelector("#onetrust-pc-sdk " + P.P_Vendor_Title);
        t && (t.innerText = e)
    }, Zn.prototype.setSearchInput = function() {
        var e = I.PCenterCookieListSearch,
            t = I.PCenterCookieSearchAriaLabel,
            o = _("#onetrust-pc-sdk " + P.P_Vendor_Search_Input);
        o.el[0].placeholder = e, o.attr("aria-label", t)
    }, Zn.prototype.setHeaderUIConsent = function() {
        var e, t, o;
        _("#onetrust-pc-sdk " + P.P_Select_Cntr).addClass("ot-vnd-list-cnt"), _("#onetrust-pc-sdk " + P.P_Select_Cntr + " .ot-sel-all").addClass("ot-vs-selc-all"), I.PCCategoryStyle === me.Toggle && (_("#onetrust-pc-sdk " + P.P_Select_Cntr + " .ot-sel-all").addClass("ot-toggle-conf"), I.PCAccordionStyle === ae.Caret) && _("#onetrust-pc-sdk " + P.P_Select_Cntr + " .ot-sel-all").addClass("ot-caret-conf"), _("#onetrust-pc-sdk " + P.P_Leg_Select_All).hide(), _("#onetrust-pc-sdk #" + P.P_Sel_All_Host_El).hide(), _("#onetrust-pc-sdk " + P.P_Host_Cntr).hide(), _(P.P_Vendor_List + " #select-all-text-container").hide(), _("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Leg_El).hide(), _("#onetrust-pc-sdk " + P.P_Vendor_Container).show(), _("#onetrust-pc-sdk " + P.P_Select_Cntr).show(), _("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Consent_El).show("inline-block"), _("#onetrust-pc-sdk " + P.P_Vendor_List).removeClass(P.P_Host_UI), _("#onetrust-pc-sdk " + P.P_Vendor_Content).removeClass(P.P_Host_Cnt), document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox .sel-all-hdr") || ((e = document.createElement("h4")).className = "sel-all-hdr", e.textContent = (null == (t = I.VendorServiceConfig) ? void 0 : t.PCVSAllowAllText) || "PCVSAllowAllText", t = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"), o = I.PCCategoryStyle === me.Checkbox ? "beforeend" : "afterbegin", t.insertAdjacentElement(o, e)), c.checkAllowAllCheckedValue()
    }, Zn.prototype.checkAllowAllCheckedValue = function() {
        var t = !0,
            e = (L.vsConsent.forEach(function(e) {
                e || (t = !1)
            }), document.getElementById("#select-all-vendor-groups-handler"));
        b.setCheckedAttribute(null, e, t)
    };
    var c, $n = Zn;

    function Zn() {
        this.searchQuery = "", this.filterGroups = []
    }
    r.prototype.initCookieSettingHandlers = function() {
        _(document).on("click", ".optanon-show-settings, .optanon-toggle-display, .ot-sdk-show-settings, .ot-pc-handler", this.cookiesSettingsBoundListener)
    }, r.prototype.initFlgtCkStgBtnEventHandlers = function() {
        _(".ot-floating-button__open").on("click", function(e) {
            setTimeout(function() {
                w.floatingCookieSettingOpenBtnClicked(e)
            }, 0)
        }), _(".ot-floating-button__close").on("click", function(e) {
            setTimeout(function() {
                w.floatingCookieSettingCloseBtnClicked(e)
            }, 0)
        })
    }, r.prototype.floatingCookieSettingOpenBtnClicked = function(e) {
        _(w.fltgBtnSltr).addClass("ot-pc-open"), I.cookiePersistentLogo.includes("ot_guard_logo.svg") && _(w.fltgBtnFSltr).attr(gt, "true"), _(w.fltgBtnBSltr).attr(gt, ""), _(w.fltgBtnFrontBtn).el[0].setAttribute(gt, !0), _(w.fltgBtnFrontBtn).el[0].style.display = "none", _(w.fltgBtnBackBtn).el[0].setAttribute(ht, I.AriaClosePreferences), _(w.fltgBtnBackBtn).el[0].setAttribute(gt, !1), _(w.fltgBtnBackBtn).el[0].style.display = "block", g.triggerGoogleAnalyticsEvent(vo, Vo), w.showCookieSettingsHandler(e)
    }, r.prototype.floatingCookieSettingCloseBtnClicked = function(e) {
        _(w.fltgBtnFrontBtn).el[0].setAttribute(ht, I.AriaOpenPreferences), _(w.fltgBtnFrontBtn).el[0].setAttribute(gt, !1), _(w.fltgBtnFrontBtn).el[0].style.display = "block", _(w.fltgBtnBackBtn).el[0].setAttribute(gt, !0), _(w.fltgBtnBackBtn).el[0].style.display = "none", e && (g.triggerGoogleAnalyticsEvent(vo, Oo), w.hideCookieSettingsHandler(e))
    }, r.prototype.initialiseLegIntBtnHandlers = function() {
        _(document).on("click", ".ot-obj-leg-btn-handler", w.onLegIntButtonClick), _(document).on("click", ".ot-remove-objection-handler", w.onLegIntButtonClick)
    }, r.prototype.initialiseAddtlVenHandler = function() {
        _("#onetrust-pc-sdk #ot-addtl-venlst").on("click", w.selectVendorsGroupHandler), _("#onetrust-pc-sdk #ot-selall-adtlven-handler").on("click", w.selAllAdtlVenHandler)
    }, r.prototype.initializeGenVenHandlers = function() {
        _("#onetrust-pc-sdk #ot-gn-venlst .ot-gnven-chkbox-handler").on("click", w.genVendorToggled), _("#onetrust-pc-sdk #ot-gn-venlst .ot-gv-venbox").on("click", w.genVendorDetails), _("#onetrust-pc-sdk #ot-selall-gnven-handler").on("click", w.selectAllGenVenHandler)
    }, r.prototype.initialiseConsentNoticeHandlers = function() {
        var e = this,
            t = 37,
            o = 39;
        A.pcName === it && w.categoryMenuSwitchHandler(), _("#onetrust-pc-sdk .onetrust-close-btn-handler").on("click", w.bannerCloseButtonHandler), _("#onetrust-pc-sdk #accept-recommended-btn-handler").on("click", function() {
            setTimeout(function() {
                O.allowAllEventHandler(!0)
            }, 0)
        }), _("#onetrust-pc-sdk .ot-pc-refuse-all-handler").on("click", function() {
            setTimeout(function() {
                O.rejectAllEventHandler(!0)
            }, 0)
        }), _("#onetrust-pc-sdk #close-pc-btn-handler").on("click", w.hideCookieSettingsHandler), _(document).on("keydown", w.closePCWhenEscPressed), _("#onetrust-pc-sdk #vendor-close-pc-btn-handler").on("click", w.hideCookieSettingsHandler), _("#onetrust-pc-sdk .category-switch-handler").on("click", w.toggleGroupORVendorHandler), _("#onetrust-pc-sdk .cookie-subgroup-handler").on("click", w.toggleSubCategory), _("#onetrust-pc-sdk .category-menu-switch-handler").on("keydown", function(e) {
            A.pcName !== it || e.keyCode !== t && e.keyCode !== o || (I.PCTemplateUpgrade ? w.changeSelectedTabV2(e) : w.changeSelectedTab(e))
        }), _("" + w.PC_SELECTOR).on("click", P.P_Category_Item + " > input:first-child," + P.P_Category_Item + " > button:first-child", w.onCategoryItemToggle.bind(this)), (I.showCookieList || L.showGeneralVendors) && (_("#onetrust-pc-sdk .category-host-list-handler").on("click", function(e) {
            L.showGeneralVendors && I.showCookieList ? L.cookieListType = ge.HostAndGenVen : L.showGeneralVendors ? L.cookieListType = ge.GenVen : L.cookieListType = ge.Host, w.pcLinkSource = e.target, w.loadCookieList(e.target)
        }), y.isOptOutEnabled() ? (_("#onetrust-pc-sdk #select-all-hosts-groups-handler").on("click", w.selectAllHostsGroupsHandler), _("#onetrust-pc-sdk " + P.P_Host_Cntr).on("click", w.selectHostsGroupHandler)) : _("#onetrust-pc-sdk " + P.P_Host_Cntr).on("click", w.toggleAccordionStatus)), w.addListenerWhenIabEnabled(), w.addEventListenerWhenIsHostOrVendorsAreEnabled(), w.adddListenerWhenNoBanner(), _("#onetrust-pc-sdk .ot-gv-list-handler").on("click", function(t) {
            return u(e, void 0, void 0, function() {
                return p(this, function(e) {
                    return L.cookieListType = ge.GenVen, w.loadCookieList(t.target), [2]
                })
            })
        }), w.addListenerWhenVendorServices()
    }, r.prototype.addEventListenerWhenIsHostOrVendorsAreEnabled = function() {
        var e;
        (I.IsIabEnabled || I.showCookieList || L.showGeneralVendors || L.showVendorService) && (_(document).on("click", ".back-btn-handler", w.backBtnHandler), w.addListenerSearchKeyEvent(), _("#onetrust-pc-sdk #filter-btn-handler").on("click", w.toggleVendorFiltersHandler), _("#onetrust-pc-sdk #filter-apply-handler").on("click", w.applyFilterHandler), _("#onetrust-pc-sdk " + P.P_Fltr_Modal).on("click", w.tglFltrOptionHandler), !S.isV2Template && A.pcName !== rt || _("#onetrust-pc-sdk #filter-cancel-handler").on("click", w.cancelFilterHandler), !S.isV2Template && A.pcName === rt || _("#onetrust-pc-sdk #clear-filters-handler").on("click", w.clearFiltersHandler), S.isV2Template ? _("#onetrust-pc-sdk #filter-cancel-handler").on("keydown", function(e) {
            9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(), _("#onetrust-pc-sdk #clear-filters-handler").el[0].focus())
        }) : _("#onetrust-pc-sdk #filter-apply-handler").on("keydown", function(e) {
            9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(), _("#onetrust-pc-sdk .category-filter-handler").el[0].focus())
        }), e = _("#onetrust-pc-sdk .category-filter-handler").el, _(e[0]).on("keydown", function(e) {
            9 !== e.keyCode && "tab" !== e.code || !e.shiftKey || (e.preventDefault(), _("#onetrust-pc-sdk #filter-apply-handler").el[0].focus())
        }))
    }, r.prototype.addListenerSearchKeyEvent = function() {
        _(w.VENDOR_SEARCH_SELECTOR).on("keyup", function(e) {
            e = e.target.value.trim();
            w.currentSearchInput !== e && (L.showVendorService ? c.filterVendorByString(e) : w.isCookieList ? (x.searchHostList(e), L.showTrackingTech && w.addEventAdditionalTechnologies()) : (x.loadVendorList(e, []), I.UseGoogleVendors && x.searchVendors(x.googleSearchSelectors, L.addtlVendorsList, fe.GoogleVendor, e), L.showGeneralVendors && I.GeneralVendors.length && x.searchVendors(x.genVendorSearchSelectors, I.GeneralVendors, fe.GeneralVendor, e)), x.playSearchStatus(w.isCookieList), w.currentSearchInput = e)
        })
    }, r.prototype.addListenerWhenIabEnabled = function() {
        I.IsIabEnabled && (_("#onetrust-pc-sdk .category-vendors-list-handler").on("click", function(e) {
            w.pcLinkSource = e.target, w.showVendorsList(e.target)
        }), _("#onetrust-pc-sdk .ot-pgph-link").on("click", function(e) {
            w.pcLinkSource = e.target, w.showIllustrations(e.target)
        }), _("#onetrust-pc-sdk " + P.P_Vendor_Container).on("click", w.selectVendorsGroupHandler), I.UseGoogleVendors || w.bindSelAllHandlers(), w.initialiseLegIntBtnHandlers())
    }, r.prototype.adddListenerWhenNoBanner = function() {
        I.NoBanner && (I.OnClickCloseBanner && document.body.addEventListener("click", O.bodyClickEvent), I.ScrollCloseBanner) && window.addEventListener("scroll", O.scrollCloseBanner)
    }, r.prototype.addListenerWhenVendorServices = function() {
        L.showVendorService && (w.bindSelAllHandlers(), _("#onetrust-pc-sdk .onetrust-vendors-list-handler").on("click", function() {
            return w.showVendorsList(null, !0)
        }))
    }, r.prototype.bindSelAllHandlers = function() {
        _("#onetrust-pc-sdk #select-all-vendor-leg-handler").on("click", w.selectAllVendorsLegIntHandler), _("#onetrust-pc-sdk #select-all-vendor-groups-handler").on("click", w.SelectAllVendorConsentHandler)
    }, r.prototype.hideCookieSettingsHandler = function(e) {
        return void 0 === e && (e = window.event), A.requireSignatureEnabled && (A.healthSignatureData = "", A.healthSignatureGroup = null), g.triggerGoogleAnalyticsEvent(vo, To), Qo.removeAddedOTCssStyles(Xo.PC), nn.hideConsentNoticeV2(), _(document).off("keydown", w.closePCWhenEscPressed), w.getResizeElement().removeEventListener("resize", w.setCenterLayoutFooterHeight), window.removeEventListener("resize", w.setCenterLayoutFooterHeight), !S.isV2Template && A.pcName !== rt || w.closeFilter(!1), A.pcName === ot && _("#onetrust-pc-sdk " + P.P_Content).removeClass("ot-hide"), O.hideVendorsList(), G.csBtnGroup && (_(w.fltgBtnSltr).removeClass("ot-pc-open"), w.floatingCookieSettingCloseBtnClicked(null)), w.confirmPC(e), O.resetConsent(), !1
    }, r.prototype.selectAllHostsGroupsHandler = function(e) {
        var t = e.target.checked,
            e = _("#onetrust-pc-sdk #" + P.P_Sel_All_Host_El).el[0],
            o = e.classList.contains("line-through"),
            n = _("#onetrust-pc-sdk .host-checkbox-handler").el;
        b.setCheckedAttribute("#select-all-hosts-groups-handler", null, t);
        for (var r = 0; r < n.length; r++) n[r].getAttribute("disabled") || b.setCheckedAttribute(null, n[r], t);
        L.optanonHostList.forEach(function(e) {
            Co.updateHostStatus(e, t)
        }), n.forEach(function(e) {
            po.updateGenVendorStatus(e.getAttribute("hostId"), t)
        }), o && e.classList.remove("line-through")
    }, r.prototype.selectHostsGroupHandler = function(e) {
        w.toggleAccordionStatus(e);
        var t = e.target.getAttribute("hostId"),
            o = e.target.getAttribute("ckType"),
            n = e.target.checked;
        null !== t && (o === he.GenVendor ? (o = I.GeneralVendors.find(function(e) {
            return e.VendorCustomId === t
        }).Name, g.triggerGoogleAnalyticsEvent(vo, n ? Go : xo, o + ": VEN_" + t), po.updateGenVendorStatus(t, n)) : (o = b.findIndex(L.optanonHostList, function(e) {
            return e.HostId === t
        }), o = L.optanonHostList[o], w.toggleHostStatus(o, n)), b.setCheckedAttribute(null, e.target, n))
    }, r.prototype.onCategoryItemToggle = function(e) {
        e.stopPropagation();
        var t = e.target;
        "BUTTON" !== t.tagName && "INPUT" !== t.tagName || (A.pcName === ot && this.setPcListContainerHeight(), w.toggleAccordionStatus(e))
    }, r.prototype.toggleAccordionStatus = function(e) {
        var t, e = e.target;
        e && e.getAttribute("aria-expanded") && (t = "true" === e.getAttribute("aria-expanded") ? "false" : "true", e.setAttribute("aria-expanded", t))
    }, r.prototype.toggleHostStatus = function(e, t) {
        g.triggerGoogleAnalyticsEvent(vo, t ? No : Do, e.HostName + ": H_" + e.HostId), Co.updateHostStatus(e, t)
    }, r.prototype.toggleBannerOptions = function(e) {
        _(".banner-option-input").each(function(e) {
            _(e).el.setAttribute("aria-expanded", !1)
        }), w.toggleAccordionStatus(e)
    }, r.prototype.bannerCloseButtonHandler = function(n) {
        return u(this, void 0, void 0, function() {
            var t, o;
            return p(this, function(e) {
                return _(document).off("keydown", w.shiftBannerFocus), n && n.target && n.target.className && (-1 < (t = n.target.className).indexOf("save-preference-btn-handler") ? (L.bannerCloseSource = $.ConfirmChoiceButton, g.triggerGoogleAnalyticsEvent(vo, _o)) : -1 < t.indexOf("banner-close-button") ? (L.bannerCloseSource = $.BannerCloseButton, o = ko, -1 < t.indexOf("ot-close-link") && (o = bo, L.bannerCloseSource = $.ContinueWithoutAcceptingButton), g.triggerGoogleAnalyticsEvent(vo, o)) : -1 < t.indexOf("ot-bnr-save-handler") && (L.bannerCloseSource = $.BannerSaveSettings, g.triggerGoogleAnalyticsEvent(vo, Po))), Qo.removeAddedOTCssStyles(), O.hideVendorsList(), [2, O.bannerCloseButtonHandler()]
            })
        })
    }, r.prototype.onLegIntButtonClick = function(e) {
        var t, o, n;
        e && (n = "true" === (e = e.currentTarget).parentElement.getAttribute("is-vendor"), t = e.parentElement.getAttribute("data-group-id"), o = !e.classList.contains("ot-leg-int-enabled"), n ? w.onVendorToggle(t, le.LI) : (n = C.getGroupById(t)).Parent ? w.updateSubGroupToggles(n, o, !0) : w.updateGroupToggles(n, o, !0), f.updateLegIntBtnElement(e.parentElement, o))
    }, r.prototype.updateGroupToggles = function(t, o, e) {
        Co.toggleGroupHosts(t, o), L.genVenOptOutEnabled && Co.toggleGroupGenVendors(t, o), t.IsLegIntToggle = e, w.toggleGroupStatus(t, o), t.SubGroups && t.SubGroups.length && (A.bannerName === Ze && S.moduleInitializer.IsSuppressPC && t.SubGroups.length ? t.SubGroups.forEach(function(e) {
            e.IsLegIntToggle = t.IsLegIntToggle, f.toggleGrpStatus(e, o), e.IsLegIntToggle = !1, Co.toggleGroupHosts(e, o), L.genVenOptOutEnabled && Co.toggleGroupGenVendors(e, o), V.setVendorStateByGroup(e, o)
        }) : f.toogleAllSubGrpElements(t, o), t.SubGroups.forEach(function(e) {
            return V.setVendorStateByGroup(e, o)
        })), V.setVendorStateByGroup(t, o), this.allowAllVisible(f.setAllowAllButton()), t.IsLegIntToggle = !1
    }, r.prototype.toggleGroupStatus = function(e, t) {
        var o;
        A.requireSignatureEnabled && e.needsHealthSignature ? (o = !1, t ? (A.healthSignatureData && (o = !0), A.healthSignatureGroup = e) : A.healthSignatureGroup = null, f.toggleGrpStatus(e, o)) : f.toggleGrpStatus(e, t)
    }, r.prototype.updateSubGroupToggles = function(e, t, o) {
        Co.toggleGroupHosts(e, t), L.genVenOptOutEnabled && Co.toggleGroupGenVendors(e, t);
        var n = C.getGroupById(e.Parent),
            o = (e.IsLegIntToggle = o, n.IsLegIntToggle = e.IsLegIntToggle, f.isGroupActive(n));
        t ? (f.toggleGrpStatus(e, !0), f.isAllSubgroupsEnabled(n) && !o && (f.toggleGrpStatus(n, !0), Co.toggleGroupHosts(n, t), L.genVenOptOutEnabled && Co.toggleGroupGenVendors(n, t), f.toggleGroupHtmlElement(e, "" + e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !0))) : (f.toggleGrpStatus(e, !1), f.isAllSubgroupsDisabled(n) && o ? (f.toggleGrpStatus(n, !1), Co.toggleGroupHosts(n, t), L.genVenOptOutEnabled && Co.toggleGroupGenVendors(n, t), f.toggleGroupHtmlElement(e, "" + e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), t)) : (f.toggleGrpStatus(n, !1), Co.toggleGroupHosts(n, !1), L.genVenOptOutEnabled && Co.toggleGroupGenVendors(n, t), f.toggleGroupHtmlElement(e, "" + e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !1))), this.allowAllVisible(f.setAllowAllButton()), e.IsLegIntToggle = !1, n.IsLegIntToggle = e.IsLegIntToggle
    }, r.prototype.hideCategoryContainer = function(e) {
        this.isCookieList = e = void 0 === e ? !1 : e, w.addHideClassContainer(), L.showVendorService ? c.setHeaderConfig() : (e ? w.setCookieListTemplate() : w.setVendorListTemplate(), Rn.setFilterList(e))
    }, r.prototype.setCookieListTemplate = function() {
        var e = S.isV2Template;
        _(P.P_Vendor_List + " #select-all-text-container").show("inline-block"), _("#onetrust-pc-sdk " + P.P_Host_Cntr).show(), y.isOptOutEnabled() ? _("#onetrust-pc-sdk #" + P.P_Sel_All_Host_El).show("inline-block") : _("#onetrust-pc-sdk #" + P.P_Sel_All_Host_El).hide(), _("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Leg_El).hide(), _("#onetrust-pc-sdk " + P.P_Leg_Header).hide(), e || _("#onetrust-pc-sdk " + P.P_Leg_Select_All).hide(), _("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Consent_El).hide(), _("#onetrust-pc-sdk  " + P.P_Vendor_Container).hide(), (I.UseGoogleVendors || L.showGeneralVendors) && _("#onetrust-pc-sdk .ot-acc-cntr").hide(), _("#onetrust-pc-sdk " + P.P_Vendor_List).addClass(P.P_Host_UI), _("#onetrust-pc-sdk " + P.P_Vendor_Content).addClass(P.P_Host_Cnt)
    }, r.prototype.setVendorListTemplate = function() {
        _("#onetrust-pc-sdk " + P.P_Vendor_Container).show(), _("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Consent_El).show("inline-block"), I.UseGoogleVendors && _("#onetrust-pc-sdk .ot-acc-cntr").show(), A.legIntSettings.PAllowLI && A.isIab2orv2Template ? (_("#onetrust-pc-sdk " + P.P_Select_Cntr).show(S.isV2Template ? void 0 : "inline-block"), _("#onetrust-pc-sdk " + P.P_Leg_Select_All).show("inline-block"), _("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Leg_El).show("inline-block"), _(P.P_Vendor_List + " #select-all-text-container").hide(), A.legIntSettings.PShowLegIntBtn ? (_("#onetrust-pc-sdk " + P.P_Leg_Header).hide(), _("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Leg_El).hide()) : _("#onetrust-pc-sdk " + P.P_Leg_Header).show()) : (_("#onetrust-pc-sdk " + P.P_Select_Cntr).show(), _(P.P_Vendor_List + " #select-all-text-container").show("inline-block"), _("#onetrust-pc-sdk " + P.P_Leg_Select_All).hide(), _("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Leg_El).hide()), _("#onetrust-pc-sdk #" + P.P_Sel_All_Host_El).hide(), _("#onetrust-pc-sdk " + P.P_Host_Cntr).hide(), _("#onetrust-pc-sdk " + P.P_Vendor_List).removeClass(P.P_Host_UI), _("#onetrust-pc-sdk " + P.P_Vendor_Content).removeClass(P.P_Host_Cnt)
    }, r.prototype.showAllVendors = function(t) {
        return u(this, void 0, void 0, function() {
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, w.fetchAndSetupPC()];
                    case 1:
                        return e.sent(), w.showVendorsList(null, !0), L.isPCVisible ? [3, 3] : [4, w.showCookieSettingsHandler(t)];
                    case 2:
                        e.sent(), e.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, r.prototype.fetchAndSetupPC = function() {
        return u(this, void 0, void 0, function() {
            var t;
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        return S.moduleInitializer.IsSuppressPC && 0 === _("" + w.PC_SELECTOR).length ? [4, xt.getPcContent()] : [3, 2];
                    case 1:
                        t = e.sent(), G.preferenceCenterGroup = {
                            name: t.name,
                            html: atob(t.html),
                            css: t.css
                        }, S.isV2Template = I.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name), (t = document.getElementById("onetrust-style")).innerHTML += G.preferenceCenterGroup.css, t.innerHTML += Wt.addCustomPreferenceCenterCSS(), B.insertPcHtml(), w.initialiseConsentNoticeHandlers(), I.IsIabEnabled && x.InitializeVendorList(), e.label = 2;
                    case 2:
                        return 0 !== _("" + w.PC_SELECTOR).length && I.PCTemplateUpgrade && (t = document.querySelector("#onetrust-pc-sdk .ot-optout-signal"), B.setOptOutSignalVisibility(t)), [2]
                }
            })
        })
    }, r.prototype.setVendorContent = function() {
        _("" + w.FILTER_COUNT_SELECTOR).text(L.filterByIABCategories.length.toString()), x.loadVendorList("", L.filterByIABCategories), I.UseGoogleVendors && (L.vendorDomInit ? x.resetAddtlVendors() : (x.initGoogleVendors(), _("" + w.PC_SELECTOR).on("click", ".ot-acc-cntr > button", w.toggleAccordionStatus.bind(this)))), L.vendorDomInit || (L.vendorDomInit = !0, w.initialiseLegIntBtnHandlers(), I.UseGoogleVendors && (w.initialiseAddtlVenHandler(), w.bindSelAllHandlers())), L.showGeneralVendors && !L.genVendorDomInit && (L.genVendorDomInit = !0, x.initGenVendors(), w.initializeGenVenHandlers(), I.UseGoogleVendors || (w.bindSelAllHandlers(), _("" + w.PC_SELECTOR).on("click", ".ot-acc-cntr > button", w.toggleAccordionStatus.bind(this))))
    }, r.prototype.addEventAdditionalTechnologies = function() {
        var e = document.querySelectorAll("#onetrust-pc-sdk .ot-acc-cntr.ot-add-tech > button");
        0 < e.length && (_(e).off("click", w.toggleAccordionStatus), _(e).on("click", w.toggleAccordionStatus))
    }, r.prototype.showVendorsList = function(e, t) {
        return void 0 === t && (t = !1), L.cookieListType = null, w.hideCategoryContainer(!1), Qo.addOTCssPropertiesToBody(Xo.PC, {}), L.showVendorService ? c.showVSList() : (t || (t = e.getAttribute("data-parent-id")) && (t = C.getGroupById(t)) && (t = F(t.SubGroups, [t]).reduce(function(e, t) {
            return -1 < ft.indexOf(t.Type) && e.push(t.CustomGroupId), e
        }, []), L.filterByIABCategories = F(L.filterByIABCategories, t)), w.setVendorContent(), hn.updateFilterSelection(!1)), L.pcLayer = re.VendorList, e && mo.setPCFocus(mo.getPCElements()), this.setSearchInputFocus(), !1
    }, r.prototype.showIllustrations = function(e) {
        e = e.getAttribute("data-parent-id"), e = C.getGroupById(e);
        L.cookieListType = null, L.pcLayer = re.IabIllustrations, w.addHideClassContainer(), zn.showIllustrations(e.GroupName, e.IabIllustrations), mo.setPCFocus(mo.getPCElements())
    }, r.prototype.addHideClassContainer = function() {
        var e = A.pcName;
        I.PCTemplateUpgrade ? _("#onetrust-pc-sdk " + P.P_Content).addClass("ot-hide") : _("#onetrust-pc-sdk .ot-main-content").hide(), _("#onetrust-pc-sdk " + P.P_Vendor_List).removeClass("ot-hide"), e !== rt && e !== ot && _("#onetrust-pc-sdk #close-pc-btn-handler.main").hide(), e === ot && d(_("" + w.PC_SELECTOR).el[0], 'height: "";', !0)
    }, r.prototype.loadCookieList = function(e) {
        L.filterByCategories = [], w.hideCategoryContainer(!0);
        var t, e = e && e.getAttribute("data-parent-id");
        return e && (t = C.getGroupById(e), L.filterByCategories.push(e), t.SubGroups.length) && t.SubGroups.forEach(function(e) {
            -1 === ft.indexOf(e.Type) && (e = e.CustomGroupId, L.filterByCategories.indexOf(e) < 0) && L.filterByCategories.push(e)
        }), x.loadHostList("", L.filterByCategories), L.showTrackingTech && w.addEventAdditionalTechnologies(), _("" + w.FILTER_COUNT_SELECTOR).text(L.filterByCategories.length.toString()), hn.updateFilterSelection(!0), L.pcLayer = re.CookieList, mo.setPCFocus(mo.getPCElements()), this.setSearchInputFocus(), !1
    }, r.prototype.selectAllVendorsLegIntHandler = function(e) {
        var t = _("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Leg_El).el[0],
            o = t.classList.contains("line-through"),
            n = _(P.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-leg-checkbox-handler').el,
            r = e.target.checked,
            i = {};
        L.vendors.selectedLegIntVendors.map(function(e, t) {
            i[e.split(":")[0]] = t
        });
        for (var s = 0; s < n.length; s++) {
            b.setCheckedAttribute(null, n[s], r), I.PCShowConsentLabels && (n[s].parentElement.querySelector(".ot-label-status").innerHTML = r ? I.PCActiveText : I.PCInactiveText);
            var a = n[s].getAttribute("leg-vendorid"),
                l = i[a];
            void 0 === l && (l = a), L.vendors.selectedLegIntVendors[l] = a + ":" + r
        }
        o && t.classList.remove("line-through"), b.setCheckedAttribute(null, e.target, r)
    }, r.prototype.selAllAdtlVenHandler = function(e) {
        for (var t = _("#onetrust-pc-sdk #ot-selall-adtlvencntr").el[0], o = t.classList.contains("line-through"), n = _("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el, r = e.target.checked, i = 0; i < n.length; i++) b.setCheckedAttribute(null, n[i], r), I.PCShowConsentLabels && (n[i].parentElement.querySelector(".ot-label-status").innerHTML = r ? I.PCActiveText : I.PCInactiveText);
        r ? I.UseGoogleVendors && Object.keys(L.addtlVendorsList).forEach(function(e) {
            L.addtlVendors.vendorSelected[e] = !0
        }) : L.addtlVendors.vendorSelected = {}, o && t.classList.remove("line-through")
    }, r.prototype.selectAllGenVenHandler = function(e) {
        e = e.target.checked;
        w.selectAllHandler({
            selAllEl: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            vendorBoxes: "#onetrust-pc-sdk .ot-gnven-chkbox-handler"
        }, "genven", e)
    }, r.prototype.selectAllHandler = function(e, t, o) {
        for (var n = _(e.selAllEl).el[0], r = n.classList.contains("line-through"), i = _(e.vendorBoxes).el, s = 0; s < i.length; s++) "genven" === t && !o && L.alwaysActiveGenVendors.includes(i[s].getAttribute("gn-vid")) ? (b.setDisabledAttribute(null, i[s], !0), b.setCheckedAttribute(null, i[s], !0)) : b.setCheckedAttribute(null, i[s], o), I.PCShowConsentLabels && (i[s].parentElement.querySelector(".ot-label-status").innerHTML = o ? I.PCActiveText : I.PCInactiveText);
        o ? "googleven" === t && I.UseGoogleVendors ? Object.keys(L.addtlVendorsList).forEach(function(e) {
            L.addtlVendors.vendorSelected[e] = !0
        }) : "genven" === t && L.showGeneralVendors && I.GeneralVendors.forEach(function(e) {
            L.genVendorsConsent[e.VendorCustomId] = !0
        }) : "googleven" === t ? L.addtlVendors.vendorSelected = {} : (L.genVendorsConsent = {}, L.alwaysActiveGenVendors.forEach(function(e) {
            L.genVendorsConsent[e] = !0
        })), r && n.classList.remove("line-through")
    }, r.prototype.SelectAllVendorConsentHandler = function(e) {
        var t = e.target.checked;
        if (L.showVendorService) c.toggleVendors(t);
        else {
            var o = _("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Consent_El).el[0],
                n = o.classList.contains("line-through"),
                r = _(P.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-checkbox-handler').el,
                i = {};
            L.vendors.selectedVendors.map(function(e, t) {
                i[e.split(":")[0]] = t
            });
            for (var s = 0; s < r.length; s++) {
                b.setCheckedAttribute(null, r[s], t), I.PCShowConsentLabels && (r[s].parentElement.querySelector(".ot-label-status").innerHTML = t ? I.PCActiveText : I.PCInactiveText);
                var a = r[s].getAttribute("vendorid"),
                    l = i[a];
                void 0 === l && (l = a), L.vendors.selectedVendors[l] = a + ":" + t
            }
            n && o.classList.remove("line-through")
        }
        b.setCheckedAttribute(null, e.target, t)
    }, r.prototype.onVendorToggle = function(o, e) {
        var t = L.vendors,
            n = L.addtlVendors,
            r = e === le.LI ? t.selectedLegIntVendors : e === le.AddtlConsent ? [] : t.selectedVendors,
            i = !1,
            s = Number(o);
        r.some(function(e, t) {
            e = e.split(":");
            if (e[0] === o) return s = t, i = "true" === e[1], !0
        }), e === le.LI ? (g.triggerGoogleAnalyticsEvent(vo, i ? qo : Uo, t.list.find(function(e) {
            return e.vendorId === o
        }).vendorName + ": " + T.IdPatterns.Pur + o), t.selectedLegIntVendors[s] = o + ":" + !i, A.legIntSettings.PShowLegIntBtn || x.vendorLegIntToggleEvent()) : e === le.AddtlConsent ? (n.vendorSelected[o] ? delete n.vendorSelected[o] : n.vendorSelected[o] = !0, x.venAdtlSelAllTglEvent()) : (g.triggerGoogleAnalyticsEvent(vo, i ? Mo : Fo, t.list.find(function(e) {
            return e.vendorId === o
        }).vendorName + ": " + T.IdPatterns.Pur + o), t.selectedVendors[s] = o + ":" + !i, x.vendorsListEvent())
    }, r.prototype.onVendorDisclosure = function(o) {
        return u(this, void 0, void 0, function() {
            var t;
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = L.discVendors)[o].isFetched ? [3, 2] : (t[o].isFetched = !0, [4, xt.getStorageDisclosure(t[o].disclosureUrl)]);
                    case 1:
                        t = e.sent(), x.updateVendorDisclosure(o, t), e.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, r.prototype.tglFltrOptionHandler = function(e) {
        e && e.target.classList.contains("category-filter-handler") && b.setCheckedAttribute(null, e.target, e.target.checked)
    }, r.prototype.selectVendorsGroupHandler = function(e) {
        w.toggleAccordionStatus(e);
        var t = e.target.getAttribute("leg-vendorid"),
            o = e.target.getAttribute("vendorid"),
            n = e.target.getAttribute("addtl-vid"),
            r = e.target.getAttribute("disc-vid");
        t ? w.onVendorToggle(t, le.LI) : o ? w.onVendorToggle(o, le.Consent) : n && w.onVendorToggle(n, le.AddtlConsent), r && w.onVendorDisclosure(r), (t || o || n) && (b.setCheckedAttribute(null, e.target, e.target.checked), I.PCShowConsentLabels) && (e.target.parentElement.querySelector(".ot-label-status").innerHTML = e.target.checked ? I.PCActiveText : I.PCInactiveText)
    }, r.prototype.toggleVendorFiltersHandler = function() {
        var e, t = !1,
            o = _("#onetrust-pc-sdk " + P.P_Fltr_Modal).el[0];
        switch (A.pcName) {
            case nt:
            case tt:
            case ot:
            case it:
                (t = "block" === o.style.display) ? w.closeFilter(): (e = _("#onetrust-pc-sdk " + P.P_Triangle).el[0], _(e).attr("style", "display: block;"), _(o).attr("style", "display: block;"), e = Array.prototype.slice.call(o.querySelectorAll("[href], input, button")), mo.setPCFocus(e));
                break;
            case rt:
                896 < window.innerWidth || 896 < window.screen.height ? d(o, "width: 400px;", !0) : d(o, "height: 100%; width: 100%;"), o.querySelector(".ot-checkbox input").focus();
                break;
            default:
                return
        }
        S.isV2Template && !t && (_("#onetrust-pc-sdk").addClass("ot-shw-fltr"), _("#onetrust-pc-sdk .ot-fltr-scrlcnt").el[0].scrollTop = 0)
    }, r.prototype.clearFiltersHandler = function() {
        w.setAriaLabelforButtonInFilter(I.PCenterFilterClearedAria);
        for (var e = _("#onetrust-pc-sdk " + P.P_Fltr_Modal + " input").el, t = 0; t < e.length; t++) b.setCheckedAttribute(null, e[t], !1);
        w.isCookieList ? L.filterByCategories = [] : L.filterByIABCategories = []
    }, r.prototype.cancelFilterHandler = function() {
        L.showVendorService ? c.cancelFilter() : w.isCookieList ? hn.cancelHostFilter() : x.cancelVendorFilter(), w.closeFilter(), _("#onetrust-pc-sdk #filter-btn-handler").focus()
    }, r.prototype.applyFilterHandler = function() {
        var e;
        w.setAriaLabelforButtonInFilter(I.PCenterFilterAppliedAria), L.showVendorService ? (e = c.getGroupsFilter(), c.filterVendorByGroup(e)) : w.isCookieList ? (e = hn.updateHostFilterList(), x.loadHostList("", e), L.showTrackingTech && w.addEventAdditionalTechnologies()) : (e = x.updateVendorFilterList(), x.loadVendorList("", e)), _("" + w.FILTER_COUNT_SELECTOR).text(String(e.length)), w.closeFilter(), _("#onetrust-pc-sdk #filter-btn-handler").focus()
    }, r.prototype.setAriaLabelforButtonInFilter = function(e) {
        var t = L.isPCVisible ? document.querySelector("#onetrust-pc-sdk span[aria-live]") : document.querySelector("#onetrust-banner-sdk span[aria-live]");
        if (!t) {
            (t = document.createElement("span")).classList.add("ot-scrn-rdr"), t.setAttribute("aria-atomic", "true");
            var o = void 0;
            if (L.isPCVisible ? o = document.getElementById(w.pcSDKSelector) : document.getElementById(w.bannerSelector) && (o = document.getElementById(w.bannerSelector)), !o) return;
            o.appendChild(t)
        }
        t.setAttribute("aria-atomic", "true"), t.setAttribute("aria-relevant", "additions"), t.setAttribute("aria-live", "assertive"), t.setAttribute(ht, e), w.timeCallback && clearTimeout(w.timeCallback), w.timeCallback = setTimeout(function() {
            w.timeCallback = null, t.setAttribute(ht, "")
        }, 900)
    }, r.prototype.setPcListContainerHeight = function() {
        _("#onetrust-pc-sdk " + P.P_Content).el[0].classList.contains("ot-hide") ? d(_("" + w.PC_SELECTOR).el[0], 'height: "";', !0) : setTimeout(function() {
            var e = window.innerHeight;
            768 <= window.innerWidth && 600 <= window.innerHeight && (e = .8 * window.innerHeight), !_("#onetrust-pc-sdk " + P.P_Content).el[0].scrollHeight || _("#onetrust-pc-sdk " + P.P_Content).el[0].scrollHeight >= e ? d(_("" + w.PC_SELECTOR).el[0], "height: " + e + "px;", !0) : d(_("" + w.PC_SELECTOR).el[0], "height: auto;", !0)
        })
    }, r.prototype.changeSelectedTab = function(e) {
        var t, o = _("#onetrust-pc-sdk .category-menu-switch-handler"),
            n = 0,
            r = _(o.el[0]);
        o.each(function(e, t) {
            _(e).el.classList.contains(P.P_Active_Menu) && (n = t, _(e).el.classList.remove(P.P_Active_Menu), r = _(e))
        }), e.keyCode === ie.RightArrow ? t = n + 1 >= o.el.length ? _(o.el[0]) : _(o.el[n + 1]) : e.keyCode === ie.LeftArrow && (t = _(n - 1 < 0 ? o.el[o.el.length - 1] : o.el[n - 1])), this.tabMenuToggle(t, r)
    }, r.prototype.changeSelectedTabV2 = function(e) {
        var t, o = e.target.parentElement,
            e = (e.keyCode === ie.RightArrow ? t = o.nextElementSibling || o.parentElement.firstChild : e.keyCode === ie.LeftArrow && (t = o.previousElementSibling || o.parentElement.lastChild), t.querySelector(".category-menu-switch-handler"));
        e.focus(), this.groupTabClick(e)
    }, r.prototype.categoryMenuSwitchHandler = function() {
        for (var t = this, e = _("#onetrust-pc-sdk .category-menu-switch-handler").el, o = 0; o < e.length; o++) e[o].addEventListener("click", this.groupTabClick), e[o].addEventListener("keydown", function(e) {
            if (32 === e.keyCode || "space" === e.code) return t.groupTabClick(e.currentTarget), e.preventDefault(), !1
        })
    }, r.prototype.groupTabClick = function(e) {
        var t = _("#onetrust-pc-sdk " + P.P_Grp_Container).el[0],
            o = t.querySelector("." + P.P_Active_Menu),
            e = e.currentTarget || e,
            n = e.getAttribute("aria-controls");
        o.setAttribute("tabindex", -1), o.setAttribute("aria-selected", !1), o.classList.remove(P.P_Active_Menu), t.querySelector(P.P_Desc_Container + ":not(.ot-hide)").classList.add("ot-hide"), t.querySelector("#" + n).classList.remove("ot-hide"), e.setAttribute("tabindex", 0), e.setAttribute("aria-selected", !0), e.classList.add(P.P_Active_Menu)
    }, r.prototype.tabMenuToggle = function(e, t) {
        e.el.setAttribute("tabindex", 0), e.el.setAttribute("aria-selected", !0), t.el.setAttribute("tabindex", -1), t.el.setAttribute("aria-selected", !1), e.focus(), t.el.parentElement.parentElement.querySelector("" + P.P_Desc_Container).classList.add("ot-hide"), e.el.parentElement.parentElement.querySelector("" + P.P_Desc_Container).classList.remove("ot-hide"), e.el.classList.add(P.P_Active_Menu)
    }, r.prototype.closeFilter = function(e) {
        var t, o;
        void 0 === e && (e = !0), nn.checkIfPcSdkContainerExist() || (t = _("#onetrust-pc-sdk " + P.P_Fltr_Modal).el[0], o = _("#onetrust-pc-sdk " + P.P_Triangle).el[0], A.pcName === rt ? 896 < window.innerWidth || 896 < window.screen.height ? d(t, "width: 0;", !0) : d(t, "height: 0;") : d(t, "display: none;"), o && _(o).attr("style", "display: none;"), S.isV2Template && _("#onetrust-pc-sdk").removeClass("ot-shw-fltr"), e && mo.setFirstAndLast(mo.getPCElements()))
    }, r.prototype.setBackButtonFocus = function() {
        _("#onetrust-pc-sdk .back-btn-handler").el[0].focus()
    }, r.prototype.setSearchInputFocus = function() {
        _(w.VENDOR_SEARCH_SELECTOR).el[0].focus()
    }, r.prototype.setCenterLayoutFooterHeight = function() {
        var e = w.pc;
        if (w.setMainContentHeight(), A.pcName === it && e) {
            var t = e.querySelectorAll("" + P.P_Desc_Container),
                o = e.querySelectorAll("li .category-menu-switch-handler");
            if (!e.querySelector(".category-menu-switch-handler + " + P.P_Desc_Container) && window.innerWidth < 640)
                for (var n = 0; n < t.length; n++) o[n].insertAdjacentElement("afterend", t[n]);
            else e.querySelector(".category-menu-switch-handler + " + P.P_Desc_Container) && 640 < window.innerWidth && _(e.querySelector(".ot-tab-desc")).append(t)
        }
    }, r.prototype.setMainContentHeight = function() {
        var e = this.pc,
            t = e.querySelector(".ot-pc-footer"),
            o = e.querySelector(".ot-pc-header"),
            n = e.querySelectorAll(".ot-pc-footer button"),
            r = n[n.length - 1],
            i = I.PCLayout,
            r = (e.classList.remove("ot-ftr-stacked"), n[0] && r && 1 < Math.abs(n[0].offsetTop - r.offsetTop) && e.classList.add("ot-ftr-stacked"), I.PCTemplateUpgrade || i.Center || (n = e.clientHeight - t.clientHeight - o.clientHeight - 3, I.PCTemplateUpgrade && !i.Tab && I.PCenterVendorListDescText && (n = n - ((r = _("#vdr-lst-dsc").el).length && r[0].clientHeight) - 10), d(e.querySelector("" + P.P_Vendor_List), "height: " + n + "px;", !0)), e.querySelector("" + P.P_Content));
        I.PCTemplateUpgrade && i.Center ? (n = 600 < window.innerWidth && 475 < window.innerHeight, !this.pcBodyHeight && n && (this.pcBodyHeight = r.scrollHeight), n ? (i = this.pcBodyHeight + t.clientHeight + o.clientHeight + 20) > .8 * window.innerHeight || 0 === this.pcBodyHeight ? d(e, "height: " + .8 * window.innerHeight + "px;", !0) : d(e, "height: " + i + "px;", !0) : d(e, "height: 100%;", !0)) : d(e.querySelector("" + P.P_Content), "height: " + (e.clientHeight - t.clientHeight - o.clientHeight - 3) + "px;", !0)
    }, r.prototype.allowAllVisible = function(e) {
        e !== this.allowVisible && I.PCLayout.Tab && I.PCTemplateUpgrade && (this.pc && this.setMainContentHeight(), this.allowVisible = e)
    }, r.prototype.restorePc = function() {
        L.pcLayer === re.CookieList ? (w.hideCategoryContainer(!0), x.loadHostList("", L.filterByCategories), L.showTrackingTech && w.addEventAdditionalTechnologies(), _("" + w.FILTER_COUNT_SELECTOR).text(L.filterByCategories.length.toString())) : L.pcLayer === re.VendorList && (w.hideCategoryContainer(!1), w.setVendorContent()), L.isPCVisible = !1, w.toggleInfoDisplay(), L.pcLayer !== re.VendorList && L.pcLayer !== re.CookieList || (hn.updateFilterSelection(L.pcLayer === re.CookieList), w.setBackButtonFocus(), mo.setPCFocus(mo.getPCElements()))
    }, r.prototype.toggleInfoDisplay = function() {
        return u(this, void 0, void 0, function() {
            var t;
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        return G.csBtnGroup && (_(w.fltgBtnSltr).addClass("ot-pc-open"), w.otGuardLogoPromise.then(function() {
                            I.cookiePersistentLogo.includes("ot_guard_logo.svg") && _(w.fltgBtnFSltr).attr(gt, "true")
                        }), _(w.fltgBtnBSltr).attr(gt, ""), _(w.fltgBtnBackBtn).el[0].style.display = "block"), [4, w.fetchAndSetupPC()];
                    case 1:
                        return e.sent(), A.pcName === ot && this.setPcListContainerHeight(), void 0 !== L.pcLayer && L.pcLayer !== re.Banner || (L.pcLayer = re.PrefCenterHome), t = _("" + w.PC_SELECTOR).el[0], _(".onetrust-pc-dark-filter").el[0].removeAttribute("style"), t.removeAttribute("style"), L.isPCVisible || (nn.showConsentNotice(), L.isPCVisible = !0, I.PCTemplateUpgrade && (this.pc = t, t = t.querySelector("#accept-recommended-btn-handler"), this.allowVisible = t && 0 < t.clientHeight, this.setCenterLayoutFooterHeight(), w.getResizeElement().addEventListener("resize", w.setCenterLayoutFooterHeight), window.addEventListener("resize", w.setCenterLayoutFooterHeight))), window.dispatchEvent(new CustomEvent("OneTrustPCLoaded", {
                            OneTrustPCLoaded: "yes"
                        })), w.captureInitialConsent(), [2]
                }
            })
        })
    }, r.prototype.close = function(t) {
        return u(this, void 0, void 0, function() {
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        return I.BCloseButtonType === Se.Link ? L.bannerCloseSource = $.ContinueWithoutAcceptingButton : L.bannerCloseSource = $.BannerCloseButton, [4, O.bannerCloseButtonHandler(t)];
                    case 1:
                        return e.sent(), w.getResizeElement().removeEventListener("resize", w.setCenterLayoutFooterHeight), window.removeEventListener("resize", w.setCenterLayoutFooterHeight), [2]
                }
            })
        })
    }, r.prototype.closePreferenceCenter = function(e) {
        e && e.preventDefault(), window.location.href = "http://otsdk//consentChanged"
    }, r.prototype.initializeAlartHtmlAndHandler = function() {
        L.skipAddingHTML = 0 < _("#onetrust-banner-sdk").length, L.skipAddingHTML || Yn.insertAlertHtml(), this.initialiseAlertHandlers()
    }, r.prototype.initialiseAlertHandlers = function() {
        var e = this,
            t = (Yn.showBanner(), I.ForceConsent && !y.isCookiePolicyPage(I.AlertNoticeText) && _(".onetrust-pc-dark-filter").removeClass("ot-hide").css("z-index:2147483645;"), I.OnClickCloseBanner && document.body.addEventListener("click", O.bodyClickEvent), I.ScrollCloseBanner && (window.addEventListener("scroll", O.scrollCloseBanner), _(document).on("click", ".onetrust-close-btn-handler", O.rmScrollAndClickBodyEvents), _(document).on("click", "#onetrust-accept-btn-handler", O.rmScrollAndClickBodyEvents), _(document).on("click", "#accept-recommended-btn-handler", O.rmScrollAndClickBodyEvents)), this.addEventListnerForVendorsList(), I.FloatingRoundedIcon && _("#onetrust-banner-sdk #onetrust-cookie-btn").on("click", function(e) {
                L.pcSource = e.currentTarget, w.showCookieSettingsHandler(e)
            }), _("#onetrust-banner-sdk .onetrust-close-btn-handler").on("click", function(e) {
                A.requireSignatureEnabled && (A.healthSignatureData = "", A.healthSignatureGroup = null), w.bannerCloseButtonHandler(e)
            }), _("#onetrust-banner-sdk .ot-bnr-save-handler").on("click", w.bannerCloseButtonHandler), _("#onetrust-banner-sdk #onetrust-pc-btn-handler").on("click", function(e) {
                setTimeout(function() {
                    w.showCookieSettingsHandler(e)
                }, 0)
            }), _("#onetrust-banner-sdk #onetrust-accept-btn-handler").on("click", function() {
                setTimeout(function() {
                    O.allowAllEventHandler(!1)
                }, 0)
            }), _("#onetrust-banner-sdk #onetrust-reject-all-handler").on("click", function() {
                setTimeout(function() {
                    O.rejectAllEventHandler(!1)
                }, 0)
            }), _("#onetrust-banner-sdk .banner-option-input").on("click", A.bannerName === Qe ? w.toggleBannerOptions : w.toggleAccordionStatus), _("#onetrust-banner-sdk .ot-gv-list-handler").on("click", function(t) {
                return u(e, void 0, void 0, function() {
                    return p(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return L.cookieListType = ge.GenVen, [4, w.fetchAndSetupPC()];
                            case 1:
                                return e.sent(), w.loadCookieList(t.target), w.showCookieSettingsHandler(t), [2]
                        }
                    })
                })
            }), _("#onetrust-banner-sdk .category-switch-handler").on("click", w.toggleBannerCategory), document.getElementById("onetrust-banner-sdk"));
        I.ForceConsent && t && "none" !== window.getComputedStyle(t).display && _(document).on("keydown", w.shiftBannerFocus), _("#onetrust-banner-sdk").on("keydown", function(e) {
            32 !== e.keyCode && "Space" !== e.code && 13 !== e.keyCode && "Enter" !== e.code || y.findUserType(e)
        })
    }, r.prototype.addEventListnerForVendorsList = function() {
        (I.IsIabEnabled || I.UseGoogleVendors || L.showGeneralVendors) && !L.showVendorService && _(document).on("click", ".onetrust-vendors-list-handler", w.showAllVendors)
    }, r.prototype.getResizeElement = function() {
        var e = document.querySelector("#onetrust-pc-sdk .ot-text-resize");
        return e ? e.contentWindow || e : document
    }, r.prototype.insertCookieSettingText = function(e) {
        void 0 === e && (e = !1);
        for (var t = I.CookieSettingButtonText, o = _(".ot-sdk-show-settings").el, n = _(".optanon-toggle-display").el, r = 0; r < o.length; r++) _(o[r]).text(t), _(n[r]).text(t);
        e ? (null != (e = document.querySelector(".ot-sdk-show-settings")) && e.addEventListener("click", this.cookiesSettingsBoundListener), null != (e = document.querySelector(".optanon-toggle-display")) && e.addEventListener("click", this.cookiesSettingsBoundListener)) : w.initCookieSettingHandlers()
    }, r.prototype.genVendorToggled = function(e) {
        var t = e.target.getAttribute("gn-vid"),
            o = (po.updateGenVendorStatus(t, e.target.checked), I.GeneralVendors.find(function(e) {
                return e.VendorCustomId === t
            }).Name);
        g.triggerGoogleAnalyticsEvent(vo, e.target.checked ? Go : xo, o + ": VEN_" + t), x.genVenSelectAllTglEvent()
    }, r.prototype.genVendorDetails = function(e) {
        w.toggleAccordionStatus(e)
    }, r.prototype.confirmPC = function(n) {
        return u(this, void 0, void 0, function() {
            var t, o;
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = h.isAlertBoxClosedAndValid(), I.NoBanner && I.ShowPreferenceCenterCloseButton && !t) ? [4, O.bannerCloseButtonHandler()] : [3, 2];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return o = y.isBannerVisible(), !S.moduleInitializer.MobileSDK || !t && o || w.closePreferenceCenter(n), [2]
                }
            })
        })
    }, r.prototype.captureInitialConsent = function() {
        L.initialGroupsConsent = JSON.parse(JSON.stringify(L.groupsConsent)), L.initialHostConsent = JSON.parse(JSON.stringify(L.hostsConsent)), L.showGeneralVendors && (L.initialGenVendorsConsent = JSON.parse(JSON.stringify(L.genVendorsConsent))), I.IsIabEnabled && (L.initialOneTrustIABConsent = JSON.parse(JSON.stringify(L.oneTrustIABConsent)), L.initialVendors = JSON.parse(JSON.stringify(L.vendors)), L.initialVendors.vendorTemplate = L.vendors.vendorTemplate), I.UseGoogleVendors && (L.initialAddtlVendorsList = JSON.parse(JSON.stringify(L.addtlVendorsList)), L.initialAddtlVendors = JSON.parse(JSON.stringify(L.addtlVendors))), L.vsIsActiveAndOptOut && (L.initialVendorsServiceConsent = new Map(L.vsConsent))
    };
    var w, er = r;

    function r() {
        var t = this;
        this.allowVisible = !1, this.fltgBtnBackBtn = ".ot-floating-button__back button", this.fltgBtnBSltr = ".ot-floating-button__back svg", this.fltgBtnFrontBtn = ".ot-floating-button__front button", this.fltgBtnFSltr = ".ot-floating-button__front svg", this.fltgBtnSltr = "#ot-sdk-btn-floating", this.PC_SELECTOR = "#onetrust-pc-sdk", this.FILTER_COUNT_SELECTOR = "#onetrust-pc-sdk #filter-count", this.VENDOR_SEARCH_SELECTOR = "#onetrust-pc-sdk #vendor-search-handler", this.isCookieList = !1, this.pc = null, this.currentSearchInput = "", this.pcLinkSource = null, this.pcSDKSelector = "onetrust-pc-sdk", this.bannerSelector = "onetrust-banner-sdk", this.otGuardLogoResolve = null, this.otGuardLogoPromise = new Promise(function(e) {
            t.otGuardLogoResolve = e
        }), this.closePCWhenEscPressed = function(e) {
            var t = document.getElementById(w.pcSDKSelector),
                o = "none" !== window.getComputedStyle(t).display;
            27 === e.keyCode && t && o && ("block" === (t = _("#onetrust-pc-sdk " + P.P_Fltr_Modal).el[0]).style.display || "0px" < t.style.width ? (w.closeFilter(), _("#onetrust-pc-sdk #filter-btn-handler").focus()) : I.NoBanner && !I.ShowPreferenceCenterCloseButton || w.hideCookieSettingsHandler(), w.confirmPC()), (o && 32 === e.keyCode || "Space" === e.code || 13 === e.keyCode || "Enter" === e.code) && y.findUserType(e)
        }, this.showCookieSettingsHandler = function(n) {
            return u(t, void 0, void 0, function() {
                var t, o;
                return p(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return (o = document.getElementById(w.pcSDKSelector), o && "none" !== window.getComputedStyle(o).getPropertyValue("display")) ? [2] : (_(document).on("keydown", w.closePCWhenEscPressed), n && n.stopPropagation(), n && n.target && (o = n.target.className, t = "onetrust-pc-btn-handler" === n.target.id, o = "ot-sdk-show-settings" === o, (t || o) && (o = t ? Ao : Io, g.triggerGoogleAnalyticsEvent(vo, o)), L.pcSource = n.target), [4, w.toggleInfoDisplay()]);
                        case 1:
                            return e.sent(), [2, !1]
                    }
                })
            })
        }, this.cookiesSettingsBoundListener = this.showCookieSettingsHandler.bind(this), this.backBtnHandler = function() {
            return L.pcLayer === re.IabIllustrations ? zn.hideUI() : (L.showVendorService && c.hideVendorList(), L.showTrackingTech && (w.currentSearchInput = "")), O.hideVendorsList(), A.pcName === ot && (_("#onetrust-pc-sdk " + P.P_Content).removeClass("ot-hide"), _("" + w.PC_SELECTOR).el[0].removeAttribute("style"), t.setPcListContainerHeight()), _("" + w.FILTER_COUNT_SELECTOR).text("0"), _(w.VENDOR_SEARCH_SELECTOR).length && (_(w.VENDOR_SEARCH_SELECTOR).el[0].value = ""), L.currentGlobalFilteredList = [], L.filterByCategories = [], L.filterByIABCategories = [], L.vendors.searchParam = "", w.closeFilter(), L.pcLayer = re.PrefCenterHome, t.pcLinkSource ? (t.pcLinkSource.focus(), t.pcLinkSource = null) : mo.setPCFocus(mo.getPCElements()), !1
        }, this.bannerCloseBoundListener = this.bannerCloseButtonHandler.bind(this), this.toggleGroupORVendorHandler = function(e) {
            var t = e.currentTarget;
            t.dataset.otVsId ? w.toggleVendorServiceHandler.bind(this)(e) : t.dataset.optanongroupid && w.toggleV2Category.bind(this)()
        }, this.toggleVendorFromListHandler = function(e) {
            var e = e.currentTarget,
                t = e.checked,
                o = e.dataset.otVsId,
                e = e.dataset.optanongroupid,
                n = document.getElementById("ot-vendor-id-" + o);
            V.toggleVendorService(e, o, t, n)
        }, this.toggleVendorServiceHandler = function(e) {
            var e = e.currentTarget,
                t = e.checked,
                o = e.dataset.otVsId,
                n = e.dataset.optanongroupid,
                n = (V.toggleVendorService(n, o, t, e), C.getVSById(o));
            w.setAriaLabelforButtonInFilter(n.ServiceName)
        }, this.toggleV2Category = function(e, t, o, n) {
            t || (r = this.getAttribute("data-optanongroupid"), i = "function" == typeof this.getAttribute, a = b.findIndex(L.dataGroupState, function(e) {
                return i && e.CustomGroupId === r
            }), t = L.dataGroupState[a]), void 0 === o && (o = _(this).is(":checked")), I.ChoicesBanner && b.setCheckedAttribute("#ot-bnr-grp-id-" + t.CustomGroupId, null, o), n ? document.querySelector("#ot-group-id-" + n) && (b.setCheckedAttribute("#ot-group-id-" + n, null, o), s = document.querySelector("#ot-group-id-" + n)) : (b.setCheckedAttribute(null, s = this, o), a = s.parentElement.querySelector(".ot-switch-nob"), S.fp.CookieV2VendorServiceScript ? I.PCCategoryStyle === me.Toggle && a && a.setAttribute("aria-checked", o) : I.PCTemplateUpgrade && a && a.setAttribute("aria-checked", o)), I.PCShowConsentLabels && (s.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? I.PCActiveText : I.PCInactiveText);
            var r, i, s, a, n = this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out");
            w.setAriaLabelforButtonInFilter(t.GroupName), w.updateGroupToggles(t, o, n)
        }, this.toggleBannerCategory = function() {
            var t = this,
                e = b.findIndex(L.dataGroupState, function(e) {
                    return "function" == typeof t.getAttribute && e.CustomGroupId === t.getAttribute("data-optanongroupid")
                }),
                e = L.dataGroupState[e],
                o = _(t).is(":checked");
            w.toggleV2Category(null, e, o, e.CustomGroupId)
        }, this.shiftBannerFocus = function(e) {
            var t = document.getElementById(w.pcSDKSelector),
                o = !1;
            t && (o = "none" !== window.getComputedStyle(t).display), "Tab" !== e.code || o || mo.handleBannerFocus(e, e.shiftKey)
        }, this.toggleSubCategory = function(e, t, o, n) {
            t = t || this.getAttribute("data-optanongroupid");
            var r, t = C.getGroupById(t),
                n = (void 0 === o && (o = _(this).is(":checked")), n ? (b.setCheckedAttribute("#ot-sub-group-id-" + n, null, o), r = document.querySelector("#ot-sub-group-id-" + n)) : b.setCheckedAttribute(null, r = this, o), C.getParentGroup(t.Parent).ShowSubgroup),
                n = (I.PCShowConsentLabels && n && (r.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? I.PCActiveText : I.PCInactiveText), this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out"));
            w.setAriaLabelforButtonInFilter(t.GroupName), w.updateSubGroupToggles(t, o, n), V.setVendorStateByGroup(t, o)
        }
    }
    nr.prototype.initialiseLandingPath = function() {
        var e = h.needReconsent();
        an.isLandingPage() ? an.setLandingPathParam(location.href) : e && !h.awaitingReconsent() ? (an.setLandingPathParam(location.href), k.writeCookieParam(v.OPTANON_CONSENT, xe.AWAITING_RE_CONSENT, !0)) : (e || k.writeCookieParam(v.OPTANON_CONSENT, xe.AWAITING_RE_CONSENT, !1), an.setLandingPathParam(xe.NOT_LANDING_PAGE), A.isSoftOptInMode && !S.moduleInitializer.MobileSDK && g.setAlertBoxClosed(!0), I.NextPageCloseBanner && I.ShowAlertNotice && O.nextPageCloseBanner())
    };
    var tr, or = nr;

    function nr() {}
    sr.prototype.insertCookiePolicyHtml = function() {
        if (_(this.ONETRUST_COOKIE_POLICY).length) {
            var e, t, o, n = document.createDocumentFragment(),
                r = (G.cookieListGroup && (t = I.CookiesV2NewCookiePolicy ? ".ot-sdk-cookie-policy" : "#ot-sdk-cookie-policy-v2", o = document.createElement("div"), _(o).html(G.cookieListGroup.html), o.removeChild(o.querySelector(t)), e = o.querySelector(".ot-sdk-cookie-policy"), I.useRTL) && _(e).attr("dir", "rtl"), e.querySelector("#cookie-policy-title").innerHTML = I.CookieListTitle || "", e.querySelector("#cookie-policy-description").innerHTML = I.CookieListDescription || "", e.querySelector("section")),
                i = e.querySelector("section tbody tr"),
                s = null,
                a = null;
            I.CookiesV2NewCookiePolicy || (s = e.querySelector("section.subgroup"), a = e.querySelector("section.subgroup tbody tr"), _(e).el.removeChild(e.querySelector("section.subgroup"))), _(e).el.removeChild(e.querySelector("section")), !_(this.COOKIE_POLICY_SELECTOR).length && _(this.OPTANON_POLICY_SELECTOR).length ? _(this.OPTANON_POLICY_SELECTOR).append('<div id="ot-sdk-cookie-policy"></div>') : (_(this.COOKIE_POLICY_SELECTOR).html(""), _(this.OPTANON_POLICY_SELECTOR).html(""));
            for (var l = 0, c = I.Groups; l < c.length; l++) {
                var d = c[l],
                    u = {
                        json: I,
                        group: d,
                        sectionTemplate: r,
                        tableRowTemplate: i,
                        cookieList: e,
                        fragment: n
                    };
                if (I.CookiesV2NewCookiePolicy) this.insertGroupHTMLV2(u);
                else if (this.insertGroupHTML(u), d.ShowSubgroup)
                    for (var p = 0, h = d.SubGroups; p < h.length; p++) {
                        var g = h[p],
                            g = {
                                json: I,
                                group: g,
                                sectionTemplate: s,
                                tableRowTemplate: a,
                                cookieList: e,
                                fragment: n
                            };
                        this.insertGroupHTML(g)
                    }
            }
        }
    }, sr.prototype.insertGroupHTMLV2 = function(e) {
        function t(e) {
            return c.querySelector(e)
        }
        var o, n = this,
            r = e.json,
            i = e.group,
            s = e.sectionTemplate,
            a = e.tableRowTemplate,
            l = e.cookieList,
            e = e.fragment,
            c = s.cloneNode(!0),
            s = i.SubGroups,
            d = (_(t("tbody")).html(""), i.Hosts.slice()),
            u = i.FirstPartyCookies.slice(),
            p = d.length || u.length ? i.GroupName : "",
            s = (i.ShowSubgroup && s.length ? (o = c.querySelector("section.ot-sdk-subgroup ul li"), s.forEach(function(e) {
                var t = o.cloneNode(!0);
                d = d.concat(e.Hosts), u = u.concat(e.FirstPartyCookies), (e.Hosts.length || e.FirstPartyCookies.length) && (p += "," + e.GroupName), _(t.querySelector(".ot-sdk-cookie-policy-group")).html(e.GroupName), _(t.querySelector(".ot-sdk-cookie-policy-group-desc")).html(n.groupsClass.safeFormattedGroupDescription(e)), _(o.parentElement).append(t)
            }), c.querySelector("section.ot-sdk-subgroup ul").removeChild(o)) : c.removeChild(c.querySelector("section.ot-sdk-subgroup")), I.TTLGroupByTech && (this.setCookieListHeaderOrder(c), this.setCookieListBodyOrder(a)), r.IsLifespanEnabled ? _(t("th.ot-life-span")).el.innerHTML = r.LifespanText : _(t("thead tr")).el.removeChild(_(t("th.ot-life-span")).el), _(t("th.ot-cookies")).el.innerHTML = r.CookiesText, _(t("th.ot-host")).el.innerHTML = r.CategoriesText, _(t("th.ot-cookies-type")).el.innerHTML = r.CookiesUsedText, _(t("th.ot-host-description")).el.innerHTML = r.CookiesDescText, this.transformFirstPartyCookies(u, d, i)),
            h = !1;
        (h = I.TTLGroupByTech ? I.TTLShowTechDesc : s.some(function(e) {
            return e.Description
        })) || _(t("thead tr")).el.removeChild(_(t("th.ot-host-description")).el), _(t(".ot-sdk-cookie-policy-group")).html(i.GroupName), _(t(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(i)), I.TTLGroupByTech ? this.insertCookieLineByLine({
            json: r,
            hosts: s,
            tableRowTemplate: a,
            showHostDescription: h,
            st: t
        }) : this.insertHostHtmlV2({
            json: r,
            hosts: s,
            tableRowTemplate: a,
            showHostDescription: h,
            st: t
        }), 0 === s.length ? c.removeChild(c.querySelector("table")) : _(t("caption")).el.innerHTML = p, _(l).append(c), _(e).append(l), _(this.COOKIE_POLICY_SELECTOR).append(e)
    }, sr.prototype.insertHostHtmlV2 = function(e) {
        for (var l, c = e.json, t = e.hosts, d = e.tableRowTemplate, u = e.showHostDescription, p = e.st, h = this, o = 0, n = t; o < n.length; o++) ! function(e) {
            for (var t = d.cloneNode(!0), o = function(e) {
                    return t.querySelector(e)
                }, n = (h.clearCookieRowElement(o), []), r = [], i = 0, s = e.Cookies; i < s.length; i++) {
                var a = s[i],
                    a = ((l = a).IsSession ? n.push(c.LifespanTypeText) : n.push(y.getDuration(l)), l.Name);
                e.Type && (a = '\n                    <a href="https://cookiepedia.co.uk/cookies/' + l.Name + '" \n                        rel="noopener" target="_blank" aria-label="' + l.Name + " " + I.NewWinTxt + '">\n                        ' + l.Name + "\n                    </a>"), r.push(a)
            }
            h.setDataLabelAttribute(o, c), h.createCookieRowHtmlElement({
                host: e,
                subGroupCookie: l,
                trt: o,
                json: c,
                lifespanText: n.join(", "),
                hostType: r.join(", ")
            }), h.removeLifeSpanOrHostDescription(c, u, t, o), _(p("tbody")).append(t)
        }(n[o])
    }, sr.prototype.insertGroupHTML = function(e) {
        function t(e) {
            return l.querySelector(e)
        }
        var o, n = e.json,
            r = e.group,
            i = e.sectionTemplate,
            s = e.tableRowTemplate,
            a = e.cookieList,
            e = e.fragment,
            l = i.cloneNode(!0),
            i = (_(t("caption")).el.innerHTML = r.GroupName, _(t("tbody")).html(""), _(t("thead tr")), n.IsLifespanEnabled ? _(t("th.life-span")).el.innerHTML = n.LifespanText : _(t("thead tr")).el.removeChild(_(t("th.life-span")).el), _(t("th.cookies")).el.innerHTML = n.CookiesText, _(t("th.host")).el.innerHTML = n.CategoriesText, !1);
        if (r.Hosts.some(function(e) {
                return e.description
            }) ? i = !0 : _(t("thead tr")).el.removeChild(_(t("th.host-description")).el), _(t(".ot-sdk-cookie-policy-group")).html(r.GroupName), _(t(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(r)), 0 < r.FirstPartyCookies.length) {
            _(t(".cookies-used-header")).html(n.CookiesUsedText), _(t(".cookies-list")).html("");
            for (var c = 0; c < r.FirstPartyCookies.length; c++) o = r.FirstPartyCookies[c], _(t(".cookies-list")).append("<li> " + y.getCookieLabel(o, n.AddLinksToCookiepedia) + " <li>")
        } else l.removeChild(t(".cookies-used-header")), l.removeChild(t(".cookies-list"));
        this.insertHostHtmlV1({
            json: n,
            hosts: r.Hosts,
            tableRowTemplate: s,
            showHostDescription: i,
            st: t
        }), _(a).append(l), _(e).append(a), _(this.COOKIE_POLICY_SELECTOR).append(e)
    }, sr.prototype.insertHostHtmlV1 = function(e) {
        for (var l = e.json, t = e.hosts, c = e.tableRowTemplate, d = e.showHostDescription, u = e.st, o = 0, n = t; o < n.length; o++) ! function(e) {
            for (var t = c.cloneNode(!0), o = function(e) {
                    return t.querySelector(e)
                }, n = (_(o(".cookies-td ul")).html(""), _(o(".life-span-td ul")).html(""), _(o(".host-td")).html(""), _(o(".host-description-td")).html('<span class="ot-mobile-border"></span><p>' + e.Description + "</p> "), 0), r = 0, i = e.Cookies; r < i.length; r++) {
                var s = i[r],
                    a = "",
                    a = s.IsSession ? l.LifespanTypeText : 0 === s.Length ? "<1 " + l.LifespanDurationText || l.PCenterVendorListLifespanDays : s.Length + " " + l.LifespanDurationText || l.PCenterVendorListLifespanDays,
                    a = l.IsLifespanEnabled ? "&nbsp;(" + a + ")" : "";
                _(o(".cookies-td ul")).append("<li> " + s.Name + " " + a + " </li>"), l.IsLifespanEnabled && (a = s.Length ? s.Length + " days" : "N/A", _(o(".life-span-td ul")).append("<li>" + a + "</li>")), 0 === n && (_(o(".host-td")).append('<span class="ot-mobile-border"></span>'), _(o(".host-td")).append('<a href="https://cookiepedia.co.uk/host/' + s.Host + '" rel="noopener" target="_blank"\n                        aria-label="' + (e.DisplayName || e.HostName) + " " + I.NewWinTxt + '">' + (e.DisplayName || e.HostName) + "</a>")), n++
            }
            d || t.removeChild(o("td.host-description-td")), _(u("tbody")).append(t)
        }(n[o]);
        0 === t.length && _(u("table")).el.removeChild(_(u("thead")).el)
    }, sr.prototype.transformFirstPartyCookies = function(e, t, o) {
        var n = this,
            r = t.slice(),
            t = (e.forEach(function(e) {
                n.populateHostGroup(e, r, I.firstPartyTxt)
            }), o.GeneralVendorsIds),
            e = (this.populateGenVendor(t, o, r), o.SubGroups || []);
        return e.length && e.forEach(function(e) {
            var t = e.GeneralVendorsIds;
            n.populateGenVendor(t, e, r)
        }), r
    }, sr.prototype.populateGenVendor = function(e, o, n) {
        var r = this;
        e.length && e.forEach(function(t) {
            var e = I.GeneralVendors.find(function(e) {
                return e.VendorCustomId === t
            });
            e.Cookies.length && e.Cookies.forEach(function(e) {
                var t;
                e.category === o.GroupName && (t = e.isThirdParty ? "" : I.firstPartyTxt, r.populateHostGroup(e, n, t))
            })
        })
    }, sr.prototype.populateHostGroup = function(t, e, o) {
        e.some(function(e) {
            if (e.HostName === t.Host && e.Type === o) return e.Cookies.push(t), !0
        }) || e.unshift({
            HostName: t.Host,
            DisplayName: t.Host,
            HostId: "",
            Description: "",
            Type: o,
            Cookies: [t]
        })
    }, sr.prototype.insertCookieLineByLine = function(e) {
        for (var t = e.json, o = e.hosts, n = e.tableRowTemplate, r = e.showHostDescription, i = e.st, s = 0, a = o; s < a.length; s++)
            for (var l = a[s], c = 0, d = l.Cookies; c < d.length; c++) {
                var u = d[c],
                    p = u.IsSession ? t.LifespanTypeText : y.getDuration(u),
                    h = u.Name,
                    g = (l.Type && (h = '<a href="https://cookiepedia.co.uk/cookies/' + h + '" \n                        rel="noopener" target="_blank" aria-label="' + h + " " + I.NewWinTxt + '">' + h + "\n                    </a>"), n.cloneNode(!0)),
                    C = this.queryToHtmlElement(g);
                this.clearCookieRowElement(C), this.createCookieRowHtmlElement({
                    host: l,
                    subGroupCookie: u,
                    trt: C,
                    json: t,
                    lifespanText: p,
                    hostType: h
                }), this.removeLifeSpanOrHostDescription(t, r, g, C), _(i("tbody")).append(g)
            }
    }, sr.prototype.removeLifeSpanOrHostDescription = function(e, t, o, n) {
        e.IsLifespanEnabled || o.removeChild(n("td.ot-life-span-td")), t || o.removeChild(n("td.ot-host-description-td"))
    }, sr.prototype.createCookieRowHtmlElement = function(e) {
        var t = e.host,
            o = e.subGroupCookie,
            n = e.trt,
            r = e.json,
            i = e.lifespanText,
            e = e.hostType,
            s = ".ot-host-td",
            r = (this.setDataLabelAttribute(n, r), _(n(".ot-host-description-td")).html('<span class="ot-mobile-border"></span><p>' + o.description + "</p> "), _(n(s)).append('<span class="ot-mobile-border"></span>'), t.DisplayName || t.HostName);
        _(n(s)).append(t.Type ? r : '<a href="https://cookiepedia.co.uk/host/' + o.Host + '" rel="noopener" target="_blank" \n                        aria-label="' + r + " " + I.NewWinTxt + '">\n                        ' + r + "\n                        </a>"), n(".ot-cookies-td .ot-cookies-td-content").insertAdjacentHTML("beforeend", e), n(".ot-life-span-td .ot-life-span-td-content").innerText = i, n(".ot-cookies-type .ot-cookies-type-td-content").innerText = t.Type ? I.firstPartyTxt : I.thirdPartyTxt
    }, sr.prototype.setDataLabelAttribute = function(e, t) {
        var o = "data-label";
        e(".ot-host-td").setAttribute(o, t.CategoriesText), e(".ot-cookies-td").setAttribute(o, t.CookiesText), e(".ot-cookies-type").setAttribute(o, t.CookiesUsedText), e(".ot-life-span-td").setAttribute(o, t.LifespanText), e(".ot-host-description-td").setAttribute(o, t.CookiesDescText)
    }, sr.prototype.clearCookieRowElement = function(e) {
        _(e(".ot-cookies-td span")).text(""), _(e(".ot-life-span-td span")).text(""), _(e(".ot-cookies-type span")).text(""), _(e(".ot-cookies-td .ot-cookies-td-content")).html(""), _(e(".ot-host-td")).html("")
    }, sr.prototype.setCookieListHeaderOrder = function(e) {
        var e = e.querySelector("section table thead tr"),
            t = e.querySelector("th.ot-host"),
            o = e.querySelector("th.ot-cookies"),
            n = e.querySelector("th.ot-life-span"),
            r = e.querySelector("th.ot-cookies-type"),
            i = e.querySelector("th.ot-host-description");
        e.innerHTML = "", e.appendChild(o.cloneNode(!0)), e.appendChild(t.cloneNode(!0)), e.appendChild(n.cloneNode(!0)), e.appendChild(r.cloneNode(!0)), e.appendChild(i.cloneNode(!0))
    }, sr.prototype.setCookieListBodyOrder = function(e) {
        var t = e.querySelector("td.ot-host-td"),
            o = e.querySelector("td.ot-cookies-td"),
            n = e.querySelector("td.ot-life-span-td"),
            r = e.querySelector("td.ot-cookies-type"),
            i = e.querySelector("td.ot-host-description-td");
        e.innerHTML = "", e.appendChild(o.cloneNode(!0)), e.appendChild(t.cloneNode(!0)), e.appendChild(n.cloneNode(!0)), e.appendChild(r.cloneNode(!0)), e.appendChild(i.cloneNode(!0))
    }, sr.prototype.queryToHtmlElement = function(t) {
        return function(e) {
            return t.querySelector(e)
        }
    };
    var rr, ir = sr;

    function sr() {
        this.groupsClass = f, this.COOKIE_POLICY_SELECTOR = "#ot-sdk-cookie-policy", this.OPTANON_POLICY_SELECTOR = "#optanon-cookie-policy", this.ONETRUST_COOKIE_POLICY = "#ot-sdk-cookie-policy, #optanon-cookie-policy"
    }
    cr.prototype.IsAlertBoxClosedAndValid = function() {
        return h.isAlertBoxClosedAndValid()
    }, cr.prototype.LoadBanner = function() {
        g.loadBanner()
    }, cr.prototype.Init = function(e) {
        void 0 === e && (e = !1), Ge.insertViewPortTag(), G.ensureHtmlGroupDataInitialised(), dn.updateGtmMacros(!1), tr.initialiseLandingPath(), e || Wt.initialiseCssReferences()
    }, cr.prototype.FetchAndDownloadPC = function() {
        w.fetchAndSetupPC()
    }, cr.prototype.ToggleInfoDisplay = function() {
        g.triggerGoogleAnalyticsEvent(vo, Lo), w.toggleInfoDisplay()
    }, cr.prototype.Close = function(e) {
        w.close(e)
    }, cr.prototype.AllowAll = function(e) {
        O.allowAllEvent(e)
    }, cr.prototype.RejectAll = function(e) {
        O.rejectAllEvent(e)
    }, cr.prototype.setDataSubjectIdV2 = function(e, t, o, n) {
        void 0 === t && (t = !1), void 0 === o && (o = ""), void 0 === n && (n = !1), e && e.trim() && (e = e.replace(/ /g, ""), k.writeCookieParam(v.OPTANON_CONSENT, xe.CONSENT_ID, e, !0), L.dsParams.isAnonymous = t), null != (e = o) && e.trim() && k.writeCookieParam(v.OPTANON_CONSENT, xe.IDENTIFIER_TYPE, o.trim()), L.isV2Stub || (t = k.readCookieParam(v.OPTANON_CONSENT, "iType"), $r.createConsentTxn(!1, ue[t], !1, !0, n))
    }, cr.prototype.getDataSubjectId = function() {
        return k.readCookieParam(v.OPTANON_CONSENT, xe.CONSENT_ID, !0)
    }, cr.prototype.synchroniseCookieWithPayload = function(n) {
        var e = k.readCookieParam(v.OPTANON_CONSENT, "groups"),
            e = b.strToArr(e),
            r = [];
        e.forEach(function(e) {
            var e = e.split(":"),
                t = C.getGroupById(e[0]),
                o = b.findIndex(n, function(e) {
                    return e.Id === t.PurposeId
                }),
                o = n[o];
            o ? o.TransactionType === Ne ? (r.push(e[0] + ":1"), t.Parent ? w.toggleSubCategory(null, t.CustomGroupId, !0, t.CustomGroupId) : w.toggleV2Category(null, t, !0, t.CustomGroupId)) : (r.push(e[0] + ":0"), t.Parent ? w.toggleSubCategory(null, t.CustomGroupId, !1, t.CustomGroupId) : w.toggleV2Category(null, t, !1, t.CustomGroupId)) : r.push(e[0] + ":" + e[1])
        }), ro.writeGrpParam(v.OPTANON_CONSENT, r)
    }, cr.prototype.getGeolocationData = function() {
        return L.userLocation
    }, cr.prototype.TriggerGoogleAnalyticsEvent = function(e, t, o, n) {
        g.triggerGoogleAnalyticsEvent(e, t, o, n)
    }, cr.prototype.ReconsentGroups = function() {
        var n = !1,
            e = k.readCookieParam(v.OPTANON_CONSENT, "groups"),
            r = b.strToArr(e),
            i = b.strToArr(e.replace(/:0|:1/g, "")),
            s = !1,
            t = k.readCookieParam(v.OPTANON_CONSENT, "hosts"),
            a = b.strToArr(t),
            l = b.strToArr(t.replace(/:0|:1/g, "")),
            c = ["inactive", "inactive landingpage", "do not track"];
        e && (I.Groups.forEach(function(e) {
            F(e.SubGroups, [e]).forEach(function(e) {
                var t = e.CustomGroupId,
                    o = b.indexOf(i, t); - 1 !== o && (e = C.getGrpStatus(e).toLowerCase(), -1 < c.indexOf(e)) && (n = !0, r[o] = t + ("inactive landingpage" === e ? ":1" : ":0"))
            })
        }), n) && ro.writeGrpParam(v.OPTANON_CONSENT, r), t && (I.Groups.forEach(function(e) {
            F(e.SubGroups, [e]).forEach(function(n) {
                n.Hosts.forEach(function(e) {
                    var t, o = b.indexOf(l, e.HostId); - 1 !== o && (t = C.getGrpStatus(n).toLowerCase(), -1 < c.indexOf(t)) && (s = !0, a[o] = e.HostId + ("inactive landingpage" === t ? ":1" : ":0"))
                })
            })
        }), s) && ro.writeHstParam(v.OPTANON_CONSENT, a)
    }, cr.prototype.SetAlertBoxClosed = function(e) {
        g.setAlertBoxClosed(e)
    }, cr.prototype.GetDomainData = function() {
        return A.pubDomainData
    }, cr.prototype.setGeoLocation = function(e, t) {
        L.userLocation = {
            country: e,
            state: t = void 0 === t ? "" : t
        }
    }, cr.prototype.changeLang = function(t) {
        var o;
        t !== L.lang && (o = S.moduleInitializer, xt.getLangJson(t).then(function(e) {
            e ? (A.init(e), G.fetchAssets(t).then(function() {
                var e = document.getElementById("onetrust-style"),
                    e = (e && (e.textContent = ""), Wt.initialiseCssReferences(), o.IsSuppressPC && !L.isPCVisible || (b.removeChild(_("#onetrust-pc-sdk").el), L.vendorDomInit = !1, L.genVendorDomInit = !1, B.insertPcHtml(), w.initialiseConsentNoticeHandlers(), I.IsIabEnabled && (h.assignIABDataWithGlobalVendorList(L.gvlObj), x.InitializeVendorList()), L.isPCVisible && w.restorePc()), !0);
                h.isAlertBoxClosedAndValid() || o.IsSuppressBanner && (!o.IsSuppressBanner || L.skipAddingHTML) || I.NoBanner || (b.removeChild(_("#onetrust-banner-sdk").el), w.initializeAlartHtmlAndHandler(), e = !1), ar.initCookiePolicyAndSettings(), b.removeChild(_("#ot-sdk-btn-floating").el), si.insertCSBtn(e), ar.processedHtml = null, ar.updateTCStringOnLangChange(t)
            })) : console.error("Language:" + t + " doesn't exist for the geo rule")
        }))
    }, cr.prototype.updateTCStringOnLangChange = function(e) {
        A.isIab2orv2Template && (L.consentLanguage = e, L.tcModel.consentLanguage = L.consentLanguage, L.tcModel.useNonStandardTexts = I.UseNonStandardStacks, h.isAlertBoxClosedAndValid() || y.updateTCString())
    }, cr.prototype.initCookiePolicyAndSettings = function(e) {
        var t;
        (e = void 0 === e ? !1 : e) && (null != (t = document.querySelector(".ot-sdk-show-settings")) && t.removeEventListener("click", w.cookiesSettingsBoundListener), null != (t = document.querySelector(".optanon-toggle-display"))) && t.removeEventListener("click", w.cookiesSettingsBoundListener), S.fp.CookieV2TrackingTechnologies ? si.insertTrackingTechnologies() : rr.insertCookiePolicyHtml(), w.insertCookieSettingText(e)
    }, cr.prototype.showVendorsList = function() {
        L.pcLayer !== re.VendorList && (w.showAllVendors(), g.triggerGoogleAnalyticsEvent(vo, Eo))
    }, cr.prototype.getTestLogData = function() {
        var e = I.Groups,
            t = A.pubDomainData,
            o = S.moduleInitializer.Version,
            o = (console.info("%cWelcome to OneTrust Log", "padding: 8px; background-color: #43c233; color: white; font-style: italic; border: 1px solid black; font-size: 1.5em;"), console.info("Script is for: %c" + (t.Domain || I.optanonCookieDomain), "padding: 4px 6px; font-style: italic; border: 2px solid #43c233; font-size: 12px;"), console.info("Script Version Published: " + o), console.info("The consent model is: " + t.ConsentModel.Name), null !== h.alertBoxCloseDate()),
            n = (console.info("Consent has " + (o ? "" : "not ") + "been given " + (o ? "👍" : "🛑")), []),
            r = (e.forEach(function(e) {
                var t = "",
                    t = e.Status && "always active" === e.Status.toLowerCase() ? "Always Active" : f.isGroupActive(e) ? "Active" : "Inactive";
                n.push({
                    CustomGroupId: e.CustomGroupId,
                    GroupName: e.GroupName,
                    Status: t
                })
            }), console.groupCollapsed("Current Category Status"), console.table(n), console.groupEnd(), []),
            o = (t.GeneralVendors.forEach(function(e) {
                r.push({
                    CustomGroupId: e.VendorCustomId,
                    Name: e.Name,
                    Status: ar.isCategoryActive(e.VendorCustomId) ? "active" : "inactive"
                })
            }), console.groupCollapsed("General Vendor Ids"), console.table(r), console.groupEnd(), A.getRegionRule()),
            t = L.userLocation,
            i = S.moduleInitializer.GeoRuleGroupName,
            t = (A.conditionalLogicEnabled ? console.groupCollapsed("Geolocation, Template & Condition") : console.groupCollapsed("Geolocation and Template"), L.userLocation.country && console.info("The Geolocation is " + t.country.toUpperCase()), console.info("The Geolocation rule is " + o.Name), console.info("The GeolocationRuleGroup is " + i), A.canUseConditionalLogic ? (console.info("The Condition name is " + A.Condition.Name), console.info("The TemplateName is " + A.Condition.TemplateName)) : console.info("The TemplateName is " + o.TemplateName), console.groupEnd(), e.filter(function(e) {
                return f.isGroupActive(e) && "COOKIE" === e.Type
            }));
        console.groupCollapsed("The cookies expected to be active if blocking has been implemented are"), t.forEach(function(e) {
            console.groupCollapsed(e.GroupName);
            e = ar.getAllFormatCookiesForAGroup(e);
            console.table(e, ["Name", "Host", "description"]), console.groupEnd()
        }), console.groupEnd()
    }, cr.prototype.isCategoryActive = function(e) {
        return -1 !== window.OptanonActiveGroups.indexOf("," + e + ",")
    }, cr.prototype.getAllFormatCookiesForAGroup = function(e) {
        var t = [];
        return e.FirstPartyCookies.forEach(function(e) {
            return t.push({
                Name: e.Name,
                Host: e.Host,
                Description: e.description
            })
        }), (null == (e = e.Hosts) ? void 0 : e.reduce(function(e, t) {
            return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
        }, [])).forEach(function(e) {
            return t.push({
                Name: e.Name,
                Host: e.Host,
                Description: e.description
            })
        }), t
    }, cr.prototype.updateSingularConsent = function(l, c) {
        return u(this, void 0, void 0, function() {
            var t, o, n, r, i, s, a;
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, w.fetchAndSetupPC()];
                    case 1:
                        for (e.sent(), A.apiSource = ee.UpdateConsent, t = c.split(","), o = [], n = 0, r = t; n < r.length; n++) s = r[n], s = s.split(":"), i = s[0], s = s[1], a = Boolean(Number(s)), l === ct ? "always active" === C.getGrpStatus(C.getGroupById(i)) || (ar.updateConsentArray(L.groupsConsent, i, s), o.push({
                            id: i,
                            isEnabled: a
                        })) : l === dt ? ar.updateConsentArray(L.hostsConsent, i, s) : l === ut ? L.genVendorsConsent[i] = a : l === pt && o.push({
                            id: i,
                            isEnabled: a
                        });
                        return O.handleTogglesOnSingularConsentUpdate(l, o), [2]
                }
            })
        })
    }, cr.prototype.vendorServiceEnabled = function() {
        return L.showVendorService
    }, cr.prototype.updateGCM = function(e) {
        e || console.error("No callback passed to the UpdateGCM"), A.gcmUpdateCallback = e
    }, cr.prototype.updateConsentArray = function(e, t, o) {
        var n = e.findIndex(function(e) {
            return e.includes(t + ":0") || e.includes(t + ":1")
        }); - 1 < n ? e[n] = t + ":" + o : e.push(t + ":" + o)
    };
    var ar, lr = cr;

    function cr() {
        this.processedHtml = "", this.useGeoLocationService = !0, this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid, this.InitializeBanner = function() {
            return si.initBanner()
        }, this.getHTML = function() {
            return document.getElementById("onetrust-banner-sdk") || (B.insertPcHtml(), Yn.insertAlertHtml()), ar.processedHtml || (ar.processedHtml = document.querySelector("#onetrust-consent-sdk").outerHTML), ar.processedHtml
        }, this.getCSS = function() {
            return Wt.processedCSS
        }, this.setConsentProfile = function(e) {
            var t, o;
            e.customPayload && null != (t = o = e.customPayload) && t.Interaction && k.writeCookieParam(v.OPTANON_CONSENT, xe.INTERACTION_COUNT, o.Interaction), ar.setDataSubjectIdV2(e.identifier, e.isAnonymous, e.identifierType, e.sendReceipt), ar.synchroniseCookieWithPayload(e.purposes), O.executeOptanonWrapper()
        }, this.InsertScript = function(e, t, o, n, r, i) {
            var s, a = null != n && void 0 !== n,
                l = a && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (f.canInsertForGroup(r, l) && !b.contains(L.srcExecGrps, r)) {
                L.srcExecGrpsTemp.push(r), a && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && b.empty(t);
                var c = document.createElement("script");
                switch (null != o && void 0 !== o && (s = !1, c.onload = c.onreadystatechange = function() {
                    s || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (s = !0, o())
                }), c.type = "text/javascript", c.src = e, i && (c.async = i), t) {
                    case "head":
                        document.getElementsByTagName("head")[0].appendChild(c);
                        break;
                    case "body":
                        document.getElementsByTagName("body")[0].appendChild(c);
                        break;
                    default:
                        var d = document.getElementById(t);
                        d && (d.appendChild(c), a) && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && b.show(t)
                }
                if (a && void 0 !== n.makeElementsVisible)
                    for (var u = 0, p = n.makeElementsVisible; u < p.length; u++) {
                        var h = p[u];
                        b.show(h)
                    }
                if (a && void 0 !== n.deleteElements)
                    for (var g = 0, C = n.deleteElements; g < C.length; g++) {
                        h = C[g];
                        b.remove(h)
                    }
            }
        }, this.InsertHtml = function(e, t, o, n, r) {
            var i = null != n && void 0 !== n,
                s = i && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (f.canInsertForGroup(r, s) && !b.contains(L.htmlExecGrps, r)) {
                if (L.htmlExecGrpsTemp.push(r), i && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && b.empty(t), b.appendTo(t, e), i && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && b.show(t), i && void 0 !== n.makeElementsVisible)
                    for (var a = 0, l = n.makeElementsVisible; a < l.length; a++) {
                        var c = l[a];
                        b.show(c)
                    }
                if (i && void 0 !== n.deleteElements)
                    for (var d = 0, u = n.deleteElements; d < u.length; d++) {
                        c = u[d];
                        b.remove(c)
                    }
                null != o && void 0 !== o && o()
            }
        }, this.BlockGoogleAnalytics = function(e, t) {
            window["ga-disable-" + e] = !f.canInsertForGroup(t)
        }
    }
    dr.prototype.getFieldsValues = function(e, t, o, n, r) {
        void 0 === r && (r = !1);
        e = this.getSectionFieldsMapping(e), t = this.getSectionFieldsMapping(t, !0), o = this.getDynamicFields(o, n), n = this.getMSPASectionFieldValue(), r = r ? this.getGpcSectionFieldValue() : {};
        return R(R(R(R(R({}, e), t), o), n), r)
    }, dr.prototype.getGpcSectionFieldValue = function() {
        var e = {};
        return e[Ve.GpcSegmentType] = 1, e[Ve.Gpc] = A.gpcEnabled, e
    }, dr.prototype.getMSPASectionFieldValue = function() {
        var e = {};
        return I.IsMSPAEnabled ? (e.MspaCoveredTransaction = 1, I.MSPAOptionMode === Ee.MspaServiceProviderMode ? (e.MspaServiceProviderMode = 1, e.MspaOptOutOptionMode = 2) : I.MSPAOptionMode === Ee.MspaOptOutOptionMode ? (e.MspaServiceProviderMode = 2, e.MspaOptOutOptionMode = 1) : (e.MspaServiceProviderMode = 2, e.MspaOptOutOptionMode = 2)) : (e.MspaCoveredTransaction = 2, e.MspaServiceProviderMode = 0, e.MspaOptOutOptionMode = 0), e
    }, dr.prototype.getDynamicArrayFieldsValue = function(e, t) {
        for (var o = {}, n = [], r = this.getSectionFieldsMapping(t), i = 1; i <= Object.keys(r).length; i++) n.push(r[e + i]);
        return o[e] = n, o
    }, dr.prototype.getDynamicFields = function(e, t) {
        var o, n = {};
        return I.IsGPPKnownChildApplicable && e && (o = this.getDynamicArrayFieldsValue(Oe.KnownChildSensitiveDataConsents, e), n = R(R({}, n), o)), I.IsGPPDataProcessingApplicable && t && (o = this.getDynamicArrayFieldsValue(Oe.SensitiveDataProcessing, t), n = R(R({}, n), o)), n
    }, dr.prototype.getSectionFieldsMapping = function(e, o) {
        var n = this,
            r = (void 0 === o && (o = !1), {});
        return Object.entries(e).forEach(function(e) {
            var t = e[0],
                e = e[1],
                e = n.evaluateValueOperators(e);
            r[t] = n.calculateFieldValue(e, o)
        }), r
    }, dr.prototype.evaluateValueOperators = function(e) {
        var t, o, n = "",
            r = [];
        return e && (t = e.split(" && "), o = e.split(" || "), r = (1 < t.length ? (n = "&&", t) : 1 < o.length ? (n = "||", o) : (n = "", [e])).map(function(e) {
            return I.GPPPurposes[e] || ""
        })), {
            values: r,
            operator: n
        }
    }, dr.prototype.calculateFieldValue = function(e, t) {
        var o;
        if (e.values.length) switch (e.operator) {
            case "&&":
                o = this.calculateAndFieldValue(e.values, t);
                break;
            case "||":
                o = this.calculateOrFieldValue(e.values, t);
                break;
            default:
                o = this.calculateSingleFieldValue(e.values[0], t)
        } else o = 0;
        return o
    }, dr.prototype.calculateOrFieldValue = function(e, t) {
        var o = this;
        return this.isNotApplicable(e) ? 0 : (e = e.some(function(e) {
            return o.fieldValueCondition(e, t)
        }), this.calculateFieldValueFromBit(e, t))
    }, dr.prototype.calculateAndFieldValue = function(e, t) {
        var o = this;
        return this.isNotApplicable(e) ? 0 : (e = e.every(function(e) {
            return o.fieldValueCondition(e, t)
        }), this.calculateFieldValueFromBit(e, t))
    }, dr.prototype.calculateSingleFieldValue = function(e, t) {
        return e && this.isValidGroup(e) ? (e = this.fieldValueCondition(e, t), this.calculateFieldValueFromBit(e, t)) : 0
    }, dr.prototype.isValidGroup = function(e) {
        e = e ? C.getGroupById(e) : null;
        return !!e && A.isValidConsentNoticeGroup(e, I.IsIabEnabled)
    }, dr.prototype.calculateFieldValueFromBit = function(e, t) {
        t = t ? e ? 1 : 0 : e ? 2 : 1;
        return t
    }, dr.prototype.isNotApplicable = function(e) {
        var t = this;
        return !e.some(function(e) {
            return Boolean(e) && t.isValidGroup(e)
        })
    }, dr.prototype.fieldValueCondition = function(e, t) {
        return t ? Boolean(e) : ar.isCategoryActive(e)
    };
    var s = dr;

    function dr() {}
    D(yr, ur = s), yr.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(Mt, qt, Ut, jt, !0)
    };
    var ur, pr, hr, gr, Cr = yr;

    function yr() {
        return null !== ur && ur.apply(this, arguments) || this
    }(l = pr = pr || {}).SaleOptOut = "SaleOptOutCID", l.KnownChildSensitiveDataConsents = "KnownChildSellPICID", l.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID", (l = hr = hr || {}).SharingNotice = "SaleOptOutCID || TargetedAdvertisingOptOutCID", l.SaleOptOutNotice = "SaleOptOutCID", l.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID", (l = gr = gr || {}).SensitiveDataProcessing1 = "RaceCID", l.SensitiveDataProcessing2 = "ReligionCID", l.SensitiveDataProcessing3 = "HealthCID", l.SensitiveDataProcessing4 = "SexualOrientationCID", l.SensitiveDataProcessing5 = "ImmigrationCID", l.SensitiveDataProcessing6 = "GeneticCID", l.SensitiveDataProcessing7 = "BiometricCID", l.SensitiveDataProcessing8 = "GeolocationCID";
    D(Sr, fr = s), Sr.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(pr, hr, null, gr, !1)
    };
    var fr, mr, vr = Sr;

    function Sr() {
        return null !== fr && fr.apply(this, arguments) || this
    }(l = mr = mr || {}).Version = "version", l.CmpId = "cmpId", l.CmpVersion = "cmpVersion", l.ConsentScreen = "consentScreen", l.ConsentLanguage = "consentLanguage", l.VendorListVersion = "vendorListVersion", l.PolicyVersion = "policyVersion", l.IsServiceSpecific = "isServiceSpecific", l.UseNonStandardStacks = "useNonStandardTexts", l.PurposeOneTreatment = "purposeOneTreatment", l.PublisherCountryCode = "publisherCountryCode", l.NumCustomPurposes = "numCustomPurposes", l.VendorsAllowedSegmentType = "VendorsAllowedSegmentType", l.VendorsDisclosedSegmentType = "VendorsDisclosedSegmentType", l.PublisherPurposesSegmentType = "PublisherPurposesSegmentType";
    Ir.prototype.getSectionFieldsValues = function() {
        for (var e = {}, t = 0, o = Object.keys(mr); t < o.length; t++) {
            var n = o[t],
                r = mr[n];
            L.tcModel && L.tcModel[r] && (e[n] = L.tcModel[r])
        }
        e.ConsentLanguage = null == (i = e.ConsentLanguage) ? void 0 : i.toString().toUpperCase();
        var i = this.setPurposesData();
        return R(R({}, e), i)
    }, Ir.prototype.setPurposesData = function() {
        var e = {},
            t = L.oneTrustIABConsent,
            o = this.getConsentValuesFromPurpose(t.purpose),
            o = (e.PurposeConsents = o, e.PublisherConsents = o, A.legIntSettings.PAllowLI ? this.getConsentValuesFromPurpose(t.legimateInterest) : []);
        return e.PurposeLegitimateInterests = o, e.PublisherLegitimateInterests = o, e.VendorConsents = this.syncVendorConsent(L.tcModel.vendorConsents), A.legIntSettings.PAllowLI && !o.length && (t.legIntVendors = []), e.VendorLegitimateInterests = this.getConsentValuesFromPurpose(b.distinctArray(t.legIntVendors), !0, !0), e.SpecialFeatureOptins = this.getConsentValuesFromPurpose(t.specialFeatures), e
    }, Ir.prototype.syncVendorConsent = function(e) {
        var e = e.clone(),
            o = [];
        return e.forEach(function(e, t) {
            L.vendorsSetting[t] && L.vendorsSetting[t].consent || !e || o.push(t)
        }), e.unset(o), Array.from(e.values())
    }, Ir.prototype.getConsentValuesFromPurpose = function(e, t, o) {
        var n = (t = void 0 === t ? !1 : t) ? 0 : 1;
        return (o = void 0 === o ? !1 : o) && (e = e.filter(function(e) {
            return "true" === e.split(":")[1]
        })), t ? e.map(function(e) {
            return parseInt(e.split(":")[n])
        }) : e.map(function(e) {
            return "true" === e.split(":")[n]
        })
    };
    var kr, br, Pr, Tr, Ar = Ir;

    function Ir() {}(l = kr = kr || {}).SaleOptOut = "SaleOptOutCID", l.SharingOptOut = "SharingOptOutCID", l.PersonalDataConsents = "PersonalDataCID", l.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID", (l = br = br || {}).SharingNotice = "SharingOptOutCID", l.SaleOptOutNotice = "SaleOptOutCID", l.SharingOptOutNotice = "SharingOptOutCID", l.SensitiveDataProcessingOptOutNotice = "RaceCID || ReligionCID || HealthCID || SexualOrientationCID || ImmigrationCID || GeneticCID || BiometricCID || GeolocationCID || SensitivePICID || SensitiveSICID || UnionMembershipCID || CommunicationCID", l.SensitiveDataLimitUseNotice = "RaceCID || ReligionCID || HealthCID || SexualOrientationCID || ImmigrationCID || GeneticCID || BiometricCID || GeolocationCID || SensitivePICID || SensitiveSICID || UnionMembershipCID || CommunicationCID", l.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID", (l = Pr = Pr || {}).KnownChildSensitiveDataConsents1 = "PDCAboveAgeCID", l.KnownChildSensitiveDataConsents2 = "PDCBelowAgeCID", (l = Tr = Tr || {}).SensitiveDataProcessing1 = "RaceCID", l.SensitiveDataProcessing2 = "ReligionCID", l.SensitiveDataProcessing3 = "HealthCID", l.SensitiveDataProcessing4 = "SexualOrientationCID", l.SensitiveDataProcessing5 = "ImmigrationCID", l.SensitiveDataProcessing6 = "GeneticCID", l.SensitiveDataProcessing7 = "BiometricCID", l.SensitiveDataProcessing8 = "GeolocationCID", l.SensitiveDataProcessing9 = "SensitivePICID", l.SensitiveDataProcessing10 = "SensitiveSICID", l.SensitiveDataProcessing11 = "UnionMembershipCID", l.SensitiveDataProcessing12 = "CommunicationCID";
    D(Br, Lr = s), Br.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(kr, br, Pr, Tr, !0)
    };
    var Lr, _r, Er, Vr, Or = Br;

    function Br() {
        return null !== Lr && Lr.apply(this, arguments) || this
    }(l = _r = _r || {}).SaleOptOut = "SaleOptOutCID", l.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID", l.KnownChildSensitiveDataConsents = "KnownChildSellPICID", (l = Er = Er || {}).SharingNotice = "SaleOptOutCID || TargetedAdvertisingOptOutCID", l.SaleOptOutNotice = "SaleOptOutCID", l.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID", (l = Vr = Vr || {}).SensitiveDataProcessing1 = "RaceCID", l.SensitiveDataProcessing2 = "ReligionCID", l.SensitiveDataProcessing3 = "HealthCID", l.SensitiveDataProcessing4 = "SexualOrientationCID", l.SensitiveDataProcessing5 = "ImmigrationCID", l.SensitiveDataProcessing6 = "GeneticCID", l.SensitiveDataProcessing7 = "BiometricCID";
    D(Rr, wr = s), Rr.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(_r, Er, null, Vr, !0)
    };
    var wr, Gr, xr, Nr, Dr, Hr = Rr;

    function Rr() {
        return null !== wr && wr.apply(this, arguments) || this
    }(l = Gr = Gr || {}).SaleOptOut = "SaleOptOutCID", l.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID", (l = xr = xr || {}).SharingNotice = "SaleOptOutCID || TargetedAdvertisingOptOutCID", l.SaleOptOutNotice = "SaleOptOutCID", l.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID", (l = Nr = Nr || {}).KnownChildSensitiveDataConsents1 = "KnownChildProcessCID", l.KnownChildSensitiveDataConsents2 = "KnownChildSellPICID", l.KnownChildSensitiveDataConsents3 = "KnownChildSharePICID", (l = Dr = Dr || {}).SensitiveDataProcessing1 = "RaceCID", l.SensitiveDataProcessing2 = "ReligionCID", l.SensitiveDataProcessing3 = "HealthCID", l.SensitiveDataProcessing4 = "SexualOrientationCID", l.SensitiveDataProcessing5 = "ImmigrationCID", l.SensitiveDataProcessing6 = "GeneticCID", l.SensitiveDataProcessing7 = "BiometricCID", l.SensitiveDataProcessing8 = "GeolocationCID";
    D(zr, Fr = s), zr.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(Gr, xr, Nr, Dr, !0)
    };
    var Fr, Mr, qr, Ur, jr = zr;

    function zr() {
        return null !== Fr && Fr.apply(this, arguments) || this
    }(l = Mr = Mr || {}).SaleOptOut = "SaleOptOutCID", l.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID", l.KnownChildSensitiveDataConsents = "KnownChildSellPICID", (l = qr = qr || {}).SharingNotice = "SaleOptOutCID || TargetedAdvertisingOptOutCID", l.SaleOptOutNotice = "SaleOptOutCID", l.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID", l.SensitiveDataProcessingOptOutNotice = "RaceCID || ReligionCID || SexualOrientationCID || ImmigrationCID || HealthCID || GeneticCID || BiometricCID || GeolocationCID", (l = Ur = Ur || {}).SensitiveDataProcessing1 = "RaceCID", l.SensitiveDataProcessing2 = "ReligionCID", l.SensitiveDataProcessing3 = "SexualOrientationCID", l.SensitiveDataProcessing4 = "ImmigrationCID", l.SensitiveDataProcessing5 = "HealthCID", l.SensitiveDataProcessing6 = "GeneticCID", l.SensitiveDataProcessing7 = "BiometricCID", l.SensitiveDataProcessing8 = "GeolocationCID";
    D(Jr, Kr = s), Jr.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(Mr, qr, null, Ur, !1)
    };
    var Kr, Wr = Jr;

    function Jr() {
        return null !== Kr && Kr.apply(this, arguments) || this
    }
    Qr.prototype.initGppConsent = function() {
        this.initTemplateAndSectionInstance(), this.cmpApi.setApplicableSections(this.getApplicableSections(this.gppTemplateApplied));
        var o, n, e = this.readGppCookies(),
            t = this.getCurrentSectionName(this.gppTemplateApplied),
            r = !1;
        e && (h.needReconsent() ? this.deleteAllGppCookies() : (this.cmpApi.setGppString(e), r = !0)), this.cmpApi.setSupportedAPIs((o = [], n = {}, Object.keys(we).forEach(function(e) {
            var t = {},
                e = (t[e] = we[e], Object.assign(t, n));
            n = e
        }), Object.keys(Be).map(function(e) {
            return {
                name: e,
                value: Be[e]
            }
        }).forEach(function(e) {
            e = n[e.name] + ":" + e.value;
            o.push(e)
        }), o.filter(function(e, t) {
            return o.indexOf(e) === t
        }))), this.cmpApi.setCmpStatus(null == (e = this.gppSDKRef) ? void 0 : e.cmpStatus.LOADED), this.cmpApi.setSignalStatus(null == (e = this.gppSDKRef) ? void 0 : e.signalStatus.READY), (t && !this.cmpApi.hasSection(t) || A.gpcBrowserValueChanged || L.grpsSynced && 0 < L.grpsSynced.length) && this.setOrUpdateGppSectionString(t, r), window.OneTrust.OnConsentChanged(this.updateGppConsentString)
    }, Qr.prototype.initTemplateAndSectionInstance = function() {
        this.gppTemplateApplied = this.getGppTemplateApplied(), this.gppSection = this.getSectionInstance(this.gppTemplateApplied)
    }, Qr.prototype.setCmpDisplayStatus = function(e) {
        var t;
        "visible" === e ? this.cmpApi.setCmpDisplayStatus(null == (t = this.gppSDKRef) ? void 0 : t.displayStatus.VISIBLE) : "hidden" === e ? this.cmpApi.setCmpDisplayStatus(null == (t = this.gppSDKRef) ? void 0 : t.displayStatus.HIDDEN) : "disabled" === e && this.cmpApi.setCmpDisplayStatus(null == (t = this.gppSDKRef) ? void 0 : t.displayStatus.DISABLED)
    }, Qr.prototype.setGppCookies = function(e, t) {
        t ? this.updateGppCookies(e) : (t = this.getCookiesChunk(e), e = Object.keys(t).length, this.writeGppCookies(e, t))
    }, Qr.prototype.readGppCookies = function() {
        var e = Number(k.readCookieParam(v.OPTANON_CONSENT, _e.ChunkCountParam) || 0);
        if (e <= 1) return 0 === e ? "" : k.getCookie(v.GPP_CONSENT);
        for (var t = "", o = 1; o <= e; o++) var n = k.getCookie("" + _e.Name + o),
            t = t.concat(n);
        return t
    }, Qr.prototype.deleteGppCookies = function(e, t) {
        if (0 < e && (1 === e && (k.setCookie("" + _e.Name, "", 0, !0), e++), e <= t))
            for (var o = e; o <= t; o++) k.setCookie("" + _e.Name + o, "", 0, !0)
    }, Qr.prototype.getSectionInstance = function(e) {
        var t;
        switch (e) {
            case Le.CPRA:
            case Le.CCPA:
                t = new Cr;
                break;
            case Le.CDPA:
                t = new vr;
                break;
            case Le.USNATIONAL:
                t = new Or;
                break;
            case Le.COLORADO:
                t = new Hr;
                break;
            case Le.CONNECTICUT:
                t = new jr;
                break;
            case Le.UCPA:
                t = new Wr;
                break;
            case Le.IAB2V2:
                t = new Ar
        }
        return t
    }, Qr.prototype.hasGPPSection = function() {
        return !!this.gppSection
    }, Qr.prototype.getGppTemplateApplied = function() {
        return I.UseGPPUSNational ? Le.USNATIONAL : A.getRegionRuleType()
    }, Qr.prototype.initGppSDK = function() {
        var e, t = Number.parseInt((null == (t = S.moduleInitializer.GppData) ? void 0 : t.cmpId) || "28");
        return null == (e = this.gppSDKRef) ? void 0 : e.gppCmpApi(t, 1.1)
    }, Qr.prototype.setOrUpdateGppSectionString = function(o, e) {
        var n = this,
            t = this.gppSection.getSectionFieldsValues();
        Object.entries(t).forEach(function(e) {
            var t = e[0],
                e = e[1];
            n.cmpApi.setFieldValue(o, t, e)
        }), this.cmpApi.fireSectionChange(o), this.setGppCookies(this.cmpApi.getGppString(), e)
    }, Qr.prototype.getCurrentSectionName = function(o) {
        var e, t = "",
            n = Object.entries(Be).find(function(e) {
                var t = e[0];
                e[1];
                return t === o
            });
        return t = null != (e = n) && e.length && 1 < n.length ? n[1] : t
    }, Qr.prototype.getCurrentSectionId = function(o) {
        var e, t = 0,
            n = Object.entries(we).find(function(e) {
                var t = e[0];
                e[1];
                return t === o
            });
        return t = null != (e = n) && e.length && 1 < n.length ? n[1] : t
    }, Qr.prototype.updateGppCookies = function(e) {
        var e = this.getCookiesChunk(e),
            t = Object.keys(e).length,
            o = Number(k.readCookieParam(v.OPTANON_CONSENT, _e.ChunkCountParam) || 0);
        this.writeGppCookies(t, e), t < o && this.deleteGppCookies(t + 1, o)
    }, Qr.prototype.deleteAllGppCookies = function() {
        var e = Number(k.readCookieParam(v.OPTANON_CONSENT, _e.ChunkCountParam) || 0);
        this.deleteGppCookies(1, e)
    }, Qr.prototype.getCookiesChunk = function(e) {
        for (var t = {}, o = !1, n = e, r = 1; n.length;) {
            var i, s = void 0;
            n.length > _e.ChunkSize ? s = _e.ChunkSize : (s = n.length, o = 1 === r), o ? (t[_e.Name] = n, n = "") : (i = n.slice(0, s), n = n.slice(s, n.length), t["" + _e.Name + r] = i), r++
        }
        return t
    }, Qr.prototype.writeGppCookies = function(e, t) {
        k.writeCookieParam(v.OPTANON_CONSENT, _e.ChunkCountParam, e);
        for (var o = 0, n = Object.entries(t); o < n.length; o++) {
            var r = n[o],
                i = r[0],
                r = r[1];
            k.setCookie(i, r, I.ReconsentFrequencyDays)
        }
    }, Qr.prototype.getSupportedAPIs = function() {
        return Object.values(Be).filter(function(e, t, o) {
            return o.indexOf(e) === t
        })
    }, Qr.prototype.getApplicableSections = function(e) {
        return [this.getCurrentSectionId(e)]
    };
    var Yr, Xr = Qr;

    function Qr() {
        var e, t = this;
        this.gppSDKRef = null == (e = window.otIabModule) ? void 0 : e.gppSdkRef, this.cmpApi = this.initGppSDK(), this.updateGppConsentString = function() {
            t.cmpApi.getCmpDisplayStatus() === (null == (e = t.gppSDKRef) ? void 0 : e.displayStatus.VISIBLE) && t.cmpApi.setCmpDisplayStatus(null == (e = t.gppSDKRef) ? void 0 : e.displayStatus.HIDDEN);
            var e = t.getCurrentSectionName(t.gppTemplateApplied);
            t.setOrUpdateGppSectionString(e, !0)
        }
    }
    ei.prototype.ensureConsentId = function(e, t) {
        var o = !1,
            n = !0,
            r = k.readCookieParam(v.OPTANON_CONSENT, xe.CONSENT_ID, !0),
            i = L.dsParams,
            s = (i && i.hasOwnProperty("isAnonymous") && (n = i.isAnonymous), i = k.readCookieParam(v.OPTANON_CONSENT, xe.IDENTIFIER_TYPE, !1), this.updateConsentIntAttributes(n, i)),
            n = s.isAnonymous,
            i = s.idTypeUpdated,
            s = !e && t ? (o = !0, 1) : 0;
        return r ? (e = parseInt(k.readCookieParam(v.OPTANON_CONSENT, xe.INTERACTION_COUNT), 10), isNaN(e) || (s = t ? ++e : e, o = !1)) : (r = b.generateUUID(), k.writeCookieParam(v.OPTANON_CONSENT, xe.CONSENT_ID, r)), k.writeCookieParam(v.OPTANON_CONSENT, xe.INTERACTION_COUNT, s), k.writeCookieParam(v.OPTANON_CONSENT, xe.IS_ANONYMOUS_CONSENT, n ? "1" : "0"), {
            id: r,
            count: s,
            addDfltInt: o,
            identifierType: i,
            isAnonymous: n
        }
    }, ei.prototype.isAuthUsr = function(e) {
        L.consentPreferences ? k.writeCookieParam(v.OPTANON_CONSENT, "iType", "") : k.writeCookieParam(v.OPTANON_CONSENT, "iType", "" + ue[e])
    }, ei.prototype.isBannerClosedByIconOrLink = function() {
        var e = L.bannerCloseSource;
        return e === $.BannerCloseButton || e === $.ContinueWithoutAcceptingButton
    }, ei.prototype.addCrossDeviceAttributes = function(e) {
        L.isV2Stub && (e.syncGroup = L.syncGrpId, A.isIab2orv2Template && !h.isIABCrossConsentEnabled() && (e.tcStringV2 = k.getCookie(v.EU_PUB_CONSENT)), I.UseGoogleVendors) && (e.gacString = k.getCookie(v.ADDITIONAL_CONSENT_STRING))
    }, ei.prototype.addAdvAnalyticsAttributes = function(e, t) {
        var o = C.getGroupById(I.AdvancedAnalyticsCategory);
        o && this.canSendAdvancedAnalytics(e.purposes, o) && (o = window.navigator.userAgent, e.dsDataElements = {
            InteractionType: t,
            Country: L && L.userLocation && /^[a-zA-Z]{2}$/.test(L.userLocation.country) ? L.userLocation.country.toLowerCase() : "",
            UserAgent: o,
            ConsentModel: I.ConsentModel.Name
        })
    }, ei.prototype.canSendConsentReceipt = function(e, t) {
        return e || A.apiSource === ee.UpdateConsent || L.consentInteractionType !== t
    }, ei.prototype.addGppStringAttribute = function(e) {
        I.IsGPPEnabled && Yr.hasGPPSection() && Yr.updateGppConsentString();
        var t = k.getCookie(v.GPP_CONSENT);
        t && (e.gppString = t)
    }, ei.prototype.addConsentStringToPayload = function(e) {
        var t, o;
        null != (t = S.moduleInitializer.TenantFeatures) && t.ConsentStoreConsentStrings && (t = k.getCookie(v.EU_PUB_CONSENT), e.hasOwnProperty("gppString") && e.gppString ? (e.consentString = {
            type: "gpp",
            content: e.gppString
        }, delete e.gppString) : t && (o = A.getRegionRuleType(), e.consentString = {
            type: "IABC" === o ? "tcfcanada" : "IAB2" !== o && "IAB2V2" !== o ? "" : "tcfeu",
            content: t
        }))
    }, ei.prototype.createConsentTxn = function(e, t, o, n, r) {
        void 0 === t && (t = ""), void 0 === o && (o = !1), void 0 === r && (r = !1);
        var i = this.ensureConsentId(e, n = void 0 === n ? !0 : n),
            s = I.ConsentIntegration,
            a = window.navigator.userAgent,
            a = /OneTrustBot/.test(a);
        s.ConsentApi && s.RequestInformation && i.id && !a && (a = S.moduleInitializer, $r.noOptOutToogle = a.TenantFeatures.CookieV2NoOptOut, $r.isCloseByIconOrLink = this.isBannerClosedByIconOrLink(), i = {
            requestInformation: s.RequestInformation,
            identifier: i.id,
            identifierType: i.identifierType,
            customPayload: {
                Interaction: i.count,
                AddDefaultInteraction: i.addDfltInt
            },
            isAnonymous: i.isAnonymous,
            test: a.ScriptType === qe || a.ScriptType === Ue,
            purposes: this.getConsetPurposes(e),
            dsDataElements: {}
        }, this.handleReceiptsWhenSendReceiptIsEnabled(i, r), this.addCrossDeviceAttributes(i), this.addAdvAnalyticsAttributes(i, t), this.addGppStringAttribute(i), this.addConsentStringToPayload(i), !a.MobileSDK && n && i.purposes.length && (r = JSON.stringify(i), a = this.getAuthToken(), this.sendBeaconSupported(e, a) ? (navigator.sendBeacon(s.ConsentApi, r), h.dispatchConsentEvent()) : this.canSendConsentReceipt(o, t) && (L.isV2Stub && t && this.isAuthUsr(t), Vt.ajax({
            url: s.ConsentApi,
            type: "post",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(i),
            sync: e,
            success: function() {
                h.dispatchConsentEvent()
            },
            error: function() {
                h.dispatchConsentEvent()
            },
            token: a
        }))), A.pubDomainData.ConsentIntegrationData = {
            consentApi: s.ConsentApi,
            consentPayload: i
        }), L.consentInteractionType = t
    }, ei.prototype.getAuthToken = function() {
        var e = null;
        return e = I.ConsentIntegration.EnableJWTAuthForKnownUsers && L.dsParams.id && L.dsParams.token ? L.dsParams.token : e
    }, ei.prototype.sendBeaconSupported = function(e, t) {
        return e && navigator.sendBeacon && !t
    }, ei.prototype.handleReceiptsWhenSendReceiptIsEnabled = function(e, t) {
        var o = k.getCookie(v.ALERT_BOX_CLOSED),
            n = k.readCookieParam(v.OPTANON_CONSENT, xe.CONSENT_ID, !0),
            r = k.readCookieParam(v.OPTANON_CONSENT, xe.IDENTIFIER_TYPE, !0),
            n = n === e.identifier && r === e.identifierType;
        t && o && !n && (e.interactionDate = o)
    }, ei.prototype.updateConsentIntAttributes = function(e, t) {
        var o, n = "";
        return !1 !== (null == (o = I.ConsentIntegration) ? void 0 : o.IdentifiedReceiptsAllowed) && L.isV2Stub || (e = !0, n = null == (o = I.ConsentIntegration) ? void 0 : o.DefaultAnonymousIdentifier), (L.isV2Stub || null != (o = I.ConsentIntegration) && o.IdentifiedReceiptsAllowed && !L.isV2Stub) && (e = (o = this.setAnonymityBasedOnKnownUserOrNot(e, t)).isAnonymous, n = o.idTypeUpdated), {
            isAnonymous: e,
            idTypeUpdated: n
        }
    }, ei.prototype.setAnonymityBasedOnKnownUserOrNot = function(e, t) {
        var o, n = "",
            n = null != (o = L.dsParams) && o.id ? (e = !1, null != (o = t) && o.trim().length ? t : null == (o = I.ConsentIntegration) ? void 0 : o.DefaultIdentifier) : (e = !0, null == (t = I.ConsentIntegration) ? void 0 : t.DefaultAnonymousIdentifier);
        return {
            isAnonymous: e,
            idTypeUpdated: n
        }
    }, ei.prototype.getGrpDetails = function(e, o) {
        var n = [];
        return e.forEach(function(e) {
            var e = e.split(":"),
                t = e[0],
                e = "true" === e[1] ? "1" : "0",
                t = $r.getOptanonIdForIabGroup(t, o);
            n.push(t + ":" + e)
        }), n
    }, ei.prototype.getOptanonIdForIabGroup = function(e, t) {
        var o;
        return t === te.Purpose ? o = T.IdPatterns.Pur + e : t === te.SpecialFeature && (o = T.IdPatterns.Spl_Ft + e), o
    }, ei.prototype.getConsetPurposes = function(o) {
        var n = this,
            r = [],
            e = [],
            t = L.oneTrustIABConsent,
            i = t && t.purpose ? this.getGrpDetails(t.purpose, te.Purpose) : [],
            s = t && t.specialFeatures ? this.getGrpDetails(t.specialFeatures, te.SpecialFeature) : [],
            e = F(t.specialPurposes, t.features);
        return F(L.groupsConsent, i, s).forEach(function(e) {
            var e = e.split(":"),
                t = C.getGroupById(e[0]);
            t && t.PurposeId && (e = n.getTransactionType(t, e, o), r.push({
                Id: t.PurposeId,
                TransactionType: e.txnType
            }), n.setVSConsentByGroup(t, e).forEach(function(e) {
                return r.push(e)
            }))
        }), e.forEach(function(e) {
            e.purposeId && r.push({
                Id: e.purposeId,
                TransactionType: He
            })
        }), L.bannerCloseSource = $.Unknown, r
    }, ei.prototype.setVSConsentByGroup = function(e, o) {
        var n = [];
        return L.showVendorService && e.VendorServices && e.VendorServices.forEach(function(e) {
            var t;
            t = o.useOwn ? L.vsConsent.get(e.CustomVendorServiceId) ? Ne : De : o.txnType, n.push({
                Id: e.PurposeId,
                TransactionType: t
            })
        }), n
    }, ei.prototype.getTransactionType = function(e, t, o) {
        var n = {
            txnType: He,
            useOwn: !1
        };
        return e.Status === m.ALWAYS_ACTIVE ? n.txnType = He : e.Status.toLowerCase() === m.ALWAYS_INACTIVE || e.Status === m.INACTIVE && $r.isCloseByIconOrLink || o ? n.txnType = Re : e.Status === m.ACTIVE && $r.isCloseByIconOrLink ? n.txnType = $r.noOptOutToogle ? Fe : Ne : (n.useOwn = !0, n.txnType = this.getTxnType(t[1])), n
    }, ei.prototype.getTxnType = function(e) {
        return "0" === e ? De : Ne
    }, ei.prototype.isPurposeConsentedTo = function(e, t) {
        var o = [Ne, He];
        return e.some(function(e) {
            return e.Id === t.PurposeId && -1 !== o.indexOf(e.TransactionType)
        })
    }, ei.prototype.canSendAdvancedAnalytics = function(t, e) {
        var o = this;
        return "BRANCH" === e.Type || e.Type === T.GroupTypes.Stack ? e.SubGroups.length && e.SubGroups.every(function(e) {
            return o.isPurposeConsentedTo(t, e)
        }) : this.isPurposeConsentedTo(t, e)
    };
    var $r, Zr = ei;

    function ei() {}
    var G, ti = function() {
            this.assets = function() {
                return {
                    name: "otCookiePolicy",
                    html: '<div class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <h5 class="cookies-used-header">Cookies Used</h5>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description"><span\n                            class="ot-mobile-border"></span>These\n                        cookies are used to make sure\n                        visitor page requests are routed to the same server in all browsing sessions.</td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n    <section class="subgroup">\n        <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n        <p class="ot-sdk-cookie-policy-group-desc">description</p>\n        <h6 class="cookies-used-header">Cookies Used</h6>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>\n\x3c!-- New Cookies policy Link--\x3e\n<div id="ot-sdk-cookie-policy-v2" class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title" class="ot-sdk-cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <section class="ot-sdk-subgroup">\n            <ul>\n                <li>\n                    <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n                    <p class="ot-sdk-cookie-policy-group-desc">description</p>\n                </li>\n            </ul>\n        </section>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="ot-table-header ot-host">Host</th>\n                    <th scope="col" class="ot-table-header ot-host-description">Host Description</th>\n                    <th scope="col" class="ot-table-header ot-cookies">Cookies</th>\n                    <th scope="col" class="ot-table-header ot-cookies-type">Type</th>\n                    <th scope="col" class="ot-table-header ot-life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="ot-host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="ot-host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="ot-cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-td-content">ARRAffinity</span>\n                    </td>\n                    <td class="ot-cookies-type" data-label="Type">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-type-td-content">1st Party</span>\n                    </td>\n                    <td class="ot-life-span-td" data-label="Life Span">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-life-span-td-content">100 days</span>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>',
                    css: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-right:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:left}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;left:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-left:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;left:6px;width:40%;padding-right:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;left:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-right:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;left:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}",
                    cssRTL: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-left:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:right}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;right:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-right:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;right:6px;width:40%;padding-left:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;right:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-left:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;right:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}"
                }
            }
        },
        oi = "opt-out",
        ni = (ri.prototype.initializeFeaturesAndSpecialPurposes = function() {
            var t = this;
            L.oneTrustIABConsent.features = [], L.oneTrustIABConsent.specialPurposes = [], I.Groups.forEach(function(e) {
                t.checkAndPopulateFeatAndSplPur(e)
            })
        }, ri.prototype.checkAndPopulateFeatAndSplPur = function(e) {
            var t, o = this,
                n = T.GroupTypes;
            e.Type !== n.Ft && e.Type !== n.Spl_Pur || ((t = {}).groupId = e.OptanonGroupId, t.purposeId = e.PurposeId, t.value = !0, (e.Type === n.Ft ? L.oneTrustIABConsent.features : L.oneTrustIABConsent.specialPurposes).push(t)), e.SubGroups && e.SubGroups.forEach(function(e) {
                o.checkAndPopulateFeatAndSplPur(e)
            })
        }, ri.prototype.initGrpsAndHosts = function() {
            this.initializeGroupData(A.consentableGrps), I.showCookieList && y.isOptOutEnabled() ? this.initializeHostData(A.consentableGrps) : (L.hostsConsent = [], ro.writeHstParam(v.OPTANON_CONSENT))
        }, ri.prototype.ensureHtmlGroupDataInitialised = function() {
            var e, t, o, n;
            this.initGrpsAndHosts(), L.showGeneralVendors && (po.populateGenVendorLists(), po.initGenVendorConsent()), I.IsIabEnabled && (this.initializeIABData(), this.initializeFeaturesAndSpecialPurposes()), L.vsIsActiveAndOptOut && this.initializeVendorsService(), h.setOrUpdate3rdPartyIABConsentFlag(), h.setGeolocationInCookies(), I.IsConsentLoggingEnabled && (e = window.OneTrust.dataSubjectParams || {}, t = k.readCookieParam(v.OPTANON_CONSENT, "iType"), o = "", n = !1, L.isV2Stub && e.id && e.token && (t || A.forceCreateTrxLocalConsentIsGreater) && (n = !0, o = ue[t]), $r.createConsentTxn(!1, o, !1, n))
        }, ri.prototype.initializeVendorsService = function() {
            var o = h.isAlertBoxClosedAndValid(),
                e = k.readCookieParam(v.OPTANON_CONSENT, lo),
                n = b.strToMap(e);
            L.getVendorsInDomain().forEach(function(e, t) {
                n.has(t) || (e = !o && C.checkIsActiveByDefault(e.groupRef), n.set(t, e))
            }), L.vsConsent = n
        }, ri.prototype.initializeGroupData = function(e) {
            var t;
            k.readCookieParam(v.OPTANON_CONSENT, io) ? (Co.synchroniseCookieGroupData(e), t = k.readCookieParam(v.OPTANON_CONSENT, io), L.groupsConsent = b.strToArr(t), L.gpcConsentTxn && (I.IsConsentLoggingEnabled && $r.createConsentTxn(!1, "GPC value changed", !1, !0), L.gpcConsentTxn = !1, g.setAlertBoxClosed(!0))) : (L.groupsConsent = [], e.forEach(function(e) {
                L.groupsConsent.push("" + e.CustomGroupId + (C.checkIsActiveByDefault(e) && e.HasConsentOptOut ? ":1" : ":0"))
            }), I.IsConsentLoggingEnabled && window.addEventListener("beforeunload", this.consentDefaulCall))
        }, ri.prototype.initializeHostData = function(e) {
            var t, r;
            k.readCookieParam(v.OPTANON_CONSENT, "hosts") ? (Co.synchroniseCookieHostData(), t = k.readCookieParam(v.OPTANON_CONSENT, "hosts"), L.hostsConsent = b.strToArr(t), e.forEach(function(e) {
                C.isAlwaysActiveGroup(e) && e.Hosts.length && e.Hosts.forEach(function(e) {
                    L.oneTrustAlwaysActiveHosts.push(e.HostId)
                })
            })) : (L.hostsConsent = [], r = {}, e.forEach(function(e) {
                var o = C.isAlwaysActiveGroup(e),
                    n = L.syncRequired ? Co.groupHasConsent(e) : C.checkIsActiveByDefault(e);
                e.Hosts.length && e.Hosts.forEach(function(e) {
                    var t;
                    r[e.HostId] ? Co.updateHostStatus(e, n) : (r[e.HostId] = !0, o && L.oneTrustAlwaysActiveHosts.push(e.HostId), t = Co.isHostPartOfAlwaysActiveGroup(e.HostId), L.hostsConsent.push(e.HostId + (t || n ? ":1" : ":0")))
                })
            }))
        }, ri.prototype.consentDefaulCall = function() {
            var e = parseInt(k.readCookieParam(v.OPTANON_CONSENT, xe.INTERACTION_COUNT), 10);
            !isNaN(e) && 0 !== e || (g.triggerGoogleAnalyticsEvent(vo, "Click", "No interaction"), I.IsConsentLoggingEnabled && $r.createConsentTxn(!0), window.removeEventListener("beforeunload", G.consentDefaulCall))
        }, ri.prototype.fetchAssets = function(s) {
            return void 0 === s && (s = null), u(this, void 0, void 0, function() {
                var t, o, n, r, i;
                return p(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = S.moduleInitializer, i = h.isAlertBoxClosedAndValid(), o = !!s, i = G.isFetchBanner(t.IsSuppressBanner, i), n = G.cookieSettingBtnPresent(), n = A.isIab2orv2Template ? I.PCShowPersistentCookiesHoverButton && (!I.PCenterDynamicRenderingEnable || I.PCenterDynamicRenderingEnable && !n) : I.PCShowPersistentCookiesHoverButton, r = "true" === L.urlParams.get(st), L.hideBanner = r, [4, Promise.all([!i || I.NoBanner || r ? Promise.resolve(null) : xt.getBannerContent(o, s), !t.IsSuppressPC || L.isPCVisible ? xt.getPcContent() : Promise.resolve(null), n ? xt.getCSBtnContent() : Promise.resolve(null), xt.getCommonStyles()])];
                        case 1:
                            return i = e.sent(), r = i[0], o = i[1], t = i[2], n = i[3], G.fetchContent(r, o, t, n), G.setCookieListGroupData(), [2]
                    }
                })
            })
        }, ri.prototype.fetchContent = function(e, t, o, n) {
            var r;
            e && (r = e.html, S.fp.CookieV2SSR || (r = atob(e.html)), this.bannerGroup = {
                name: e.name,
                html: r,
                css: e.css
            }), t && (this.preferenceCenterGroup = {
                name: t.name,
                html: atob(t.html),
                css: t.css
            }, S.isV2Template = I.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name)), o && (this.csBtnGroup = {
                name: "CookieSettingsButton",
                html: atob(o.html),
                css: o.css
            }), n && (this.commonStyles = n)
        }, ri.prototype.cookieSettingBtnPresent = function() {
            return _("#ot-sdk-btn").length || _(".ot-sdk-show-settings").length || _(".optanon-show-settings").length
        }, ri.prototype.isFetchBanner = function(e, t) {
            return !e || I.ShowAlertNotice && !t && e && !_("#onetrust-banner-sdk").length
        }, ri.prototype.setCookieListGroupData = function() {
            var e;
            S.fp.CookieV2TrackingTechnologies || (e = (new ti).assets(), G.cookieListGroup = {
                name: e.name,
                html: e.html,
                css: I.useRTL ? e.cssRTL : e.css
            })
        }, ri.prototype.initializeIabPurposeConsentOnReload = function() {
            var t = this;
            A.consentableIabGrps.forEach(function(e) {
                t.setIABConsent(e, !1), e.IsLegIntToggle = !0, t.setIABConsent(e, !1)
            })
        }, ri.prototype.initializeIABData = function(o, n, r) {
            var i = this,
                e = (void 0 === o && (o = !1), void 0 === n && (n = !1), void 0 === r && (r = !1), L.oneTrustIABConsent),
                t = (e.purpose = [], e.vendors = [], e.legIntVendors = [], e.specialFeatures = [], e.legimateInterest = [], L.addtlVendors),
                s = I.VendorConsentModel === oi;
            t.vendorConsent = [], !e.IABCookieValue || o || n || h.reconsentRequired() ? (A.consentableIabGrps.forEach(function(e) {
                var t;
                n && !r ? i.setIABConsent(e, C.isAlwaysActiveGroup(e)) : r ? e.HasConsentOptOut && i.setIABConsent(e, !1) : (t = o && e.HasConsentOptOut, i.setIABConsent(e, t), e.Type === T.GroupTypes.Pur && (e.IsLegIntToggle = !0, i.setIABConsent(e, e.HasLegIntOptOut)))
            }), I.IsIabEnabled && r && (L.oneTrustIABConsent.legimateInterest = L.vendors.selectedLegInt.slice()), t = r ? s : o || !n && s, h.setIABVendor(t, r), !h.reconsentRequired() || o || n || h.resetTCModel()) : (this.initializeIabPurposeConsentOnReload(), Zt.populateGoogleConsent(), Zt.populateVendorAndPurposeFromCookieData())
        }, ri.prototype.canSoftOptInInsertForGroup = function(e) {
            var e = C.getGroupById(e);
            if (e) return e = e && !e.Parent ? e : C.getParentGroup(e.Parent), "inactive landingpage" !== C.getGrpStatus(e).toLowerCase() || !an.isLandingPage()
        }, ri.prototype.setIABConsent = function(e, t) {
            e.Type === T.GroupTypes.Spl_Ft ? this.setIabSpeciFeatureConsent(e, t) : e.IsLegIntToggle ? (this.setIabLegIntConsent(e, t), e.IsLegIntToggle = !1) : this.setIabPurposeConsent(e, t)
        }, ri.prototype.setIabPurposeConsent = function(o, n) {
            var r = !1;
            L.oneTrustIABConsent.purpose = L.oneTrustIABConsent.purpose.map(function(e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
            }), r || L.oneTrustIABConsent.purpose.push(o.IabGrpId + ":" + n)
        }, ri.prototype.setIabLegIntConsent = function(o, n) {
            var r = !1;
            L.oneTrustIABConsent.legimateInterest = L.oneTrustIABConsent.legimateInterest.map(function(e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
            }), r || L.oneTrustIABConsent.legimateInterest.push(o.IabGrpId + ":" + n)
        }, ri.prototype.setIabSpeciFeatureConsent = function(o, n) {
            var r = !1;
            L.oneTrustIABConsent.specialFeatures = L.oneTrustIABConsent.specialFeatures.map(function(e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
            }), r || L.oneTrustIABConsent.specialFeatures.push(o.IabGrpId + ":" + n)
        }, ri);

    function ri() {}
    a.prototype.getSearchQuery = function(e) {
        var t = this,
            e = e.trim().split(/\s+/g);
        return new RegExp(e.map(function(e) {
            return t.escapeRegExp(e)
        }).join("|") + "(.+)?", "gi")
    }, a.prototype.escapeRegExp = function(e) {
        return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
    }, a.prototype.setGlobalFilteredList = function(e) {
        return L.currentGlobalFilteredList = e
    }, a.prototype.vendorHasPurpose = function(e, t) {
        var o = !1,
            n = parseInt(A.iabGrpIdMap[t]);
        return -1 < t.indexOf(T.IdPatterns.Ft) ? (e.features || []).forEach(function(e) {
            e.featureId === n && (o = !0)
        }) : -1 < t.indexOf(T.IdPatterns.Spl_Ft) ? e.specialFeatures.forEach(function(e) {
            e.featureId === n && (o = !0)
        }) : -1 < t.indexOf(T.IdPatterns.Spl_Pur) ? (e.specialPurposes || []).forEach(function(e) {
            e.purposeId === n && (o = !0)
        }) : (e.purposes.forEach(function(e) {
            e.purposeId === n && (o = !0)
        }), e.legIntPurposes.forEach(function(e) {
            e.purposeId === n && (o = !0)
        })), o
    }, a.prototype.filterList = function(t, e, o) {
        var n, r, i = o && o.length;
        return "" !== t || i ? (i && (i = _("#onetrust-pc-sdk " + P.P_Fltr_Options + " input").el.length, r = !(n = []), i !== o.length ? e.forEach(function(t) {
            r = !0, t.vendorName && o.forEach(function(e) {
                x.vendorHasPurpose(t, e) && n.push(t)
            })
        }) : n = e, r && (n = n.filter(function(e, t, o) {
            return o.indexOf(e) === t
        })), this.setGlobalFilteredList(n)), "" === t ? L.currentGlobalFilteredList : L.currentGlobalFilteredList.filter(function(e) {
            if (e.vendorName) return e.vendorName.toLowerCase().includes(t.toLowerCase())
        })) : this.setGlobalFilteredList(e)
    }, a.prototype.loadVendorList = function(e, t) {
        void 0 === e && (e = "");
        var o = L.vendors,
            o = (L.currentGlobalFilteredList = o.list, e ? (o.searchParam = e, L.filterByIABCategories = [], hn.updateFilterSelection(!1)) : o.searchParam !== e ? o.searchParam = "" : t = L.filterByIABCategories, this.filterList(o.searchParam, o.list, t));
        _("#onetrust-pc-sdk " + P.P_Vendor_Content).el[0].scrollTop = 0, L.addtlVendorsList && 0 < Object.keys(L.addtlVendorsList).length && (this.hasGoogleVendors = !0), this.initVendorsData(e, o)
    }, a.prototype.searchVendors = function(e, t, o, n) {
        if (n) {
            var r, i, s = this.getSearchQuery(n),
                a = 0;
            for (r in t) r && (i = o === fe.GoogleVendor ? r : t[r].VendorCustomId, i = _("" + e.vendorAccBtn + i).el[0].parentElement, s.lastIndex = 0, s.test(t[r][e.name]) ? (d(i, this._displayNull, !0), a++) : d(i, "display: none;", !0));
            0 === a ? (_(e.accId).hide(), o === fe.GoogleVendor ? this.hasGoogleVendors = !1 : this.hasGenVendors = !1) : (o === fe.GoogleVendor ? this.hasGoogleVendors = !0 : this.hasGenVendors = !0, _(e.accId).show()), this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, n)
        } else
            for (var l = _(" " + e.venListId + ' li[style^="display: none"]').el, c = 0; c < l.length; c++) d(l[c], this._displayNull, !0);
        n = _("#onetrust-pc-sdk " + e.selectAllEvntHndlr).el[0];
        document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " > input[checked]") ? b.setCheckedAttribute("", n, !0) : b.setCheckedAttribute("", n, !1), document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " > input:not([checked])") ? n.parentElement.classList.add("line-through") : n.parentElement.classList.remove("line-through")
    }, a.prototype.initGoogleVendors = function() {
        this.populateAddtlVendors(L.addtlVendorsList), this.venAdtlSelAllTglEvent()
    }, a.prototype.initGenVendors = function() {
        this.populateGeneralVendors(), I.GenVenOptOut && I.GeneralVendors && I.GeneralVendors.length && this.genVenSelectAllTglEvent()
    }, a.prototype.resetAddtlVendors = function() {
        x.searchVendors(x.googleSearchSelectors, L.addtlVendorsList, fe.GoogleVendor), this.showConsentHeader()
    }, a.prototype.venAdtlSelAllTglEvent = function() {
        x.selectAllEventHandler({
            vendorsList: '#ot-addtl-venlst li:not([style^="display: none"]) .ot-ven-adtlctgl input',
            selAllCntr: "#onetrust-pc-sdk #ot-selall-adtlvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-adtlven-handler"
        })
    }, a.prototype.genVenSelectAllTglEvent = function() {
        var e = {
            vendorsList: P.P_Gven_List + ' li:not([style^="display: none"]) .ot-ven-gvctgl input',
            selAllCntr: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-gnven-handler"
        };
        x.selectAllEventHandler(e)
    }, a.prototype.selectAllEventHandler = function(e) {
        for (var t = _(e.vendorsList).el, o = _(e.selAllCntr).el[0], n = _(e.selAllChkbox).el[0], r = !0, i = 0; i < t.length; i++) {
            if (!t[i].checked) {
                r = !1;
                break
            }
            r = !0
        }
        o && (r ? o.classList.remove("line-through") : o.classList.add("line-through")), n.checked = !0;
        for (var s = 0; s < t.length && !t[s].checked; s++) s !== t.length - 1 || t[s].checked || (n.checked = !1);
        b.setCheckedAttribute("", n, n.checked)
    }, a.prototype.vendorLegIntToggleEvent = function() {
        for (var e = _(P.P_Vendor_Container + ' li:not([style^="display: none"]) .' + P.P_Ven_Ltgl + " input").el, t = _("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Leg_El).el[0], o = _("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0], n = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var i = 0; i < e.length && !e[i].checked; i++) i !== e.length - 1 || e[i].checked || (o.checked = !1);
        b.setCheckedAttribute("", o, o.checked)
    }, a.prototype.vendorsListEvent = function() {
        for (var e = _(P.P_Vendor_Container + ' li:not([style^="display: none"]) .' + P.P_Ven_Ctgl + " input").el, t = _("#onetrust-pc-sdk #" + P.P_Sel_All_Vendor_Consent_El).el[0], o = _("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0], n = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var i = 0; i < e.length && !e[i].checked; i++) i !== e.length - 1 || e[i].checked || (o.checked = !1);
        b.setCheckedAttribute("", o, o.checked)
    }, a.prototype.showEmptyResults = function(e, t, o) {
        void 0 === o && (o = !1);
        var n = _("#onetrust-pc-sdk #no-results");
        e ? this.setNoResultsContent(t, o) : (_("#onetrust-pc-sdk " + P.P_Vendor_Content).removeClass("no-results"), n.length && n.remove())
    }, a.prototype.playSearchStatus = function(e) {
        var t = e ? document.querySelectorAll(P.P_Host_Cntr + " > li") : document.querySelectorAll(P.P_Vendor_Container + ' li:not([style$="none;"]),' + P.P_Gven_List + ' li:not([style$="none;"])'),
            o = t.length,
            n = _('#onetrust-pc-sdk [role="status"]');
        o ? n.text(t.length + " " + (e ? "host" : "vendor") + (1 < o ? "s" : "") + " returned.") : n.el[0].textContent = ""
    }, a.prototype.setNoResultsContent = function(e, t) {
        void 0 === t && (t = !1);
        var o, n, r, i = _("#onetrust-pc-sdk #no-results").el[0];
        if (!i) return t = x.getNoResultsFound(t), o = document.createElement("div"), n = document.createElement("p"), t = document.createTextNode(t), r = document.createElement("span"), o.id = "no-results", r.id = "user-text", r.innerText = e, n.appendChild(r), n.appendChild(t), o.appendChild(n), _("#onetrust-pc-sdk " + P.P_Vendor_Content).addClass("no-results"), _("#vendor-search-handler").el[0].setAttribute("aria-describedby", o.id), _("#onetrust-pc-sdk " + P.P_Vendor_Content).append(o);
        i.querySelector("span").innerText = e
    }, a.prototype.searchHostList = function(e) {
        var t = {},
            o = [];
        L.showTrackingTech ? (t = L.currentTrackingTech, o = (t = e ? x.getFilteredAdditionaTechtData(e, t) : t).Cookies) : (o = L.currentGlobalFilteredList, e && (o = this.searchList(e, o))), this.initHostData({
            searchString: e,
            cookiesList: o,
            addTechData: t
        })
    }, a.prototype.searchList = function(e, t) {
        var o = this.getSearchQuery(e);
        return t.filter(function(e) {
            return o.lastIndex = 0, o.test(e.DisplayName || e.HostName)
        })
    }, a.prototype.setListSearchValues = function(e) {
        var t = I.PCenterVendorSearchAriaLabel,
            o = I.PCenterVendorListSearch,
            n = I.PCenterVendorsListText,
            e = (e === Ie.cookies && (t = I.PCenterCookieSearchAriaLabel, o = I.PCenterCookieListSearch, n = I.PCenterCookiesListText), L.cookieListType !== ge.HostAndGenVen && L.cookieListType !== ge.Host || !L.showTrackingTech || (n = I.AdditionalTechnologiesConfig.PCTrackingTechTitle), document.querySelector("#onetrust-pc-sdk " + P.P_Vendor_Title).innerText = n, _("#onetrust-pc-sdk " + P.P_Vendor_Search_Input));
        e.el[0].placeholder = o, e.attr("aria-label", t)
    }, a.prototype.initHostData = function(e) {
        var t = e.searchString,
            o = e.cookiesList,
            e = e.addTechData,
            n = (L.optanonHostList = o, !1),
            r = (this.setBackBtnTxt(), _(P.P_Vendor_List + " #select-all-text-container p").html(I.PCenterAllowAllConsentText), x.getHostParentContainer()),
            i = o && 0 === o.length,
            s = (L.showTrackingTech && (i = 0 === e.LocalStorages.length && 0 === e.SessionStorages.length && (0 === e.Cookies.length || 0 === e.Cookies[0].Cookies.length)), L.cookieListType === ge.Host);
        this.showEmptyResults(i, t, s), this.setHostListSearchValues(), _("#filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, I.PCenterCookieListFilterAria);
        _("#filter-btn-handler title").html(I.PCenterCookieListFilterAria), S.isV2Template && _("#ot-sel-blk span:first-child").html(I.PCenterAllowAllConsentText || I.ConsentText);
        for (var a = document.createDocumentFragment(), l = 0; l < o.length; l++) {
            var c = L.hosts.hostTemplate.cloneNode(!0),
                d = o[l].DisplayName || o[l].HostName;
            this.createHostAccordions(d, c, l), n = this.createHostCheckboxes(d, o, l, c, n), this.populateHostDataIntoDOMElements(c, o, d, l, a)
        }
        x.setCookiesInsideHostContainer(r, a, e);
        i = 1 === o.length && o[0].HostName === I.PCFirstPartyCookieListText;
        if (y.isOptOutEnabled() && !i) {
            b.setDisabledAttribute("#onetrust-pc-sdk #select-all-hosts-groups-handler", null, !n);
            for (var u = _("#onetrust-pc-sdk " + P.P_Host_Cntr + " .ot-host-tgl input").el, p = 0; p < u.length; p++) u[p].addEventListener("click", this.hostsListEvent);
            _("#onetrust-pc-sdk " + P.P_Select_Cntr).removeClass("ot-hide"), this.hostsListEvent()
        } else _("#onetrust-pc-sdk " + P.P_Select_Cntr).addClass("ot-hide")
    }, a.prototype.setCookiesInsideHostContainer = function(e, t, o) {
        var n, r;
        L.showTrackingTech && o ? 0 < (o = x.getAdditionalTechnologiesHtml(o)).children.length && ((n = o.querySelector("." + this.TECH_COOKIES_SELECTOR + " .ot-acc-txt")) && ((r = e.querySelector("ul" + P.P_Host_Cntr)).appendChild(t), n.appendChild(r)), e.appendChild(o)) : e.appendChild(t)
    }, a.prototype.getHostParentContainer = function() {
        var e = null;
        return L.showTrackingTech ? (e = document.querySelector("#onetrust-pc-sdk " + P.P_Vendor_Content + " .ot-sdk-column"), x.removeTrackingTechAccorions()) : (e = document.querySelector("#onetrust-pc-sdk " + P.P_Vendor_Content + " ul" + P.P_Host_Cntr)).innerHTML = "", e
    }, a.prototype.removeTrackingTechAccorions = function() {
        var e = document.querySelector("#onetrust-pc-sdk " + P.P_Vendor_Content + " .ot-sdk-column"),
            t = e.querySelector("." + this.TECH_COOKIES_SELECTOR + " ul" + P.P_Host_Cntr);
        if (t ? (t.innerHTML = "", e.appendChild(t)) : (t = e.querySelector("ul" + P.P_Host_Cntr)).innerHTML = "", e)
            for (var o = e.querySelectorAll(".ot-add-tech"), n = o.length - 1; 0 <= n; n--) {
                var r = o.item(n);
                e.removeChild(r)
            }
    }, a.prototype.setHostListSearchValues = function() {
        var e = A.pcName;
        I.GeneralVendorsEnabled && (S.isV2Template || e !== it) && this.setListSearchValues(Ie.vendors), I.GeneralVendorsEnabled || !S.isV2Template && e === it || this.setListSearchValues(Ie.cookies)
    }, a.prototype.createHostAccordions = function(e, t, o) {
        var n = t.querySelector("." + P.P_Host_Bx),
            e = (n && b.setHtmlAttributes(n, {
                id: "host-" + o,
                name: "host-" + o,
                "aria-label": e + " " + I.PCViewCookiesText,
                "aria-controls": "ot-host-acc-txt-" + o
            }), t.querySelector(P.P_Acc_Txt));
        e && b.setHtmlAttributes(e, {
            id: "ot-host-acc-txt-" + o,
            role: "region",
            "aria-labelledby": n.id
        })
    }, a.prototype.createHostCheckboxes = function(e, t, o, n, r) {
        var i = y.isOptOutEnabled(),
            s = S.isV2Template,
            a = A.pcName;
        return !i || t[o].isFirstParty ? (i = n.querySelector(".ot-host-tgl")) && i.parentElement.removeChild(i) : (i = void 0, s ? ((i = E.chkboxEl.cloneNode(!0)).classList.add("ot-host-tgl"), i.querySelector("input").classList.add("host-checkbox-handler"), a === it ? n.querySelector(P.P_Host_Hdr).insertAdjacentElement("beforebegin", i) : n.querySelector(P.P_Tgl_Cntr).insertAdjacentElement("beforeend", i)) : i = n.querySelector(".ot-host-tgl"), b.setHtmlAttributes(i.querySelector("input"), {
            id: "ot-host-chkbox-" + o,
            "aria-label": e,
            hostId: t[o].HostId,
            ckType: t[o].Type
        }), i.querySelector("label").setAttribute("for", "ot-host-chkbox-" + o), (t[o].Type === he.GenVendor ? L.genVendorsConsent[t[o].HostId] : -1 !== L.hostsConsent.indexOf(t[o].HostId + ":1")) ? (b.setCheckedAttribute(null, i.querySelector("input"), !0), t[o].isActive ? b.setDisabledAttribute(null, i.querySelector("input"), !0) : r = r || !0) : (r = !0, b.setCheckedAttribute(null, i.querySelector("input"), !1)), i.querySelector(P.P_Label_Txt).innerText = e), r
    }, a.prototype.populateHostDataIntoDOMElements = function(t, o, e, n, r) {
        var i, s = this,
            a = S.isV2Template,
            l = A.pcName,
            l = (I.PCAccordionStyle === ae.PlusMinus ? t.querySelector(P.P_Acc_Header).insertAdjacentElement("afterbegin", E.plusMinusEl.cloneNode(!0)) : a && (i = E.arrowEl.cloneNode(!0), l === it ? t.querySelector(P.P_Host_View_Cookies).insertAdjacentElement("afterend", i) : t.querySelector(P.P_Tgl_Cntr).insertAdjacentElement("beforeend", i)), I.AddLinksToCookiepedia && !o[n].isFirstParty && (e = '\n                            <a  class="cookie-label"\n                                href="http://cookiepedia.co.uk/host/' + o[n].HostName + '"\n                                rel="noopener"\n                                target="_blank"\n                            >\n                                ' + e + '&nbsp;<span class="ot-scrn-rdr">' + I.NewWinTxt + "</span>\n                            </a>\n                        "), t.querySelector(P.P_Host_Title).innerHTML = e, t.querySelector(P.P_Host_Desc).innerHTML = o[n].Description, o[n].PrivacyPolicy && I.pcShowCookieHost && t.querySelector(P.P_Host_Desc).insertAdjacentHTML("afterend", '<a href="' + o[n].PrivacyPolicy + '" rel="noopener" target="_blank">' + (a ? I.PCGVenPolicyTxt : I.PCCookiePolicyText) + '&nbsp;<span class="ot-scrn-rdr">' + I.NewWinTxt + "</span></a>"), t.querySelector(P.P_Host_View_Cookies));
        return !L.showGeneralVendors || o[n].Cookies && o[n].Cookies.length ? I.PCViewCookiesText && (l.innerHTML = I.PCViewCookiesText) : (b.removeChild(l), _(t).addClass("ot-hide-acc")), o[n].Description && I.pcShowCookieHost || (i = t.querySelector(P.P_Host_Desc)).parentElement.removeChild(i), _(t.querySelector(P.P_Host_Opt)).html(""), null != (a = o[n].Cookies) && a.forEach(function(e) {
            e = s.getCookieElement(e, o[n]);
            _(t.querySelector(P.P_Host_Opt)).append(e)
        }), r.append(t), e
    }, a.prototype.hostsListEvent = function() {
        for (var e = _("#onetrust-pc-sdk " + P.P_Host_Cntr + " .ot-host-tgl input").el, t = _("#onetrust-pc-sdk #" + P.P_Sel_All_Host_El).el[0], o = _("#onetrust-pc-sdk #select-all-hosts-groups-handler").el[0], n = _("#onetrust-pc-sdk " + P.P_Cnsnt_Header).el[0], r = !0, i = 0; i < e.length; i++) {
            if (!e[i].checked) {
                r = !1;
                break
            }
            r = !0
        }
        r ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var s = 0; s < e.length && !e[s].checked; s++) s !== e.length - 1 || e[s].checked || (o.checked = !1);
        b.setCheckedAttribute("", o, o.checked), o && n && o.setAttribute(this.ARIA_LABEL_ATTRIBUTE, n.textContent + " " + I.PCenterSelectAllVendorsText)
    }, a.prototype.loadHostList = function(e, t) {
        var o = {},
            n = [],
            n = L.showTrackingTech ? (o = x.getAdditionalTechnologiesDataFromGroup(t), (L.currentTrackingTech = o).Cookies) : x.getCombinedCookieList(t);
        L.currentGlobalFilteredList = n, this.initHostData({
            searchString: e,
            cookiesList: n,
            addTechData: o
        })
    }, a.prototype.getCombinedCookieList = function(e) {
        var t, o = [],
            n = [];
        return L.cookieListType !== ge.GenVen && (n = (t = x.getFirstsAndThirdCookisFromGroups(e)).firstPartyCookiesList, o = t.thirdPartyCookiesList, n.length) && o.unshift({
            HostName: I.PCFirstPartyCookieListText,
            DisplayName: I.PCFirstPartyCookieListText,
            HostId: this.FIRST_PARTY_COOKIES_GROUP_NAME,
            isFirstParty: !0,
            Cookies: n,
            Description: ""
        }), L.showGeneralVendors ? (t = this.getFilteredGenVendorsList(e), F(o, this.mapGenVendorListToHostFormat(t))) : o
    }, a.prototype.mapGenVendorListToHostFormat = function(e) {
        return e.map(function(e) {
            return {
                Cookies: e.Cookies,
                DisplayName: e.Name,
                HostName: e.Name,
                HostId: e.VendorCustomId,
                Description: e.Description,
                Type: he.GenVendor,
                PrivacyPolicy: e.PrivacyPolicyUrl,
                isActive: -1 < L.alwaysActiveGenVendors.indexOf(e.VendorCustomId)
            }
        })
    }, a.prototype.mapGenVendorToHostFormat = function(e) {
        return {
            Cookies: e.Cookies,
            DisplayName: e.Name,
            HostName: e.Name,
            HostId: e.VendorCustomId,
            Description: e.Description,
            Type: he.GenVendor
        }
    }, a.prototype.getFilteredGenVendorsList = function(t) {
        var e, o = [],
            n = [];
        return t.length ? (I.Groups.forEach(function(e) {
            F(e.SubGroups, [e]).forEach(function(e) {
                -1 !== t.indexOf(e.CustomGroupId) && e.GeneralVendorsIds && e.GeneralVendorsIds.forEach(function(e) {
                    o.push(e)
                })
            })
        }), e = I.GeneralVendors, o.length ? e.filter(function(e) {
            if (-1 < o.indexOf(e.VendorCustomId)) return e
        }) : n) : I.GeneralVendors
    }, a.prototype.initVendorsData = function(e, t) {
        var o = this,
            n = t,
            t = L.vendors.list;
        if (this.setBackBtnTxt(), _(P.P_Vendor_List + " #select-all-text-container p").html(I.PCenterAllowAllConsentText), x.setConsentLegIntAndHeaderText(), _("#onetrust-pc-sdk #filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, I.PCenterVendorListFilterAria), _("#onetrust-pc-sdk #filter-btn-handler title").html(I.PCenterVendorListFilterAria), this.hasIabVendors = 0 < n.length, this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, e, !1), x.hideOrShowVendorList(n), _("#onetrust-pc-sdk " + P.P_Vendor_Container + " ." + P.P_Ven_Bx).length !== t.length && this.attachVendorsToDOM(), n.length !== t.length) t.forEach(function(e) {
            var t = _(P.P_Vendor_Container + " #IAB" + e.vendorId).el[0].parentElement; - 1 === n.indexOf(e) ? d(t, "display: none;", !0) : d(t, o._displayNull, !0)
        });
        else
            for (var r = _(P.P_Vendor_Container + ' li[style^="display: none"]').el, i = 0; i < r.length; i++) d(r[i], this._displayNull, !0);
        !S.isV2Template && A.pcName === it || this.setListSearchValues(Ie.vendors);
        e = document.querySelector("#vdr-lst-dsc");
        !e && I.PCenterVendorListDescText && ((e = document.createElement("p")).id = "vdr-lst-dsc", _(e).html(I.PCenterVendorListDescText), A.pcName !== it && A.pcName !== ot ? (t = document.querySelector("#onetrust-pc-sdk " + P.P_Vendor_Title_Elm)) && t.insertAdjacentElement("afterend", e) : (t = document.querySelector(P.P_Vendor_Content + " .ot-sdk-row")) && t.insertAdjacentElement("beforebegin", e)), _("#onetrust-pc-sdk " + P.P_Select_Cntr).removeClass("ot-hide"), this.vendorsListEvent(), A.legIntSettings.PAllowLI && this.vendorLegIntToggleEvent()
    }, a.prototype.setConsentLegIntAndHeaderText = function() {
        S.isV2Template && (_("#ot-sel-blk span:first-child").html(I.PCenterAllowAllConsentText || I.ConsentText), _("#ot-sel-blk span:last-child").html(I.LegitInterestText), _("#onetrust-pc-sdk " + P.P_Cnsnt_Header).html(I.PCenterAllowAllConsentText), A.legIntSettings.PAllowLI && !A.legIntSettings.PShowLegIntBtn && _("#onetrust-pc-sdk .ot-sel-all-hdr .ot-li-hdr").html(I.PCenterLegitInterestText), A.legIntSettings.PAllowLI && !A.legIntSettings.PShowLegIntBtn || d(_("#ot-sel-blk span:first-child").el[0], "max-width: 100%;", !0))
    }, a.prototype.hideOrShowVendorList = function(e) {
        0 === e.length ? _("#ot-lst-cnt .ot-acc-cntr").hide() : _("#ot-lst-cnt .ot-acc-cntr").show(), L.showTrackingTech && x.removeTrackingTechAccorions()
    }, a.prototype.updateVendorsDOMToggleStatus = function(e, t) {
        void 0 === t && (t = !1);
        for (var o = _(P.P_Vendor_Container + " " + P.P_Tgl_Cntr).el, n = I.VendorConsentModel === oi, r = 0; r < o.length; r++) {
            var i = o[r].querySelector("." + P.P_Ven_Ctgl + " input"),
                s = o[r].querySelector("." + P.P_Ven_Ltgl + " input");
            t ? (i && b.setCheckedAttribute("", i, n), s && b.setCheckedAttribute("", s, !0)) : (i && b.setCheckedAttribute("", i, e), s && b.setCheckedAttribute("", s, e))
        }
        var a = _("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0],
            a = (a && (a.parentElement.classList.remove("line-through"), b.setCheckedAttribute("", a, !!t || e)), _("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0]);
        a && (a.parentElement.classList.remove("line-through"), b.setCheckedAttribute("", a, t ? n : e)), I.UseGoogleVendors && (t ? this.updateGoogleCheckbox(n) : this.updateGoogleCheckbox(e)), L.showGeneralVendors && I.GenVenOptOut && this.updateGenVenCheckbox(e)
    }, a.prototype.updateGenVenCheckbox = function(e) {
        for (var t = _(P.P_Gven_List + " .ot-ven-gvctgl input").el, o = 0; o < t.length; o++) b.setCheckedAttribute("", t[o], e);
        var n = _("#onetrust-pc-sdk #ot-selall-gnven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"), b.setCheckedAttribute("", n, e))
    }, a.prototype.updateGoogleCheckbox = function(e) {
        for (var t = _("#ot-addtl-venlst .ot-tgl-cntr input").el, o = 0; o < t.length; o++) b.setCheckedAttribute("", t[o], e);
        var n = _("#onetrust-pc-sdk #ot-selall-adtlven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"), b.setCheckedAttribute("", n, e))
    }, a.prototype.updateVendorDisclosure = function(e, t) {
        var r, i, e = _(P.P_Vendor_Container + " #IAB" + e).el[0].parentElement;
        t && t.disclosures && (r = e.querySelector(P.P_Ven_Dets), (e = (i = e.querySelector(P.P_Ven_Disc).cloneNode(!0)).cloneNode(!0)).innerHTML = "<p><b>" + I.PCenterVendorListDisclosure + ": </b></p>", r.insertAdjacentElement("beforeend", e), t.disclosures.forEach(function(e) {
            var t, o = i.cloneNode(!0),
                n = "<p>" + I.PCenterVendorListStorageIdentifier + " </p> <p>" + (e.name || e.identifier) + " </p>";
            e.type && (n += "<p>" + I.PCenterVendorListStorageType + " </p> <p>" + e.type + " </p>"), e.maxAgeSeconds && (t = b.calculateCookieLifespan(e.maxAgeSeconds), n += "<p>" + I.PCenterVendorListLifespan + " </p> <p>" + t + " </p>"), e.domain && (n += "<p>" + I.PCenterVendorListStorageDomain + " </p> <p>" + e.domain + " </p>"), e.purposes && (n += "<p>" + I.PCenterVendorListStoragePurposes + ' </p><div class="disc-pur-cont">', e.purposes.forEach(function(e) {
                e = null == (e = A.iabGroups.purposes[e]) ? void 0 : e.name;
                e && (n += ' <p class="disc-pur">' + e + " </p>")
            }), n += "</div>"), o.innerHTML = n, r.insertAdjacentElement("beforeend", o)
        }), this.updateDomainsUsageInDisclosures(t, i, r))
    }, a.prototype.updateDomainsUsageInDisclosures = function(e, n, r) {
        var t;
        e.domains && e.domains.length && ((t = n.cloneNode(!0)).innerHTML = "<p><b>" + I.PCVLSDomainsUsed + ": </b></p>", r.insertAdjacentElement("beforeend", t), e.domains.forEach(function(e) {
            var t, o = n.cloneNode(!0);
            e.domain && (t = "<p>" + I.PCenterVendorListStorageDomain + " </p> <p>" + e.domain + " </p>"), e.use && (t += "<p>" + I.PCVLSUse + " </p> <p>" + e.use + " </p>"), o.innerHTML = t, r.insertAdjacentElement("beforeend", o)
        }))
    }, a.prototype.addDescriptionElement = function(e, t) {
        var o = document.createElement("p");
        o.innerHTML = t || "", e.parentNode.insertBefore(o, e)
    }, a.prototype.setVdrConsentTglOrChbox = function(e, t, o, n, r, i) {
        var s, a, l = L.vendorsSetting[e],
            t = t.cloneNode(!0);
        l.consent && (t.classList.add(P.P_Ven_Ctgl), l = -1 !== Vt.inArray(e + ":true", L.vendors.selectedVendors), s = t.querySelector("input"), S.isV2Template && (s.classList.add("vendor-checkbox-handler"), a = t.querySelector(this.LABEL_STATUS), I.PCShowConsentLabels ? a.innerHTML = l ? I.PCActiveText : I.PCInactiveText : b.removeChild(a)), b.setCheckedAttribute("", s, l), b.setHtmlAttributes(s, {
            id: P.P_Vendor_CheckBx + "-" + i,
            vendorid: e,
            "aria-label": o
        }), t.querySelector("label").setAttribute("for", P.P_Vendor_CheckBx + "-" + i), t.querySelector(P.P_Label_Txt).textContent = o, A.pcName === it ? I.PCTemplateUpgrade ? n.insertAdjacentElement("beforeend", t) : _(n).append(t) : n.insertBefore(t, r))
    }, a.prototype.setVndrLegIntTglTxt = function(e, t) {
        e = e.querySelector(this.LABEL_STATUS);
        I.PCShowConsentLabels ? e.innerHTML = t ? I.PCActiveText : I.PCInactiveText : b.removeChild(e)
    }, a.prototype.setVdrLegIntTglOrChbx = function(e, t, o, n, r, i, s) {
        var a, l, c = L.vendorsSetting[e],
            o = o.cloneNode(!0);
        c.legInt && !c.specialPurposesOnly && (a = -1 !== Vt.inArray(e + ":true", L.vendors.selectedLegIntVendors), A.legIntSettings.PShowLegIntBtn ? (l = h.generateLegIntButtonElements(a, e, !0), t.querySelector(P.P_Acc_Txt).insertAdjacentHTML("beforeend", l), (l = t.querySelector(".ot-remove-objection-handler")) && d(l, l.getAttribute("data-style"))) : (l = o.querySelector("input"), S.isV2Template && (l.classList.add("vendor-checkbox-handler"), this.setVndrLegIntTglTxt(o, a)), o.classList.add(P.P_Ven_Ltgl), l.classList.remove("vendor-checkbox-handler"), l.classList.add("vendor-leg-checkbox-handler"), b.setCheckedAttribute("", l, a), b.setHtmlAttributes(l, {
            id: P.P_Vendor_LegCheckBx + "-" + r,
            "leg-vendorid": e,
            "aria-label": n
        }), o.querySelector("label").setAttribute("for", P.P_Vendor_LegCheckBx + "-" + r), o.querySelector(P.P_Label_Txt).textContent = n, t.querySelector("." + P.P_Ven_Ctgl) && (i = t.querySelector("." + P.P_Ven_Ctgl)), A.pcName !== it || s.children.length ? s.insertBefore(o, i) : _(s).append(o), c.consent || A.pcName !== it || o.classList.add(P.P_Ven_Ltgl_Only)))
    }, a.prototype.setVndrSplPurSection = function(e, t) {
        var o = this,
            n = e.querySelector(".spl-purpose"),
            e = e.querySelector(".spl-purpose-grp"),
            r = e.cloneNode(!0);
        e.parentElement.removeChild(e), A.isIab2orv2Template && t.specialPurposes.forEach(function(e) {
            _(r.querySelector(o.CONSENT_CATEGORY)).text(e.purposeName), n.insertAdjacentHTML("afterend", r.outerHTML)
        }), 0 === t.specialPurposes.length ? n.parentElement.removeChild(n) : _(n.querySelector("p")).text(I.SpecialPurposesText)
    }, a.prototype.setVndrFtSection = function(e, t) {
        var o = this,
            n = e.querySelector(".vendor-feature"),
            e = e.querySelector(".vendor-feature-group"),
            r = e.cloneNode(!0);
        e.parentElement.removeChild(e), _(n.querySelector("p")).text(I.FeaturesText), t.features.forEach(function(e) {
            _(r.querySelector(o.CONSENT_CATEGORY)).text(e.featureName), n.insertAdjacentHTML("afterend", r.outerHTML)
        }), 0 === t.features.length && n.parentElement.removeChild(n)
    }, a.prototype.setVndrSplFtSection = function(e, t) {
        var o = this,
            n = e.querySelector(".vendor-spl-feature"),
            e = e.querySelector(".vendor-spl-feature-grp"),
            r = e.cloneNode(!0);
        n.parentElement.removeChild(e), A.isIab2orv2Template && t.specialFeatures.forEach(function(e) {
            _(r.querySelector(o.CONSENT_CATEGORY)).text(e.featureName), n.insertAdjacentHTML("afterend", r.outerHTML)
        }), 0 === t.specialFeatures.length ? n.parentElement.removeChild(n) : _(n.querySelector("p")).text(I.SpecialFeaturesText)
    }, a.prototype.setVndrAccTxt = function(e, t) {
        t = t.querySelector(P.P_Acc_Txt);
        t && b.setHtmlAttributes(t, {
            id: "IAB-ACC-TXT" + e,
            "aria-labelledby": "IAB-ACC-TXT" + e,
            role: "region"
        })
    }, a.prototype.setVndrDisclosure = function(e, t, o) {
        t.deviceStorageDisclosureUrl && (b.setHtmlAttributes(o, {
            "disc-vid": e
        }), L.discVendors[e] = {
            isFetched: !1,
            disclosureUrl: t.deviceStorageDisclosureUrl
        })
    }, a.prototype.setVndrListSelectAllChkBoxs = function() {
        var e = _("#onetrust-pc-sdk " + P.P_Sel_All_Vendor_Consent_Handler).el[0],
            e = (e && e.setAttribute(this.ARIA_LABEL_ATTRIBUTE, I.PCenterSelectAllVendorsText + " " + I.LegitInterestText), _("#onetrust-pc-sdk " + P.P_Sel_All_Vendor_Leg_Handler).el[0]);
        e && e.setAttribute(this.ARIA_LABEL_ATTRIBUTE, I.PCenterSelectAllVendorsText + " " + I.ConsentText)
    }, a.prototype.setVndrConsentPurposes = function(e, t, o) {
        var n = this,
            r = e.querySelector(".vendor-consent-group"),
            i = e.querySelector(".vendor-option-purpose"),
            s = r.cloneNode(!0),
            a = e.querySelector(".legitimate-interest"),
            l = !1;
        return r.parentElement.removeChild(r), t.consent && (_(i.querySelector("p")).text(I.ConsentPurposesText), o.purposes.forEach(function(e) {
            _(s.querySelector(n.CONSENT_CATEGORY)).text(e.purposeName);
            e = s.querySelector(".consent-status");
            e && s.removeChild(e), a.insertAdjacentHTML("beforebegin", s.outerHTML), l = !0
        })), t.consent || i.parentElement.removeChild(i), l
    }, a.prototype.getVndrTglCntr = function(e) {
        return S.isV2Template ? E.chkboxEl.cloneNode(!0) : e.querySelector(".ot-checkbox")
    }, a.prototype.attachVendorsToDOM = function() {
        for (var u, p, h = this, g = L.vendors.list, C = L.vendors.vendorTemplate.cloneNode(!0), y = (L.discVendors = {}, S.isV2Template && (u = C.querySelector(".ot-ven-pur").cloneNode(!0), p = C.querySelector(P.P_Ven_Disc).cloneNode(!0), _(C.querySelector(".ot-ven-dets")).html("")), document.createDocumentFragment()), f = this, e = 0; e < g.length; e++) ! function(e) {
            var t, o, n = C.cloneNode(!0),
                r = g[e].vendorId,
                i = g[e].vendorName,
                s = n.querySelector("." + P.P_Ven_Bx),
                a = L.vendorsSetting[r],
                l = (b.setHtmlAttributes(s, {
                    id: "IAB" + r,
                    name: "IAB" + r,
                    "aria-controls": "IAB-ACC-TXT" + r,
                    "aria-label": i
                }), s.nextElementSibling.setAttribute("for", "IAB" + r), n.querySelector(P.P_Ven_Name).innerText = i, f.updateIABLinksDOM(g[e], n), f.getVndrTglCntr(n)),
                c = n.querySelector(P.P_Tgl_Cntr),
                d = (S.isV2Template || l.parentElement.removeChild(l), n.querySelector(P.P_Arrw_Cntr));
            f.setVdrConsentTglOrChbox(r, l, i, c, d, e), f.setVdrLegIntTglOrChbx(r, n, l, i, e, d, c), S.isV2Template && (c.insertAdjacentElement("beforeend", E.arrowEl.cloneNode(!0)), I.PCAccordionStyle !== ae.Caret) && n.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", E.plusMinusEl.cloneNode(!0)), f.setVndrAccTxt(r, n), f.setVndrDisclosure(r, g[e], s), S.isV2Template ? f.populateVendorDetailsHtml(n, u, g[e], p) : (t = n.querySelector(".legitimate-interest"), l = n.querySelector(".legitimate-interest-group"), o = l.cloneNode(!0), p = n.querySelector(P.P_Ven_Disc), i = n.querySelector(P.P_Ven_Dets), d = p.cloneNode(!0), p.parentElement.removeChild(p), f.attachVendorDisclosure(d, g[e]), i.insertAdjacentElement("afterbegin", d), f.setVndrConsentPurposes(n, a, g[e]), c = o.querySelector(".vendor-opt-out-handler"), A.isIab2orv2Template && c.parentElement.removeChild(c), l.parentElement.removeChild(l), a.legInt && (_(t.querySelector("p")).text(I.LegitimateInterestPurposesText), A.legIntSettings.PAllowLI) && A.isIab2orv2Template && g[e].legIntPurposes.forEach(function(e) {
                _(o.querySelector(h.CONSENT_CATEGORY)).text(e.purposeName), t.insertAdjacentHTML("afterend", o.outerHTML)
            }), a.legInt || t.parentElement.removeChild(t), f.setVndrSplPurSection(n, g[e]), f.setVndrFtSection(n, g[e]), f.setVndrSplFtSection(n, g[e]), (r = s.parentElement.querySelector(".vendor-purposes p")).parentElement.removeChild(r)), y.appendChild(n), f.setVndrListSelectAllChkBoxs()
        }(e);
        document.querySelector("#onetrust-pc-sdk " + P.P_Vendor_Container).append(y)
    }, a.prototype.updateIABLinksDOM = function(e, t) {
        var o = e.vendorName,
            n = t.querySelector(P.P_Ven_Link),
            t = t.querySelector(P.P_Ven_Leg_Claim),
            r = A.isTcfV2Template ? e.vendorPrivacyUrl : e.policyUrl;
        b.setHtmlAttributes(n, {
            href: r,
            rel: "noopener",
            target: "_blank"
        }), n.innerHTML = I.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + o + " " + I.NewWinTxt + "</span>", n.insertAdjacentHTML("afterend", "<span class='ot-ext-lnk'></span>"), A.isTcfV2Template && e.legIntClaim && 0 < I.PCIABVendorLegIntClaimText.trim().length ? (b.setHtmlAttributes(t, {
            href: e.legIntClaim,
            rel: "noopener",
            target: "_blank"
        }), t.innerHTML = I.PCIABVendorLegIntClaimText + "&nbsp;<span class='ot-scrn-rdr'>" + o + " " + I.NewWinTxt + "</span>", t.insertAdjacentHTML("afterend", "<span class='ot-ext-lnk'></span>")) : t.remove()
    }, a.prototype.populateVendorDetailsHtml = function(e, t, o, n) {
        var r, i, s, a, l, c, d, u, e = e.querySelector(".ot-ven-dets"),
            p = L.vendorsSetting[o.vendorId],
            n = n.cloneNode(!0);
        this.attachVendorDisclosure(n, o), e.insertAdjacentElement("beforeEnd", n), A.isTcfV2Template && null != (n = o.dataDeclaration) && n.length && (n = t.cloneNode(!0), r = "<h4>" + I.PCVListDataDeclarationText + "</h4>", r += "<ul>", o.dataDeclaration.forEach(function(e) {
            r += "<li><p>" + e.Name + "</p></li>"
        }), r += "</ul>", n.innerHTML = r, e.insertAdjacentElement("beforeEnd", n)), A.isTcfV2Template && null !== (null == (n = o.dataRetention) ? void 0 : n.stdRetention) && void 0 !== (null == (n = o.dataRetention) ? void 0 : n.stdRetention) && (n = t.cloneNode(!0), c = 1 === o.dataRetention.stdRetention ? I.PCenterVendorListLifespanDay : I.PCenterVendorListLifespanDays, s = "<h4>" + I.PCVListDataRetentionText + "</h4>", s += "<li><p>" + I.PCVListStdRetentionText + " (" + o.dataRetention.stdRetention + " " + c + ")</p></li>", n.innerHTML = s, e.insertAdjacentElement("beforeEnd", n)), p.consent && (c = t.cloneNode(!0), i = "<h4>" + I.ConsentPurposesText + "</h4>", i += "<ul>", o.purposes.forEach(function(e) {
            var t;
            i += "<li><p>" + e.purposeName, A.isTcfV2Template && null != (t = o.dataRetention) && t.purposes && o.dataRetention.purposes[e.purposeId] && (e = 1 === (t = o.dataRetention.purposes[e.purposeId].retention) ? I.PCenterVendorListLifespanDay : I.PCenterVendorListLifespanDays, i += " (" + t + " " + e + ")"), i += "</p></li>"
        }), i += "</ul>", c.innerHTML = i, e.insertAdjacentElement("beforeEnd", c)), p.legInt && o.legIntPurposes.length && (s = t.cloneNode(!0), a = "<h4>" + I.LegitimateInterestPurposesText + "</h4>", a += "<ul>", o.legIntPurposes.forEach(function(e) {
            a += "<li><p>" + e.purposeName + "</p></li>"
        }), a += "</ul>", s.innerHTML = a, e.insertAdjacentElement("beforeEnd", s)), A.isIab2orv2Template && o.specialPurposes.length && (n = t.cloneNode(!0), l = "<h4>" + I.SpecialPurposesText + "</h4>", l += "<ul>", o.specialPurposes.forEach(function(e) {
            var t;
            l += "<li><p>" + e.purposeName, A.isTcfV2Template && null != (t = o.dataRetention) && t.specialPurposes && o.dataRetention.specialPurposes[e.purposeId] && (e = 1 === (t = o.dataRetention.specialPurposes[e.purposeId].retention) ? I.PCenterVendorListLifespanDay : I.PCenterVendorListLifespanDays, l += " (" + t + " " + e + ")"), l += "</p></li>"
        }), l += "</ul>", n.innerHTML = l, e.insertAdjacentElement("beforeEnd", n)), o.features.length && (c = t.cloneNode(!0), d = "<h4>" + I.FeaturesText + "</h4>", d += "<ul>", o.features.forEach(function(e) {
            d += "<li><p>" + e.featureName + "</p></li>"
        }), d += "</ul>", c.innerHTML = d, e.insertAdjacentElement("beforeEnd", c)), A.isIab2orv2Template && o.specialFeatures.length && (p = t.cloneNode(!0), u = "<h4>" + I.SpecialFeaturesText + "</h4>", u += "<ul>", o.specialFeatures.forEach(function(e) {
            u += "<li><p>" + e.featureName + "</p></li>"
        }), u += "</ul>", p.innerHTML = u, e.insertAdjacentElement("beforeEnd", p))
    }, a.prototype.InitializeVendorList = function() {
        var e;
        L.vendors.list = L.iabData ? L.iabData.vendors : null, L.vendors.vendorTemplate = _(P.P_Vendor_Container + " li").el[0].cloneNode(!0), _("#onetrust-pc-sdk " + P.P_Vendor_Container).html(""), S.isV2Template || A.pcName !== it || (e = L.vendors.vendorTemplate.querySelectorAll(P.P_Acc_Header), (e = A.legIntSettings.PAllowLI && A.isIab2orv2Template ? e[0] : e[1]).parentElement.removeChild(e))
    }, a.prototype.cancelVendorFilter = function() {
        for (var e = _("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-purposeid"),
                o = 0 <= L.filterByIABCategories.indexOf(o);
            b.setCheckedAttribute(null, e[t], o)
        }
    }, a.prototype.attachVendorDisclosure = function(e, t) {
        var o = "<h4>" + I.PCenterVendorListLifespan + " :</h4><span> " + t.cookieMaxAge + "</span>";
        t.usesNonCookieAccess && (o += "<p>" + I.PCenterVendorListNonCookieUsage + "</p>"), e.innerHTML = o
    }, a.prototype.updateVendorFilterList = function() {
        for (var e = _("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o, n = e[t].getAttribute("data-purposeid");
            e[t].checked && L.filterByIABCategories.indexOf(n) < 0 ? L.filterByIABCategories.push(n) : !e[t].checked && -1 < L.filterByIABCategories.indexOf(n) && (o = L.filterByIABCategories, L.filterByIABCategories.splice(o.indexOf(n), 1))
        }
        return L.filterByIABCategories
    }, a.prototype.saveVendorStatus = function() {
        var e = L.vendors,
            t = L.oneTrustIABConsent,
            t = (t.purpose = e.selectedPurpose.slice(), t.legimateInterest = e.selectedLegInt.slice(), t.vendors = e.selectedVendors.slice(), t.legIntVendors = e.selectedLegIntVendors.slice(), t.specialFeatures = e.selectedSpecialFeatures.slice(), L.addtlVendors);
        t.vendorConsent = Object.keys(t.vendorSelected)
    }, a.prototype.updateIabVariableReference = function() {
        var e = L.oneTrustIABConsent,
            t = L.vendors,
            o = (t.selectedPurpose = e.purpose.slice(), t.selectedLegInt = e.legimateInterest.slice(), t.selectedVendors = e.vendors.slice(), t.selectedLegIntVendors = e.legIntVendors.slice(), t.selectedSpecialFeatures = e.specialFeatures.slice(), L.addtlVendors);
        o.vendorSelected = {}, o.vendorConsent.forEach(function(e) {
            o.vendorSelected[e] = !0
        })
    }, a.prototype.allowAllhandler = function() {
        G.initializeIABData(!0, !1)
    }, a.prototype.rejectAllHandler = function(e) {
        G.initializeIABData(!1, !0, e = void 0 === e ? !1 : e)
    }, a.prototype.populateAddtlVendors = function(e) {
        var t, o, n, r, i, s, a, l = (I.PCAccordionStyle === ae.Caret ? E.arrowEl : E.plusMinusEl).cloneNode(!0),
            c = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
            d = c.cloneNode(!0),
            c = (b.removeChild(d.querySelector("#ot-selall-hostcntr")), b.removeChild(c.querySelector("#ot-selall-vencntr")), b.removeChild(c.querySelector("#ot-selall-licntr")), E.accordionEl.cloneNode(!0)),
            c = (c.classList.add("ot-iab-acc"), c.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", l.cloneNode(!0)), c.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + I.PCIABVendorsText + "</div>"), c.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", d), c.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", _("#ot-ven-lst").el[0]), _("#ot-lst-cnt .ot-sdk-column").append(c), c.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, I.PCIABVendorsText), this.iabAccInit = !0, d.cloneNode(!0)),
            u = (b.removeChild(c.querySelector("#ot-selall-licntr")), c.querySelector(".ot-chkbox").id = "ot-selall-adtlvencntr", c.querySelector("input").id = "ot-selall-adtlven-handler", c.querySelector("label").setAttribute("for", "ot-selall-adtlven-handler"), E.accordionEl.cloneNode(!0)),
            p = (u.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", l.cloneNode(!0)), u.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + I.PCGoogleVendorsText + "</div>"), u.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", c), u.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-addtl-venlst'></ul>"), u.classList.add("ot-adtlv-acc"), u.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, I.PCGoogleVendorsText), L.vendors.vendorTemplate.cloneNode(!0));
        for (t in p.querySelector("button").classList.remove("ot-ven-box"), p.querySelector("button").classList.add("ot-addtl-venbox"), b.removeChild(p.querySelector(".ot-acc-txt")), e) e[t] && (o = p.cloneNode(!0), n = e[t].name, o.querySelector(P.P_Ven_Name).innerText = n, r = o.querySelector("button"), b.setHtmlAttributes(r, {
            id: "Adtl-IAB" + t
        }), b.setHtmlAttributes(o.querySelector(P.P_Ven_Link), {
            href: e[t].policyUrl,
            rel: "noopener",
            target: "_blank"
        }), o.querySelector(P.P_Ven_Link).innerHTML = I.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + n + " " + I.NewWinTxt + "</span>", (r = E.chkboxEl.cloneNode(!0)).classList.remove("ot-ven-ctgl"), r.classList.add("ot-ven-adtlctgl"), i = Boolean(L.addtlVendors.vendorSelected[t]), (s = r.querySelector("input")).classList.add("ot-addtlven-chkbox-handler"), a = r.querySelector(this.LABEL_STATUS), I.PCShowConsentLabels ? a.innerHTML = i ? I.PCActiveText : I.PCInactiveText : b.removeChild(a), b.setCheckedAttribute("", s, i), b.setHtmlAttributes(s, {
            id: "ot-addtlven-chkbox-" + t,
            "addtl-vid": t,
            "aria-label": n
        }), r.querySelector("label").setAttribute("for", "ot-addtlven-chkbox-" + t), r.querySelector(P.P_Label_Txt).textContent = n, a = o.querySelector(P.P_Tgl_Cntr), _(a).append(r), a.insertAdjacentElement("beforeend", E.arrowEl.cloneNode(!0)), I.PCAccordionStyle !== ae.Caret && o.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", E.plusMinusEl.cloneNode(!0)), this.checkIfLegLinkRemove(o), _(u.querySelector("#ot-addtl-venlst")).append(o));
        _("#ot-lst-cnt .ot-sdk-column").append(u), _("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function(e) {
            b.setCheckedAttribute(null, e.target, e.target.checked)
        }), this.showConsentHeader()
    }, a.prototype.populateGeneralVendors = function() {
        var e, t, o, c, d, u, p = this,
            n = I.GeneralVendors,
            r = document.querySelector(".ot-gv-acc"),
            h = !!r;
        n.length ? (this.hasGenVendors = !0, r && _(r).show(), e = (I.PCAccordionStyle === ae.Caret ? E.arrowEl : E.plusMinusEl).cloneNode(!0), this.iabAccInit || this.addIabAccordion(), (t = document.createElement("div")).setAttribute("class", "ot-sel-all-chkbox"), o = E.chkboxEl.cloneNode(!0), o.id = "ot-selall-gnvencntr", o.querySelector("input").id = "ot-selall-gnven-handler", o.querySelector("label").setAttribute("for", "ot-selall-gnven-handler"), _(t).append(o), c = E.accordionEl.cloneNode(!0), c.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", e.cloneNode(!0)), c.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + I.PCenterGeneralVendorsText + "</div>"), I.GenVenOptOut && c.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t), c.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-gn-venlst'></ul>"), c.classList.add("ot-gv-acc"), c.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, I.PCenterGeneralVendorsText), d = L.vendors.vendorTemplate.cloneNode(!0), d.querySelector("button").classList.remove("ot-ven-box"), d.querySelector("button").classList.add("ot-gv-venbox"), _(d.querySelector(".ot-acc-txt")).html('<ul class="ot-host-opt"></ul>'), h && _("" + P.P_Gven_List).html(""), u = !0, n.forEach(function(e) {
            var t, o, n = p.mapGenVendorToHostFormat(e),
                r = d.cloneNode(!0),
                i = e.VendorCustomId,
                s = e.Name,
                a = r.querySelector(P.P_Ven_Link),
                l = (r.querySelector(P.P_Ven_Name).innerText = s, r.querySelector("button"));
            b.setHtmlAttributes(l, {
                id: "Gn-" + i
            }), e.PrivacyPolicyUrl ? (b.setHtmlAttributes(a, {
                href: e.PrivacyPolicyUrl,
                rel: "noopener",
                target: "_blank"
            }), a.innerHTML = I.PCGVenPolicyTxt + "&nbsp;<span class='ot-scrn-rdr'>" + s + " " + I.NewWinTxt + "</span>") : a.classList.add("ot-hide"), p.addDescriptionElement(a, e.Description), I.GenVenOptOut && ((l = E.chkboxEl.cloneNode(!0)).classList.remove("ot-ven-ctgl"), l.classList.add("ot-ven-gvctgl"), a = Boolean(L.genVendorsConsent[i]), (t = l.querySelector("input")).classList.add("ot-gnven-chkbox-handler"), o = l.querySelector(p.LABEL_STATUS), I.PCShowConsentLabels ? o.innerHTML = a ? I.PCActiveText : I.PCInactiveText : b.removeChild(o), b.setCheckedAttribute("", t, a), b.setHtmlAttributes(t, {
                id: "ot-gnven-chkbox-" + i,
                "gn-vid": i,
                "aria-label": s
            }), po.isGenVenPartOfAlwaysActiveGroup(i) ? b.setDisabledAttribute(null, t, !0) : u = !1, l.querySelector("label").setAttribute("for", "ot-gnven-chkbox-" + i), l.querySelector(P.P_Label_Txt).textContent = s, o = r.querySelector(P.P_Tgl_Cntr), _(o).append(l), o.insertAdjacentElement("beforeend", E.arrowEl.cloneNode(!0))), I.PCAccordionStyle !== ae.Caret && r.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", E.plusMinusEl.cloneNode(!0)), e.Cookies.length || _(r).addClass("ot-hide-acc"), e.Cookies.forEach(function(e) {
                e = p.getCookieElement(e, n);
                _(r.querySelector(".ot-host-opt")).append(e)
            }), p.checkIfLegLinkRemove(r), _(h ? "" + P.P_Gven_List : c.querySelector("" + P.P_Gven_List)).append(r)
        }), h || _("#ot-lst-cnt .ot-sdk-column").append(c), _("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function(e) {
            b.setCheckedAttribute(null, e.target, e.target.checked)
        }), this.showConsentHeader(), u && b.setDisabledAttribute("#ot-selall-gnven-handler", null, !0)) : (this.hasGenVendors = !1, r && _(r).hide())
    }, a.prototype.addIabAccordion = function() {
        var e = (I.PCAccordionStyle === ae.Caret ? E.arrowEl : E.plusMinusEl).cloneNode(!0),
            t = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
            o = t.cloneNode(!0),
            t = (b.removeChild(o.querySelector("#ot-selall-hostcntr")), b.removeChild(t.querySelector("#ot-selall-vencntr")), b.removeChild(t.querySelector("#ot-selall-licntr")), E.accordionEl.cloneNode(!0));
        t.classList.add("ot-iab-acc"), t.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", e.cloneNode(!0)), t.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + I.PCIABVendorsText + "</div>"), t.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o), t.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", _("#ot-ven-lst").el[0]), _("#ot-lst-cnt .ot-sdk-column").append(t), t.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, I.PCIABVendorsText), this.iabAccInit = !0
    }, a.prototype.showConsentHeader = function() {
        var e = A.legIntSettings;
        _("#onetrust-pc-sdk .ot-sel-all-hdr").show(), e.PAllowLI && !e.PShowLegIntBtn || _("#onetrust-pc-sdk .ot-li-hdr").hide()
    }, a.prototype.setBackBtnTxt = function() {
        (S.isV2Template ? (_(P.P_Vendor_List + " .back-btn-handler").attr(this.ARIA_LABEL_ATTRIBUTE, I.PCenterBackText), _(P.P_Vendor_List + " .back-btn-handler title")) : _(P.P_Vendor_List + " .back-btn-handler .pc-back-button-text")).html(I.PCenterBackText)
    }, a.prototype.getCookieElement = function(e, t) {
        var o = L.hosts.hostCookieTemplate.cloneNode(!0),
            n = o.querySelector("div").cloneNode(!0),
            r = (n.classList.remove("cookie-name-container"), _(o).html(""), e.Name),
            i = (I.AddLinksToCookiepedia && t.isFirstParty && (r = y.getCookieLabel(e, I.AddLinksToCookiepedia)), n.cloneNode(!0));
        return i.classList.add(P.P_c_Name), i.querySelector("div:nth-child(1)").innerHTML = I.pcCListName, i.querySelector("div:nth-child(2)").innerHTML = r, _(o).append(i), I.pcShowCookieHost && ((r = n.cloneNode(!0)).classList.add(P.P_c_Host), r.querySelector("div:nth-child(1)").innerHTML = I.pcCListHost, r.querySelector("div:nth-child(2)").innerHTML = e.Host, _(o).append(r)), I.pcShowCookieDuration && ((i = n.cloneNode(!0)).classList.add(P.P_c_Duration), i.querySelector("div:nth-child(1)").innerHTML = I.pcCListDuration, i.querySelector("div:nth-child(2)").innerHTML = e.IsSession ? I.LifespanTypeText : y.getDuration(e), _(o).append(i)), I.pcShowCookieType && (r = t.Type === he.GenVendor ? !e.isThirdParty : t.isFirstParty, (i = n.cloneNode(!0)).classList.add(P.P_c_Type), i.querySelector("div:nth-child(1)").innerHTML = I.pcCListType, i.querySelector("div:nth-child(2)").innerHTML = r ? I.firstPartyTxt : I.thirdPartyTxt, _(o).append(i)), I.pcShowCookieCategory && (r = void 0, r = t.Type === he.GenVendor ? e.category : (t.isFirstParty ? e : t).groupName) && ((i = n.cloneNode(!0)).classList.add(P.P_c_Category), i.querySelector("div:nth-child(1)").innerHTML = I.pcCListCategory, i.querySelector("div:nth-child(2)").innerHTML = r, _(o).append(i)), I.pcShowCookieDescription && e.description && ((t = n.cloneNode(!0)).classList.add(P.P_c_Desc), t.querySelector("div:nth-child(1)").innerHTML = I.pcCListDescription, t.querySelector("div:nth-child(2)").innerHTML = e.description, _(o).append(t)), o
    }, a.prototype.getNoResultsFound = function(e) {
        e = L.showTrackingTech ? I.PCTechNotFound : e ? I.PCHostNotFound : I.PCVendorNotFound;
        return " " + e + "."
    }, a.prototype.getAdditionalTechnologiesHtml = function(e) {
        var t = document.createDocumentFragment(),
            o = I.AdditionalTechnologiesConfig,
            n = 0 < e.Cookies.length;
        return (n = n && e.Cookies[0].HostId === this.FIRST_PARTY_COOKIES_GROUP_NAME ? 0 < e.Cookies[0].Cookies.length : n) && ((n = x.getMainAccordionContainer(o.PCCookiesLabel, o.PCCookiesLabel, !1)).classList.add(this.TECH_COOKIES_SELECTOR), t.appendChild(n)), 0 < e.LocalStorages.length && ((n = x.getMainAccordionContainer(o.PCLocalStorageLabel, o.PCLocalStorageLabel)).classList.add("tech-local"), x.setSessionLocalStorageTemplate(n, e.LocalStorages, I.AdditionalTechnologiesConfig.PCLocalStorageDurationText), t.appendChild(n)), 0 < e.SessionStorages.length && ((n = x.getMainAccordionContainer(o.PCSessionStorageLabel, o.PCSessionStorageDurationText)).classList.add("tech-session"), x.setSessionLocalStorageTemplate(n, e.SessionStorages, I.AdditionalTechnologiesConfig.PCSessionStorageDurationText), t.appendChild(n)), t
    }, a.prototype.getMainAccordionContainer = function(e, t, o) {
        void 0 === o && (o = !0);
        var n = x.getAccordionStyleElement(),
            r = E.accordionEl.cloneNode(!0);
        return r.classList.add("ot-add-tech"), r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n), r.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + e + "</div>"), r.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, t), o && r.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeend", '<ul id="ot-host-lst" style="display: block;"></ul>'), r.cloneNode(!0)
    }, a.prototype.setSessionLocalStorageTemplate = function(e, t, o) {
        var n = L.hosts.hostTemplate.cloneNode(!0),
            r = (b.removeChild(n.querySelector(".ot-a scc-txt")), e.querySelector(".ot-acc-txt " + P.P_Host_Cntr));
        r.removeAttribute("style"), r.classList.add("ot-host-opt");
        for (var i = 0, s = t; i < s.length; i++) {
            var a = s[i],
                a = x.getSessionLocalStorageElement(a, o);
            r.append(a)
        }
    }, a.prototype.getSessionLocalStorageElement = function(e, t) {
        var o = L.hosts.hostCookieTemplate.cloneNode(!0),
            n = o.querySelector("div").cloneNode(!0),
            r = (_(o).html(""), x.createKeyValueDivEle(n, P.P_c_Name, I.pcCListName, e.Name)),
            r = (_(o).append(r), x.createKeyValueDivEle(n, P.P_c_Host, I.pcCListHost, e.Host)),
            r = (_(o).append(r), x.createKeyValueDivEle(n, P.P_c_Duration, I.pcCListDuration, t)),
            t = (_(o).append(r), x.createKeyValueDivEle(n, P.P_c_Desc, I.pcCListDescription, e.description));
        return _(o).append(t), o
    }, a.prototype.createKeyValueDivEle = function(e, t, o, n) {
        e = e.cloneNode(!0);
        return e.classList.add(t), e.querySelector("div:nth-child(1)").innerHTML = o, e.querySelector("div:nth-child(2)").innerHTML = n, e
    }, a.prototype.getAdditionalTechnologiesDataFromGroup = function(e) {
        for (var t, o = [], n = {
                SessionStorages: [],
                LocalStorages: [],
                Cookies: []
            }, r = 0, i = x.getGroupsFromFilter(e); r < i.length; r++) {
            var s = i[r],
                a = hn.getCookiesForGroup(s),
                o = F(o, null != (t = a.firstPartyCookiesList) ? t : []);
            n.Cookies = F(n.Cookies, a.thirdPartyCookiesList), n.LocalStorages = F(n.LocalStorages, null != (a = null == (t = s.TrackingTech) ? void 0 : t.LocalStorages) ? a : []), n.SessionStorages = F(n.SessionStorages, null != (a = null == (t = s.TrackingTech) ? void 0 : t.SessionStorages) ? a : [])
        }
        return o.length && n.Cookies.unshift({
            HostName: I.PCFirstPartyCookieListText,
            DisplayName: I.PCFirstPartyCookieListText,
            HostId: this.FIRST_PARTY_COOKIES_GROUP_NAME,
            isFirstParty: !0,
            Cookies: o,
            Description: ""
        }), n
    }, a.prototype.getFirstsAndThirdCookisFromGroups = function(e) {
        var t = [],
            o = [];
        return x.getGroupsFromFilter(e).forEach(function(e) {
            e = hn.getCookiesForGroup(e);
            t = F(t, e.firstPartyCookiesList), o = F(o, e.thirdPartyCookiesList)
        }), {
            firstPartyCookiesList: t,
            thirdPartyCookiesList: o
        }
    }, a.prototype.getGroupsFromFilter = function(t) {
        var o = [];
        return I.Groups.forEach(function(e) {
            F(e.SubGroups, [e]).forEach(function(e) {
                (!t || !t.length || -1 !== t.indexOf(e.CustomGroupId)) && o.push(e)
            })
        }), o
    }, a.prototype.getAccordionStyleElement = function() {
        return (I.PCAccordionStyle === ae.Caret ? E.arrowEl : E.plusMinusEl).cloneNode(!0)
    }, a.prototype.getFilteredAdditionaTechtData = function(e, t) {
        var o, n = {
                SessionStorages: [],
                LocalStorages: [],
                Cookies: []
            },
            r = this.getSearchQuery(e),
            e = JSON.parse(JSON.stringify(t));
        return e.Cookies[0].HostId === this.FIRST_PARTY_COOKIES_GROUP_NAME && ((o = e.Cookies.shift()).Cookies = null == (t = o.Cookies) ? void 0 : t.filter(function(e) {
            return r.lastIndex = 0, r.test(e.Name || e.Host)
        })), n.Cookies = null == (t = e.Cookies) ? void 0 : t.filter(function(e) {
            return r.lastIndex = 0, r.test(e.DisplayName || e.HostName)
        }), o && 0 < o.Cookies.length && n.Cookies.unshift(o), n.LocalStorages = null == (t = e.LocalStorages) ? void 0 : t.filter(function(e) {
            return r.lastIndex = 0, r.test(e.Name || e.Host)
        }), n.SessionStorages = null == (o = e.SessionStorages) ? void 0 : o.filter(function(e) {
            return r.lastIndex = 0, r.test(e.Name || e.Host)
        }), n
    }, a.prototype.checkIfLegLinkRemove = function(e) {
        A.isTcfV2Template && e.querySelector(P.P_Ven_Leg_Claim).remove()
    };
    var x, ii = a;

    function a() {
        this.hasIabVendors = !1, this.hasGoogleVendors = !1, this.hasGenVendors = !1, this.iabAccInit = !1, this._displayNull = "display: '';", this.ARIA_LABEL_ATTRIBUTE = "aria-label", this.TECH_COOKIES_SELECTOR = "tech-cookies", this.FIRST_PARTY_COOKIES_GROUP_NAME = "first-party-cookies-group", this.LABEL_STATUS = ".ot-label-status", this.CONSENT_CATEGORY = ".consent-category", this.googleSearchSelectors = {
            vendorAccBtn: "#ot-addtl-venlst #Adtl-IAB",
            name: "name",
            accId: ".ot-adtlv-acc",
            selectAllEvntHndlr: "#ot-selall-adtlven-handler",
            venListId: "#ot-addtl-venlst",
            ctgl: ".ot-ven-adtlctgl"
        }, this.genVendorSearchSelectors = {
            vendorAccBtn: "#ot-gn-venlst #Gn-",
            name: "Name",
            accId: ".ot-gv-acc",
            selectAllEvntHndlr: "#ot-selall-gnven-handler",
            venListId: "#ot-gn-venlst",
            ctgl: ".ot-ven-gvctgl"
        }
    }
    li.prototype.initBanner = function() {
        this.canImpliedConsentLandingPage(), S.moduleInitializer.CookieSPAEnabled ? _(window).on("otloadbanner", this.windowLoadBanner.bind(this)) : _(window).one("otloadbanner", this.windowLoadBanner.bind(this))
    }, li.prototype.insertCSBtnHtmlAndCss = function(e) {
        document.getElementById("onetrust-style").innerHTML += G.csBtnGroup.css;
        var t = document.createElement("div"),
            t = (_(t).html(G.csBtnGroup.html), t.querySelector("#ot-sdk-btn-floating"));
        e && t && _(t).removeClass("ot-hide"), _("#onetrust-consent-sdk").append(t), I.cookiePersistentLogo && (I.cookiePersistentLogo.includes("ot_guard_logo.svg") ? this.applyPersistentSvgOnDOM() : _(".ot-floating-button__front, .ot-floating-button__back").addClass("custom-persistent-icon"))
    }, li.prototype.applyPersistentSvgOnDOM = function() {
        return u(this, void 0, void 0, function() {
            var t;
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, xt.getPersistentCookieSvg()];
                    case 1:
                        return t = e.sent(), _(this.FLOATING_COOKIE_FRONT_BTN).html(t), w.otGuardLogoResolve(!0), [2]
                }
            })
        })
    }, li.prototype.canImpliedConsentLandingPage = function() {
        this.isImpliedConsent() && !an.isLandingPage() && "true" === k.readCookieParam(v.OPTANON_CONSENT, xe.AWAITING_RE_CONSENT) && this.checkForRefreshCloseImplied()
    }, li.prototype.isImpliedConsent = function() {
        return I.ConsentModel && "implied consent" === I.ConsentModel.Name.toLowerCase()
    }, li.prototype.checkForRefreshCloseImplied = function() {
        O.closeOptanonAlertBox(), O.close(!0)
    }, li.prototype.hideCustomHtml = function() {
        var e = document.getElementById("onetrust-banner-sdk");
        e && d(e, "display: none;")
    }, li.prototype.shouldShowBanner = function(e) {
        return I.ShowAlertNotice && !e && !I.NoBanner && !L.hideBanner
    }, li.prototype.shouldShowPc = function(e) {
        return I.ShowAlertNotice && !e && I.NoBanner
    }, li.prototype.windowLoadBanner = function() {
        return u(this, void 0, void 0, function() {
            var t, o, n, r, i;
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (this.core.substitutePlainTextScriptTags(), t = S.moduleInitializer, _("#onetrust-consent-sdk").length ? o = document.getElementById("onetrust-consent-sdk") : (o = document.createElement("div"), _(o).attr("id", "onetrust-consent-sdk"), _(document.body).append(o)), _(".onetrust-pc-dark-filter").length || (n = document.createElement("div"), _(n).attr("class", "onetrust-pc-dark-filter"), _(n).attr("class", "ot-hide"), _(n).attr("class", "ot-fade-in"), o.firstChild ? o.insertBefore(n, o.firstChild) : _(o).append(n)), I.IsIabEnabled && this.iab.updateIabVariableReference(), n = h.isAlertBoxClosedAndValid(), r = this.shouldShowBanner(n), i = this.shouldShowPc(n), L.ntfyRequired ? (this.hideCustomHtml(), yn.init(), yn.changeState()) : (r ? w.initializeAlartHtmlAndHandler() : (I.IsGPPEnabled && Yr.setCmpDisplayStatus("disabled"), this.hideCustomHtml()), w.addEventListnerForVendorsList()), t.IsSuppressPC || (B.insertPcHtml(), w.initialiseConsentNoticeHandlers(), I.IsIabEnabled && this.iab.InitializeVendorList()), this.prepopulateCookieOrVendorPageTitle(), this.initializeHbbTvScript(), this.insertCSBtn(!r), i) ? [4, w.toggleInfoDisplay()] : [3, 2];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return w.insertCookieSettingText(), this.initializeFloatingButtonOnBannerLoad(i), si.insertTrackigTechOrCookiePolicy(), O.executeOptanonWrapper(), this.initializeCookieParamsOnBannerLoad(r), [2]
                }
            })
        })
    }, li.prototype.prepopulateCookieOrVendorPageTitle = function() {
        S.isV2Template && (I.GeneralVendorsEnabled ? this.iab.setListSearchValues(Ie.vendors) : this.iab.setListSearchValues(Ie.cookies))
    }, li.prototype.initializeFloatingButtonOnBannerLoad = function(e) {
        var t = _(this.FLOATING_COOKIE_BTN),
            o = _(this.FLOATING_COOKIE_FRONT_BTN),
            n = _(this.FLOATING_COOKIE_BACK_BTN);
        t.length && (t.attr("data-title", I.CookieSettingButtonText), o.el[0].setAttribute(ht, I.AriaOpenPreferences), n.el[0].setAttribute(ht, I.AriaClosePreferences), e ? (o.el[0].setAttribute(gt, !0), o.el[0].style.display = "none") : (n.el[0].setAttribute(gt, !0), n.el[0].style.display = "none"))
    }, li.prototype.initializeCookieParamsOnBannerLoad = function(e) {
        k.readCookieParam(v.OPTANON_CONSENT, io) || ro.writeGrpParam(v.OPTANON_CONSENT), k.readCookieParam(v.OPTANON_CONSENT, so) || ro.writeHstParam(v.OPTANON_CONSENT), L.showGeneralVendors && !k.readCookieParam(v.OPTANON_CONSENT, ao) && ro.writeGenVenCookieParam(v.OPTANON_CONSENT), L.vsIsActiveAndOptOut && !k.readCookieParam(v.OPTANON_CONSENT, lo) && ro.writeVSConsentCookieParam(v.OPTANON_CONSENT), e && mo.setBannerFocus()
    }, li.prototype.initializeHbbTvScript = function() {
        var e;
        S.moduleInitializer.RemoteActionsEnabled && ((e = document.getElementById("hbbtv")) && e.remove(), (e = document.createElement("script")).id = "hbbtv", e.src = L.storageBaseURL + "/scripttemplates/" + S.moduleInitializer.Version + "/hbbtv.js", e.type = "text/javascript", _(document.body).append(e))
    }, li.prototype.insertCSBtn = function(e) {
        G.csBtnGroup && (this.insertCSBtnHtmlAndCss(e), w.initFlgtCkStgBtnEventHandlers())
    }, li.prototype.insertTrackingTechnologies = function() {
        var e;
        _("#ot-sdk-cookie-policy, #optanon-cookie-policy").length && (window.OnetrustCookiePolicy && window.OnetrustCookiePolicy.InsertCookiePolicyHtml ? window.OnetrustCookiePolicy.InsertCookiePolicyHtml(y, I, _) : ((e = document.createElement("script")).id = "cookie-policy-script", e.onload = function() {
            return window.OnetrustCookiePolicy.InsertCookiePolicyHtml(y, I, _)
        }, e.type = "text/javascript", e.src = L.storageBaseURL + "/scripttemplates/" + S.moduleInitializer.Version + "/trackingTechnologies.js", document.head.appendChild(e)))
    }, li.prototype.insertTrackigTechOrCookiePolicy = function() {
        S.fp.CookieV2TrackingTechnologies ? si.insertTrackingTechnologies() : rr.insertCookiePolicyHtml()
    };
    var si, ai = li;

    function li() {
        this.iab = x, this.core = hn, this.FLOATING_COOKIE_BTN = "#ot-sdk-btn-floating", this.FLOATING_COOKIE_FRONT_BTN = "#ot-sdk-btn-floating .ot-floating-button__front .ot-floating-button__open", this.FLOATING_COOKIE_BACK_BTN = "#ot-sdk-btn-floating .ot-floating-button__back .ot-floating-button__close"
    }
    D(pi, ci = lr), pi.prototype.Close = function(e) {
        O.closeBanner(!1), window.location.href = "http://otsdk//consentChanged"
    }, pi.prototype.RejectAll = function(e) {
        O.rejectAllEvent(), window.location.href = "http://otsdk//consentChanged"
    }, pi.prototype.AllowAll = function(e) {
        O.AllowAllV2(e), window.location.href = "http://otsdk//consentChanged"
    }, pi.prototype.ToggleInfoDisplay = function() {
        w.toggleInfoDisplay()
    };
    var ci, di, ui = pi;

    function pi() {
        var e = null !== ci && ci.apply(this, arguments) || this;
        return e.mobileOnlineURL = A.mobileOnlineURL, e
    }
    Ci.prototype.syncConsentProfile = function(e, t, o) {
        void 0 === o && (o = !1), e ? (L.dsParams.id = e.trim(), ar.setDataSubjectIdV2(e)) : e = L.dsParams.id, o && (L.dsParams.isAnonymous = o), t = t || L.dsParams.token, e && t && xt.getConsentProfile(e, t).then(function(e) {
            return hi.consentProfileCallback(e)
        })
    }, Ci.prototype.getConsentValue = function(e) {
        var t = null;
        switch (e) {
            case H[H.ACTIVE]:
            case H[H.ALWAYS_ACTIVE]:
                t = pe.Active;
                break;
            case H[H.EXPIRED]:
            case H[H.OPT_OUT]:
            case H[H.PENDING]:
            case H[H.WITHDRAWN]:
                t = pe.InActive
        }
        return t
    }, Ci.prototype.isCookieGroup = function(e) {
        return !/IABV2|ISPV2|IFEV2|ISFV2|IAB2V2|IFE2V2|ISP2V2|ISF2V2/.test(e)
    }, Ci.prototype.syncPreferences = function(e, t) {
        void 0 === t && (t = !1);
        var o = C = k.getCookie(v.ALERT_BOX_CLOSED),
            n = !1,
            r = !0,
            i = !1,
            s = b.strToArr(k.readCookieParam(v.OPTANON_CONSENT, "groups"));
        if (e && e.preferences.length)
            for (var a = 0, l = e.preferences; a < l.length; a++) {
                var c = l[a],
                    d = c.status === H[H.NO_CONSENT],
                    u = A.domainGrps[c.id];
                if (u)
                    if (-1 < L.grpsSynced.indexOf(u) && (L.syncedValidGrp = !0), d && s.length) {
                        for (var p = -1, h = 0; h < s.length; h++)
                            if (s[h].split(":")[0] === u) {
                                p = h;
                                break
                            } - 1 < p && (s.splice(p, 1), L.grpsSynced.push(u))
                    } else if (!d && (!C || new Date(c.lastInteractionDate) > new Date(o))) {
                    var g = this.getConsentValue(c.status),
                        i = !0,
                        C = c.lastInteractionDate;
                    if (!t && this.isCookieGroup(u)) {
                        for (var y = u + ":" + g, f = -1, h = 0; h < s.length; h++) {
                            var m = s[h].split(":");
                            if (m[0] === u) {
                                m[1] !== g && (s[h] = y, n = !0), f = h;
                                break
                            }
                        } - 1 === f && (s.push(y), n = !0)
                    }
                }
            } else r = !1;
        return {
            alertBoxCookieVal: C,
            groupsConsent: s,
            profileFound: r,
            syncRequired: n,
            syncOnlyDate: i = i && !n
        }
    }, Ci.prototype.hideBannerAndPc = function() {
        var e = y.isBannerVisible();
        e && y.hideBanner(), (e || L.isPCVisible) && (Qo.removeAddedOTCssStyles(), nn.hideConsentNoticeV2())
    }, Ci.prototype.setOptanonConsentCookie = function(e, t) {
        var o;
        e.syncRequired && (k.writeCookieParam(v.OPTANON_CONSENT, "groups", e.groupsConsent.toString()), o = k.getCookie(v.OPTANON_CONSENT), k.setCookie(v.OPTANON_CONSENT, o, t, !1, new Date(e.alertBoxCookieVal)))
    }, Ci.prototype.setIabCookie = function(e, t, o) {
        o.syncGroups && o.syncGroups[L.syncGrpId] && o.syncGroups[L.syncGrpId].tcStringV2 ? k.getCookie(v.EU_PUB_CONSENT) !== o.syncGroups[L.syncGrpId].tcStringV2 && (e.syncRequired = !0, k.setCookie(v.EU_PUB_CONSENT, o.syncGroups[L.syncGrpId].tcStringV2, t, !1, new Date(e.alertBoxCookieVal))) : e.profileFound = !1
    }, Ci.prototype.setAddtlVendorsCookie = function(e, t) {
        I.UseGoogleVendors && !k.getCookie(v.ADDITIONAL_CONSENT_STRING) && k.setCookie(v.ADDITIONAL_CONSENT_STRING, L.addtlConsentVersion, t, !1, new Date(e.alertBoxCookieVal))
    }, Ci.prototype.createTrans = function() {
        var e = k.readCookieParam(v.OPTANON_CONSENT, "iType");
        $r.createConsentTxn(!1, ue[e], !1, !0)
    }, Ci.prototype.updateGrpsDom = function() {
        for (var e = 0, t = f.getAllGroupElements(); e < t.length; e++) ! function(e) {
            var t = e.getAttribute("data-optanongroupid"),
                o = C.getGroupById(t),
                n = !0,
                r = b.findIndex(L.groupsConsent, function(e) {
                    return e.split(":")[0] === t
                }); - 1 < r && L.groupsConsent[r].split(":")[1] === pe.InActive && (n = !1), f.toggleGrpElements(e, o, n), f.toogleSubGroupElement(e, n, !1, !0), f.toogleSubGroupElement(e, n, !0, !0)
        }(t[e])
    }, Ci.prototype.updateVendorsDom = function() {
        I.IsIabEnabled && (x.updateIabVariableReference(), _n.toggleVendorConsent(), A.legIntSettings.PAllowLI) && (A.legIntSettings.PShowLegIntBtn ? _n.updateVendorLegBtns() : _n.toggleVendorLi())
    }, Ci.prototype.consentProfileCallback = function(r) {
        return u(this, void 0, void 0, function() {
            var t, o, n;
            return p(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = this.syncPreferences(r), o = I.ReconsentFrequencyDays, n = h.isIABCrossConsentEnabled(), this.setOptanonConsentCookie(t, o), I.IsIabEnabled && !n && this.setIabCookie(t, o, r), t.syncOnlyDate && (h.syncAlertBoxCookie(t.alertBoxCookieVal), h.syncCookieExpiry()), t.syncRequired && t.profileFound) ? (L.syncRequired = t.syncRequired, h.syncAlertBoxCookie(t.alertBoxCookieVal), this.setAddtlVendorsCookie(t, o), this.hideBannerAndPc(), G.initGrpsAndHosts(), !n && I.NtfyConfig.ShowNtfy && h.isAlertBoxClosedAndValid() ? [4, yn.getContent()] : [3, 2]) : [3, 3];
                    case 1:
                        e.sent(), yn.init(), yn.changeState(), e.label = 2;
                    case 2:
                        return I.IsIabEnabled && (h.setIABCookieData(), Zt.populateVendorAndPurposeFromCookieData()), this.updateGrpsDom(), this.updateVendorsDom(), an.setLandingPathParam(xe.NOT_LANDING_PAGE), hn.substitutePlainTextScriptTags(), dn.updateGtmMacros(!0), O.executeOptanonWrapper(), [3, 4];
                    case 3:
                        !t.profileFound && t.alertBoxCookieVal && this.createTrans(), e.label = 4;
                    case 4:
                        return [2]
                }
            })
        })
    };
    var hi, gi = Ci;

    function Ci() {}
    mi.prototype.removeCookies = function() {
        k.removePreview(), k.removeOptanon(), k.removeAlertBox(), k.removeIab2(), k.removeAddtlStr(), k.removeVariant(), L.isPreview && yi.setPreviewCookie(), L.urlParams.get("otreset") && L.urlParams.set("otreset", "false");
        var e = window.location.pathname + "?" + L.urlParams.toString() + window.location.hash;
        yi.replaceHistory(e)
    }, mi.prototype.setPreviewCookie = function() {
        var e = new Date,
            t = (e.setTime(e.getTime() + 864e5), L.geoFromUrl ? "&geo=" + L.geoFromUrl : ""),
            e = "expiry=" + e.toISOString() + t;
        k.setCookie(v.OT_PREVIEW, e, 1, !1)
    }, mi.prototype.bindStopPreviewEvent = function() {
        (window.attachEvent || window.addEventListener)("message", function(e) {
            return yi.onMessage(e)
        })
    }, mi.prototype.replaceHistory = function(e) {
        history.pushState({}, "", e), location.reload()
    }, mi.prototype.onMessage = function(e) {
        "string" == typeof e.data && e.data === yi.CLEAR_COOKIES && (yi.removeCookies(), e.source) && e.source.postMessage && e.source.postMessage(yi.CLEARED_COOKIES, e.origin)
    };
    var yi, fi, l = mi;

    function mi() {
        this.CLEAR_COOKIES = "CLEAR_OT_COOKIES", this.CLEARED_COOKIES = "CLEARED_OT_COOKIES"
    }
    Ge.initPolyfill(), k = new Pt, y = new Ht, A = new e, Ot = new wt, yi = new l, (s = window.otStubData) && (S.moduleInitializer = s.domainData, S.fp = S.moduleInitializer.TenantFeatures, L.isAMP = s.isAmp, L.dataDomainId = s.domainId, L.isPreview = s.isPreview, L.urlParams = s.urlParams, L.isV2Stub = s.isV2Stub || !1, A.gtmUpdatedinStub = s.gtmUpdated, s.isReset ? yi.removeCookies() : s.isPreview && yi.setPreviewCookie(), A.setBannerScriptElement(s.stubElement), A.setRegionRule(s.regionRule), S.fp.CookieV2TargetedTemplates && (A.conditionalLogicEnabled = !(null == (fi = A.getRegionRule().Conditions) || !fi.length), A.conditionalLogicEnabled) && (function() {
            for (var e = A.getRegionRule(), t = 0; t < e.Conditions.length; t++) try {
                if (function(e) {
                        if (e) return e = window.atob(e), Function('"use strict"; return ' + e)()
                    }(e.Conditions[t].Expression)) return A.Condition = e.Conditions[t]
            } catch (e) {
                console.warn(e);
                continue
            }
            A.allConditionsFailed = !0
        }(), A.canUseConditionalLogic = !A.allConditionsFailed), L.userLocation = s.userLocation, L.crossOrigin = s.crossOrigin, A.bannerDataParentURL = s.bannerBaseDataURL, A.mobileOnlineURL = F(A.mobileOnlineURL, s.mobileOnlineURL), fi = A.getRegionRule(), A.multiVariantTestingEnabled = S.moduleInitializer.MultiVariantTestingEnabled && 0 < fi.Variants.length && y.isDateCurrent(fi.TestEndTime), A.otDataLayer = s.otDataLayer, L.grpsSynced = s.grpsSynced || [], L.isIabSynced = s.isIabSynced, L.isGacSynced = s.isGacSynced, L.syncRequired = s.isIabSynced || s.isGacSynced || s.grpsSynced && 0 < s.grpsSynced.length, L.consentPreferences = s.preferences, L.syncGrpId = s.syncGrpId, L.consentApi = s.consentApi, L.tenantId = s.tenantId, L.geoFromUrl = s.geoFromUrl, L.nonce = s.nonce, L.setAttributePolyfillIsActive = s.setAttributePolyfillIsActive, L.storageBaseURL = s.storageBaseURL, L.identifierType = s.identifierType, A.previewMode = s.previewMode, A.prevUserWasAnon = s.prevUserWasAnon, A.userHasProfile = s.userHasProfile, A.authenticatedConsent = s.domainData.AuthenticatedConsent, A.forceCreateTrxLocalConsentIsGreater = s.forceCreateTrxLocalConsentIsGreater, Ot.populateLangSwitcherPlhdr(), window.otStubData = {
            userLocation: L.userLocation
        }, window.OneTrustStub = null),
        function() {
            u(this, void 0, void 0, function() {
                var r, i, s, a;
                return p(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return (C = new zt, f = new Jo, Xt = new Qt, x = new ii, hn = new gn, O = new Dn, w = new er, B = new Jn, Yn = new Xn, si = new ai, S.fp.CookieV2TrackingTechnologies || (rr = new ir), Wt = new Jt, po = new ho, G = new ni, dn = new un, tr = new or, g = new oo, E = new Ft, hi = new gi, _n = new En, xt = new Nt, mo = new Ko, nn = new rn, V = new Bn, qn = new Un, zn = new Kn, c = new $n, S.moduleInitializer.MobileSDK ? di = new ui : ar = new lr, Zt = new eo, o = k.getCookie(v.ALERT_BOX_CLOSED), n = k.getCookie(v.OPTANON_CONSENT), o && !n && k.removeAlertBox(), A.setGCMcallback(), a = A.getRegionRule(), a = (A.canUseConditionalLogic ? A.Condition : a).UseGoogleVendors, A.isIab2orv2Template = "IAB2" === A.getRegionRuleType() || "IAB2V2" === A.getRegionRuleType(), A.isTcfV2Template = "IAB2V2" === A.getRegionRuleType(), A.isIab2orv2Template) ? [4, Promise.all([xt.getLangJson(), xt.fetchGvlObj(), a ? xt.fetchGoogleVendors() : Promise.resolve(null), xt.loadCMP()])] : [3, 2];
                        case 1:
                            return a = e.sent(), r = a[0], i = a[1], s = a[2], L.gvlObj = i, L.addtlVendorsList = s ? s.vendors : null, [3, 4];
                        case 2:
                            return [4, xt.getLangJson()];
                        case 3:
                            r = e.sent(), e.label = 4;
                        case 4:
                            return r.DomainData.IsGPPEnabled ? [4, xt.loadGPP()] : [3, 6];
                        case 5:
                            e.sent(), Yr = new Xr, e.label = 6;
                        case 6:
                            var t;
                            return function(d) {
                                u(this, void 0, void 0, function() {
                                    var l, c;
                                    return p(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                window.OneTrust = window.Optanon = Object.assign({}, window.OneTrust, function(e) {
                                                    var t, o = S.moduleInitializer.MobileSDK;
                                                    t = o ? di : ar;
                                                    var n = {
                                                        AllowAll: t.AllowAll,
                                                        BlockGoogleAnalytics: t.BlockGoogleAnalytics,
                                                        Close: t.Close,
                                                        getCSS: t.getCSS,
                                                        GetDomainData: t.GetDomainData,
                                                        getGeolocationData: t.getGeolocationData,
                                                        getHTML: t.getHTML,
                                                        Init: t.Init,
                                                        InitializeBanner: t.InitializeBanner,
                                                        initializeCookiePolicyHtml: t.initCookiePolicyAndSettings,
                                                        InsertHtml: t.InsertHtml,
                                                        InsertScript: t.InsertScript,
                                                        IsAlertBoxClosed: t.IsAlertBoxClosed,
                                                        IsAlertBoxClosedAndValid: t.IsAlertBoxClosedAndValid,
                                                        LoadBanner: t.LoadBanner,
                                                        OnConsentChanged: g.OnConsentChanged,
                                                        ReconsentGroups: t.ReconsentGroups,
                                                        RejectAll: t.RejectAll,
                                                        SetAlertBoxClosed: t.SetAlertBoxClosed,
                                                        setGeoLocation: t.setGeoLocation,
                                                        ToggleInfoDisplay: t.ToggleInfoDisplay,
                                                        TriggerGoogleAnalyticsEvent: t.TriggerGoogleAnalyticsEvent,
                                                        useGeoLocationService: t.useGeoLocationService,
                                                        FetchAndDownloadPC: t.FetchAndDownloadPC,
                                                        changeLanguage: t.changeLang,
                                                        testLog: t.getTestLogData,
                                                        UpdateConsent: t.updateSingularConsent,
                                                        IsVendorServiceEnabled: t.vendorServiceEnabled,
                                                        UpdateGCM: t.updateGCM
                                                    };
                                                    e.IsConsentLoggingEnabled && (n.getDataSubjectId = t.getDataSubjectId, n.setConsentProfile = t.setConsentProfile, n.setDataSubjectId = t.setDataSubjectIdV2, L.isV2Stub) && (n.syncConsentProfile = hi.syncConsentProfile);
                                                    o && (n.mobileOnlineURL = t.mobileOnlineURL, n.otCookieData = L.otCookieData);
                                                    e.IsIabEnabled && (n.updateConsentFromCookies = g.updateConsentFromCookie, n.getPingRequest = Zt.getPingRequestForTcf, n.getVendorConsentsRequestV2 = Zt.getVendorConsentsRequestV2, n.showVendorsList = t.showVendorsList);
                                                    return n
                                                }(d.DomainData)), h.initializeBannerVariables(d), ro = new co, Co = new yo, $r = new Zr, Qo = new tn, an = new ln, Rn = new Fn, yn = new In;
                                                var t, o, n, r = window.OTExternalConsent,
                                                    i = (r && r.consentedDate && (r.groups || r.tcString || r.addtlString) && (t = [], (i = r.groups.split(",")).forEach(function(e) {
                                                        e = e.split(":");
                                                        t.push({
                                                            lastInteractionDate: r.consentedDate,
                                                            status: "1" === e[1] ? H[H.ACTIVE] : H[H.OPT_OUT],
                                                            id: e[0]
                                                        }), L.grpsSynced.push(e[0])
                                                    }), L.consentPreferences = {
                                                        preferences: t,
                                                        syncGroups: null
                                                    }, L.syncRequired = !0, ro.updateGroupsInCookie(v.OPTANON_CONSENT, i), k.setCookie(v.ALERT_BOX_CLOSED, r.consentedDate, 365), r.tcString && (L.isIabSynced = !0, k.setCookie(v.EU_PUB_CONSENT, r.tcString, 365)), r.addtlString) && (L.isGacSynced = !0, k.setCookie(v.ADDITIONAL_CONSENT_STRING, "" + r.addtlString, 365)), L.isPreview && (h.syncOtPreviewCookie(), yi.bindStopPreviewEvent()), l = hi.syncPreferences(L.consentPreferences, !0), (L.syncRequired || l.syncRequired) && h.syncAlertBoxCookie(l.alertBoxCookieVal), h.syncCookieExpiry(), d),
                                                    s = window.OneTrust.dataSubjectParams || {},
                                                    a = ((L.dsParams = s).id && ar.setDataSubjectIdV2(s.id, s.isAnonymous, s.identifierType, s.sendReceipt), i),
                                                    s = null == (i = s.identifierType) ? void 0 : i.trim();
                                                return L.isV2Stub && (o = void 0, n = null == (n = L.identifierType) ? void 0 : n.trim(), o = n || s || (null == (n = a.CommonData.ConsentIntegration) ? void 0 : n.DefaultIdentifier), k.writeCookieParam(v.OPTANON_CONSENT, xe.IDENTIFIER_TYPE, o)), A.multiVariantTestingEnabled && A.selectedVariant && k.setCookie(v.SELECTED_VARIANT, A.selectedVariant.Id, I.ReconsentFrequencyDays), [4, Zt.initializeIABModule()];
                                            case 1:
                                                return e.sent(), window.OneTrust.Init(!0), d.DomainData.IsGPPEnabled && Yr.initGppConsent(), [4, G.fetchAssets()];
                                            case 2:
                                                return (e.sent(), si.initBanner(), g.assetResolve(!0), Wt.initialiseCssReferences(), c = h.isIABCrossConsentEnabled(), (L.syncedValidGrp || L.isIabSynced || L.isGacSynced) && !c && I.NtfyConfig.ShowNtfy && h.isAlertBoxClosedAndValid()) ? (L.ntfyRequired = !0, [4, yn.getContent()]) : [3, 4];
                                            case 3:
                                                e.sent(), e.label = 4;
                                            case 4:
                                                return c || window.OneTrust.LoadBanner(), [2]
                                        }
                                    })
                                })
                            }(r), S.moduleInitializer.WebFormIntegrationEnabled && S.moduleInitializer.WebFormSrcUrl && (o = window.otStubData, n = document.createElement("script"), t = S.moduleInitializer.WebFormSrcUrl, n.type = "text/javascript", n.src = t, n.setAttribute("dataId", S.moduleInitializer.TenantGuid), n.setAttribute("worker", S.moduleInitializer.WebFormWorkerUrl), o.charset && n.setAttribute("charset", o.charset), o.crossOrigin && n.setAttribute("crossorigin", o.crossOrigin), document.querySelector('script[src="' + t + '"]') || document.getElementsByTagName("head")[0].appendChild(n)), [2]
                    }
                    var o, n
                })
            })
        }()
}();
