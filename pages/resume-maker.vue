<template>

  <div class="row mt-4 ">
    <div class="d-flex  mb-1">
<!--      <h6 class="d-inline-block pb-2 ">فرم رزومه</h6>-->

      <NuxtLink to="/resume" class="btn btn-primary btn-sm">پیش نمایش</NuxtLink>
    </div>
    <div class="col-12 mx-auto mb-1 py-3 px-4" style="height: calc(100vh - 180px); overflow-y: scroll; direction: ltr; overflow-x: hidden">
      <div class="card border-0 shadow-sm" style="direction: rtl">
        <div class="card-body pb-5">
          <div >

            <div class="row">

              <div class="col-lg-8 mx-auto">



                  <div class=" mb-1">

                    <img src="../public/images/avatar.png" class="border rounded" height="80">
                  </div>
                <div class="row">

                  <div class="col-sm-6 mb-1">
                    <input type="text" name="" class="form-control form-control-sm" placeholder="نام">
                  </div>
                  <div class="col-sm-6 mb-1">
                    <input type="text" name="" class="form-control form-control-sm" placeholder="نام خانوادگی">
                  </div>


                  <div class="col-sm-6 mb-1 ">
                    <input type="text" name="" class="form-control form-control-sm" placeholder="جنسیت">
                  </div>
                  <div class="col-sm-6 mb-1">
                  <input type="text" name="" class="form-control form-control-sm" placeholder="سال تولد">
                </div>
                    <div class="col-sm-6 mb-1 ">
                    <input type="text" name="" class="form-control form-control-sm" placeholder="سربازی">
                  </div>
                    <div class="col-sm-6 mb-1 ">
                    <input type="text" name="" class="form-control form-control-sm" placeholder="تاهل">
                  </div>



                  <div class="col-sm-6 mb-1">
                    <input type="text" name="" class="form-control form-control-sm" placeholder="موبایل">
                  </div>
                  <div class="col-sm-6 mb-1">
                    <input type="text" name="" class="form-control form-control-sm" placeholder="ایمیل">
                  </div>
                  <div class="col-sm-6 mb-1 ">
                    <input type="text" name="" class="form-control form-control-sm" placeholder="عنوان شغلی">
                  </div>
                  <div class="col-sm-6 mb-1 ">
                    <input type="text" name="" class="form-control form-control-sm" placeholder="حقوق درخواستی">
                  </div>


                  <div class="col-sm-6 mb-1">
                    <input type="text" name="" class="form-control form-control-sm" placeholder="استان">
                  </div>
                  <div class="col-sm-6 mb-1">
                    <input type="text" name="" class="form-control form-control-sm" placeholder="شهر">
                  </div>

                </div>
                <h6 class="d-inline-block pb-2 mb-2">درباره من</h6>
                <div class="row">
                  <div class="col-sm-12">
                    <textarea class="form-control mb-1" rows="6"></textarea>
                  </div>
                </div>
                <h6 class="d-inline-block pb-2 mb-2">تحصیلات <span class="cursor-pointer px-2 fw-bolder text-primary"
                                                                style="font-size: 25px" title="افزودن">+</span> </h6>
                <div class="accordion rounded mb-1 border accordion-flush" id="accordionFlushExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne" aria-expanded="false"
                              aria-controls="flush-collapseOne">
                        رشته
                      </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                         data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">
                        <div class="row  rounded mx-1 p-3">
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="مکان">
                          </div>
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="رشته">
                          </div>

                          <div class="col-sm-3 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="شروع">
                          </div>
                          <div class="col-sm-3 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="پایان">
                          </div>
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="شهر">
                          </div>

                          <div class="col-sm-12 mb-1">
                            <textarea class="form-control mb-1" rows="4"></textarea>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <h6 class="d-inline-block pb-2 mb-2">مهارت ها<span class="cursor-pointer px-2 fw-bolder text-primary"
                                                                style="font-size: 25px" title="افزودن">+</span> </h6>
                <div class="accordion rounded mb-1 border accordion-flush" id="accordionFlushExample1">
                  <div class="accordion-item ">
                    <h2 class="accordion-header" id="flush-heading1">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse1" aria-expanded="false"
                              aria-controls="flush-collapse1">
                        مهارت
                      </button>
                    </h2>
                    <div id="flush-collapse1" class="accordion-collapse collapse" aria-labelledby="flush-heading1"
                         data-bs-parent="#accordionFlushExample1">
                      <div class="accordion-body">

                        <div class="row  rounded mx-1 p-3">
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="عنوان">
                          </div>
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="سطح">
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="accordion-item ">
                    <h2 class="accordion-header" id="flush-heading2">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse2" aria-expanded="false"
                              aria-controls="flush-collapse2">
                        مهارت
                      </button>
                    </h2>
                    <div id="flush-collapse2" class="accordion-collapse collapse" aria-labelledby="flush-heading2"
                         data-bs-parent="#accordionFlushExample1">
                      <div class="accordion-body">

                        <div class="row  rounded mx-1 p-3">
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="عنوان">
                          </div>
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="سطح">
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="accordion-item ">
                    <h2 class="accordion-header" id="flush-heading3">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse3" aria-expanded="false"
                              aria-controls="flush-collapse3">
                        مهارت
                      </button>
                    </h2>
                    <div id="flush-collapse3" class="accordion-collapse collapse" aria-labelledby="flush-heading3"
                         data-bs-parent="#accordionFlushExample1">
                      <div class="accordion-body">

                        <div class="row  rounded mx-1 p-3">
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="عنوان">
                          </div>
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="سطح">
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>


                <h6 class="d-inline-block pb-2 mb-2">سابقه کار<span class="cursor-pointer px-2 fw-bolder text-primary"
                                                                 style="font-size: 25px" title="افزودن">+</span> </h6>
                <div class="accordion rounded mb-1 border accordion-flush" id="accordionFlushExample2">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne2">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne2" aria-expanded="false"
                              aria-controls="flush-collapseOne1">
                        عنوان شغلی
                      </button>
                    </h2>
                    <div id="flush-collapseOne2" class="accordion-collapse collapse" aria-labelledby="flush-headingOne2"
                         data-bs-parent="#accordionFlushExample2">
                      <div class="accordion-body">

                        <div class="row  rounded mx-1 p-3">
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="شرکت">
                          </div>
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="عنوان شغلی">
                          </div>

                          <div class="col-sm-3 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="شروع">
                          </div>
                          <div class="col-sm-3 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="پایان">
                          </div>
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="شهر">
                          </div>
                          <div class="col-sm-12 mb-1">
                            <textarea class="form-control mb-1" rows="4"></textarea>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>


                <h6 class="d-inline-block pb-2 mb-2">زبان ها<span class="cursor-pointer px-2 fw-bolder text-primary"
                                                               style="font-size: 25px" title="افزودن">+</span> </h6>
                <div class="accordion rounded mb-1 border accordion-flush" id="accordionFlushExample3">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingLang1">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseLang1" aria-expanded="false"
                              aria-controls="flush-collapseLang1">
                        عنوان
                      </button>
                    </h2>
                    <div id="flush-collapseLang1" class="accordion-collapse collapse" aria-labelledby="flush-headingLang1"
                         data-bs-parent="#accordionFlushExample3">
                      <div class="accordion-body">

                        <div class="row  rounded mx-1 p-3">
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="عنوان">
                          </div>
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="سطح">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingLang2">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseLang2" aria-expanded="false"
                              aria-controls="flush-collapseLang2">
                        عنوان
                      </button>
                    </h2>
                    <div id="flush-collapseLang2" class="accordion-collapse collapse" aria-labelledby="flush-headingLang2"
                         data-bs-parent="#accordionFlushExample3">
                      <div class="accordion-body">

                        <div class="row  rounded mx-1 p-3">
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="عنوان">
                          </div>
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="سطح">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <h6 class="d-inline-block pb-2 mb-2">لینک ها<span class="cursor-pointer px-2 fw-bolder text-primary"
                                                               style="font-size: 25px" title="افزودن">+</span> </h6>
                <div class="accordion rounded mb-1 border accordion-flush" id="accordionFlushExample4">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne4">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne4" aria-expanded="false"
                              aria-controls="flush-collapseOne1">
                        عنوان
                      </button>
                    </h2>
                    <div id="flush-collapseOne4" class="accordion-collapse collapse" aria-labelledby="flush-headingOne2"
                         data-bs-parent="#accordionFlushExample4">
                      <div class="accordion-body">

                        <div class="row  rounded mx-1 p-3">
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="عنوان">
                          </div>
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="آدرس">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <h6 class="d-inline-block pb-2 mb-2">سرگرمی ها</h6>

                <div class="row">
                  <div class="col-sm-12">
                    <textarea class="form-control mb-1" rows="4"></textarea>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>

</script>

<style>
.cursor-pointer {
  cursor: pointer;
}

input:focus {
  outline: transparent !important;
}

.frame {
  background-color: whitesmoke;
}

.accordion-button:not(.collapsed) {

  color: black;
  background-color: white;
  /*background-color: #ff6262;*/
  /*background-color: rgba(255, 98, 98, 0.3);*/
  /*color: white;*/
  box-shadow: none;
}


</style
>