import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row mt-4" }, _attrs))}><div class="col-4 mb-3"><div class="card border-0 shadow"><div class="card-body pb-5"><h6 class="d-inline-block pb-2 mb-2">\u062A\u0635\u0648\u06CC\u0631</h6></div></div></div><div class="col-8 mb-3"><div class="card border-0 shadow"><div class="card-body pb-5"><h6 class="d-inline-block pb-2 mb-2">\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0646</h6><textarea class="form-control" rows="8"></textarea></div></div></div><div class="col-12 mb-3"><div class="card border-0 shadow"><div class="card-body pb-5"><h6 class="d-inline-block pb-2 mb-2">\u062A\u062D\u0635\u06CC\u0644\u0627\u062A</h6><!--[-->`);
  ssrRenderList(3, (item) => {
    _push(`<div class="row"><div class="col-4 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="\u0645\u0642\u0637\u0639"></div><div class="col-4 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="\u0631\u0634\u062A\u0647"></div><div class="col-4 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="\u0646\u0645\u0631\u0647"></div></div>`);
  });
  _push(`<!--]--></div></div></div><div class="col-12 mb-3"><div class="card border-0 shadow"><div class="card-body pb-5"><h6 class="d-inline-block pb-2 mb-2">\u0645\u0647\u0627\u0631\u062A \u0647\u0627</h6><!--[-->`);
  ssrRenderList(3, (item) => {
    _push(`<div class="row"><div class="col-4 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="\u0639\u0646\u0648\u0627\u0646"></div><div class="col-4 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="\u0633\u0637\u062D"></div></div>`);
  });
  _push(`<!--]--></div></div></div><div class="col-12 mb-3"><div class="card border-0 shadow"><div class="card-body pb-5"><h6 class="d-inline-block pb-2 mb-2">\u0633\u0627\u0628\u0642\u0647 \u06A9\u0627\u0631</h6><!--[-->`);
  ssrRenderList(3, (item) => {
    _push(`<div class="row"><div class="col-3 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="\u0646\u0627\u0645 \u0634\u0631\u06A9\u062A"></div><div class="col-3 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="\u0639\u0646\u0648\u0627\u0646 \u0634\u063A\u0644\u06CC"></div><div class="col-3 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="\u062A\u0627\u0631\u06CC\u062E \u0634\u0631\u0648\u0639"></div><div class="col-3 mb-3"><input type="text" name="" class="form-control form-control-sm" placeholder="\u062A\u0627\u0631\u06CC\u062E \u067E\u0627\u06CC\u0627\u0646"></div></div>`);
  });
  _push(`<!--]--></div></div></div><div class="col-12 mb-3"><div class="card border-0 shadow"><div class="card-body pb-5"><h6 class="d-inline-block pb-2 mb-2">\u0645\u062F\u0627\u0631\u06A9 \u0648 \u0627\u0641\u062A\u062E\u0627\u0631\u0627\u062A</h6></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resume.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resume = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { resume as default };
//# sourceMappingURL=resume-a5bfea38.mjs.map
