import { b as buildAssetsURL } from './paths.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from 'file://F:/PROJECTS/2023/highjob/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file://F:/PROJECTS/2023/highjob/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/ufo/dist/index.mjs';
import './config.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/destr/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/scule/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/ofetch/dist/node.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/hookable/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/unctx/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/h3/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/@unhead/vue/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/@unhead/dom/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://F:/PROJECTS/2023/highjob/node_modules/defu/dist/defu.mjs';

const _imports_0 = "" + buildAssetsURL("a.35e3ec44.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="row flex-row-reverse"><div class="col-lg-6 txt"><h1 style="${ssrRenderStyle({ "font-size": "100px", "text-align": "left !important" })}">\u0634\u063A\u0644</h1><h3 style="${ssrRenderStyle({ "font-size": "60px", "text-align": "left !important" })}">\u0631\u0648\u06CC\u0627\u0647\u0627\u062A\u0648 </h3><h5 style="${ssrRenderStyle({ "font-size": "35px", "text-align": "left !important" })}">\u0627\u06CC\u0646\u062C\u0627 \u067E\u06CC\u062F\u0627 \u06A9\u0646 </h5></div><div class="col-lg-6"><img class="ss"${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "max-width": "400px" })}" alt=""></div></div><div class="row"><div class="col-12 mx-auto"><div class="card border-0 shadow"><div class="card-body pb-5"><div class="form"><form action=""><h5 class="d-inline-block pb-2 mb-3">\u062C\u0633\u062A\u062C\u0648 \u06A9\u0646\u06CC\u062F</h5><div class="row"><div class="col-12 col-md-10"><div class="row"><div class="col-md-4 mb-3"><input type="text" placeholder="\u0639\u0646\u0648\u0627\u0646 \u0634\u063A\u0644\u06CC" class="form-control"></div><div class="col-md-4 mb-3"><input type="text" placeholder="\u06AF\u0631\u0648\u0647 \u0634\u063A\u0644\u06CC" class="form-control"></div><div class="col-md-4 mb-3"><input type="text" placeholder="\u0634\u0647\u0631" class="form-control"></div></div></div><div class="col-12 col-md-2"><button class="btn btn-block btn-primary w-100">\u0628\u0631\u0648</button></div></div></form></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-cfd13618.mjs.map
