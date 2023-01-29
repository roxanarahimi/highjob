import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';
import './config.mjs';
import 'destr';
import 'scule';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid px-0" }, _attrs))} data-v-4a0f2179><header data-v-4a0f2179><div class="w-100 d-flex px-3" data-v-4a0f2179>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 data-v-4a0f2179${_scopeId}>HighJob</h1>`);
      } else {
        return [
          createVNode("h1", null, "HighJob")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="d-flex py-3" data-v-4a0f2179><li data-v-4a0f2179>`);
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
  _push(`</li><li data-v-4a0f2179>`);
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
  _push(`</li><li data-v-4a0f2179>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0648\u0631\u0648\u062F`);
      } else {
        return [
          createTextVNode("\u0648\u0631\u0648\u062F")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-4a0f2179>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/resume" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0631\u0632\u0648\u0645\u0647`);
      } else {
        return [
          createTextVNode("\u0631\u0632\u0648\u0645\u0647")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></header><div class="mx-auto px-5 px-xl-2" style="${ssrRenderStyle({ "max-width": "1000px" })}" data-v-4a0f2179>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4a0f2179"]]);

export { _default as default };
//# sourceMappingURL=default-2760f2a6.mjs.map
