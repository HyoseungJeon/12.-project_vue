<template>

<!-- this.member_id = member_id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.join_date = join_date;
        this.address = address;
        this.auth = auth; -->
  <div id="sign-up-form">
      <div id='modify_header' class="info_header">
      <b-button variant="primary"
        @click="onClickToggle" v-show="!modifyStatus">수정하기</b-button>
        <b-button variant="secondary"
        @click="onClickToggle" v-show="modifyStatus">취소</b-button>
        <h1>회원 정보</h1>
        </div>
        <form>
            <b-form-group label="아이디">
                <b-form-input size='lg' type="text" v-model="memberObj.member_id"
                :state="idCheck"
                :disabled="true"></b-form-input>
                <b-form-invalid-feedback :state="idCheck">
                    아이디를 입력해주세요
                </b-form-invalid-feedback>
                <b-form-text>아이디는 변경할 수 없습니다.</b-form-text>
            </b-form-group>

            <b-form-group label="비밀번호">
                <b-form-input size='lg' type="password" v-model="memberObj.password"
                :state="passwordCheck"
                :disabled="!modifyStatus"
                ></b-form-input>
                <b-form-invalid-feedback :state="passwordCheck">
                    패스워드가 다릅니다
                </b-form-invalid-feedback>
                <b-form-text>4~20 글자</b-form-text>
            </b-form-group>

            <b-form-group label="비밀번호 확인"
                v-show="modifyStatus">
                <b-form-input size='lg' type="password" v-model="memberObj.password2"
                :state="passwordCheck"
                ></b-form-input>
                <b-form-invalid-feedback :state="passwordCheck">
                    패스워드가 다릅니다
                </b-form-invalid-feedback>
                <b-form-text>4~20 글자</b-form-text>
            </b-form-group>
            
            <b-form-group label="이름">
                <b-form-input size='lg' type="text" v-model="memberObj.name"
                :state="nameCheck"
                :disabled="!modifyStatus"></b-form-input>
                <b-form-invalid-feedback :state="nameCheck">
                    이름을 입력해주세요
                </b-form-invalid-feedback>
                <b-form-text>홍길동</b-form-text>
            </b-form-group>

            <b-form-group label="이메일">
                <b-form-input size='lg' type="email" v-model="memberObj.email"
                :state="emailCheck"
                :disabled="!modifyStatus"></b-form-input>
                <b-form-invalid-feedback :state="emailCheck">
                    이메일을 입력해주세요
                </b-form-invalid-feedback>
                <b-form-text>plateer1234@plateer.com</b-form-text>
            </b-form-group>

            <b-form-group label="주소">
                <b-form-input size='lg' type="text" v-model="memberObj.address"
                :state="addressCheck"
                :disabled="!modifyStatus"></b-form-input>
                <b-form-invalid-feedback :state="addressCheck">
                    주소를 입력해주세요
                </b-form-invalid-feedback>
                <b-form-text>시, 군, 구, 상세주소</b-form-text>
            </b-form-group>
            
            <b-button id='b-button' variant="primary" size="lg" 
            @click="handelClickMenu('modify-try')"
            v-show="modifyStatus">수정 완료</b-button>
        </form>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            memberObj:{
                member_id:'',
                password :'',
                password2 :'',
                name : '',
                email : '',
                address : '',
            },
            modifyStatus : false
        }
    },
    props:{
        passwordCheck:Boolean,
        idCheck : Boolean,
        passwordSizeCheck : Boolean,
        nameCheck : Boolean,
        emailCheck : Boolean,
        addressCheck : Boolean,
    },
    methods:{
        handelClickMenu:function(menuName){
            this.$emit('onClickMenu',menuName, this.memberObj)
        },
        onClickToggle:function(){
            this.modifyStatus = !this.modifyStatus;
        },
    },
    computed:{
        trigeer(){
            return this.modifyStatus
        }
    },
    watch:{
        "memberObj.member_id":function(){
            this.$emit('onClickMenu', 'update-status','member_id')
        },
        "memberObj.password":function(){
            this.$emit('onClickMenu', 'update-status','password')
        },
        "memberObj.password2":function(){
            this.$emit('onClickMenu','update-status','password2')
        },
        "memberObj.name":function(){
            this.$emit('onClickMenu','update-status','name')
        },
        "memberObj.email":function(){
            this.$emit('onClickMenu','update-status','email')
        },
        "memberObj.address":function(){
            this.$emit('onClickMenu','update-status','address')
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
        padding-left : 25%;
        padding-right : 25%;
    }
    #b-button{
        margin-top: 15px;
        height: 50px;
    }

    #modify_header{
        text-align: right;
        align-content: right;
    }

</style>