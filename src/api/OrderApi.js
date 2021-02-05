import AxiosClient from "./AxiosClient";

class OrderApi {
    constructor(){
        this.client = new AxiosClient('/api/order');
    }

    async register(member) {
        return this.client.post('/register', member);
    }

    async findClub(clubId) {
        const data = (await this.client.get('/find', {clubId: clubId})).data;
        return data;
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

const instance = new OrderApi();

export default instance;