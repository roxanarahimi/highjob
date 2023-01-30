import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
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
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-20eca57b><div class="row" data-v-20eca57b><div class="col-12 mx-auto" data-v-20eca57b><div class="card border-0 shadow-sm" style="${ssrRenderStyle({ "background-color": "whitesmoke" })}" data-v-20eca57b><div class="card-body pb-4" data-v-20eca57b><div class="form" data-v-20eca57b><form action="" data-v-20eca57b><h6 class="d-inline-block pb-2 mb-2" data-v-20eca57b>\u062C\u0633\u062A\u062C\u0648\u06CC \u067E\u06CC\u0634\u0631\u0641\u062A\u0647</h6><div class="row" data-v-20eca57b><div class="col-3" data-v-20eca57b><input type="text" placeholder="\u0639\u0646\u0648\u0627\u0646 \u0634\u063A\u0644\u06CC" class="form-control form-control-sm" data-v-20eca57b></div><div class="col-3" data-v-20eca57b><input type="text" placeholder="\u06AF\u0631\u0648\u0647 \u0634\u063A\u0644\u06CC" class="form-control form-control-sm" data-v-20eca57b></div><div class="col-3" data-v-20eca57b><input type="text" placeholder="\u0634\u0647\u0631" class="form-control form-control-sm" data-v-20eca57b></div><div class="col-3" data-v-20eca57b><input type="text" placeholder="\u0645\u0631\u062A\u0628 \u0633\u0627\u0632\u06CC" class="form-control form-control-sm" data-v-20eca57b></div></div></form></div><div class="mt-3" data-v-20eca57b><button class="btn btn-sm btn-outline-primary me-3" data-v-20eca57b>\u06A9\u0627\u0631\u0622\u0645\u0648\u0632\u06CC</button><button class="btn btn-sm btn-outline-primary me-3" data-v-20eca57b>\u062F\u0648\u0631\u06A9\u0627\u0631\u06CC</button><button class="btn btn-sm btn-outline-primary me-3" data-v-20eca57b>\u062A\u0645\u0627\u0645 \u0648\u0642\u062A</button><button class="btn btn-sm btn-outline-primary me-3" data-v-20eca57b>\u067E\u0627\u0631\u0647 \u0648\u0642\u062A</button><button class="btn btn-sm btn-outline-primary me-3" data-v-20eca57b>\u067E\u0631\u0648\u0698\u0647 \u0627\u06CC</button></div></div></div></div></div><div class="row mt-4" data-v-20eca57b><div class="col-12 mx-auto" data-v-20eca57b><div class="card border-0" style="${ssrRenderStyle({ "height": "calc(100vh - 300px)", "overflow-y": "scroll", "direction": "ltr" })}" data-v-20eca57b><div class="card-body pb-5" style="${ssrRenderStyle({ "direction": "rtl" })}" data-v-20eca57b><div class="row" data-v-20eca57b><!--[-->`);
  ssrRenderList(10, (item) => {
    _push(`<div class="col-sm-6 col-md-4 col-lg-3 mb-3" data-v-20eca57b><div class="card border-0 shadow-sm" style="${ssrRenderStyle({})}" data-v-20eca57b><div class="card-body" data-v-20eca57b><img src="https://highjob.webagent.ir/images/b.jpg" class="rounded img-fluid" alt="" data-v-20eca57b><p class="fw-bold text-primary mt-3 mb-1" data-v-20eca57b>\u0637\u0631\u0627\u062D \u0633\u0627\u06CC\u062A</p><small class="fw-lighter mt-1 mb-2" data-v-20eca57b>\u06AF\u0631\u0648\u0647 \u062A\u062E\u0635\u0635\u06CC \u0645\u0634\u0627\u0648\u0631\u0627\u0646 \u0648\u0628</small><div class="d-flex justify-content-between" data-v-20eca57b><small class="fw-lighter mt-1 mb-2" data-v-20eca57b>\u062A\u0647\u0631\u0627\u0646</small><small class="fw-lighter mt-1 mb-3" data-v-20eca57b>\u062F\u0648\u0631 \u06A9\u0627\u0631\u06CC</small></div></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/jobs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jobs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-20eca57b"]]);

export { jobs as default };
//# sourceMappingURL=jobs-52e74015.mjs.map
