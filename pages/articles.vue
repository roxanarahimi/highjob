<template>
  <div>

    <div class="row">
      <div class="col-12 mx-auto ">
        <div class="card border-0 shadow-sm" style="background-color: whitesmoke">
          <div class="card-body pb-4">

            <div class="form mt-3">
              <form action="">

                <h6 class="d-inline-block pb-2 mb-2">جستجوی پیشرفته</h6>
                <div class="row">
                  <div class="col-6 mb-2">
                    <input type="text" placeholder="عنوان" class="form-control form-control-sm">
                  </div>
                  <div class="col-6 mb-2">
                    <input type="text" placeholder="تاریخ ایجاد" class="form-control form-control-sm">
                  </div>
                </div>
              </form>
            </div>

            <div class="mt-3">
              <button class="btn btn-sm btn-outline-primary me-2 mb-2">کاریابی</button>
              <button class="btn btn-sm btn-outline-primary me-2 mb-2">متفرقه</button>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <div class=" mx-auto" >
        <div class="card border-0" style="height: calc(100vh - 350px); overflow-y: scroll; direction: ltr">
          <div class="card-body pb-0" style="direction: rtl">

            <div class="row">

              <div v-for="item in 10" class="col-sm-12 col-md-12 col-lg-12 mb-2">
                <nuxt-link to="/article" class="p-0 m-0">
                  <div class="card border-0 shadow-sm" style="">
                    <div class="card-body">
                      <div class="row">

                        <div class="col-1">
                          <img src="../public/images/b.jpg" class="rounded img-fluid" alt="">
                        </div>
                        <div class="col-8">
                          <p class="fw-bold text-primary mt-3 mb-1">طراح سایت</p>
                          <small class="fw-lighter mt-1 mb-2">گروه تخصصی مشاوران وب</small>
                        </div>
                      </div>
                      <!--                    <button class="btn btn-primary" style="float: left !important">ارسال رزومه</button>-->
                    </div>
                  </div>

                </nuxt-link>
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
/*input{*/
/*  border: none;*/
/*}*/

</style>