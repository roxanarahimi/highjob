import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
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
const resumeMaker_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row mt-4 px-3" }, _attrs))}><div class="d-flex mb-3">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/resume",
    class: "btn btn-primary btn-sm"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`پیش نمایش`);
      } else {
        return [
          createTextVNode("پیش نمایش")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="col-12 mx-auto mb-3 py-3 px-4" style="${ssrRenderStyle({ "height": "calc(100vh - 180px)", "overflow-y": "scroll", "direction": "ltr", "overflow-x": "hidden" })}"><div class="card border-0 shadow-sm" style="${ssrRenderStyle({ "direction": "rtl" })}"><div class="card-body pb-5"><div><div class="row"><div class="col-lg-8 mx-auto"><div class="row"><div class="col-sm-6 mb-3"><img src="https://highjob.webagent.ir/images/b.jpg" class="border rounded" height="80"></div><div class="col-sm-6 mb-3" style="${ssrRenderStyle({ "padding-top": "50px" })}"><input type="text" name="" class="form-control form-control-sm" placeholder="عنوان شغلی"></div></div><div class="row"><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="نام"></div><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="نام خانوادگی"></div><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="موبایل"></div><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="ایمیل"></div><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="سال تولد"></div><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="شهر"></div></div><h6 class="d-inline-block pb-2 mb-2">درباره من</h6><div class="row"><div class="col-sm-12"><textarea class="form-control mb-3" rows="6"></textarea></div></div><h6 class="d-inline-block pb-2 mb-2">تحصیلات <i class="cursor-pointer px-2 fw-bolder text-primary" style="${ssrRenderStyle({ "font-size": "25px" })}" title="افزودن">+</i></h6><div class="accordion rounded mb-3 border accordion-flush" id="accordionFlushExample"><div class="accordion-item"><h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"> رشته </button></h2><div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample"><div class="accordion-body"><div class="row rounded mx-1 p-3"><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="مکان"></div><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="رشته"></div><div class="col-sm-3 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="شروع"></div><div class="col-sm-3 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="پایان"></div><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="شهر"></div><div class="col-sm-12 mb-3"><textarea class="form-control mb-3" rows="4"></textarea></div></div></div></div></div></div><h6 class="d-inline-block pb-2 mb-2">مهارت ها<i class="cursor-pointer px-2 fw-bolder text-primary" style="${ssrRenderStyle({ "font-size": "25px" })}" title="افزودن">+</i></h6><div class="accordion rounded mb-3 border accordion-flush" id="accordionFlushExample1"><div class="accordion-item"><h2 class="accordion-header" id="flush-heading1"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="false" aria-controls="flush-collapse1"> مهارت </button></h2><div id="flush-collapse1" class="accordion-collapse collapse" aria-labelledby="flush-heading1" data-bs-parent="#accordionFlushExample1"><div class="accordion-body"><div class="row rounded mx-1 p-3"><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="عنوان"></div><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="سطح"></div></div></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="flush-heading2"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2"> مهارت </button></h2><div id="flush-collapse2" class="accordion-collapse collapse" aria-labelledby="flush-heading2" data-bs-parent="#accordionFlushExample1"><div class="accordion-body"><div class="row rounded mx-1 p-3"><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="عنوان"></div><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="سطح"></div></div></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="flush-heading3"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3"> مهارت </button></h2><div id="flush-collapse3" class="accordion-collapse collapse" aria-labelledby="flush-heading3" data-bs-parent="#accordionFlushExample1"><div class="accordion-body"><div class="row rounded mx-1 p-3"><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="عنوان"></div><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="سطح"></div></div></div></div></div></div><h6 class="d-inline-block pb-2 mb-2">سابقه کار<i class="cursor-pointer px-2 fw-bolder text-primary" style="${ssrRenderStyle({ "font-size": "25px" })}" title="افزودن">+</i></h6><div class="accordion rounded mb-3 border accordion-flush" id="accordionFlushExample2"><div class="accordion-item"><h2 class="accordion-header" id="flush-headingOne2"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne1"> عنوان شغلی </button></h2><div id="flush-collapseOne2" class="accordion-collapse collapse" aria-labelledby="flush-headingOne2" data-bs-parent="#accordionFlushExample2"><div class="accordion-body"><div class="row rounded mx-1 p-3"><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="شرکت"></div><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="عنوان شغلی"></div><div class="col-sm-3 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="شروع"></div><div class="col-sm-3 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="پایان"></div><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="شهر"></div><div class="col-sm-12 mb-3"><textarea class="form-control mb-3" rows="4"></textarea></div></div></div></div></div></div><h6 class="d-inline-block pb-2 mb-2">زبان ها<i class="cursor-pointer px-2 fw-bolder text-primary" style="${ssrRenderStyle({ "font-size": "25px" })}" title="افزودن">+</i></h6><div class="accordion rounded mb-3 border accordion-flush" id="accordionFlushExample3"><div class="accordion-item"><h2 class="accordion-header" id="flush-headingLang1"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseLang1" aria-expanded="false" aria-controls="flush-collapseLang1"> عنوان </button></h2><div id="flush-collapseLang1" class="accordion-collapse collapse" aria-labelledby="flush-headingLang1" data-bs-parent="#accordionFlushExample3"><div class="accordion-body"><div class="row rounded mx-1 p-3"><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="عنوان"></div><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="سطح"></div></div></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="flush-headingLang2"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseLang2" aria-expanded="false" aria-controls="flush-collapseLang2"> عنوان </button></h2><div id="flush-collapseLang2" class="accordion-collapse collapse" aria-labelledby="flush-headingLang2" data-bs-parent="#accordionFlushExample3"><div class="accordion-body"><div class="row rounded mx-1 p-3"><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="عنوان"></div><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="سطح"></div></div></div></div></div></div><h6 class="d-inline-block pb-2 mb-2">لینک ها<i class="cursor-pointer px-2 fw-bolder text-primary" style="${ssrRenderStyle({ "font-size": "25px" })}" title="افزودن">+</i></h6><div class="accordion rounded mb-3 border accordion-flush" id="accordionFlushExample4"><div class="accordion-item"><h2 class="accordion-header" id="flush-headingOne4"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne4" aria-expanded="false" aria-controls="flush-collapseOne1"> عنوان </button></h2><div id="flush-collapseOne4" class="accordion-collapse collapse" aria-labelledby="flush-headingOne2" data-bs-parent="#accordionFlushExample4"><div class="accordion-body"><div class="row rounded mx-1 p-3"><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="عنوان"></div><div class="col-sm-6 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="آدرس"></div></div></div></div></div></div><h6 class="d-inline-block pb-2 mb-2">سرگرمی ها</h6><div class="row"><div class="col-sm-12"><textarea class="form-control mb-3" rows="4"></textarea></div></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resume-maker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resumeMaker = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  resumeMaker as default
};
//# sourceMappingURL=resume-maker-c0c88406.js.map
