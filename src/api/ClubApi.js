import AxiosClient from "./AxiosClient";

class ClubApi {
    constructor(){
        this.client = new AxiosClient('/api/club');
    }

    async register(club) {
        return this.client.post('/register', club);
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

const instance = new ClubApi();

export default instance;