import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row mt-4" }, _attrs))}><div class="col-lg-6 mx-auto" style="${ssrRenderStyle({ "margin-top": "150px" })}"><div class="card border-0 shadow"><div class="card-body pb-5"><h6 class="d-inline-block pb-2 mb-2">ورود به سایت</h6><div class="row d-flex justify-content-start" style="${ssrRenderStyle({ "padding-right": "11px", "padding-left": "11px" })}"><div class="col-6"><button class="w-100 btn btn-sm btn-primary me-2 mb-2">کارجو</button></div><div class="col-6"><button class="w-100 btn btn-sm btn-outline-primary me-2 mb-2">کارفرما</button></div></div><div class="d-flex justify-content-between"><input type="text" class="form-control form-control-sm mx-1 mb-3" placeholder="موبایل"></div><small>کد تایید به موبایل شما پیامک شد. لطفا انرا در زیر وارد کنید</small><div class="d-flex justify-content-between mt-3"><input type="text" class="form-control form-control-sm mx-1 text-center"><input type="text" class="form-control form-control-sm mx-1 text-center"><input type="text" class="form-control form-control-sm mx-1 text-center"><input type="text" class="form-control form-control-sm mx-1 text-center"></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  login as default
};
//# sourceMappingURL=login-507b8c63.js.map
