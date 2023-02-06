<template>

  <div class="row mt-4">

    <div class="col-lg-6 mx-auto" style="margin-top: 150px">
      <div class="card border-0 shadow">
        <div class="card-body pb-5">
          <h6 class="d-inline-block pb-2 mb-2">ورود به سایت</h6>
          <div id="mobileForm">
            <div class="row d-flex justify-content-start" style="padding-right: 11px; padding-left: 11px">
              <div class="col-6">
                <button id="joo" @click="selectScope('joo')" class="w-100 btn btn-sm btn-primary me-2 mb-2">کارجو
                </button>
              </div>
              <div class="col-6">
                <button id="farma" @click="selectScope('farma')" class="w-100 btn btn-sm btn-outline-primary me-2 mb-2">
                  کارفرما
                </button>
              </div>

            </div>

            <div class="input-group mt-2 mb-3 px-1">
              <input type="text" class="form-control  form-control-sm" minlength="11" maxlength="11"
                     placeholder="شماره موبایل" aria-label="Recipient's username" aria-describedby="button-addon2">
              <button class="btn btn-sm btn-outline-primary" type="button" id="button-addon2" @click="getCode">دریافت کد
                تایید
              </button>

            </div>
            <small>{{ message }}</small>
          </div>


          <div id="codeForm" class="d-none">
            <small>کد تایید به موبایل شما پیامک شد. لطفا آنرا وارد کنید</small>

            <div class="d-flex justify-content-between mt-3" dir="ltr">
              <input type="text" id="code1" @input="autoTab($event)"
                     class="form-control form-control-sm mx-1 text-center" minlength="1" maxlength="1">
              <input type="text" id="code2" @input="autoTab($event)"
                     class="form-control form-control-sm mx-1 text-center" minlength="1" maxlength="1">
              <input type="text" id="code3" @input="autoTab($event)"
                     class="form-control form-control-sm mx-1 text-center" minlength="1" maxlength="1">
              <input type="text" id="code4" @input="autoTab($event)"
                     class="form-control form-control-sm mx-1 text-center" minlength="1" maxlength="1">
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {onMounted} from 'vue';

export default {
  setup() {
    onMounted(() => {
      document.getElementById("code1").value = '';
      document.getElementById("code2").value = '';
      document.getElementById("code3").value = '';
      document.getElementById("code4").value = '';
    });
    const selectScope = (id) => {

    }
    const getCode = () => {

      axios.post('http://127.0.0.1:8000/api/otp/mobile', {mobile: '09190691798', scope: 'user'}, {progress: false})
          .then((res) => {
            if (res.status === 200) {
              document.getElementById('mobileForm').classList.add('d-none');
              document.getElementById('codeForm').classList.remove('d-none');
            }
          }).catch((err) => {
        console.log(err)
      })


    }
    const autoTab = (e) => {
      let code =
          document.getElementById("code1").value +
          document.getElementById("code2").value +
          document.getElementById("code3").value +
          document.getElementById("code4").value;

      if (code.length == 4) {

        axios.post('http://127.0.0.1:8000/api/mobile/login', {
          mobile: '09190691798', scope: 'user',
          password: document.getElementById("code1").value + document.getElementById("code2").value + document.getElementById("code3").value + document.getElementById("code4").value
        }, {progress: false})
            .then((res) => {
              if (res.status === 200) {
                window.location = '/';
              }
            }).catch((err) => {
          console.log(err)
        })

      }

      if (e.target.value.length === e.target.maxLength) {
        e.target.nextElementSibling?.focus();
      }
    }

    return {
      autoTab, selectScope, getCode
    }
  }
}

</script>

<style>

</style>