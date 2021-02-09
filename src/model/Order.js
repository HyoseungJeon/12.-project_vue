
class Order {
    constructor(product_id, member_Id, count, state, address){
        this.order_id = '';
        this.product_id = product_id;
        this.member_id = member_Id;
        this.count = count;
        this.state = state;
        this.address = address;
        this.order_Date = '';
    }
}

export default Order;