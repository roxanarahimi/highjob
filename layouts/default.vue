<template>
<div class="container-fluid px-0 ">
<header>

<div class="d-flex mx-auto justify-content-between" style="max-width: 1000px;" >
 <div class="d-flex  px-md-3">
   <NuxtLink class="d-none d-md-block"  to="/" ><h1 style="color: black !important;">HighJob</h1></NuxtLink>
   <ul class="d-flex py-3">
     <li><NuxtLink to="/" >خانه</NuxtLink></li>
     <li><NuxtLink to="/jobs" >جستوجوی مشاغل</NuxtLink></li>
     <li><NuxtLink to="/resume-maker" >رزومه ساز</NuxtLink></li>
   </ul>
 </div>

 <div class="d-flex justify-content-end">
   <ul class="pe-2 py-3">
     <li><NuxtLink class="btn btn-primary text-light" to="/login" >ورود/ ثبت نام</NuxtLink></li>
   </ul>
 </div>





</div>
</header>

<div class="clearfix"></div>
  <div class="mx-auto px-2 px-xl-2" style="max-width: 1000px;">
    <slot />
  </div>
</div>
</template>

<script setup>

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
.router-link-active:not(.btn-primary), .router-link-exact-active:not(.btn-primary), a:hover{
  color: #ff6262 !important;

}
.col-6, .col-3, .col-4, .col-xxl-4,
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
input, textarea , select{
  /*border: none;*/
  /*background-color: whitesmoke;*/
  border: #ececec 1px solid !important;

}

.btn:focus, .btn:active:focus, .btn.active:focus,
button:focus, button:active:focus, button.active:focus

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
</style>