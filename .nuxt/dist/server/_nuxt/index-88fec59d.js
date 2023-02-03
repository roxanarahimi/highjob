import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const img1 = "../dist/public/images/a.png";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="row flex-row-reverse"><div class="col-lg-6 txt"><h1 style="${ssrRenderStyle({ "font-size": "100px", "text-align": "left !important" })}">شغل</h1><h3 style="${ssrRenderStyle({ "font-size": "60px", "text-align": "left !important" })}">رویاهاتو </h3><h5 style="${ssrRenderStyle({ "font-size": "40px", "text-align": "left !important" })}">اینجا پیدا کن </h5></div><div class="col-lg-6"><img class="ss"${ssrRenderAttr("src", img1)} style="${ssrRenderStyle({ "max-width": "400px" })}" alt=""></div></div><div class="row"><div class="col-12 mx-auto"><div class="card border-0 shadow"><div class="card-body pb-5"><div class="form"><form action=""><h5 class="d-inline-block pb-2 mb-3">جستجو کنید</h5><div class="row"><div class="col-lg-10 col-lg-11"><div class="row"><div class="col-xxl-4 mb-3"><input type="text" placeholder="عنوان شغلی" class="form-control"></div><div class="col-xxl-4 mb-3"><input type="text" placeholder="گروه شغلی" class="form-control"></div><div class="col-xxl-4 mb-3"><input type="text" placeholder="شهر" class="form-control"></div></div></div><div class="col-2 col-lg-1"><button class="btn btn-primary">برو</button></div></div></form></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-88fec59d.js.map
