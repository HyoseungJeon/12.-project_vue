import AxiosClient from "./AxiosClient";

class ProductApi {
    constructor(){
        this.client = new AxiosClient('/product');
    }

    async register(product) {
        return this.client.post('/register', product);
    }

    async delete(product_id){
        return (await this.client.delete('/remove', {productId : product_id})).data;
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

const instance = new ProductApi();

export default instance;