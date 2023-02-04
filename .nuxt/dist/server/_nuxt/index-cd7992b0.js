import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
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
const _imports_0 = "" + __buildAssetsURL("a.35e3ec44.png");
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="row flex-row-reverse"><div class="col-lg-6 txt"><h1 style="${ssrRenderStyle({ "font-size": "100px", "text-align": "left !important" })}">شغل</h1><h3 style="${ssrRenderStyle({ "font-size": "60px", "text-align": "left !important" })}">رویاهاتو </h3><h5 style="${ssrRenderStyle({ "font-size": "35px", "text-align": "left !important" })}">اینجا پیدا کن </h5></div><div class="col-lg-6"><img class="ss"${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "max-width": "400px" })}" alt=""></div></div><div class="row"><div class="col-12 mx-auto"><div class="card border-0 shadow"><div class="card-body pb-5"><div class="form"><form action=""><h5 class="d-inline-block pb-2 mb-3">جستجو کنید</h5><div class="row"><div class="col-12 col-sm-10"><div class="row"><div class="col-sm-4 mb-3"><input type="text" placeholder="عنوان شغلی" class="form-control"></div><div class="col-sm-4 mb-3"><input type="text" placeholder="گروه شغلی" class="form-control"></div><div class="col-sm-4 mb-3"><input type="text" placeholder="شهر" class="form-control"></div></div></div><div class="col-12 col-sm-2"><button class="btn btn-block btn-primary w-100">برو</button></div></div></form></div></div></div></div></div></div>`);
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
//# sourceMappingURL=index-cd7992b0.js.map
