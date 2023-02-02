<template>
  <div>

    <div class="row">
      <div class="col-12 mx-auto ">
        <div class="card border-0 shadow-sm" style="background-color: whitesmoke">
          <div class="card-body pb-4">

            <div class="form">
              <form action="">

                <h6 class="d-inline-block pb-2 mb-2">جستجوی پیشرفته</h6>
                <div class="row">
                  <div class="col-6 col-lg-3 mb-2">
                    <input type="text" placeholder="عنوان شغلی" class="form-control form-control-sm">
                  </div>
                  <div class="col-6 col-lg-3 mb-2">
                    <input type="text" placeholder="گروه شغلی" class="form-control form-control-sm">
                  </div>
                  <div class="col-6 col-lg-3 mb-2">
                    <input type="text" placeholder="شهر" class="form-control form-control-sm">
                  </div>
                  <div class="col-6 col-lg-3 mb-2">
                    <input type="text" placeholder="مرتب سازی" class="form-control form-control-sm">
                  </div>
                </div>
              </form>
            </div>

            <div class="mt-3">
              <button class="btn btn-sm btn-outline-primary me-2 mb-2">کارآموزی</button>
              <button class="btn btn-sm btn-outline-primary me-2 mb-2">دورکاری</button>
              <button class="btn btn-sm btn-outline-primary me-2 mb-2">تمام وقت</button>
              <button class="btn btn-sm btn-outline-primary me-2 mb-2">پاره وقت</button>
              <button class="btn btn-sm btn-outline-primary me-2 mb-2">پروژه ای</button>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4">

      <div class="col-12 mx-auto" >
        <div class="card border-0" style="height: calc(100vh - 300px); overflow-y: scroll; direction: ltr">
          <div class="card-body pb-5" style="direction: rtl">

            <div class="row">

              <div v-for="item in 10" class="col-sm-6 col-md-4 col-lg-3 mb-3">
                <div class="card border-0 shadow-sm" style="">
                  <div class="card-body">
                    <img src="http://localhost:3000/images/b.jpg" class="rounded img-fluid" alt="">
                    <p class="fw-bold text-primary mt-3 mb-1">طراح سایت</p>
                    <small class="fw-lighter mt-1 mb-2">گروه تخصصی مشاوران وب</small>
                    <div class="d-flex justify-content-between">
                      <small class="fw-lighter mt-1 mb-2">تهران</small>
                      <small class="fw-lighter mt-1 mb-3">دور کاری</small>
                    </div>
                    <!--                    <button class="btn btn-primary" style="float: left !important">ارسال رزومه</button>-->
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

<style scoped>
/*input{*/
/*  border: none;*/
/*}*/

</style>