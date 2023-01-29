<template>

  <div class="row mt-4">

    <div class="col-4 mb-3">
      <div class="card border-0 shadow">
        <div class="card-body pb-5">
          <h6 class="d-inline-block pb-2 mb-2">تصویر</h6>

        </div>
      </div>
    </div>
    <div class="col-8 mb-3">
      <div class="card border-0 shadow">
        <div class="card-body pb-5">
          <h6 class="d-inline-block pb-2 mb-2">درباره من</h6>

          <textarea class="form-control" rows="8"></textarea>
        </div>
      </div>
    </div>
    <div class="col-12 mb-3">
      <div class="card border-0 shadow">
        <div class="card-body pb-5">
          <h6 class="d-inline-block pb-2 mb-2">تحصیلات</h6>
          <div v-for="item in 3" class="row">
            <div class="col-4 mb-3">
              <input type="text" name="" class="form-control form-control-sm" placeholder="مقطع">
            </div>
            <div class="col-4 mb-3">
              <input type="text" name="" class="form-control form-control-sm" placeholder="رشته">
            </div>
            <div class="col-4 mb-3">
              <input type="text" name="" class="form-control form-control-sm" placeholder="نمره">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 mb-3">
      <div class="card border-0 shadow">
        <div class="card-body pb-5">
          <h6 class="d-inline-block pb-2 mb-2">مهارت ها</h6>
          <div v-for="item in 3" class="row">
            <div class="col-4 mb-3">
              <input type="text" name="" class="form-control form-control-sm" placeholder="عنوان">
            </div>
            <div class="col-4 mb-3">
              <input type="text" name="" class="form-control form-control-sm" placeholder="سطح">
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="col-12 mb-3">
      <div class="card border-0 shadow">
        <div class="card-body pb-5">
          <h6 class="d-inline-block pb-2 mb-2">سابقه کار</h6>
          <div v-for="item in 3" class="row">
            <div class="col-3 mb-3">
              <input type="text" name="" class="form-control form-control-sm" placeholder="نام شرکت">
            </div>
            <div class="col-3 mb-3">
              <input type="text" name="" class="form-control form-control-sm" placeholder="عنوان شغلی">
            </div>
            <div class="col-3 mb-3">
              <input type="text" name="" class="form-control form-control-sm" placeholder="تاریخ شروع">
            </div>
            <div class="col-3 mb-3">
              <input type="text" name="" class="form-control form-control-sm" placeholder="تاریخ پایان">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 mb-3">
      <div class="card border-0 shadow">
        <div class="card-body pb-5">
          <h6 class="d-inline-block pb-2 mb-2">مدارک و افتخارات</h6>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

</style>