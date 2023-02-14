import { b as buildAssetsURL } from './paths.mjs';
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from 'file://F:/PROJECTS/2023/highjob/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from 'file://F:/PROJECTS/2023/highjob/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/ufo/dist/index.mjs';
import './config.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/destr/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/scule/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/ofetch/dist/node.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/hookable/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/unctx/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/h3/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/@unhead/vue/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/@unhead/dom/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/defu/dist/defu.mjs';

const _imports_0 = "" + buildAssetsURL("a.35e3ec44.png");
const _sfc_main = {
  data() {
    return {
      title: "",
      category: "",
      state: "",
      city: ""
    };
  },
  mounted() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="row flex-row-reverse"><div class="col-sm-6 txt"><h1 style="${ssrRenderStyle({ "font-size": "100px", "text-align": "left !important" })}">\u0634\u063A\u0644</h1><h3 style="${ssrRenderStyle({ "font-size": "60px", "text-align": "left !important" })}">\u0631\u0648\u06CC\u0627\u0647\u0627\u062A\u0648 </h3><h5 style="${ssrRenderStyle({ "font-size": "35px", "text-align": "left !important" })}">\u0627\u06CC\u0646\u062C\u0627 \u067E\u06CC\u062F\u0627 \u06A9\u0646 </h5></div><div class="col-sm-6"><img class="ss"${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "max-width": "400px" })}" alt=""></div></div><div class="row"><div class="col-12 mx-auto"><div class="card border-0 shadow"><div class="card-body pb-md-5"><div class="form"><form action=""><h5 class="d-inline-block pb-2 mb-3">\u062C\u0633\u062A\u062C\u0648 \u06A9\u0646\u06CC\u062F</h5><div class="row"><div class="col-12 col-md-10"><div class="row"><div class="col-sm-6 col-md-3 mb-2"><input type="text"${ssrRenderAttr("value", $data.title)} placeholder="\u0639\u0646\u0648\u0627\u0646 \u0634\u063A\u0644\u06CC" class="form-control form-control-sm"></div><div class="col-sm-6 col-md-3 mb-2"><input type="text"${ssrRenderAttr("value", $data.category)} placeholder="\u06AF\u0631\u0648\u0647 \u0634\u063A\u0644\u06CC" class="form-control form-control-sm"></div><div class="col-sm-6 col-md-3 mb-2"><input type="text"${ssrRenderAttr("value", $data.state)} placeholder="\u0627\u0633\u062A\u0627\u0646" class="form-control form-control-sm"></div><div class="col-sm-6 col-md-3 mb-2"><input type="text"${ssrRenderAttr("value", $data.city)} placeholder="\u0634\u0647\u0631" class="form-control form-control-sm"></div></div></div><div class="col-12 col-md-2">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { path: "/jobs", props: { title: $data.title, category: $data.category, state: $data.state, city: $data.city } },
    class: "btn btn-sm w-100 mt-1 btn-primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0628\u0631\u0648`);
      } else {
        return [
          createTextVNode("\u0628\u0631\u0648")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></form></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-cce3582c.mjs.map
