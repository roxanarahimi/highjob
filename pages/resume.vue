<template>

  <div class="row mt-4">

    <div class="col-12 mx-auto mb-3">
      <div class="card border-0 shadow">
        <div class="card-body pb-5">
          <h6 class="d-inline-block pb-2 mb-2">فرم رزومه</h6>

          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="row">
                <div class="col-sm-6 mb-3">

                  <img src="http://localhost:3000/images/b.jpg" class="border rounded" height="80">
                </div>
                <div class="col-sm-6 mb-3" style="padding-top: 50px  ">
                  <input type="text" name="" class="form-control form-control-sm" placeholder="عنوان شغلی">
                </div>
              </div>
              <div class="row">

                <div class="col-sm-6 mb-3">
                  <input type="text" name="" class="form-control form-control-sm" placeholder="نام">
                </div>
                <div class="col-sm-6 mb-3">
                  <input type="text" name="" class="form-control form-control-sm" placeholder="نام خانوادگی">
                </div>

                <div class="col-sm-6 mb-3">
                  <input type="text" name="" class="form-control form-control-sm" placeholder="موبایل">
                </div>
                <div class="col-sm-6 mb-3">
                  <input type="text" name="" class="form-control form-control-sm" placeholder="ایمیل">
                </div>

                <div class="col-sm-6 mb-3">
                  <input type="text" name="" class="form-control form-control-sm" placeholder="سال تولد">
                </div>
                <div class="col-sm-6 mb-3">
                  <input type="text" name="" class="form-control form-control-sm" placeholder="شهر">
                </div>

              </div>
              <h6 class="d-inline-block pb-2 mb-2">درباره من</h6>
              <div class="row">
                <div class="col-sm-12">
                  <textarea class="form-control mb-3" rows="6"></textarea>
                </div>
              </div>
              <h6 class="d-inline-block pb-2 mb-2">تحصیلات <i class="cursor-pointer px-2 fw-bolder" style="font-size: 25px" title="افزودن">+</i></h6>
              <div class="accordion rounded mb-3 border bg-light accordion-flush" id="accordionFlushExample">
                <div class="accordion-item bg-light">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      رشته
                     </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <div class="row  rounded mx-1 p-3">
                        <div class="col-sm-6 mb-3">
                          <input type="text" name="" class="form-control form-control-sm" placeholder="مکان">
                        </div>
                        <div class="col-sm-6 mb-3">
                          <input type="text" name="" class="form-control form-control-sm" placeholder="رشته">
                        </div>

                        <div class="col-sm-3 mb-3">
                          <input type="text" name="" class="form-control form-control-sm" placeholder="شروع">
                        </div>
                        <div class="col-sm-3 mb-3">
                          <input type="text" name="" class="form-control form-control-sm" placeholder="پایان">
                        </div>
                        <div class="col-sm-6 mb-3">
                          <input type="text" name="" class="form-control form-control-sm" placeholder="شهر">
                        </div>

                        <div class="col-sm-12 mb-3">
                          <textarea class="form-control mb-3" rows="4"></textarea>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <h6 class="d-inline-block pb-2 mb-2">مهارت ها<i class="cursor-pointer px-2 fw-bolder" style="font-size: 25px" title="افزودن">+</i></h6>
              <div class="accordion rounded mb-3 border bg-light accordion-flush" id="accordionFlushExample1">
                <div class="accordion-item bg-light">
                  <h2 class="accordion-header" id="flush-headingOne1">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne1">
                      مهارت
                    </button>
                  </h2>
                  <div id="flush-collapseOne1" class="accordion-collapse collapse" aria-labelledby="flush-headingOne1" data-bs-parent="#accordionFlushExample1">
                    <div class="accordion-body">

                      <div class="row  rounded mx-1 p-3">
                        <div class="col-sm-6 mb-3">
                          <input type="text" name="" class="form-control form-control-sm" placeholder="عنوان">
                        </div>
                        <div class="col-sm-6 mb-3">
                          <input type="text" name="" class="form-control form-control-sm" placeholder="سطح">
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>


              <h6 class="d-inline-block pb-2 mb-2">سابقه کار<i class="cursor-pointer px-2 fw-bolder" style="font-size: 25px" title="افزودن">+</i></h6>
              <div class="accordion rounded mb-3 border bg-light accordion-flush" id="accordionFlushExample2">
                <div class="accordion-item bg-light">
                  <h2 class="accordion-header" id="flush-headingOne2">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne1">
                      عنوان شغلی
                    </button>
                  </h2>
                  <div id="flush-collapseOne2" class="accordion-collapse collapse" aria-labelledby="flush-headingOne2" data-bs-parent="#accordionFlushExample2">
                    <div class="accordion-body">

                      <div class="row  rounded mx-1 p-3">
                        <div class="col-sm-6 mb-3">
                          <input type="text" name="" class="form-control form-control-sm" placeholder="شرکت">
                        </div>
                        <div class="col-sm-6 mb-3">
                          <input type="text" name="" class="form-control form-control-sm" placeholder="عنوان شغلی">
                        </div>

                        <div class="col-sm-3 mb-3">
                          <input type="text" name="" class="form-control form-control-sm" placeholder="شروع">
                        </div>
                        <div class="col-sm-3 mb-3">
                          <input type="text" name="" class="form-control form-control-sm" placeholder="پایان">
                        </div>
                        <div class="col-sm-6 mb-3">
                          <input type="text" name="" class="form-control form-control-sm" placeholder="شهر">
                        </div>
                        <div class="col-sm-12 mb-3">
                          <textarea class="form-control mb-3" rows="4"></textarea>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>


              <h6 class="d-inline-block pb-2 mb-2">زبان ها<i class="cursor-pointer px-2 fw-bolder" style="font-size: 25px" title="افزودن">+</i></h6>
              <div class="accordion rounded mb-3 border bg-light accordion-flush" id="accordionFlushExample3">
                <div class="accordion-item bg-light">
                  <h2 class="accordion-header" id="flush-headingOne3">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne3" aria-expanded="false" aria-controls="flush-collapseOne1">
                      عنوان
                    </button>
                  </h2>
                  <div id="flush-collapseOne3" class="accordion-collapse collapse" aria-labelledby="flush-headingOne3" data-bs-parent="#accordionFlushExample3">
                    <div class="accordion-body">

                      <div class="row  rounded mx-1 p-3">
                        <div class="col-sm-6 mb-3">
                          <input type="text" name="" class="form-control form-control-sm" placeholder="عنوان">
                        </div>
                        <div class="col-sm-6 mb-3">
                          <input type="text" name="" class="form-control form-control-sm" placeholder="سطح">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <h6 class="d-inline-block pb-2 mb-2">لینک ها<i class="cursor-pointer px-2 fw-bolder" style="font-size: 25px" title="افزودن">+</i></h6>
              <div class="accordion rounded mb-3 border bg-light accordion-flush" id="accordionFlushExample4">
                <div class="accordion-item bg-light">
                  <h2 class="accordion-header" id="flush-headingOne4">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne4" aria-expanded="false" aria-controls="flush-collapseOne1">
                      عنوان
                    </button>
                  </h2>
                  <div id="flush-collapseOne4" class="accordion-collapse collapse" aria-labelledby="flush-headingOne2" data-bs-parent="#accordionFlushExample4">
                    <div class="accordion-body">

                      <div class="row  rounded mx-1 p-3">
                        <h6 class="d-inline-block pb-2 mb-2">عنوان </h6>

                        <div class="col-sm-6 mb-3">
                          <input type="text" name="" class="form-control form-control-sm" placeholder="عنوان">
                        </div>
                        <div class="col-sm-6 mb-3">
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
                  <textarea class="form-control mb-3" rows="4"></textarea>
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

<style scoped>
.cursor-pointer{
  cursor: pointer;
}

input:focus{
  outline: transparent !important;
}
.frame{
  background-color: whitesmoke;
}

</style
>