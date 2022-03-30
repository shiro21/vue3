<template lang="ko">
    <div id="login_wrap">
        <section class="login_section">
            <div class="login_title" v-if="!state.account.id">Login</div>
            <div class="login_title" v-else>{{state.account.name}}로그인 되어있음</div>

            <div class="login_input_wrap">
                <div class="item">
                    <input type="text" id="loginId" v-model="state.form.loginId" placeholder="아이디를 입력해주세요." />
                </div>

                <div class="item">
                    <input type="password" id="loginPw" v-model="state.form.loginPw" placeholder="비밀번호를 입력해주세요." />
                </div>

                <div class="item">
                    <div class="item_sub">
                        <input type="checkbox" name="save" id="save" />
                        <label for="save">아이디 저장</label>
                    </div>
                    <div class="item_sub">
                        <button>비밀번호 찾기</button>
                    </div>
                </div>

                <button v-if="!state.account.id" @click="submit()">Login</button>
                <button v-if="state.account.id" @click="logout()">Logout</button>
            </div>
        </section>
    </div>
</template>
<script>
import { reactive } from '@vue/reactivity'
import axios from 'axios'

export default {
  setup() {
    // 현재 로그인 상태인가 ( 로그인 상태체크 )
    const state = reactive({
      account: {
        id: null,
        name: ""
      },
      form: {
        loginId: "",
        loginPw: ""
      }
    })

    const submit = () => {
      const userInfo = {
        loginId: state.form.loginId,
        loginPw: state.form.loginPw
      }
      axios.post("/api/account", userInfo).then((res) => {
        alert('로그인 성공')
        state.account = res.data
      }).catch(() => {
        alert('로그인 실패')
      })
    }

    const logout = () => {
      axios.delete("/api/account").then(() => {
        alert("로그아웃")
        state.account.id = null
        state.account.name = ""
      })
    }

    axios.get("/api/account").then((res) => {
      state.account = res.data
    })

    return { state, submit, logout }
  }
}
</script>
<style lang="scss">
    @import "@/assets/scss/login.scss";
</style>
