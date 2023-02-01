<template>
<div class="container-fluid px-0 ">
<header>

<div class="d-flex mx-auto justify-content-between" style="max-width: 1000px;" >
 <div class="d-flex  px-3">
   <NuxtLink to="/" ><h1>HighJob</h1></NuxtLink>
   <ul class="d-flex py-3">
     <li><NuxtLink to="/" >خانه</NuxtLink></li>
     <li><NuxtLink to="/jobs" >جستوجوی مشاغل</NuxtLink></li>
     <li><NuxtLink to="/resume" >رزومه</NuxtLink></li>
   </ul>
 </div>

 <div class="px-3">

   <ul class="d-flex py-3">
     <li><NuxtLink class="btn btn-primary" to="/login" >ورود/ ثبت نام</NuxtLink></li>
   </ul>
 </div>





</div>
</header>


  <div class="mx-auto px-5 px-xl-2" style="max-width: 1000px;">
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
</style>