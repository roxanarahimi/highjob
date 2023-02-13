import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { withCtx, createVNode, useSSRContext } from 'file://F:/PROJECTS/2023/highjob/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'file://F:/PROJECTS/2023/highjob/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './b-209ba95c.mjs';
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
import './paths.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="row"><div class="col-12 mx-auto"><div class="card border-0 shadow-sm" style="${ssrRenderStyle({ "background-color": "whitesmoke" })}"><div class="card-body pb-4"><div class="form mt-3"><form action=""><h6 class="d-inline-block pb-2 mb-2">\u062C\u0633\u062A\u062C\u0648\u06CC \u067E\u06CC\u0634\u0631\u0641\u062A\u0647</h6><div class="row"><div class="col-6 mb-2"><input type="text" placeholder="\u0639\u0646\u0648\u0627\u0646" class="form-control form-control-sm"></div><div class="col-6 mb-2"><input type="text" placeholder="\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u062C\u0627\u062F" class="form-control form-control-sm"></div></div></form></div><div class="mt-3"><button class="btn btn-sm btn-outline-primary me-2 mb-2">\u06A9\u0627\u0631\u06CC\u0627\u0628\u06CC</button><button class="btn btn-sm btn-outline-primary me-2 mb-2">\u0645\u062A\u0641\u0631\u0642\u0647</button></div></div></div></div></div><div class="mt-4"><div class="mx-auto"><div class="card border-0" style="${ssrRenderStyle({ "height": "calc(100vh - 350px)", "overflow-y": "scroll", "direction": "ltr" })}"><div class="card-body pb-0" style="${ssrRenderStyle({ "direction": "rtl" })}"><div class="row"><!--[-->`);
  ssrRenderList(10, (item) => {
    _push(`<div class="col-sm-12 col-md-12 col-lg-12 mb-2">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/article",
      class: "p-0 m-0"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="card border-0 shadow-sm" style="${ssrRenderStyle({})}"${_scopeId}><div class="card-body"${_scopeId}><div class="row"${_scopeId}><div class="col-1"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="rounded img-fluid" alt=""${_scopeId}></div><div class="col-8"${_scopeId}><p class="fw-bold text-primary mt-3 mb-1"${_scopeId}>\u0637\u0631\u0627\u062D \u0633\u0627\u06CC\u062A</p><small class="fw-lighter mt-1 mb-2"${_scopeId}>\u06AF\u0631\u0648\u0647 \u062A\u062E\u0635\u0635\u06CC \u0645\u0634\u0627\u0648\u0631\u0627\u0646 \u0648\u0628</small></div></div></div></div>`);
        } else {
          return [
            createVNode("div", {
              class: "card border-0 shadow-sm",
              style: {}
            }, [
              createVNode("div", { class: "card-body" }, [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "col-1" }, [
                    createVNode("img", {
                      src: _imports_0,
                      class: "rounded img-fluid",
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "col-8" }, [
                    createVNode("p", { class: "fw-bold text-primary mt-3 mb-1" }, "\u0637\u0631\u0627\u062D \u0633\u0627\u06CC\u062A"),
                    createVNode("small", { class: "fw-lighter mt-1 mb-2" }, "\u06AF\u0631\u0648\u0647 \u062A\u062E\u0635\u0635\u06CC \u0645\u0634\u0627\u0648\u0631\u0627\u0646 \u0648\u0628")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const articles = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { articles as default };
//# sourceMappingURL=articles-113f2d5d.mjs.map
