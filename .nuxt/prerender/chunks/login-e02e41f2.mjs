import axios from 'file://F:/PROJECTS/2023/highjob/node_modules/axios/index.js';
import { ref, mergeProps, useSSRContext } from 'file://F:/PROJECTS/2023/highjob/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'file://F:/PROJECTS/2023/highjob/node_modules/vue/server-renderer/index.mjs';
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
    const scope = ref("user");
    const message = ref([]);
    const mobile = ref();
    const time = ref(59);
    const selectScope = (id) => {
      scope.value = id;
      if (id == "user") {
        document.getElementById("user").classList.add("btn-primary");
        document.getElementById("user").classList.remove("btn-outline-primary");
        document.getElementById("company").classList.remove("btn-primary");
        document.getElementById("company").classList.add("btn-outline-primary");
      } else if (id == "company") {
        document.getElementById("user").classList.remove("btn-primary");
        document.getElementById("user").classList.add("btn-outline-primary");
        document.getElementById("company").classList.add("btn-primary");
        document.getElementById("company").classList.remove("btn-outline-primary");
      }
    };
    const getCode = () => {
      message.value = [];
      mobile.value = document.getElementById("mobile").value;
      if (mobile.value.length < 11) {
        message.value.push("\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644 \u0628\u0627\u06CC\u062F 11 \u0631\u0642\u0645 \u0628\u0627\u0634\u062F");
      }
      if (!mobile.value.startsWith("09")) {
        message.value.push("\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644 \u0628\u0627\u06CC\u062F \u0628\u0627 09 \u0634\u0631\u0648\u0639 \u0634\u0648\u062F");
      }
      if (mobile.value.length === 11 && mobile.value.startsWith("09"))
        message.value = [];
      axios.post("http://127.0.0.1:8000/api/otp/mobile", {
        mobile: document.getElementById("mobile").value,
        scope: scope.value
      }, { progress: false }).then((res) => {
        if (res.status === 200) {
          document.getElementById("mobileForm").classList.add("d-none");
          document.getElementById("codeForm").classList.remove("d-none");
        } else {
          console.log(res);
        }
      }).then(() => {
        document.getElementById("resend").setAttribute("disabled", "disabled");
        counter();
        setTimeout(() => {
          document.getElementById("resend").removeAttribute("disabled");
        }, 6e4);
      }).catch((err) => {
        message.value = err.response.data.message;
      });
    };
    const editno = () => {
      document.getElementById("mobileForm").classList.remove("d-none");
      document.getElementById("codeForm").classList.add("d-none");
    };
    const resend = () => {
      getCode();
    };
    const counter = () => {
      var distance = 59;
      var x = null;
      clearInterval(x);
      time.value = 0;
      x = setInterval(function() {
        distance--;
        time.value = distance;
        var t = time.value < 10 ? "0" : "";
        document.getElementById("time").innerHTML = t + time.value;
        if (distance < 1) {
          clearInterval(x);
        }
      }, 1e3);
      time.value = 0;
    };
    const autoTab = (e) => {
      var _a;
      let code = document.getElementById("code1").value + document.getElementById("code2").value + document.getElementById("code3").value + document.getElementById("code4").value;
      if (code.length == 4) {
        axios.post("http://127.0.0.1:8000/api/mobile/login", {
          mobile: document.getElementById("mobile").value,
          scope: scope.value,
          password: document.getElementById("code1").value + document.getElementById("code2").value + document.getElementById("code3").value + document.getElementById("code4").value
        }, { progress: false }).then((res) => {
          if (res.status === 200) {
            localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem("token", JSON.stringify(res.data.access_token));
            localStorage.setItem("scope", JSON.stringify(res.data.scope));
            localStorage.setItem("expire", JSON.stringify(res.data.expire));
            console.log(localStorage);
            window.location = "/";
          } else {
            console.log(res);
          }
        }).catch((err) => {
          message.value = err.response.data.message;
        });
      }
      if (e.target.value.length === e.target.maxLength) {
        (_a = e.target.nextElementSibling) == null ? void 0 : _a.focus();
      }
    };
    return {
      autoTab,
      selectScope,
      getCode,
      scope,
      message,
      mobile,
      counter,
      time,
      resend,
      editno
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row mt-4" }, _attrs))}><div class="col-lg-6 mx-auto" style="${ssrRenderStyle({ "margin-top": "150px" })}"><div class="card border-0 shadow"><div class="card-body pb-5"><h6 class="d-inline-block pb-2 mb-2">\u0648\u0631\u0648\u062F \u0628\u0647 \u0633\u0627\u06CC\u062A</h6><div id="mobileForm"><div class="row d-flex justify-content-start" style="${ssrRenderStyle({ "padding-right": "11px", "padding-left": "11px" })}"><div class="col-6"><button id="user" class="w-100 btn btn-sm btn-primary me-2 mb-2">\u06A9\u0627\u0631\u062C\u0648 </button></div><div class="col-6"><button id="company" class="w-100 btn btn-sm btn-outline-primary me-2 mb-2"> \u06A9\u0627\u0631\u0641\u0631\u0645\u0627 </button></div></div><div class="input-group mt-2 mb-3 px-1"><input type="text" class="form-control form-control-sm" minlength="11" maxlength="11" id="mobile" placeholder="\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644" aria-label="Recipient&#39;s username" aria-describedby="button-addon2"><button class="btn btn-sm btn-outline-primary" type="button" id="button-addon2">\u062F\u0631\u06CC\u0627\u0641\u062A \u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F </button></div><!--[-->`);
  ssrRenderList($setup.message, (item) => {
    _push(`<li><small>${ssrInterpolate(item)}</small></li>`);
  });
  _push(`<!--]--></div><div id="codeForm" class="d-none"><small>\u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F \u0628\u0647 \u0634\u0645\u0627\u0631\u0647 <span class="fw-bold text-primary">${ssrInterpolate($setup.mobile)}</span> \u067E\u06CC\u0627\u0645\u06A9 \u0634\u062F. \u0644\u0637\u0641\u0627 \u0622\u0646\u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F</small><div class="d-flex justify-content-between mt-3" dir="ltr"><input type="text" id="code1" class="form-control form-control-sm mx-1 text-center" minlength="1" maxlength="1"><input type="text" id="code2" class="form-control form-control-sm mx-1 text-center" minlength="1" maxlength="1"><input type="text" id="code3" class="form-control form-control-sm mx-1 text-center" minlength="1" maxlength="1"><input type="text" id="code4" class="form-control form-control-sm mx-1 text-center" minlength="1" maxlength="1"></div><div class="row mt-3" style="${ssrRenderStyle({ "padding-right": "11px", "padding-left": "11px" })}"><div class="col-6"><button id="editNumber" class="w-100 btn btn-sm btn-outline-primary me-2 mb-2">\u062A\u0635\u062D\u06CC\u062D \u0634\u0645\u0627\u0631\u0647 </button></div><div class="col-6"><button disabled id="resend" class="w-100 btn btn-sm btn-outline-primary me-2 mb-2"> \u0627\u0631\u0633\u0627\u0644 \u0645\u062C\u062F\u062F \u06A9\u062F <span id="time">${ssrInterpolate($setup.time)}</span></button></div></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { login as default };
//# sourceMappingURL=login-e02e41f2.mjs.map
