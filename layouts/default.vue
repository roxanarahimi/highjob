<template>
<div class="container-fluid px-0 ">
<header>

<div class="w-100 d-flex  px-3">
  <NuxtLink to="/" ><h1>HighJob</h1></NuxtLink>
  <ul class="d-flex py-3">
   <li><NuxtLink to="/" >خانه</NuxtLink></li>
    <li><NuxtLink to="/jobs" >جستوجوی مشاغل</NuxtLink></li>
    <li><NuxtLink to="/login" >ورود</NuxtLink></li>
    <li><NuxtLink to="/resume" >رزومه</NuxtLink></li>
  </ul>




</div>
</header>


  <div class="mx-auto px-5 px-xl-2" style="max-width: 1000px;">
    <slot />
  </div>
</div>
</template>

<script setup>

</script>

<style scoped>
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
</style>