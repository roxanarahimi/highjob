<template>
<div class="container-fluid px-0 ">
<header>

<div class="d-md-flex mx-auto justify-content-between" style="max-width: 1000px;" >
 <div class="d-flex  px-3">
   <NuxtLink class="d-none d-md-block"  to="/" ><h1 style="color: black !important;">HighJob</h1></NuxtLink>
   <ul class="d-flex py-3">
     <li><NuxtLink to="/" >خانه</NuxtLink></li>
     <li><NuxtLink to="/jobs" >جستوجوی مشاغل</NuxtLink></li>
     <li><NuxtLink to="/resume-maker" >رزومه ساز</NuxtLink></li>
   </ul>
 </div>

 <div class="px-3">
   <ul class=" py-3">
     <li><NuxtLink class="btn btn-primary text-light" to="/login" style="float:left;" >ورود/ ثبت نام</NuxtLink></li>
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