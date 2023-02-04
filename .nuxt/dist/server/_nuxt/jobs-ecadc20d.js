import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
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
const _imports_0 = "" + __buildAssetsURL("b.8d0aae53.jpg");
const jobs_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="row"><div class="col-12 mx-auto"><div class="card border-0 shadow-sm" style="${ssrRenderStyle({ "background-color": "whitesmoke" })}"><div class="card-body pb-4"><div class="form mt-3"><form action=""><h6 class="d-inline-block pb-2 mb-2">جستجوی پیشرفته</h6><div class="row"><div class="col-6 col-lg-3 mb-2"><input type="text" placeholder="عنوان شغلی" class="form-control form-control-sm"></div><div class="col-6 col-lg-3 mb-2"><input type="text" placeholder="گروه شغلی" class="form-control form-control-sm"></div><div class="col-6 col-lg-3 mb-2"><input type="text" placeholder="شهر" class="form-control form-control-sm"></div><div class="col-6 col-lg-3 mb-2"><input type="text" placeholder="مرتب سازی" class="form-control form-control-sm"></div></div></form></div><div class="mt-3"><button class="btn btn-sm btn-outline-primary me-2 mb-2">کارآموزی</button><button class="btn btn-sm btn-outline-primary me-2 mb-2">دورکاری</button><button class="btn btn-sm btn-outline-primary me-2 mb-2">تمام وقت</button><button class="btn btn-sm btn-outline-primary me-2 mb-2">پاره وقت</button><button class="btn btn-sm btn-outline-primary me-2 mb-2">پروژه ای</button></div></div></div></div></div><div class="row mt-4"><div class="col-12 mx-auto"><div class="card border-0" style="${ssrRenderStyle({ "height": "calc(100vh - 300px)", "overflow-y": "scroll", "direction": "ltr" })}"><div class="card-body pb-5" style="${ssrRenderStyle({ "direction": "rtl" })}"><div class="row"><!--[-->`);
  ssrRenderList(10, (item) => {
    _push(`<div class="col-sm-6 col-md-4 col-lg-3 mb-3"><div class="card border-0 shadow-sm" style="${ssrRenderStyle({})}"><div class="card-body"><img${ssrRenderAttr("src", _imports_0)} class="rounded img-fluid" alt=""><p class="fw-bold text-primary mt-3 mb-1">طراح سایت</p><small class="fw-lighter mt-1 mb-2">گروه تخصصی مشاوران وب</small><div class="d-flex justify-content-between"><small class="fw-lighter mt-1 mb-2">تهران</small><small class="fw-lighter mt-1 mb-3">دور کاری</small></div></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/jobs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jobs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  jobs as default
};
//# sourceMappingURL=jobs-ecadc20d.js.map
