<template>
  <div id="signIn_form">
    <sui-modal v-model="signInModalState">
      <sui-modal-header>로그인</sui-modal-header>
      <sui-modal-content image>
        <sui-form>
    <sui-form-field fluid>
      <label>아이디</label>
      <input  placeholder="아이디" fluid/>
    </sui-form-field>
    <sui-form-field fluid>
      <label>비밀번호</label>
      <input placeholder="비밀번호" fluid/>
    </sui-form-field>
    <sui-form-field>
      <sui-checkbox label="아이디 저장" />
    </sui-form-field>
  </sui-form>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button fluid positive @click.native="toggle">
          로그인
        </sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
export default {
  name:'signInModal',
  data() {
    return { open: false };
  },
  props:{
    testmsg:String,
    signInModalState:Boolean,
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
}
</script>

<style>
  #signIn_form{
    align-content: center;
  }
</style>