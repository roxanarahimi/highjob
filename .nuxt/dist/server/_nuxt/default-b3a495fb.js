import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "defu";
const default_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
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
        _push2(`خانه`);
      } else {
        return [
          createTextVNode("خانه")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/jobs" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`جستوجوی مشاغل`);
      } else {
        return [
          createTextVNode("جستوجوی مشاغل")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/resume-maker" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`رزومه ساز`);
      } else {
        return [
          createTextVNode("رزومه ساز")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="d-flex justify-content-end"><div><div class="btn-group pe-2"><button type="button" class="btn btn-primary mt-2 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> رکسانا رحیمی </button><ul class="dropdown-menu"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/resume-maker",
    class: "dropdown-item",
    href: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`رزومه ساز`);
      } else {
        return [
          createTextVNode("رزومه ساز")
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
        _push2(`رزومه من`);
      } else {
        return [
          createTextVNode("رزومه من")
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
        _push2(`درخواست های ارسال شده`);
      } else {
        return [
          createTextVNode("درخواست های ارسال شده")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li><hr class="dropdown-divider"></li><li><a class="dropdown-item" href="#">خروج</a></li></ul></div></div></div></div></header><div class="clearfix"></div><div class="mx-auto px-2 px-xl-2" style="${ssrRenderStyle({ "max-width": "1000px" })}">`);
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
export {
  _default as default
};
//# sourceMappingURL=default-b3a495fb.js.map