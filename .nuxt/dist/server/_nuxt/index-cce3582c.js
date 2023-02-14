import "./default-db575943.js";
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "destr";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "defu";
const _imports_0 = "" + __buildAssetsURL("a.35e3ec44.png");
const index_vue_vue_type_style_index_0_lang = "";
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
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="row flex-row-reverse"><div class="col-sm-6 txt"><h1 style="${ssrRenderStyle({ "font-size": "100px", "text-align": "left !important" })}">شغل</h1><h3 style="${ssrRenderStyle({ "font-size": "60px", "text-align": "left !important" })}">رویاهاتو </h3><h5 style="${ssrRenderStyle({ "font-size": "35px", "text-align": "left !important" })}">اینجا پیدا کن </h5></div><div class="col-sm-6"><img class="ss"${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "max-width": "400px" })}" alt=""></div></div><div class="row"><div class="col-12 mx-auto"><div class="card border-0 shadow"><div class="card-body pb-md-5"><div class="form"><form action=""><h5 class="d-inline-block pb-2 mb-3">جستجو کنید</h5><div class="row"><div class="col-12 col-md-10"><div class="row"><div class="col-sm-6 col-md-3 mb-2"><input type="text"${ssrRenderAttr("value", $data.title)} placeholder="عنوان شغلی" class="form-control form-control-sm"></div><div class="col-sm-6 col-md-3 mb-2"><input type="text"${ssrRenderAttr("value", $data.category)} placeholder="گروه شغلی" class="form-control form-control-sm"></div><div class="col-sm-6 col-md-3 mb-2"><input type="text"${ssrRenderAttr("value", $data.state)} placeholder="استان" class="form-control form-control-sm"></div><div class="col-sm-6 col-md-3 mb-2"><input type="text"${ssrRenderAttr("value", $data.city)} placeholder="شهر" class="form-control form-control-sm"></div></div></div><div class="col-12 col-md-2">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { path: "/jobs", props: { title: $data.title, category: $data.category, state: $data.state, city: $data.city } },
    class: "btn btn-sm w-100 mt-1 btn-primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`برو`);
      } else {
        return [
          createTextVNode("برو")
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
export {
  index as default
};
//# sourceMappingURL=index-cce3582c.js.map
