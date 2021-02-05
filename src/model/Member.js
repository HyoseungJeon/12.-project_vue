
class Member {
    constructor(member_id, name, password, email, join_date, address, auth){
        this.member_id = member_id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.join_date = join_date;
        this.address = address;
        this.auth = auth;
    }

    // memberObj:{
    //     member_id:'',
    //     password :'',
    //     password2 :'',
    //     name : '',
    //     email : '',
    //     address : '',
    // }

}

export default Member;