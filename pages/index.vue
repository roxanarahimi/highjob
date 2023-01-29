<template>
  <div>
    <div class="row flex-row-reverse">
      <div class="col-lg-6 txt" >
        <h1 style="font-size: 100px;text-align: left !important">شغل</h1>
        <h3 style="font-size: 60px;text-align: left !important">رویاهاتو </h3>
        <h5 style="font-size: 40px;text-align: left !important">اینجا پیدا کن </h5>
      </div>
      <div class="col-lg-6">
        <img class="ss" src="http://localhost:3000/images/a.png" style="max-width: 400px" alt="">
      </div>
    </div>

    <div class="row">
      <div class="col-12 mx-auto ">
        <div class="card border-0 shadow">
          <div class="card-body pb-5">

            <div class="form">
              <form action="">

                <h5 class="d-inline-block  pb-2 mb-3">جستجو کنید</h5>
                <div class="row">
                  <div class="col-lg-10 col-lg-11">
                 <div class="row">
                   <div class="col-xxl-4 mb-3">
                     <input type="text" placeholder="عنوان شغلی" class="form-control">
                   </div>
                   <div class="col-xxl-4 mb-3">
                     <input type="text" placeholder="گروه شغلی" class="form-control">
                   </div>
                   <div class="col-xxl-4 mb-3">
                     <input type="text" placeholder="شهر" class="form-control">
                   </div>
                 </div>
               </div>
                  <div class="col-2 col-lg-1">
                    <button class="btn btn-primary">برو</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4 d-none">

      <div class="col-12 mx-auto">
        <div class="card border-0 shadow">
          <div class="card-body pb-5">

            <div class="row">

              <div v-for="item in 10" class="col-sm-6 col-md-4 col-lg-3 mb-3">
                <div class="card" style="">
                  <div class="card-body">
<!--                    <img src="/images/b.jpg" class="rounded img-fluid" alt="">-->
                    <p class="fw-bold text-primary mt-3 mb-1">طراح سایت</p>
                    <p class="fw-lighter mt-1 mb-2">گروه تخصصی مشاوران وب</p>
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

<script setup>

</script>

<style scoped>
.txt{
  padding-top: 150px;
  text-align: right !important;
}
@media (max-width: 992px) {
  .txt { padding-top: 0px; }
  .txt h1{
    font-size: 75px !important;
  }.txt h3{
    font-size: 45px !important;
  }.txt h5{
    font-size: 30px !important;
  }
   .ss{
     max-width: 250px !important;
   }
}
</style>