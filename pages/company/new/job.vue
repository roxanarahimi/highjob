<template>

  <div class="row mt-4 ">
    <div class="d-flex  mb-1">
<!--      <h6 class="d-inline-block pb-2 ">فرم رزومه</h6>-->

    </div>
    <div class="col-12 mx-auto mb-1 py-3 px-4" style="height: calc(100vh - 180px); overflow-y: scroll; direction: ltr; overflow-x: hidden">
      <div class="card border-0 shadow-sm" style="direction: rtl">
        <div class="card-body pb-5">
          <div >

            <div class="row">

              <div class="col-lg-8 mx-auto">



                <div class="row">

                  <div class="col-sm-6 mb-1">
                    <input type="text" name="" class="form-control form-control-sm" placeholder="عنوان">
                  </div>
                  <div class="col-sm-6 mb-1">
                    <input type="text" name="" class="form-control form-control-sm" placeholder="اسلاگ">
                  </div>

                </div>
                <h6 class="d-inline-block pb-2 mb-2">درباره شغل</h6>
                <div class="row">
                  <div class="col-sm-12">
                    <textarea id="about" class="form-control mb-1" rows="6"></textarea>
                  </div>
                </div>
                <h6 class="d-inline-block pb-2 mb-2">تحصیلات <span class="cursor-pointer px-2 fw-bolder text-primary"
                                                                style="font-size: 25px" title="افزودن">+</span> </h6>
                <div class="accordion rounded mb-1 border accordion-flush" id="educations_accordion">
                  <div v-for="(item, index) in 2" class="accordion-item">
                    <h2 class="accordion-header" :id="'flush-headingedu'+index">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              :data-bs-target="'#flush-collapseedu'+index" aria-expanded="false"
                              :aria-controls="'flush-collapseedu'+index">
                        رشته
                      </button>
                    </h2>
                    <div :id="'flush-collapseedu'+index" class="accordion-collapse collapse" :aria-labelledby="'flush-headingedu'+index"
                         data-bs-parent="#educations_accordion">
                      <div class="accordion-body">
                        <div class="row  rounded mx-1 p-3">
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="مکان">
                          </div>
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="رشته">
                          </div>

                          <div class="col-sm-3 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="شروع">
                          </div>
                          <div class="col-sm-3 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="پایان">
                          </div>
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="شهر">
                          </div>

                          <div class="col-sm-12 mb-1">
                            <textarea class="form-control mb-1" rows="4"></textarea>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <h6 class="d-inline-block pb-2 mb-2">مهارت ها
                  <span class="cursor-pointer px-2 fw-bolder text-primary" style="font-size: 25px" title="افزودن">+</span>
                </h6>
                <div class="accordion rounded mb-1 border accordion-flush" id="skills_accordion">
                  <div v-for="(item,index) in 3" :key="index" class="accordion-item ">
                    <h2 class="accordion-header" :id="'flush-heading-skill'+index">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              :data-bs-target="'#flush-collapse-skill'+index" aria-expanded="false"
                              :aria-controls="'flush-collapse-skill'+index">
                        مهارت
                      </button>
                    </h2>
                    <div :id="'flush-collapse-skill'+index" class="accordion-collapse collapse" :aria-labelledby="'flush-heading-skill'+index"
                         data-bs-parent="#skills_accordion">
                      <div class="accordion-body">

                        <div class="row rounded mx-1 p-3">
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="عنوان">
                          </div>
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="سطح">
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>

                <h6 class="d-inline-block pb-2 mb-2">زبان ها<span class="cursor-pointer px-2 fw-bolder text-primary"
                                                               style="font-size: 25px" title="افزودن">+</span> </h6>
                <div class="accordion rounded mb-1 border accordion-flush" id="languages_accordion">
                  <div v-for="(item, index) in 1" :key="index" class="accordion-item">
                    <h2 class="accordion-header" :id="'flush-headingLang'+index">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              :data-bs-target="'#flush-collapseLang'+index" aria-expanded="false"
                              :aria-controls="'flush-collapseLang'+index">
                        عنوان
                      </button>
                    </h2>
                    <div :id="'flush-collapseLang'+index" class="accordion-collapse collapse" :aria-labelledby="'flush-headingLang'+index"
                         data-bs-parent="#languages_accordion">
                      <div class="accordion-body">

                        <div class="row  rounded mx-1 p-3">
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="عنوان">
                          </div>
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="سطح">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <h6 class="d-inline-block pb-2 mb-2">لینک ها
                  <span class="cursor-pointer px-2 fw-bolder text-primary" style="font-size: 25px" title="افزودن">+</span>
                </h6>
                <div class="accordion rounded mb-1 border accordion-flush" id="links_accordion">
                  <div v-for="(item, index) in 2" :key="index" class="accordion-item">
                    <h2 class="accordion-header" :id="'flush-heading'+index">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              :data-bs-target="'#flush-collapselink'+index" aria-expanded="false"
                              :aria-controls="'flush-collapselink'+index">
                        عنوان
                      </button>
                    </h2>
                    <div :id="'flush-collapselink'+index" class="accordion-collapse collapse" :aria-labelledby="'flush-headinglink'+index"
                         data-bs-parent="#links_accordion">
                      <div class="accordion-body">

                        <div class="row  rounded mx-1 p-3">
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="عنوان">
                          </div>
                          <div class="col-sm-6 mb-1">
                            <input type="text" name="" class="form-control form-control-sm" placeholder="آدرس">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <h6 class="d-inline-block pb-2 mb-2">شرایط کاری</h6>

                <div class="row">
                  <div class="col-sm-12">
                    <textarea class="form-control mb-1" rows="4"></textarea>
                  </div>
                </div>


                <div>
                  <button class="btn btn-primary mt-3">ذخیره</button>
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

import { ref } from 'vue';
export default {
  setup(){
    const skills = ref([{title: '', level: ''}]);
    const educations = ref([{school: '', degree: '', start: '' , end: '' , city: '', description:''}]);
    const languages = ref([{title: '', level: ''}]);
    const links = ref([{title: '', link: ''}]);



    return{
      skills, educations,languages, links
    }
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