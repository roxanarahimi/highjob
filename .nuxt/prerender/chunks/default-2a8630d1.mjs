import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'file://F:/PROJECTS/2023/highjob/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderSlot } from 'file://F:/PROJECTS/2023/highjob/node_modules/vue/server-renderer/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/ofetch/dist/node.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/hookable/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/unctx/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/ufo/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/h3/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/@unhead/vue/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/@unhead/dom/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/defu/dist/defu.mjs';
import './config.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/destr/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/scule/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid px-0" }, _attrs))}><header><div class="d-flex mx-auto justify-content-between" style="${ssrRenderStyle({ "max-width": "1000px" })}"><div class="d-flex px-0 px-md-3">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "d-none d-md-block",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 style="${ssrRenderStyle({ "color": "black !important" })}"${_scopeId}>HighJob</h1>`);
      } else {
        return [
          createVNode("h1", { style: { "color": "black !important" } }, "HighJob")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="d-flex py-3 px-0"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u062E\u0627\u0646\u0647`);
      } else {
        return [
          createTextVNode("\u062E\u0627\u0646\u0647")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/jobs" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u062C\u0633\u062A\u0648\u062C\u0648\u06CC \u0645\u0634\u0627\u063A\u0644`);
      } else {
        return [
          createTextVNode("\u062C\u0633\u062A\u0648\u062C\u0648\u06CC \u0645\u0634\u0627\u063A\u0644")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/resume-maker" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0631\u0632\u0648\u0645\u0647 \u0633\u0627\u0632`);
      } else {
        return [
          createTextVNode("\u0631\u0632\u0648\u0645\u0647 \u0633\u0627\u0632")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/resume-maker" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0645\u0637\u0627\u0644\u0628`);
      } else {
        return [
          createTextVNode("\u0645\u0637\u0627\u0644\u0628")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="d-flex justify-content-end"><div><div class="btn-group pe-2"><button type="button" class="btn btn-primary btn-sm mt-2 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> \u0631\u06A9\u0633\u0627\u0646\u0627 \u0631\u062D\u06CC\u0645\u06CC </button><ul class="dropdown-menu"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/resume-maker",
    class: "dropdown-item",
    href: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0631\u0632\u0648\u0645\u0647 \u0633\u0627\u0632`);
      } else {
        return [
          createTextVNode("\u0631\u0632\u0648\u0645\u0647 \u0633\u0627\u0632")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/resume",
    class: "dropdown-item",
    href: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0631\u0632\u0648\u0645\u0647 \u0645\u0646`);
      } else {
        return [
          createTextVNode("\u0631\u0632\u0648\u0645\u0647 \u0645\u0646")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/requests",
    class: "dropdown-item",
    href: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0647\u0627\u06CC \u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647`);
      } else {
        return [
          createTextVNode("\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0647\u0627\u06CC \u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li><hr class="dropdown-divider"></li><li><a class="dropdown-item" href="#">\u062E\u0631\u0648\u062C</a></li></ul></div></div></div></div></header><div class="clearfix"></div><div class="mx-auto px-2 px-xl-2" style="${ssrRenderStyle({ "max-width": "1000px" })}">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-2a8630d1.mjs.map
