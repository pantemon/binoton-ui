// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cwa9A":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b7354f008e50d3f1";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"dF3Ha":[function(require,module,exports) {
var _lightweightCharts = require("lightweight-charts");
const chartElement = document.getElementById("chart");
const chart = (0, _lightweightCharts.createChart)(chartElement, {
    width: chartElement.offsetWidth,
    height: chartElement.offsetHeight,
    layout: {
        backgroundColor: "#253248"
    },
    grid: {
        vertLines: {
            color: "#334158"
        },
        horzLines: {
            color: "#334158"
        }
    },
    crosshair: {
        mode: (0, _lightweightCharts.CrosshairMode).Normal
    },
    priceScale: {
        borderColor: "#485c7b"
    },
    timeScale: {
        borderColor: "#485158"
    }
});
const candleSeries = chart.addCandlestickSeries({
    upColor: "#4bffb5",
    downColor: "#ff4976"
});
const volumeSeries = chart.addHistogramSeries({
    color: "#385263",
    lineWidth: 2,
    priceFormat: {
        type: "volume"
    },
    overlay: true,
    scaleMargins: {
        top: 0.9,
        bottom: 0
    }
});
for(let i = 0; i < 150; i++){
    const bar = nextBar();
    candleSeries.update(bar);
    volumeSeries.update(bar);
}
resize();
setInterval(()=>{
    const bar = nextBar();
    candleSeries.update(bar);
    volumeSeries.update(bar);
}, 3000);
window.addEventListener("resize", resize, false);
function resize() {
    chart.applyOptions({
        width: chartElement.offsetWidth,
        height: chartElement.offsetHeight
    });
    setTimeout(()=>chart.timeScale().fitContent(), 0);
}
function nextBar() {
    if (!nextBar.date) nextBar.date = new Date(2020, 0, 0);
    if (!nextBar.bar) nextBar.bar = {
        open: 100,
        high: 104,
        low: 98,
        close: 103
    };
    nextBar.date.setDate(nextBar.date.getDate() + 1);
    nextBar.bar.time = {
        year: nextBar.date.getFullYear(),
        month: nextBar.date.getMonth() + 1,
        day: nextBar.date.getDate()
    };
    let old_price = nextBar.bar.close;
    let volatility = 0.1;
    let rnd = Math.random();
    let change_percent = 2 * volatility * rnd;
    if (change_percent > volatility) change_percent -= 2 * volatility;
    let change_amount = old_price * change_percent;
    nextBar.bar.open = nextBar.bar.close;
    nextBar.bar.close = old_price + change_amount;
    nextBar.bar.high = Math.max(nextBar.bar.open, nextBar.bar.close) + Math.abs(change_amount) * Math.random();
    nextBar.bar.low = Math.min(nextBar.bar.open, nextBar.bar.close) - Math.abs(change_amount) * Math.random();
    nextBar.bar.value = Math.random() * 100;
    nextBar.bar.color = nextBar.bar.close < nextBar.bar.open ? "rgba(255, 128, 159, 0.25)" : "rgba(107, 255, 193, 0.25)";
    window.currentBar = nextBar.nar;
    return nextBar.bar;
}

},{"lightweight-charts":"5nYby"}],"5nYby":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorType", ()=>ln);
parcelHelpers.export(exports, "CrosshairMode", ()=>Y);
parcelHelpers.export(exports, "LasPriceAnimationMode", ()=>an);
parcelHelpers.export(exports, "LastPriceAnimationMode", ()=>an);
parcelHelpers.export(exports, "LineStyle", ()=>n);
parcelHelpers.export(exports, "LineType", ()=>i);
parcelHelpers.export(exports, "PriceLineSource", ()=>on);
parcelHelpers.export(exports, "PriceScaleMode", ()=>Vi);
parcelHelpers.export(exports, "TickMarkType", ()=>Qi);
parcelHelpers.export(exports, "TrackingModeExitMode", ()=>hn);
parcelHelpers.export(exports, "createChart", ()=>Ls);
parcelHelpers.export(exports, "isBusinessDay", ()=>vn);
parcelHelpers.export(exports, "isUTCTimestamp", ()=>_n);
parcelHelpers.export(exports, "version", ()=>Es);
/*!
 * @license
 * TradingView Lightweight Charts v3.8.0
 * Copyright (c) 2020 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */ var _coordinateSpace = require("fancy-canvas/coordinate-space");
var i, n;
function s(t, i1) {
    var n1, s1 = ((n1 = {})[0] = [], n1[1] = [
        t.lineWidth,
        t.lineWidth
    ], n1[2] = [
        2 * t.lineWidth,
        2 * t.lineWidth
    ], n1[3] = [
        6 * t.lineWidth,
        6 * t.lineWidth
    ], n1[4] = [
        t.lineWidth,
        4 * t.lineWidth
    ], n1)[i1];
    t.setLineDash(s1);
}
function h(t, i2, n2, s2) {
    t.beginPath();
    var h1 = t.lineWidth % 2 ? .5 : 0;
    t.moveTo(n2, i2 + h1), t.lineTo(s2, i2 + h1), t.stroke();
}
function r(t, i3) {
    if (!t) throw new Error("Assertion failed" + (i3 ? ": " + i3 : ""));
}
function e(t) {
    if (void 0 === t) throw new Error("Value is undefined");
    return t;
}
function u(t) {
    if (null === t) throw new Error("Value is null");
    return t;
}
function a(t) {
    return u(e(t));
}
!function(t) {
    t[t.Simple = 0] = "Simple", t[t.WithSteps = 1] = "WithSteps";
}(i || (i = {})), function(t) {
    t[t.Solid = 0] = "Solid", t[t.Dotted = 1] = "Dotted", t[t.Dashed = 2] = "Dashed", t[t.LargeDashed = 3] = "LargeDashed", t[t.SparseDotted = 4] = "SparseDotted";
}(n || (n = {}));
var o = {
    khaki: "#f0e68c",
    azure: "#f0ffff",
    aliceblue: "#f0f8ff",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gainsboro: "#dcdcdc",
    gray: "#808080",
    green: "#008000",
    honeydew: "#f0fff0",
    floralwhite: "#fffaf0",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lemonchiffon: "#fffacd",
    hotpink: "#ff69b4",
    lightyellow: "#ffffe0",
    greenyellow: "#adff2f",
    lightgoldenrodyellow: "#fafad2",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    lightcyan: "#e0ffff",
    magenta: "#f0f",
    maroon: "#800000",
    olive: "#808000",
    orange: "#ffa500",
    oldlace: "#fdf5e6",
    mediumblue: "#0000cd",
    transparent: "#0000",
    lime: "#0f0",
    lightpink: "#ffb6c1",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    midnightblue: "#191970",
    orchid: "#da70d6",
    mediumorchid: "#ba55d3",
    mediumturquoise: "#48d1cc",
    orangered: "#ff4500",
    royalblue: "#4169e1",
    powderblue: "#b0e0e6",
    red: "#f00",
    coral: "#ff7f50",
    turquoise: "#40e0d0",
    white: "#fff",
    whitesmoke: "#f5f5f5",
    wheat: "#f5deb3",
    teal: "#008080",
    steelblue: "#4682b4",
    bisque: "#ffe4c4",
    aquamarine: "#7fffd4",
    aqua: "#0ff",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    springgreen: "#00ff7f",
    antiquewhite: "#faebd7",
    burlywood: "#deb887",
    brown: "#a52a2a",
    beige: "#f5f5dc",
    chocolate: "#d2691e",
    chartreuse: "#7fff00",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cadetblue: "#5f9ea0",
    tomato: "#ff6347",
    fuchsia: "#f0f",
    blue: "#00f",
    salmon: "#fa8072",
    blanchedalmond: "#ffebcd",
    slateblue: "#6a5acd",
    slategray: "#708090",
    thistle: "#d8bfd8",
    tan: "#d2b48c",
    cyan: "#0ff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    blueviolet: "#8a2be2",
    black: "#000",
    darkmagenta: "#8b008b",
    darkslateblue: "#483d8b",
    darkkhaki: "#bdb76b",
    darkorchid: "#9932cc",
    darkorange: "#ff8c00",
    darkgreen: "#006400",
    darkred: "#8b0000",
    dodgerblue: "#1e90ff",
    darkslategray: "#2f4f4f",
    dimgray: "#696969",
    deepskyblue: "#00bfff",
    firebrick: "#b22222",
    forestgreen: "#228b22",
    indigo: "#4b0082",
    ivory: "#fffff0",
    lavenderblush: "#fff0f5",
    feldspar: "#d19275",
    indianred: "#cd5c5c",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightskyblue: "#87cefa",
    lightslategray: "#789",
    lightslateblue: "#8470ff",
    snow: "#fffafa",
    lightseagreen: "#20b2aa",
    lightsalmon: "#ffa07a",
    darksalmon: "#e9967a",
    darkviolet: "#9400d3",
    mediumpurple: "#9370d8",
    mediumaquamarine: "#66cdaa",
    skyblue: "#87ceeb",
    lavender: "#e6e6fa",
    lightsteelblue: "#b0c4de",
    mediumvioletred: "#c71585",
    mintcream: "#f5fffa",
    navajowhite: "#ffdead",
    navy: "#000080",
    olivedrab: "#6b8e23",
    palevioletred: "#d87093",
    violetred: "#d02090",
    yellow: "#ff0",
    yellowgreen: "#9acd32",
    lawngreen: "#7cfc00",
    pink: "#ffc0cb",
    paleturquoise: "#afeeee",
    palegoldenrod: "#eee8aa",
    darkolivegreen: "#556b2f",
    darkseagreen: "#8fbc8f",
    darkturquoise: "#00ced1",
    peachpuff: "#ffdab9",
    deeppink: "#ff1493",
    violet: "#ee82ee",
    palegreen: "#98fb98",
    mediumseagreen: "#3cb371",
    peru: "#cd853f",
    saddlebrown: "#8b4513",
    sandybrown: "#f4a460",
    rosybrown: "#bc8f8f",
    purple: "#800080",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    papayawhip: "#ffefd5",
    mediumslateblue: "#7b68ee",
    plum: "#dda0dd",
    mediumspringgreen: "#00fa9a"
};
function l(t) {
    return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0;
}
function f(t) {
    return t <= 0 || t > 0 ? t < 0 ? 0 : t > 1 ? 1 : Math.round(1e4 * t) / 1e4 : 0;
}
var c = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i, v = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i, _ = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/, d = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;
function w(t) {
    var i4;
    if ((t = t.toLowerCase()) in o && (t = o[t]), i4 = d.exec(t) || _.exec(t)) return [
        l(parseInt(i4[1], 10)),
        l(parseInt(i4[2], 10)),
        l(parseInt(i4[3], 10)),
        f(i4.length < 5 ? 1 : parseFloat(i4[4]))
    ];
    if (i4 = v.exec(t)) return [
        l(parseInt(i4[1], 16)),
        l(parseInt(i4[2], 16)),
        l(parseInt(i4[3], 16)),
        1
    ];
    if (i4 = c.exec(t)) return [
        l(17 * parseInt(i4[1], 16)),
        l(17 * parseInt(i4[2], 16)),
        l(17 * parseInt(i4[3], 16)),
        1
    ];
    throw new Error("Cannot parse color: ".concat(t));
}
function M(t) {
    var i5, n3 = w(t);
    return {
        t: "rgb(".concat(n3[0], ", ").concat(n3[1], ", ").concat(n3[2], ")"),
        i: (i5 = n3, .199 * i5[0] + .687 * i5[1] + .114 * i5[2] > 160 ? "black" : "white")
    };
}
var b = function(t1, i6) {
    return b = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(t, i7) {
        t.__proto__ = i7;
    } || function(t, i8) {
        for(var n4 in i8)Object.prototype.hasOwnProperty.call(i8, n4) && (t[n4] = i8[n4]);
    }, b(t1, i6);
};
function m(t, i9) {
    if ("function" != typeof i9 && null !== i9) throw new TypeError("Class extends value " + String(i9) + " is not a constructor or null");
    function n5() {
        this.constructor = t;
    }
    b(t, i9), t.prototype = null === i9 ? Object.create(i9) : (n5.prototype = i9.prototype, new n5);
}
var p = function() {
    return p = Object.assign || function(t) {
        for(var i10, n6 = 1, s3 = arguments.length; n6 < s3; n6++)for(var h2 in i10 = arguments[n6])Object.prototype.hasOwnProperty.call(i10, h2) && (t[h2] = i10[h2]);
        return t;
    }, p.apply(this, arguments);
};
function g(t, i11, n7) {
    if (n7 || 2 === arguments.length) for(var s4, h3 = 0, r1 = i11.length; h3 < r1; h3++)!s4 && h3 in i11 || (s4 || (s4 = Array.prototype.slice.call(i11, 0, h3)), s4[h3] = i11[h3]);
    return t.concat(s4 || Array.prototype.slice.call(i11));
}
var y = function() {
    function t2() {
        this.h = [];
    }
    return t2.prototype.u = function(t, i12, n8) {
        var s5 = {
            o: t,
            l: i12,
            v: !0 === n8
        };
        this.h.push(s5);
    }, t2.prototype._ = function(t) {
        var i13 = this.h.findIndex(function(i14) {
            return t === i14.o;
        });
        i13 > -1 && this.h.splice(i13, 1);
    }, t2.prototype.M = function(t) {
        this.h = this.h.filter(function(i15) {
            return i15.l !== t;
        });
    }, t2.prototype.m = function(t3, i16) {
        var n9 = g([], this.h, !0);
        this.h = this.h.filter(function(t) {
            return !t.v;
        }), n9.forEach(function(n10) {
            return n10.o(t3, i16);
        });
    }, t2.prototype.p = function() {
        return this.h.length > 0;
    }, t2.prototype.g = function() {
        this.h = [];
    }, t2;
}();
function k(t) {
    for(var i17 = [], n11 = 1; n11 < arguments.length; n11++)i17[n11 - 1] = arguments[n11];
    for(var s6 = 0, h4 = i17; s6 < h4.length; s6++){
        var r2 = h4[s6];
        for(var e1 in r2)void 0 !== r2[e1] && ("object" != typeof r2[e1] || void 0 === t[e1] ? t[e1] = r2[e1] : k(t[e1], r2[e1]));
    }
    return t;
}
function N(t) {
    return "number" == typeof t && isFinite(t);
}
function x(t) {
    return "number" == typeof t && t % 1 == 0;
}
function C(t) {
    return "string" == typeof t;
}
function S(t) {
    return "boolean" == typeof t;
}
function T(t) {
    var i18, n12, s7, h5 = t;
    if (!h5 || "object" != typeof h5) return h5;
    for(n12 in i18 = Array.isArray(h5) ? [] : {}, h5)h5.hasOwnProperty(n12) && (s7 = h5[n12], i18[n12] = s7 && "object" == typeof s7 ? T(s7) : s7);
    return i18;
}
function D(t) {
    return null !== t;
}
function A(t) {
    return null === t ? void 0 : t;
}
var B = "'Trebuchet MS', Roboto, Ubuntu, sans-serif";
function L(t, i19, n13) {
    return n13 = void 0 !== n13 ? "".concat(n13, " ") : "", void 0 === i19 && (i19 = B), "".concat(n13).concat(t, "px ").concat(i19);
}
var E = function() {
    function t4(t) {
        this.k = {
            N: 1,
            C: 4,
            S: NaN,
            T: "",
            D: "",
            A: "",
            B: 0,
            L: 0,
            F: 0,
            O: 0,
            V: 0
        }, this.P = t;
    }
    return t4.prototype.W = function() {
        var t = this.k, i20 = this.R(), n14 = this.I();
        return t.S === i20 && t.D === n14 || (t.S = i20, t.D = n14, t.T = L(i20, n14), t.O = Math.floor(i20 / 3.5), t.B = t.O, t.L = Math.max(Math.ceil(i20 / 2 - t.C / 2), 0), t.F = Math.ceil(i20 / 2 + t.C / 2), t.V = Math.round(i20 / 10)), t.A = this.j(), this.k;
    }, t4.prototype.j = function() {
        return this.P.W().layout.textColor;
    }, t4.prototype.R = function() {
        return this.P.W().layout.fontSize;
    }, t4.prototype.I = function() {
        return this.P.W().layout.fontFamily;
    }, t4;
}(), F = function() {
    function t5() {
        this.q = [];
    }
    return t5.prototype.U = function(t) {
        this.q = t;
    }, t5.prototype.H = function(t, i21, n15, s8) {
        this.q.forEach(function(h6) {
            t.save(), h6.H(t, i21, n15, s8), t.restore();
        });
    }, t5;
}(), O = function() {
    function t6() {}
    return t6.prototype.H = function(t, i22, n16, s9) {
        t.save(), t.scale(i22, i22), this.Y(t, n16, s9), t.restore();
    }, t6.prototype.$ = function(t, i23, n17, s10) {
        t.save(), t.scale(i23, i23), this.K(t, n17, s10), t.restore();
    }, t6.prototype.K = function(t, i, n) {}, t6;
}(), V = function(t7) {
    function i24() {
        var i25 = null !== t7 && t7.apply(this, arguments) || this;
        return i25.X = null, i25;
    }
    return m(i24, t7), i24.prototype.Z = function(t) {
        this.X = t;
    }, i24.prototype.Y = function(t) {
        if (null !== this.X && null !== this.X.J) {
            var i26 = this.X.J, n18 = this.X, s11 = function(s13) {
                t.beginPath();
                for(var h7 = i26.to - 1; h7 >= i26.from; --h7){
                    var r3 = n18.G[h7];
                    t.moveTo(r3.tt, r3.it), t.arc(r3.tt, r3.it, s13, 0, 2 * Math.PI);
                }
                t.fill();
            };
            t.fillStyle = n18.nt, s11(n18.st + 2), t.fillStyle = n18.ht, s11(n18.st);
        }
    }, i24;
}(O);
function P() {
    return {
        G: [
            {
                tt: 0,
                it: 0,
                rt: 0,
                et: 0
            }
        ],
        ht: "",
        nt: "",
        st: 0,
        J: null
    };
}
var W = {
    from: 0,
    to: 1
}, z = function() {
    function t8(t, i27) {
        this.ut = new F, this.ot = [], this.lt = [], this.ft = !0, this.P = t, this.ct = i27, this.ut.U(this.ot);
    }
    return t8.prototype.vt = function(t9) {
        var i28 = this.P._t();
        i28.length !== this.ot.length && (this.lt = i28.map(P), this.ot = this.lt.map(function(t) {
            var i29 = new V;
            return i29.Z(t), i29;
        }), this.ut.U(this.ot)), this.ft = !0;
    }, t8.prototype.dt = function(t, i, n) {
        return this.ft && (this.wt(t), this.ft = !1), this.ut;
    }, t8.prototype.wt = function(t) {
        var i30 = this, n19 = this.P._t(), s14 = this.ct.Mt(), h8 = this.P.bt();
        n19.forEach(function(n20, r4) {
            var e2, a1 = i30.lt[r4], o1 = n20.gt(s14);
            if (null !== o1 && n20.yt()) {
                var l1 = u(n20.kt());
                a1.ht = o1.Nt, a1.st = o1.st, a1.G[0].et = o1.et, a1.G[0].it = n20.Ct().xt(o1.et, l1.St), a1.nt = null !== (e2 = o1.Tt) && void 0 !== e2 ? e2 : i30.P.Dt(a1.G[0].it / t), a1.G[0].rt = s14, a1.G[0].tt = h8.At(s14), a1.J = W;
            } else a1.J = null;
        });
    }, t8;
}(), R = function() {
    function t10(t) {
        this.Bt = t;
    }
    return t10.prototype.H = function(t11, i31, n21, r) {
        if (null !== this.Bt) {
            var e3 = this.Bt.Lt.yt, u1 = this.Bt.Et.yt;
            if (e3 || u1) {
                t11.save();
                var a2 = Math.round(this.Bt.tt * i31), o2 = Math.round(this.Bt.it * i31), l2 = Math.ceil(this.Bt.Ft * i31), f1 = Math.ceil(this.Bt.Ot * i31);
                t11.lineCap = "butt", e3 && a2 >= 0 && (t11.lineWidth = Math.floor(this.Bt.Lt.Vt * i31), t11.strokeStyle = this.Bt.Lt.A, t11.fillStyle = this.Bt.Lt.A, s(t11, this.Bt.Lt.Pt), function(t, i32, n22, s15) {
                    t.beginPath();
                    var h9 = t.lineWidth % 2 ? .5 : 0;
                    t.moveTo(i32 + h9, n22), t.lineTo(i32 + h9, s15), t.stroke();
                }(t11, a2, 0, f1)), u1 && o2 >= 0 && (t11.lineWidth = Math.floor(this.Bt.Et.Vt * i31), t11.strokeStyle = this.Bt.Et.A, t11.fillStyle = this.Bt.Et.A, s(t11, this.Bt.Et.Pt), h(t11, o2, 0, l2)), t11.restore();
            }
        }
    }, t10;
}(), I = function() {
    function t12(t) {
        this.ft = !0, this.Wt = {
            Lt: {
                Vt: 1,
                Pt: 0,
                A: "",
                yt: !1
            },
            Et: {
                Vt: 1,
                Pt: 0,
                A: "",
                yt: !1
            },
            Ft: 0,
            Ot: 0,
            tt: 0,
            it: 0
        }, this.zt = new R(this.Wt), this.Rt = t;
    }
    return t12.prototype.vt = function() {
        this.ft = !0;
    }, t12.prototype.dt = function(t, i) {
        return this.ft && (this.wt(), this.ft = !1), this.zt;
    }, t12.prototype.wt = function() {
        var t = this.Rt.yt(), i33 = u(this.Rt.It()), n23 = i33.jt().W().crosshair, s16 = this.Wt;
        s16.Et.yt = t && this.Rt.qt(i33), s16.Lt.yt = t && this.Rt.Ut(), s16.Et.Vt = n23.horzLine.width, s16.Et.Pt = n23.horzLine.style, s16.Et.A = n23.horzLine.color, s16.Lt.Vt = n23.vertLine.width, s16.Lt.Pt = n23.vertLine.style, s16.Lt.A = n23.vertLine.color, s16.Ft = i33.Ht(), s16.Ot = i33.Yt(), s16.tt = this.Rt.$t(), s16.it = this.Rt.Kt();
    }, t12;
}();
function j(t, i34, n24, s17, h10, r5) {
    t.fillRect(i34 + r5, n24, s17 - 2 * r5, r5), t.fillRect(i34 + r5, n24 + h10 - r5, s17 - 2 * r5, r5), t.fillRect(i34, n24, r5, h10), t.fillRect(i34 + s17 - r5, n24, r5, h10);
}
function q(t, i35, n25) {
    t.save(), t.scale(i35, i35), n25(), t.restore();
}
function U(t, i36, n26, s18, h11, r6) {
    t.save(), t.globalCompositeOperation = "copy", t.fillStyle = r6, t.fillRect(i36, n26, s18, h11), t.restore();
}
function H(t, i37, n27, s19, h12, r7, e4) {
    t.save(), t.globalCompositeOperation = "copy";
    var u2 = t.createLinearGradient(0, 0, 0, h12);
    u2.addColorStop(0, r7), u2.addColorStop(1, e4), t.fillStyle = u2, t.fillRect(i37, n27, s19, h12), t.restore();
}
var Y, $ = function() {
    function t13(t, i38) {
        this.Z(t, i38);
    }
    return t13.prototype.Z = function(t, i39) {
        this.Bt = t, this.Xt = i39;
    }, t13.prototype.H = function(t, i40, n28, s20, h13, r8) {
        if (this.Bt.yt) {
            t.font = i40.T;
            var e5 = this.Bt.Zt || !this.Bt.Jt ? i40.C : 0, u3 = i40.N, a3 = i40.O, o3 = i40.B, l3 = i40.L, f2 = i40.F, c1 = this.Bt.Gt, v1 = Math.ceil(n28.Qt(t, c1)), _1 = i40.V, d1 = i40.S + a3 + o3, w1 = Math.ceil(.5 * d1), M1 = u3 + v1 + l3 + f2 + e5, b1 = this.Xt.ti;
            this.Xt.ii && (b1 = this.Xt.ii);
            var m1, p1, g1 = (b1 = Math.round(b1)) - w1, y1 = g1 + d1, k1 = "right" === h13, N1 = k1 ? s20 : 0, x1 = Math.ceil(s20 * r8), C1 = N1;
            if (t.fillStyle = this.Xt.t, t.lineWidth = 1, t.lineCap = "butt", c1) {
                k1 ? (m1 = N1 - e5, p1 = (C1 = N1 - M1) + f2) : (C1 = N1 + M1, m1 = N1 + e5, p1 = N1 + u3 + e5 + l3);
                var S1 = Math.max(1, Math.floor(r8)), T1 = Math.max(1, Math.floor(u3 * r8)), D1 = k1 ? x1 : 0, A1 = Math.round(g1 * r8), B1 = Math.round(C1 * r8), L1 = Math.round(b1 * r8) - Math.floor(.5 * r8), E1 = L1 + S1 + (L1 - A1), F1 = Math.round(m1 * r8);
                t.save(), t.beginPath(), t.moveTo(D1, A1), t.lineTo(B1, A1), t.lineTo(B1, E1), t.lineTo(D1, E1), t.fill(), t.fillStyle = this.Bt.Tt, t.fillRect(k1 ? x1 - T1 : 0, A1, T1, E1 - A1), this.Bt.Zt && (t.fillStyle = this.Xt.A, t.fillRect(D1, L1, F1 - D1, S1)), t.textAlign = "left", t.fillStyle = this.Xt.A, q(t, r8, function() {
                    t.fillText(c1, p1, y1 - o3 - _1);
                }), t.restore();
            }
        }
    }, t13.prototype.Yt = function(t, i) {
        return this.Bt.yt ? t.S + t.O + t.B : 0;
    }, t13;
}(), K = function() {
    function t14(t) {
        this.ni = {
            ti: 0,
            A: "#FFF",
            t: "#000"
        }, this.si = {
            Gt: "",
            yt: !1,
            Zt: !0,
            Jt: !1,
            Tt: ""
        }, this.hi = {
            Gt: "",
            yt: !1,
            Zt: !1,
            Jt: !0,
            Tt: ""
        }, this.ft = !0, this.ri = new (t || $)(this.si, this.ni), this.ei = new (t || $)(this.hi, this.ni);
    }
    return t14.prototype.Gt = function() {
        return this.ui(), this.si.Gt;
    }, t14.prototype.ti = function() {
        return this.ui(), this.ni.ti;
    }, t14.prototype.vt = function() {
        this.ft = !0;
    }, t14.prototype.Yt = function(t, i41) {
        return void 0 === i41 && (i41 = !1), Math.max(this.ri.Yt(t, i41), this.ei.Yt(t, i41));
    }, t14.prototype.ai = function() {
        return this.ni.ii || 0;
    }, t14.prototype.oi = function(t) {
        this.ni.ii = t;
    }, t14.prototype.li = function() {
        return this.ui(), this.si.yt || this.hi.yt;
    }, t14.prototype.fi = function() {
        return this.ui(), this.si.yt;
    }, t14.prototype.dt = function(t) {
        return this.ui(), this.si.Zt = this.si.Zt && t.W().drawTicks, this.hi.Zt = this.hi.Zt && t.W().drawTicks, this.ri.Z(this.si, this.ni), this.ei.Z(this.hi, this.ni), this.ri;
    }, t14.prototype.ci = function() {
        return this.ui(), this.ri.Z(this.si, this.ni), this.ei.Z(this.hi, this.ni), this.ei;
    }, t14.prototype.ui = function() {
        this.ft && (this.si.Zt = !0, this.hi.Zt = !1, this.vi(this.si, this.hi, this.ni));
    }, t14;
}(), X = function(t15) {
    function i42(i43, n29, s21) {
        var h14 = t15.call(this) || this;
        return h14.Rt = i43, h14._i = n29, h14.di = s21, h14;
    }
    return m(i42, t15), i42.prototype.vi = function(t, i, n30) {
        t.yt = !1;
        var s22 = this.Rt.W().horzLine;
        if (s22.labelVisible) {
            var h15 = this._i.kt();
            if (this.Rt.yt() && !this._i.wi() && null !== h15) {
                var r9 = M(s22.labelBackgroundColor);
                n30.t = r9.t, n30.A = r9.i;
                var e6 = this.di(this._i);
                n30.ti = e6.ti, t.Gt = this._i.Mi(e6.et, h15), t.yt = !0;
            }
        }
    }, i42;
}(K), Z = /[1-9]/g, J = function() {
    function t16() {
        this.Bt = null;
    }
    return t16.prototype.Z = function(t) {
        this.Bt = t;
    }, t16.prototype.H = function(t, i44, n31) {
        var s23 = this;
        if (null !== this.Bt && !1 !== this.Bt.yt && 0 !== this.Bt.Gt.length) {
            t.font = i44.T;
            var h16 = Math.round(i44.bi.Qt(t, this.Bt.Gt, Z));
            if (!(h16 <= 0)) {
                t.save();
                var r10 = i44.mi, e7 = h16 + 2 * r10, a4 = e7 / 2, o4 = this.Bt.Ht, l4 = this.Bt.ti, f3 = Math.floor(l4 - a4) + .5;
                f3 < 0 ? (l4 += Math.abs(0 - f3), f3 = Math.floor(l4 - a4) + .5) : f3 + e7 > o4 && (l4 -= Math.abs(o4 - (f3 + e7)), f3 = Math.floor(l4 - a4) + .5);
                var c2 = f3 + e7, v2 = 0 + i44.N + i44.O + i44.S + i44.B;
                t.fillStyle = this.Bt.t;
                var _2 = Math.round(f3 * n31), d2 = Math.round(0 * n31), w2 = Math.round(c2 * n31), M2 = Math.round(v2 * n31);
                t.fillRect(_2, d2, w2 - _2, M2 - d2);
                var b2 = Math.round(this.Bt.ti * n31), m2 = d2, p2 = Math.round((m2 + i44.N + i44.C) * n31);
                t.fillStyle = this.Bt.A;
                var g2 = Math.max(1, Math.floor(n31)), y2 = Math.floor(.5 * n31);
                t.fillRect(b2 - y2, m2, g2, p2 - m2);
                var k2 = v2 - i44.V - i44.B;
                t.textAlign = "left", t.fillStyle = this.Bt.A, q(t, n31, function() {
                    t.fillText(u(s23.Bt).Gt, f3 + r10, k2);
                }), t.restore();
            }
        }
    }, t16;
}(), G = function() {
    function t17(t, i45, n32) {
        this.ft = !0, this.zt = new J, this.Wt = {
            yt: !1,
            t: "#4c525e",
            A: "white",
            Gt: "",
            Ht: 0,
            ti: NaN
        }, this.ct = t, this.pi = i45, this.di = n32;
    }
    return t17.prototype.vt = function() {
        this.ft = !0;
    }, t17.prototype.dt = function() {
        return this.ft && (this.wt(), this.ft = !1), this.zt.Z(this.Wt), this.zt;
    }, t17.prototype.wt = function() {
        var t = this.Wt;
        t.yt = !1;
        var i46 = this.ct.W().vertLine;
        if (i46.labelVisible) {
            var n33 = this.pi.bt();
            if (!n33.wi()) {
                var s24 = n33.gi(this.ct.Mt());
                t.Ht = n33.Ht();
                var h17 = this.di();
                if (h17.rt) {
                    t.ti = h17.ti, t.Gt = n33.yi(u(s24)), t.yt = !0;
                    var r11 = M(i46.labelBackgroundColor);
                    t.t = r11.t, t.A = r11.i;
                }
            }
        }
    }, t17;
}(), Q = function() {
    function t18() {
        this.ki = null, this.Ni = 0;
    }
    return t18.prototype.xi = function() {
        return this.Ni;
    }, t18.prototype.Ci = function(t) {
        this.Ni = t;
    }, t18.prototype.Ct = function() {
        return this.ki;
    }, t18.prototype.Si = function(t) {
        this.ki = t;
    }, t18.prototype.Ti = function() {
        return [];
    }, t18.prototype.yt = function() {
        return !0;
    }, t18;
}();
!function(t) {
    t[t.Normal = 0] = "Normal", t[t.Magnet = 1] = "Magnet";
}(Y || (Y = {}));
var tt = function(t19) {
    function i47(i48, n34) {
        var s25 = t19.call(this) || this;
        s25.Di = null, s25.Ai = NaN, s25.Bi = 0, s25.Li = !0, s25.Ei = new Map, s25.Fi = !1, s25.Oi = NaN, s25.Vi = NaN, s25.Pi = NaN, s25.Wi = NaN, s25.pi = i48, s25.zi = n34, s25.Ri = new z(i48, s25);
        var h18, r12;
        s25.Ii = (h18 = function() {
            return s25.Ai;
        }, r12 = function() {
            return s25.Vi;
        }, function(t) {
            var i49 = r12(), n35 = h18();
            if (t === u(s25.Di).ji()) return {
                et: n35,
                ti: i49
            };
            var e9 = u(t.kt());
            return {
                et: t.qi(i49, e9),
                ti: i49
            };
        });
        var e8 = function(t, i50) {
            return function() {
                return {
                    rt: s25.pi.bt().gi(t()),
                    ti: i50()
                };
            };
        }(function() {
            return s25.Bi;
        }, function() {
            return s25.$t();
        });
        return s25.Ui = new G(s25, i48, e8), s25.Hi = new I(s25), s25;
    }
    return m(i47, t19), i47.prototype.W = function() {
        return this.zi;
    }, i47.prototype.Yi = function(t, i51) {
        this.Pi = t, this.Wi = i51;
    }, i47.prototype.$i = function() {
        this.Pi = NaN, this.Wi = NaN;
    }, i47.prototype.Ki = function() {
        return this.Pi;
    }, i47.prototype.Xi = function() {
        return this.Wi;
    }, i47.prototype.Zi = function(t, i52, n36) {
        this.Fi || (this.Fi = !0), this.Li = !0, this.Ji(t, i52, n36);
    }, i47.prototype.Mt = function() {
        return this.Bi;
    }, i47.prototype.$t = function() {
        return this.Oi;
    }, i47.prototype.Kt = function() {
        return this.Vi;
    }, i47.prototype.yt = function() {
        return this.Li;
    }, i47.prototype.Gi = function() {
        this.Li = !1, this.Qi(), this.Ai = NaN, this.Oi = NaN, this.Vi = NaN, this.Di = null, this.$i();
    }, i47.prototype.tn = function(t) {
        return null !== this.Di ? [
            this.Hi,
            this.Ri
        ] : [];
    }, i47.prototype.qt = function(t) {
        return t === this.Di && this.zi.horzLine.visible;
    }, i47.prototype.Ut = function() {
        return this.zi.vertLine.visible;
    }, i47.prototype.nn = function(t, i53) {
        this.Li && this.Di === t || this.Ei.clear();
        var n37 = [];
        return this.Di === t && n37.push(this.sn(this.Ei, i53, this.Ii)), n37;
    }, i47.prototype.Ti = function() {
        return this.Li ? [
            this.Ui
        ] : [];
    }, i47.prototype.It = function() {
        return this.Di;
    }, i47.prototype.hn = function() {
        this.Hi.vt(), this.Ei.forEach(function(t) {
            return t.vt();
        }), this.Ui.vt(), this.Ri.vt();
    }, i47.prototype.rn = function(t) {
        return t && !t.ji().wi() ? t.ji() : null;
    }, i47.prototype.Ji = function(t, i54, n38) {
        this.en(t, i54, n38) && this.hn();
    }, i47.prototype.en = function(t, i55, n39) {
        var s26 = this.Oi, h19 = this.Vi, r13 = this.Ai, e10 = this.Bi, u4 = this.Di, a5 = this.rn(n39);
        this.Bi = t, this.Oi = isNaN(t) ? NaN : this.pi.bt().At(t), this.Di = n39;
        var o5 = null !== a5 ? a5.kt() : null;
        return null !== a5 && null !== o5 ? (this.Ai = i55, this.Vi = a5.xt(i55, o5)) : (this.Ai = NaN, this.Vi = NaN), s26 !== this.Oi || h19 !== this.Vi || e10 !== this.Bi || r13 !== this.Ai || u4 !== this.Di;
    }, i47.prototype.Qi = function() {
        var t20 = this.pi._t().map(function(t) {
            return t.an().un();
        }).filter(D), i56 = 0 === t20.length ? null : Math.max.apply(Math, t20);
        this.Bi = null !== i56 ? i56 : NaN;
    }, i47.prototype.sn = function(t, i57, n40) {
        var s27 = t.get(i57);
        return void 0 === s27 && (s27 = new X(this, i57, n40), t.set(i57, s27)), s27;
    }, i47;
}(Q);
function it(t) {
    return "left" === t || "right" === t;
}
var nt = function() {
    function t21(t) {
        this.on = new Map, this.ln = [], this.fn = t;
    }
    return t21.prototype.cn = function(t22, i58) {
        var n41 = function(t, i59) {
            return void 0 === t ? i59 : {
                vn: Math.max(t.vn, i59.vn),
                _n: t._n || i59._n
            };
        }(this.on.get(t22), i58);
        this.on.set(t22, n41);
    }, t21.prototype.dn = function() {
        return this.fn;
    }, t21.prototype.wn = function(t) {
        var i60 = this.on.get(t);
        return void 0 === i60 ? {
            vn: this.fn
        } : {
            vn: Math.max(this.fn, i60.vn),
            _n: i60._n
        };
    }, t21.prototype.Mn = function() {
        this.ln = [
            {
                bn: 0
            }
        ];
    }, t21.prototype.mn = function(t) {
        this.ln = [
            {
                bn: 1,
                St: t
            }
        ];
    }, t21.prototype.pn = function() {
        this.ln = [
            {
                bn: 4
            }
        ];
    }, t21.prototype.gn = function(t) {
        this.ln.push({
            bn: 2,
            St: t
        });
    }, t21.prototype.yn = function(t) {
        this.ln.push({
            bn: 3,
            St: t
        });
    }, t21.prototype.kn = function() {
        return this.ln;
    }, t21.prototype.Nn = function(t23) {
        for(var i61 = this, n42 = 0, s28 = t23.ln; n42 < s28.length; n42++){
            var h20 = s28[n42];
            this.xn(h20);
        }
        this.fn = Math.max(this.fn, t23.fn), t23.on.forEach(function(t, n43) {
            i61.cn(n43, t);
        });
    }, t21.prototype.xn = function(t) {
        switch(t.bn){
            case 0:
                this.Mn();
                break;
            case 1:
                this.mn(t.St);
                break;
            case 2:
                this.gn(t.St);
                break;
            case 3:
                this.yn(t.St);
                break;
            case 4:
                this.pn();
        }
    }, t21;
}(), st = ".";
function ht(t, i62) {
    if (!N(t)) return "n/a";
    if (!x(i62)) throw new TypeError("invalid length");
    if (i62 < 0 || i62 > 16) throw new TypeError("invalid length");
    if (0 === i62) return t.toString();
    return ("0000000000000000" + t.toString()).slice(-i62);
}
var rt = function() {
    function t24(t, i63) {
        if (i63 || (i63 = 1), N(t) && x(t) || (t = 100), t < 0) throw new TypeError("invalid base");
        this._i = t, this.Cn = i63, this.Sn();
    }
    return t24.prototype.format = function(t) {
        var i64 = t < 0 ? "\u2212" : "";
        return t = Math.abs(t), i64 + this.Tn(t);
    }, t24.prototype.Sn = function() {
        if (this.Dn = 0, this._i > 0 && this.Cn > 0) for(var t = this._i; t > 1;)t /= 10, this.Dn++;
    }, t24.prototype.Tn = function(t) {
        var i65 = this._i / this.Cn, n44 = Math.floor(t), s29 = "", h21 = void 0 !== this.Dn ? this.Dn : NaN;
        if (i65 > 1) {
            var r14 = +(Math.round(t * i65) - n44 * i65).toFixed(this.Dn);
            r14 >= i65 && (r14 -= i65, n44 += 1), s29 = st + ht(+r14.toFixed(this.Dn) * this.Cn, h21);
        } else n44 = Math.round(n44 * i65) / i65, h21 > 0 && (s29 = st + ht(0, h21));
        return n44.toFixed(0) + s29;
    }, t24;
}(), et = function(t) {
    function i66(i67) {
        return void 0 === i67 && (i67 = 100), t.call(this, i67) || this;
    }
    return m(i66, t), i66.prototype.format = function(i68) {
        return "".concat(t.prototype.format.call(this, i68), "%");
    }, i66;
}(rt), ut = function() {
    function t25(t) {
        this.An = t;
    }
    return t25.prototype.format = function(t) {
        var i69 = "";
        return t < 0 && (i69 = "-", t = -t), t < 995 ? i69 + this.Bn(t) : t < 999995 ? i69 + this.Bn(t / 1e3) + "K" : t < 999999995 ? (t = 1e3 * Math.round(t / 1e3), i69 + this.Bn(t / 1e6) + "M") : (t = 1e6 * Math.round(t / 1e6), i69 + this.Bn(t / 1e9) + "B");
    }, t25.prototype.Bn = function(t) {
        var i70 = Math.pow(10, this.An);
        return ((t = Math.round(t * i70) / i70) >= 1e-15 && t < 1 ? t.toFixed(this.An).replace(/\.?0+$/, "") : String(t)).replace(/(\.[1-9]*)0+$/, function(t, i71) {
            return i71;
        });
    }, t25;
}();
function at(t, i72, n45, s30) {
    if (0 !== i72.length) {
        var h22 = i72[s30.from].tt, r15 = i72[s30.from].it;
        t.moveTo(h22, r15);
        for(var e11 = s30.from + 1; e11 < s30.to; ++e11){
            var u5 = i72[e11];
            if (1 === n45) {
                var a6 = i72[e11 - 1].it, o6 = u5.tt;
                t.lineTo(o6, a6);
            }
            t.lineTo(u5.tt, u5.it);
        }
    }
}
var ot = function(t26) {
    function i73() {
        var i74 = null !== t26 && t26.apply(this, arguments) || this;
        return i74.X = null, i74;
    }
    return m(i73, t26), i73.prototype.Z = function(t) {
        this.X = t;
    }, i73.prototype.Y = function(t) {
        if (null !== this.X && 0 !== this.X.G.length && null !== this.X.J) {
            if (t.lineCap = "butt", t.lineJoin = "round", t.lineWidth = this.X.Vt, s(t, this.X.Pt), t.lineWidth = 1, t.beginPath(), 1 === this.X.G.length) {
                var i75 = this.X.G[0], n46 = this.X.Ln / 2;
                t.moveTo(i75.tt - n46, this.X.En), t.lineTo(i75.tt - n46, i75.it), t.lineTo(i75.tt + n46, i75.it), t.lineTo(i75.tt + n46, this.X.En);
            } else t.moveTo(this.X.G[this.X.J.from].tt, this.X.En), t.lineTo(this.X.G[this.X.J.from].tt, this.X.G[this.X.J.from].it), at(t, this.X.G, this.X.Fn, this.X.J), this.X.J.to > this.X.J.from && (t.lineTo(this.X.G[this.X.J.to - 1].tt, this.X.En), t.lineTo(this.X.G[this.X.J.from].tt, this.X.En));
            t.closePath(), t.fillStyle = this.On(t), t.fill();
        }
    }, i73;
}(O), lt = function(t27) {
    function i76() {
        return null !== t27 && t27.apply(this, arguments) || this;
    }
    return m(i76, t27), i76.prototype.On = function(t) {
        var i77 = this.X, n47 = t.createLinearGradient(0, 0, 0, i77.Vn);
        return n47.addColorStop(0, i77.Pn), n47.addColorStop(1, i77.Wn), n47;
    }, i76;
}(ot), ft = function(t28) {
    function i78() {
        var i79 = null !== t28 && t28.apply(this, arguments) || this;
        return i79.X = null, i79;
    }
    return m(i78, t28), i78.prototype.Z = function(t) {
        this.X = t;
    }, i78.prototype.Y = function(t) {
        if (null !== this.X && 0 !== this.X.G.length && null !== this.X.J) {
            if (t.lineCap = "butt", t.lineWidth = this.X.Vt, s(t, this.X.Pt), t.strokeStyle = this.zn(t), t.lineJoin = "round", 1 === this.X.G.length) {
                t.beginPath();
                var i80 = this.X.G[0];
                t.moveTo(i80.tt - this.X.Ln / 2, i80.it), t.lineTo(i80.tt + this.X.Ln / 2, i80.it), void 0 !== i80.A && (t.strokeStyle = i80.A), t.stroke();
            } else this.Rn(t, this.X);
        }
    }, i78.prototype.Rn = function(t, i81) {
        t.beginPath(), at(t, i81.G, i81.Fn, i81.J), t.stroke();
    }, i78;
}(O), ct = function(t29) {
    function i82() {
        return null !== t29 && t29.apply(this, arguments) || this;
    }
    return m(i82, t29), i82.prototype.Rn = function(t, i83) {
        var n48, s31, h23 = i83.G, r16 = i83.J, e12 = i83.Fn, u6 = i83.ht;
        if (0 !== h23.length && null !== r16) {
            t.beginPath();
            var a7 = h23[r16.from];
            t.moveTo(a7.tt, a7.it);
            var o7 = null !== (n48 = a7.A) && void 0 !== n48 ? n48 : u6;
            t.strokeStyle = o7;
            for(var l5 = function(i84) {
                t.stroke(), t.beginPath(), t.strokeStyle = i84, o7 = i84;
            }, f4 = r16.from + 1; f4 < r16.to; ++f4){
                var c3 = h23[f4], v3 = h23[f4 - 1], _3 = null !== (s31 = c3.A) && void 0 !== s31 ? s31 : u6;
                1 === e12 && (t.lineTo(c3.tt, v3.it), _3 !== o7 && (l5(_3), t.moveTo(c3.tt, v3.it))), t.lineTo(c3.tt, c3.it), 1 !== e12 && _3 !== o7 && (l5(_3), t.moveTo(c3.tt, c3.it));
            }
            t.stroke();
        }
    }, i82.prototype.zn = function() {
        return this.X.ht;
    }, i82;
}(ft);
function vt(t, i85, n49, s32, h24) {
    void 0 === s32 && (s32 = 0), void 0 === h24 && (h24 = t.length);
    for(var r17 = h24 - s32; 0 < r17;){
        var e13 = r17 >> 1, u7 = s32 + e13;
        n49(t[u7], i85) ? (s32 = u7 + 1, r17 -= e13 + 1) : r17 = e13;
    }
    return s32;
}
function _t(t, i86, n50, s33, h25) {
    void 0 === s33 && (s33 = 0), void 0 === h25 && (h25 = t.length);
    for(var r18 = h25 - s33; 0 < r18;){
        var e14 = r18 >> 1, u8 = s33 + e14;
        n50(i86, t[u8]) ? r18 = e14 : (s33 = u8 + 1, r18 -= e14 + 1);
    }
    return s33;
}
function dt(t, i87) {
    return t.rt < i87;
}
function wt(t, i88) {
    return t < i88.rt;
}
function Mt(t, i89, n51) {
    var s34 = i89.In(), h26 = i89.jn(), r19 = vt(t, s34, dt), e15 = _t(t, h26, wt);
    if (!n51) return {
        from: r19,
        to: e15
    };
    var u9 = r19, a8 = e15;
    return r19 > 0 && r19 < t.length && t[r19].rt >= s34 && (u9 = r19 - 1), e15 > 0 && e15 < t.length && t[e15 - 1].rt <= h26 && (a8 = e15 + 1), {
        from: u9,
        to: a8
    };
}
var bt = function() {
    function t30(t, i90, n52) {
        this.qn = !0, this.Un = !0, this.Hn = !0, this.Yn = [], this.$n = null, this.Kn = t, this.Xn = i90, this.Zn = n52;
    }
    return t30.prototype.vt = function(t) {
        this.qn = !0, "data" === t && (this.Un = !0), "options" === t && (this.Hn = !0);
    }, t30.prototype.Jn = function() {
        this.Un && (this.Gn(), this.Un = !1), this.qn && (this.Qn(), this.qn = !1), this.Hn && (this.ts(), this.Hn = !1);
    }, t30.prototype.ns = function() {
        this.$n = null;
    }, t30.prototype.Qn = function() {
        var t = this.Kn.Ct(), i91 = this.Xn.bt();
        if (this.ns(), !i91.wi() && !t.wi()) {
            var n53 = i91.ss();
            if (null !== n53 && 0 !== this.Kn.an().hs()) {
                var s35 = this.Kn.kt();
                null !== s35 && (this.$n = Mt(this.Yn, n53, this.Zn), this.rs(t, i91, s35.St));
            }
        }
    }, t30;
}(), mt = function(t31) {
    function i92(i93, n54) {
        return t31.call(this, i93, n54, !0) || this;
    }
    return m(i92, t31), i92.prototype.rs = function(t, i94, n55) {
        i94.es(this.Yn, A(this.$n)), t.us(this.Yn, n55, A(this.$n));
    }, i92.prototype.os = function(t, i95) {
        return {
            rt: t,
            et: i95,
            tt: NaN,
            it: NaN
        };
    }, i92.prototype.ts = function() {}, i92.prototype.Gn = function() {
        var t = this, i96 = this.Kn.ls();
        this.Yn = this.Kn.an().fs().map(function(n56) {
            var s36 = n56.St[3];
            return t.cs(n56.vs, s36, i96);
        });
    }, i92;
}(bt), pt = function(t32) {
    function i97(i98, n57) {
        var s37 = t32.call(this, i98, n57) || this;
        return s37.zt = new F, s37._s = new lt, s37.ds = new ct, s37.zt.U([
            s37._s,
            s37.ds
        ]), s37;
    }
    return m(i97, t32), i97.prototype.dt = function(t, i) {
        if (!this.Kn.yt()) return null;
        var n58 = this.Kn.W();
        return this.Jn(), this._s.Z({
            Fn: n58.lineType,
            G: this.Yn,
            Pt: n58.lineStyle,
            Vt: n58.lineWidth,
            Pn: n58.topColor,
            Wn: n58.bottomColor,
            En: t,
            Vn: t,
            J: this.$n,
            Ln: this.Xn.bt().ws()
        }), this.ds.Z({
            Fn: n58.lineType,
            G: this.Yn,
            ht: n58.lineColor,
            Pt: n58.lineStyle,
            Vt: n58.lineWidth,
            J: this.$n,
            Ln: this.Xn.bt().ws()
        }), this.zt;
    }, i97.prototype.cs = function(t, i99) {
        return this.os(t, i99);
    }, i97;
}(mt);
var gt = function() {
    function t33() {
        this.Bt = null, this.Ms = 0, this.bs = 0;
    }
    return t33.prototype.Z = function(t) {
        this.Bt = t;
    }, t33.prototype.H = function(t, i100, n, s) {
        if (null !== this.Bt && 0 !== this.Bt.an.length && null !== this.Bt.J) {
            if (this.Ms = this.ps(i100), this.Ms >= 2) Math.max(1, Math.floor(i100)) % 2 != this.Ms % 2 && this.Ms--;
            this.bs = this.Bt.gs ? Math.min(this.Ms, Math.floor(i100)) : this.Ms;
            for(var h27 = null, r20 = this.bs <= this.Ms && this.Bt.ws >= Math.floor(1.5 * i100), e16 = this.Bt.J.from; e16 < this.Bt.J.to; ++e16){
                var u10 = this.Bt.an[e16];
                h27 !== u10.A && (t.fillStyle = u10.A, h27 = u10.A);
                var a9 = Math.floor(.5 * this.bs), o8 = Math.round(u10.tt * i100), l6 = o8 - a9, f5 = this.bs, c4 = l6 + f5 - 1, v4 = Math.min(u10.ys, u10.ks), _4 = Math.max(u10.ys, u10.ks), d3 = Math.round(v4 * i100) - a9, w3 = Math.round(_4 * i100) + a9, M3 = Math.max(w3 - d3, this.bs);
                t.fillRect(l6, d3, f5, M3);
                var b3 = Math.ceil(1.5 * this.Ms);
                if (r20) {
                    if (this.Bt.Ns) {
                        var m3 = o8 - b3, p3 = Math.max(d3, Math.round(u10.xs * i100) - a9), g3 = p3 + f5 - 1;
                        g3 > d3 + M3 - 1 && (p3 = (g3 = d3 + M3 - 1) - f5 + 1), t.fillRect(m3, p3, l6 - m3, g3 - p3 + 1);
                    }
                    var y3 = o8 + b3, k3 = Math.max(d3, Math.round(u10.Cs * i100) - a9), N2 = k3 + f5 - 1;
                    N2 > d3 + M3 - 1 && (k3 = (N2 = d3 + M3 - 1) - f5 + 1), t.fillRect(c4 + 1, k3, y3 - c4, N2 - k3 + 1);
                }
            }
        }
    }, t33.prototype.ps = function(t34) {
        var i101 = Math.floor(t34);
        return Math.max(i101, Math.floor(function(t, i102) {
            return Math.floor(.3 * t * i102);
        }(u(this.Bt).ws, t34)));
    }, t33;
}(), yt = function(t35) {
    function i103(i104, n59) {
        return t35.call(this, i104, n59, !1) || this;
    }
    return m(i103, t35), i103.prototype.rs = function(t, i105, n60) {
        i105.es(this.Yn, A(this.$n)), t.Ss(this.Yn, n60, A(this.$n));
    }, i103.prototype.Ts = function(t, i106, n) {
        return {
            rt: t,
            open: i106.St[0],
            high: i106.St[1],
            low: i106.St[2],
            close: i106.St[3],
            tt: NaN,
            xs: NaN,
            ys: NaN,
            ks: NaN,
            Cs: NaN
        };
    }, i103.prototype.Gn = function() {
        var t = this, i107 = this.Kn.ls();
        this.Yn = this.Kn.an().fs().map(function(n61) {
            return t.cs(n61.vs, n61, i107);
        });
    }, i103;
}(bt), kt = function(t36) {
    function i108() {
        var i109 = null !== t36 && t36.apply(this, arguments) || this;
        return i109.zt = new gt, i109;
    }
    return m(i108, t36), i108.prototype.dt = function(t, i) {
        if (!this.Kn.yt()) return null;
        var n62 = this.Kn.W();
        this.Jn();
        var s38 = {
            an: this.Yn,
            ws: this.Xn.bt().ws(),
            Ns: n62.openVisible,
            gs: n62.thinBars,
            J: this.$n
        };
        return this.zt.Z(s38), this.zt;
    }, i108.prototype.ts = function() {
        var t = this;
        this.Yn.forEach(function(i110) {
            i110.A = t.Kn.ls().As(i110.rt).Ds;
        });
    }, i108.prototype.cs = function(t, i111, n63) {
        return p(p({}, this.Ts(t, i111, n63)), {
            A: n63.As(t).Ds
        });
    }, i108;
}(yt);
function Nt(t, i112, n64) {
    return Math.min(Math.max(t, i112), n64);
}
function xt(t, i113, n65) {
    return i113 - t <= n65;
}
function Ct(t) {
    return t <= 0 ? NaN : Math.log(t) / Math.log(10);
}
function St(t) {
    var i114 = Math.ceil(t);
    return i114 % 2 != 0 ? i114 - 1 : i114;
}
function Tt(t) {
    var i115 = Math.ceil(t);
    return i115 % 2 == 0 ? i115 - 1 : i115;
}
var Dt = function(t37) {
    function i116() {
        return null !== t37 && t37.apply(this, arguments) || this;
    }
    return m(i116, t37), i116.prototype.On = function(t) {
        var i117 = this.X, n66 = t.createLinearGradient(0, 0, 0, i117.Vn), s39 = Nt(i117.En / i117.Vn, 0, 1);
        return n66.addColorStop(0, i117.Bs), n66.addColorStop(s39, i117.Ls), n66.addColorStop(s39, i117.Es), n66.addColorStop(1, i117.Fs), n66;
    }, i116;
}(ot), At = function(t38) {
    function i118() {
        return null !== t38 && t38.apply(this, arguments) || this;
    }
    return m(i118, t38), i118.prototype.zn = function(t) {
        var i119 = this.X, n67 = t.createLinearGradient(0, 0, 0, i119.Vn), s40 = Nt(i119.En / i119.Vn, 0, 1);
        return n67.addColorStop(0, i119.Pn), n67.addColorStop(s40, i119.Pn), n67.addColorStop(s40, i119.Wn), n67.addColorStop(1, i119.Wn), n67;
    }, i118;
}(ft), Bt = function(t39) {
    function i120(i121, n68) {
        var s41 = t39.call(this, i121, n68) || this;
        return s41.Os = new Dt, s41.Vs = new At, s41.ut = new F, s41.ut.U([
            s41.Os,
            s41.Vs
        ]), s41;
    }
    return m(i120, t39), i120.prototype.dt = function(t, i) {
        if (!this.Kn.yt()) return null;
        var n69 = this.Kn.kt();
        if (null === n69) return null;
        var s42 = this.Kn.W();
        this.Jn();
        var h28 = this.Kn.Ct().xt(s42.baseValue.price, n69.St), r21 = this.Xn.bt().ws();
        return this.Os.Z({
            G: this.Yn,
            Bs: s42.topFillColor1,
            Ls: s42.topFillColor2,
            Es: s42.bottomFillColor1,
            Fs: s42.bottomFillColor2,
            Vt: s42.lineWidth,
            Pt: s42.lineStyle,
            Fn: 0,
            En: h28,
            Vn: t,
            J: this.$n,
            Ln: r21
        }), this.Vs.Z({
            G: this.Yn,
            Pn: s42.topLineColor,
            Wn: s42.bottomLineColor,
            Vt: s42.lineWidth,
            Pt: s42.lineStyle,
            Fn: 0,
            En: h28,
            Vn: t,
            J: this.$n,
            Ln: r21
        }), this.ut;
    }, i120.prototype.cs = function(t, i122) {
        return this.os(t, i122);
    }, i120;
}(mt), Lt = function() {
    function t40() {
        this.Bt = null, this.Ms = 0;
    }
    return t40.prototype.Z = function(t) {
        this.Bt = t;
    }, t40.prototype.H = function(t41, i123, n70, s43) {
        if (null !== this.Bt && 0 !== this.Bt.an.length && null !== this.Bt.J) {
            if (this.Ms = function(t, i124) {
                if (t >= 2.5 && t <= 4) return Math.floor(3 * i124);
                var n71 = 1 - .2 * Math.atan(Math.max(4, t) - 4) / (.5 * Math.PI), s44 = Math.floor(t * n71 * i124), h31 = Math.floor(t * i124), r24 = Math.min(s44, h31);
                return Math.max(Math.floor(i124), r24);
            }(this.Bt.ws, i123), this.Ms >= 2) Math.floor(i123) % 2 != this.Ms % 2 && this.Ms--;
            var h29 = this.Bt.an;
            this.Bt.Ps && this.Ws(t41, h29, this.Bt.J, i123), this.Bt.zs && this.Rs(t41, h29, this.Bt.J, this.Bt.ws, i123);
            var r22 = this.Is(i123);
            (!this.Bt.zs || this.Ms > 2 * r22) && this.js(t41, h29, this.Bt.J, i123);
        }
    }, t40.prototype.Ws = function(t, i125, n72, s45) {
        if (null !== this.Bt) {
            var h32 = "", r25 = Math.min(Math.floor(s45), Math.floor(this.Bt.ws * s45));
            r25 = Math.max(Math.floor(s45), Math.min(r25, this.Ms));
            for(var e17 = Math.floor(.5 * r25), u11 = null, a10 = n72.from; a10 < n72.to; a10++){
                var o9 = i125[a10];
                o9.qs !== h32 && (t.fillStyle = o9.qs, h32 = o9.qs);
                var l7 = Math.round(Math.min(o9.xs, o9.Cs) * s45), f6 = Math.round(Math.max(o9.xs, o9.Cs) * s45), c5 = Math.round(o9.ys * s45), v5 = Math.round(o9.ks * s45), _5 = Math.round(s45 * o9.tt) - e17, d4 = _5 + r25 - 1;
                null !== u11 && (_5 = Math.max(u11 + 1, _5), _5 = Math.min(_5, d4));
                var w4 = d4 - _5 + 1;
                t.fillRect(_5, c5, w4, l7 - c5), t.fillRect(_5, f6 + 1, w4, v5 - f6), u11 = d4;
            }
        }
    }, t40.prototype.Is = function(t) {
        var i126 = Math.floor(1 * t);
        this.Ms <= 2 * i126 && (i126 = Math.floor(.5 * (this.Ms - 1)));
        var n73 = Math.max(Math.floor(t), i126);
        return this.Ms <= 2 * n73 ? Math.max(Math.floor(t), Math.floor(1 * t)) : n73;
    }, t40.prototype.Rs = function(t, i127, n74, s, h33) {
        if (null !== this.Bt) for(var r26 = "", e18 = this.Is(h33), u12 = null, a11 = n74.from; a11 < n74.to; a11++){
            var o10 = i127[a11];
            o10.Tt !== r26 && (t.fillStyle = o10.Tt, r26 = o10.Tt);
            var l8 = Math.round(o10.tt * h33) - Math.floor(.5 * this.Ms), f7 = l8 + this.Ms - 1, c6 = Math.round(Math.min(o10.xs, o10.Cs) * h33), v6 = Math.round(Math.max(o10.xs, o10.Cs) * h33);
            if (null !== u12 && (l8 = Math.max(u12 + 1, l8), l8 = Math.min(l8, f7)), this.Bt.ws * h33 > 2 * e18) j(t, l8, c6, f7 - l8 + 1, v6 - c6 + 1, e18);
            else {
                var _6 = f7 - l8 + 1;
                t.fillRect(l8, c6, _6, v6 - c6 + 1);
            }
            u12 = f7;
        }
    }, t40.prototype.js = function(t, i128, n75, s46) {
        if (null !== this.Bt) for(var h34 = "", r27 = this.Is(s46), e19 = n75.from; e19 < n75.to; e19++){
            var u13 = i128[e19], a12 = Math.round(Math.min(u13.xs, u13.Cs) * s46), o11 = Math.round(Math.max(u13.xs, u13.Cs) * s46), l9 = Math.round(u13.tt * s46) - Math.floor(.5 * this.Ms), f8 = l9 + this.Ms - 1;
            if (u13.A !== h34) {
                var c7 = u13.A;
                t.fillStyle = c7, h34 = c7;
            }
            this.Bt.zs && (l9 += r27, a12 += r27, f8 -= r27, o11 -= r27), a12 > o11 || t.fillRect(l9, a12, f8 - l9 + 1, o11 - a12 + 1);
        }
    }, t40;
}(), Et = function(t42) {
    function i129() {
        var i130 = null !== t42 && t42.apply(this, arguments) || this;
        return i130.zt = new Lt, i130;
    }
    return m(i129, t42), i129.prototype.dt = function(t, i) {
        if (!this.Kn.yt()) return null;
        var n76 = this.Kn.W();
        this.Jn();
        var s47 = {
            an: this.Yn,
            ws: this.Xn.bt().ws(),
            Ps: n76.wickVisible,
            zs: n76.borderVisible,
            J: this.$n
        };
        return this.zt.Z(s47), this.zt;
    }, i129.prototype.ts = function() {
        var t = this;
        this.Yn.forEach(function(i131) {
            var n77 = t.Kn.ls().As(i131.rt);
            i131.A = n77.Ds, i131.qs = n77.Us, i131.Tt = n77.Hs;
        });
    }, i129.prototype.cs = function(t, i132, n78) {
        var s48 = n78.As(t);
        return p(p({}, this.Ts(t, i132, n78)), {
            A: s48.Ds,
            qs: s48.Us,
            Tt: s48.Hs
        });
    }, i129;
}(yt), Ft = function() {
    function t43() {
        this.Bt = null, this.Ys = [];
    }
    return t43.prototype.Z = function(t) {
        this.Bt = t, this.Ys = [];
    }, t43.prototype.H = function(t, i133, n, s) {
        if (null !== this.Bt && 0 !== this.Bt.G.length && null !== this.Bt.J) {
            this.Ys.length || this.$s(i133);
            for(var h35 = Math.max(1, Math.floor(i133)), r28 = Math.round(this.Bt.Ks * i133) - Math.floor(h35 / 2), e20 = r28 + h35, u14 = this.Bt.J.from; u14 < this.Bt.J.to; u14++){
                var a13 = this.Bt.G[u14], o12 = this.Ys[u14 - this.Bt.J.from], l10 = Math.round(a13.it * i133);
                t.fillStyle = a13.A;
                var f9 = void 0, c8 = void 0;
                l10 <= r28 ? (f9 = l10, c8 = e20) : (f9 = r28, c8 = l10 - Math.floor(h35 / 2) + h35), t.fillRect(o12.In, f9, o12.jn - o12.In + 1, c8 - f9);
            }
        }
    }, t43.prototype.$s = function(t) {
        if (null !== this.Bt && 0 !== this.Bt.G.length && null !== this.Bt.J) {
            var i134 = Math.ceil(this.Bt.ws * t) <= 1 ? 0 : Math.max(1, Math.floor(t)), n79 = Math.round(this.Bt.ws * t) - i134;
            this.Ys = new Array(this.Bt.J.to - this.Bt.J.from);
            for(var s49 = this.Bt.J.from; s49 < this.Bt.J.to; s49++){
                var h36, r29 = this.Bt.G[s49], e21 = Math.round(r29.tt * t), u15 = void 0, a14 = void 0;
                if (n79 % 2) u15 = e21 - (h36 = (n79 - 1) / 2), a14 = e21 + h36;
                else u15 = e21 - (h36 = n79 / 2), a14 = e21 + h36 - 1;
                this.Ys[s49 - this.Bt.J.from] = {
                    In: u15,
                    jn: a14,
                    Xs: e21,
                    Zs: r29.tt * t,
                    rt: r29.rt
                };
            }
            for(s49 = this.Bt.J.from + 1; s49 < this.Bt.J.to; s49++){
                var o13 = this.Ys[s49 - this.Bt.J.from], l11 = this.Ys[s49 - this.Bt.J.from - 1];
                o13.rt === l11.rt + 1 && o13.In - l11.jn !== i134 + 1 && (l11.Xs > l11.Zs ? l11.jn = o13.In - i134 - 1 : o13.In = l11.jn + i134 + 1);
            }
            var f10 = Math.ceil(this.Bt.ws * t);
            for(s49 = this.Bt.J.from; s49 < this.Bt.J.to; s49++){
                (o13 = this.Ys[s49 - this.Bt.J.from]).jn < o13.In && (o13.jn = o13.In);
                var c9 = o13.jn - o13.In + 1;
                f10 = Math.min(c9, f10);
            }
            if (i134 > 0 && f10 < 4) for(s49 = this.Bt.J.from; s49 < this.Bt.J.to; s49++)(c9 = (o13 = this.Ys[s49 - this.Bt.J.from]).jn - o13.In + 1) > f10 && (o13.Xs > o13.Zs ? o13.jn -= 1 : o13.In += 1);
        } else this.Ys = [];
    }, t43;
}();
function Ot(t) {
    return {
        G: [],
        ws: t,
        Ks: NaN,
        J: null
    };
}
function Vt(t, i135, n80) {
    return {
        rt: t,
        et: i135,
        tt: NaN,
        it: NaN,
        A: n80
    };
}
var Pt = function(t44) {
    function i136(i137, n81) {
        var s50 = t44.call(this, i137, n81, !1) || this;
        return s50.ut = new F, s50.Js = Ot(0), s50.zt = new Ft, s50;
    }
    return m(i136, t44), i136.prototype.dt = function(t, i) {
        return this.Kn.yt() ? (this.Jn(), this.ut) : null;
    }, i136.prototype.Gn = function() {
        var t = this.Xn.bt().ws();
        this.Js = Ot(t);
        for(var i138 = 0, n82 = 0, s51 = this.Kn.W().color, h37 = 0, r30 = this.Kn.an().fs(); h37 < r30.length; h37++){
            var e22 = r30[h37], u16 = e22.St[3], a15 = void 0 !== e22.A ? e22.A : s51, o14 = Vt(e22.vs, u16, a15);
            ++i138 < this.Js.G.length ? this.Js.G[i138] = o14 : this.Js.G.push(o14), this.Yn[n82++] = {
                rt: e22.vs,
                tt: 0
            };
        }
        this.zt.Z(this.Js), this.ut.U([
            this.zt
        ]);
    }, i136.prototype.ts = function() {}, i136.prototype.ns = function() {
        t44.prototype.ns.call(this), this.Js.J = null;
    }, i136.prototype.rs = function(t, i139, n83) {
        if (null !== this.$n) {
            var s52 = i139.ws(), h38 = u(i139.ss()), r31 = t.xt(this.Kn.W().base, n83);
            i139.es(this.Js.G), t.us(this.Js.G, n83), this.Js.Ks = r31, this.Js.J = Mt(this.Js.G, h38, !1), this.Js.ws = s52, this.zt.Z(this.Js);
        }
    }, i136;
}(bt), Wt = function(t45) {
    function i140(i141, n84) {
        var s53 = t45.call(this, i141, n84) || this;
        return s53.ds = new ct, s53;
    }
    return m(i140, t45), i140.prototype.dt = function(t, i) {
        if (!this.Kn.yt()) return null;
        var n85 = this.Kn.W();
        this.Jn();
        var s54 = {
            G: this.Yn,
            ht: n85.color,
            Pt: n85.lineStyle,
            Fn: n85.lineType,
            Vt: n85.lineWidth,
            J: this.$n,
            Ln: this.Xn.bt().ws()
        };
        return this.ds.Z(s54), this.ds;
    }, i140.prototype.ts = function() {
        var t = this;
        this.Yn.forEach(function(i142) {
            i142.A = t.Kn.ls().As(i142.rt).Ds;
        });
    }, i140.prototype.cs = function(t, i143, n86) {
        var s55 = this.os(t, i143);
        return s55.A = n86.As(t).Ds, s55;
    }, i140;
}(mt), zt = /[2-9]/g, Rt = function() {
    function t46(t) {
        void 0 === t && (t = 50), this.Gs = new Map, this.Qs = 0, this.th = Array.from(new Array(t));
    }
    return t46.prototype.ih = function() {
        this.Gs.clear(), this.th.fill(void 0);
    }, t46.prototype.Qt = function(t, i144, n87) {
        var s56 = n87 || zt, h39 = String(i144).replace(s56, "0"), r32 = this.Gs.get(h39);
        if (void 0 === r32) {
            if (0 === (r32 = t.measureText(h39).width) && 0 !== i144.length) return 0;
            var e23 = this.th[this.Qs];
            void 0 !== e23 && this.Gs.delete(e23), this.th[this.Qs] = h39, this.Qs = (this.Qs + 1) % this.th.length, this.Gs.set(h39, r32);
        }
        return r32;
    }, t46;
}(), It = function() {
    function t47(t) {
        this.nh = null, this.k = null, this.sh = "right", this.hh = 0, this.rh = t;
    }
    return t47.prototype.eh = function(t, i145, n88, s57) {
        this.nh = t, this.k = i145, this.hh = n88, this.sh = s57;
    }, t47.prototype.H = function(t, i146) {
        null !== this.k && null !== this.nh && this.nh.H(t, this.k, this.rh, this.hh, this.sh, i146);
    }, t47;
}(), jt = function() {
    function t48(t, i147, n89) {
        this.uh = t, this.rh = new Rt(50), this.ah = i147, this.P = n89, this.R = -1, this.zt = new It(this.rh);
    }
    return t48.prototype.dt = function(t, i148) {
        var n90 = this.P.oh(this.ah);
        if (null === n90) return null;
        var s58 = n90.lh(this.ah) ? n90.fh() : this.ah.Ct();
        if (null === s58) return null;
        var h40 = n90._h(s58);
        if ("overlay" === h40) return null;
        var r33 = this.P.dh();
        return r33.S !== this.R && (this.R = r33.S, this.rh.ih()), this.zt.eh(this.uh.ci(), r33, i148, h40), this.zt;
    }, t48;
}(), qt = function() {
    function t49() {
        this.Bt = null;
    }
    return t49.prototype.Z = function(t) {
        this.Bt = t;
    }, t49.prototype.H = function(t, i149, n, r) {
        if (null !== this.Bt && !1 !== this.Bt.yt) {
            var e24 = Math.round(this.Bt.it * i149);
            if (!(e24 < 0 || e24 > Math.ceil(this.Bt.Yt * i149))) {
                var u17 = Math.ceil(this.Bt.Ht * i149);
                t.lineCap = "butt", t.strokeStyle = this.Bt.A, t.lineWidth = Math.floor(this.Bt.Vt * i149), s(t, this.Bt.Pt), h(t, e24, 0, u17);
            }
        }
    }, t49;
}(), Ut = function() {
    function t50(t) {
        this.wh = {
            Ht: 0,
            Yt: 0,
            it: 0,
            A: "rgba(0, 0, 0, 0)",
            Vt: 1,
            Pt: 0,
            yt: !1
        }, this.Mh = new qt, this.ft = !0, this.Kn = t, this.Xn = t.jt(), this.Mh.Z(this.wh);
    }
    return t50.prototype.vt = function() {
        this.ft = !0;
    }, t50.prototype.dt = function(t, i150) {
        return this.Kn.yt() ? (this.ft && (this.bh(t, i150), this.ft = !1), this.Mh) : null;
    }, t50;
}(), Ht = function(t51) {
    function i151(i152) {
        return t51.call(this, i152) || this;
    }
    return m(i151, t51), i151.prototype.bh = function(t, i153) {
        this.wh.yt = !1;
        var n91 = this.Kn.Ct(), s59 = n91.mh().mh;
        if (2 === s59 || 3 === s59) {
            var h41 = this.Kn.W();
            if (h41.baseLineVisible && this.Kn.yt()) {
                var r34 = this.Kn.kt();
                null !== r34 && (this.wh.yt = !0, this.wh.it = n91.xt(r34.St, r34.St), this.wh.Ht = i153, this.wh.Yt = t, this.wh.A = h41.baseLineColor, this.wh.Vt = h41.baseLineWidth, this.wh.Pt = h41.baseLineStyle);
            }
        }
    }, i151;
}(Ut), Yt = function() {
    function t52() {
        this.Bt = null;
    }
    return t52.prototype.Z = function(t) {
        this.Bt = t;
    }, t52.prototype.ph = function() {
        return this.Bt;
    }, t52.prototype.H = function(t, i154, n, s) {
        var h42 = this.Bt;
        if (null !== h42) {
            t.save();
            var r35 = Math.max(1, Math.floor(i154)), e25 = r35 % 2 / 2, u18 = Math.round(h42.Zs.x * i154) + e25, a16 = h42.Zs.y * i154;
            t.fillStyle = h42.gh, t.beginPath();
            var o15 = Math.max(2, 1.5 * h42.yh) * i154;
            t.arc(u18, a16, o15, 0, 2 * Math.PI, !1), t.fill(), t.fillStyle = h42.kh, t.beginPath(), t.arc(u18, a16, h42.st * i154, 0, 2 * Math.PI, !1), t.fill(), t.lineWidth = r35, t.strokeStyle = h42.Nh, t.beginPath(), t.arc(u18, a16, h42.st * i154 + r35 / 2, 0, 2 * Math.PI, !1), t.stroke(), t.restore();
        }
    }, t52;
}(), $t = [
    {
        xh: 0,
        Ch: .25,
        Sh: 4,
        Th: 10,
        Dh: .25,
        Ah: 0,
        Bh: .4,
        Lh: .8
    },
    {
        xh: .25,
        Ch: .525,
        Sh: 10,
        Th: 14,
        Dh: 0,
        Ah: 0,
        Bh: .8,
        Lh: 0
    },
    {
        xh: .525,
        Ch: 1,
        Sh: 14,
        Th: 14,
        Dh: 0,
        Ah: 0,
        Bh: 0,
        Lh: 0
    }
];
function Kt(t53, i155, n92, s60) {
    return function(t, i156) {
        if ("transparent" === t) return t;
        var n93 = w(t), s61 = n93[3];
        return "rgba(".concat(n93[0], ", ").concat(n93[1], ", ").concat(n93[2], ", ").concat(i156 * s61, ")");
    }(t53, n92 + (s60 - n92) * i155);
}
function Xt(t, i157) {
    for(var n94, s62 = t % 2600 / 2600, h43 = 0, e26 = $t; h43 < e26.length; h43++){
        var u19 = e26[h43];
        if (s62 >= u19.xh && s62 <= u19.Ch) {
            n94 = u19;
            break;
        }
    }
    r(void 0 !== n94, "Last price animation internal logic error");
    var a17, o16, l12, f11 = (s62 - n94.xh) / (n94.Ch - n94.xh);
    return {
        kh: Kt(i157, f11, n94.Dh, n94.Ah),
        Nh: Kt(i157, f11, n94.Bh, n94.Lh),
        st: (a17 = f11, o16 = n94.Sh, l12 = n94.Th, o16 + (l12 - o16) * a17)
    };
}
var Zt = function() {
    function t54(t) {
        this.zt = new Yt, this.ft = !0, this.Eh = !0, this.Fh = performance.now(), this.Oh = this.Fh - 1, this.Vh = t;
    }
    return t54.prototype.Ph = function() {
        this.Oh = this.Fh - 1, this.vt();
    }, t54.prototype.Wh = function() {
        if (this.vt(), 2 === this.Vh.W().lastPriceAnimation) {
            var t = performance.now(), i158 = this.Oh - t;
            if (i158 > 0) return void (i158 < 650 && (this.Oh += 2600));
            this.Fh = t, this.Oh = t + 2600;
        }
    }, t54.prototype.vt = function() {
        this.ft = !0;
    }, t54.prototype.zh = function() {
        this.Eh = !0;
    }, t54.prototype.yt = function() {
        return 0 !== this.Vh.W().lastPriceAnimation;
    }, t54.prototype.Rh = function() {
        switch(this.Vh.W().lastPriceAnimation){
            case 0:
                return !1;
            case 1:
                return !0;
            case 2:
                return performance.now() <= this.Oh;
        }
    }, t54.prototype.dt = function(t, i159) {
        return this.ft ? (this.wt(t, i159), this.ft = !1, this.Eh = !1) : this.Eh && (this.Ih(), this.Eh = !1), this.zt;
    }, t54.prototype.wt = function(t, i) {
        this.zt.Z(null);
        var n95 = this.Vh.jt().bt(), s63 = n95.ss(), h44 = this.Vh.kt();
        if (null !== s63 && null !== h44) {
            var r36 = this.Vh.jh(!0);
            if (!r36.qh && s63.Uh(r36.vs)) {
                var e27 = {
                    x: n95.At(r36.vs),
                    y: this.Vh.Ct().xt(r36.et, h44.St)
                }, u20 = r36.A, a18 = this.Vh.W().lineWidth, o17 = Xt(this.Hh(), u20);
                this.zt.Z({
                    gh: u20,
                    yh: a18,
                    kh: o17.kh,
                    Nh: o17.Nh,
                    st: o17.st,
                    Zs: e27
                });
            }
        }
    }, t54.prototype.Ih = function() {
        var t = this.zt.ph();
        if (null !== t) {
            var i160 = Xt(this.Hh(), t.gh);
            t.kh = i160.kh, t.Nh = i160.Nh, t.st = i160.st;
        }
    }, t54.prototype.Hh = function() {
        return this.Rh() ? performance.now() - this.Fh : 2599;
    }, t54;
}();
function Jt(t, i161) {
    return Tt(Math.min(Math.max(t, 12), 30) * i161);
}
function Gt(t, i162) {
    switch(t){
        case "arrowDown":
        case "arrowUp":
            return Jt(i162, 1);
        case "circle":
            return Jt(i162, .8);
        case "square":
            return Jt(i162, .7);
    }
}
function Qt(t) {
    return St(Jt(t, 1));
}
function ti(t) {
    return Math.max(Jt(t, .1), 3);
}
function ii(t, i163, n96, s64, h45) {
    var r37 = Gt("square", n96), e28 = (r37 - 1) / 2, u21 = t - e28, a19 = i163 - e28;
    return s64 >= u21 && s64 <= u21 + r37 && h45 >= a19 && h45 <= a19 + r37;
}
function ni(t, i164, n97, s65, h46) {
    var r38 = (Gt("arrowUp", h46) - 1) / 2, e29 = (Tt(h46 / 2) - 1) / 2;
    i164.beginPath(), t ? (i164.moveTo(n97 - r38, s65), i164.lineTo(n97, s65 - r38), i164.lineTo(n97 + r38, s65), i164.lineTo(n97 + e29, s65), i164.lineTo(n97 + e29, s65 + r38), i164.lineTo(n97 - e29, s65 + r38), i164.lineTo(n97 - e29, s65)) : (i164.moveTo(n97 - r38, s65), i164.lineTo(n97, s65 + r38), i164.lineTo(n97 + r38, s65), i164.lineTo(n97 + e29, s65), i164.lineTo(n97 + e29, s65 - r38), i164.lineTo(n97 - e29, s65 - r38), i164.lineTo(n97 - e29, s65)), i164.fill();
}
function si(t, i165, n98, s66, h47, r39) {
    return ii(i165, n98, s66, h47, r39);
}
var hi = function(t55) {
    function i166() {
        var i167 = null !== t55 && t55.apply(this, arguments) || this;
        return i167.Bt = null, i167.rh = new Rt, i167.R = -1, i167.I = "", i167.Yh = "", i167;
    }
    return m(i166, t55), i166.prototype.Z = function(t) {
        this.Bt = t;
    }, i166.prototype.eh = function(t, i168) {
        this.R === t && this.I === i168 || (this.R = t, this.I = i168, this.Yh = L(t, i168), this.rh.ih());
    }, i166.prototype.$h = function(t, i169) {
        if (null === this.Bt || null === this.Bt.J) return null;
        for(var n99 = this.Bt.J.from; n99 < this.Bt.J.to; n99++){
            var s67 = this.Bt.G[n99];
            if (ei(s67, t, i169)) return {
                Kh: s67.Xh,
                Zh: s67.Zh
            };
        }
        return null;
    }, i166.prototype.Y = function(t, i, n) {
        if (null !== this.Bt && null !== this.Bt.J) {
            t.textBaseline = "middle", t.font = this.Yh;
            for(var s68 = this.Bt.J.from; s68 < this.Bt.J.to; s68++){
                var h48 = this.Bt.G[s68];
                void 0 !== h48.Gt && (h48.Gt.Ht = this.rh.Qt(t, h48.Gt.Jh), h48.Gt.Yt = this.R), ri(h48, t);
            }
        }
    }, i166;
}(O);
function ri(t56, i170) {
    i170.fillStyle = t56.A, void 0 !== t56.Gt && function(t, i171, n100, s69) {
        t.fillText(i171, n100, s69);
    }(i170, t56.Gt.Jh, t56.tt - t56.Gt.Ht / 2, t56.Gt.it), function(t57, i172) {
        if (0 === t57.hs) return;
        switch(t57.Gh){
            case "arrowDown":
                return void ni(!1, i172, t57.tt, t57.it, t57.hs);
            case "arrowUp":
                return void ni(!0, i172, t57.tt, t57.it, t57.hs);
            case "circle":
                return void function(t, i173, n101, s70) {
                    var h49 = (Gt("circle", s70) - 1) / 2;
                    t.beginPath(), t.arc(i173, n101, h49, 0, 2 * Math.PI, !1), t.fill();
                }(i172, t57.tt, t57.it, t57.hs);
            case "square":
                return void function(t, i174, n102, s71) {
                    var h50 = Gt("square", s71), r40 = (h50 - 1) / 2, e30 = i174 - r40, u22 = n102 - r40;
                    t.fillRect(e30, u22, h50, h50);
                }(i172, t57.tt, t57.it, t57.hs);
        }
        t57.Gh;
    }(t56, i170);
}
function ei(t58, i175, n103) {
    return !(void 0 === t58.Gt || !function(t, i176, n104, s72, h51, r41) {
        var e31 = s72 / 2;
        return h51 >= t && h51 <= t + n104 && r41 >= i176 - e31 && r41 <= i176 + e31;
    }(t58.tt, t58.Gt.it, t58.Gt.Ht, t58.Gt.Yt, i175, n103)) || function(t59, i177, n105) {
        if (0 === t59.hs) return !1;
        switch(t59.Gh){
            case "arrowDown":
            case "arrowUp":
                return si(0, t59.tt, t59.it, t59.hs, i177, n105);
            case "circle":
                return function(t, i178, n106, s73, h52) {
                    var r42 = 2 + Gt("circle", n106) / 2, e32 = t - s73, u23 = i178 - h52;
                    return Math.sqrt(e32 * e32 + u23 * u23) <= r42;
                }(t59.tt, t59.it, t59.hs, i177, n105);
            case "square":
                return ii(t59.tt, t59.it, t59.hs, i177, n105);
        }
    }(t58, i175, n103);
}
function ui(t, i179, n107, s74, h53, r43, e33, u24, a20) {
    var o18 = N(n107) ? n107 : n107.close, l13 = N(n107) ? n107 : n107.high, f12 = N(n107) ? n107 : n107.low, c10 = N(i179.size) ? Math.max(i179.size, 0) : 1, v7 = Qt(u24.ws()) * c10, _7 = v7 / 2;
    switch(t.hs = v7, i179.position){
        case "inBar":
            return t.it = e33.xt(o18, a20), void (void 0 !== t.Gt && (t.Gt.it = t.it + _7 + r43 + .6 * h53));
        case "aboveBar":
            return t.it = e33.xt(l13, a20) - _7 - s74.Qh, void 0 !== t.Gt && (t.Gt.it = t.it - _7 - .6 * h53, s74.Qh += 1.2 * h53), void (s74.Qh += v7 + r43);
        case "belowBar":
            return t.it = e33.xt(f12, a20) + _7 + s74.tr, void 0 !== t.Gt && (t.Gt.it = t.it + _7 + r43 + .6 * h53, s74.tr += 1.2 * h53), void (s74.tr += v7 + r43);
    }
    i179.position;
}
var ai = function() {
    function t60(t, i180) {
        this.ft = !0, this.ir = !0, this.nr = !0, this.sr = null, this.zt = new hi, this.Vh = t, this.pi = i180, this.Bt = {
            G: [],
            J: null
        };
    }
    return t60.prototype.vt = function(t) {
        this.ft = !0, this.nr = !0, "data" === t && (this.ir = !0);
    }, t60.prototype.dt = function(t, i, n) {
        if (!this.Vh.yt()) return null;
        this.ft && this.Jn();
        var s75 = this.pi.W().layout;
        return this.zt.eh(s75.fontSize, s75.fontFamily), this.zt.Z(this.Bt), this.zt;
    }, t60.prototype.hr = function() {
        if (this.nr) {
            if (this.Vh.rr().length > 0) {
                var t = this.pi.bt().ws(), i181 = ti(t), n108 = 1.5 * Qt(t) + 2 * i181;
                this.sr = {
                    above: n108,
                    below: n108
                };
            } else this.sr = null;
            this.nr = !1;
        }
        return this.sr;
    }, t60.prototype.Jn = function() {
        var t61 = this.Vh.Ct(), i182 = this.pi.bt(), n109 = this.Vh.rr();
        this.ir && (this.Bt.G = n109.map(function(t) {
            return {
                rt: t.time,
                tt: 0,
                it: 0,
                hs: 0,
                Gh: t.shape,
                A: t.color,
                Xh: t.Xh,
                Zh: t.id,
                Gt: void 0
            };
        }), this.ir = !1);
        var s76 = this.pi.W().layout;
        this.Bt.J = null;
        var h54 = i182.ss();
        if (null !== h54) {
            var r44 = this.Vh.kt();
            if (null !== r44 && 0 !== this.Bt.G.length) {
                var e34 = NaN, u25 = ti(i182.ws()), a21 = {
                    Qh: u25,
                    tr: u25
                };
                this.Bt.J = Mt(this.Bt.G, h54, !0);
                for(var o19 = this.Bt.J.from; o19 < this.Bt.J.to; o19++){
                    var l14 = n109[o19];
                    l14.time !== e34 && (a21.Qh = u25, a21.tr = u25, e34 = l14.time);
                    var f13 = this.Bt.G[o19];
                    f13.tt = i182.At(l14.time), void 0 !== l14.text && l14.text.length > 0 && (f13.Gt = {
                        Jh: l14.text,
                        it: 0,
                        Ht: 0,
                        Yt: 0
                    });
                    var c11 = this.Vh.er(l14.time);
                    null !== c11 && ui(f13, l14, c11, a21, s76.fontSize, u25, t61, i182, r44.St);
                }
                this.ft = !1;
            }
        }
    }, t60;
}(), oi = function(t62) {
    function i183(i184) {
        return t62.call(this, i184) || this;
    }
    return m(i183, t62), i183.prototype.bh = function(t, i185) {
        var n110 = this.wh;
        n110.yt = !1;
        var s77 = this.Kn.W();
        if (s77.priceLineVisible && this.Kn.yt()) {
            var h55 = this.Kn.jh(0 === s77.priceLineSource);
            h55.qh || (n110.yt = !0, n110.it = h55.ti, n110.A = this.Kn.ur(h55.A), n110.Ht = i185, n110.Yt = t, n110.Vt = s77.priceLineWidth, n110.Pt = s77.priceLineStyle);
        }
    }, i183;
}(Ut), li = function(t63) {
    function i186(i187) {
        var n111 = t63.call(this) || this;
        return n111.Rt = i187, n111;
    }
    return m(i186, t63), i186.prototype.vi = function(t, i188, n112) {
        t.yt = !1, i188.yt = !1;
        var s78 = this.Rt;
        if (s78.yt()) {
            var h56 = s78.W(), r45 = h56.lastValueVisible, e35 = "" !== s78.ar(), u26 = 0 === h56.seriesLastValueMode, a22 = s78.jh(!1);
            if (!a22.qh) {
                r45 && (t.Gt = this.lr(a22, r45, u26), t.yt = 0 !== t.Gt.length), (e35 || u26) && (i188.Gt = this.cr(a22, r45, e35, u26), i188.yt = i188.Gt.length > 0);
                var o20 = s78.ur(a22.A), l15 = M(o20);
                n112.t = l15.t, n112.A = l15.i, n112.ti = a22.ti, i188.Tt = s78.jt().Dt(a22.ti / s78.Ct().Yt()), t.Tt = o20;
            }
        }
    }, i186.prototype.cr = function(t, i189, n113, s79) {
        var h57 = "", r46 = this.Rt.ar();
        return n113 && 0 !== r46.length && (h57 += "".concat(r46, " ")), i189 && s79 && (h57 += this.Rt.Ct().vr() ? t._r : t.dr), h57.trim();
    }, i186.prototype.lr = function(t, i190, n114) {
        return i190 ? n114 ? this.Rt.Ct().vr() ? t.dr : t._r : t.Gt : "";
    }, i186;
}(K), fi = function() {
    function t64(t, i191) {
        this.wr = t, this.Mr = i191;
    }
    return t64.prototype.br = function(t) {
        return null !== t && this.wr === t.wr && this.Mr === t.Mr;
    }, t64.prototype.mr = function() {
        return new t64(this.wr, this.Mr);
    }, t64.prototype.pr = function() {
        return this.wr;
    }, t64.prototype.gr = function() {
        return this.Mr;
    }, t64.prototype.yr = function() {
        return this.Mr - this.wr;
    }, t64.prototype.wi = function() {
        return this.Mr === this.wr || Number.isNaN(this.Mr) || Number.isNaN(this.wr);
    }, t64.prototype.Nn = function(i192) {
        return null === i192 ? this : new t64(Math.min(this.pr(), i192.pr()), Math.max(this.gr(), i192.gr()));
    }, t64.prototype.kr = function(t) {
        if (N(t) && 0 !== this.Mr - this.wr) {
            var i193 = .5 * (this.Mr + this.wr), n115 = this.Mr - i193, s80 = this.wr - i193;
            n115 *= t, s80 *= t, this.Mr = i193 + n115, this.wr = i193 + s80;
        }
    }, t64.prototype.Nr = function(t) {
        N(t) && (this.Mr += t, this.wr += t);
    }, t64.prototype.Cr = function() {
        return {
            minValue: this.wr,
            maxValue: this.Mr
        };
    }, t64.Sr = function(i194) {
        return null === i194 ? null : new t64(i194.minValue, i194.maxValue);
    }, t64;
}(), ci = function() {
    function t65(t, i195) {
        this.Tr = t, this.Dr = i195 || null;
    }
    return t65.prototype.Ar = function() {
        return this.Tr;
    }, t65.prototype.Br = function() {
        return this.Dr;
    }, t65.prototype.Cr = function() {
        return null === this.Tr ? null : {
            priceRange: this.Tr.Cr(),
            margins: this.Dr || void 0
        };
    }, t65.Sr = function(i196) {
        return null === i196 ? null : new t65(fi.Sr(i196.priceRange), i196.margins);
    }, t65;
}(), vi = function(t66) {
    function i197(i198, n116) {
        var s81 = t66.call(this, i198) || this;
        return s81.Lr = n116, s81;
    }
    return m(i197, t66), i197.prototype.bh = function(t, i199) {
        var n117 = this.wh;
        n117.yt = !1;
        var s82 = this.Lr.W();
        if (this.Kn.yt() && s82.lineVisible) {
            var h58 = this.Lr.Er();
            null !== h58 && (n117.yt = !0, n117.it = h58, n117.A = s82.color, n117.Ht = i199, n117.Yt = t, n117.Vt = s82.lineWidth, n117.Pt = s82.lineStyle);
        }
    }, i197;
}(Ut), _i = function(t67) {
    function i200(i201, n118) {
        var s83 = t67.call(this) || this;
        return s83.Vh = i201, s83.Lr = n118, s83;
    }
    return m(i200, t67), i200.prototype.vi = function(t, i202, n119) {
        t.yt = !1, i202.yt = !1;
        var s84 = this.Lr.W(), h59 = s84.axisLabelVisible, r47 = "" !== s84.title, e36 = this.Vh;
        if (h59 && e36.yt()) {
            var u27 = this.Lr.Er();
            if (null !== u27) {
                r47 && (i202.Gt = s84.title, i202.yt = !0), i202.Tt = e36.jt().Dt(u27 / e36.Ct().Yt()), t.Gt = e36.Ct().Fr(s84.price), t.yt = !0;
                var a23 = M(s84.color);
                n119.t = a23.t, n119.A = a23.i, n119.ti = u27;
            }
        }
    }, i200;
}(K), di = function() {
    function t68(t, i203) {
        this.Vh = t, this.zi = i203, this.Or = new vi(t, this), this.uh = new _i(t, this), this.Vr = new jt(this.uh, t, t.jt());
    }
    return t68.prototype.Pr = function(t) {
        k(this.zi, t), this.vt(), this.Vh.jt().Wr();
    }, t68.prototype.W = function() {
        return this.zi;
    }, t68.prototype.tn = function() {
        return [
            this.Or,
            this.Vr
        ];
    }, t68.prototype.zr = function() {
        return this.uh;
    }, t68.prototype.vt = function() {
        this.Or.vt(), this.uh.vt();
    }, t68.prototype.Er = function() {
        var t = this.Vh, i204 = t.Ct();
        if (t.jt().bt().wi() || i204.wi()) return null;
        var n120 = t.kt();
        return null === n120 ? null : i204.xt(this.zi.price, n120.St);
    }, t68;
}(), wi = function(t) {
    function i205(i206) {
        var n121 = t.call(this) || this;
        return n121.pi = i206, n121;
    }
    return m(i205, t), i205.prototype.jt = function() {
        return this.pi;
    }, i205;
}(Q), Mi = {
    Ds: "",
    Hs: "",
    Us: ""
}, bi = function() {
    function t69(t) {
        this.Vh = t;
    }
    return t69.prototype.As = function(t, i207) {
        var n122 = this.Vh.Rr(), s85 = this.Vh.W();
        switch(n122){
            case "Line":
                return this.Ir(s85, t, i207);
            case "Area":
                return this.jr(s85);
            case "Baseline":
                return this.qr(s85, t, i207);
            case "Bar":
                return this.Ur(s85, t, i207);
            case "Candlestick":
                return this.Hr(s85, t, i207);
            case "Histogram":
                return this.Yr(s85, t, i207);
        }
        throw new Error("Unknown chart style");
    }, t69.prototype.Ur = function(t, i208, n123) {
        var s86 = p({}, Mi), h60 = t.upColor, r48 = t.downColor, e37 = h60, o21 = r48, l16 = u(this.$r(i208, n123)), f14 = a(l16.St[0]) <= a(l16.St[3]);
        return void 0 !== l16.A ? (s86.Ds = l16.A, s86.Hs = l16.A) : (s86.Ds = f14 ? h60 : r48, s86.Hs = f14 ? e37 : o21), s86;
    }, t69.prototype.Hr = function(t, i209, n124) {
        var s87, h61, r49, e38 = p({}, Mi), o22 = t.upColor, l17 = t.downColor, f15 = t.borderUpColor, c12 = t.borderDownColor, v8 = t.wickUpColor, _8 = t.wickDownColor, d5 = u(this.$r(i209, n124)), w5 = a(d5.St[0]) <= a(d5.St[3]);
        return e38.Ds = null !== (s87 = d5.A) && void 0 !== s87 ? s87 : w5 ? o22 : l17, e38.Hs = null !== (h61 = d5.Tt) && void 0 !== h61 ? h61 : w5 ? f15 : c12, e38.Us = null !== (r49 = d5.qs) && void 0 !== r49 ? r49 : w5 ? v8 : _8, e38;
    }, t69.prototype.jr = function(t) {
        return p(p({}, Mi), {
            Ds: t.lineColor
        });
    }, t69.prototype.qr = function(t, i210, n125) {
        var s88 = u(this.$r(i210, n125)).St[3] >= t.baseValue.price;
        return p(p({}, Mi), {
            Ds: s88 ? t.topLineColor : t.bottomLineColor
        });
    }, t69.prototype.Ir = function(t, i211, n126) {
        var s89, h62 = u(this.$r(i211, n126));
        return p(p({}, Mi), {
            Ds: null !== (s89 = h62.A) && void 0 !== s89 ? s89 : t.color
        });
    }, t69.prototype.Yr = function(t, i212, n127) {
        var s90 = p({}, Mi), h63 = u(this.$r(i212, n127));
        return s90.Ds = void 0 !== h63.A ? h63.A : t.color, s90;
    }, t69.prototype.$r = function(t, i213) {
        return void 0 !== i213 ? i213.St : this.Vh.an().Kr(t);
    }, t69;
}(), mi = function() {
    function t70() {
        this.Xr = [], this.Zr = new Map, this.Jr = new Map;
    }
    return t70.prototype.Gr = function() {
        return this.hs() > 0 ? this.Xr[this.Xr.length - 1] : null;
    }, t70.prototype.Qr = function() {
        return this.hs() > 0 ? this.te(0) : null;
    }, t70.prototype.un = function() {
        return this.hs() > 0 ? this.te(this.Xr.length - 1) : null;
    }, t70.prototype.hs = function() {
        return this.Xr.length;
    }, t70.prototype.wi = function() {
        return 0 === this.hs();
    }, t70.prototype.Uh = function(t) {
        return null !== this.ie(t, 0);
    }, t70.prototype.Kr = function(t) {
        return this.ne(t);
    }, t70.prototype.ne = function(t, i214) {
        void 0 === i214 && (i214 = 0);
        var n128 = this.ie(t, i214);
        return null === n128 ? null : p(p({}, this.se(n128)), {
            vs: this.te(n128)
        });
    }, t70.prototype.fs = function() {
        return this.Xr;
    }, t70.prototype.he = function(t, i215, n129) {
        if (this.wi()) return null;
        for(var s91 = null, h64 = 0, r50 = n129; h64 < r50.length; h64++){
            var e39 = r50[h64];
            s91 = pi(s91, this.re(t, i215, e39));
        }
        return s91;
    }, t70.prototype.Z = function(t) {
        this.Jr.clear(), this.Zr.clear(), this.Xr = t;
    }, t70.prototype.te = function(t) {
        return this.Xr[t].vs;
    }, t70.prototype.se = function(t) {
        return this.Xr[t];
    }, t70.prototype.ie = function(t, i216) {
        var n130 = this.ee(t);
        if (null === n130 && 0 !== i216) switch(i216){
            case -1:
                return this.ue(t);
            case 1:
                return this.ae(t);
            default:
                throw new TypeError("Unknown search mode");
        }
        return n130;
    }, t70.prototype.ue = function(t) {
        var i217 = this.oe(t);
        return i217 > 0 && (i217 -= 1), i217 !== this.Xr.length && this.te(i217) < t ? i217 : null;
    }, t70.prototype.ae = function(t) {
        var i218 = this.le(t);
        return i218 !== this.Xr.length && t < this.te(i218) ? i218 : null;
    }, t70.prototype.ee = function(t) {
        var i219 = this.oe(t);
        return i219 === this.Xr.length || t < this.Xr[i219].vs ? null : i219;
    }, t70.prototype.oe = function(t71) {
        return vt(this.Xr, t71, function(t, i220) {
            return t.vs < i220;
        });
    }, t70.prototype.le = function(t72) {
        return _t(this.Xr, t72, function(t, i221) {
            return i221.vs > t;
        });
    }, t70.prototype.fe = function(t, i222, n131) {
        for(var s92 = null, h65 = t; h65 < i222; h65++){
            var r51 = this.Xr[h65].St[n131];
            Number.isNaN(r51) || (null === s92 ? s92 = {
                ce: r51,
                ve: r51
            } : (r51 < s92.ce && (s92.ce = r51), r51 > s92.ve && (s92.ve = r51)));
        }
        return s92;
    }, t70.prototype.re = function(t, i223, n132) {
        if (this.wi()) return null;
        var s93 = null, h66 = u(this.Qr()), r52 = u(this.un()), e40 = Math.max(t, h66), a24 = Math.min(i223, r52), o23 = 30 * Math.ceil(e40 / 30), l18 = Math.max(o23, 30 * Math.floor(a24 / 30)), f16 = this.oe(e40), c13 = this.le(Math.min(a24, o23, i223));
        s93 = pi(s93, this.fe(f16, c13, n132));
        var v9 = this.Zr.get(n132);
        void 0 === v9 && (v9 = new Map, this.Zr.set(n132, v9));
        for(var _9 = Math.max(o23 + 1, e40); _9 < l18; _9 += 30){
            var d6 = Math.floor(_9 / 30), w6 = v9.get(d6);
            if (void 0 === w6) {
                var M4 = this.oe(30 * d6), b4 = this.le(30 * (d6 + 1) - 1);
                w6 = this.fe(M4, b4, n132), v9.set(d6, w6);
            }
            s93 = pi(s93, w6);
        }
        f16 = this.oe(l18), c13 = this.le(a24);
        return s93 = pi(s93, this.fe(f16, c13, n132));
    }, t70;
}();
function pi(t, i224) {
    return null === t ? i224 : null === i224 ? t : {
        ce: Math.min(t.ce, i224.ce),
        ve: Math.max(t.ve, i224.ve)
    };
}
var gi = function(t73) {
    function i225(i226, n133, s94) {
        var h67 = t73.call(this, i226) || this;
        h67.Bt = new mi, h67.Or = new oi(h67), h67._e = [], h67.de = new Ht(h67), h67.we = null, h67.Me = null, h67.be = [], h67.me = [], h67.pe = null, h67.zi = n133, h67.ge = s94;
        var r53 = new li(h67);
        return h67.Ei = [
            r53
        ], h67.Vr = new jt(r53, h67, i226), "Area" !== s94 && "Line" !== s94 && "Baseline" !== s94 || (h67.we = new Zt(h67)), h67.ye(), h67.ke(), h67;
    }
    return m(i225, t73), i225.prototype.g = function() {
        null !== this.pe && clearTimeout(this.pe);
    }, i225.prototype.ur = function(t) {
        return this.zi.priceLineColor || t;
    }, i225.prototype.jh = function(t) {
        var i227 = {
            qh: !0
        }, n134 = this.Ct();
        if (this.jt().bt().wi() || n134.wi() || this.Bt.wi()) return i227;
        var s95, h68, r54 = this.jt().bt().ss(), e41 = this.kt();
        if (null === r54 || null === e41) return i227;
        if (t) {
            var u28 = this.Bt.Gr();
            if (null === u28) return i227;
            s95 = u28, h68 = u28.vs;
        } else {
            var a25 = this.Bt.ne(r54.jn(), -1);
            if (null === a25) return i227;
            if (null === (s95 = this.Bt.Kr(a25.vs))) return i227;
            h68 = a25.vs;
        }
        var o24 = s95.St[3], l19 = this.ls().As(h68, {
            St: s95
        }), f17 = n134.xt(o24, e41.St);
        return {
            qh: !1,
            et: o24,
            Gt: n134.Mi(o24, e41.St),
            _r: n134.Fr(o24),
            dr: n134.Ne(o24, e41.St),
            A: l19.Ds,
            ti: f17,
            vs: h68
        };
    }, i225.prototype.ls = function() {
        return null !== this.Me || (this.Me = new bi(this)), this.Me;
    }, i225.prototype.W = function() {
        return this.zi;
    }, i225.prototype.Pr = function(t) {
        var i228 = t.priceScaleId;
        void 0 !== i228 && i228 !== this.zi.priceScaleId && this.jt().xe(this, i228), k(this.zi, t), null !== this.ki && void 0 !== t.scaleMargins && this.ki.Pr({
            scaleMargins: t.scaleMargins
        }), void 0 !== t.priceFormat && (this.ye(), this.jt().Ce()), this.jt().Se(this), this.jt().Te(), this.Hi.vt("options");
    }, i225.prototype.Z = function(t, i229) {
        this.Bt.Z(t), this.De(), this.Hi.vt("data"), this.Ri.vt("data"), null !== this.we && (i229 && i229.Ae ? this.we.Wh() : 0 === t.length && this.we.Ph());
        var n135 = this.jt().oh(this);
        this.jt().Be(n135), this.jt().Se(this), this.jt().Te(), this.jt().Wr();
    }, i225.prototype.Le = function(t74) {
        this.be = t74.map(function(t) {
            return p({}, t);
        }), this.De();
        var i230 = this.jt().oh(this);
        this.Ri.vt("data"), this.jt().Be(i230), this.jt().Se(this), this.jt().Te(), this.jt().Wr();
    }, i225.prototype.rr = function() {
        return this.me;
    }, i225.prototype.Ee = function(t) {
        var i231 = new di(this, t);
        return this._e.push(i231), this.jt().Se(this), i231;
    }, i225.prototype.Fe = function(t) {
        var i232 = this._e.indexOf(t);
        -1 !== i232 && this._e.splice(i232, 1), this.jt().Se(this);
    }, i225.prototype.Rr = function() {
        return this.ge;
    }, i225.prototype.kt = function() {
        var t = this.Oe();
        return null === t ? null : {
            St: t.St[3],
            Ve: t.rt
        };
    }, i225.prototype.Oe = function() {
        var t = this.jt().bt().ss();
        if (null === t) return null;
        var i233 = t.In();
        return this.Bt.ne(i233, 1);
    }, i225.prototype.an = function() {
        return this.Bt;
    }, i225.prototype.er = function(t) {
        var i234 = this.Bt.Kr(t);
        return null === i234 ? null : "Bar" === this.ge || "Candlestick" === this.ge ? {
            open: i234.St[0],
            high: i234.St[1],
            low: i234.St[2],
            close: i234.St[3]
        } : i234.St[3];
    }, i225.prototype.Pe = function(t) {
        var i235 = this, n136 = this.we;
        return null !== n136 && n136.yt() ? (null === this.pe && n136.Rh() && (this.pe = setTimeout(function() {
            i235.pe = null, i235.jt().We();
        }, 0)), n136.zh(), [
            n136
        ]) : [];
    }, i225.prototype.tn = function() {
        var t = [];
        this.ze() || t.push(this.de);
        for(var i236 = 0, n137 = this._e; i236 < n137.length; i236++){
            var s96 = n137[i236];
            t.push.apply(t, s96.tn());
        }
        return t.push(this.Hi, this.Or, this.Vr, this.Ri), t;
    }, i225.prototype.nn = function(t, i237) {
        if (i237 !== this.ki && !this.ze()) return [];
        for(var n138 = g([], this.Ei, !0), s97 = 0, h69 = this._e; s97 < h69.length; s97++){
            var r55 = h69[s97];
            n138.push(r55.zr());
        }
        return n138;
    }, i225.prototype.Re = function(t, i238) {
        var n139 = this;
        if (void 0 !== this.zi.autoscaleInfoProvider) {
            var s98 = this.zi.autoscaleInfoProvider(function() {
                var s100 = n139.Ie(t, i238);
                return null === s100 ? null : s100.Cr();
            });
            return ci.Sr(s98);
        }
        return this.Ie(t, i238);
    }, i225.prototype.je = function() {
        return this.zi.priceFormat.minMove;
    }, i225.prototype.qe = function() {
        return this.Ue;
    }, i225.prototype.hn = function() {
        var t;
        this.Hi.vt(), this.Ri.vt();
        for(var i239 = 0, n140 = this.Ei; i239 < n140.length; i239++)n140[i239].vt();
        for(var s101 = 0, h70 = this._e; s101 < h70.length; s101++)h70[s101].vt();
        this.Or.vt(), this.de.vt(), null === (t = this.we) || void 0 === t || t.vt();
    }, i225.prototype.Ct = function() {
        return u(t73.prototype.Ct.call(this));
    }, i225.prototype.gt = function(t) {
        if (!(("Line" === this.ge || "Area" === this.ge || "Baseline" === this.ge) && this.zi.crosshairMarkerVisible)) return null;
        var i240 = this.Bt.Kr(t);
        return null === i240 ? null : {
            et: i240.St[3],
            st: this.He(),
            Tt: this.Ye(),
            Nt: this.$e(t)
        };
    }, i225.prototype.ar = function() {
        return this.zi.title;
    }, i225.prototype.yt = function() {
        return this.zi.visible;
    }, i225.prototype.ze = function() {
        return !it(this.Ct().Ke());
    }, i225.prototype.Ie = function(t, i241) {
        if (!x(t) || !x(i241) || this.Bt.wi()) return null;
        var n141 = "Line" === this.ge || "Area" === this.ge || "Baseline" === this.ge || "Histogram" === this.ge ? [
            3
        ] : [
            2,
            1
        ], s102 = this.Bt.he(t, i241, n141), h71 = null !== s102 ? new fi(s102.ce, s102.ve) : null;
        if ("Histogram" === this.Rr()) {
            var r56 = this.zi.base, e42 = new fi(r56, r56);
            h71 = null !== h71 ? h71.Nn(e42) : e42;
        }
        return new ci(h71, this.Ri.hr());
    }, i225.prototype.He = function() {
        switch(this.ge){
            case "Line":
            case "Area":
            case "Baseline":
                return this.zi.crosshairMarkerRadius;
        }
        return 0;
    }, i225.prototype.Ye = function() {
        switch(this.ge){
            case "Line":
            case "Area":
            case "Baseline":
                var t = this.zi.crosshairMarkerBorderColor;
                if (0 !== t.length) return t;
        }
        return null;
    }, i225.prototype.$e = function(t) {
        switch(this.ge){
            case "Line":
            case "Area":
            case "Baseline":
                var i242 = this.zi.crosshairMarkerBackgroundColor;
                if (0 !== i242.length) return i242;
        }
        return this.ls().As(t).Ds;
    }, i225.prototype.ye = function() {
        switch(this.zi.priceFormat.type){
            case "custom":
                this.Ue = {
                    format: this.zi.priceFormat.formatter
                };
                break;
            case "volume":
                this.Ue = new ut(this.zi.priceFormat.precision);
                break;
            case "percent":
                this.Ue = new et(this.zi.priceFormat.precision);
                break;
            default:
                var t = Math.pow(10, this.zi.priceFormat.precision);
                this.Ue = new rt(t, this.zi.priceFormat.minMove * t);
        }
        null !== this.ki && this.ki.Xe();
    }, i225.prototype.De = function() {
        var t = this, i243 = this.jt().bt();
        if (i243.wi() || 0 === this.Bt.hs()) this.me = [];
        else {
            var n142 = u(this.Bt.Qr());
            this.me = this.be.map(function(s103, h72) {
                var r57 = u(i243.Ze(s103.time, !0)), e43 = r57 < n142 ? 1 : -1;
                return {
                    time: u(t.Bt.ne(r57, e43)).vs,
                    position: s103.position,
                    shape: s103.shape,
                    color: s103.color,
                    id: s103.id,
                    Xh: h72,
                    text: s103.text,
                    size: s103.size
                };
            });
        }
    }, i225.prototype.ke = function() {
        switch(this.Ri = new ai(this, this.jt()), this.ge){
            case "Bar":
                this.Hi = new kt(this, this.jt());
                break;
            case "Candlestick":
                this.Hi = new Et(this, this.jt());
                break;
            case "Line":
                this.Hi = new Wt(this, this.jt());
                break;
            case "Area":
                this.Hi = new pt(this, this.jt());
                break;
            case "Baseline":
                this.Hi = new Bt(this, this.jt());
                break;
            case "Histogram":
                this.Hi = new Pt(this, this.jt());
                break;
            default:
                throw Error("Unknown chart style assigned: " + this.ge);
        }
    }, i225;
}(wi), yi = function() {
    function t75(t) {
        this.zi = t;
    }
    return t75.prototype.Je = function(t76, i244, n143) {
        var s104 = t76;
        if (0 === this.zi.mode) return s104;
        var h73 = n143.ji(), r58 = h73.kt();
        if (null === r58) return s104;
        var e44 = h73.xt(t76, r58), u29 = n143.Ge().filter(function(t) {
            return t instanceof gi;
        }).reduce(function(t, s105) {
            if (n143.lh(s105) || !s105.yt()) return t;
            var h74 = s105.Ct(), r59 = s105.an();
            if (h74.wi() || !r59.Uh(i244)) return t;
            var e45 = r59.Kr(i244);
            if (null === e45) return t;
            var u30 = a(s105.kt());
            return t.concat([
                h74.xt(e45.St[3], u30.St)
            ]);
        }, []);
        if (0 === u29.length) return s104;
        u29.sort(function(t, i245) {
            return Math.abs(t - e44) - Math.abs(i245 - e44);
        });
        var o25 = u29[0];
        return s104 = h73.qi(o25, r58);
    }, t75;
}(), ki = function() {
    function t77() {
        this.Bt = null;
    }
    return t77.prototype.Z = function(t) {
        this.Bt = t;
    }, t77.prototype.H = function(t78, i246, n144, h75) {
        var r60 = this;
        if (null !== this.Bt) {
            var e46 = Math.max(1, Math.floor(i246));
            t78.lineWidth = e46;
            var a26 = Math.ceil(this.Bt.Ot * i246), o26 = Math.ceil(this.Bt.Ft * i246);
            !function(t, i247) {
                t.save(), t.lineWidth % 2 && t.translate(.5, .5), i247(), t.restore();
            }(t78, function() {
                var n145 = u(r60.Bt);
                if (n145.Qe) {
                    t78.strokeStyle = n145.tu, s(t78, n145.iu), t78.beginPath();
                    for(var h76 = 0, l20 = n145.nu; h76 < l20.length; h76++){
                        var f18 = l20[h76], c14 = Math.round(f18.su * i246);
                        t78.moveTo(c14, -e46), t78.lineTo(c14, a26 + e46);
                    }
                    t78.stroke();
                }
                if (n145.hu) {
                    t78.strokeStyle = n145.ru, s(t78, n145.eu), t78.beginPath();
                    for(var v10 = 0, _10 = n145.uu; v10 < _10.length; v10++){
                        var d7 = _10[v10], w7 = Math.round(d7.su * i246);
                        t78.moveTo(-e46, w7), t78.lineTo(o26 + e46, w7);
                    }
                    t78.stroke();
                }
            });
        }
    }, t77;
}(), Ni = function() {
    function t79(t) {
        this.zt = new ki, this.ft = !0, this.Di = t;
    }
    return t79.prototype.vt = function() {
        this.ft = !0;
    }, t79.prototype.dt = function(t, i248) {
        if (this.ft) {
            var n146 = this.Di.jt().W().grid, s106 = {
                Ot: t,
                Ft: i248,
                hu: n146.horzLines.visible,
                Qe: n146.vertLines.visible,
                ru: n146.horzLines.color,
                tu: n146.vertLines.color,
                eu: n146.horzLines.style,
                iu: n146.vertLines.style,
                uu: this.Di.ji().au(),
                nu: this.Di.jt().bt().au() || []
            };
            this.zt.Z(s106), this.ft = !1;
        }
        return this.zt;
    }, t79;
}(), xi = function() {
    function t80(t) {
        this.Hi = new Ni(t);
    }
    return t80.prototype.ou = function() {
        return this.Hi;
    }, t80;
}(), Ci = {
    lu: 4,
    fu: 1e-4
};
function Si(t, i249) {
    var n147 = 100 * (t - i249) / i249;
    return i249 < 0 ? -n147 : n147;
}
function Ti(t, i250) {
    var n148 = Si(t.pr(), i250), s107 = Si(t.gr(), i250);
    return new fi(n148, s107);
}
function Di(t, i251) {
    var n149 = 100 * (t - i251) / i251 + 100;
    return i251 < 0 ? -n149 : n149;
}
function Ai(t, i252) {
    var n150 = Di(t.pr(), i252), s108 = Di(t.gr(), i252);
    return new fi(n150, s108);
}
function Bi(t, i253) {
    var n151 = Math.abs(t);
    if (n151 < 1e-15) return 0;
    var s109 = Ct(n151 + i253.fu) + i253.lu;
    return t < 0 ? -s109 : s109;
}
function Li(t, i254) {
    var n152 = Math.abs(t);
    if (n152 < 1e-15) return 0;
    var s110 = Math.pow(10, n152 - i254.lu) - i254.fu;
    return t < 0 ? -s110 : s110;
}
function Ei(t, i255) {
    if (null === t) return null;
    var n153 = Bi(t.pr(), i255), s111 = Bi(t.gr(), i255);
    return new fi(n153, s111);
}
function Fi(t, i256) {
    if (null === t) return null;
    var n154 = Li(t.pr(), i256), s112 = Li(t.gr(), i256);
    return new fi(n154, s112);
}
function Oi(t) {
    if (null === t) return Ci;
    var i257 = Math.abs(t.gr() - t.pr());
    if (i257 >= 1 || i257 < 1e-15) return Ci;
    var n155 = Math.ceil(Math.abs(Math.log10(i257))), s113 = Ci.lu + n155;
    return {
        lu: s113,
        fu: 1 / Math.pow(10, s113)
    };
}
var Vi, Pi = function() {
    function t81(t82, i258) {
        if (this.cu = t82, this.vu = i258, function(t) {
            if (t < 0) return !1;
            for(var i259 = t; i259 > 1; i259 /= 10)if (i259 % 10 != 0) return !1;
            return !0;
        }(this.cu)) this._u = [
            2,
            2.5,
            2
        ];
        else {
            this._u = [];
            for(var n156 = this.cu; 1 !== n156;){
                if (n156 % 2 == 0) this._u.push(2), n156 /= 2;
                else {
                    if (n156 % 5 != 0) throw new Error("unexpected base");
                    this._u.push(2, 2.5), n156 /= 5;
                }
                if (this._u.length > 100) throw new Error("something wrong with base");
            }
        }
    }
    return t81.prototype.du = function(t, i260, n157) {
        for(var s114, h77, r61, e47 = 0 === this.cu ? 0 : 1 / this.cu, u31 = Math.pow(10, Math.max(0, Math.ceil(Ct(t - i260)))), a27 = 0, o27 = this.vu[0];;){
            var l21 = xt(u31, e47, 1e-14) && u31 > e47 + 1e-14, f19 = xt(u31, n157 * o27, 1e-14), c15 = xt(u31, 1, 1e-14);
            if (!(l21 && f19 && c15)) break;
            u31 /= o27, o27 = this.vu[++a27 % this.vu.length];
        }
        if (u31 <= e47 + 1e-14 && (u31 = e47), u31 = Math.max(1, u31), this._u.length > 0 && (s114 = u31, h77 = 1, r61 = 1e-14, Math.abs(s114 - h77) < r61)) for(a27 = 0, o27 = this._u[0]; xt(u31, n157 * o27, 1e-14) && u31 > e47 + 1e-14;)u31 /= o27, o27 = this._u[++a27 % this._u.length];
        return u31;
    }, t81;
}(), Wi = function() {
    function t83(t, i261, n158, s115) {
        this.wu = [], this._i = t, this.cu = i261, this.Mu = n158, this.bu = s115;
    }
    return t83.prototype.du = function(t84, i262) {
        if (t84 < i262) throw new Error("high < low");
        var n159 = this._i.Yt(), s116 = (t84 - i262) * this.mu() / n159, h78 = new Pi(this.cu, [
            2,
            2.5,
            2
        ]), r62 = new Pi(this.cu, [
            2,
            2,
            2.5
        ]), e48 = new Pi(this.cu, [
            2.5,
            2,
            2
        ]), u32 = [];
        return u32.push(h78.du(t84, i262, s116), r62.du(t84, i262, s116), e48.du(t84, i262, s116)), function(t) {
            if (t.length < 1) throw Error("array is empty");
            for(var i263 = t[0], n160 = 1; n160 < t.length; ++n160)t[n160] < i263 && (i263 = t[n160]);
            return i263;
        }(u32);
    }, t83.prototype.pu = function() {
        var t = this._i, i264 = t.kt();
        if (null !== i264) {
            var n161 = t.Yt(), s117 = this.Mu(n161 - 1, i264), h79 = this.Mu(0, i264), r63 = this._i.W().entireTextOnly ? this.gu() / 2 : 0, e49 = r63, u33 = n161 - 1 - r63, a28 = Math.max(s117, h79), o28 = Math.min(s117, h79);
            if (a28 !== o28) {
                for(var l22 = this.du(a28, o28), f20 = a28 % l22, c16 = a28 >= o28 ? 1 : -1, v11 = null, _11 = 0, d8 = a28 - (f20 += f20 < 0 ? l22 : 0); d8 > o28; d8 -= l22){
                    var w8 = this.bu(d8, i264, !0);
                    null !== v11 && Math.abs(w8 - v11) < this.mu() || w8 < e49 || w8 > u33 || (_11 < this.wu.length ? (this.wu[_11].su = w8, this.wu[_11].yu = t.ku(d8)) : this.wu.push({
                        su: w8,
                        yu: t.ku(d8)
                    }), _11++, v11 = w8, t.Nu() && (l22 = this.du(d8 * c16, o28)));
                }
                this.wu.length = _11;
            } else this.wu = [];
        } else this.wu = [];
    }, t83.prototype.au = function() {
        return this.wu;
    }, t83.prototype.gu = function() {
        return this._i.S();
    }, t83.prototype.mu = function() {
        return Math.ceil(2.5 * this.gu());
    }, t83;
}();
function zi(t85) {
    return t85.slice().sort(function(t, i265) {
        return u(t.xi()) - u(i265.xi());
    });
}
!function(t) {
    t[t.Normal = 0] = "Normal", t[t.Logarithmic = 1] = "Logarithmic", t[t.Percentage = 2] = "Percentage", t[t.IndexedTo100 = 3] = "IndexedTo100";
}(Vi || (Vi = {}));
var Ri = new et, Ii = new rt(100, 1), ji = function() {
    function t86(t, i266, n162, s118) {
        this.xu = 0, this.Cu = null, this.Tr = null, this.Su = null, this.Tu = {
            Du: !1,
            Au: null
        }, this.Bu = 0, this.Lu = 0, this.Eu = new y, this.Fu = new y, this.Ou = [], this.Vu = null, this.Pu = null, this.Wu = null, this.zu = null, this.Ue = Ii, this.Ru = Oi(null), this.Iu = t, this.zi = i266, this.ju = n162, this.qu = s118, this.Uu = new Wi(this, 100, this.Hu.bind(this), this.Yu.bind(this));
    }
    return t86.prototype.Ke = function() {
        return this.Iu;
    }, t86.prototype.W = function() {
        return this.zi;
    }, t86.prototype.Pr = function(t) {
        if (k(this.zi, t), this.Xe(), void 0 !== t.mode && this.$u({
            mh: t.mode
        }), void 0 !== t.scaleMargins) {
            var i267 = e(t.scaleMargins.top), n163 = e(t.scaleMargins.bottom);
            if (i267 < 0 || i267 > 1) throw new Error("Invalid top margin - expect value between 0 and 1, given=".concat(i267));
            if (n163 < 0 || n163 > 1 || i267 + n163 > 1) throw new Error("Invalid bottom margin - expect value between 0 and 1, given=".concat(n163));
            if (i267 + n163 > 1) throw new Error("Invalid margins - sum of margins must be less than 1, given=".concat(i267 + n163));
            this.Ku(), this.Pu = null;
        }
    }, t86.prototype.Xu = function() {
        return this.zi.autoScale;
    }, t86.prototype.Nu = function() {
        return 1 === this.zi.mode;
    }, t86.prototype.vr = function() {
        return 2 === this.zi.mode;
    }, t86.prototype.Zu = function() {
        return 3 === this.zi.mode;
    }, t86.prototype.mh = function() {
        return {
            _n: this.zi.autoScale,
            Ju: this.zi.invertScale,
            mh: this.zi.mode
        };
    }, t86.prototype.$u = function(t87) {
        var i268 = this.mh(), n164 = null;
        void 0 !== t87._n && (this.zi.autoScale = t87._n), void 0 !== t87.mh && (this.zi.mode = t87.mh, 2 !== t87.mh && 3 !== t87.mh || (this.zi.autoScale = !0), this.Tu.Du = !1), 1 === i268.mh && t87.mh !== i268.mh && (!function(t, i269) {
            if (null === t) return !1;
            var n165 = Li(t.pr(), i269), s120 = Li(t.gr(), i269);
            return isFinite(n165) && isFinite(s120);
        }(this.Tr, this.Ru) ? this.zi.autoScale = !0 : null !== (n164 = Fi(this.Tr, this.Ru)) && this.Gu(n164)), 1 === t87.mh && t87.mh !== i268.mh && null !== (n164 = Ei(this.Tr, this.Ru)) && this.Gu(n164);
        var s119 = i268.mh !== this.zi.mode;
        s119 && (2 === i268.mh || this.vr()) && this.Xe(), s119 && (3 === i268.mh || this.Zu()) && this.Xe(), void 0 !== t87.Ju && i268.Ju !== t87.Ju && (this.zi.invertScale = t87.Ju, this.Qu()), this.Fu.m(i268, this.mh());
    }, t86.prototype.ta = function() {
        return this.Fu;
    }, t86.prototype.S = function() {
        return this.ju.fontSize;
    }, t86.prototype.Yt = function() {
        return this.xu;
    }, t86.prototype.ia = function(t) {
        this.xu !== t && (this.xu = t, this.Ku(), this.Pu = null);
    }, t86.prototype.na = function() {
        if (this.Cu) return this.Cu;
        var t = this.Yt() - this.sa() - this.ha();
        return this.Cu = t, t;
    }, t86.prototype.Ar = function() {
        return this.ra(), this.Tr;
    }, t86.prototype.Gu = function(t, i270) {
        var n166 = this.Tr;
        (i270 || null === n166 && null !== t || null !== n166 && !n166.br(t)) && (this.Pu = null, this.Tr = t);
    }, t86.prototype.wi = function() {
        return this.ra(), 0 === this.xu || !this.Tr || this.Tr.wi();
    }, t86.prototype.ea = function(t) {
        return this.Ju() ? t : this.Yt() - 1 - t;
    }, t86.prototype.xt = function(t, i271) {
        return this.vr() ? t = Si(t, i271) : this.Zu() && (t = Di(t, i271)), this.Yu(t, i271);
    }, t86.prototype.us = function(t, i272, n167) {
        this.ra();
        for(var s121 = this.ha(), h80 = u(this.Ar()), r64 = h80.pr(), e50 = h80.gr(), a29 = this.na() - 1, o29 = this.Ju(), l23 = a29 / (e50 - r64), f21 = void 0 === n167 ? 0 : n167.from, c17 = void 0 === n167 ? t.length : n167.to, v12 = this.ua(), _12 = f21; _12 < c17; _12++){
            var d9 = t[_12], w9 = d9.et;
            if (!isNaN(w9)) {
                var M5 = w9;
                null !== v12 && (M5 = v12(d9.et, i272));
                var b5 = s121 + l23 * (M5 - r64), m4 = o29 ? b5 : this.xu - 1 - b5;
                d9.it = m4;
            }
        }
    }, t86.prototype.Ss = function(t, i273, n168) {
        this.ra();
        for(var s122 = this.ha(), h81 = u(this.Ar()), r65 = h81.pr(), e51 = h81.gr(), a30 = this.na() - 1, o30 = this.Ju(), l24 = a30 / (e51 - r65), f22 = void 0 === n168 ? 0 : n168.from, c18 = void 0 === n168 ? t.length : n168.to, v13 = this.ua(), _13 = f22; _13 < c18; _13++){
            var d10 = t[_13], w10 = d10.open, M6 = d10.high, b6 = d10.low, m5 = d10.close;
            null !== v13 && (w10 = v13(d10.open, i273), M6 = v13(d10.high, i273), b6 = v13(d10.low, i273), m5 = v13(d10.close, i273));
            var p4 = s122 + l24 * (w10 - r65), g4 = o30 ? p4 : this.xu - 1 - p4;
            d10.xs = g4, p4 = s122 + l24 * (M6 - r65), g4 = o30 ? p4 : this.xu - 1 - p4, d10.ys = g4, p4 = s122 + l24 * (b6 - r65), g4 = o30 ? p4 : this.xu - 1 - p4, d10.ks = g4, p4 = s122 + l24 * (m5 - r65), g4 = o30 ? p4 : this.xu - 1 - p4, d10.Cs = g4;
        }
    }, t86.prototype.qi = function(t, i274) {
        var n169 = this.Hu(t, i274);
        return this.aa(n169, i274);
    }, t86.prototype.aa = function(t88, i275) {
        var n170 = t88;
        return this.vr() ? n170 = function(t, i276) {
            return i276 < 0 && (t = -t), t / 100 * i276 + i276;
        }(n170, i275) : this.Zu() && (n170 = function(t, i277) {
            return t -= 100, i277 < 0 && (t = -t), t / 100 * i277 + i277;
        }(n170, i275)), n170;
    }, t86.prototype.Ge = function() {
        return this.Ou;
    }, t86.prototype.oa = function() {
        if (this.Vu) return this.Vu;
        for(var t = [], i278 = 0; i278 < this.Ou.length; i278++){
            var n171 = this.Ou[i278];
            null === n171.xi() && n171.Ci(i278 + 1), t.push(n171);
        }
        return t = zi(t), this.Vu = t, this.Vu;
    }, t86.prototype.la = function(t) {
        -1 === this.Ou.indexOf(t) && (this.Ou.push(t), this.Xe(), this.fa());
    }, t86.prototype.ca = function(t) {
        var i279 = this.Ou.indexOf(t);
        if (-1 === i279) throw new Error("source is not attached to scale");
        this.Ou.splice(i279, 1), 0 === this.Ou.length && (this.$u({
            _n: !0
        }), this.Gu(null)), this.Xe(), this.fa();
    }, t86.prototype.kt = function() {
        for(var t = null, i280 = 0, n172 = this.Ou; i280 < n172.length; i280++){
            var s123 = n172[i280].kt();
            null !== s123 && (null === t || s123.Ve < t.Ve) && (t = s123);
        }
        return null === t ? null : t.St;
    }, t86.prototype.Ju = function() {
        return this.zi.invertScale;
    }, t86.prototype.au = function() {
        var t = null === this.kt();
        if (null !== this.Pu && (t || this.Pu.va === t)) return this.Pu.au;
        this.Uu.pu();
        var i281 = this.Uu.au();
        return this.Pu = {
            au: i281,
            va: t
        }, this.Eu.m(), i281;
    }, t86.prototype._a = function() {
        return this.Eu;
    }, t86.prototype.da = function(t) {
        this.vr() || this.Zu() || null === this.Wu && null === this.Su && (this.wi() || (this.Wu = this.xu - t, this.Su = u(this.Ar()).mr()));
    }, t86.prototype.wa = function(t) {
        if (!this.vr() && !this.Zu() && null !== this.Wu) {
            this.$u({
                _n: !1
            }), (t = this.xu - t) < 0 && (t = 0);
            var i282 = (this.Wu + .2 * (this.xu - 1)) / (t + .2 * (this.xu - 1)), n173 = u(this.Su).mr();
            i282 = Math.max(i282, .1), n173.kr(i282), this.Gu(n173);
        }
    }, t86.prototype.Ma = function() {
        this.vr() || this.Zu() || (this.Wu = null, this.Su = null);
    }, t86.prototype.ba = function(t) {
        this.Xu() || null === this.zu && null === this.Su && (this.wi() || (this.zu = t, this.Su = u(this.Ar()).mr()));
    }, t86.prototype.ma = function(t) {
        if (!this.Xu() && null !== this.zu) {
            var i283 = u(this.Ar()).yr() / (this.na() - 1), n174 = t - this.zu;
            this.Ju() && (n174 *= -1);
            var s124 = n174 * i283, h82 = u(this.Su).mr();
            h82.Nr(s124), this.Gu(h82, !0), this.Pu = null;
        }
    }, t86.prototype.pa = function() {
        this.Xu() || null !== this.zu && (this.zu = null, this.Su = null);
    }, t86.prototype.qe = function() {
        return this.Ue || this.Xe(), this.Ue;
    }, t86.prototype.Mi = function(t, i284) {
        switch(this.zi.mode){
            case 2:
                return this.qe().format(Si(t, i284));
            case 3:
                return this.qe().format(Di(t, i284));
            default:
                return this.ga(t);
        }
    }, t86.prototype.ku = function(t) {
        switch(this.zi.mode){
            case 2:
            case 3:
                return this.qe().format(t);
            default:
                return this.ga(t);
        }
    }, t86.prototype.Fr = function(t) {
        return this.ga(t, u(this.ya()).qe());
    }, t86.prototype.Ne = function(t, i285) {
        return t = Si(t, i285), Ri.format(t);
    }, t86.prototype.ka = function() {
        return this.Ou;
    }, t86.prototype.Na = function(t) {
        this.Tu = {
            Au: t,
            Du: !1
        };
    }, t86.prototype.hn = function() {
        this.Ou.forEach(function(t) {
            return t.hn();
        });
    }, t86.prototype.Xe = function() {
        this.Pu = null;
        var t = this.ya(), i286 = 100;
        null !== t && (i286 = Math.round(1 / t.je())), this.Ue = Ii, this.vr() ? (this.Ue = Ri, i286 = 100) : this.Zu() ? (this.Ue = new rt(100, 1), i286 = 100) : null !== t && (this.Ue = t.qe()), this.Uu = new Wi(this, i286, this.Hu.bind(this), this.Yu.bind(this)), this.Uu.pu();
    }, t86.prototype.fa = function() {
        this.Vu = null;
    }, t86.prototype.ya = function() {
        return this.Ou[0] || null;
    }, t86.prototype.sa = function() {
        return this.Ju() ? this.zi.scaleMargins.bottom * this.Yt() + this.Lu : this.zi.scaleMargins.top * this.Yt() + this.Bu;
    }, t86.prototype.ha = function() {
        return this.Ju() ? this.zi.scaleMargins.top * this.Yt() + this.Bu : this.zi.scaleMargins.bottom * this.Yt() + this.Lu;
    }, t86.prototype.ra = function() {
        this.Tu.Du || (this.Tu.Du = !0, this.xa());
    }, t86.prototype.Ku = function() {
        this.Cu = null;
    }, t86.prototype.Yu = function(t, i) {
        if (this.ra(), this.wi()) return 0;
        t = this.Nu() && t ? Bi(t, this.Ru) : t;
        var n175 = u(this.Ar()), s125 = this.ha() + (this.na() - 1) * (t - n175.pr()) / n175.yr();
        return this.ea(s125);
    }, t86.prototype.Hu = function(t, i) {
        if (this.ra(), this.wi()) return 0;
        var n176 = this.ea(t), s126 = u(this.Ar()), h83 = s126.pr() + s126.yr() * ((n176 - this.ha()) / (this.na() - 1));
        return this.Nu() ? Li(h83, this.Ru) : h83;
    }, t86.prototype.Qu = function() {
        this.Pu = null, this.Uu.pu();
    }, t86.prototype.xa = function() {
        var t = this.Tu.Au;
        if (null !== t) {
            for(var i287, n177, s127 = null, h84 = 0, r66 = 0, e52 = 0, a31 = this.ka(); e52 < a31.length; e52++){
                var o31 = a31[e52];
                if (o31.yt()) {
                    var l25 = o31.kt();
                    if (null !== l25) {
                        var f23 = o31.Re(t.In(), t.jn()), c19 = f23 && f23.Ar();
                        if (null !== c19) {
                            switch(this.zi.mode){
                                case 1:
                                    c19 = Ei(c19, this.Ru);
                                    break;
                                case 2:
                                    c19 = Ti(c19, l25.St);
                                    break;
                                case 3:
                                    c19 = Ai(c19, l25.St);
                            }
                            if (s127 = null === s127 ? c19 : s127.Nn(u(c19)), null !== f23) {
                                var v14 = f23.Br();
                                null !== v14 && (h84 = Math.max(h84, v14.above), r66 = Math.max(h84, v14.below));
                            }
                        }
                    }
                }
            }
            if (h84 === this.Bu && r66 === this.Lu || (this.Bu = h84, this.Lu = r66, this.Pu = null, this.Ku()), null !== s127) {
                if (s127.pr() === s127.gr()) {
                    var _14 = this.ya(), d11 = 5 * (null === _14 || this.vr() || this.Zu() ? 1 : _14.je());
                    this.Nu() && (s127 = Fi(s127, this.Ru)), s127 = new fi(s127.pr() - d11, s127.gr() + d11), this.Nu() && (s127 = Ei(s127, this.Ru));
                }
                if (this.Nu()) {
                    var w11 = Fi(s127, this.Ru), M7 = Oi(w11);
                    if (i287 = M7, n177 = this.Ru, i287.lu !== n177.lu || i287.fu !== n177.fu) {
                        var b7 = null !== this.Su ? Fi(this.Su, this.Ru) : null;
                        this.Ru = M7, s127 = Ei(w11, M7), null !== b7 && (this.Su = Ei(b7, M7));
                    }
                }
                this.Gu(s127);
            } else null === this.Tr && (this.Gu(new fi(-0.5, .5)), this.Ru = Oi(null));
            this.Tu.Du = !0;
        }
    }, t86.prototype.ua = function() {
        var t = this;
        return this.vr() ? Si : this.Zu() ? Di : this.Nu() ? function(i288) {
            return Bi(i288, t.Ru);
        } : null;
    }, t86.prototype.ga = function(t, i289) {
        return void 0 === this.qu.priceFormatter ? (void 0 === i289 && (i289 = this.qe()), i289.format(t)) : this.qu.priceFormatter(t);
    }, t86;
}(), qi = function() {
    function t89(t, i290) {
        this.Ou = [], this.Ca = new Map, this.xu = 0, this.hh = 0, this.Sa = 1e3, this.Vu = null, this.Ta = new y, this.Da = t, this.pi = i290, this.Aa = new xi(this);
        var n178 = i290.W();
        this.Ba = this.La("left", n178.leftPriceScale), this.Ea = this.La("right", n178.rightPriceScale), this.Ba.ta().u(this.Fa.bind(this, this.Ba), this), this.Ea.ta().u(this.Fa.bind(this, this.Ba), this), this.Oa(n178);
    }
    return t89.prototype.Oa = function(t) {
        if (t.leftPriceScale && this.Ba.Pr(t.leftPriceScale), t.rightPriceScale && this.Ea.Pr(t.rightPriceScale), t.localization && (this.Ba.Xe(), this.Ea.Xe()), t.overlayPriceScales) for(var i291 = 0, n179 = Array.from(this.Ca.values()); i291 < n179.length; i291++){
            var s128 = u(n179[i291][0].Ct());
            s128.Pr(t.overlayPriceScales), t.localization && s128.Xe();
        }
    }, t89.prototype.Va = function(t) {
        switch(t){
            case "left":
                return this.Ba;
            case "right":
                return this.Ea;
        }
        return this.Ca.has(t) ? e(this.Ca.get(t))[0].Ct() : null;
    }, t89.prototype.g = function() {
        this.jt().Pa().M(this), this.Ba.ta().M(this), this.Ea.ta().M(this), this.Ou.forEach(function(t) {
            t.g && t.g();
        }), this.Ta.m();
    }, t89.prototype.Wa = function() {
        return this.Sa;
    }, t89.prototype.za = function(t) {
        this.Sa = t;
    }, t89.prototype.jt = function() {
        return this.pi;
    }, t89.prototype.Ht = function() {
        return this.hh;
    }, t89.prototype.Yt = function() {
        return this.xu;
    }, t89.prototype.Ra = function(t) {
        this.hh = t, this.Ia();
    }, t89.prototype.ia = function(t) {
        var i292 = this;
        this.xu = t, this.Ba.ia(t), this.Ea.ia(t), this.Ou.forEach(function(n180) {
            if (i292.lh(n180)) {
                var s129 = n180.Ct();
                null !== s129 && s129.ia(t);
            }
        }), this.Ia();
    }, t89.prototype.Ge = function() {
        return this.Ou;
    }, t89.prototype.lh = function(t) {
        var i293 = t.Ct();
        return null === i293 || this.Ba !== i293 && this.Ea !== i293;
    }, t89.prototype.la = function(t, i294, n181) {
        var s130 = void 0 !== n181 ? n181 : this.qa().ja + 1;
        this.Ua(t, i294, s130);
    }, t89.prototype.ca = function(t) {
        var i295 = this.Ou.indexOf(t);
        r(-1 !== i295, "removeDataSource: invalid data source"), this.Ou.splice(i295, 1);
        var n182 = u(t.Ct()).Ke();
        if (this.Ca.has(n182)) {
            var s131 = e(this.Ca.get(n182)), h85 = s131.indexOf(t);
            -1 !== h85 && (s131.splice(h85, 1), 0 === s131.length && this.Ca.delete(n182));
        }
        var a32 = t.Ct();
        a32 && a32.Ge().indexOf(t) >= 0 && a32.ca(t), null !== a32 && (a32.fa(), this.Ha(a32)), this.Vu = null;
    }, t89.prototype._h = function(t) {
        return t === this.Ba ? "left" : t === this.Ea ? "right" : "overlay";
    }, t89.prototype.Ya = function() {
        return this.Ba;
    }, t89.prototype.$a = function() {
        return this.Ea;
    }, t89.prototype.Ka = function(t, i296) {
        t.da(i296);
    }, t89.prototype.Xa = function(t, i297) {
        t.wa(i297), this.Ia();
    }, t89.prototype.Za = function(t) {
        t.Ma();
    }, t89.prototype.Ja = function(t, i298) {
        t.ba(i298);
    }, t89.prototype.Ga = function(t, i299) {
        t.ma(i299), this.Ia();
    }, t89.prototype.Qa = function(t) {
        t.pa();
    }, t89.prototype.Ia = function() {
        this.Ou.forEach(function(t) {
            t.hn();
        });
    }, t89.prototype.ji = function() {
        var t = null;
        return this.pi.W().rightPriceScale.visible && 0 !== this.Ea.Ge().length ? t = this.Ea : this.pi.W().leftPriceScale.visible && 0 !== this.Ba.Ge().length ? t = this.Ba : 0 !== this.Ou.length && (t = this.Ou[0].Ct()), null === t && (t = this.Ea), t;
    }, t89.prototype.fh = function() {
        var t = null;
        return this.pi.W().rightPriceScale.visible ? t = this.Ea : this.pi.W().leftPriceScale.visible && (t = this.Ba), t;
    }, t89.prototype.Ha = function(t) {
        null !== t && t.Xu() && this.io(t);
    }, t89.prototype.no = function(t) {
        var i300 = this.Da.ss();
        t.$u({
            _n: !0
        }), null !== i300 && t.Na(i300), this.Ia();
    }, t89.prototype.so = function() {
        this.io(this.Ba), this.io(this.Ea);
    }, t89.prototype.ho = function() {
        var t = this;
        this.Ha(this.Ba), this.Ha(this.Ea), this.Ou.forEach(function(i301) {
            t.lh(i301) && t.Ha(i301.Ct());
        }), this.Ia(), this.pi.Wr();
    }, t89.prototype.oa = function() {
        return null === this.Vu && (this.Vu = zi(this.Ou)), this.Vu;
    }, t89.prototype.ro = function() {
        return this.Ta;
    }, t89.prototype.eo = function() {
        return this.Aa;
    }, t89.prototype.io = function(t) {
        var i302 = t.ka();
        if (i302 && i302.length > 0 && !this.Da.wi()) {
            var n183 = this.Da.ss();
            null !== n183 && t.Na(n183);
        }
        t.hn();
    }, t89.prototype.qa = function() {
        var t = this.oa();
        if (0 === t.length) return {
            uo: 0,
            ja: 0
        };
        for(var i303 = 0, n184 = 0, s132 = 0; s132 < t.length; s132++){
            var h86 = t[s132].xi();
            null !== h86 && (h86 < i303 && (i303 = h86), h86 > n184 && (n184 = h86));
        }
        return {
            uo: i303,
            ja: n184
        };
    }, t89.prototype.Ua = function(t, i304, n185) {
        var s133 = this.Va(i304);
        if (null === s133 && (s133 = this.La(i304, this.pi.W().overlayPriceScales)), this.Ou.push(t), !it(i304)) {
            var h87 = this.Ca.get(i304) || [];
            h87.push(t), this.Ca.set(i304, h87);
        }
        s133.la(t), t.Si(s133), t.Ci(n185), this.Ha(s133), this.Vu = null;
    }, t89.prototype.Fa = function(t, i305, n186) {
        i305.mh !== n186.mh && this.io(t);
    }, t89.prototype.La = function(t, i306) {
        var n187 = p({
            visible: !0,
            autoScale: !0
        }, T(i306)), s134 = new ji(t, n187, this.pi.W().layout, this.pi.W().localization);
        return s134.ia(this.Yt()), s134;
    }, t89;
}(), Ui = function(t) {
    return t.getUTCFullYear();
};
function Hi(t90, i307, n188) {
    return i307.replace(/yyyy/g, function(t) {
        return ht(Ui(t), 4);
    }(t90)).replace(/yy/g, function(t) {
        return ht(Ui(t) % 100, 2);
    }(t90)).replace(/MMMM/g, function(t, i308) {
        return new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i308, {
            month: "long"
        });
    }(t90, n188)).replace(/MMM/g, function(t, i309) {
        return new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i309, {
            month: "short"
        });
    }(t90, n188)).replace(/MM/g, function(t91) {
        return ht(function(t) {
            return t.getUTCMonth() + 1;
        }(t91), 2);
    }(t90)).replace(/dd/g, function(t92) {
        return ht(function(t) {
            return t.getUTCDate();
        }(t92), 2);
    }(t90));
}
var Yi = function() {
    function t93(t, i310) {
        void 0 === t && (t = "yyyy-MM-dd"), void 0 === i310 && (i310 = "default"), this.ao = t, this.oo = i310;
    }
    return t93.prototype.lo = function(t) {
        return Hi(t, this.ao, this.oo);
    }, t93;
}(), $i = function() {
    function t94(t) {
        this.fo = t || "%h:%m:%s";
    }
    return t94.prototype.lo = function(t) {
        return this.fo.replace("%h", ht(t.getUTCHours(), 2)).replace("%m", ht(t.getUTCMinutes(), 2)).replace("%s", ht(t.getUTCSeconds(), 2));
    }, t94;
}(), Ki = {
    co: "yyyy-MM-dd",
    vo: "%h:%m:%s",
    _o: " ",
    do: "default"
}, Xi = function() {
    function t95(t) {
        void 0 === t && (t = {});
        var i311 = p(p({}, Ki), t);
        this.wo = new Yi(i311.co, i311.do), this.Mo = new $i(i311.vo), this.bo = i311._o;
    }
    return t95.prototype.lo = function(t) {
        return "".concat(this.wo.lo(t)).concat(this.bo).concat(this.Mo.lo(t));
    }, t95;
}();
var Zi = function() {
    function t96(t, i312) {
        void 0 === i312 && (i312 = 50), this.mo = 0, this.po = 1, this.yo = 1, this.Gs = new Map, this.ko = new Map, this.No = t, this.xo = i312;
    }
    return t96.prototype.lo = function(t) {
        var i313 = void 0 === t.Co ? new Date(1e3 * t.So).getTime() : new Date(Date.UTC(t.Co.year, t.Co.month - 1, t.Co.day)).getTime(), n189 = this.Gs.get(i313);
        if (void 0 !== n189) return n189.To;
        if (this.mo === this.xo) {
            var s135 = this.ko.get(this.yo);
            this.ko.delete(this.yo), this.Gs.delete(e(s135)), this.yo++, this.mo--;
        }
        var h88 = this.No(t);
        return this.Gs.set(i313, {
            To: h88,
            Do: this.po
        }), this.ko.set(this.po, i313), this.mo++, this.po++, h88;
    }, t96;
}(), Ji = function() {
    function t97(t, i314) {
        r(t <= i314, "right should be >= left"), this.Ao = t, this.Bo = i314;
    }
    return t97.prototype.In = function() {
        return this.Ao;
    }, t97.prototype.jn = function() {
        return this.Bo;
    }, t97.prototype.Lo = function() {
        return this.Bo - this.Ao + 1;
    }, t97.prototype.Uh = function(t) {
        return this.Ao <= t && t <= this.Bo;
    }, t97.prototype.br = function(t) {
        return this.Ao === t.In() && this.Bo === t.jn();
    }, t97;
}();
function Gi(t, i315) {
    return null === t || null === i315 ? t === i315 : t.br(i315);
}
var Qi, tn = function() {
    function t98() {
        this.Eo = new Map, this.Gs = null;
    }
    return t98.prototype.Fo = function(t, i316) {
        this.Oo(i316), this.Gs = null;
        for(var n190 = i316; n190 < t.length; ++n190){
            var s136 = t[n190], h89 = this.Eo.get(s136.Vo);
            void 0 === h89 && (h89 = [], this.Eo.set(s136.Vo, h89)), h89.push({
                vs: n190,
                rt: s136.rt,
                Po: s136.Vo
            });
        }
    }, t98.prototype.Wo = function(t, i317) {
        var n191 = Math.ceil(i317 / t);
        return null !== this.Gs && this.Gs.zo === n191 || (this.Gs = {
            au: this.Ro(n191),
            zo: n191
        }), this.Gs.au;
    }, t98.prototype.Oo = function(t) {
        if (0 !== t) {
            var i318 = [];
            this.Eo.forEach(function(n194, s139) {
                t <= n194[0].vs ? i318.push(s139) : n194.splice(vt(n194, t, function(i319) {
                    return i319.vs < t;
                }), 1 / 0);
            });
            for(var n192 = 0, s137 = i318; n192 < s137.length; n192++){
                var h90 = s137[n192];
                this.Eo.delete(h90);
            }
        } else this.Eo.clear();
    }, t98.prototype.Ro = function(t99) {
        for(var i320 = [], n195 = 0, s140 = Array.from(this.Eo.keys()).sort(function(t, i321) {
            return i321 - t;
        }); n195 < s140.length; n195++){
            var h91 = s140[n195];
            if (this.Eo.get(h91)) {
                var r67 = i320;
                i320 = [];
                for(var u34 = r67.length, a33 = 0, o32 = e(this.Eo.get(h91)), l26 = o32.length, f24 = 1 / 0, c20 = -1 / 0, v15 = 0; v15 < l26; v15++){
                    for(var _15 = o32[v15], d12 = _15.vs; a33 < u34;){
                        var w12 = r67[a33], M8 = w12.vs;
                        if (!(M8 < d12)) {
                            f24 = M8;
                            break;
                        }
                        a33++, i320.push(w12), c20 = M8, f24 = 1 / 0;
                    }
                    f24 - d12 >= t99 && d12 - c20 >= t99 && (i320.push(_15), c20 = d12);
                }
                for(; a33 < u34; a33++)i320.push(r67[a33]);
            }
        }
        return i320;
    }, t98;
}(), nn = function() {
    function t100(t) {
        this.Io = t;
    }
    return t100.prototype.jo = function() {
        return null === this.Io ? null : new Ji(Math.floor(this.Io.In()), Math.ceil(this.Io.jn()));
    }, t100.prototype.qo = function() {
        return this.Io;
    }, t100.Uo = function() {
        return new t100(null);
    }, t100;
}();
!function(t) {
    t[t.Year = 0] = "Year", t[t.Month = 1] = "Month", t[t.DayOfMonth = 2] = "DayOfMonth", t[t.Time = 3] = "Time", t[t.TimeWithSeconds = 4] = "TimeWithSeconds";
}(Qi || (Qi = {}));
var sn = function() {
    function t101(t, i322, n196) {
        this.hh = 0, this.Ho = null, this.Yo = [], this.zu = null, this.Wu = null, this.$o = new tn, this.Ko = new Map, this.Xo = nn.Uo(), this.Zo = !0, this.Jo = new y, this.Go = new y, this.Qo = new y, this.tl = null, this.il = null, this.nl = [], this.zi = i322, this.qu = n196, this.sl = i322.rightOffset, this.hl = i322.barSpacing, this.pi = t, this.rl();
    }
    return t101.prototype.W = function() {
        return this.zi;
    }, t101.prototype.el = function(t) {
        k(this.qu, t), this.ul(), this.rl();
    }, t101.prototype.Pr = function(t, i) {
        var n197;
        k(this.zi, t), this.zi.fixLeftEdge && this.al(), this.zi.fixRightEdge && this.ol(), void 0 !== t.barSpacing && this.pi.gn(t.barSpacing), void 0 !== t.rightOffset && this.pi.yn(t.rightOffset), void 0 !== t.minBarSpacing && this.pi.gn(null !== (n197 = t.barSpacing) && void 0 !== n197 ? n197 : this.hl), this.ul(), this.rl(), this.Qo.m();
    }, t101.prototype.gi = function(t) {
        var i323;
        return (null === (i323 = this.Yo[t]) || void 0 === i323 ? void 0 : i323.rt) || null;
    }, t101.prototype.Ze = function(t102, i324) {
        if (this.Yo.length < 1) return null;
        if (t102.So > this.Yo[this.Yo.length - 1].rt.So) return i324 ? this.Yo.length - 1 : null;
        var n198 = vt(this.Yo, t102.So, function(t, i325) {
            return t.rt.So < i325;
        });
        return t102.So < this.Yo[n198].rt.So ? i324 ? n198 : null : n198;
    }, t101.prototype.wi = function() {
        return 0 === this.hh || 0 === this.Yo.length || null === this.Ho;
    }, t101.prototype.ss = function() {
        return this.ll(), this.Xo.jo();
    }, t101.prototype.fl = function() {
        return this.ll(), this.Xo.qo();
    }, t101.prototype.cl = function() {
        var t = this.ss();
        if (null === t) return null;
        var i326 = {
            from: t.In(),
            to: t.jn()
        };
        return this.vl(i326);
    }, t101.prototype.vl = function(t) {
        var i327 = Math.round(t.from), n199 = Math.round(t.to), s141 = u(this._l()), h92 = u(this.dl());
        return {
            from: u(this.gi(Math.max(s141, i327))),
            to: u(this.gi(Math.min(h92, n199)))
        };
    }, t101.prototype.wl = function(t) {
        return {
            from: u(this.Ze(t.from, !0)),
            to: u(this.Ze(t.to, !0))
        };
    }, t101.prototype.Ht = function() {
        return this.hh;
    }, t101.prototype.Ra = function(t) {
        if (isFinite(t) && !(t <= 0) && this.hh !== t) {
            if (this.zi.lockVisibleTimeRangeOnResize && this.hh) {
                var i328 = this.hl * t / this.hh;
                this.hl = i328;
            }
            if (this.zi.fixLeftEdge) {
                var n200 = this.ss();
                if (null !== n200) {
                    if (n200.In() <= 0) {
                        var s142 = this.hh - t;
                        this.sl -= Math.round(s142 / this.hl) + 1;
                    }
                }
            }
            this.hh = t, this.Zo = !0, this.Ml(), this.bl();
        }
    }, t101.prototype.At = function(t) {
        if (this.wi() || !x(t)) return 0;
        var i329 = this.ml() + this.sl - t;
        return this.hh - (i329 + .5) * this.hl - 1;
    }, t101.prototype.es = function(t, i330) {
        for(var n201 = this.ml(), s143 = void 0 === i330 ? 0 : i330.from, h93 = void 0 === i330 ? t.length : i330.to, r68 = s143; r68 < h93; r68++){
            var e53 = t[r68].rt, u35 = n201 + this.sl - e53, a34 = this.hh - (u35 + .5) * this.hl - 1;
            t[r68].tt = a34;
        }
    }, t101.prototype.pl = function(t) {
        return Math.ceil(this.gl(t));
    }, t101.prototype.yn = function(t) {
        this.Zo = !0, this.sl = t, this.bl(), this.pi.yl(), this.pi.Wr();
    }, t101.prototype.ws = function() {
        return this.hl;
    }, t101.prototype.gn = function(t) {
        this.kl(t), this.bl(), this.pi.yl(), this.pi.Wr();
    }, t101.prototype.Nl = function() {
        return this.sl;
    }, t101.prototype.au = function() {
        if (this.wi()) return null;
        if (null !== this.il) return this.il;
        for(var t = this.hl, i331 = 5 * (this.pi.W().layout.fontSize + 4), n202 = Math.round(i331 / t), s144 = u(this.ss()), h94 = Math.max(s144.In(), s144.In() - n202), r69 = Math.max(s144.jn(), s144.jn() - n202), e54 = this.$o.Wo(t, i331), a35 = this._l() + n202, o33 = this.dl() - n202, l27 = this.xl(), f25 = this.zi.fixLeftEdge || l27, c21 = this.zi.fixRightEdge || l27, v16 = 0, _16 = 0, d13 = e54; _16 < d13.length; _16++){
            var w13 = d13[_16];
            if (h94 <= w13.vs && w13.vs <= r69) {
                var M9 = void 0;
                v16 < this.nl.length ? ((M9 = this.nl[v16]).su = this.At(w13.vs), M9.yu = this.Cl(w13.rt, w13.Po), M9.Po = w13.Po) : (M9 = {
                    Sl: !1,
                    su: this.At(w13.vs),
                    yu: this.Cl(w13.rt, w13.Po),
                    Po: w13.Po
                }, this.nl.push(M9)), this.hl > i331 / 2 && !l27 ? M9.Sl = !1 : M9.Sl = f25 && w13.vs <= a35 || c21 && w13.vs >= o33, v16++;
            }
        }
        return this.nl.length = v16, this.il = this.nl, this.nl;
    }, t101.prototype.Tl = function() {
        this.Zo = !0, this.gn(this.zi.barSpacing), this.yn(this.zi.rightOffset);
    }, t101.prototype.Dl = function(t) {
        this.Zo = !0, this.Ho = t, this.bl(), this.al();
    }, t101.prototype.Al = function(t, i332) {
        var n203 = this.gl(t), s145 = this.ws(), h95 = s145 + i332 * (s145 / 10);
        this.gn(h95), this.zi.rightBarStaysOnScroll || this.yn(this.Nl() + (n203 - this.gl(t)));
    }, t101.prototype.da = function(t) {
        this.zu && this.pa(), null === this.Wu && null === this.tl && (this.wi() || (this.Wu = t, this.Bl()));
    }, t101.prototype.wa = function(t) {
        if (null !== this.tl) {
            var i333 = Nt(this.hh - t, 0, this.hh), n204 = Nt(this.hh - u(this.Wu), 0, this.hh);
            0 !== i333 && 0 !== n204 && this.gn(this.tl.ws * i333 / n204);
        }
    }, t101.prototype.Ma = function() {
        null !== this.Wu && (this.Wu = null, this.Ll());
    }, t101.prototype.ba = function(t) {
        null === this.zu && null === this.tl && (this.wi() || (this.zu = t, this.Bl()));
    }, t101.prototype.ma = function(t) {
        if (null !== this.zu) {
            var i334 = (this.zu - t) / this.ws();
            this.sl = u(this.tl).Nl + i334, this.Zo = !0, this.bl();
        }
    }, t101.prototype.pa = function() {
        null !== this.zu && (this.zu = null, this.Ll());
    }, t101.prototype.El = function() {
        this.Fl(this.zi.rightOffset);
    }, t101.prototype.Fl = function(t, i335) {
        var n205 = this;
        if (void 0 === i335 && (i335 = 400), !isFinite(t)) throw new RangeError("offset is required and must be finite number");
        if (!isFinite(i335) || i335 <= 0) throw new RangeError("animationDuration (optional) must be finite positive number");
        var s146 = this.sl, h96 = performance.now(), r70 = function() {
            var e55 = (performance.now() - h96) / i335, u36 = e55 >= 1, a36 = u36 ? t : s146 + (t - s146) * e55;
            n205.yn(a36), u36 || setTimeout(r70, 20);
        };
        r70();
    }, t101.prototype.vt = function(t, i336) {
        this.Zo = !0, this.Yo = t, this.$o.Fo(t, i336), this.bl();
    }, t101.prototype.Ol = function() {
        return this.Jo;
    }, t101.prototype.Vl = function() {
        return this.Go;
    }, t101.prototype.Pl = function() {
        return this.Qo;
    }, t101.prototype.ml = function() {
        return this.Ho || 0;
    }, t101.prototype.Wl = function(t) {
        var i337 = t.Lo();
        this.kl(this.hh / i337), this.sl = t.jn() - this.ml(), this.bl(), this.Zo = !0, this.pi.yl(), this.pi.Wr();
    }, t101.prototype.zl = function() {
        var t = this._l(), i338 = this.dl();
        null !== t && null !== i338 && this.Wl(new Ji(t, i338 + this.zi.rightOffset));
    }, t101.prototype.Rl = function(t) {
        var i339 = new Ji(t.from, t.to);
        this.Wl(i339);
    }, t101.prototype.yi = function(t) {
        return void 0 !== this.qu.timeFormatter ? this.qu.timeFormatter(t.Co || t.So) : this.Il.lo(new Date(1e3 * t.So));
    }, t101.prototype.xl = function() {
        var t = this.pi.W(), i340 = t.handleScroll, n206 = t.handleScale;
        return !(i340.horzTouchDrag || i340.mouseWheel || i340.pressedMouseMove || i340.vertTouchDrag || n206.axisDoubleClickReset || n206.axisPressedMouseMove.time || n206.mouseWheel || n206.pinch);
    }, t101.prototype._l = function() {
        return 0 === this.Yo.length ? null : 0;
    }, t101.prototype.dl = function() {
        return 0 === this.Yo.length ? null : this.Yo.length - 1;
    }, t101.prototype.jl = function(t) {
        return (this.hh - 1 - t) / this.hl;
    }, t101.prototype.gl = function(t) {
        var i341 = this.jl(t), n207 = this.ml() + this.sl - i341;
        return Math.round(1e6 * n207) / 1e6;
    }, t101.prototype.kl = function(t) {
        var i342 = this.hl;
        this.hl = t, this.Ml(), i342 !== this.hl && (this.Zo = !0, this.ql());
    }, t101.prototype.ll = function() {
        if (this.Zo) {
            if (this.Zo = !1, this.wi()) this.Ul(nn.Uo());
            else {
                var t = this.ml(), i343 = this.hh / this.hl, n208 = this.sl + t, s147 = new Ji(n208 - i343 + 1, n208);
                this.Ul(new nn(s147));
            }
        }
    }, t101.prototype.Ml = function() {
        var t = this.Hl();
        if (this.hl < t && (this.hl = t, this.Zo = !0), 0 !== this.hh) {
            var i344 = .5 * this.hh;
            this.hl > i344 && (this.hl = i344, this.Zo = !0);
        }
    }, t101.prototype.Hl = function() {
        return this.zi.fixLeftEdge && this.zi.fixRightEdge && 0 !== this.Yo.length ? this.hh / this.Yo.length : this.zi.minBarSpacing;
    }, t101.prototype.bl = function() {
        var t = this.Yl();
        this.sl > t && (this.sl = t, this.Zo = !0);
        var i345 = this.$l();
        null !== i345 && this.sl < i345 && (this.sl = i345, this.Zo = !0);
    }, t101.prototype.$l = function() {
        var t = this._l(), i346 = this.Ho;
        return null === t || null === i346 ? null : t - i346 - 1 + (this.zi.fixLeftEdge ? this.hh / this.hl : Math.min(2, this.Yo.length));
    }, t101.prototype.Yl = function() {
        return this.zi.fixRightEdge ? 0 : this.hh / this.hl - Math.min(2, this.Yo.length);
    }, t101.prototype.Bl = function() {
        this.tl = {
            ws: this.ws(),
            Nl: this.Nl()
        };
    }, t101.prototype.Ll = function() {
        this.tl = null;
    }, t101.prototype.Cl = function(t103, i347) {
        var n209 = this, s148 = this.Ko.get(i347);
        return void 0 === s148 && (s148 = new Zi(function(t) {
            return n209.Kl(t, i347);
        }), this.Ko.set(i347, s148)), s148.lo(t103);
    }, t101.prototype.Kl = function(t104, i348) {
        var n210, s149 = function(t, i349, n211) {
            switch(t){
                case 0:
                case 10:
                    return i349 ? n211 ? 4 : 3 : 2;
                case 20:
                case 21:
                case 22:
                case 30:
                case 31:
                case 32:
                case 33:
                    return i349 ? 3 : 2;
                case 50:
                    return 2;
                case 60:
                    return 1;
                case 70:
                    return 0;
            }
        }(i348, this.zi.timeVisible, this.zi.secondsVisible);
        return void 0 !== this.zi.tickMarkFormatter ? this.zi.tickMarkFormatter(null !== (n210 = t104.Co) && void 0 !== n210 ? n210 : t104.So, s149, this.qu.locale) : function(t, i350, n212) {
            var s150 = {};
            switch(i350){
                case 0:
                    s150.year = "numeric";
                    break;
                case 1:
                    s150.month = "short";
                    break;
                case 2:
                    s150.day = "numeric";
                    break;
                case 3:
                    s150.hour12 = !1, s150.hour = "2-digit", s150.minute = "2-digit";
                    break;
                case 4:
                    s150.hour12 = !1, s150.hour = "2-digit", s150.minute = "2-digit", s150.second = "2-digit";
            }
            var h97 = void 0 === t.Co ? new Date(1e3 * t.So) : new Date(Date.UTC(t.Co.year, t.Co.month - 1, t.Co.day));
            return new Date(h97.getUTCFullYear(), h97.getUTCMonth(), h97.getUTCDate(), h97.getUTCHours(), h97.getUTCMinutes(), h97.getUTCSeconds(), h97.getUTCMilliseconds()).toLocaleString(n212, s150);
        }(t104, s149, this.qu.locale);
    }, t101.prototype.Ul = function(t) {
        var i351 = this.Xo;
        this.Xo = t, Gi(i351.jo(), this.Xo.jo()) || this.Jo.m(), Gi(i351.qo(), this.Xo.qo()) || this.Go.m(), this.ql();
    }, t101.prototype.ql = function() {
        this.il = null;
    }, t101.prototype.ul = function() {
        this.ql(), this.Ko.clear();
    }, t101.prototype.rl = function() {
        var t = this.qu.dateFormat;
        this.zi.timeVisible ? this.Il = new Xi({
            co: t,
            vo: this.zi.secondsVisible ? "%h:%m:%s" : "%h:%m",
            _o: "   ",
            do: this.qu.locale
        }) : this.Il = new Yi(t, this.qu.locale);
    }, t101.prototype.al = function() {
        if (this.zi.fixLeftEdge) {
            var t = this._l();
            if (null !== t) {
                var i352 = this.ss();
                if (null !== i352) {
                    var n213 = i352.In() - t;
                    if (n213 < 0) {
                        var s151 = this.sl - n213 - 1;
                        this.yn(s151);
                    }
                    this.Ml();
                }
            }
        }
    }, t101.prototype.ol = function() {
        this.bl(), this.Ml();
    }, t101;
}();
var hn, rn = function(t105) {
    function i353(i354) {
        var n214 = t105.call(this) || this;
        return n214.Xl = new Map, n214.Bt = i354, n214;
    }
    return m(i353, t105), i353.prototype.Y = function(t) {}, i353.prototype.K = function(t) {
        if (this.Bt.yt) {
            t.save();
            for(var i355 = 0, n215 = 0, s152 = this.Bt.Zl; n215 < s152.length; n215++)if (0 !== (a37 = s152[n215]).Gt.length) {
                t.font = a37.T;
                var h98 = this.Jl(t, a37.Gt);
                h98 > this.Bt.Ht ? a37.Al = this.Bt.Ht / h98 : a37.Al = 1, i355 += a37.Gl * a37.Al;
            }
            var r71 = 0;
            switch(this.Bt.Ql){
                case "top":
                    r71 = 0;
                    break;
                case "center":
                    r71 = Math.max((this.Bt.Yt - i355) / 2, 0);
                    break;
                case "bottom":
                    r71 = Math.max(this.Bt.Yt - i355, 0);
            }
            t.fillStyle = this.Bt.A;
            for(var e56 = 0, u37 = this.Bt.Zl; e56 < u37.length; e56++){
                var a37 = u37[e56];
                t.save();
                var o34 = 0;
                switch(this.Bt.tf){
                    case "left":
                        t.textAlign = "left", o34 = a37.Gl / 2;
                        break;
                    case "center":
                        t.textAlign = "center", o34 = this.Bt.Ht / 2;
                        break;
                    case "right":
                        t.textAlign = "right", o34 = this.Bt.Ht - 1 - a37.Gl / 2;
                }
                t.translate(o34, r71), t.textBaseline = "top", t.font = a37.T, t.scale(a37.Al, a37.Al), t.fillText(a37.Gt, 0, a37.if), t.restore(), r71 += a37.Gl * a37.Al;
            }
            t.restore();
        }
    }, i353.prototype.Jl = function(t, i356) {
        var n216 = this.nf(t.font), s153 = n216.get(i356);
        return void 0 === s153 && (s153 = t.measureText(i356).width, n216.set(i356, s153)), s153;
    }, i353.prototype.nf = function(t) {
        var i357 = this.Xl.get(t);
        return void 0 === i357 && (i357 = new Map, this.Xl.set(t, i357)), i357;
    }, i353;
}(O), en = function() {
    function t106(t) {
        this.ft = !0, this.Wt = {
            yt: !1,
            A: "",
            Yt: 0,
            Ht: 0,
            Zl: [],
            Ql: "center",
            tf: "center"
        }, this.zt = new rn(this.Wt), this.Rt = t;
    }
    return t106.prototype.vt = function() {
        this.ft = !0;
    }, t106.prototype.dt = function(t, i358) {
        return this.ft && (this.wt(t, i358), this.ft = !1), this.zt;
    }, t106.prototype.wt = function(t, i359) {
        var n217 = this.Rt.W(), s154 = this.Wt;
        s154.yt = n217.visible, s154.yt && (s154.A = n217.color, s154.Ht = i359, s154.Yt = t, s154.tf = n217.horzAlign, s154.Ql = n217.vertAlign, s154.Zl = [
            {
                Gt: n217.text,
                T: L(n217.fontSize, n217.fontFamily, n217.fontStyle),
                Gl: 1.2 * n217.fontSize,
                if: 0,
                Al: 0
            }
        ]);
    }, t106;
}(), un = function(t) {
    function i360(i, n218) {
        var s155 = t.call(this) || this;
        return s155.zi = n218, s155.Hi = new en(s155), s155;
    }
    return m(i360, t), i360.prototype.nn = function() {
        return [];
    }, i360.prototype.tn = function() {
        return [
            this.Hi
        ];
    }, i360.prototype.W = function() {
        return this.zi;
    }, i360.prototype.hn = function() {
        this.Hi.vt();
    }, i360;
}(Q);
!function(t) {
    t[t.OnTouchEnd = 0] = "OnTouchEnd", t[t.OnNextTap = 1] = "OnNextTap";
}(hn || (hn = {}));
var an, on, ln, fn = function() {
    function t107(t, i361) {
        this.sf = [], this.hf = [], this.hh = 0, this.rf = null, this.ef = null, this.uf = new y, this.af = new y, this.lf = null, this.ff = t, this.zi = i361, this.cf = new E(this), this.Da = new sn(this, i361.timeScale, this.zi.localization), this.ct = new tt(this, i361.crosshair), this.vf = new yi(i361.crosshair), this._f = new un(this, i361.watermark), this.df(), this.sf[0].za(2e3), this.wf = this.Mf(0), this.bf = this.Mf(1);
    }
    return t107.prototype.Ce = function() {
        this.mf(new nt(3));
    }, t107.prototype.Wr = function() {
        this.mf(new nt(2));
    }, t107.prototype.We = function() {
        this.mf(new nt(1));
    }, t107.prototype.Se = function(t) {
        var i362 = this.pf(t);
        this.mf(i362);
    }, t107.prototype.gf = function() {
        return this.ef;
    }, t107.prototype.yf = function(t) {
        var i363 = this.ef;
        this.ef = t, null !== i363 && this.Se(i363.kf), null !== t && this.Se(t.kf);
    }, t107.prototype.W = function() {
        return this.zi;
    }, t107.prototype.Pr = function(t) {
        k(this.zi, t), this.sf.forEach(function(i364) {
            return i364.Oa(t);
        }), void 0 !== t.timeScale && this.Da.Pr(t.timeScale), void 0 !== t.localization && this.Da.el(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.uf.m(), this.wf = this.Mf(0), this.bf = this.Mf(1), this.Ce();
    }, t107.prototype.Nf = function(t, i365) {
        if ("left" !== t) {
            if ("right" !== t) {
                var n219 = this.xf(t);
                null !== n219 && (n219.Ct.Pr(i365), this.uf.m());
            } else this.Pr({
                rightPriceScale: i365
            });
        } else this.Pr({
            leftPriceScale: i365
        });
    }, t107.prototype.xf = function(t) {
        for(var i366 = 0, n220 = this.sf; i366 < n220.length; i366++){
            var s156 = n220[i366], h99 = s156.Va(t);
            if (null !== h99) return {
                It: s156,
                Ct: h99
            };
        }
        return null;
    }, t107.prototype.bt = function() {
        return this.Da;
    }, t107.prototype.Cf = function() {
        return this.sf;
    }, t107.prototype.Sf = function() {
        return this._f;
    }, t107.prototype.Tf = function() {
        return this.ct;
    }, t107.prototype.Df = function() {
        return this.af;
    }, t107.prototype.Af = function(t, i367) {
        t.ia(i367), this.yl();
    }, t107.prototype.Ra = function(t) {
        this.hh = t, this.Da.Ra(this.hh), this.sf.forEach(function(i368) {
            return i368.Ra(t);
        }), this.yl();
    }, t107.prototype.df = function(t) {
        var i369 = new qi(this.Da, this);
        void 0 !== t ? this.sf.splice(t, 0, i369) : this.sf.push(i369);
        var n221 = void 0 === t ? this.sf.length - 1 : t, s157 = new nt(3);
        return s157.cn(n221, {
            vn: 0,
            _n: !0
        }), this.mf(s157), i369;
    }, t107.prototype.Ka = function(t, i370, n222) {
        t.Ka(i370, n222);
    }, t107.prototype.Xa = function(t, i371, n223) {
        t.Xa(i371, n223), this.Te(), this.mf(this.Bf(t, 2));
    }, t107.prototype.Za = function(t, i372) {
        t.Za(i372), this.mf(this.Bf(t, 2));
    }, t107.prototype.Ja = function(t, i373, n224) {
        i373.Xu() || t.Ja(i373, n224);
    }, t107.prototype.Ga = function(t, i374, n225) {
        i374.Xu() || (t.Ga(i374, n225), this.Te(), this.mf(this.Bf(t, 2)));
    }, t107.prototype.Qa = function(t, i375) {
        i375.Xu() || (t.Qa(i375), this.mf(this.Bf(t, 2)));
    }, t107.prototype.no = function(t, i376) {
        t.no(i376), this.mf(this.Bf(t, 2));
    }, t107.prototype.Lf = function(t) {
        this.Da.da(t);
    }, t107.prototype.Ef = function(t, i377) {
        var n226 = this.bt();
        if (!n226.wi() && 0 !== i377) {
            var s158 = n226.Ht();
            t = Math.max(1, Math.min(t, s158)), n226.Al(t, i377), this.yl();
        }
    }, t107.prototype.Ff = function(t) {
        this.Of(0), this.Vf(t), this.Pf();
    }, t107.prototype.Wf = function(t) {
        this.Da.wa(t), this.yl();
    }, t107.prototype.zf = function() {
        this.Da.Ma(), this.Wr();
    }, t107.prototype.Of = function(t) {
        this.rf = t, this.Da.ba(t);
    }, t107.prototype.Vf = function(t) {
        var i378 = !1;
        return null !== this.rf && Math.abs(t - this.rf) > 20 && (this.rf = null, i378 = !0), this.Da.ma(t), this.yl(), i378;
    }, t107.prototype.Pf = function() {
        this.Da.pa(), this.Wr(), this.rf = null;
    }, t107.prototype._t = function() {
        return this.hf;
    }, t107.prototype.Rf = function(t, i379, n227) {
        this.ct.Yi(t, i379);
        var s159 = NaN, h100 = this.Da.pl(t), r72 = this.Da.ss();
        null !== r72 && (h100 = Math.min(Math.max(r72.In(), h100), r72.jn()));
        var e57 = n227.ji(), u38 = e57.kt();
        null !== u38 && (s159 = e57.qi(i379, u38)), s159 = this.vf.Je(s159, h100, n227), this.ct.Zi(h100, s159, n227), this.We(), this.af.m(this.ct.Mt(), {
            x: t,
            y: i379
        });
    }, t107.prototype.If = function() {
        this.Tf().Gi(), this.We(), this.af.m(null, null);
    }, t107.prototype.Te = function() {
        var t = this.ct.It();
        if (null !== t) {
            var i380 = this.ct.Ki(), n228 = this.ct.Xi();
            this.Rf(i380, n228, t);
        }
        this.ct.hn();
    }, t107.prototype.jf = function(t, i381, n229) {
        var s160 = this.Da.gi(0);
        void 0 !== i381 && void 0 !== n229 && this.Da.vt(i381, n229);
        var h101 = this.Da.gi(0), r73 = this.Da.ml(), e58 = this.Da.ss();
        if (null !== e58 && null !== s160 && null !== h101) {
            var u39 = e58.Uh(r73), a38 = s160.So > h101.So, o35 = null !== t && t > r73 && !a38, l28 = u39 && this.Da.W().shiftVisibleRangeOnNewBar;
            if (o35 && !l28) {
                var f26 = t - r73;
                this.Da.yn(this.Da.Nl() - f26);
            }
        }
        this.Da.Dl(t);
    }, t107.prototype.Be = function(t) {
        null !== t && t.ho();
    }, t107.prototype.oh = function(t) {
        var i382 = this.sf.find(function(i383) {
            return i383.oa().includes(t);
        });
        return void 0 === i382 ? null : i382;
    }, t107.prototype.yl = function() {
        this._f.hn(), this.sf.forEach(function(t) {
            return t.ho();
        }), this.Te();
    }, t107.prototype.g = function() {
        this.sf.forEach(function(t) {
            return t.g();
        }), this.sf.length = 0, this.zi.localization.priceFormatter = void 0, this.zi.localization.timeFormatter = void 0;
    }, t107.prototype.qf = function() {
        return this.cf;
    }, t107.prototype.dh = function() {
        return this.cf.W();
    }, t107.prototype.Pa = function() {
        return this.uf;
    }, t107.prototype.Uf = function(t, i384) {
        var n230 = this.sf[0], s161 = this.Hf(i384, t, n230);
        return this.hf.push(s161), 1 === this.hf.length ? this.Ce() : this.Wr(), s161;
    }, t107.prototype.Yf = function(t) {
        var i385 = this.oh(t), n231 = this.hf.indexOf(t);
        r(-1 !== n231, "Series not found"), this.hf.splice(n231, 1), u(i385).ca(t), t.g && t.g();
    }, t107.prototype.xe = function(t, i386) {
        var n232 = u(this.oh(t));
        n232.ca(t);
        var s162 = this.xf(i386);
        if (null === s162) {
            var h102 = t.xi();
            n232.la(t, i386, h102);
        } else {
            h102 = s162.It === n232 ? t.xi() : void 0;
            s162.It.la(t, i386, h102);
        }
    }, t107.prototype.zl = function() {
        var t = new nt(2);
        t.Mn(), this.mf(t);
    }, t107.prototype.$f = function(t) {
        var i387 = new nt(2);
        i387.mn(t), this.mf(i387);
    }, t107.prototype.pn = function() {
        var t = new nt(2);
        t.pn(), this.mf(t);
    }, t107.prototype.gn = function(t) {
        var i388 = new nt(2);
        i388.gn(t), this.mf(i388);
    }, t107.prototype.yn = function(t) {
        var i389 = new nt(2);
        i389.yn(t), this.mf(i389);
    }, t107.prototype.Kf = function() {
        return this.zi.rightPriceScale.visible ? "right" : "left";
    }, t107.prototype.Xf = function() {
        return this.bf;
    }, t107.prototype.Zf = function() {
        return this.wf;
    }, t107.prototype.Dt = function(t108) {
        var i390 = this.bf, n233 = this.wf;
        if (i390 === n233) return i390;
        if (t108 = Math.max(0, Math.min(100, Math.round(100 * t108))), null === this.lf || this.lf.Pn !== n233 || this.lf.Wn !== i390) this.lf = {
            Pn: n233,
            Wn: i390,
            Jf: new Map
        };
        else {
            var s163 = this.lf.Jf.get(t108);
            if (void 0 !== s163) return s163;
        }
        var h103 = function(t, i391, n234) {
            var s164 = w(t), h104 = s164[0], r74 = s164[1], e59 = s164[2], u40 = s164[3], a39 = w(i391), o36 = a39[0], c22 = a39[1], v17 = a39[2], _17 = a39[3], d14 = [
                l(h104 + n234 * (o36 - h104)),
                l(r74 + n234 * (c22 - r74)),
                l(e59 + n234 * (v17 - e59)),
                f(u40 + n234 * (_17 - u40))
            ];
            return "rgba(".concat(d14[0], ", ").concat(d14[1], ", ").concat(d14[2], ", ").concat(d14[3], ")");
        }(n233, i390, t108 / 100);
        return this.lf.Jf.set(t108, h103), h103;
    }, t107.prototype.Bf = function(t, i392) {
        var n235 = new nt(i392);
        if (null !== t) {
            var s165 = this.sf.indexOf(t);
            n235.cn(s165, {
                vn: i392
            });
        }
        return n235;
    }, t107.prototype.pf = function(t, i393) {
        return void 0 === i393 && (i393 = 2), this.Bf(this.oh(t), i393);
    }, t107.prototype.mf = function(t109) {
        this.ff && this.ff(t109), this.sf.forEach(function(t) {
            return t.eo().ou().vt();
        });
    }, t107.prototype.Hf = function(t, i394, n236) {
        var s166 = new gi(this, t, i394), h105 = void 0 !== t.priceScaleId ? t.priceScaleId : this.Kf();
        return n236.la(s166, h105), it(h105) || s166.Pr(t), s166;
    }, t107.prototype.Mf = function(t) {
        var i395 = this.zi.layout;
        return "gradient" === i395.background.type ? 0 === t ? i395.background.topColor : i395.background.bottomColor : i395.background.color;
    }, t107;
}();
function cn(t) {
    void 0 !== t.borderColor && (t.borderUpColor = t.borderColor, t.borderDownColor = t.borderColor), void 0 !== t.wickColor && (t.wickUpColor = t.wickColor, t.wickDownColor = t.wickColor);
}
function vn(t) {
    return !N(t) && !C(t);
}
function _n(t) {
    return N(t);
}
!function(t) {
    t[t.Disabled = 0] = "Disabled", t[t.Continuous = 1] = "Continuous", t[t.OnDataUpdate = 2] = "OnDataUpdate";
}(an || (an = {})), function(t) {
    t[t.LastBar = 0] = "LastBar", t[t.LastVisible = 1] = "LastVisible";
}(on || (on = {})), function(t) {
    t.Solid = "solid", t.VerticalGradient = "gradient";
}(ln || (ln = {}));
var dn = function() {
    function t110(t, i396) {
        this.Ft = t, this.Ot = i396;
    }
    return t110.prototype.br = function(t) {
        return this.Ft === t.Ft && this.Ot === t.Ot;
    }, t110;
}();
function wn(t) {
    return t.ownerDocument && t.ownerDocument.defaultView && t.ownerDocument.defaultView.devicePixelRatio || 1;
}
function Mn(t) {
    var i397 = u(t.getContext("2d"));
    return i397.setTransform(1, 0, 0, 1, 0, 0), i397;
}
function bn(t, i398) {
    var n237 = t.createElement("canvas"), s167 = wn(n237);
    return n237.style.width = "".concat(i398.Ft, "px"), n237.style.height = "".concat(i398.Ot, "px"), n237.width = i398.Ft * s167, n237.height = i398.Ot * s167, n237;
}
function mn(i399, n238) {
    var s168 = u(i399.ownerDocument).createElement("canvas");
    i399.appendChild(s168);
    var h106 = (0, _coordinateSpace.bindToDevicePixelRatio)(s168, {
        allowDownsampling: !1
    });
    return h106.resizeCanvas({
        width: n238.Ft,
        height: n238.Ot
    }), h106;
}
function pn(t, i400) {
    return t.Gf - i400.Gf;
}
function gn(t, i401, n239) {
    var s169 = (t.Gf - i401.Gf) / (t.rt - i401.rt);
    return Math.sign(s169) * Math.min(Math.abs(s169), n239);
}
var yn = function() {
    function t111(t, i402, n240, s170) {
        this.Qf = null, this.tc = null, this.ic = null, this.nc = null, this.sc = null, this.hc = 0, this.rc = 0, this.ec = !1, this.uc = t, this.ac = i402, this.oc = n240, this.Cn = s170;
    }
    return t111.prototype.lc = function(t, i403) {
        if (null !== this.Qf) {
            if (this.Qf.rt === i403) return void (this.Qf.Gf = t);
            if (Math.abs(this.Qf.Gf - t) < this.Cn) return;
        }
        this.nc = this.ic, this.ic = this.tc, this.tc = this.Qf, this.Qf = {
            rt: i403,
            Gf: t
        };
    }, t111.prototype.xh = function(t, i404) {
        if (null !== this.Qf && null !== this.tc && !(i404 - this.Qf.rt > 50)) {
            var n241 = 0, s171 = gn(this.Qf, this.tc, this.ac), h107 = pn(this.Qf, this.tc), r75 = [
                s171
            ], e60 = [
                h107
            ];
            if (n241 += h107, null !== this.ic) {
                var u41 = gn(this.tc, this.ic, this.ac);
                if (Math.sign(u41) === Math.sign(s171)) {
                    var a40 = pn(this.tc, this.ic);
                    if (r75.push(u41), e60.push(a40), n241 += a40, null !== this.nc) {
                        var o37 = gn(this.ic, this.nc, this.ac);
                        if (Math.sign(o37) === Math.sign(s171)) {
                            var l29 = pn(this.ic, this.nc);
                            r75.push(o37), e60.push(l29), n241 += l29;
                        }
                    }
                }
            }
            for(var f27, c23, v18, _18 = 0, d15 = 0; d15 < r75.length; ++d15)_18 += e60[d15] / n241 * r75[d15];
            if (!(Math.abs(_18) < this.uc)) this.sc = {
                Gf: t,
                rt: i404
            }, this.rc = _18, this.hc = (f27 = Math.abs(_18), c23 = this.oc, v18 = Math.log(c23), Math.log(1 * v18 / -f27) / v18);
        }
    }, t111.prototype.fc = function(t) {
        var i405 = u(this.sc), n242 = t - i405.rt;
        return i405.Gf + this.rc * (Math.pow(this.oc, n242) - 1) / Math.log(this.oc);
    }, t111.prototype.cc = function(t) {
        return null === this.sc || this.vc(t) === this.hc;
    }, t111.prototype._c = function() {
        return this.ec;
    }, t111.prototype.dc = function() {
        this.ec = !0;
    }, t111.prototype.vc = function(t) {
        var i406 = t - u(this.sc).rt;
        return Math.min(i406, this.hc);
    }, t111;
}(), kn = "undefined" != typeof window;
function Nn() {
    return !!kn && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
}
function xn() {
    return !!kn && /iPhone|iPad|iPod/.test(window.navigator.platform);
}
function Cn(t112) {
    kn && void 0 !== window.chrome && t112.addEventListener("mousedown", function(t) {
        if (1 === t.button) return t.preventDefault(), !1;
    });
}
var Sn = function() {
    function t113(t114, i407, n243) {
        var s172 = this;
        this.wc = 0, this.Mc = null, this.bc = {
            tt: Number.NEGATIVE_INFINITY,
            it: Number.POSITIVE_INFINITY
        }, this.mc = 0, this.gc = null, this.yc = {
            tt: Number.NEGATIVE_INFINITY,
            it: Number.POSITIVE_INFINITY
        }, this.kc = null, this.Nc = !1, this.xc = null, this.Cc = null, this.Sc = !1, this.Tc = !1, this.Dc = !1, this.Ac = null, this.Bc = null, this.Lc = null, this.Ec = null, this.Fc = null, this.Oc = null, this.Vc = null, this.Pc = 0, this.Wc = !1, this.zc = !1, this.Rc = !1, this.Ic = 0, this.jc = null, this.qc = !xn(), this.Uc = function(t) {
            s172.Hc(t);
        }, this.Yc = function(t) {
            if (s172.$c(t)) {
                var i408 = s172.Kc(t);
                if (++s172.mc, s172.gc && s172.mc > 1) s172.Zc(An(t), s172.yc).Xc < 30 && !s172.Dc && s172.Jc(i408, s172.Qc.Gc), s172.tv();
            } else {
                i408 = s172.Kc(t);
                if (++s172.wc, s172.Mc && s172.wc > 1) s172.Zc(An(t), s172.bc).Xc < 5 && !s172.Tc && s172.iv(i408, s172.Qc.nv), s172.sv();
            }
        }, this.hv = t114, this.Qc = i407, this.zi = n243, this.rv();
    }
    return t113.prototype.g = function() {
        null !== this.Ac && (this.Ac(), this.Ac = null), null !== this.Bc && (this.Bc(), this.Bc = null), null !== this.Ec && (this.Ec(), this.Ec = null), null !== this.Fc && (this.Fc(), this.Fc = null), null !== this.Oc && (this.Oc(), this.Oc = null), null !== this.Lc && (this.Lc(), this.Lc = null), this.ev(), this.sv();
    }, t113.prototype.uv = function(t) {
        var i409 = this;
        this.Ec && this.Ec();
        var n244 = this.av.bind(this);
        if (this.Ec = function() {
            i409.hv.removeEventListener("mousemove", n244);
        }, this.hv.addEventListener("mousemove", n244), !this.$c(t)) {
            var s173 = this.Kc(t);
            this.iv(s173, this.Qc.ov), this.qc = !0;
        }
    }, t113.prototype.sv = function() {
        null !== this.Mc && clearTimeout(this.Mc), this.wc = 0, this.Mc = null, this.bc = {
            tt: Number.NEGATIVE_INFINITY,
            it: Number.POSITIVE_INFINITY
        };
    }, t113.prototype.tv = function() {
        null !== this.gc && clearTimeout(this.gc), this.mc = 0, this.gc = null, this.yc = {
            tt: Number.NEGATIVE_INFINITY,
            it: Number.POSITIVE_INFINITY
        };
    }, t113.prototype.av = function(t) {
        if (!this.Rc && null === this.Cc && !this.$c(t)) {
            var i410 = this.Kc(t);
            this.iv(i410, this.Qc.lv), this.qc = !0;
        }
    }, t113.prototype.fv = function(t) {
        var i411 = Ln(t.changedTouches, u(this.jc));
        if (null !== i411 && (this.Ic = Bn(t), null === this.Vc && !this.zc)) {
            this.Wc = !0;
            var n245 = this.Zc(An(i411), u(this.Cc)), s174 = n245.cv, h108 = n245.vv, r76 = n245.Xc;
            if (this.Sc || !(r76 < 5)) {
                if (!this.Sc) {
                    var e61 = .5 * s174, a41 = h108 >= e61 && !this.zi._v(), o38 = e61 > h108 && !this.zi.dv();
                    a41 || o38 || (this.zc = !0), this.Sc = !0, this.Dc = !0, this.ev(), this.tv();
                }
                if (!this.zc) {
                    var l30 = this.Kc(t, i411);
                    this.Jc(l30, this.Qc.wv), Dn(t);
                }
            }
        }
    }, t113.prototype.Mv = function(t) {
        if (0 === t.button && (this.Zc(An(t), u(this.xc)).Xc >= 5 && (this.Tc = !0, this.sv()), this.Tc)) {
            var i412 = this.Kc(t);
            this.iv(i412, this.Qc.bv);
        }
    }, t113.prototype.Zc = function(t, i413) {
        var n246 = Math.abs(i413.tt - t.tt), s175 = Math.abs(i413.it - t.it);
        return {
            cv: n246,
            vv: s175,
            Xc: n246 + s175
        };
    }, t113.prototype.mv = function(t) {
        var i414 = Ln(t.changedTouches, u(this.jc));
        if (null === i414 && 0 === t.touches.length && (i414 = t.changedTouches[0]), null !== i414) {
            this.jc = null, this.Ic = Bn(t), this.ev(), this.Cc = null, this.Oc && (this.Oc(), this.Oc = null);
            var n247 = this.Kc(t, i414);
            if (this.Jc(n247, this.Qc.pv), ++this.mc, this.gc && this.mc > 1) this.Zc(An(i414), this.yc).Xc < 30 && !this.Dc && this.Jc(n247, this.Qc.Gc), this.tv();
            else this.Dc || (this.Jc(n247, this.Qc.gv), this.Qc.gv && Dn(t));
            0 === this.mc && Dn(t), 0 === t.touches.length && this.Nc && (this.Nc = !1, Dn(t));
        }
    }, t113.prototype.Hc = function(t) {
        if (0 === t.button) {
            var i415 = this.Kc(t);
            if (this.xc = null, this.Rc = !1, this.Fc && (this.Fc(), this.Fc = null), Nn()) this.hv.ownerDocument.documentElement.removeEventListener("mouseleave", this.Uc);
            if (!this.$c(t)) {
                if (this.iv(i415, this.Qc.yv), ++this.wc, this.Mc && this.wc > 1) this.Zc(An(t), this.bc).Xc < 5 && !this.Tc && this.iv(i415, this.Qc.nv), this.sv();
                else this.Tc || this.iv(i415, this.Qc.kv);
            }
        }
    }, t113.prototype.ev = function() {
        null !== this.kc && (clearTimeout(this.kc), this.kc = null);
    }, t113.prototype.Nv = function(t) {
        if (null === this.jc) {
            var i416 = t.changedTouches[0];
            this.jc = i416.identifier, this.Ic = Bn(t);
            var n248 = this.hv.ownerDocument.documentElement;
            this.Dc = !1, this.Sc = !1, this.zc = !1, this.Cc = An(i416), this.Oc && (this.Oc(), this.Oc = null);
            var s176 = this.fv.bind(this), h109 = this.mv.bind(this);
            this.Oc = function() {
                n248.removeEventListener("touchmove", s176), n248.removeEventListener("touchend", h109);
            }, n248.addEventListener("touchmove", s176, {
                passive: !1
            }), n248.addEventListener("touchend", h109, {
                passive: !1
            }), this.ev(), this.kc = setTimeout(this.xv.bind(this, t), 240);
            var r77 = this.Kc(t, i416);
            this.Jc(r77, this.Qc.Cv), this.gc || (this.mc = 0, this.gc = setTimeout(this.tv.bind(this), 500), this.yc = An(i416));
        }
    }, t113.prototype.Sv = function(t) {
        if (0 === t.button) {
            var i417 = this.hv.ownerDocument.documentElement;
            Nn() && i417.addEventListener("mouseleave", this.Uc), this.Tc = !1, this.xc = An(t), this.Fc && (this.Fc(), this.Fc = null);
            var n249 = this.Mv.bind(this), s177 = this.Hc.bind(this);
            if (this.Fc = function() {
                i417.removeEventListener("mousemove", n249), i417.removeEventListener("mouseup", s177);
            }, i417.addEventListener("mousemove", n249), i417.addEventListener("mouseup", s177), this.Rc = !0, !this.$c(t)) {
                var h110 = this.Kc(t);
                this.iv(h110, this.Qc.Tv), this.Mc || (this.wc = 0, this.Mc = setTimeout(this.sv.bind(this), 500), this.bc = An(t));
            }
        }
    }, t113.prototype.rv = function() {
        var t = this;
        this.hv.addEventListener("mouseenter", this.uv.bind(this)), this.hv.addEventListener("touchcancel", this.ev.bind(this));
        var i418 = this.hv.ownerDocument, n250 = function(i419) {
            t.Qc.Dv && (i419.target && t.hv.contains(i419.target) || t.Qc.Dv());
        };
        this.Bc = function() {
            i418.removeEventListener("touchstart", n250);
        }, this.Ac = function() {
            i418.removeEventListener("mousedown", n250);
        }, i418.addEventListener("mousedown", n250), i418.addEventListener("touchstart", n250, {
            passive: !0
        }), xn() && (this.Lc = function() {
            t.hv.removeEventListener("dblclick", t.Yc);
        }, this.hv.addEventListener("dblclick", this.Yc)), this.hv.addEventListener("mouseleave", this.Av.bind(this)), this.hv.addEventListener("touchstart", this.Nv.bind(this), {
            passive: !0
        }), Cn(this.hv), this.hv.addEventListener("mousedown", this.Sv.bind(this)), this.Bv(), this.hv.addEventListener("touchmove", function() {}, {
            passive: !1
        });
    }, t113.prototype.Bv = function() {
        var t = this;
        void 0 === this.Qc.Lv && void 0 === this.Qc.Ev && void 0 === this.Qc.Fv || (this.hv.addEventListener("touchstart", function(i420) {
            return t.Ov(i420.touches);
        }, {
            passive: !0
        }), this.hv.addEventListener("touchmove", function(i421) {
            if (2 === i421.touches.length && null !== t.Vc && void 0 !== t.Qc.Ev) {
                var n251 = Tn(i421.touches[0], i421.touches[1]) / t.Pc;
                t.Qc.Ev(t.Vc, n251), Dn(i421);
            }
        }, {
            passive: !1
        }), this.hv.addEventListener("touchend", function(i422) {
            t.Ov(i422.touches);
        }));
    }, t113.prototype.Ov = function(t) {
        1 === t.length && (this.Wc = !1), 2 !== t.length || this.Wc || this.Nc ? this.Vv() : this.Pv(t);
    }, t113.prototype.Pv = function(t) {
        var i423 = this.hv.getBoundingClientRect() || {
            left: 0,
            top: 0
        };
        this.Vc = {
            tt: (t[0].clientX - i423.left + (t[1].clientX - i423.left)) / 2,
            it: (t[0].clientY - i423.top + (t[1].clientY - i423.top)) / 2
        }, this.Pc = Tn(t[0], t[1]), void 0 !== this.Qc.Lv && this.Qc.Lv(), this.ev();
    }, t113.prototype.Vv = function() {
        null !== this.Vc && (this.Vc = null, void 0 !== this.Qc.Fv && this.Qc.Fv());
    }, t113.prototype.Av = function(t) {
        if (this.Ec && this.Ec(), !this.$c(t) && this.qc) {
            var i424 = this.Kc(t);
            this.iv(i424, this.Qc.Wv), this.qc = !xn();
        }
    }, t113.prototype.xv = function(t) {
        var i425 = Ln(t.touches, u(this.jc));
        if (null !== i425) {
            var n252 = this.Kc(t, i425);
            this.Jc(n252, this.Qc.zv), this.Dc = !0, this.Nc = !0;
        }
    }, t113.prototype.$c = function(t) {
        return t.sourceCapabilities && void 0 !== t.sourceCapabilities.firesTouchEvents ? t.sourceCapabilities.firesTouchEvents : Bn(t) < this.Ic + 500;
    }, t113.prototype.Jc = function(t, i426) {
        i426 && i426.call(this.Qc, t);
    }, t113.prototype.iv = function(t, i427) {
        i427 && i427.call(this.Qc, t);
    }, t113.prototype.Kc = function(t, i428) {
        var n253 = i428 || t, s178 = this.hv.getBoundingClientRect() || {
            left: 0,
            top: 0
        };
        return {
            Rv: n253.clientX,
            Iv: n253.clientY,
            jv: n253.pageX,
            qv: n253.pageY,
            Uv: n253.screenX,
            Hv: n253.screenY,
            Yv: n253.clientX - s178.left,
            $v: n253.clientY - s178.top,
            Kv: t.ctrlKey,
            Xv: t.altKey,
            Zv: t.shiftKey,
            Jv: t.metaKey,
            Gv: !t.type.startsWith("mouse") && "contextmenu" !== t.type && "click" !== t.type,
            Qv: t.type,
            t_: n253.target,
            i_: t.view,
            n_: function() {
                "touchstart" !== t.type && Dn(t);
            }
        };
    }, t113;
}();
function Tn(t, i429) {
    var n254 = t.clientX - i429.clientX, s179 = t.clientY - i429.clientY;
    return Math.sqrt(n254 * n254 + s179 * s179);
}
function Dn(t) {
    t.cancelable && t.preventDefault();
}
function An(t) {
    return {
        tt: t.pageX,
        it: t.pageY
    };
}
function Bn(t) {
    return t.timeStamp || performance.now();
}
function Ln(t, i430) {
    for(var n255 = 0; n255 < t.length; ++n255)if (t[n255].identifier === i430) return t[n255];
    return null;
}
var En = function() {
    function t115(t, i431, n256, s180) {
        this.rh = new Rt(200), this.R = 0, this.s_ = "", this.Yh = "", this.th = [], this.h_ = new Map, this.R = t, this.s_ = i431, this.Yh = L(t, n256, s180);
    }
    return t115.prototype.g = function() {
        this.rh.ih(), this.th = [], this.h_.clear();
    }, t115.prototype.r_ = function(t, i432, n257, s181, h111) {
        var r78 = this.e_(t, i432);
        if ("left" !== h111) {
            var e62 = wn(t.canvas);
            n257 -= Math.floor(r78.u_ * e62);
        }
        s181 -= Math.floor(r78.Yt / 2), t.drawImage(r78.a_, n257, s181, r78.Ht, r78.Yt);
    }, t115.prototype.e_ = function(t, i433) {
        var n258, s182 = this;
        if (this.h_.has(i433)) n258 = e(this.h_.get(i433));
        else {
            if (this.th.length >= 200) {
                var h112 = e(this.th.shift());
                this.h_.delete(h112);
            }
            var r79 = wn(t.canvas), u42 = Math.ceil(this.R / 4.5), a42 = Math.round(this.R / 10), o39 = Math.ceil(this.rh.Qt(t, i433)), l31 = St(Math.round(o39 + 2 * u42)), f28 = St(this.R + 2 * u42), c24 = bn(document, new dn(l31, f28));
            n258 = {
                Gt: i433,
                u_: Math.round(Math.max(1, o39)),
                Ht: Math.ceil(l31 * r79),
                Yt: Math.ceil(f28 * r79),
                a_: c24
            }, 0 !== o39 && (this.th.push(n258.Gt), this.h_.set(n258.Gt, n258)), q(t = Mn(n258.a_), r79, function() {
                t.font = s182.Yh, t.fillStyle = s182.s_, t.fillText(i433, 0, f28 - u42 - a42);
            });
        }
        return n258;
    }, t115;
}(), Fn = function() {
    function t116(t, i434, n259, s183) {
        var h113 = this;
        this._i = null, this.o_ = null, this.l_ = !1, this.f_ = new Rt(50), this.c_ = new En(11, "#000"), this.s_ = null, this.Yh = null, this.v_ = 0, this.__ = !1, this.d_ = function() {
            h113.w_(h113.cf.W()), h113.__ || h113.Di.M_().jt().Wr();
        }, this.b_ = function() {
            h113.__ || h113.Di.M_().jt().Wr();
        }, this.Di = t, this.zi = i434, this.cf = n259, this.m_ = "left" === s183, this.p_ = document.createElement("div"), this.p_.style.height = "100%", this.p_.style.overflow = "hidden", this.p_.style.width = "25px", this.p_.style.left = "0", this.p_.style.position = "relative", this.g_ = mn(this.p_, new dn(16, 16)), this.g_.subscribeCanvasConfigured(this.d_);
        var r80 = this.g_.canvas;
        r80.style.position = "absolute", r80.style.zIndex = "1", r80.style.left = "0", r80.style.top = "0", this.y_ = mn(this.p_, new dn(16, 16)), this.y_.subscribeCanvasConfigured(this.b_);
        var e63 = this.y_.canvas;
        e63.style.position = "absolute", e63.style.zIndex = "2", e63.style.left = "0", e63.style.top = "0";
        var u43 = {
            Tv: this.k_.bind(this),
            Cv: this.k_.bind(this),
            bv: this.N_.bind(this),
            wv: this.N_.bind(this),
            Dv: this.x_.bind(this),
            yv: this.C_.bind(this),
            pv: this.C_.bind(this),
            nv: this.S_.bind(this),
            Gc: this.S_.bind(this),
            ov: this.T_.bind(this),
            Wv: this.D_.bind(this)
        };
        this.A_ = new Sn(this.y_.canvas, u43, {
            _v: function() {
                return !1;
            },
            dv: function() {
                return !0;
            }
        });
    }
    return t116.prototype.g = function() {
        this.A_.g(), this.y_.unsubscribeCanvasConfigured(this.b_), this.y_.destroy(), this.g_.unsubscribeCanvasConfigured(this.d_), this.g_.destroy(), null !== this._i && this._i._a().M(this), this._i = null, this.c_.g();
    }, t116.prototype.B_ = function() {
        return this.p_;
    }, t116.prototype.ht = function() {
        return u(this._i).W().borderColor;
    }, t116.prototype.L_ = function() {
        return this.zi.textColor;
    }, t116.prototype.S = function() {
        return this.zi.fontSize;
    }, t116.prototype.E_ = function() {
        return L(this.S(), this.zi.fontFamily);
    }, t116.prototype.F_ = function() {
        var t = this.cf.W(), i435 = this.s_ !== t.A, n260 = this.Yh !== t.T;
        return (i435 || n260) && (this.w_(t), this.s_ = t.A), n260 && (this.f_.ih(), this.Yh = t.T), t;
    }, t116.prototype.O_ = function() {
        if (null === this._i) return 0;
        var t = 0, i436 = this.F_(), n261 = Mn(this.g_.canvas), s184 = this._i.au();
        n261.font = this.E_(), s184.length > 0 && (t = Math.max(this.f_.Qt(n261, s184[0].yu), this.f_.Qt(n261, s184[s184.length - 1].yu)));
        for(var h114 = this.V_(), r81 = h114.length; r81--;){
            var e64 = this.f_.Qt(n261, h114[r81].Gt());
            e64 > t && (t = e64);
        }
        var u44 = this._i.kt();
        if (null !== u44 && null !== this.o_) {
            var a43 = this._i.qi(1, u44), o40 = this._i.qi(this.o_.Ot - 2, u44);
            t = Math.max(t, this.f_.Qt(n261, this._i.Mi(Math.floor(Math.min(a43, o40)) + .11111111111111, u44)), this.f_.Qt(n261, this._i.Mi(Math.ceil(Math.max(a43, o40)) - .11111111111111, u44)));
        }
        var l32 = t || 34, f29 = Math.ceil(i436.N + i436.C + i436.L + i436.F + l32);
        return f29 += f29 % 2;
    }, t116.prototype.P_ = function(t) {
        if (t.Ft < 0 || t.Ot < 0) throw new Error("Try to set invalid size to PriceAxisWidget " + JSON.stringify(t));
        null !== this.o_ && this.o_.br(t) || (this.o_ = t, this.__ = !0, this.g_.resizeCanvas({
            width: t.Ft,
            height: t.Ot
        }), this.y_.resizeCanvas({
            width: t.Ft,
            height: t.Ot
        }), this.__ = !1, this.p_.style.width = t.Ft + "px", this.p_.style.height = t.Ot + "px", this.p_.style.minWidth = t.Ft + "px");
    }, t116.prototype.W_ = function() {
        return u(this.o_).Ft;
    }, t116.prototype.Si = function(t) {
        this._i !== t && (null !== this._i && this._i._a().M(this), this._i = t, t._a().u(this.Eu.bind(this), this));
    }, t116.prototype.Ct = function() {
        return this._i;
    }, t116.prototype.ih = function() {
        var t = this.Di.z_();
        this.Di.M_().jt().no(t, u(this.Ct()));
    }, t116.prototype.R_ = function(t) {
        if (null !== this.o_) {
            if (1 !== t) {
                var i437 = Mn(this.g_.canvas);
                this.I_(), this.j_(i437, this.g_.pixelRatio), this.Rs(i437, this.g_.pixelRatio), this.q_(i437, this.g_.pixelRatio), this.U_(i437, this.g_.pixelRatio);
            }
            var n262 = Mn(this.y_.canvas), s185 = this.o_.Ft, h115 = this.o_.Ot;
            q(n262, this.y_.pixelRatio, function() {
                n262.clearRect(0, 0, s185, h115);
            }), this.H_(n262, this.y_.pixelRatio);
        }
    }, t116.prototype.Y_ = function() {
        return this.g_.canvas;
    }, t116.prototype.vt = function() {
        var t;
        null === (t = this._i) || void 0 === t || t.au();
    }, t116.prototype.k_ = function(t) {
        if (null !== this._i && !this._i.wi() && this.Di.M_().W().handleScale.axisPressedMouseMove.price) {
            var i438 = this.Di.M_().jt(), n263 = this.Di.z_();
            this.l_ = !0, i438.Ka(n263, this._i, t.$v);
        }
    }, t116.prototype.N_ = function(t) {
        if (null !== this._i && this.Di.M_().W().handleScale.axisPressedMouseMove.price) {
            var i439 = this.Di.M_().jt(), n264 = this.Di.z_(), s186 = this._i;
            i439.Xa(n264, s186, t.$v);
        }
    }, t116.prototype.x_ = function() {
        if (null !== this._i && this.Di.M_().W().handleScale.axisPressedMouseMove.price) {
            var t = this.Di.M_().jt(), i440 = this.Di.z_(), n265 = this._i;
            this.l_ && (this.l_ = !1, t.Za(i440, n265));
        }
    }, t116.prototype.C_ = function(t) {
        if (null !== this._i && this.Di.M_().W().handleScale.axisPressedMouseMove.price) {
            var i441 = this.Di.M_().jt(), n266 = this.Di.z_();
            this.l_ = !1, i441.Za(n266, this._i);
        }
    }, t116.prototype.S_ = function(t) {
        this.Di.M_().W().handleScale.axisDoubleClickReset && this.ih();
    }, t116.prototype.T_ = function(t) {
        null !== this._i && (!this.Di.M_().jt().W().handleScale.axisPressedMouseMove.price || this._i.vr() || this._i.Zu() || this.K_(1));
    }, t116.prototype.D_ = function(t) {
        this.K_(0);
    }, t116.prototype.V_ = function() {
        var t = this, i442 = [], n267 = null === this._i ? void 0 : this._i;
        return function(s187) {
            for(var h116 = 0; h116 < s187.length; ++h116)for(var r82 = s187[h116].nn(t.Di.z_(), n267), e65 = 0; e65 < r82.length; e65++)i442.push(r82[e65]);
        }(this.Di.z_().oa()), i442;
    }, t116.prototype.j_ = function(t, i443) {
        var n268 = this;
        if (null !== this.o_) {
            var s188 = this.o_.Ft, h117 = this.o_.Ot;
            q(t, i443, function() {
                var i444 = n268.Di.z_().jt(), r83 = i444.Zf(), e66 = i444.Xf();
                r83 === e66 ? U(t, 0, 0, s188, h117, r83) : H(t, 0, 0, s188, h117, r83, e66);
            });
        }
    }, t116.prototype.Rs = function(t, i445) {
        if (null !== this.o_ && null !== this._i && this._i.W().borderVisible) {
            t.save(), t.fillStyle = this.ht();
            var n269, s189 = Math.max(1, Math.floor(this.F_().N * i445));
            n269 = this.m_ ? Math.floor(this.o_.Ft * i445) - s189 : 0, t.fillRect(n269, 0, s189, Math.ceil(this.o_.Ot * i445)), t.restore();
        }
    }, t116.prototype.q_ = function(t, i446) {
        if (null !== this.o_ && null !== this._i) {
            var n270 = this._i.au();
            t.save(), t.strokeStyle = this.ht(), t.font = this.E_(), t.fillStyle = this.ht();
            var s190 = this.F_(), h118 = this._i.W().borderVisible && this._i.W().drawTicks, r84 = this.m_ ? Math.floor((this.o_.Ft - s190.C) * i446 - s190.N * i446) : Math.floor(s190.N * i446), e67 = this.m_ ? Math.round(r84 - s190.L * i446) : Math.round(r84 + s190.C * i446 + s190.L * i446), u45 = this.m_ ? "right" : "left", a44 = Math.max(1, Math.floor(i446)), o41 = Math.floor(.5 * i446);
            if (h118) {
                var l33 = Math.round(s190.C * i446);
                t.beginPath();
                for(var f30 = 0, c25 = n270; f30 < c25.length; f30++){
                    var v19 = c25[f30];
                    t.rect(r84, Math.round(v19.su * i446) - o41, l33, a44);
                }
                t.fill();
            }
            t.fillStyle = this.L_();
            for(var _19 = 0, d16 = n270; _19 < d16.length; _19++){
                v19 = d16[_19];
                this.c_.r_(t, v19.yu, e67, Math.round(v19.su * i446), u45);
            }
            t.restore();
        }
    }, t116.prototype.I_ = function() {
        if (null !== this.o_ && null !== this._i) {
            var t117 = this.o_.Ot / 2, i447 = [], n271 = this._i.oa().slice(), s191 = this.Di.z_(), h119 = this.F_();
            this._i === s191.fh() && this.Di.z_().oa().forEach(function(t) {
                s191.lh(t) && n271.push(t);
            });
            var r85 = this._i.Ge()[0], e68 = this._i;
            n271.forEach(function(n272) {
                var h121 = n272.nn(s191, e68);
                h121.forEach(function(t) {
                    t.oi(null), t.li() && i447.push(t);
                }), r85 === n272 && h121.length > 0 && (t117 = h121[0].ti());
            });
            var u46 = i447.filter(function(i448) {
                return i448.ti() <= t117;
            }), a45 = i447.filter(function(i449) {
                return i449.ti() > t117;
            });
            if (u46.sort(function(t, i450) {
                return i450.ti() - t.ti();
            }), u46.length && a45.length && a45.push(u46[0]), a45.sort(function(t, i451) {
                return t.ti() - i451.ti();
            }), i447.forEach(function(t) {
                return t.oi(t.ti());
            }), this._i.W().alignLabels) {
                for(var o42 = 1; o42 < u46.length; o42++){
                    var l34 = u46[o42], f31 = (v20 = u46[o42 - 1]).Yt(h119, !1);
                    l34.ti() > (_20 = v20.ai()) - f31 && l34.oi(_20 - f31);
                }
                for(var c26 = 1; c26 < a45.length; c26++){
                    var v20, _20;
                    l34 = a45[c26], f31 = (v20 = a45[c26 - 1]).Yt(h119, !0);
                    l34.ti() < (_20 = v20.ai()) + f31 && l34.oi(_20 + f31);
                }
            }
        }
    }, t116.prototype.U_ = function(t, i452) {
        var n273 = this;
        if (null !== this.o_) {
            t.save();
            var s192 = this.o_, h122 = this.V_(), r86 = this.F_(), e69 = this.m_ ? "right" : "left";
            h122.forEach(function(h123) {
                if (h123.fi()) {
                    var a46 = h123.dt(u(n273._i));
                    t.save(), a46.H(t, r86, n273.f_, s192.Ft, e69, i452), t.restore();
                }
            }), t.restore();
        }
    }, t116.prototype.H_ = function(t, i453) {
        var n274 = this;
        if (null !== this.o_ && null !== this._i) {
            t.save();
            var s193 = this.o_, h124 = this.Di.M_().jt(), r87 = [], e70 = this.Di.z_(), a47 = h124.Tf().nn(e70, this._i);
            a47.length && r87.push(a47);
            var o43 = this.F_(), l35 = this.m_ ? "right" : "left";
            r87.forEach(function(h125) {
                h125.forEach(function(h126) {
                    t.save(), h126.dt(u(n274._i)).H(t, o43, n274.f_, s193.Ft, l35, i453), t.restore();
                });
            }), t.restore();
        }
    }, t116.prototype.K_ = function(t) {
        this.p_.style.cursor = 1 === t ? "ns-resize" : "default";
    }, t116.prototype.Eu = function() {
        var t = this.O_();
        this.v_ < t && this.Di.M_().jt().Ce(), this.v_ = t;
    }, t116.prototype.w_ = function(t) {
        this.c_.g(), this.c_ = new En(t.S, t.A, t.D);
    }, t116;
}();
function On(t, i454, n275, s194, h127) {
    t.$ && t.$(i454, n275, s194, h127);
}
function Vn(t, i455, n276, s195, h128) {
    t.H(i455, n276, s195, h128);
}
function Pn(t, i456) {
    return t.tn(i456);
}
function Wn(t, i457) {
    return void 0 !== t.Pe ? t.Pe(i457) : [];
}
var zn = function() {
    function t119(t, i458) {
        var n277 = this;
        this.o_ = new dn(0, 0), this.X_ = null, this.Z_ = null, this.J_ = null, this.G_ = !1, this.Q_ = new y, this.td = 0, this.nd = !1, this.sd = null, this.hd = !1, this.rd = null, this.ed = null, this.__ = !1, this.d_ = function() {
            n277.__ || null === n277.ud || n277.pi().Wr();
        }, this.b_ = function() {
            n277.__ || null === n277.ud || n277.pi().Wr();
        }, this.ad = t, this.ud = i458, this.ud.ro().u(this.od.bind(this), this, !0), this.ld = document.createElement("td"), this.ld.style.padding = "0", this.ld.style.position = "relative";
        var s196 = document.createElement("div");
        s196.style.width = "100%", s196.style.height = "100%", s196.style.position = "relative", s196.style.overflow = "hidden", this.fd = document.createElement("td"), this.fd.style.padding = "0", this.vd = document.createElement("td"), this.vd.style.padding = "0", this.ld.appendChild(s196), this.g_ = mn(s196, new dn(16, 16)), this.g_.subscribeCanvasConfigured(this.d_);
        var h129 = this.g_.canvas;
        h129.style.position = "absolute", h129.style.zIndex = "1", h129.style.left = "0", h129.style.top = "0", this.y_ = mn(s196, new dn(16, 16)), this.y_.subscribeCanvasConfigured(this.b_);
        var r88 = this.y_.canvas;
        r88.style.position = "absolute", r88.style.zIndex = "2", r88.style.left = "0", r88.style.top = "0", this._d = document.createElement("tr"), this._d.appendChild(this.fd), this._d.appendChild(this.ld), this._d.appendChild(this.vd), this.dd(), this.A_ = new Sn(this.y_.canvas, this, {
            _v: function() {
                return null === n277.sd && !n277.ad.W().handleScroll.vertTouchDrag;
            },
            dv: function() {
                return null === n277.sd && !n277.ad.W().handleScroll.horzTouchDrag;
            }
        });
    }
    return t119.prototype.g = function() {
        null !== this.X_ && this.X_.g(), null !== this.Z_ && this.Z_.g(), this.y_.unsubscribeCanvasConfigured(this.b_), this.y_.destroy(), this.g_.unsubscribeCanvasConfigured(this.d_), this.g_.destroy(), null !== this.ud && this.ud.ro().M(this), this.A_.g();
    }, t119.prototype.z_ = function() {
        return u(this.ud);
    }, t119.prototype.wd = function(i459) {
        null !== this.ud && this.ud.ro().M(this), this.ud = i459, null !== this.ud && this.ud.ro().u(t119.prototype.od.bind(this), this, !0), this.dd();
    }, t119.prototype.M_ = function() {
        return this.ad;
    }, t119.prototype.B_ = function() {
        return this._d;
    }, t119.prototype.dd = function() {
        if (null !== this.ud && (this.Md(), 0 !== this.pi()._t().length)) {
            if (null !== this.X_) {
                var t = this.ud.Ya();
                this.X_.Si(u(t));
            }
            if (null !== this.Z_) {
                var i460 = this.ud.$a();
                this.Z_.Si(u(i460));
            }
        }
    }, t119.prototype.bd = function() {
        null !== this.X_ && this.X_.vt(), null !== this.Z_ && this.Z_.vt();
    }, t119.prototype.Wa = function() {
        return null !== this.ud ? this.ud.Wa() : 0;
    }, t119.prototype.za = function(t) {
        this.ud && this.ud.za(t);
    }, t119.prototype.ov = function(t) {
        if (this.ud) {
            this.md();
            var i461 = t.Yv, n278 = t.$v;
            this.pd(i461, n278);
        }
    }, t119.prototype.Tv = function(t) {
        this.md(), this.gd(), this.pd(t.Yv, t.$v);
    }, t119.prototype.lv = function(t) {
        if (this.ud) {
            this.md();
            var i462 = t.Yv, n279 = t.$v;
            this.pd(i462, n279);
            var s197 = this.$h(i462, n279);
            this.pi().yf(s197 && {
                kf: s197.kf,
                yd: s197.yd
            });
        }
    }, t119.prototype.kv = function(t) {
        if (null !== this.ud) {
            this.md();
            var i463 = t.Yv, n280 = t.$v;
            if (this.Q_.p()) {
                var s198 = this.pi().Tf().Mt();
                this.Q_.m(s198, {
                    x: i463,
                    y: n280
                });
            }
        }
    }, t119.prototype.bv = function(t) {
        this.md(), this.kd(t), this.pd(t.Yv, t.$v);
    }, t119.prototype.yv = function(t) {
        null !== this.ud && (this.md(), this.nd = !1, this.Nd(t));
    }, t119.prototype.zv = function(t) {
        if (this.nd = !0, null === this.sd) {
            var i464 = {
                x: t.Yv,
                y: t.$v
            };
            this.xd(i464, i464);
        }
    }, t119.prototype.Wv = function(t) {
        null !== this.ud && (this.md(), this.ud.jt().yf(null), this.Cd());
    }, t119.prototype.Sd = function() {
        return this.Q_;
    }, t119.prototype.Lv = function() {
        this.td = 1, this.Td();
    }, t119.prototype.Ev = function(t, i465) {
        if (this.ad.W().handleScale.pinch) {
            var n281 = 5 * (i465 - this.td);
            this.td = i465, this.pi().Ef(t.tt, n281);
        }
    }, t119.prototype.Cv = function(t) {
        if (this.nd = !1, this.hd = null !== this.sd, this.gd(), null !== this.sd) {
            var i466 = this.pi().Tf();
            this.rd = {
                x: i466.$t(),
                y: i466.Kt()
            }, this.sd = {
                x: t.Yv,
                y: t.$v
            };
        }
    }, t119.prototype.wv = function(t) {
        if (null !== this.ud) {
            var i467 = t.Yv, n282 = t.$v;
            if (null === this.sd) this.kd(t);
            else {
                this.hd = !1;
                var s199 = u(this.rd), h130 = s199.x + (i467 - this.sd.x), r89 = s199.y + (n282 - this.sd.y);
                this.pd(h130, r89);
            }
        }
    }, t119.prototype.pv = function(t) {
        0 === this.M_().W().trackingMode.exitMode && (this.hd = !0), this.Dd(), this.Nd(t);
    }, t119.prototype.$h = function(t, i468) {
        var n283 = this.ud;
        if (null === n283) return null;
        for(var s200 = 0, h131 = n283.oa(); s200 < h131.length; s200++){
            var r90 = h131[s200], e71 = this.Ad(r90.tn(n283), t, i468);
            if (null !== e71) return {
                kf: r90,
                i_: e71.i_,
                yd: e71.yd
            };
        }
        return null;
    }, t119.prototype.Bd = function(t, i469) {
        u("left" === i469 ? this.X_ : this.Z_).P_(new dn(t, this.o_.Ot));
    }, t119.prototype.Ld = function() {
        return this.o_;
    }, t119.prototype.P_ = function(t) {
        if (t.Ft < 0 || t.Ot < 0) throw new Error("Try to set invalid size to PaneWidget " + JSON.stringify(t));
        this.o_.br(t) || (this.o_ = t, this.__ = !0, this.g_.resizeCanvas({
            width: t.Ft,
            height: t.Ot
        }), this.y_.resizeCanvas({
            width: t.Ft,
            height: t.Ot
        }), this.__ = !1, this.ld.style.width = t.Ft + "px", this.ld.style.height = t.Ot + "px");
    }, t119.prototype.Ed = function() {
        var t = u(this.ud);
        t.Ha(t.Ya()), t.Ha(t.$a());
        for(var i470 = 0, n284 = t.Ge(); i470 < n284.length; i470++){
            var s201 = n284[i470];
            if (t.lh(s201)) {
                var h132 = s201.Ct();
                null !== h132 && t.Ha(h132), s201.hn();
            }
        }
    }, t119.prototype.Y_ = function() {
        return this.g_.canvas;
    }, t119.prototype.R_ = function(t) {
        if (0 !== t && null !== this.ud) {
            if (t > 1 && this.Ed(), null !== this.X_ && this.X_.R_(t), null !== this.Z_ && this.Z_.R_(t), 1 !== t) {
                var i471 = Mn(this.g_.canvas);
                i471.save(), this.j_(i471, this.g_.pixelRatio), this.ud && (this.Fd(i471, this.g_.pixelRatio), this.Od(i471, this.g_.pixelRatio), this.Vd(i471, this.g_.pixelRatio, Pn)), i471.restore();
            }
            var n285 = Mn(this.y_.canvas);
            n285.clearRect(0, 0, Math.ceil(this.o_.Ft * this.y_.pixelRatio), Math.ceil(this.o_.Ot * this.y_.pixelRatio)), this.Vd(n285, this.g_.pixelRatio, Wn), this.Pd(n285, this.y_.pixelRatio);
        }
    }, t119.prototype.Wd = function() {
        return this.X_;
    }, t119.prototype.zd = function() {
        return this.Z_;
    }, t119.prototype.od = function() {
        null !== this.ud && this.ud.ro().M(this), this.ud = null;
    }, t119.prototype.j_ = function(t, i472) {
        var n286 = this;
        q(t, i472, function() {
            var i473 = n286.pi(), s202 = i473.Zf(), h133 = i473.Xf();
            s202 === h133 ? U(t, 0, 0, n286.o_.Ft, n286.o_.Ot, h133) : H(t, 0, 0, n286.o_.Ft, n286.o_.Ot, s202, h133);
        });
    }, t119.prototype.Fd = function(t, i474) {
        var n287 = u(this.ud), s203 = n287.eo().ou().dt(n287.Yt(), n287.Ht());
        null !== s203 && (t.save(), s203.H(t, i474, !1), t.restore());
    }, t119.prototype.Od = function(t, i475) {
        var n288 = this.pi().Sf();
        this.Rd(t, i475, Pn, On, n288), this.Rd(t, i475, Pn, Vn, n288);
    }, t119.prototype.Pd = function(t, i476) {
        this.Rd(t, i476, Pn, Vn, this.pi().Tf());
    }, t119.prototype.Vd = function(t, i477, n289) {
        for(var s204 = u(this.ud).oa(), h134 = 0, r91 = s204; h134 < r91.length; h134++){
            var e72 = r91[h134];
            this.Rd(t, i477, n289, On, e72);
        }
        for(var a48 = 0, o44 = s204; a48 < o44.length; a48++){
            e72 = o44[a48];
            this.Rd(t, i477, n289, Vn, e72);
        }
    }, t119.prototype.Rd = function(t, i478, n290, s205, h135) {
        for(var r92 = u(this.ud), e73 = n290(h135, r92), a49 = r92.Yt(), o45 = r92.Ht(), l36 = r92.jt().gf(), f32 = null !== l36 && l36.kf === h135, c27 = null !== l36 && f32 && void 0 !== l36.yd ? l36.yd.Kh : void 0, v21 = 0, _21 = e73; v21 < _21.length; v21++){
            var d17 = _21[v21].dt(a49, o45);
            null !== d17 && (t.save(), s205(d17, t, i478, f32, c27), t.restore());
        }
    }, t119.prototype.Ad = function(t, i479, n291) {
        for(var s206 = 0, h136 = t; s206 < h136.length; s206++){
            var r93 = h136[s206], e74 = r93.dt(this.o_.Ot, this.o_.Ft);
            if (null !== e74 && e74.$h) {
                var u47 = e74.$h(i479, n291);
                if (null !== u47) return {
                    i_: r93,
                    yd: u47
                };
            }
        }
        return null;
    }, t119.prototype.Md = function() {
        if (null !== this.ud) {
            var t = this.ad, i480 = this.ud.Ya().W().visible, n292 = this.ud.$a().W().visible;
            i480 || null === this.X_ || (this.fd.removeChild(this.X_.B_()), this.X_.g(), this.X_ = null), n292 || null === this.Z_ || (this.vd.removeChild(this.Z_.B_()), this.Z_.g(), this.Z_ = null);
            var s207 = t.jt().qf();
            i480 && null === this.X_ && (this.X_ = new Fn(this, t.W().layout, s207, "left"), this.fd.appendChild(this.X_.B_())), n292 && null === this.Z_ && (this.Z_ = new Fn(this, t.W().layout, s207, "right"), this.vd.appendChild(this.Z_.B_()));
        }
    }, t119.prototype.Id = function(t) {
        return t.Gv && this.nd || null !== this.sd;
    }, t119.prototype.jd = function(t) {
        return Math.max(0, Math.min(t, this.o_.Ft - 1));
    }, t119.prototype.qd = function(t) {
        return Math.max(0, Math.min(t, this.o_.Ot - 1));
    }, t119.prototype.pd = function(t, i481) {
        this.pi().Rf(this.jd(t), this.qd(i481), u(this.ud));
    }, t119.prototype.Cd = function() {
        this.pi().If();
    }, t119.prototype.Dd = function() {
        this.hd && (this.sd = null, this.Cd());
    }, t119.prototype.xd = function(t, i482) {
        this.sd = t, this.hd = !1, this.pd(i482.x, i482.y);
        var n293 = this.pi().Tf();
        this.rd = {
            x: n293.$t(),
            y: n293.Kt()
        };
    }, t119.prototype.pi = function() {
        return this.ad.jt();
    }, t119.prototype.Ud = function() {
        var t = this.pi(), i483 = this.z_(), n294 = i483.ji();
        t.Qa(i483, n294), t.Pf(), this.J_ = null, this.G_ = !1;
    }, t119.prototype.Nd = function(t120) {
        var i484 = this;
        if (this.G_) {
            var n295 = performance.now();
            if (null !== this.ed && this.ed.xh(t120.Yv, n295), null === this.ed || this.ed.cc(n295)) this.Ud();
            else {
                var s208 = this.pi(), h137 = s208.bt(), r94 = this.ed, e75 = function() {
                    if (!r94._c()) {
                        var t = performance.now(), n296 = r94.cc(t);
                        if (!r94._c()) {
                            var u48 = h137.Nl();
                            s208.Vf(r94.fc(t)), u48 === h137.Nl() && (n296 = !0, i484.ed = null);
                        }
                        n296 ? i484.Ud() : requestAnimationFrame(e75);
                    }
                };
                requestAnimationFrame(e75);
            }
        }
    }, t119.prototype.md = function() {
        this.sd = null;
    }, t119.prototype.gd = function() {
        if (this.ud) {
            if (this.Td(), document.activeElement !== document.body && document.activeElement !== document.documentElement) u(document.activeElement).blur();
            else {
                var t = document.getSelection();
                null !== t && t.removeAllRanges();
            }
            !this.ud.ji().wi() && this.pi().bt().wi();
        }
    }, t119.prototype.kd = function(t) {
        if (null !== this.ud) {
            var i485 = this.pi();
            if (!i485.bt().wi()) {
                var n297 = this.ad.W(), s209 = n297.handleScroll, h138 = n297.kineticScroll;
                if (s209.pressedMouseMove && !t.Gv || (s209.horzTouchDrag || s209.vertTouchDrag) && t.Gv) {
                    var r95 = this.ud.ji(), e76 = performance.now();
                    null !== this.J_ || this.Id(t) || (this.J_ = {
                        x: t.Rv,
                        y: t.Iv,
                        So: e76,
                        Yv: t.Yv,
                        $v: t.$v
                    }), null !== this.ed && this.ed.lc(t.Yv, e76), null === this.J_ || this.G_ || this.J_.x === t.Rv && this.J_.y === t.Iv || (null === this.ed && (t.Gv && h138.touch || !t.Gv && h138.mouse) && (this.ed = new yn(.2, 7, .997, 15), this.ed.lc(this.J_.Yv, this.J_.So), this.ed.lc(t.Yv, e76)), r95.wi() || i485.Ja(this.ud, r95, t.$v), i485.Of(t.Yv), this.G_ = !0), this.G_ && (r95.wi() || i485.Ga(this.ud, r95, t.$v), i485.Vf(t.Yv));
                }
            }
        }
    }, t119.prototype.Td = function() {
        var t = performance.now(), i486 = null === this.ed || this.ed.cc(t);
        null !== this.ed && (i486 || this.Ud()), null !== this.ed && (this.ed.dc(), this.ed = null);
    }, t119;
}(), Rn = function() {
    function t121(t, i487, n298, s210, h139) {
        var r96 = this;
        this.ft = !0, this.o_ = new dn(0, 0), this.d_ = function() {
            return r96.R_(3);
        }, this.m_ = "left" === t, this.cf = n298.qf, this.zi = i487, this.Hd = s210, this.Yd = h139, this.p_ = document.createElement("div"), this.p_.style.width = "25px", this.p_.style.height = "100%", this.p_.style.overflow = "hidden", this.g_ = mn(this.p_, new dn(16, 16)), this.g_.subscribeCanvasConfigured(this.d_);
    }
    return t121.prototype.g = function() {
        this.g_.unsubscribeCanvasConfigured(this.d_), this.g_.destroy();
    }, t121.prototype.B_ = function() {
        return this.p_;
    }, t121.prototype.Ld = function() {
        return this.o_;
    }, t121.prototype.P_ = function(t) {
        if (t.Ft < 0 || t.Ot < 0) throw new Error("Try to set invalid size to PriceAxisStub " + JSON.stringify(t));
        this.o_.br(t) || (this.o_ = t, this.g_.resizeCanvas({
            width: t.Ft,
            height: t.Ot
        }), this.p_.style.width = "".concat(t.Ft, "px"), this.p_.style.minWidth = "".concat(t.Ft, "px"), this.p_.style.height = "".concat(t.Ot, "px"), this.ft = !0);
    }, t121.prototype.R_ = function(t) {
        if ((!(t < 3) || this.ft) && 0 !== this.o_.Ft && 0 !== this.o_.Ot) {
            this.ft = !1;
            var i488 = Mn(this.g_.canvas);
            this.j_(i488, this.g_.pixelRatio), this.Rs(i488, this.g_.pixelRatio);
        }
    }, t121.prototype.Y_ = function() {
        return this.g_.canvas;
    }, t121.prototype.Rs = function(t, i489) {
        if (this.Hd()) {
            var n299 = this.o_.Ft;
            t.save(), t.fillStyle = this.zi.timeScale.borderColor;
            var s211 = Math.floor(this.cf.W().N * i489), h140 = this.m_ ? Math.round(n299 * i489) - s211 : 0;
            t.fillRect(h140, 0, s211, s211), t.restore();
        }
    }, t121.prototype.j_ = function(t, i490) {
        var n300 = this;
        q(t, i490, function() {
            U(t, 0, 0, n300.o_.Ft, n300.o_.Ot, n300.Yd());
        });
    }, t121;
}();
function In(t, i491) {
    return t.Po > i491.Po ? t : i491;
}
var jn = function() {
    function t122(t) {
        var i492 = this;
        this.$d = null, this.Kd = null, this.k = null, this.Xd = !1, this.o_ = new dn(0, 0), this.Zd = new y, this.f_ = new Rt(5), this.__ = !1, this.d_ = function() {
            i492.__ || i492.ad.jt().Wr();
        }, this.b_ = function() {
            i492.__ || i492.ad.jt().Wr();
        }, this.ad = t, this.zi = t.W().layout, this.Jd = document.createElement("tr"), this.Gd = document.createElement("td"), this.Gd.style.padding = "0", this.Qd = document.createElement("td"), this.Qd.style.padding = "0", this.p_ = document.createElement("td"), this.p_.style.height = "25px", this.p_.style.padding = "0", this.tw = document.createElement("div"), this.tw.style.width = "100%", this.tw.style.height = "100%", this.tw.style.position = "relative", this.tw.style.overflow = "hidden", this.p_.appendChild(this.tw), this.g_ = mn(this.tw, new dn(16, 16)), this.g_.subscribeCanvasConfigured(this.d_);
        var n301 = this.g_.canvas;
        n301.style.position = "absolute", n301.style.zIndex = "1", n301.style.left = "0", n301.style.top = "0", this.y_ = mn(this.tw, new dn(16, 16)), this.y_.subscribeCanvasConfigured(this.b_);
        var s212 = this.y_.canvas;
        s212.style.position = "absolute", s212.style.zIndex = "2", s212.style.left = "0", s212.style.top = "0", this.Jd.appendChild(this.Gd), this.Jd.appendChild(this.p_), this.Jd.appendChild(this.Qd), this.iw(), this.ad.jt().Pa().u(this.iw.bind(this), this), this.A_ = new Sn(this.y_.canvas, this, {
            _v: function() {
                return !0;
            },
            dv: function() {
                return !1;
            }
        });
    }
    return t122.prototype.g = function() {
        this.A_.g(), null !== this.$d && this.$d.g(), null !== this.Kd && this.Kd.g(), this.y_.unsubscribeCanvasConfigured(this.b_), this.y_.destroy(), this.g_.unsubscribeCanvasConfigured(this.d_), this.g_.destroy();
    }, t122.prototype.B_ = function() {
        return this.Jd;
    }, t122.prototype.nw = function() {
        return this.$d;
    }, t122.prototype.sw = function() {
        return this.Kd;
    }, t122.prototype.Tv = function(t) {
        if (!this.Xd) {
            this.Xd = !0;
            var i493 = this.ad.jt();
            !i493.bt().wi() && this.ad.W().handleScale.axisPressedMouseMove.time && i493.Lf(t.Yv);
        }
    }, t122.prototype.Cv = function(t) {
        this.Tv(t);
    }, t122.prototype.Dv = function() {
        var t = this.ad.jt();
        !t.bt().wi() && this.Xd && (this.Xd = !1, this.ad.W().handleScale.axisPressedMouseMove.time && t.zf());
    }, t122.prototype.bv = function(t) {
        var i494 = this.ad.jt();
        !i494.bt().wi() && this.ad.W().handleScale.axisPressedMouseMove.time && i494.Wf(t.Yv);
    }, t122.prototype.wv = function(t) {
        this.bv(t);
    }, t122.prototype.yv = function() {
        this.Xd = !1;
        var t = this.ad.jt();
        t.bt().wi() && !this.ad.W().handleScale.axisPressedMouseMove.time || t.zf();
    }, t122.prototype.pv = function() {
        this.yv();
    }, t122.prototype.nv = function() {
        this.ad.W().handleScale.axisDoubleClickReset && this.ad.jt().pn();
    }, t122.prototype.Gc = function() {
        this.nv();
    }, t122.prototype.ov = function() {
        this.ad.jt().W().handleScale.axisPressedMouseMove.time && this.K_(1);
    }, t122.prototype.Wv = function() {
        this.K_(0);
    }, t122.prototype.Ld = function() {
        return this.o_;
    }, t122.prototype.hw = function() {
        return this.Zd;
    }, t122.prototype.rw = function(t, i495, n302) {
        this.o_ && this.o_.br(t) || (this.o_ = t, this.__ = !0, this.g_.resizeCanvas({
            width: t.Ft,
            height: t.Ot
        }), this.y_.resizeCanvas({
            width: t.Ft,
            height: t.Ot
        }), this.__ = !1, this.p_.style.width = t.Ft + "px", this.p_.style.height = t.Ot + "px", this.Zd.m(t)), null !== this.$d && this.$d.P_(new dn(i495, t.Ot)), null !== this.Kd && this.Kd.P_(new dn(n302, t.Ot));
    }, t122.prototype.ew = function() {
        var t = this.uw();
        return Math.ceil(t.N + t.C + t.S + t.O + t.B);
    }, t122.prototype.vt = function() {
        this.ad.jt().bt().au();
    }, t122.prototype.Y_ = function() {
        return this.g_.canvas;
    }, t122.prototype.R_ = function(t) {
        if (0 !== t) {
            if (1 !== t) {
                var i496 = Mn(this.g_.canvas);
                this.j_(i496, this.g_.pixelRatio), this.Rs(i496, this.g_.pixelRatio), this.q_(i496, this.g_.pixelRatio), null !== this.$d && this.$d.R_(t), null !== this.Kd && this.Kd.R_(t);
            }
            var n303 = Mn(this.y_.canvas), s213 = this.y_.pixelRatio;
            n303.clearRect(0, 0, Math.ceil(this.o_.Ft * s213), Math.ceil(this.o_.Ot * s213)), this.aw([
                this.ad.jt().Tf()
            ], n303, s213);
        }
    }, t122.prototype.j_ = function(t, i497) {
        var n304 = this;
        q(t, i497, function() {
            U(t, 0, 0, n304.o_.Ft, n304.o_.Ot, n304.ad.jt().Xf());
        });
    }, t122.prototype.Rs = function(t, i498) {
        if (this.ad.W().timeScale.borderVisible) {
            t.save(), t.fillStyle = this.ow();
            var n305 = Math.max(1, Math.floor(this.uw().N * i498));
            t.fillRect(0, 0, Math.ceil(this.o_.Ft * i498), n305), t.restore();
        }
    }, t122.prototype.q_ = function(t, i499) {
        var n306 = this, s214 = this.ad.jt().bt().au();
        if (s214 && 0 !== s214.length) {
            var h141 = s214.reduce(In, s214[0]).Po;
            h141 > 30 && h141 < 50 && (h141 = 30), t.save(), t.strokeStyle = this.ow();
            var r97 = this.uw(), e77 = r97.N + r97.C + r97.O + r97.S - r97.V;
            t.textAlign = "center", t.fillStyle = this.ow();
            var u49 = Math.floor(this.uw().N * i499), a50 = Math.max(1, Math.floor(i499)), o46 = Math.floor(.5 * i499);
            if (this.ad.jt().bt().W().borderVisible) {
                t.beginPath();
                for(var l37 = Math.round(r97.C * i499), f33 = s214.length; f33--;){
                    var c28 = Math.round(s214[f33].su * i499);
                    t.rect(c28 - o46, u49, a50, l37);
                }
                t.fill();
            }
            t.fillStyle = this.j(), q(t, i499, function() {
                t.font = n306.lw();
                for(var i500 = 0, r98 = s214; i500 < r98.length; i500++)if ((l38 = r98[i500]).Po < h141) {
                    var u50 = l38.Sl ? n306.fw(t, l38.su, l38.yu) : l38.su;
                    t.fillText(l38.yu, u50, e77);
                }
                t.font = n306.cw();
                for(var a51 = 0, o47 = s214; a51 < o47.length; a51++){
                    var l38;
                    if ((l38 = o47[a51]).Po >= h141) {
                        u50 = l38.Sl ? n306.fw(t, l38.su, l38.yu) : l38.su;
                        t.fillText(l38.yu, u50, e77);
                    }
                }
            }), t.restore();
        }
    }, t122.prototype.fw = function(t, i501, n307) {
        var s215 = this.f_.Qt(t, n307), h142 = s215 / 2, r99 = Math.floor(i501 - h142) + .5;
        return r99 < 0 ? i501 += Math.abs(0 - r99) : r99 + s215 > this.o_.Ft && (i501 -= Math.abs(this.o_.Ft - (r99 + s215))), i501;
    }, t122.prototype.aw = function(t, i502, n308) {
        for(var s216 = this.uw(), h143 = 0, r100 = t; h143 < r100.length; h143++)for(var e78 = 0, u51 = r100[h143].Ti(); e78 < u51.length; e78++){
            var a52 = u51[e78];
            i502.save(), a52.dt().H(i502, s216, n308), i502.restore();
        }
    }, t122.prototype.ow = function() {
        return this.ad.W().timeScale.borderColor;
    }, t122.prototype.j = function() {
        return this.zi.textColor;
    }, t122.prototype.R = function() {
        return this.zi.fontSize;
    }, t122.prototype.lw = function() {
        return L(this.R(), this.zi.fontFamily);
    }, t122.prototype.cw = function() {
        return L(this.R(), this.zi.fontFamily, "bold");
    }, t122.prototype.uw = function() {
        null === this.k && (this.k = {
            N: 1,
            V: NaN,
            O: NaN,
            B: NaN,
            mi: NaN,
            C: 3,
            S: NaN,
            T: "",
            bi: new Rt
        });
        var t = this.k, i503 = this.lw();
        if (t.T !== i503) {
            var n309 = this.R();
            t.S = n309, t.T = i503, t.O = Math.ceil(n309 / 2.5), t.B = t.O, t.mi = Math.ceil(n309 / 2), t.V = Math.round(this.R() / 5), t.bi.ih();
        }
        return this.k;
    }, t122.prototype.K_ = function(t) {
        this.p_.style.cursor = 1 === t ? "ew-resize" : "default";
    }, t122.prototype.iw = function() {
        var t = this.ad.jt(), i504 = t.W();
        i504.leftPriceScale.visible || null === this.$d || (this.Gd.removeChild(this.$d.B_()), this.$d.g(), this.$d = null), i504.rightPriceScale.visible || null === this.Kd || (this.Qd.removeChild(this.Kd.B_()), this.Kd.g(), this.Kd = null);
        var n310 = {
            qf: this.ad.jt().qf()
        }, s217 = function() {
            return i504.leftPriceScale.borderVisible && t.bt().W().borderVisible;
        }, h144 = function() {
            return t.Xf();
        };
        i504.leftPriceScale.visible && null === this.$d && (this.$d = new Rn("left", i504, n310, s217, h144), this.Gd.appendChild(this.$d.B_())), i504.rightPriceScale.visible && null === this.Kd && (this.Kd = new Rn("right", i504, n310, s217, h144), this.Qd.appendChild(this.Kd.B_()));
    }, t122;
}(), qn = function() {
    function t123(t, i505) {
        var n311;
        this._w = [], this.dw = 0, this.xu = 0, this.hh = 0, this.ww = 0, this.Mw = 0, this.bw = null, this.mw = !1, this.Q_ = new y, this.af = new y, this.zi = i505, this.Jd = document.createElement("div"), this.Jd.classList.add("tv-lightweight-charts"), this.Jd.style.overflow = "hidden", this.Jd.style.width = "100%", this.Jd.style.height = "100%", (n311 = this.Jd).style.userSelect = "none", n311.style.webkitUserSelect = "none", n311.style.msUserSelect = "none", n311.style.MozUserSelect = "none", n311.style.webkitTapHighlightColor = "transparent", this.pw = document.createElement("table"), this.pw.setAttribute("cellspacing", "0"), this.Jd.appendChild(this.pw), this.gw = this.yw.bind(this), this.Jd.addEventListener("wheel", this.gw, {
            passive: !1
        }), this.pi = new fn(this.ff.bind(this), this.zi), this.jt().Df().u(this.kw.bind(this), this), this.Nw = new jn(this), this.pw.appendChild(this.Nw.B_());
        var s218 = this.zi.width, h145 = this.zi.height;
        if (0 === s218 || 0 === h145) {
            var r101 = t.getBoundingClientRect();
            0 === s218 && (s218 = Math.floor(r101.width), s218 -= s218 % 2), 0 === h145 && (h145 = Math.floor(r101.height), h145 -= h145 % 2);
        }
        this.xw(s218, h145), this.Cw(), t.appendChild(this.Jd), this.Sw(), this.pi.bt().Pl().u(this.pi.Ce.bind(this.pi), this), this.pi.Pa().u(this.pi.Ce.bind(this.pi), this);
    }
    return t123.prototype.jt = function() {
        return this.pi;
    }, t123.prototype.W = function() {
        return this.zi;
    }, t123.prototype.Tw = function() {
        return this._w;
    }, t123.prototype.Dw = function() {
        return this.Nw;
    }, t123.prototype.g = function() {
        this.Jd.removeEventListener("wheel", this.gw), 0 !== this.dw && window.cancelAnimationFrame(this.dw), this.pi.Df().M(this), this.pi.bt().Pl().M(this), this.pi.Pa().M(this), this.pi.g();
        for(var t = 0, i506 = this._w; t < i506.length; t++){
            var n312 = i506[t];
            this.pw.removeChild(n312.B_()), n312.Sd().M(this), n312.g();
        }
        this._w = [], u(this.Nw).g(), null !== this.Jd.parentElement && this.Jd.parentElement.removeChild(this.Jd), this.af.g(), this.Q_.g();
    }, t123.prototype.xw = function(t, i507, n313) {
        if (void 0 === n313 && (n313 = !1), this.xu !== i507 || this.hh !== t) {
            this.xu = i507, this.hh = t;
            var s219 = i507 + "px", h146 = t + "px";
            u(this.Jd).style.height = s219, u(this.Jd).style.width = h146, this.pw.style.height = s219, this.pw.style.width = h146, n313 ? this.Aw(new nt(3)) : this.pi.Ce();
        }
    }, t123.prototype.R_ = function(t) {
        void 0 === t && (t = new nt(3));
        for(var i508 = 0; i508 < this._w.length; i508++)this._w[i508].R_(t.wn(i508).vn);
        this.zi.timeScale.visible && this.Nw.R_(t.dn());
    }, t123.prototype.Pr = function(t) {
        this.pi.Pr(t), this.Sw();
        var i509 = t.width || this.hh, n314 = t.height || this.xu;
        this.xw(i509, n314);
    }, t123.prototype.Sd = function() {
        return this.Q_;
    }, t123.prototype.Df = function() {
        return this.af;
    }, t123.prototype.Bw = function() {
        var t = this;
        null !== this.bw && (this.Aw(this.bw), this.bw = null);
        var i510 = this._w[0], n315 = bn(document, new dn(this.hh, this.xu)), s220 = Mn(n315), h147 = wn(n315);
        return q(s220, h147, function() {
            var n316 = 0, h148 = 0, r102 = function(i511) {
                for(var r103 = 0; r103 < t._w.length; r103++){
                    var e80 = t._w[r103], a54 = e80.Ld().Ot, o49 = u("left" === i511 ? e80.Wd() : e80.zd()), l40 = o49.Y_();
                    s220.drawImage(l40, n316, h148, o49.W_(), a54), h148 += a54;
                }
            };
            t.Lw() && (r102("left"), n316 = u(i510.Wd()).W_()), h148 = 0;
            for(var e79 = 0; e79 < t._w.length; e79++){
                var a53 = t._w[e79], o48 = a53.Ld(), l39 = a53.Y_();
                s220.drawImage(l39, n316, h148, o48.Ft, o48.Ot), h148 += o48.Ot;
            }
            n316 += i510.Ld().Ft, t.Ew() && (h148 = 0, r102("right"));
            var f34 = function(i512) {
                var r104 = u("left" === i512 ? t.Nw.nw() : t.Nw.sw()), e81 = r104.Ld(), a55 = r104.Y_();
                s220.drawImage(a55, n316, h148, e81.Ft, e81.Ot);
            };
            if (t.zi.timeScale.visible) {
                n316 = 0, t.Lw() && (f34("left"), n316 = u(i510.Wd()).W_());
                var c29 = t.Nw.Ld();
                l39 = t.Nw.Y_();
                s220.drawImage(l39, n316, h148, c29.Ft, c29.Ot), t.Ew() && (n316 += i510.Ld().Ft, f34("right"), s220.restore());
            }
        }), n315;
    }, t123.prototype.Fw = function(t) {
        return "none" === t ? 0 : ("left" !== t || this.Lw()) && ("right" !== t || this.Ew()) ? 0 === this._w.length ? 0 : u("left" === t ? this._w[0].Wd() : this._w[0].zd()).W_() : 0;
    }, t123.prototype.Ow = function() {
        for(var t = 0, i513 = 0, n317 = 0, s221 = 0, h149 = this._w; s221 < h149.length; s221++){
            var r105 = h149[s221];
            this.Lw() && (i513 = Math.max(i513, u(r105.Wd()).O_())), this.Ew() && (n317 = Math.max(n317, u(r105.zd()).O_())), t += r105.Wa();
        }
        var e82 = this.hh, a56 = this.xu, o50 = Math.max(e82 - i513 - n317, 0), l41 = this.zi.timeScale.visible, f35 = l41 ? this.Nw.ew() : 0;
        f35 % 2 && (f35 += 1);
        for(var c30 = 0 + f35, v22 = a56 < c30 ? 0 : a56 - c30, _22 = v22 / t, d18 = 0, w14 = 0; w14 < this._w.length; ++w14){
            (r105 = this._w[w14]).wd(this.pi.Cf()[w14]);
            var M10, b8 = 0;
            b8 = w14 === this._w.length - 1 ? v22 - d18 : Math.round(r105.Wa() * _22), d18 += M10 = Math.max(b8, 2), r105.P_(new dn(o50, M10)), this.Lw() && r105.Bd(i513, "left"), this.Ew() && r105.Bd(n317, "right"), r105.z_() && this.pi.Af(r105.z_(), M10);
        }
        this.Nw.rw(new dn(l41 ? o50 : 0, f35), l41 ? i513 : 0, l41 ? n317 : 0), this.pi.Ra(o50), this.ww !== i513 && (this.ww = i513), this.Mw !== n317 && (this.Mw = n317);
    }, t123.prototype.yw = function(t) {
        var i514 = t.deltaX / 100, n318 = -t.deltaY / 100;
        if (0 !== i514 && this.zi.handleScroll.mouseWheel || 0 !== n318 && this.zi.handleScale.mouseWheel) {
            switch(t.cancelable && t.preventDefault(), t.deltaMode){
                case t.DOM_DELTA_PAGE:
                    i514 *= 120, n318 *= 120;
                    break;
                case t.DOM_DELTA_LINE:
                    i514 *= 32, n318 *= 32;
            }
            if (0 !== n318 && this.zi.handleScale.mouseWheel) {
                var s222 = Math.sign(n318) * Math.min(1, Math.abs(n318)), h150 = t.clientX - this.Jd.getBoundingClientRect().left;
                this.jt().Ef(h150, s222);
            }
            0 !== i514 && this.zi.handleScroll.mouseWheel && this.jt().Ff(-80 * i514);
        }
    }, t123.prototype.Aw = function(t124) {
        var i515, n319 = t124.dn();
        3 === n319 && this.Vw(), 3 !== n319 && 2 !== n319 || (this.Pw(t124), this.Ww(t124), this.Nw.vt(), this._w.forEach(function(t) {
            t.bd();
        }), 3 === (null === (i515 = this.bw) || void 0 === i515 ? void 0 : i515.dn()) && (this.bw.Nn(t124), this.Vw(), this.Pw(this.bw), this.Ww(this.bw), t124 = this.bw, this.bw = null)), this.R_(t124);
    }, t123.prototype.Ww = function(t) {
        for(var i516 = 0, n320 = t.kn(); i516 < n320.length; i516++){
            var s223 = n320[i516];
            this.xn(s223);
        }
    }, t123.prototype.Pw = function(t) {
        for(var i517 = this.pi.Cf(), n321 = 0; n321 < i517.length; n321++)t.wn(n321)._n && i517[n321].so();
    }, t123.prototype.xn = function(t) {
        var i518 = this.pi.bt();
        switch(t.bn){
            case 0:
                i518.zl();
                break;
            case 1:
                i518.Rl(t.St);
                break;
            case 2:
                i518.gn(t.St);
                break;
            case 3:
                i518.yn(t.St);
                break;
            case 4:
                i518.Tl();
        }
    }, t123.prototype.ff = function(t125) {
        var i519 = this;
        null !== this.bw ? this.bw.Nn(t125) : this.bw = t125, this.mw || (this.mw = !0, this.dw = window.requestAnimationFrame(function() {
            if (i519.mw = !1, i519.dw = 0, null !== i519.bw) {
                var t = i519.bw;
                i519.bw = null, i519.Aw(t);
            }
        }));
    }, t123.prototype.Vw = function() {
        this.Cw();
    }, t123.prototype.Cw = function() {
        for(var t = this.pi.Cf(), i520 = t.length, n322 = this._w.length, s224 = i520; s224 < n322; s224++){
            var h151 = e(this._w.pop());
            this.pw.removeChild(h151.B_()), h151.Sd().M(this), h151.g();
        }
        for(s224 = n322; s224 < i520; s224++)(h151 = new zn(this, t[s224])).Sd().u(this.zw.bind(this), this), this._w.push(h151), this.pw.insertBefore(h151.B_(), this.Nw.B_());
        for(s224 = 0; s224 < i520; s224++){
            var r106 = t[s224];
            (h151 = this._w[s224]).z_() !== r106 ? h151.wd(r106) : h151.dd();
        }
        this.Sw(), this.Ow();
    }, t123.prototype.Rw = function(t, i521) {
        var n323, s225 = new Map;
        null !== t && this.pi._t().forEach(function(i522) {
            var n324 = i522.er(t);
            null !== n324 && s225.set(i522, n324);
        });
        if (null !== t) {
            var h152 = this.pi.bt().gi(t);
            null !== h152 && (n323 = h152);
        }
        var r107 = this.jt().gf(), e83 = null !== r107 && r107.kf instanceof gi ? r107.kf : void 0, u52 = null !== r107 && void 0 !== r107.yd ? r107.yd.Zh : void 0;
        return {
            rt: n323,
            Iw: i521 || void 0,
            jw: e83,
            qw: s225,
            Uw: u52
        };
    }, t123.prototype.zw = function(t, i523) {
        var n325 = this;
        this.Q_.m(function() {
            return n325.Rw(t, i523);
        });
    }, t123.prototype.kw = function(t, i524) {
        var n326 = this;
        this.af.m(function() {
            return n326.Rw(t, i524);
        });
    }, t123.prototype.Sw = function() {
        var t = this.zi.timeScale.visible ? "" : "none";
        this.Nw.B_().style.display = t;
    }, t123.prototype.Lw = function() {
        return this._w[0].z_().Ya().W().visible;
    }, t123.prototype.Ew = function() {
        return this._w[0].z_().$a().W().visible;
    }, t123;
}();
function Un(t, i525, n327) {
    var s226 = n327.value;
    return {
        vs: i525,
        rt: t,
        St: [
            s226,
            s226,
            s226,
            s226
        ]
    };
}
function Hn(t, i526, n328) {
    var s227 = n328.value, h153 = {
        vs: i526,
        rt: t,
        St: [
            s227,
            s227,
            s227,
            s227
        ]
    };
    return "color" in n328 && void 0 !== n328.color && (h153.A = n328.color), h153;
}
function Yn(t) {
    return void 0 !== t.St;
}
function $n(t) {
    return function(i527, n329, s228) {
        var h154;
        return void 0 === (h154 = s228).open && void 0 === h154.value ? {
            rt: i527,
            vs: n329
        } : t(i527, n329, s228);
    };
}
var Kn = {
    Candlestick: $n(function(t, i528, n330) {
        var s229 = {
            vs: i528,
            rt: t,
            St: [
                n330.open,
                n330.high,
                n330.low,
                n330.close
            ]
        };
        return "color" in n330 && void 0 !== n330.color && (s229.A = n330.color), "borderColor" in n330 && void 0 !== n330.borderColor && (s229.Tt = n330.borderColor), "wickColor" in n330 && void 0 !== n330.wickColor && (s229.qs = n330.wickColor), s229;
    }),
    Bar: $n(function(t, i529, n331) {
        var s230 = {
            vs: i529,
            rt: t,
            St: [
                n331.open,
                n331.high,
                n331.low,
                n331.close
            ]
        };
        return "color" in n331 && void 0 !== n331.color && (s230.A = n331.color), s230;
    }),
    Area: $n(Un),
    Baseline: $n(Un),
    Histogram: $n(Hn),
    Line: $n(Hn)
};
function Xn(t) {
    return Kn[t];
}
function Zn(t) {
    return 60 * t * 60000;
}
function Jn(t) {
    return 60 * t * 1e3;
}
var Gn, Qn = [
    {
        Hw: (Gn = 1, 1e3 * Gn),
        Po: 10
    },
    {
        Hw: Jn(1),
        Po: 20
    },
    {
        Hw: Jn(5),
        Po: 21
    },
    {
        Hw: Jn(30),
        Po: 22
    },
    {
        Hw: Zn(1),
        Po: 30
    },
    {
        Hw: Zn(3),
        Po: 31
    },
    {
        Hw: Zn(6),
        Po: 32
    },
    {
        Hw: Zn(12),
        Po: 33
    }
];
function ts(t, i530) {
    if (t.getUTCFullYear() !== i530.getUTCFullYear()) return 70;
    if (t.getUTCMonth() !== i530.getUTCMonth()) return 60;
    if (t.getUTCDate() !== i530.getUTCDate()) return 50;
    for(var n332 = Qn.length - 1; n332 >= 0; --n332)if (Math.floor(i530.getTime() / Qn[n332].Hw) !== Math.floor(t.getTime() / Qn[n332].Hw)) return Qn[n332].Po;
    return 0;
}
function is(t, i531) {
    if (void 0 === i531 && (i531 = 0), 0 !== t.length) {
        for(var n333 = 0 === i531 ? null : t[i531 - 1].rt.So, s231 = null !== n333 ? new Date(1e3 * n333) : null, h155 = 0, r108 = i531; r108 < t.length; ++r108){
            var e84 = t[r108], u53 = new Date(1e3 * e84.rt.So);
            null !== s231 && (e84.Vo = ts(u53, s231)), h155 += e84.rt.So - (n333 || e84.rt.So), n333 = e84.rt.So, s231 = u53;
        }
        if (0 === i531 && t.length > 1) {
            var a57 = Math.ceil(h155 / (t.length - 1)), o51 = new Date(1e3 * (t[0].rt.So - a57));
            t[0].Vo = ts(new Date(1e3 * t[0].rt.So), o51);
        }
    }
}
function ns(t) {
    if (!vn(t)) throw new Error("time must be of type BusinessDay");
    var i532 = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
    return {
        So: Math.round(i532.getTime() / 1e3),
        Co: t
    };
}
function ss(t) {
    if (!_n(t)) throw new Error("time must be of type isUTCTimestamp");
    return {
        So: t
    };
}
function hs(t) {
    return 0 === t.length ? null : vn(t[0].time) ? ns : ss;
}
function rs(t) {
    return _n(t) ? ss(t) : vn(t) ? ns(t) : ns(es(t));
}
function es(t) {
    var i533 = new Date(t);
    if (isNaN(i533.getTime())) throw new Error("Invalid date string=".concat(t, ", expected format=yyyy-mm-dd"));
    return {
        day: i533.getUTCDate(),
        month: i533.getUTCMonth() + 1,
        year: i533.getUTCFullYear()
    };
}
function us(t) {
    C(t.time) && (t.time = es(t.time));
}
function as(t) {
    return {
        vs: 0,
        Yw: new Map,
        Ve: t
    };
}
function os(t) {
    if (void 0 !== t && 0 !== t.length) return {
        $w: t[0].rt.So,
        Kw: t[t.length - 1].rt.So
    };
}
var ls = function() {
    function t126() {
        this.Xw = new Map, this.Zw = new Map, this.Jw = new Map, this.Gw = [];
    }
    return t126.prototype.g = function() {
        this.Xw.clear(), this.Zw.clear(), this.Jw.clear(), this.Gw = [];
    }, t126.prototype.Qw = function(t127, i534) {
        var n334 = this, s232 = 0 !== this.Xw.size, h156 = !1, r109 = this.Zw.get(t127);
        if (void 0 !== r109) {
            if (1 === this.Zw.size) s232 = !1, h156 = !0, this.Xw.clear();
            else for(var e85 = 0, a58 = this.Gw; e85 < a58.length; e85++)a58[e85].pointData.Yw.delete(t127) && (h156 = !0);
        }
        var o52 = [];
        if (0 !== i534.length) {
            !function(t) {
                t.forEach(us);
            }(i534);
            var l42 = u(hs(i534)), f36 = Xn(t127.Rr());
            o52 = i534.map(function(i535) {
                var s233 = l42(i535.time), r110 = n334.Xw.get(s233.So);
                void 0 === r110 && (r110 = as(s233), n334.Xw.set(s233.So, r110), h156 = !0);
                var e86 = f36(s233, r110.vs, i535);
                return r110.Yw.set(t127, e86), e86;
            });
        }
        s232 && this.tM(), this.iM(t127, o52);
        var c31 = -1;
        if (h156) {
            var v23 = [];
            this.Xw.forEach(function(t) {
                v23.push({
                    Vo: 0,
                    rt: t.Ve,
                    pointData: t
                });
            }), v23.sort(function(t, i536) {
                return t.rt.So - i536.rt.So;
            }), c31 = this.nM(v23);
        }
        return this.sM(t127, c31, function(t, i537) {
            var n335 = os(t), s234 = os(i537);
            if (void 0 !== n335 && void 0 !== s234) return {
                Ae: n335.Kw >= s234.Kw && n335.$w >= s234.$w
            };
        }(this.Zw.get(t127), r109));
    }, t126.prototype.Yf = function(t) {
        return this.Qw(t, []);
    }, t126.prototype.hM = function(t128, i538) {
        us(i538);
        var n336 = u(hs([
            i538
        ]))(i538.time), s235 = this.Jw.get(t128);
        if (void 0 !== s235 && n336.So < s235.So) throw new Error("Cannot update oldest data, last time=".concat(s235.So, ", new time=").concat(n336.So));
        var h157 = this.Xw.get(n336.So), r111 = void 0 === h157;
        void 0 === h157 && (h157 = as(n336), this.Xw.set(n336.So, h157));
        var e87 = Xn(t128.Rr())(n336, h157.vs, i538);
        h157.Yw.set(t128, e87), this.rM(t128, e87);
        var a59 = {
            Ae: Yn(e87)
        };
        if (!r111) return this.sM(t128, -1, a59);
        var o53 = {
            Vo: 0,
            rt: h157.Ve,
            pointData: h157
        }, l43 = vt(this.Gw, o53.rt.So, function(t, i539) {
            return t.rt.So < i539;
        });
        this.Gw.splice(l43, 0, o53);
        for(var f37 = l43; f37 < this.Gw.length; ++f37)fs(this.Gw[f37].pointData, f37);
        return is(this.Gw, l43), this.sM(t128, l43, a59);
    }, t126.prototype.rM = function(t, i540) {
        var n337 = this.Zw.get(t);
        void 0 === n337 && (n337 = [], this.Zw.set(t, n337));
        var s236 = 0 !== n337.length ? n337[n337.length - 1] : null;
        null === s236 || i540.rt.So > s236.rt.So ? Yn(i540) && n337.push(i540) : Yn(i540) ? n337[n337.length - 1] = i540 : n337.splice(-1, 1), this.Jw.set(t, i540.rt);
    }, t126.prototype.iM = function(t, i541) {
        0 !== i541.length ? (this.Zw.set(t, i541.filter(Yn)), this.Jw.set(t, i541[i541.length - 1].rt)) : (this.Zw.delete(t), this.Jw.delete(t));
    }, t126.prototype.tM = function() {
        for(var t = 0, i542 = this.Gw; t < i542.length; t++){
            var n338 = i542[t];
            0 === n338.pointData.Yw.size && this.Xw.delete(n338.rt.So);
        }
    }, t126.prototype.nM = function(t) {
        for(var i543 = -1, n339 = 0; n339 < this.Gw.length && n339 < t.length; ++n339){
            var s237 = this.Gw[n339], h158 = t[n339];
            if (s237.rt.So !== h158.rt.So) {
                i543 = n339;
                break;
            }
            h158.Vo = s237.Vo, fs(h158.pointData, n339);
        }
        if (-1 === i543 && this.Gw.length !== t.length && (i543 = Math.min(this.Gw.length, t.length)), -1 === i543) return -1;
        for(n339 = i543; n339 < t.length; ++n339)fs(t[n339].pointData, n339);
        return is(t, i543), this.Gw = t, i543;
    }, t126.prototype.eM = function() {
        if (0 === this.Zw.size) return null;
        var t = 0;
        return this.Zw.forEach(function(i544) {
            0 !== i544.length && (t = Math.max(t, i544[i544.length - 1].vs));
        }), t;
    }, t126.prototype.sM = function(t, i545, n340) {
        var s238 = {
            uM: new Map,
            bt: {
                ml: this.eM()
            }
        };
        if (-1 !== i545) this.Zw.forEach(function(i546, h160) {
            s238.uM.set(h160, {
                ph: i546,
                aM: h160 === t ? n340 : void 0
            });
        }), this.Zw.has(t) || s238.uM.set(t, {
            ph: [],
            aM: n340
        }), s238.bt.oM = this.Gw, s238.bt.lM = i545;
        else {
            var h159 = this.Zw.get(t);
            s238.uM.set(t, {
                ph: h159 || [],
                aM: n340
            });
        }
        return s238;
    }, t126;
}();
function fs(t129, i547) {
    t129.vs = i547, t129.Yw.forEach(function(t) {
        t.vs = i547;
    });
}
var cs = {
    color: "#FF0000",
    price: 0,
    lineStyle: 2,
    lineWidth: 1,
    lineVisible: !0,
    axisLabelVisible: !0,
    title: ""
}, vs = function() {
    function t130(t) {
        this.Lr = t;
    }
    return t130.prototype.applyOptions = function(t) {
        this.Lr.Pr(t);
    }, t130.prototype.options = function() {
        return this.Lr.W();
    }, t130.prototype.fM = function() {
        return this.Lr;
    }, t130;
}();
function _s(t131) {
    var i548 = t131.overlay, n341 = function(t, i549) {
        var n342 = {};
        for(var s239 in t)Object.prototype.hasOwnProperty.call(t, s239) && i549.indexOf(s239) < 0 && (n342[s239] = t[s239]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var h161 = 0;
            for(s239 = Object.getOwnPropertySymbols(t); h161 < s239.length; h161++)i549.indexOf(s239[h161]) < 0 && Object.prototype.propertyIsEnumerable.call(t, s239[h161]) && (n342[s239[h161]] = t[s239[h161]]);
        }
        return n342;
    }(t131, [
        "overlay"
    ]);
    return i548 && (n341.priceScaleId = ""), n341;
}
var ds = function() {
    function t132(t, i550, n343) {
        this.Kn = t, this.cM = i550, this.vM = n343;
    }
    return t132.prototype.priceFormatter = function() {
        return this.Kn.qe();
    }, t132.prototype.priceToCoordinate = function(t) {
        var i551 = this.Kn.kt();
        return null === i551 ? null : this.Kn.Ct().xt(t, i551.St);
    }, t132.prototype.coordinateToPrice = function(t) {
        var i552 = this.Kn.kt();
        return null === i552 ? null : this.Kn.Ct().qi(t, i552.St);
    }, t132.prototype.barsInLogicalRange = function(t) {
        if (null === t) return null;
        var i553 = new nn(new Ji(t.from, t.to)).jo(), n344 = this.Kn.an();
        if (n344.wi()) return null;
        var s240 = n344.ne(i553.In(), 1), h162 = n344.ne(i553.jn(), -1), r112 = u(n344.Qr()), e88 = u(n344.un());
        if (null !== s240 && null !== h162 && s240.vs > h162.vs) return {
            barsBefore: t.from - r112,
            barsAfter: e88 - t.to
        };
        var a60 = {
            barsBefore: null === s240 || s240.vs === r112 ? t.from - r112 : s240.vs - r112,
            barsAfter: null === h162 || h162.vs === e88 ? e88 - t.to : e88 - h162.vs
        };
        return null !== s240 && null !== h162 && (a60.from = s240.rt.Co || s240.rt.So, a60.to = h162.rt.Co || h162.rt.So), a60;
    }, t132.prototype.setData = function(t) {
        this.Kn.Rr(), this.cM._M(this.Kn, t);
    }, t132.prototype.update = function(t) {
        this.Kn.Rr(), this.cM.dM(this.Kn, t);
    }, t132.prototype.setMarkers = function(t133) {
        var i554 = t133.map(function(t) {
            return p(p({}, t), {
                time: rs(t.time)
            });
        });
        this.Kn.Le(i554);
    }, t132.prototype.applyOptions = function(t) {
        var i555 = _s(t);
        this.Kn.Pr(i555);
    }, t132.prototype.options = function() {
        return T(this.Kn.W());
    }, t132.prototype.priceScale = function() {
        return this.vM.priceScale(this.Kn.Ct().Ke());
    }, t132.prototype.createPriceLine = function(t) {
        var i556 = k(T(cs), t), n345 = this.Kn.Ee(i556);
        return new vs(n345);
    }, t132.prototype.removePriceLine = function(t) {
        this.Kn.Fe(t.fM());
    }, t132.prototype.seriesType = function() {
        return this.Kn.Rr();
    }, t132;
}(), ws = function(t) {
    function i557() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return m(i557, t), i557.prototype.applyOptions = function(i558) {
        cn(i558), t.prototype.applyOptions.call(this, i558);
    }, i557;
}(ds), Ms = {
    autoScale: !0,
    mode: 0,
    invertScale: !1,
    alignLabels: !0,
    borderVisible: !0,
    borderColor: "#2B2B43",
    entireTextOnly: !1,
    visible: !1,
    drawTicks: !0,
    scaleMargins: {
        bottom: .1,
        top: .2
    }
}, bs = {
    color: "rgba(0, 0, 0, 0)",
    visible: !1,
    fontSize: 48,
    fontFamily: B,
    fontStyle: "",
    text: "",
    horzAlign: "center",
    vertAlign: "center"
}, ms = {
    width: 0,
    height: 0,
    layout: {
        background: {
            type: "solid",
            color: "#FFFFFF"
        },
        textColor: "#191919",
        fontSize: 11,
        fontFamily: B
    },
    crosshair: {
        vertLine: {
            color: "#758696",
            width: 1,
            style: 3,
            visible: !0,
            labelVisible: !0,
            labelBackgroundColor: "#4c525e"
        },
        horzLine: {
            color: "#758696",
            width: 1,
            style: 3,
            visible: !0,
            labelVisible: !0,
            labelBackgroundColor: "#4c525e"
        },
        mode: 1
    },
    grid: {
        vertLines: {
            color: "#D6DCDE",
            style: 0,
            visible: !0
        },
        horzLines: {
            color: "#D6DCDE",
            style: 0,
            visible: !0
        }
    },
    overlayPriceScales: p({}, Ms),
    leftPriceScale: p(p({}, Ms), {
        visible: !1
    }),
    rightPriceScale: p(p({}, Ms), {
        visible: !0
    }),
    timeScale: {
        rightOffset: 0,
        barSpacing: 6,
        minBarSpacing: .5,
        fixLeftEdge: !1,
        fixRightEdge: !1,
        lockVisibleTimeRangeOnResize: !1,
        rightBarStaysOnScroll: !1,
        borderVisible: !0,
        borderColor: "#2B2B43",
        visible: !0,
        timeVisible: !1,
        secondsVisible: !0,
        shiftVisibleRangeOnNewBar: !0
    },
    watermark: bs,
    localization: {
        locale: kn ? navigator.language : "",
        dateFormat: "dd MMM 'yy"
    },
    handleScroll: {
        mouseWheel: !0,
        pressedMouseMove: !0,
        horzTouchDrag: !0,
        vertTouchDrag: !0
    },
    handleScale: {
        axisPressedMouseMove: {
            time: !0,
            price: !0
        },
        axisDoubleClickReset: !0,
        mouseWheel: !0,
        pinch: !0
    },
    kineticScroll: {
        mouse: !1,
        touch: !0
    },
    trackingMode: {
        exitMode: 1
    }
}, ps = {
    upColor: "#26a69a",
    downColor: "#ef5350",
    wickVisible: !0,
    borderVisible: !0,
    borderColor: "#378658",
    borderUpColor: "#26a69a",
    borderDownColor: "#ef5350",
    wickColor: "#737375",
    wickUpColor: "#26a69a",
    wickDownColor: "#ef5350"
}, gs = {
    upColor: "#26a69a",
    downColor: "#ef5350",
    openVisible: !0,
    thinBars: !0
}, ys = {
    color: "#2196f3",
    lineStyle: 0,
    lineWidth: 3,
    lineType: 0,
    crosshairMarkerVisible: !0,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0
}, ks = {
    topColor: "rgba( 46, 220, 135, 0.4)",
    bottomColor: "rgba( 40, 221, 100, 0)",
    lineColor: "#33D778",
    lineStyle: 0,
    lineWidth: 3,
    lineType: 0,
    crosshairMarkerVisible: !0,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0
}, Ns = {
    baseValue: {
        type: "price",
        price: 0
    },
    topFillColor1: "rgba(38, 166, 154, 0.28)",
    topFillColor2: "rgba(38, 166, 154, 0.05)",
    topLineColor: "rgba(38, 166, 154, 1)",
    bottomFillColor1: "rgba(239, 83, 80, 0.05)",
    bottomFillColor2: "rgba(239, 83, 80, 0.28)",
    bottomLineColor: "rgba(239, 83, 80, 1)",
    lineWidth: 3,
    lineStyle: 0,
    crosshairMarkerVisible: !0,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0
}, xs = {
    color: "#26a69a",
    base: 0
}, Cs = {
    title: "",
    visible: !0,
    lastValueVisible: !0,
    priceLineVisible: !0,
    priceLineSource: 0,
    priceLineWidth: 1,
    priceLineColor: "",
    priceLineStyle: 2,
    baseLineVisible: !0,
    baseLineWidth: 1,
    baseLineColor: "#B2B5BE",
    baseLineStyle: 0,
    priceFormat: {
        type: "price",
        precision: 2,
        minMove: .01
    }
}, Ss = function() {
    function t134(t, i559) {
        this.wM = t, this.MM = i559;
    }
    return t134.prototype.applyOptions = function(t) {
        this.wM.jt().Nf(this.MM, t);
    }, t134.prototype.options = function() {
        return this._i().W();
    }, t134.prototype.width = function() {
        return it(this.MM) ? this.wM.Fw("left" === this.MM ? "left" : "right") : 0;
    }, t134.prototype._i = function() {
        return u(this.wM.jt().xf(this.MM)).Ct;
    }, t134;
}(), Ts = function() {
    function t135(t, i560) {
        this.bM = new y, this.Go = new y, this.Zd = new y, this.pi = t, this.Da = t.bt(), this.Nw = i560, this.Da.Ol().u(this.mM.bind(this)), this.Da.Vl().u(this.pM.bind(this)), this.Nw.hw().u(this.gM.bind(this));
    }
    return t135.prototype.g = function() {
        this.Da.Ol().M(this), this.Da.Vl().M(this), this.Nw.hw().M(this), this.bM.g(), this.Go.g(), this.Zd.g();
    }, t135.prototype.scrollPosition = function() {
        return this.Da.Nl();
    }, t135.prototype.scrollToPosition = function(t, i561) {
        i561 ? this.Da.Fl(t, 1e3) : this.pi.yn(t);
    }, t135.prototype.scrollToRealTime = function() {
        this.Da.El();
    }, t135.prototype.getVisibleRange = function() {
        var t, i562, n346 = this.Da.cl();
        return null === n346 ? null : {
            from: null !== (t = n346.from.Co) && void 0 !== t ? t : n346.from.So,
            to: null !== (i562 = n346.to.Co) && void 0 !== i562 ? i562 : n346.to.So
        };
    }, t135.prototype.setVisibleRange = function(t) {
        var i563 = {
            from: rs(t.from),
            to: rs(t.to)
        }, n347 = this.Da.wl(i563);
        this.pi.$f(n347);
    }, t135.prototype.getVisibleLogicalRange = function() {
        var t = this.Da.fl();
        return null === t ? null : {
            from: t.In(),
            to: t.jn()
        };
    }, t135.prototype.setVisibleLogicalRange = function(t) {
        r(t.from <= t.to, "The from index cannot be after the to index."), this.pi.$f(t);
    }, t135.prototype.resetTimeScale = function() {
        this.pi.pn();
    }, t135.prototype.fitContent = function() {
        this.pi.zl();
    }, t135.prototype.logicalToCoordinate = function(t) {
        var i564 = this.pi.bt();
        return i564.wi() ? null : i564.At(t);
    }, t135.prototype.coordinateToLogical = function(t) {
        return this.Da.wi() ? null : this.Da.pl(t);
    }, t135.prototype.timeToCoordinate = function(t) {
        var i565 = rs(t), n348 = this.Da.Ze(i565, !1);
        return null === n348 ? null : this.Da.At(n348);
    }, t135.prototype.coordinateToTime = function(t) {
        var i566, n349 = this.pi.bt(), s241 = n349.pl(t), h163 = n349.gi(s241);
        return null === h163 ? null : null !== (i566 = h163.Co) && void 0 !== i566 ? i566 : h163.So;
    }, t135.prototype.width = function() {
        return this.Nw.Ld().Ft;
    }, t135.prototype.height = function() {
        return this.Nw.Ld().Ot;
    }, t135.prototype.subscribeVisibleTimeRangeChange = function(t) {
        this.bM.u(t);
    }, t135.prototype.unsubscribeVisibleTimeRangeChange = function(t) {
        this.bM._(t);
    }, t135.prototype.subscribeVisibleLogicalRangeChange = function(t) {
        this.Go.u(t);
    }, t135.prototype.unsubscribeVisibleLogicalRangeChange = function(t) {
        this.Go._(t);
    }, t135.prototype.subscribeSizeChange = function(t) {
        this.Zd.u(t);
    }, t135.prototype.unsubscribeSizeChange = function(t) {
        this.Zd._(t);
    }, t135.prototype.applyOptions = function(t) {
        this.Da.Pr(t);
    }, t135.prototype.options = function() {
        return T(this.Da.W());
    }, t135.prototype.mM = function() {
        this.bM.p() && this.bM.m(this.getVisibleRange());
    }, t135.prototype.pM = function() {
        this.Go.p() && this.Go.m(this.getVisibleLogicalRange());
    }, t135.prototype.gM = function(t) {
        this.Zd.m(t.Ft, t.Ot);
    }, t135;
}();
function Ds(t136) {
    if (void 0 !== t136 && "custom" !== t136.type) {
        var i567 = t136;
        void 0 !== i567.minMove && void 0 === i567.precision && (i567.precision = function(t) {
            if (t >= 1) return 0;
            for(var i568 = 0; i568 < 8; i568++){
                var n350 = Math.round(t);
                if (Math.abs(n350 - t) < 1e-8) return i568;
                t *= 10;
            }
            return i568;
        }(i567.minMove));
    }
}
function As(t137) {
    return function(t) {
        if (S(t.handleScale)) {
            var i569 = t.handleScale;
            t.handleScale = {
                axisDoubleClickReset: i569,
                axisPressedMouseMove: {
                    time: i569,
                    price: i569
                },
                mouseWheel: i569,
                pinch: i569
            };
        } else if (void 0 !== t.handleScale && S(t.handleScale.axisPressedMouseMove)) {
            var n351 = t.handleScale.axisPressedMouseMove;
            t.handleScale.axisPressedMouseMove = {
                time: n351,
                price: n351
            };
        }
        var s242 = t.handleScroll;
        S(s242) && (t.handleScroll = {
            horzTouchDrag: s242,
            vertTouchDrag: s242,
            mouseWheel: s242,
            pressedMouseMove: s242
        });
    }(t137), function(t) {
        if (t.priceScale) {
            t.leftPriceScale = t.leftPriceScale || {}, t.rightPriceScale = t.rightPriceScale || {};
            var i570 = t.priceScale.position;
            delete t.priceScale.position, t.leftPriceScale = k(t.leftPriceScale, t.priceScale), t.rightPriceScale = k(t.rightPriceScale, t.priceScale), "left" === i570 && (t.leftPriceScale.visible = !0, t.rightPriceScale.visible = !1), "right" === i570 && (t.leftPriceScale.visible = !1, t.rightPriceScale.visible = !0), "none" === i570 && (t.leftPriceScale.visible = !1, t.rightPriceScale.visible = !1), t.overlayPriceScales = t.overlayPriceScales || {}, void 0 !== t.priceScale.invertScale && (t.overlayPriceScales.invertScale = t.priceScale.invertScale), void 0 !== t.priceScale.scaleMargins && (t.overlayPriceScales.scaleMargins = t.priceScale.scaleMargins);
        }
    }(t137), function(t) {
        t.layout && t.layout.backgroundColor && !t.layout.background && (t.layout.background = {
            type: "solid",
            color: t.layout.backgroundColor
        });
    }(t137), t137;
}
var Bs = function() {
    function t138(t139, i571) {
        var n352 = this;
        this.yM = new ls, this.kM = new Map, this.NM = new Map, this.xM = new y, this.CM = new y;
        var s243 = void 0 === i571 ? T(ms) : k(T(ms), As(i571));
        this.wM = new qn(t139, s243), this.wM.Sd().u(function(t) {
            n352.xM.p() && n352.xM.m(n352.SM(t()));
        }, this), this.wM.Df().u(function(t) {
            n352.CM.p() && n352.CM.m(n352.SM(t()));
        }, this);
        var h164 = this.wM.jt();
        this.TM = new Ts(h164, this.wM.Dw());
    }
    return t138.prototype.remove = function() {
        this.wM.Sd().M(this), this.wM.Df().M(this), this.TM.g(), this.wM.g(), this.kM.clear(), this.NM.clear(), this.xM.g(), this.CM.g(), this.yM.g();
    }, t138.prototype.resize = function(t, i572, n353) {
        this.wM.xw(t, i572, n353);
    }, t138.prototype.addAreaSeries = function(t) {
        void 0 === t && (t = {}), Ds((t = _s(t)).priceFormat);
        var i573 = k(T(Cs), ks, t), n354 = this.wM.jt().Uf("Area", i573), s244 = new ds(n354, this, this);
        return this.kM.set(s244, n354), this.NM.set(n354, s244), s244;
    }, t138.prototype.addBaselineSeries = function(t) {
        void 0 === t && (t = {}), Ds((t = _s(t)).priceFormat);
        var i574 = k(T(Cs), T(Ns), t), n355 = this.wM.jt().Uf("Baseline", i574), s245 = new ds(n355, this, this);
        return this.kM.set(s245, n355), this.NM.set(n355, s245), s245;
    }, t138.prototype.addBarSeries = function(t) {
        void 0 === t && (t = {}), Ds((t = _s(t)).priceFormat);
        var i575 = k(T(Cs), gs, t), n356 = this.wM.jt().Uf("Bar", i575), s246 = new ds(n356, this, this);
        return this.kM.set(s246, n356), this.NM.set(n356, s246), s246;
    }, t138.prototype.addCandlestickSeries = function(t) {
        void 0 === t && (t = {}), cn(t = _s(t)), Ds(t.priceFormat);
        var i576 = k(T(Cs), ps, t), n357 = this.wM.jt().Uf("Candlestick", i576), s247 = new ws(n357, this, this);
        return this.kM.set(s247, n357), this.NM.set(n357, s247), s247;
    }, t138.prototype.addHistogramSeries = function(t) {
        void 0 === t && (t = {}), Ds((t = _s(t)).priceFormat);
        var i577 = k(T(Cs), xs, t), n358 = this.wM.jt().Uf("Histogram", i577), s248 = new ds(n358, this, this);
        return this.kM.set(s248, n358), this.NM.set(n358, s248), s248;
    }, t138.prototype.addLineSeries = function(t) {
        void 0 === t && (t = {}), Ds((t = _s(t)).priceFormat);
        var i578 = k(T(Cs), ys, t), n359 = this.wM.jt().Uf("Line", i578), s249 = new ds(n359, this, this);
        return this.kM.set(s249, n359), this.NM.set(n359, s249), s249;
    }, t138.prototype.removeSeries = function(t) {
        var i579 = e(this.kM.get(t)), n360 = this.yM.Yf(i579);
        this.wM.jt().Yf(i579), this.DM(n360), this.kM.delete(t), this.NM.delete(i579);
    }, t138.prototype._M = function(t, i580) {
        this.DM(this.yM.Qw(t, i580));
    }, t138.prototype.dM = function(t, i581) {
        this.DM(this.yM.hM(t, i581));
    }, t138.prototype.subscribeClick = function(t) {
        this.xM.u(t);
    }, t138.prototype.unsubscribeClick = function(t) {
        this.xM._(t);
    }, t138.prototype.subscribeCrosshairMove = function(t) {
        this.CM.u(t);
    }, t138.prototype.unsubscribeCrosshairMove = function(t) {
        this.CM._(t);
    }, t138.prototype.priceScale = function(t) {
        return void 0 === t && (t = this.wM.jt().Kf()), new Ss(this.wM, t);
    }, t138.prototype.timeScale = function() {
        return this.TM;
    }, t138.prototype.applyOptions = function(t) {
        this.wM.Pr(As(t));
    }, t138.prototype.options = function() {
        return this.wM.W();
    }, t138.prototype.takeScreenshot = function() {
        return this.wM.Bw();
    }, t138.prototype.DM = function(t140) {
        var i582 = this.wM.jt();
        i582.jf(t140.bt.ml, t140.bt.oM, t140.bt.lM), t140.uM.forEach(function(t, i583) {
            return i583.Z(t.ph, t.aM);
        }), i582.yl();
    }, t138.prototype.AM = function(t) {
        return e(this.NM.get(t));
    }, t138.prototype.SM = function(t141) {
        var i584 = this, n361 = new Map;
        t141.qw.forEach(function(t, s251) {
            n361.set(i584.AM(s251), t);
        });
        var s250 = void 0 === t141.jw ? void 0 : this.AM(t141.jw);
        return {
            time: t141.rt && (t141.rt.Co || t141.rt.So),
            point: t141.Iw,
            hoveredSeries: s250,
            hoveredMarkerId: t141.Uw,
            seriesPrices: n361
        };
    }, t138;
}();
function Ls(t, i585) {
    var n362;
    if (C(t)) {
        var s252 = document.getElementById(t);
        r(null !== s252, "Cannot find element in DOM with id=".concat(t)), n362 = s252;
    } else n362 = t;
    return new Bs(n362, i585);
}
function Es() {
    return "3.8.0";
}

},{"fancy-canvas/coordinate-space":"ij2Xp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ij2Xp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bindToDevicePixelRatio", ()=>bindToDevicePixelRatio);
var defaultBindingOptions = {
    allowDownsampling: true
};
function bindToDevicePixelRatio(canvas, options) {
    if (options === void 0) options = defaultBindingOptions;
    return new DevicePixelRatioBinding(canvas, options);
}
var DevicePixelRatioBinding = /** @class */ function() {
    function DevicePixelRatioBinding1(canvas, options) {
        var _this = this;
        this._resolutionMediaQueryList = null;
        this._resolutionListener = function(ev) {
            return _this._onResolutionChanged();
        };
        this._canvasConfiguredListeners = [];
        this.canvas = canvas;
        this._canvasSize = {
            width: this.canvas.clientWidth,
            height: this.canvas.clientHeight
        };
        this._options = options;
        this._configureCanvas();
        this._installResolutionListener();
    }
    DevicePixelRatioBinding1.prototype.destroy = function() {
        this._canvasConfiguredListeners.length = 0;
        this._uninstallResolutionListener();
        this.canvas = null;
    };
    Object.defineProperty(DevicePixelRatioBinding1.prototype, "canvasSize", {
        get: function() {
            return {
                width: this._canvasSize.width,
                height: this._canvasSize.height
            };
        },
        enumerable: true,
        configurable: true
    });
    DevicePixelRatioBinding1.prototype.resizeCanvas = function(size) {
        this._canvasSize = {
            width: size.width,
            height: size.height
        };
        this._configureCanvas();
    };
    Object.defineProperty(DevicePixelRatioBinding1.prototype, "pixelRatio", {
        get: function() {
            // According to DOM Level 2 Core specification, ownerDocument should never be null for HTMLCanvasElement
            // see https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#node-ownerDoc
            var win = this.canvas.ownerDocument.defaultView;
            if (win == null) throw new Error("No window is associated with the canvas");
            return win.devicePixelRatio > 1 || this._options.allowDownsampling ? win.devicePixelRatio : 1;
        },
        enumerable: true,
        configurable: true
    });
    DevicePixelRatioBinding1.prototype.subscribeCanvasConfigured = function(listener) {
        this._canvasConfiguredListeners.push(listener);
    };
    DevicePixelRatioBinding1.prototype.unsubscribeCanvasConfigured = function(listener) {
        this._canvasConfiguredListeners = this._canvasConfiguredListeners.filter(function(l) {
            return l != listener;
        });
    };
    DevicePixelRatioBinding1.prototype._configureCanvas = function() {
        var ratio = this.pixelRatio;
        this.canvas.style.width = this._canvasSize.width + "px";
        this.canvas.style.height = this._canvasSize.height + "px";
        this.canvas.width = this._canvasSize.width * ratio;
        this.canvas.height = this._canvasSize.height * ratio;
        this._emitCanvasConfigured();
    };
    DevicePixelRatioBinding1.prototype._emitCanvasConfigured = function() {
        var _this = this;
        this._canvasConfiguredListeners.forEach(function(listener) {
            return listener.call(_this);
        });
    };
    DevicePixelRatioBinding1.prototype._installResolutionListener = function() {
        if (this._resolutionMediaQueryList !== null) throw new Error("Resolution listener is already installed");
        // According to DOM Level 2 Core specification, ownerDocument should never be null for HTMLCanvasElement
        // see https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#node-ownerDoc
        var win = this.canvas.ownerDocument.defaultView;
        if (win == null) throw new Error("No window is associated with the canvas");
        var dppx = win.devicePixelRatio;
        this._resolutionMediaQueryList = win.matchMedia("all and (resolution: " + dppx + "dppx)");
        // IE and some versions of Edge do not support addEventListener/removeEventListener, and we are going to use the deprecated addListener/removeListener
        this._resolutionMediaQueryList.addListener(this._resolutionListener);
    };
    DevicePixelRatioBinding1.prototype._uninstallResolutionListener = function() {
        if (this._resolutionMediaQueryList !== null) {
            // IE and some versions of Edge do not support addEventListener/removeEventListener, and we are going to use the deprecated addListener/removeListener
            this._resolutionMediaQueryList.removeListener(this._resolutionListener);
            this._resolutionMediaQueryList = null;
        }
    };
    DevicePixelRatioBinding1.prototype._reinstallResolutionListener = function() {
        this._uninstallResolutionListener();
        this._installResolutionListener();
    };
    DevicePixelRatioBinding1.prototype._onResolutionChanged = function() {
        this._configureCanvas();
        this._reinstallResolutionListener();
    };
    return DevicePixelRatioBinding1;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["cwa9A","dF3Ha"], "dF3Ha", "parcelRequire8bbf")

//# sourceMappingURL=index.8e50d3f1.js.map
