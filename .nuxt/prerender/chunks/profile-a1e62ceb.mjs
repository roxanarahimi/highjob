import { mergeProps, useSSRContext } from 'file://F:/PROJECTS/2023/highjob/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from 'file://F:/PROJECTS/2023/highjob/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './b-209ba95c.mjs';
import { _ as _export_sfc } from './server.mjs';
import './paths.mjs';
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row mt-4" }, _attrs))}><div class="col-12 mx-auto mb-1 py-3 px-4" style="${ssrRenderStyle({ "height": "calc(100vh - 180px)", "overflow-y": "scroll", "direction": "ltr", "overflow-x": "hidden" })}"><div class="card border-0 shadow-sm" style="${ssrRenderStyle({ "direction": "rtl" })}"><div class="card-body pb-5"><div><div class="row"><div class="col-lg-8 mx-auto"><h6 class="fw-bold">\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0627\u0648\u067E\u0631\u0627\u062A\u0648\u0631</h6><div class="row"><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.name)} class="form-control form-control-sm" placeholder="\u0646\u0627\u0645"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.last_name)} class="form-control form-control-sm" placeholder="\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.mobile)} class="form-control form-control-sm" placeholder="\u0645\u0648\u0628\u0627\u06CC\u0644"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.email)} class="form-control form-control-sm" placeholder="\u0627\u06CC\u0645\u06CC\u0644"></div><h6 class="fw-bold mt-5">\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0634\u0631\u06A9\u062A</h6><div class="mb-1"><img${ssrRenderAttr("src", _imports_0)} class="border rounded" height="80"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.company.title)} class="form-control form-control-sm" placeholder="\u0646\u0627\u0645 \u0634\u0631\u06A9\u062A"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.company.id_number)} class="form-control form-control-sm" placeholder="\u0634\u0645\u0627\u0631\u0647 \u062B\u0628\u062A"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.company.manager)} class="form-control form-control-sm" placeholder="\u0646\u0627\u0645 \u0645\u062F\u06CC\u0631"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.company.manager_mobile)} class="form-control form-control-sm" placeholder="\u0645\u0648\u0628\u0627\u06CC\u0644 \u0645\u062F\u06CC\u0631"></div><div class="col-sm-6 mb-1"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.company.email)} class="form-control form-control-sm" placeholder="\u0627\u06CC\u0645\u06CC\u0644"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.company.address)} class="form-control form-control-sm" placeholder="\u0627\u062F\u0631\u0633"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.company.city.state)} class="form-control form-control-sm" placeholder="\u0627\u0633\u062A\u0627\u0646"></div><div class="col-sm-6 mb-1"><input type="text"${ssrRenderAttr("value", $data.user.company.city)} class="form-control form-control-sm" placeholder="\u0634\u0647\u0631"></div></div><h6 class="d-inline-block pb-2 mb-2">\u062F\u0631\u0628\u0627\u0631\u0647 \u0634\u0631\u06A9\u062A</h6><div class="row"><div class="col-sm-12"><textarea class="form-control mb-1" rows="6"></textarea></div></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { profile as default };
//# sourceMappingURL=profile-a1e62ceb.mjs.map
