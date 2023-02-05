import { mergeProps, useSSRContext } from 'file://F:/PROJECTS/2023/highjob/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle } from 'file://F:/PROJECTS/2023/highjob/node_modules/vue/server-renderer/index.mjs';
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row mt-4" }, _attrs))}><div class="col-lg-6 mx-auto" style="${ssrRenderStyle({ "margin-top": "150px" })}"><div class="card border-0 shadow"><div class="card-body pb-5"><h6 class="d-inline-block pb-2 mb-2">\u0648\u0631\u0648\u062F \u0628\u0647 \u0633\u0627\u06CC\u062A</h6><div class="row d-flex justify-content-start" style="${ssrRenderStyle({ "padding-right": "11px", "padding-left": "11px" })}"><div class="col-6"><button class="w-100 btn btn-sm btn-primary me-2 mb-2">\u06A9\u0627\u0631\u062C\u0648</button></div><div class="col-6"><button class="w-100 btn btn-sm btn-outline-primary me-2 mb-2">\u06A9\u0627\u0631\u0641\u0631\u0645\u0627</button></div></div><div class="d-flex justify-content-between"><input type="text" class="form-control form-control-sm mx-1 mb-3" placeholder="\u0645\u0648\u0628\u0627\u06CC\u0644"></div><small>\u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F \u0628\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644 \u0634\u0645\u0627 \u067E\u06CC\u0627\u0645\u06A9 \u0634\u062F. \u0644\u0637\u0641\u0627 \u0627\u0646\u0631\u0627 \u062F\u0631 \u0632\u06CC\u0631 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F</small><div class="d-flex justify-content-between mt-3"><input type="text" class="form-control form-control-sm mx-1 text-center"><input type="text" class="form-control form-control-sm mx-1 text-center"><input type="text" class="form-control form-control-sm mx-1 text-center"><input type="text" class="form-control form-control-sm mx-1 text-center"></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { login as default };
//# sourceMappingURL=login-507b8c63.mjs.map