<template>

  <div class="row mt-4">

    <div class="col-lg-6 mx-auto" style="margin-top: 150px">
      <div class="card border-0 shadow">
        <div class="card-body pb-5">
          <h6 class="d-inline-block pb-2 mb-2">ورود به سایت</h6>
          <div id="mobileForm">
            <div class="row d-flex justify-content-start" style="padding-right: 11px; padding-left: 11px">
              <div class="col-6">
                <button id="user" @click="selectScope('user')" class="w-100 btn btn-sm btn-primary me-2 mb-2">کارجو
                </button>
              </div>
              <div class="col-6">
                <button id="company" @click="selectScope('company')" class="w-100 btn btn-sm btn-outline-primary me-2 mb-2">
                  کارفرما
                </button>
              </div>

            </div>

            <div class="input-group mt-2 mb-3 px-1">
              <input type="text" class="form-control form-control-sm" minlength="11" maxlength="11" id="mobile"
                     placeholder="شماره موبایل" aria-label="Recipient's username" aria-describedby="button-addon2">
              <button class="btn btn-sm btn-outline-primary" type="button" id="button-addon2" @click="getCode">دریافت کد
                تایید
              </button>

            </div>
            <li v-for="item in message"><small>{{ item }}</small></li>
          </div>


          <div id="codeForm" class="d-none">
            <small>کد تایید به شماره <span class="fw-bold text-primary">{{ mobile }}</span> پیامک شد. لطفا آنرا وارد کنید</small>

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

            <div class="row mt-3" style="padding-right: 11px; padding-left: 11px">
              <div class="col-6">
                <button id="editNumber" @click="editno" class="w-100 btn btn-sm btn-outline-primary me-2 mb-2">تصحیح شماره
                </button>
              </div>
              <div class="col-6">
                <button disabled id="resend" @click="resend" class=" w-100 btn btn-sm btn-outline-primary me-2 mb-2">
                  ارسال مجدد کد
                  <span id="time">{{ time }}</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {ref, onMounted} from 'vue';

export default {
  setup() {
    const scope= ref('user');
    const message= ref([]);
    const mobile = ref();
    const time = ref(59);
    onMounted(() => {
      document.getElementById("code1").value = '';
      document.getElementById("code2").value = '';
      document.getElementById("code3").value = '';
      document.getElementById("code4").value = '';
    });
    const selectScope = (id) => {
     scope.value = id;
      if(id == 'user') {
        document.getElementById('user').classList.add('btn-primary');
            document.getElementById('user').classList.remove('btn-outline-primary');
            document.getElementById('company').classList.remove('btn-primary');
            document.getElementById('company').classList.add('btn-outline-primary');

      }else if (id == 'company'){

            document.getElementById('user').classList.remove('btn-primary');
            document.getElementById('user').classList.add('btn-outline-primary');
            document.getElementById('company').classList.add('btn-primary');
            document.getElementById('company').classList.remove('btn-outline-primary');

      }


    }
    const getCode = () => {

      message.value = [];
       mobile.value = document.getElementById('mobile').value;
      if (mobile.value.length  < 11){
        message.value.push('شماره موبایل باید 11 رقم باشد');
      }
      if(!mobile.value.startsWith('09')){
        message.value.push('شماره موبایل باید با 09 شروع شود');
      }
      if(mobile.value.length === 11 && mobile.value.startsWith('09'))
        message.value = [];
      axios.post('http://127.0.0.1:8000/api/otp/mobile', {
        mobile: document.getElementById('mobile').value,
        scope: scope.value
      }, {progress: false})
          .then((res) => {
            if (res.status === 200) {
              document.getElementById('mobileForm').classList.add('d-none');
              document.getElementById('codeForm').classList.remove('d-none');
            }else{
              // message.value = res;
              console.log(res)
            }
          })
          .then(()=>{
            document.getElementById('resend').setAttribute('disabled', 'disabled')
            counter();
            setTimeout(()=>{
                document.getElementById('resend').removeAttribute('disabled')
            },60000)
          })
          .catch((err) => {
        message.value = err.response.data.message;
      })
    }

    const editno = ()=>{
      document.getElementById('mobileForm').classList.remove('d-none');
      document.getElementById('codeForm').classList.add('d-none');
    }
    const resend = ()=>{

      getCode();
    }
    const counter=()=> {

      var distance = 59;
      var x = null;
      clearInterval(x);
      time.value = 0;
       x = setInterval(function () {

        // document.getElementById("time").classList.remove('d-none');


        distance--;
        time.value = distance;
        var t = time.value  < 10 ? "0" : "";
        document.getElementById("time").innerHTML = t + time.value ;

        if (distance < 1) {
          clearInterval(x);
          // document.getElementById("time").classList.add('d-none');

        }
      }, 1000);

      time.value = 0;
      // if(time.value === 0){
      //   document.getElementById('resend').removeAttribute('disabled')
      // }

    }
    const autoTab = (e) => {
      let code =
          document.getElementById("code1").value +
          document.getElementById("code2").value +
          document.getElementById("code3").value +
          document.getElementById("code4").value;

      if (code.length == 4) {

        axios.post('http://127.0.0.1:8000/api/mobile/login', {
          mobile: document.getElementById('mobile').value,
          scope: scope.value,
          password: document.getElementById("code1").value + document.getElementById("code2").value + document.getElementById("code3").value + document.getElementById("code4").value
        }, {progress: false})
            .then((res) => {
              if (res.status === 200) {
                localStorage.setItem('user',JSON.stringify(res.data.user))
                localStorage.setItem('token',JSON.stringify(res.data.access_token))
                localStorage.setItem('scope',JSON.stringify(res.data.scope))
                localStorage.setItem('expire',JSON.stringify(res.data.expire));
                console.log(localStorage)
                window.location = '/';
              }else{
                console.log(res)
              }
            }).catch((err) => {
          message.value = err.response.data.message;
        })

      }

      if (e.target.value.length === e.target.maxLength) {
        e.target.nextElementSibling?.focus();
      }
    }

    return {
      autoTab, selectScope, getCode, scope, message, mobile, counter, time, resend,editno
    }
  }
}

</script>

<style>

</style>