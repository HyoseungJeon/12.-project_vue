
class Order {
    constructor(order_id, product_id, member_id, count, state, address, order_Date){
        this.order_id = order_id;
        this.product_id = product_id;
        this.member_id = member_id;
        this.count = count;
        this.state = state;
        this.address = address;
        this.order_Date = order_Date;
    }
}

export default Order;