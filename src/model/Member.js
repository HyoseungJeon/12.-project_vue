
class Member {
    constructor(member_id, name, password, email, address){
        this.member_id = member_id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.join_date = '';
        this.address = address;
        this.auth = '';
    }

    // memberObj:{
    //     member_id:'',
    //     password :'',
    //     password2 :'',
    //     name : '',
    //     email : '',
    //     address : '',
    // }
    static toMember(memberObj){
        return new Member(
            memberObj.member_id,
            memberObj.name,
            memberObj.password,
            memberObj.email,
            memberObj.address,
        );
    }
}

export default Member;