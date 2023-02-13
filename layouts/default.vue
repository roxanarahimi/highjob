<template>
<div class="container-fluid px-0 ">
<header>

<nav class="d-flex mx-auto justify-content-between" style="max-width: 1000px;" >
 <div class="d-flex px-0 px-md-3">
   <NuxtLink class="d-none d-md-block"  to="/" ><h1 style="color: black !important;">HighJob</h1></NuxtLink>
   <ul class="d-flex py-3 px-0">
     <li><NuxtLink to="/" >خانه</NuxtLink></li>
     <li><NuxtLink to="/jobs" >جستوجوی مشاغل</NuxtLink></li>
     <li class=""><NuxtLink to="/resume-maker" >رزومه ساز</NuxtLink></li>
     <li><NuxtLink to="/articles" >مطالب</NuxtLink></li>
   </ul>
 </div>

 <div class="d-flex justify-content-end">
<!--   <ul class="pe-2 ps-0 py-3">-->
<!--     <li><NuxtLink class="btn btn-primary text-light" to="/login" >ورود/ ثبت نام</NuxtLink></li>-->
<!--   </ul>-->
   <!-- Example single danger button -->


   <div>
     <div class="btn-group pe-2">
       <button type="button" class="btn btn-primary btn-sm mt-2 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
         <span class="bi bi-person-fill mx-1"></span>
         <span class="d-none d-sm-inline-block">رکسانا رحیمی</span>
       </button>
       <ul class="dropdown-menu">
         <li v-if="scope === 'company'"  class="d-sm-none"><p class="fw-bold px-3 mb-2" href="#">رکسانا رحیمی</p></li>
         <li v-if="scope === 'company'" ><NuxtLink to="/company/profile" class="dropdown-item" href="#">پروفایل</NuxtLink></li>
         <li v-if="scope === 'company'" ><NuxtLink to="/company/new/job" class="dropdown-item" href="#">ایجاد فرصت شغلی</NuxtLink></li>
         <li v-if="scope === 'company'" ><NuxtLink to="/company/jobs" class="dropdown-item" href="#">فرصت های شغلی من</NuxtLink></li>
         <li v-if="scope === 'company'" ><NuxtLink to="/company/resumes" class="dropdown-item" href="#">رزومه های دریافتی</NuxtLink></li>

         <li v-if="scope === 'user'" ><NuxtLink to="/resume-maker" class="dropdown-item" href="#">رزومه ساز</NuxtLink></li>
         <li v-if="scope === 'user'"><NuxtLink to="/resume" class="dropdown-item" href="#">رزومه من</NuxtLink></li>
         <li v-if="scope === 'user'"><NuxtLink to="/requests" class="dropdown-item" href="#">درخواست های ارسال شده</NuxtLink></li>
         <li><hr class="dropdown-divider"></li>
         <li><a class="dropdown-item" href="#">خروج</a></li>
       </ul>
     </div>
   </div>
 </div>

</nav>
</header>

<div class="clearfix"></div>
  <div class="mx-auto px-2 px-xl-2" style="max-width: 1000px;">
    <slot />
  </div>
</div>
</template>

<script>
import {onMounted, ref} from 'vue';
import {onBeforeRouteUpdate} from "nuxt/app";
export default {
  setup(){
    const user = ref({})
    const token = ref('')
    const scope = ref('')
    const expire = ref('')

    onMounted(()=>{
      console.log(localStorage)
      user.value = JSON.parse(localStorage.getItem('user'));
      token.value = JSON.parse(localStorage.getItem('token'));
      scope.value = JSON.parse(localStorage.getItem('scope'));
      expire.value = JSON.parse(localStorage.getItem('expire'));

      console.log(scope.value)
      console.log('aa',user.value)

    })


    return{
      user,token,scope,expire,
    }
  },
  updated() {

    console.log('aa',this.user)
  },
  mounted() {

    console.log('aa',this.user)
  }
}
</script>

<style>
@font-face {
  font-family: 'IranSans';
  src: url('../public/fonts/IRANSansWeb/IRANSansWeb.eot?#') format('eot'),  /* IE6–8 */
  url('../public/fonts/IRANSansWeb/IRANSansWeb.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
  url('../public/fonts/IRANSansWeb/IRANSansWeb.ttf') format('truetype');  /* Saf3—5, Chrome4+, FF3.5, Opera 10+ */}

body{
  direction: rtl !important;
  text-align: right !important;
  overflow-x: hidden;
  font-family: 'IranSans';
}

::-webkit-scrollbar {
  width: 7px;
  height: 4px;
  cursor: pointer !important;
  background-color: transparent !important;
}

/* Track */
::-webkit-scrollbar-track {
  /*box-shadow: inset 0 0 5px grery;*/
  /*border-radius: 10px;*/
  cursor: pointer !important;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(255, 98, 98, 0.46);
  border-radius: 10px;
  cursor: pointer !important;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 98, 98, 0.8);
  cursor: pointer !important;

}

.btn-primary{
  background-color: #ff6262;
  border-color: #ff6262;
}
.btn-primary{
  background-color: #ff6262;
  border-color: #ff6262;
  color: white !important;

}
.btn-primary:focus, .btn-primary:hover{
  background-color: #ff6262;
  border-color: #ff6262;
  color: white !important;
}
.btn-outline-primary {
  color: #ff6262;
  border-color: #ff6262;
}
.btn-outline-primary:hover {
  background-color: #ff6262;
  border-color: #ff6262;

}
.text-primary{
  color: #ff6262 !important;
}
.router-link-active:not(.btn-primary), .router-link-exact-active:not(.btn-primary), a:hover , .btn:disabled{
  color: #ff6262 !important;

}
.col-6, .col-3, .col-4, .col-xxl-4,.col-sm-4, .col-sm-2, .col-sm-3, .col-sm-12,.col-sm-2,.col-md-2,
.col-sm-6,
.col-lg-3{
  padding: 5px !important;
}
ul li{
  list-style: none;

}
ul li a, a{
  text-decoration: none;
  color: black;
  font-size: 15px;
  font-weight: 500;
  padding-right: 10px;
  padding-left: 10px;

}
@media(max-width: 792px) {
 nav div ul li a,nav div .btn-sm{
    font-size: 13px !important;
  }
}
input, textarea , select{
  /*border: none;*/
  /*background-color: whitesmoke;*/
  border: #ececec 1px solid !important;

}

.btn:focus, .btn:active:focus, .btn.active:focus,
button:focus, button:active:focus, button.active:focus,
input:focus,select:focus, textarea:focus

{
  outline:none !important;
box-shadow:none !important;
}
.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
.accordion-body{
  padding: 0px !important;
}
.dropdown-item:focus{
  background-color: whitesmoke !important;
}

</style>