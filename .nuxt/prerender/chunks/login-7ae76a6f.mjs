import axios from 'file://F:/PROJECTS/2023/highjob/node_modules/axios/index.js';
import { mergeProps, useSSRContext } from 'file://F:/PROJECTS/2023/highjob/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from 'file://F:/PROJECTS/2023/highjob/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main = {
  setup() {
    const selectScope = (id) => {
    };
    const getCode = () => {
      axios.post("http://127.0.0.1:8000/api/otp/mobile", { mobile: "09190691798", scope: "user" }, { progress: false }).then((res) => {
        if (res.status === 200) {
          document.getElementById("mobileForm").classList.add("d-none");
          document.getElementById("codeForm").classList.remove("d-none");
        }
      }).catch((err) => {
        console.log(err);
      });
    };
    const autoTab = (e) => {
      var _a;
      let code = document.getElementById("code1").value + document.getElementById("code2").value + document.getElementById("code3").value + document.getElementById("code4").value;
      if (code.length == 4) {
        axios.post("http://127.0.0.1:8000/api/mobile/login", {
          mobile: "09190691798",
          scope: "user",
          password: document.getElementById("code1").value + document.getElementById("code2").value + document.getElementById("code3").value + document.getElementById("code4").value
        }, { progress: false }).then((res) => {
          if (res.status === 200) {
            window.location = "/";
          }
        }).catch((err) => {
          console.log(err);
        });
      }
      if (e.target.value.length === e.target.maxLength) {
        (_a = e.target.nextElementSibling) == null ? void 0 : _a.focus();
      }
    };
    return {
      autoTab,
      selectScope,
      getCode
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row mt-4" }, _attrs))}><div class="col-lg-6 mx-auto" style="${ssrRenderStyle({ "margin-top": "150px" })}"><div class="card border-0 shadow"><div class="card-body pb-5"><h6 class="d-inline-block pb-2 mb-2">\u0648\u0631\u0648\u062F \u0628\u0647 \u0633\u0627\u06CC\u062A</h6><div id="mobileForm"><div class="row d-flex justify-content-start" style="${ssrRenderStyle({ "padding-right": "11px", "padding-left": "11px" })}"><div class="col-6"><button id="joo" class="w-100 btn btn-sm btn-primary me-2 mb-2">\u06A9\u0627\u0631\u062C\u0648 </button></div><div class="col-6"><button id="farma" class="w-100 btn btn-sm btn-outline-primary me-2 mb-2"> \u06A9\u0627\u0631\u0641\u0631\u0645\u0627 </button></div></div><div class="input-group mt-2 mb-3 px-1"><input type="text" class="form-control form-control-sm" minlength="11" maxlength="11" placeholder="\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644" aria-label="Recipient&#39;s username" aria-describedby="button-addon2"><button class="btn btn-sm btn-outline-primary" type="button" id="button-addon2">\u062F\u0631\u06CC\u0627\u0641\u062A \u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F </button></div><small>${ssrInterpolate(_ctx.message)}</small></div><div id="codeForm" class="d-none"><small>\u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F \u0628\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644 \u0634\u0645\u0627 \u067E\u06CC\u0627\u0645\u06A9 \u0634\u062F. \u0644\u0637\u0641\u0627 \u0622\u0646\u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F</small><div class="d-flex justify-content-between mt-3" dir="ltr"><input type="text" id="code1" class="form-control form-control-sm mx-1 text-center" minlength="1" maxlength="1"><input type="text" id="code2" class="form-control form-control-sm mx-1 text-center" minlength="1" maxlength="1"><input type="text" id="code3" class="form-control form-control-sm mx-1 text-center" minlength="1" maxlength="1"><input type="text" id="code4" class="form-control form-control-sm mx-1 text-center" minlength="1" maxlength="1"></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { login as default };
//# sourceMappingURL=login-7ae76a6f.mjs.map
