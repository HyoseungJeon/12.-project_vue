<template>
  <div>
  <sui-modal v-model="signInModalState">
      <sui-modal-header>로그인</sui-modal-header>
      <sui-modal-content image>
        <sui-form>
          <!-- <sui-form-field fluid>
            <label>아이디</label>
            <input placeholder="아이디" fluid v-model="memberLogin.member_id"/>
            <b-form-text>6~20 글자</b-form-text>
          </sui-form-field>
          <sui-form-field fluid>
            <label>비밀번호</label>
            <input placeholder="비밀번호" fluid v-model="memberLogin.password"/>
            <b-form-text>4~20 글자</b-form-text>
          </sui-form-field> -->
          <b-form-group label="아이디">
                <b-form-input size='lg' type="text" 
                ></b-form-input>
                <b-form-invalid-feedback >
                    아이디를 입력해주세요
                </b-form-invalid-feedback>
                <b-form-text>6~20 글자</b-form-text>
            </b-form-group>
            <b-form-group label="비밀번호">
                <b-form-input size='lg' type="password" 
                
                ></b-form-input>
                <b-form-invalid-feedback>
                    패스워드가 다릅니다
                </b-form-invalid-feedback>
                <b-form-text>4~20 글자</b-form-text>
            </b-form-group>

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
    return { 
      open: this.signInModalState,
      memberLogin :{
        member_id : '',
        password : '',
      } 
    };
  },
  props:{
    testmsg:String,
    signInModalState:Boolean,
  },
  methods: {
    toggle() {
      this.$emit('onSignInModalStatus','signin-try',this.memberLogin)
    },
    onClickOutPage(){
      this.open=false;
      this.$emit('onSignInModalStatus','signin-outBoundary',this.open)
    },
    onClickPage(){
      console.log("click page")
    }
  },
}
</script>

<style>
  #signIn_form{
    height: auto;
  }
  .modal { position: relative;} or #myModal { position: relative;}
</style>