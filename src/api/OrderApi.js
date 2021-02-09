import AxiosClient from "./AxiosClient";

class OrderApi {
    constructor(){
        this.client = new AxiosClient('/order');
    }

    async register(order) {
        return this.client.post('/register', order);
    }

    async findClub(clubId) {
        const data = (await this.client.get('/find', {clubId: clubId})).data;
        return data;
    }

    async findByMemberIdAndState(memberId, state) {
        const data = (await this.client.get('/find-by-memberid-and-state', {memberId: memberId, state: state})).data;
        return data;
    }

    async findClubAll() {
        const data = (await this.client.get('/findAll')).data;
        return data;
    }
}

const instance = new OrderApi();

export default instance;