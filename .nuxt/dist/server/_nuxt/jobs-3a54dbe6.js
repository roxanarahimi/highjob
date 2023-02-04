import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./b-209ba95c.js";
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
const jobs_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="row"><div class="col-12 mx-auto"><div class="card border-0 shadow-sm" style="${ssrRenderStyle({ "background-color": "whitesmoke" })}"><div class="card-body pb-4"><div class="form mt-3"><form action=""><h6 class="d-inline-block pb-2 mb-2">جستجوی پیشرفته</h6><div class="row"><div class="col-6 col-lg-3 mb-2"><input type="text" placeholder="عنوان شغلی" class="form-control form-control-sm"></div><div class="col-6 col-lg-3 mb-2"><input type="text" placeholder="گروه شغلی" class="form-control form-control-sm"></div><div class="col-6 col-lg-3 mb-2"><input type="text" placeholder="شهر" class="form-control form-control-sm"></div><div class="col-6 col-lg-3 mb-2"><input type="text" placeholder="مرتب سازی" class="form-control form-control-sm"></div></div></form></div><div class="mt-3"><button class="btn btn-sm btn-outline-primary me-2 mb-2">کارآموزی</button><button class="btn btn-sm btn-outline-primary me-2 mb-2">دورکاری</button><button class="btn btn-sm btn-outline-primary me-2 mb-2">تمام وقت</button><button class="btn btn-sm btn-outline-primary me-2 mb-2">پاره وقت</button><button class="btn btn-sm btn-outline-primary me-2 mb-2">پروژه ای</button></div></div></div></div></div><div class="mt-4"><div class="mx-auto"><div class="card border-0" style="${ssrRenderStyle({ "height": "calc(100vh - 350px)", "overflow-y": "scroll", "direction": "ltr" })}"><div class="card-body pb-0" style="${ssrRenderStyle({ "direction": "rtl" })}"><div class="row"><!--[-->`);
  ssrRenderList(10, (item) => {
    _push(`<div class="col-sm-6 col-md-4 col-lg-3 mb-2">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/job",
      class: "p-0 m-0"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="card border-0 shadow-sm" style="${ssrRenderStyle({})}"${_scopeId}><div class="card-body"${_scopeId}><div class="row"${_scopeId}><div class="col-3 col-sm-12"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="rounded img-fluid" alt=""${_scopeId}></div><div class="col-9 col-sm-12"${_scopeId}><p class="fw-bold text-primary mt-3 mb-1"${_scopeId}>طراح سایت</p><small class="fw-lighter mt-1 mb-2"${_scopeId}>گروه تخصصی مشاوران وب</small><div class="d-flex justify-content-between"${_scopeId}><small class="fw-lighter mt-1 mb-2"${_scopeId}>تهران</small><small class="fw-lighter mt-1 mb-2"${_scopeId}>دور کاری</small></div><small class="fw-lighter mt-1 mb-2"${_scopeId}>حقوق توافقی</small></div></div></div></div>`);
        } else {
          return [
            createVNode("div", {
              class: "card border-0 shadow-sm",
              style: {}
            }, [
              createVNode("div", { class: "card-body" }, [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "col-3 col-sm-12" }, [
                    createVNode("img", {
                      src: _imports_0,
                      class: "rounded img-fluid",
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "col-9 col-sm-12" }, [
                    createVNode("p", { class: "fw-bold text-primary mt-3 mb-1" }, "طراح سایت"),
                    createVNode("small", { class: "fw-lighter mt-1 mb-2" }, "گروه تخصصی مشاوران وب"),
                    createVNode("div", { class: "d-flex justify-content-between" }, [
                      createVNode("small", { class: "fw-lighter mt-1 mb-2" }, "تهران"),
                      createVNode("small", { class: "fw-lighter mt-1 mb-2" }, "دور کاری")
                    ]),
                    createVNode("small", { class: "fw-lighter mt-1 mb-2" }, "حقوق توافقی")
                  ])
                ])
              ])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
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
//# sourceMappingURL=jobs-3a54dbe6.js.map
