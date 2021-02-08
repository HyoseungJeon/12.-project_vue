import AxiosClient from "./AxiosClient";

class MemberApi {
    constructor(){
        this.client = new AxiosClient('/member');
    }

    async register(member) {
        return this.client.post('/register', member);
    }

    async find(memberId) {
        const data = (await this.client.get('/find', {memberId: memberId})).data;
        return data;
    }

    async modify(member){
        return this.client.put('/update', member);
    }

    async findClubByNameLike(name) {
        const data = (await this.client.get('/findByNameLike', {name: name})).data;
        return data;
    }

    async findClubAll() {
        const data = (await this.client.get('/findAll')).data;
        return data;
    }
}

const instance = new MemberApi();

export default instance;