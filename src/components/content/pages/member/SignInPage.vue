<template>

<!-- this.member_id = member_id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.join_date = join_date;
        this.address = address;
        this.auth = auth; -->
  <div id="sign-up-form">
      <div id='logo'>
          <img src='@/assets/images/H_icon.png' width="150" height="150">
      </div>
      
        <form>
            <b-form-group label="아이디">
                <b-form-input size='lg' type="text" v-model="memberObj.member_id"
                :state="idCheck"></b-form-input>
                <b-form-invalid-feedback :state="idCheck">
                    아이디를 입력해주세요
                </b-form-invalid-feedback>
                <b-form-text>6~20 글자</b-form-text>
            </b-form-group>
            <b-form-group label="비밀번호">
                <b-form-input size='lg' type="password" v-model="memberObj.password"
                :state="passwordCheck"
                ></b-form-input>
                <b-form-invalid-feedback :state="passwordCheck">
                    패스워드가 다릅니다
                </b-form-invalid-feedback>
                <b-form-text>4~20 글자</b-form-text>
                <sui-form-field>
                <sui-checkbox label="아이디 저장" />
            </sui-form-field>
            </b-form-group>
            <sui-button id='#b-button' fluid primary>
                로그인
            </sui-button>
            <sui-divider />
            <sui-button id='#b-button' fluid >
                회원가입
            </sui-button>
        </form>
    </div>
</template>

<script>
export default {
    name:'SignInPage',
    data:function(){
        return {
            memberObj:{
                member_id:'',
                password :'',
            }
        }
    },
    props:{
        passwordCheck:Boolean,
        idCheck : Boolean,
    },
    methods:{
        handelClickMenu:function(menuName){
            this.$emit('onClickMenu',menuName, this.memberObj)
        }
    },
    watch:{
        "memberObj.member_id":function(){
            this.$emit('onClickMenu', 'update-status','member_id')
        },
        "memberObj.password":function(){
            this.$emit('onClickMenu', 'update-status','password')
        },
    }
}
</script>

<style scoped>
    h1, h2 {
        text-align: center;
        margin: 10px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    a {
        color: #42b983;
    }

    .btn-lg {
        width: 100%;
    }
    #sign-up-form{
        padding-left : 35%;
        padding-right : 35%;
    }
    #b-button{
        margin-top: 15px;
        height: 50px;
    }
    #logo{
        align-content: center;
        text-align: center;
        margin-bottom: 30px;
    }

</style>