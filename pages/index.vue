<template>
  <div>
    <div class="row flex-row-reverse">
      <div class="col-sm-6 txt" >
        <h1 style="font-size: 100px;text-align: left !important">شغل</h1>
        <h3 style="font-size: 60px;text-align: left !important">رویاهاتو </h3>
        <h5 style="font-size: 35px;text-align: left !important">اینجا پیدا کن </h5>
      </div>
      <div class="col-sm-6">
        <img class="ss" src="../public/images/a.png" style="max-width: 400px" alt="">
      </div>
    </div>

    <div class="row">
      <div class="col-12 mx-auto ">
        <div class="card border-0 shadow">
          <div class="card-body pb-md-5">
            <div class="form">
              <form action="">
                <h5 class="d-inline-block  pb-2 mb-3">جستجو کنید</h5>
                <div class="row">
                  <div class="col-12 col-md-10">
                 <div class="row">
                   <div class="col-sm-6 col-md-3 mb-2">
                     <input type="text" v-model="title" placeholder="عنوان شغلی" class="form-control form-control-sm">
                   </div>
                   <div class="col-sm-6 col-md-3 mb-2">
                     <input type="text" v-model="category" placeholder="گروه شغلی" class="form-control form-control-sm">
                   </div>
                   <div class="col-sm-6 col-md-3 mb-2">
                     <input type="text" v-model="state" placeholder="استان" class="form-control form-control-sm">
                   </div>
                   <div class="col-sm-6 col-md-3 mb-2">
                     <input type="text" v-model="city" placeholder="شهر" class="form-control form-control-sm">
                   </div>
                 </div>
               </div>
                  <div class="col-12 col-md-2">
                    <router-link :to="{path:'/jobs', props:{ title: title, category: category, state: state, city: city}}"  class="btn btn-sm w-100 mt-1  btn-primary ">برو</router-link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script >
import Def from '../layouts/default'
export default {
  data(){
    return {
      title:'',
      category:'',
      state:'',
      city:'',
    }
  },
  mounted() {
  }

}
    </script>

<style>

@media (min-width: 577px) {
  .txt{
    padding-top: 150px !important;
    text-align: right !important;
  }
@media (max-width: 576px) {
  .txt h1{
    font-size: 60px !important;
  }
  .txt h3{
    font-size: 35px !important;
  }
  .txt h5{
    font-size: 22px !important;
  }
  .ss{
    padding-top: 0 !important;
    max-width: 210px !important;
   }
}

}
</style>