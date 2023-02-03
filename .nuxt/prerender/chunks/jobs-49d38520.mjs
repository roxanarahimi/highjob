import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList } from 'file://F:/PROJECTS/2023/highjob/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file://F:/PROJECTS/2023/highjob/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/ofetch/dist/node.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/hookable/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/unctx/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/ufo/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/h3/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/@unhead/vue/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/@unhead/dom/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/defu/dist/defu.mjs';
import './config.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/destr/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/scule/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="row"><div class="col-12 mx-auto"><div class="card border-0 shadow-sm" style="${ssrRenderStyle({ "background-color": "whitesmoke" })}"><div class="card-body pb-4"><div class="form mt-3"><form action=""><h6 class="d-inline-block pb-2 mb-2">\u062C\u0633\u062A\u062C\u0648\u06CC \u067E\u06CC\u0634\u0631\u0641\u062A\u0647</h6><div class="row"><div class="col-6 col-lg-3 mb-2"><input type="text" placeholder="\u0639\u0646\u0648\u0627\u0646 \u0634\u063A\u0644\u06CC" class="form-control form-control-sm"></div><div class="col-6 col-lg-3 mb-2"><input type="text" placeholder="\u06AF\u0631\u0648\u0647 \u0634\u063A\u0644\u06CC" class="form-control form-control-sm"></div><div class="col-6 col-lg-3 mb-2"><input type="text" placeholder="\u0634\u0647\u0631" class="form-control form-control-sm"></div><div class="col-6 col-lg-3 mb-2"><input type="text" placeholder="\u0645\u0631\u062A\u0628 \u0633\u0627\u0632\u06CC" class="form-control form-control-sm"></div></div></form></div><div class="mt-3"><button class="btn btn-sm btn-outline-primary me-2 mb-2">\u06A9\u0627\u0631\u0622\u0645\u0648\u0632\u06CC</button><button class="btn btn-sm btn-outline-primary me-2 mb-2">\u062F\u0648\u0631\u06A9\u0627\u0631\u06CC</button><button class="btn btn-sm btn-outline-primary me-2 mb-2">\u062A\u0645\u0627\u0645 \u0648\u0642\u062A</button><button class="btn btn-sm btn-outline-primary me-2 mb-2">\u067E\u0627\u0631\u0647 \u0648\u0642\u062A</button><button class="btn btn-sm btn-outline-primary me-2 mb-2">\u067E\u0631\u0648\u0698\u0647 \u0627\u06CC</button></div></div></div></div></div><div class="row mt-4"><div class="col-12 mx-auto"><div class="card border-0" style="${ssrRenderStyle({ "height": "calc(100vh - 300px)", "overflow-y": "scroll", "direction": "ltr" })}"><div class="card-body pb-5" style="${ssrRenderStyle({ "direction": "rtl" })}"><div class="row"><!--[-->`);
  ssrRenderList(10, (item) => {
    _push(`<div class="col-sm-6 col-md-4 col-lg-3 mb-3"><div class="card border-0 shadow-sm" style="${ssrRenderStyle({})}"><div class="card-body"><img src="https://highjob.webagent.ir/images/b.jpg" class="rounded img-fluid" alt=""><p class="fw-bold text-primary mt-3 mb-1">\u0637\u0631\u0627\u062D \u0633\u0627\u06CC\u062A</p><small class="fw-lighter mt-1 mb-2">\u06AF\u0631\u0648\u0647 \u062A\u062E\u0635\u0635\u06CC \u0645\u0634\u0627\u0648\u0631\u0627\u0646 \u0648\u0628</small><div class="d-flex justify-content-between"><small class="fw-lighter mt-1 mb-2">\u062A\u0647\u0631\u0627\u0646</small><small class="fw-lighter mt-1 mb-3">\u062F\u0648\u0631 \u06A9\u0627\u0631\u06CC</small></div></div></div></div>`);
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

export { jobs as default };
//# sourceMappingURL=jobs-49d38520.mjs.map
