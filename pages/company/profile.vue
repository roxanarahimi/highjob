<template>

  <div class="row mt-4 ">
    <div class="col-12 mx-auto mb-1 py-3 px-4"
         style="height: calc(100vh - 180px); overflow-y: scroll; direction: ltr; overflow-x: hidden">
      <div class="card border-0 shadow-sm" style="direction: rtl">
        <div class="card-body pb-5">
          <div>

            <div class="row">

              <div class="col-lg-8 mx-auto">


                <h6 class="fw-bold">اطلاعات اوپراتور</h6>
<!--                <div class=" mb-1">-->
<!--                  <img src="../../public/images/avatar.png" class="border rounded" height="80">-->
<!--                </div>-->
                <div class="row">

                  <div class="col-sm-6 mb-1">
                    <input type="text" :value="user.name" class="form-control form-control-sm" placeholder="نام">
                  </div>
                  <div class="col-sm-6 mb-1">
                    <input type="text" :value="user.last_name" class="form-control form-control-sm" placeholder="نام خانوادگی">
                  </div>
                  <div class="col-sm-6 mb-1">
                    <input type="text" :value="user.mobile" class="form-control form-control-sm" placeholder="موبایل">
                  </div>
                  <div class="col-sm-6 mb-1">
                    <input type="text" :value="user.email" class="form-control form-control-sm" placeholder="ایمیل">
                  </div>


                  <h6 class="fw-bold mt-5">اطلاعات شرکت</h6>
                  <div class=" mb-1">
                    <img src="../../public/images/b.jpg" class="border rounded" height="80">
                  </div>
                  <div class="col-sm-6 mb-1 ">
                    <input type="text" :value="user.company.title" class="form-control form-control-sm" placeholder="نام شرکت">
                  </div>
                  <div class="col-sm-6 mb-1 ">
                    <input type="text" :value="user.company.id_number" class="form-control form-control-sm" placeholder="شماره ثبت">
                  </div>

                  <div class="col-sm-6 mb-1 ">
                    <input type="text" :value="user.company.manager" class="form-control form-control-sm" placeholder="نام مدیر">
                  </div>

                  <div class="col-sm-6 mb-1 ">
                    <input type="text" :value="user.company.manager_mobile" class="form-control form-control-sm" placeholder="موبایل مدیر">
                  </div>
                  <div class="col-sm-6 mb-1 ">
                    <input type="text" :value="user.company.telephone" class="form-control form-control-sm" placeholder="تلفن">
                  </div>
                  <div class="col-sm-6 mb-1 ">
                    <input type="text" :value="user.company.email" class="form-control form-control-sm" placeholder="ایمیل">
                  </div>
                  <div class="col-sm-6 mb-1 ">
                    <input type="text" :value="user.company.address" class="form-control form-control-sm" placeholder="ادرس">
                  </div>

<!--                  <div class="col-sm-6 mb-1">-->
<!--                    <input type="text" :value="user.company.city.state" class="form-control form-control-sm" placeholder="استان">-->
<!--                  </div>-->
<!--                  <div class="col-sm-6 mb-1">-->
<!--                    <input type="text" :value="user.company.city" class="form-control form-control-sm" placeholder="شهر">-->
<!--                  </div>-->

                </div>
                <h6 class="d-inline-block pb-2 mb-2">درباره شرکت</h6>
                <div class="row">
                  <div class="col-sm-12">
                    <textarea class="form-control mb-1" rows="6"></textarea>
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
export default {
  data(){
    return {
      user: JSON.parse(localStorage.getItem('user'))
    }
  },
  mounted() {
    console.log(this.user)
    console.log(localStorage)
  }
}
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