import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./b-209ba95c.js";
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
const profile_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user"))
    };
  },
  mounted() {
    console.log(this.user);
    console.log(localStorage);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row mt-4" }, _attrs))}><div class="col-12 mx-auto mb-1 py-3 px-4" style="${ssrRenderStyle({ "height": "calc(100vh - 180px)", "overflow-y": "scroll", "direction": "ltr", "overflow-x": "hidden" })}"><div class="card border-0 shadow-sm" style="${ssrRenderStyle({ "direction": "rtl" })}"><div class="card-body pb-5"><div><div class="row"><div class="col-lg-8 mx-auto"><h6 class="fw-bold">اطلاعات اوپراتور</h6><div class="row"><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.name)} class="form-control form-control-sm" placeholder="نام"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.last_name)} class="form-control form-control-sm" placeholder="نام خانوادگی"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.mobile)} class="form-control form-control-sm" placeholder="موبایل"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.email)} class="form-control form-control-sm" placeholder="ایمیل"></div><h6 class="fw-bold mt-5">اطلاعات شرکت</h6><div class="mb-1"><img${ssrRenderAttr("src", _imports_0)} class="border rounded" height="80"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.company.title)} class="form-control form-control-sm" placeholder="نام شرکت"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.company.id_number)} class="form-control form-control-sm" placeholder="شماره ثبت"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.company.manager)} class="form-control form-control-sm" placeholder="نام مدیر"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.company.manager_mobile)} class="form-control form-control-sm" placeholder="موبایل مدیر"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.company.telephone)} class="form-control form-control-sm" placeholder="تلفن"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.company.email)} class="form-control form-control-sm" placeholder="ایمیل"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.company.address)} class="form-control form-control-sm" placeholder="ادرس"></div></div><h6 class="d-inline-block pb-2 mb-2">درباره شرکت</h6><div class="row"><div class="col-sm-12"><textarea class="form-control mb-1" rows="6"></textarea></div></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  profile as default
};
//# sourceMappingURL=profile-fbf61bb6.js.map
