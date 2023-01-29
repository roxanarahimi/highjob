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
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-70aeec8e><div class="row flex-row-reverse" data-v-70aeec8e><div class="col-lg-6 txt" data-v-70aeec8e><h1 style="${ssrRenderStyle({ "font-size": "100px", "text-align": "left !important" })}" data-v-70aeec8e>\u0634\u063A\u0644</h1><h3 style="${ssrRenderStyle({ "font-size": "60px", "text-align": "left !important" })}" data-v-70aeec8e>\u0631\u0648\u06CC\u0627\u0647\u0627\u062A\u0648 </h3><h5 style="${ssrRenderStyle({ "font-size": "40px", "text-align": "left !important" })}" data-v-70aeec8e>\u0627\u06CC\u0646\u062C\u0627 \u067E\u06CC\u062F\u0627 \u06A9\u0646 </h5></div><div class="col-lg-6" data-v-70aeec8e><img class="ss" src="http://localhost:3000/images/a.png" style="${ssrRenderStyle({ "max-width": "400px" })}" alt="" data-v-70aeec8e></div></div><div class="row" data-v-70aeec8e><div class="col-12 mx-auto" data-v-70aeec8e><div class="card border-0 shadow" data-v-70aeec8e><div class="card-body pb-5" data-v-70aeec8e><div class="form" data-v-70aeec8e><form action="" data-v-70aeec8e><h5 class="d-inline-block pb-2 mb-3" data-v-70aeec8e>\u062C\u0633\u062A\u062C\u0648 \u06A9\u0646\u06CC\u062F</h5><div class="row" data-v-70aeec8e><div class="col-lg-10 col-lg-11" data-v-70aeec8e><div class="row" data-v-70aeec8e><div class="col-lg-4 mb-3" data-v-70aeec8e><input type="text" placeholder="\u0639\u0646\u0648\u0627\u0646 \u0634\u063A\u0644\u06CC" class="form-control" data-v-70aeec8e></div><div class="col-lg-4 mb-3" data-v-70aeec8e><input type="text" placeholder="\u06AF\u0631\u0648\u0647 \u0634\u063A\u0644\u06CC" class="form-control" data-v-70aeec8e></div><div class="col-lg-4 mb-3" data-v-70aeec8e><input type="text" placeholder="\u0634\u0647\u0631" class="form-control" data-v-70aeec8e></div></div></div><div class="col-2 col-lg-1" data-v-70aeec8e><button class="btn btn-primary" data-v-70aeec8e>\u0628\u0631\u0648</button></div></div></form></div></div></div></div></div><div class="row mt-4 d-none" data-v-70aeec8e><div class="col-12 mx-auto" data-v-70aeec8e><div class="card border-0 shadow" data-v-70aeec8e><div class="card-body pb-5" data-v-70aeec8e><div class="row" data-v-70aeec8e><!--[-->`);
  ssrRenderList(10, (item) => {
    _push(`<div class="col-sm-6 col-md-4 col-lg-3 mb-3" data-v-70aeec8e><div class="card" style="${ssrRenderStyle({})}" data-v-70aeec8e><div class="card-body" data-v-70aeec8e><p class="fw-bold text-primary mt-3 mb-1" data-v-70aeec8e>\u0637\u0631\u0627\u062D \u0633\u0627\u06CC\u062A</p><p class="fw-lighter mt-1 mb-2" data-v-70aeec8e>\u06AF\u0631\u0648\u0647 \u062A\u062E\u0635\u0635\u06CC \u0645\u0634\u0627\u0648\u0631\u0627\u0646 \u0648\u0628</p><div class="d-flex justify-content-between" data-v-70aeec8e><small class="fw-lighter mt-1 mb-2" data-v-70aeec8e>\u062A\u0647\u0631\u0627\u0646</small><small class="fw-lighter mt-1 mb-3" data-v-70aeec8e>\u062F\u0648\u0631 \u06A9\u0627\u0631\u06CC</small></div></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-70aeec8e"]]);

export { index as default };
//# sourceMappingURL=index-bf16bf35.mjs.map
