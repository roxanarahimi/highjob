import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
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
const job_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  setup() {
    const skills = ref([{ title: "", level: "" }]);
    const educations = ref([{ school: "", degree: "", start: "", end: "", city: "", description: "" }]);
    const languages = ref([{ title: "", level: "" }]);
    const links = ref([{ title: "", link: "" }]);
    return {
      skills,
      educations,
      languages,
      links
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row mt-4" }, _attrs))}><div class="d-flex mb-1"></div><div class="col-12 mx-auto mb-1 py-3 px-4" style="${ssrRenderStyle({ "height": "calc(100vh - 180px)", "overflow-y": "scroll", "direction": "ltr", "overflow-x": "hidden" })}"><div class="card border-0 shadow-sm" style="${ssrRenderStyle({ "direction": "rtl" })}"><div class="card-body pb-5"><div><div class="row"><div class="col-lg-8 mx-auto"><div class="row"><div class="col-sm-6 mb-1"><input type="text" name="" class="form-control form-control-sm" placeholder="عنوان"></div><div class="col-sm-6 mb-1"><input type="text" name="" class="form-control form-control-sm" placeholder="اسلاگ"></div></div><h6 class="d-inline-block pb-2 mb-2">درباره شغل</h6><div class="row"><div class="col-sm-12"><textarea id="about" class="form-control mb-1" rows="6"></textarea></div></div><h6 class="d-inline-block pb-2 mb-2">تحصیلات <span class="cursor-pointer px-2 fw-bolder text-primary" style="${ssrRenderStyle({ "font-size": "25px" })}" title="افزودن">+</span></h6><div class="accordion rounded mb-1 border accordion-flush" id="educations_accordion"><!--[-->`);
  ssrRenderList(2, (item, index) => {
    _push(`<div class="accordion-item"><h2 class="accordion-header"${ssrRenderAttr("id", "flush-headingedu" + index)}><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", "#flush-collapseedu" + index)} aria-expanded="false"${ssrRenderAttr("aria-controls", "flush-collapseedu" + index)}> رشته </button></h2><div${ssrRenderAttr("id", "flush-collapseedu" + index)} class="accordion-collapse collapse"${ssrRenderAttr("aria-labelledby", "flush-headingedu" + index)} data-bs-parent="#educations_accordion"><div class="accordion-body"><div class="row rounded mx-1 p-3"><div class="col-sm-6 mb-1"><input type="text" name="" class="form-control form-control-sm" placeholder="مکان"></div><div class="col-sm-6 mb-1"><input type="text" name="" class="form-control form-control-sm" placeholder="رشته"></div><div class="col-sm-3 mb-1"><input type="text" name="" class="form-control form-control-sm" placeholder="شروع"></div><div class="col-sm-3 mb-1"><input type="text" name="" class="form-control form-control-sm" placeholder="پایان"></div><div class="col-sm-6 mb-1"><input type="text" name="" class="form-control form-control-sm" placeholder="شهر"></div><div class="col-sm-12 mb-1"><textarea class="form-control mb-1" rows="4"></textarea></div></div></div></div></div>`);
  });
  _push(`<!--]--></div><h6 class="d-inline-block pb-2 mb-2">مهارت ها <span class="cursor-pointer px-2 fw-bolder text-primary" style="${ssrRenderStyle({ "font-size": "25px" })}" title="افزودن">+</span></h6><div class="accordion rounded mb-1 border accordion-flush" id="skills_accordion"><!--[-->`);
  ssrRenderList(3, (item, index) => {
    _push(`<div class="accordion-item"><h2 class="accordion-header"${ssrRenderAttr("id", "flush-heading-skill" + index)}><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", "#flush-collapse-skill" + index)} aria-expanded="false"${ssrRenderAttr("aria-controls", "flush-collapse-skill" + index)}> مهارت </button></h2><div${ssrRenderAttr("id", "flush-collapse-skill" + index)} class="accordion-collapse collapse"${ssrRenderAttr("aria-labelledby", "flush-heading-skill" + index)} data-bs-parent="#skills_accordion"><div class="accordion-body"><div class="row rounded mx-1 p-3"><div class="col-sm-6 mb-1"><input type="text" name="" class="form-control form-control-sm" placeholder="عنوان"></div><div class="col-sm-6 mb-1"><input type="text" name="" class="form-control form-control-sm" placeholder="سطح"></div></div></div></div></div>`);
  });
  _push(`<!--]--></div><h6 class="d-inline-block pb-2 mb-2">زبان ها<span class="cursor-pointer px-2 fw-bolder text-primary" style="${ssrRenderStyle({ "font-size": "25px" })}" title="افزودن">+</span></h6><div class="accordion rounded mb-1 border accordion-flush" id="languages_accordion"><!--[-->`);
  ssrRenderList(1, (item, index) => {
    _push(`<div class="accordion-item"><h2 class="accordion-header"${ssrRenderAttr("id", "flush-headingLang" + index)}><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", "#flush-collapseLang" + index)} aria-expanded="false"${ssrRenderAttr("aria-controls", "flush-collapseLang" + index)}> عنوان </button></h2><div${ssrRenderAttr("id", "flush-collapseLang" + index)} class="accordion-collapse collapse"${ssrRenderAttr("aria-labelledby", "flush-headingLang" + index)} data-bs-parent="#languages_accordion"><div class="accordion-body"><div class="row rounded mx-1 p-3"><div class="col-sm-6 mb-1"><input type="text" name="" class="form-control form-control-sm" placeholder="عنوان"></div><div class="col-sm-6 mb-1"><input type="text" name="" class="form-control form-control-sm" placeholder="سطح"></div></div></div></div></div>`);
  });
  _push(`<!--]--></div><h6 class="d-inline-block pb-2 mb-2">لینک ها <span class="cursor-pointer px-2 fw-bolder text-primary" style="${ssrRenderStyle({ "font-size": "25px" })}" title="افزودن">+</span></h6><div class="accordion rounded mb-1 border accordion-flush" id="links_accordion"><!--[-->`);
  ssrRenderList(2, (item, index) => {
    _push(`<div class="accordion-item"><h2 class="accordion-header"${ssrRenderAttr("id", "flush-heading" + index)}><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", "#flush-collapselink" + index)} aria-expanded="false"${ssrRenderAttr("aria-controls", "flush-collapselink" + index)}> عنوان </button></h2><div${ssrRenderAttr("id", "flush-collapselink" + index)} class="accordion-collapse collapse"${ssrRenderAttr("aria-labelledby", "flush-headinglink" + index)} data-bs-parent="#links_accordion"><div class="accordion-body"><div class="row rounded mx-1 p-3"><div class="col-sm-6 mb-1"><input type="text" name="" class="form-control form-control-sm" placeholder="عنوان"></div><div class="col-sm-6 mb-1"><input type="text" name="" class="form-control form-control-sm" placeholder="آدرس"></div></div></div></div></div>`);
  });
  _push(`<!--]--></div><h6 class="d-inline-block pb-2 mb-2">شرایط کاری</h6><div class="row"><div class="col-sm-12"><textarea class="form-control mb-1" rows="4"></textarea></div></div><div><button class="btn btn-primary mt-3">ذخیره</button></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/new/job.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const job = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  job as default
};
//# sourceMappingURL=job-9070e5b1.js.map
